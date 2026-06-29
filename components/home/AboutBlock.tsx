import Link from "next/link";
import { asset } from "@/lib/asset";
import Reveal from "@/components/scroll/Reveal";

export default function AboutBlock() {
  return (
    <section className="px-6 py-16 md:py-24">
      <Reveal className="mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[2.5rem] bg-green px-6 py-10 text-white md:px-12 md:py-14 lg:grid-cols-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
            About our company
          </span>
          <h2 className="display mt-4 text-[clamp(1.9rem,4.5vw,3rem)] text-white">
            Bitlane Relocations
          </h2>
          <p className="mt-4 max-w-md text-white/85">
            We started in Kingston in 2022 with one truck and a simple promise:
            moving day should be the easiest day of your move, not the hardest.
            Since then we have completed more than 80 moves across Ontario and
            into Québec, all licensed, insured, and fixed-price.
          </p>
          <Link
            href="/about"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
          >
            About Bitlane
          </Link>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="overflow-hidden rounded-[2rem] border-4 border-white/20 shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/img/grid2.jpg")}
              alt="A Bitlane crew member on moving day"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
