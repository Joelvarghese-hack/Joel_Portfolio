import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/inner/PageHero";
import ProcessStep from "@/components/process/ProcessStep";

export const metadata: Metadata = {
  title: "The Process | Bitlane Relocations",
  description:
    "Four steps from first call to settled in: Consult, Plan, Quote, Schedule. One fixed price, locked before we touch a box.",
};

const STEPS = [
  {
    number: "01",
    title: "Consult.",
    body: "Tell us what you're moving, where you're starting, and where you're headed. A five minute call or the quote form gives us everything we need. No site visit required for most moves.",
  },
  {
    number: "02",
    title: "Plan.",
    body: "We map the route, set the crew size, and book the equipment. Stairs, elevators, parking, fragile items: all sorted before moving day. You get a clear plan, not a vague promise.",
  },
  {
    number: "03",
    title: "Quote.",
    body: "One fixed price, locked in writing before we touch a single box. Priced by the space your belongings take up, not their weight. No surcharges, no moving-day surprises.",
  },
  {
    number: "04",
    title: "Schedule.",
    body: "Pick the date and we handle the rest. You'll know when the crew arrives, how long the move takes, and when you're done. Need it sooner? Same-day slots are often available.",
  },
];

export default function ProcessPage() {
  return (
    <main>
      <PageHero title="The Process" lede="Four steps from first call to settled in." />
      <section className="px-6 pb-16 md:pb-24">
        <ol className="mx-auto grid max-w-3xl gap-8">
          {STEPS.map((step) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
              body={step.body}
            />
          ))}
        </ol>
        <div className="mx-auto mt-12 max-w-3xl">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-velocity-red px-6 py-3 text-sm font-bold text-paper transition-colors hover:bg-crimson-shadow"
          >
            Get a quote
          </Link>
        </div>
      </section>
    </main>
  );
}
