import Link from "next/link";

type PageHeroProps = {
  title: string;
  lede: string;
  cta?: { href: string; label: string };
};

export default function PageHero({ title, lede, cta }: PageHeroProps) {
  return (
    <section className="hero-fade border-b border-cloud bg-mist px-6 pb-12 pt-12 md:pb-16 md:pt-16">
      <div className="mx-auto w-full max-w-4xl">
        <span className="inline-block h-1.5 w-12 rounded-full bg-green" aria-hidden="true" />
        <h1 className="display mt-5 text-[clamp(2.2rem,5.5vw,4rem)] text-ink">{title}</h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/60 md:text-lg">{lede}</p>
        {cta && (
          <Link
            href={cta.href}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-green px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-green-deep"
          >
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}
