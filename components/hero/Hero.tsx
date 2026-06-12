const TRUST_PILLS = [
  "Licensed and Insured",
  "2+ Years Experience",
  "80+ Moves Completed",
  "Upfront Pricing",
];

export default function Hero() {
  return (
    <section className="hero-fade flex min-h-[100svh] items-center px-[clamp(24px,8vw,140px)] py-24">
      <div className="w-full max-w-2xl">
        <h1 className="text-[clamp(2.6rem,6.5vw,4.9rem)] font-extrabold leading-[1.02] tracking-tight text-paper">
          Stress Free Moving Experience
        </h1>
        <p className="mt-5 text-lg text-paper/90 md:text-xl">Moving, made simple.</p>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-paper/65 md:text-base">
          Relocations across Ontario, from Kingston to Toronto, Ottawa, and
          beyond. Upfront pricing, careful hands, zero stress.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#quote-section"
            className="inline-flex items-center justify-center rounded-full bg-velocity-red px-7 py-3.5 text-sm font-bold text-paper transition-all duration-200 hover:bg-crimson-shadow hover:-translate-y-0.5 md:text-base"
          >
            Get My Free Quote
          </a>
          <a
            href="tel:+16137701638"
            className="inline-flex items-center justify-center rounded-full border border-paper/25 px-7 py-3.5 text-sm font-semibold text-paper transition-all duration-200 hover:border-amber-pulse hover:text-amber-pulse hover:-translate-y-0.5 md:text-base"
          >
            Call (613) 770-1638
          </a>
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
    </section>
  );
}
