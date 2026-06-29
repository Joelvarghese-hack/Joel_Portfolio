import { asset } from "@/lib/asset";
import RatingBadges from "@/components/home/RatingBadges";
import Icon from "@/components/ui/Icon";

const TRUST = [
  "Licensed and insured",
  "Upfront fixed pricing",
  "No outsourcing",
  "2+ years, 80+ moves",
];

export default function Hero() {
  return (
    <section className="hero-fade relative overflow-hidden bg-paper">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 md:py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-green-soft px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-green-deep">
            <Icon name="truck" width={15} height={15} /> Full-service moving and storage
          </span>

          <h1 className="display mt-5 text-[clamp(2.4rem,6vw,4.4rem)] text-ink">
            Comprehensive full-service movers. We handle every step of your move.
          </h1>

          <p className="mt-5 max-w-md text-base text-ink/65 md:text-lg">
            Affordable moving and storage across Ontario, from Kingston to
            Toronto, Ottawa, and beyond. One fixed price, careful hands, zero
            stress.
          </p>

          <ul className="mt-6 grid max-w-md grid-cols-2 gap-x-4 gap-y-2.5">
            {TRUST.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-semibold text-ink/75">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green text-white">
                  <Icon name="check" width={13} height={13} strokeWidth={2.4} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-full bg-green px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-green-deep"
            >
              Get a free quote
            </a>
            <a
              href="tel:+16137701638"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink/15 px-6 py-3.5 text-sm font-bold text-ink transition-colors hover:border-green hover:text-green-deep"
            >
              <Icon name="phone" width={16} height={16} /> (613) 770-1638
            </a>
          </div>

          <div className="mt-8">
            <RatingBadges />
          </div>
        </div>

        {/* image with green angular shape behind */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="absolute -inset-3 -rotate-3 rounded-[2.5rem] bg-green"
            aria-hidden="true"
          />
          <div
            className="absolute -right-6 -top-6 h-24 w-24 rounded-3xl bg-grape/80 lg:h-32 lg:w-32"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/img/hero.jpg")}
              alt="A Bitlane mover carrying boxes into a home"
              width={683}
              height={1024}
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-ink px-4 py-3 text-white shadow-lg">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green">
              <Icon name="shield" width={18} height={18} stroke="#fff" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-extrabold">Fixed upfront price</p>
              <p className="text-xs text-white/60">No surprises on moving day</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
