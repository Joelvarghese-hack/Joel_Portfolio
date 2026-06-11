"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { pressable } from "@/lib/motion";

const TRUST_PILLS = [
  "Licensed and Insured",
  "2+ Years Experience",
  "80+ Moves Completed",
  "Upfront Pricing",
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const press = reduceMotion ? {} : pressable;

  return (
    <LazyMotion features={domAnimation} strict>
      <div>
        <h1 className="text-[clamp(2.6rem,6.5vw,4.9rem)] font-extrabold leading-[1.02] tracking-tight text-paper">
          Stress Free Moving Experience
        </h1>
        <p className="mt-5 text-lg text-paper/90 md:text-xl">Moving, made simple.</p>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-paper/65 md:text-base">
          Relocations across Ontario, from Kingston to Toronto, Ottawa, and
          beyond. Upfront pricing, careful hands, zero stress.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <m.a
            {...press}
            href="#quote"
            className="inline-flex items-center justify-center rounded-full bg-velocity-red px-7 py-3.5 text-sm font-bold text-paper transition-colors hover:bg-crimson-shadow md:text-base"
          >
            Get My Free Quote
          </m.a>
          <m.a
            {...press}
            href="tel:+16137701638"
            className="inline-flex items-center justify-center rounded-full border border-paper/25 px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:border-amber-pulse hover:text-amber-pulse md:text-base"
          >
            Call (613) 770-1638
          </m.a>
        </div>

        <ul className="mt-8 flex flex-wrap gap-2">
          {TRUST_PILLS.map((pill) => (
            <li
              key={pill}
              className="rounded-full border border-paper/15 px-3.5 py-1.5 text-xs text-paper/70"
            >
              {pill}
            </li>
          ))}
        </ul>
      </div>
    </LazyMotion>
  );
}
