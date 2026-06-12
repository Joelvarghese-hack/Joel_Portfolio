"use client";

import { useEffect, useState } from "react";

/** Fixed scroll-to-top button, every page. Appears after 600px of scroll. */
export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (window.__lenis && !reduce) window.__lenis.scrollTo(0, { duration: 1 });
    else window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-paper/15 bg-ink text-paper shadow-lg transition-all duration-300 hover:bg-velocity-red hover:border-velocity-red ${
        visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"
      }`}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
        <path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
