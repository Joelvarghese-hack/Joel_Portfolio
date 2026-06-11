import type { ReactNode } from "react";

type ServiceTileProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function ServiceTile({ icon, title, description }: ServiceTileProps) {
  return (
    <article className="rounded-xl border border-paper/[0.08] bg-paper/[0.03] p-4">
      <span className="text-amber-pulse" aria-hidden="true">
        {icon}
      </span>
      <h3 className="mt-2.5 text-sm font-bold text-paper md:text-base">{title}</h3>
      <p className="mt-1.5 text-xs leading-relaxed text-paper/65 md:text-sm">
        {description}
      </p>
    </article>
  );
}
