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
          <p className="text-base leading-relaxed text-paper/75">
            We primarily serve Ontario, with cross-border moves to Québec. For
            moves outside this area, call us to discuss.
          </p>
          <ul className="mt-8 grid gap-4 rounded-2xl border border-paper/10 bg-[#15151B]/95 p-6 md:p-8">
            {CITIES.map((city) => (
              <li key={city.name} className="flex items-baseline justify-between gap-4">
                <span className="text-base font-bold text-paper md:text-lg">{city.name}</span>
                <span className="text-sm text-paper/60">{city.note}</span>
              </li>
            ))}
          </ul>
          <a
            href="tel:+16137701638"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-velocity-red px-6 py-3 text-sm font-bold text-paper transition-colors hover:bg-crimson-shadow"
          >
            Call (613) 770-1638
          </a>
        </div>
      </section>
    </main>
  );
}
