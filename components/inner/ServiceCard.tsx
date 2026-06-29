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
        className="rounded-2xl border border-cloud bg-paper p-6 transition-shadow hover:shadow-lg"
      >
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="text-lg font-extrabold text-ink">{title}</h2>
          <span className="whitespace-nowrap rounded-full bg-green-soft px-2.5 py-1 text-xs font-bold text-green-deep">
            {price}
          </span>
        </div>
        <p className="mt-2.5 text-sm leading-relaxed text-ink/60">{description}</p>
      </m.article>
    </LazyMotion>
  );
}
