"use client";

import { useMemo, useRef, type MutableRefObject } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useSpring, animated } from "@react-spring/three";
import { damp } from "maath/easing";

export type ProgressRef = MutableRefObject<number>;

const RED = "#E63946";
const CRIMSON = "#8B1E2D";
const AMBER = "#F4A261";
const GOLD = "#C9A961";
const NAVY = "#1A2B4A";
const PAPER = "#F5F1E8";

const TILT = -0.42;

/* The road: mostly vertical, slight rightward lean, three subtle curves. */
const CURVE = new THREE.CatmullRomCurve3(
  [
    [-0.5, 2.6],
    [0.55, -2.4],
    [-0.65, -7.6],
    [0.85, -13.0],
    [0.25, -17.8],
    [0.75, -21.6],
  ].map(([x, y]) => new THREE.Vector3(x, y, 0)),
  false,
  "catmullrom",
  0.5
);

function offsetCurve(offset: number): THREE.CatmullRomCurve3 {
  const points: THREE.Vector3[] = [];
  const normal = new THREE.Vector3();
  for (let i = 0; i <= 120; i++) {
    const t = i / 120;
    const tangent = CURVE.getTangentAt(t);
    normal.set(-tangent.y, tangent.x, 0).normalize();
    points.push(CURVE.getPointAt(t).addScaledVector(normal, offset));
  }
  return new THREE.CatmullRomCurve3(points);
}

const TRAIL_VERTEX = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

/* Bright at the truck, falling off to fully transparent at the start. */
const TRAIL_FRAGMENT = /* glsl */ `
  uniform float uProgress;
  uniform vec3 uColor;
  uniform float uIntensity;
  uniform float uAlpha;
  varying vec2 vUv;
  void main() {
    float u = vUv.x;
    if (u > uProgress || uProgress < 0.003) discard;
    float fade = pow(smoothstep(0.0, max(uProgress, 0.001), u), 1.6);
    gl_FragColor = vec4(uColor * uIntensity, fade * uAlpha);
  }
`;

function makeTrailMaterial(color: string, intensity: number, alpha: number) {
  return new THREE.ShaderMaterial({
    vertexShader: TRAIL_VERTEX,
    fragmentShader: TRAIL_FRAGMENT,
    uniforms: {
      uProgress: { value: 0 },
      uColor: { value: new THREE.Color(color) },
      uIntensity: { value: intensity },
      uAlpha: { value: alpha },
    },
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
}

function useBlobShadowTexture(): THREE.Texture {
  return useMemo(() => {
    const size = 128;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d")!;
    const gradient = ctx.createRadialGradient(64, 64, 4, 64, 64, 62);
    gradient.addColorStop(0, "rgba(0,0,0,0.5)");
    gradient.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);
}

function Road() {
  const lines = useMemo(() => {
    const left = new THREE.TubeGeometry(offsetCurve(-0.32), 220, 0.02, 6, false);
    const right = new THREE.TubeGeometry(offsetCurve(0.32), 220, 0.02, 6, false);
    return [left, right];
  }, []);
  return (
    <group>
      {lines.map((geometry, i) => (
        <mesh key={i} geometry={geometry}>
          <meshBasicMaterial color={PAPER} transparent opacity={0.15} depthWrite={false} />
        </mesh>
      ))}
    </group>
  );
}

/* Truck plus trail share one spring so the beam stays glued to the truck. */
function Journey({ progress }: { progress: ProgressRef }) {
  const truck = useRef<THREE.Group>(null);
  const shadowTexture = useBlobShadowTexture();
  const lastTarget = useRef(-1);
  const [{ p }, api] = useSpring(() => ({
    p: 0,
    config: { tension: 120, friction: 14 },
  }));

  const trailGeometries = useMemo(
    () => [
      new THREE.TubeGeometry(CURVE, 260, 0.045, 8, false),
      new THREE.TubeGeometry(CURVE, 260, 0.105, 8, false),
    ],
    []
  );
  const trailMaterials = useMemo(
    () => [makeTrailMaterial(RED, 2.4, 1.0), makeTrailMaterial(AMBER, 1.15, 0.55)],
    []
  );

  useFrame((state) => {
    const target = THREE.MathUtils.clamp(progress.current, 0, 1);
    if (Math.abs(target - lastTarget.current) > 1e-4) {
      lastTarget.current = target;
      api.start({ p: target });
    }

    const sp = THREE.MathUtils.clamp(p.get(), 0, 1);
    for (const material of trailMaterials) {
      material.uniforms.uProgress.value = sp;
    }

    const group = truck.current;
    if (!group) return;
    const position = CURVE.getPointAt(sp);
    const tangent = CURVE.getTangentAt(sp);
    const t = state.clock.elapsedTime;

    // Engine idle: gentle bob plus a half-degree heading jitter so the truck
    // never feels frozen while scroll is paused.
    const bob = Math.sin(t * Math.PI * 2 * 0.4) * 0.05;
    const jitter =
      (Math.sin(t * 1.7) * 0.6 + Math.sin(t * 2.9 + 1.3) * 0.4) * 0.5 * (Math.PI / 180);

    group.position.set(position.x, position.y, 0.13 + bob);
    group.rotation.set(0, 0, Math.atan2(-tangent.x, -tangent.y) + jitter);
  });

  return (
    <group>
      <mesh geometry={trailGeometries[0]} material={trailMaterials[0]} />
      <mesh geometry={trailGeometries[1]} material={trailMaterials[1]} />

      <group ref={truck}>
        {/* soft fake ambient occlusion under the truck */}
        <mesh position={[0, 0.05, -0.1]}>
          <circleGeometry args={[0.55, 24]} />
          <meshBasicMaterial map={shadowTexture} transparent depthWrite={false} />
        </mesh>

        {/* trailer */}
        <RoundedBox args={[0.5, 0.8, 0.34]} radius={0.05} smoothness={3} position={[0, 0.22, 0.17]}>
          <meshStandardMaterial color={RED} roughness={0.55} metalness={0.1} />
        </RoundedBox>
        {/* cab */}
        <RoundedBox args={[0.46, 0.32, 0.26]} radius={0.06} smoothness={3} position={[0, -0.42, 0.13]}>
          <meshStandardMaterial color={GOLD} roughness={0.45} metalness={0.15} />
        </RoundedBox>
        {/* windshield */}
        <mesh position={[0, -0.31, 0.245]}>
          <boxGeometry args={[0.38, 0.07, 0.05]} />
          <meshStandardMaterial color={NAVY} roughness={0.2} metalness={0.4} />
        </mesh>
        {/* wheels */}
        {[0.46, 0.06, -0.42].map((y) =>
          [-0.27, 0.27].map((x) => (
            <mesh key={`${x}-${y}`} position={[x, y, 0.07]} rotation={[0, Math.PI / 2, 0]}>
              <cylinderGeometry args={[0.085, 0.085, 0.06, 14]} />
              <meshStandardMaterial color="#141417" roughness={0.9} />
            </mesh>
          ))
        )}
        {/* headlights, emissive so bloom picks them up */}
        {[-0.15, 0.15].map((x) => (
          <mesh key={x} position={[x, -0.59, 0.12]}>
            <boxGeometry args={[0.07, 0.04, 0.05]} />
            <meshBasicMaterial color={[3.2, 2.7, 1.9]} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

function DestinationPin() {
  const end = CURVE.getPointAt(1);
  const { rot } = useSpring({
    from: { rot: 0 },
    to: { rot: Math.PI * 2 },
    loop: true,
    config: { duration: 8000 },
  });

  return (
    <animated.group position={[end.x, end.y, 0.62]} rotation-z={rot}>
      <mesh position={[0, 0, -0.22]} rotation={[-Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.19, 0.48, 18]} />
        <meshStandardMaterial color={RED} emissive={CRIMSON} emissiveIntensity={0.45} roughness={0.4} />
      </mesh>
      <mesh position={[0, 0, 0.12]}>
        <sphereGeometry args={[0.17, 20, 16]} />
        <meshStandardMaterial color={RED} emissive={CRIMSON} emissiveIntensity={0.45} roughness={0.4} />
      </mesh>
      {/* small bright stud so the slow rotation reads */}
      <mesh position={[0.12, 0, 0.16]}>
        <sphereGeometry args={[0.045, 10, 8]} />
        <meshBasicMaterial color={[2.4, 2.0, 1.4]} toneMapped={false} />
      </mesh>
    </animated.group>
  );
}

/* Camera rig: follows the raw scroll progress along the curve with maath
   damping, while the truck itself follows a spring, so fast scrolls let the
   truck drift then settle. */
function CameraRig({ progress, children }: { progress: ProgressRef; children: React.ReactNode }) {
  const rig = useRef<THREE.Group>(null);
  const tiltEuler = useMemo(() => new THREE.Euler(TILT, 0, 0), []);
  const focus = useMemo(() => new THREE.Vector3(), []);

  useFrame((_, delta) => {
    const group = rig.current;
    if (!group) return;
    const p = THREE.MathUtils.clamp(progress.current, 0, 1);
    focus.copy(CURVE.getPointAt(p)).applyEuler(tiltEuler);
    damp(group.position, "x", -focus.x * 0.55, 0.22, delta);
    damp(group.position, "y", -focus.y - 0.35, 0.18, delta);
    damp(group.position, "z", -focus.z, 0.18, delta);
  });

  return (
    <group ref={rig}>
      <group rotation={[TILT, 0, 0]}>{children}</group>
    </group>
  );
}

export default function TruckScene({
  progress,
  active,
}: {
  progress: ProgressRef;
  active: boolean;
}) {
  return (
    <Canvas
      frameloop={active ? "always" : "never"}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ fov: 35, position: [0, 0, 9], near: 0.1, far: 60 }}
      style={{ position: "absolute", inset: 0 }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.75} />
      <directionalLight position={[4, 6, 8]} intensity={1.5} />
      <directionalLight position={[-5, -3, 6]} intensity={0.45} color="#9FB3DD" />

      <CameraRig progress={progress}>
        <Road />
        <Journey progress={progress} />
        <DestinationPin />
      </CameraRig>

      <EffectComposer multisampling={0}>
        <Bloom luminanceThreshold={0.6} luminanceSmoothing={0.25} intensity={0.8} mipmapBlur />
      </EffectComposer>
    </Canvas>
  );
}
