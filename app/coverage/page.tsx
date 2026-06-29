import type { Metadata } from "next";
import PageHero from "@/components/inner/PageHero";

export const metadata: Metadata = {
  title: "Service Area | Bitlane Relocations",
  description:
    "Bitlane Relocations serves Kingston, Toronto, Ottawa, Montréal, Belleville, and Brockville, with cross-border moves into Québec.",
};

const CITIES = [
  { name: "Kingston, ON.", note: "Home base." },
  { name: "Toronto, ON.", note: "About 3 hours." },
  { name: "Ottawa, ON.", note: "About 2 hours." },
  { name: "Montréal, QC.", note: "About 3 hours." },
  { name: "Belleville, ON.", note: "About 1 hour." },
  { name: "Brockville, ON.", note: "About 1 hour." },
];

export default function CoveragePage() {
  return (
    <main>
      <PageHero title="Service Area" lede="Where we operate, and how far we'll go." />
      <section className="px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-2xl">
          <p className="text-base leading-relaxed text-ink/65">
            We primarily serve Ontario, with cross-border moves to Québec. For
            moves outside this area, call us to discuss.
          </p>
          <ul className="mt-8 grid gap-4 rounded-2xl border border-cloud bg-paper p-6 shadow-sm md:p-8">
            {CITIES.map((city) => (
              <li key={city.name} className="flex items-baseline justify-between gap-4 border-b border-cloud pb-3 last:border-0 last:pb-0">
                <span className="text-base font-extrabold text-ink md:text-lg">{city.name}</span>
                <span className="text-sm text-ink/55">{city.note}</span>
              </li>
            ))}
          </ul>
          <a
            href="tel:+16137701638"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-green px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-green-deep"
          >
            Call (613) 770-1638
          </a>
        </div>
      </section>
    </main>
  );
}
