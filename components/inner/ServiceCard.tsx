"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { cardHover } from "@/lib/motion";

type ServiceCardProps = {
  title: string;
  price: string;
  description: string;
};

export default function ServiceCard({ title, price, description }: ServiceCardProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      <m.article
        {...cardHover}
        className="rounded-2xl border border-paper/10 bg-[#15151B]/95 p-6"
      >
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="text-lg font-bold text-paper">{title}</h2>
          <span className="whitespace-nowrap text-sm font-semibold text-amber-pulse">{price}</span>
        </div>
        <p className="mt-2.5 text-sm leading-relaxed text-paper/65">{description}</p>
      </m.article>
    </LazyMotion>
  );
}
