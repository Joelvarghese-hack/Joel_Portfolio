import { asset } from "@/lib/asset";
import Reveal from "@/components/scroll/Reveal";
import Icon from "@/components/ui/Icon";

const POINTS = [
  "Priced by volume, not weight, so heavy furniture never costs extra.",
  "Every quote is fixed in writing before we touch a single box.",
  "One trained, in-house crew handles your move start to finish.",
];

export default function ReliableMovers() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <div className="absolute -inset-3 rotate-2 rounded-[2.5rem] bg-green-soft" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/img/boxes.jpg")}
              alt="Neatly stacked moving boxes ready for transport"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2">
          <h2 className="display text-[clamp(1.9rem,4.5vw,3rem)] text-ink">
            Reliable full-service movers
          </h2>
          <p className="mt-4 text-ink/65">
            Moving is stressful enough. We take the whole job off your plate:
            packing, wrapping, loading, driving, unloading, and reassembly, all
            handled by the same crew that quoted you. No brokers, no surprises.
          </p>
          <ul className="mt-6 grid gap-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm font-medium text-ink/80">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green text-white">
                  <Icon name="check" width={13} height={13} strokeWidth={2.4} />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <a
            href="#quote"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-green-deep"
          >
            Start your quote
          </a>
        </Reveal>
      </div>
    </section>
  );
}
