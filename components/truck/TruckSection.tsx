"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import dynamic from "next/dynamic";

const TruckScene = dynamic(() => import("@/components/truck/TruckScene"), { ssr: false });

const SECTION_VH = 4.3;
const TRAVEL_VH = SECTION_VH - 1;

const MILESTONES = [
  {
    num: "01",
    title: "Consult",
    body: "Tell us what you're moving, where from, and where to. Five minutes on the phone or the form below is all it takes.",
    t: 0.2,
    side: "left",
  },
  {
    num: "02",
    title: "Plan",
    body: "We map the route, the crew size, and the equipment before moving day. No guesswork, no surprises at the door.",
    t: 0.45,
    side: "right",
  },
  {
    num: "03",
    title: "Quote",
    body: "One fixed price, locked in writing before we touch a box. Priced by the space you use, not the weight.",
    t: 0.7,
    side: "left",
  },
  {
    num: "04",
    title: "Schedule",
    body: "Pick the date and we handle the rest. You'll know exactly when we arrive and when you're done.",
    t: 0.95,
    side: "right",
  },
] as const;

/* Converts a scroll-progress threshold into the card's resting position in
   the tall section, so the truck visually reaches the card as it reveals. */
function cardTop(t: number): string {
  return `${(((TRAVEL_VH * t + 0.5) / SECTION_VH) * 100).toFixed(2)}%`;
}

export default function TruckSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef(0);
  const [mounted3d, setMounted3d] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const mq = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    if (!mq.matches) return;

    section.dataset.truck = "on";
    let cancelled = false;
    let trigger: { kill(): void } | undefined;
    const cards = Array.from(section.querySelectorAll<HTMLElement>(".milestone"));

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.4,
        onUpdate(self) {
          progressRef.current = self.progress;
          for (const card of cards) {
            const threshold = parseFloat(card.dataset.t ?? "0");
            if (self.progress >= threshold - 0.06) card.classList.add("is-passed");
          }
        },
      });
    })();

    // Mount the 3D chunk only after the rest of the page is interactive.
    const mountWhenIdle = () => {
      if (cancelled) return;
      if ("requestIdleCallback" in window) {
        requestIdleCallback(() => !cancelled && setMounted3d(true), { timeout: 2500 });
      } else {
        setTimeout(() => !cancelled && setMounted3d(true), 700);
      }
    };
    if (document.readyState === "complete") mountWhenIdle();
    else window.addEventListener("load", mountWhenIdle, { once: true });

    // Pause the render loop when the section is off screen.
    const io = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), {
      rootMargin: "25% 0px",
    });
    io.observe(section);

    return () => {
      cancelled = true;
      trigger?.kill();
      io.disconnect();
      window.removeEventListener("load", mountWhenIdle);
      delete section.dataset.truck;
    };
  }, []);

  return (
    <section ref={sectionRef} className="truck-section" aria-label="Our Process">
      <h2 className="px-6 pb-10 pt-16 text-center text-3xl font-extrabold tracking-tight text-paper md:pt-20 md:text-4xl">
        Our Process
      </h2>

      <div className="truck-stage" aria-hidden="true">
        {mounted3d && <TruckScene progress={progressRef} active={active} />}
      </div>

      <ol className="milestones">
        {MILESTONES.map((milestone) => (
          <li
            key={milestone.num}
            className="milestone"
            data-t={milestone.t}
            data-side={milestone.side}
            style={{ "--mt": cardTop(milestone.t) } as CSSProperties}
          >
            <span className="text-3xl font-extrabold leading-none text-amber-pulse" aria-hidden="true">
              {milestone.num}
            </span>
            <h3 className="mt-2 text-lg font-bold text-paper">{milestone.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-paper/65">{milestone.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
