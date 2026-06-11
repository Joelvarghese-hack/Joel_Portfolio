"use client";

import type { CSSProperties, ReactNode } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { useCardTilt } from "@/lib/motion";

type PathNodeProps = {
  id: string;
  children: ReactNode;
  /** Whether this panel is a node on the desktop path. */
  isNode?: boolean;
  /** Fixed Y position of the node on the path, as a fraction of stage height. */
  nodeY?: number;
  /** Where the path anchors relative to the card. */
  anchor?: "left" | "right" | "in-right";
  /** Marks the hero panel: full viewport width, no card chrome, no tilt. */
  hero?: boolean;
  /** Marks the panel whose node spawns the route polyline. */
  routeBranch?: boolean;
  /** Card width in horizontal mode at tablet (md) and desktop (lg). */
  cardMd?: string;
  cardLg?: string;
  /** Extra horizontal gap after this panel in horizontal mode. */
  gap?: string;
  /** Renders the path's destination marker at the card's right edge. */
  destination?: boolean;
  /** Accessible label for unlabelled sections. */
  ariaLabel?: string;
};

const CARD_CHROME =
  "relative rounded-2xl border border-paper/10 bg-[#15151B]/95 p-6 md:p-7 lg:p-8 " +
  "shadow-[0_30px_70px_-32px_rgba(139,30,45,0.5)]";

export default function PathNode({
  id,
  children,
  isNode = false,
  nodeY = 0.5,
  anchor = "left",
  hero = false,
  routeBranch = false,
  cardMd = "420px",
  cardLg = "560px",
  gap,
  destination = false,
  ariaLabel,
}: PathNodeProps) {
  const tilt = useCardTilt();

  const style = {
    "--card-w": cardMd,
    "--card-l": cardLg,
    ...(gap ? { "--panel-gap": gap } : {}),
  } as CSSProperties;

  return (
    <section
      id={id}
      data-stage-panel
      data-path-node={isNode ? "" : undefined}
      data-node-y={isNode ? nodeY : undefined}
      data-anchor={isNode ? anchor : undefined}
      data-hero={hero ? "" : undefined}
      data-route-branch={routeBranch ? "" : undefined}
      aria-label={ariaLabel}
      style={style}
      className={
        hero
          ? "relative flex min-h-[100svh] items-center px-[clamp(24px,8vw,140px)] py-20"
          : "relative px-6 py-14 md:py-20"
      }
    >
      <span className="mline" aria-hidden="true">
        <span className="mline-track" />
        <span className="mline-fill" />
        <span className="mline-dot" />
      </span>
      {destination && <span className="dest-marker" data-destination aria-hidden="true" />}
      <div data-reveal className={hero ? "hero-fade w-full" : "w-full"}>
        {hero ? (
          <div data-node-card className="mx-auto w-full max-w-2xl md:mx-0">
            {children}
          </div>
        ) : (
          <LazyMotion features={domAnimation} strict>
            <m.div
              data-node-card
              style={tilt.style}
              {...tilt.handlers}
              className={`${CARD_CHROME} mx-auto w-full max-w-xl md:max-w-2xl`}
            >
              {children}
            </m.div>
          </LazyMotion>
        )}
      </div>
    </section>
  );
}
