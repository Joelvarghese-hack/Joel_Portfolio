import Lenis from "lenis";

type GsapLike = {
  ticker: {
    add(fn: (time: number) => void): void;
    remove(fn: (time: number) => void): void;
    lagSmoothing(threshold: number): void;
  };
};

type ScrollTriggerLike = {
  update(): void;
};

export type LenisHandle = {
  lenis: Lenis;
  destroy(): void;
};

export function initLenis(gsap: GsapLike, ScrollTrigger: ScrollTriggerLike): LenisHandle | null {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return null;
  }

  const lenis = new Lenis({ lerp: 0.12 });
  const update = () => ScrollTrigger.update();
  lenis.on("scroll", update);

  const raf = (time: number) => lenis.raf(time * 1000);
  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);

  return {
    lenis,
    destroy() {
      gsap.ticker.remove(raf);
      lenis.destroy();
    },
  };
}
