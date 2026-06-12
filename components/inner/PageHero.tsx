import Link from "next/link";

type PageHeroProps = {
  title: string;
  lede: string;
  cta?: { href: string; label: string };
};

export default function PageHero({ title, lede, cta }: PageHeroProps) {
  return (
    <section className="hero-fade flex min-h-[44vh] items-end px-6 pb-10 pt-36 md:min-h-[50vh] md:pb-14">
      <div className="mx-auto w-full max-w-4xl">
        <h1 className="text-[clamp(2.4rem,5.5vw,4rem)] font-extrabold leading-[1.04] tracking-tight text-paper">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-paper/70 md:text-lg">{lede}</p>
        {cta && (
          <Link
            href={cta.href}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-velocity-red px-6 py-3 text-sm font-bold text-paper transition-colors hover:bg-crimson-shadow"
          >
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}
