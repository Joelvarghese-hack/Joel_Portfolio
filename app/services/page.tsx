import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/inner/PageHero";
import ServiceCard from "@/components/inner/ServiceCard";

export const metadata: Metadata = {
  title: "Services | Bitlane Relocations",
  description:
    "Residential, long-distance, office, packing, assembly, storage, same-day, and local Kingston moves. Fixed upfront pricing on every job.",
};

// TODO: replace placeholder pricing with real numbers.
const SERVICES = [
  {
    title: "Residential Moves",
    price: "from $299",
    description:
      "Apartments, condos, and family homes of every size. We pad, wrap, and load everything from everyday boxes to fragile glassware and appliances. Most local residential moves are done in a single day.",
  },
  {
    title: "Long-Distance Moves",
    price: "from $899",
    description:
      "Kingston to Toronto, Ottawa, Montréal, and beyond. One fixed price covers the full route, fuel included. Your belongings ride in one truck with one crew, end to end.",
  },
  {
    title: "Office Relocations",
    price: "from $499",
    description:
      "Desks, equipment, files, and everything between, moved on your schedule. We work evenings and weekends to keep your downtime near zero, coordinated with your building's elevator and loading requirements.",
  },
  {
    title: "Packing Services",
    price: "from $199",
    description:
      "Full or partial packing with professional-grade boxes, paper, and wrap. Every box is labelled by room so unpacking is painless. Add it to any move or book it on its own.",
  },
  {
    title: "Furniture Assembly",
    price: "from $129",
    description:
      "We disassemble at pickup and reassemble at delivery: beds, tables, shelving, gym equipment. No tools required from you. Hardware is bagged, labelled, and never lost.",
  },
  {
    title: "Storage Solutions",
    price: "from $99",
    description:
      "Short and long-term storage in secure, monitored facilities. Useful when closing dates don't line up or you're between leases. In and out handling included.",
  },
  {
    title: "Same-Day Moves",
    price: "from $349",
    description:
      "Booked this morning, moved this afternoon. We keep capacity open for urgent relocations across the Kingston area. Call before noon and we'll tell you straight if we can fit you in.",
  },
  {
    title: "Local Kingston Moves",
    price: "from $249",
    description:
      "Quick, efficient moves anywhere in the Kingston area, often completed in hours. The same careful handling as a long-haul job, priced for short distances.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Services"
        lede="Everything we move, and what it costs to start. Every job gets a fixed quote before we lift a thing."
      />
      <section className="px-6 pb-16 md:pb-24">
        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              price={service.price}
              description={service.description}
            />
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-4xl">
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
