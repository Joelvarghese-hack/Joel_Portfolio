"use client";

import { useEffect, useMemo, useState } from "react";
import { useMotionValue, useSpring, type MotionValue } from "framer-motion";

const TILT_MEDIA =
  "(min-width: 768px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

export type CardTilt = {
  style: {
    rotateX: MotionValue<number>;
    rotateY: MotionValue<number>;
    transformPerspective: number;
  };
  handlers: {
    onMouseMove: (event: React.MouseEvent<HTMLElement>) => void;
    onMouseLeave: () => void;
  };
};

/**
 * 3D tilt on hover for the node cards. Active only on desktop pointers,
 * never on touch, never under prefers-reduced-motion.
 */
export function useCardTilt(maxDegrees = 5): CardTilt {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(TILT_MEDIA);
    const sync = () => setEnabled(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);
  const rotateX = useSpring(rotateXRaw, { stiffness: 180, damping: 20, mass: 0.4 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 180, damping: 20, mass: 0.4 });

  return useMemo(
    () => ({
      style: { rotateX, rotateY, transformPerspective: 900 },
      handlers: {
        onMouseMove(event: React.MouseEvent<HTMLElement>) {
          if (!enabled) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          const px = (event.clientX - bounds.left) / bounds.width - 0.5;
          const py = (event.clientY - bounds.top) / bounds.height - 0.5;
          rotateYRaw.set(px * maxDegrees * 2);
          rotateXRaw.set(-py * maxDegrees * 2);
        },
        onMouseLeave() {
          rotateXRaw.set(0);
          rotateYRaw.set(0);
        },
      },
    }),
    [enabled, maxDegrees, rotateX, rotateY, rotateXRaw, rotateYRaw]
  );
}

/** Shared hover and press micro-interaction for CTA buttons. */
export const pressable = {
  whileHover: { scale: 1.04 },
  whileTap: { scale: 0.97 },
  transition: { type: "spring", stiffness: 400, damping: 22 },
} as const;
