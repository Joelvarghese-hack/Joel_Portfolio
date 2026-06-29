"use client";

import { useEffect } from "react";
import type { LenisHandle } from "@/lib/lenis";

declare global {
  interface Window {
    __lenis?: LenisHandle["lenis"] | null;
  }
}

/**
 * Lazily boots Lenis and keeps GSAP ScrollTrigger in sync with it.
 * Skipped entirely under prefers-reduced-motion. Also smooths same-page
 * anchor navigation while leaving cross-page links to Next.js.
 */
export default function SmoothScroll() {
  useEffect(() => {
    let handle: LenisHandle | null = null;
    let cancelled = false;
    let removeClickListener: (() => void) | undefined;

    (async () => {
      const [{ gsap }, { ScrollTrigger }, { initLenis }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("@/lib/lenis"),
      ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);
      handle = initLenis(gsap, ScrollTrigger);
      window.__lenis = handle?.lenis ?? null;

      const onClick = (event: MouseEvent) => {
        const link = (event.target as Element | null)?.closest?.('a[href^="#"]');
        if (!link) return;
        const id = link.getAttribute("href")?.slice(1);
        const target = id ? document.getElementById(id) : null;
        if (!target) return;
        event.preventDefault();
        if (handle) handle.lenis.scrollTo(target, { offset: -84 });
        else target.scrollIntoView();
        history.pushState(null, "", `#${id}`);
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      };
      document.addEventListener("click", onClick);
      removeClickListener = () => document.removeEventListener("click", onClick);
    })();

    return () => {
      cancelled = true;
      removeClickListener?.();
      handle?.destroy();
      window.__lenis = null;
    };
  }, []);

  return null;
}
