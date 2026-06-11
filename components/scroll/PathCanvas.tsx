"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";

export type StageGeometry = {
  total: number;
  /** Panels with reveal targets, with the path length at which each activates. */
  items: { id: string; len: number; el: HTMLElement }[];
};

export type PathCanvasHandle = {
  build(stage: HTMLElement, track: HTMLElement): StageGeometry | null;
  /** Maps stage progress (0 to 1) to drawn path length and paints it. */
  setProgress(progress: number): number;
  clear(): void;
};

const SVG_NS = "http://www.w3.org/2000/svg";
const ROUTE_CITIES = ["Kingston", "Toronto", "Ottawa", "Montréal"];
const ROUTE_SHAPE: [number, number][] = [
  [0, 0],
  [150, -90],
  [310, -30],
  [470, -120],
];

function offsetWithin(el: HTMLElement, ancestor: HTMLElement): { x: number; y: number } {
  let x = 0;
  let y = 0;
  let node: HTMLElement | null = el;
  while (node && node !== ancestor) {
    x += node.offsetLeft;
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return { x, y };
}

type BuiltState = {
  total: number;
  /** Sampled x positions along the path, index i maps to length (i / N) * total. */
  xsByLength: number[];
  lenAtX(x: number): number;
  viewportWidth: number;
  travel: number;
  dots: { el: SVGGElement; len: number }[];
  branchLen: number | null;
  arrived: boolean;
};

const PathCanvas = forwardRef<PathCanvasHandle, object>(function PathCanvas(_, ref) {
  const svgRef = useRef<SVGSVGElement>(null);
  const built = useRef<BuiltState | null>(null);

  useImperativeHandle(ref, () => ({
    build(stage, track) {
      const svg = svgRef.current;
      if (!svg) return null;

      const mainPath = svg.querySelector<SVGPathElement>("[data-main]");
      const dotsGroup = svg.querySelector<SVGGElement>("[data-dots]");
      const branchGroup = svg.querySelector<SVGGElement>("[data-branch]");
      if (!mainPath || !dotsGroup || !branchGroup) return null;

      const stageHeight = stage.clientHeight;
      const trackWidth = track.scrollWidth;
      svg.setAttribute("viewBox", `0 0 ${trackWidth} ${stageHeight}`);
      svg.style.width = `${trackWidth}px`;
      svg.style.height = `${stageHeight}px`;

      const panels = Array.from(track.querySelectorAll<HTMLElement>("[data-stage-panel]"));
      const nodePanels = panels.filter((p) => p.dataset.pathNode !== undefined);
      if (nodePanels.length < 2) return null;

      const anchors = nodePanels.map((panel) => {
        const card = panel.querySelector<HTMLElement>("[data-node-card]") ?? panel;
        const { x } = offsetWithin(card, track);
        const width = card.offsetWidth;
        const kind = panel.dataset.anchor ?? "left";
        let ax: number;
        if (kind === "right") {
          ax = x + width + 16;
        } else if (kind === "in-right") {
          ax = x + width - 32;
        } else {
          ax = x - 40;
        }
        const ay = parseFloat(panel.dataset.nodeY ?? "0.5") * stageHeight;
        return { id: panel.id, x: ax, y: ay, kind, panel, card };
      });

      let d = `M ${anchors[0].x} ${anchors[0].y}`;
      for (let i = 1; i < anchors.length; i++) {
        const from = anchors[i - 1];
        const to = anchors[i];
        const dx = (to.x - from.x) * 0.45;
        d += ` C ${from.x + dx} ${from.y}, ${to.x - dx} ${to.y}, ${to.x} ${to.y}`;
      }
      mainPath.setAttribute("d", d);

      const total = mainPath.getTotalLength();
      mainPath.style.strokeDasharray = `${total}`;
      mainPath.style.strokeDashoffset = `${total}`;

      const SAMPLES = 720;
      const xsByLength: number[] = [];
      for (let i = 0; i <= SAMPLES; i++) {
        xsByLength.push(mainPath.getPointAtLength((i / SAMPLES) * total).x);
      }
      const lenAtX = (x: number): number => {
        if (x <= xsByLength[0]) return 0;
        if (x >= xsByLength[SAMPLES]) return total;
        let lo = 0;
        let hi = SAMPLES;
        while (lo < hi) {
          const mid = (lo + hi) >> 1;
          if (xsByLength[mid] < x) lo = mid + 1;
          else hi = mid;
        }
        return (lo / SAMPLES) * total;
      };

      // Node dots: amber fill with an amber-deep ring. The quote node uses the
      // DOM destination marker instead.
      dotsGroup.innerHTML = "";
      const dots: BuiltState["dots"] = [];
      for (const anchor of anchors) {
        if (anchor.kind === "in-right") continue;
        const group = document.createElementNS(SVG_NS, "g");
        group.setAttribute("class", "path-dot");
        const halo = document.createElementNS(SVG_NS, "circle");
        halo.setAttribute("cx", String(anchor.x));
        halo.setAttribute("cy", String(anchor.y));
        halo.setAttribute("r", "14");
        halo.setAttribute("fill", "none");
        halo.setAttribute("stroke", "var(--amber-deep)");
        halo.setAttribute("stroke-opacity", "0.35");
        halo.setAttribute("stroke-width", "2");
        const core = document.createElementNS(SVG_NS, "circle");
        core.setAttribute("cx", String(anchor.x));
        core.setAttribute("cy", String(anchor.y));
        core.setAttribute("r", "6.5");
        core.setAttribute("fill", "var(--amber-pulse)");
        core.setAttribute("stroke", "var(--amber-deep)");
        core.setAttribute("stroke-width", "3");
        group.append(halo, core);
        dotsGroup.append(group);
        dots.push({ el: group, len: lenAtX(anchor.x) });
      }

      // Route branch: Kingston to Toronto to Ottawa to Montreal, joining the
      // main path at the Service Area node and animating dashes on a loop.
      branchGroup.innerHTML = "";
      branchGroup.classList.remove("on");
      let branchLen: number | null = null;
      const areaIndex = anchors.findIndex((a) => a.panel.dataset.routeBranch !== undefined);
      if (areaIndex !== -1) {
        const area = anchors[areaIndex];
        const next = anchors[areaIndex + 1];
        const available = next
          ? next.x - area.x - 120
          : trackWidth - area.x - 160;
        const scale = Math.max(0.5, Math.min(1, available / 540));
        const points = ROUTE_SHAPE.map(([dx, dy]) => [area.x + dx * scale, area.y + dy * scale]);
        const pointsAttr = points.map(([x, y]) => `${x},${y}`).join(" ");

        const base = document.createElementNS(SVG_NS, "polyline");
        base.setAttribute("class", "branch-base");
        base.setAttribute("points", pointsAttr);
        const dash = document.createElementNS(SVG_NS, "polyline");
        dash.setAttribute("class", "branch-dash");
        dash.setAttribute("points", pointsAttr);
        branchGroup.append(base, dash);

        points.forEach(([x, y], i) => {
          const city = document.createElementNS(SVG_NS, "circle");
          city.setAttribute("cx", String(x));
          city.setAttribute("cy", String(y));
          city.setAttribute("r", "4.5");
          city.setAttribute("fill", "var(--amber-pulse)");
          city.setAttribute("stroke", "var(--amber-deep)");
          city.setAttribute("stroke-width", "2");
          const label = document.createElementNS(SVG_NS, "text");
          label.setAttribute("class", "branch-label");
          label.setAttribute("x", String(x));
          label.setAttribute("y", String(y - 14));
          label.setAttribute("text-anchor", "middle");
          label.textContent = ROUTE_CITIES[i];
          branchGroup.append(city, label);
        });

        branchLen = lenAtX(area.x);
      }

      const viewportWidth = window.innerWidth;
      const travel = Math.max(trackWidth - viewportWidth, 1);

      built.current = {
        total,
        xsByLength,
        lenAtX,
        viewportWidth,
        travel,
        dots,
        branchLen,
        arrived: false,
      };

      // Every panel reveals once the path tip passes its card's left edge.
      const items: StageGeometry["items"] = [];
      for (const panel of panels) {
        const reveal = panel.querySelector<HTMLElement>("[data-reveal]");
        if (!reveal) continue;
        const card = panel.querySelector<HTMLElement>("[data-node-card]") ?? panel;
        const len = lenAtX(offsetWithin(card, track).x);
        items.push({ id: panel.id, len, el: reveal });
      }

      return { total, items };
    },

    setProgress(progress) {
      const state = built.current;
      const svg = svgRef.current;
      if (!state || !svg) return 0;

      // The drawn tip tracks a point near the right side of the viewport so
      // the line always leads the content into view.
      const tipX = progress * state.travel + state.viewportWidth * 0.8;
      const drawn = Math.min(state.lenAtX(tipX), state.total);

      const mainPath = svg.querySelector<SVGPathElement>("[data-main]");
      if (mainPath) {
        mainPath.style.strokeDashoffset = String(Math.max(state.total - drawn, 0));
      }

      for (const dot of state.dots) {
        dot.el.classList.toggle("on", drawn >= dot.len - 1);
      }

      const branchGroup = svg.querySelector<SVGGElement>("[data-branch]");
      if (branchGroup && state.branchLen !== null) {
        branchGroup.classList.toggle("on", drawn >= state.branchLen - 1);
      }

      if (!state.arrived && drawn >= state.total - 2) {
        state.arrived = true;
        document.querySelector("[data-destination]")?.classList.add("is-arrived");
      }

      return drawn;
    },

    clear() {
      built.current = null;
      const svg = svgRef.current;
      if (!svg) return;
      const mainPath = svg.querySelector<SVGPathElement>("[data-main]");
      mainPath?.removeAttribute("d");
      if (mainPath) {
        mainPath.style.strokeDasharray = "";
        mainPath.style.strokeDashoffset = "";
      }
      const dotsGroup = svg.querySelector<SVGGElement>("[data-dots]");
      const branchGroup = svg.querySelector<SVGGElement>("[data-branch]");
      if (dotsGroup) dotsGroup.innerHTML = "";
      if (branchGroup) {
        branchGroup.innerHTML = "";
        branchGroup.classList.remove("on");
      }
    },
  }));

  return (
    <svg ref={svgRef} className="path-canvas" aria-hidden="true" focusable="false">
      <path data-main className="path-main" />
      <g data-dots />
      <g data-branch className="path-branch" />
    </svg>
  );
});

export default PathCanvas;
