"use client";

import { useEffect, useRef, type ReactNode } from "react";
import PathCanvas, { type PathCanvasHandle, type StageGeometry } from "@/components/scroll/PathCanvas";
import type { LenisHandle } from "@/lib/lenis";

type Mode = "horizontal" | "vertical";

/**
 * Pinned horizontal scroll stage, Vektor-style. Server-rendered markup is a
 * plain vertical stack so the page reads fully without JavaScript; GSAP,
 * ScrollTrigger and Lenis are lazy-loaded on the client and take over on
 * viewports >= 768px when motion is allowed.
 */
export default function HorizontalStage({ children }: { children: ReactNode }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<PathCanvasHandle>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const track = trackRef.current;
    if (!stage || !track) return;

    let cancelled = false;
    let mm: gsap.MatchMedia | undefined;
    let lenisHandle: LenisHandle | null = null;
    let removeClickListener: (() => void) | undefined;

    const setup = async () => {
      const [{ gsap }, { ScrollTrigger }, lenisModule] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("@/lib/lenis"),
      ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);
      lenisHandle = lenisModule.initLenis(gsap, ScrollTrigger);

      const runtime: {
        mode: Mode;
        scrollTrigger: ScrollTrigger | null;
      } = { mode: "vertical", scrollTrigger: null };

      mm = gsap.matchMedia();

      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        stage.dataset.mode = "horizontal";
        runtime.mode = "horizontal";

        let geometry: StageGeometry | null = null;
        const revealState = new Map<string, boolean>();

        const travel = () => Math.max(track.scrollWidth - window.innerWidth, 1);

        const render = (progress: number) => {
          if (!pathRef.current || !geometry) return;
          const drawn = pathRef.current.setProgress(progress);
          for (const item of geometry.items) {
            const on = item.id === "hero" || drawn >= item.len - 1;
            if (revealState.get(item.id) === on) continue;
            revealState.set(item.id, on);
            gsap.to(item.el, {
              autoAlpha: on ? 1 : 0,
              scale: on ? 1 : 0.95,
              duration: on ? 0.65 : 0.3,
              ease: "power2.out",
              overwrite: "auto",
            });
          }
        };

        const build = () => {
          geometry = pathRef.current?.build(stage, track) ?? null;
          if (!geometry) return;
          for (const item of geometry.items) {
            if (item.id === "hero") continue;
            if (!revealState.get(item.id)) {
              gsap.set(item.el, { autoAlpha: 0, scale: 0.95, transformOrigin: "50% 60%" });
            }
          }
          // Cards taller than the stage scroll internally; hand their wheel
          // events back to the browser so that inner scroll stays reachable.
          track.querySelectorAll<HTMLElement>("[data-node-card]").forEach((card) => {
            if (card.scrollHeight > card.clientHeight + 4) {
              card.setAttribute("data-lenis-prevent", "");
            } else {
              card.removeAttribute("data-lenis-prevent");
            }
          });
        };

        const tween = gsap.to(track, {
          x: () => -travel(),
          ease: "none",
          scrollTrigger: {
            trigger: stage,
            start: "top top",
            end: () => `+=${travel()}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onRefresh: (self) => {
              build();
              render(self.progress);
            },
            onUpdate: (self) => render(self.progress),
          },
        });

        runtime.scrollTrigger = tween.scrollTrigger ?? null;
        build();
        render(runtime.scrollTrigger?.progress ?? 0);

        const refresh = () => ScrollTrigger.refresh();
        const resizeObserver = new ResizeObserver(() => refresh());
        resizeObserver.observe(track);
        document.fonts?.ready.then(() => {
          if (runtime.mode === "horizontal") refresh();
        });

        return () => {
          resizeObserver.disconnect();
          runtime.scrollTrigger = null;
          runtime.mode = "vertical";
          if (geometry) {
            const els = geometry.items.map((item) => item.el);
            gsap.killTweensOf(els);
            gsap.set(els, { clearProps: "all" });
          }
          revealState.clear();
          pathRef.current?.clear();
          delete stage.dataset.mode;
        };
      });

      mm.add("(max-width: 767px) and (prefers-reduced-motion: no-preference)", () => {
        stage.dataset.mode = "vertical";
        runtime.mode = "vertical";

        const panels = Array.from(stage.querySelectorAll<HTMLElement>("[data-stage-panel]"));
        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-inview");
                observer.unobserve(entry.target);
              }
            }
          },
          { threshold: 0.01, rootMargin: "0px 0px -12% 0px" }
        );
        panels.forEach((panel) => observer.observe(panel));

        return () => {
          observer.disconnect();
          delete stage.dataset.mode;
        };
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        stage.dataset.mode = "vertical";
        runtime.mode = "vertical";
        stage
          .querySelectorAll<HTMLElement>("[data-stage-panel]")
          .forEach((panel) => panel.classList.add("is-inview"));
        return () => {
          delete stage.dataset.mode;
        };
      });

      // Anchor navigation: in horizontal mode an anchor's position lives on
      // the X axis, so translate it back into a vertical scroll target.
      const onClick = (event: MouseEvent) => {
        const link = (event.target as Element | null)?.closest?.('a[href^="#"]');
        if (!link) return;
        const id = link.getAttribute("href")?.slice(1);
        if (!id) return;
        const target = document.getElementById(id);
        if (!target) return;
        event.preventDefault();

        const st = runtime.scrollTrigger;
        if (runtime.mode === "horizontal" && st) {
          const travelNow = Math.max(track.scrollWidth - window.innerWidth, 1);
          const desiredX = Math.min(
            Math.max(target.offsetLeft - (window.innerWidth - target.offsetWidth) / 2, 0),
            travelNow
          );
          const y = st.start + (desiredX / travelNow) * (st.end - st.start);
          if (lenisHandle) lenisHandle.lenis.scrollTo(y, { duration: 1.4 });
          else window.scrollTo({ top: y });
        } else if (lenisHandle) {
          lenisHandle.lenis.scrollTo(target, { offset: -80 });
        } else {
          target.scrollIntoView();
        }

        history.pushState(null, "", `#${id}`);
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      };
      document.addEventListener("click", onClick);
      removeClickListener = () => document.removeEventListener("click", onClick);
    };

    setup();

    return () => {
      cancelled = true;
      removeClickListener?.();
      mm?.revert();
      lenisHandle?.destroy();
    };
  }, []);

  return (
    <div ref={stageRef} data-stage>
      <div ref={trackRef} className="stage-track">
        <PathCanvas ref={pathRef} />
        {children}
      </div>
    </div>
  );
}
