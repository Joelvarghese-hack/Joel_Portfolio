import ServiceTile from "@/components/services/ServiceTile";

const ICON_PROPS = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
} as const;

const SERVICES = [
  {
    title: "Residential Moves",
    description:
      "Studio apartments to large family homes, furniture, appliances, fragile items.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5.5 10v9h13v-9" />
        <path d="M10 19v-5h4v5" />
      </svg>
    ),
  },
  {
    title: "Long-Distance Moves",
    description:
      "Kingston to Toronto, Ottawa, Montreal, and beyond. Fixed pricing across the full route.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M4 19c7 0 4-14 11-14" />
        <circle cx="4" cy="19" r="1.6" />
        <circle cx="19" cy="5" r="1.6" />
      </svg>
    ),
  },
  {
    title: "Office Relocations",
    description: "Business moves on your timeline, coordinated to minimize downtime.",
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="5" y="4" width="14" height="16" rx="1.5" />
        <path d="M9 8h2M13 8h2M9 12h2M13 12h2M10.5 20v-3.5h3V20" />
      </svg>
    ),
  },
  {
    title: "Packing Services",
    description: "Full or partial packing with professional-grade materials.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M3.5 8 12 4l8.5 4-8.5 4z" />
        <path d="M3.5 8v8.5L12 20.5l8.5-4V8" />
        <path d="M12 12v8.5" />
      </svg>
    ),
  },
  {
    title: "Furniture Assembly",
    description: "Disassemble at pickup, reassemble at delivery. No tools required from you.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M14.5 6.5a4 4 0 0 1 5-5l-2.5 2.5 1 2 2-1a4 4 0 0 1-5 5L8 17l-3 3-2-2 3-3z" />
      </svg>
    ),
  },
  {
    title: "Storage Solutions",
    description: "Short and long-term secure storage options available.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M3 9.5 12 4l9 5.5V20H3z" />
        <path d="M7 20v-7h10v7M7 16.5h10" />
      </svg>
    ),
  },
  {
    title: "Same-Day Moves",
    description: "Last-minute booking, availability for urgent relocations.",
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    ),
  },
  {
    title: "Local Kingston Moves",
    description:
      "Quick, efficient moves within the Kingston area, often completed in a day.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M12 21s-6.5-5.5-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 15.5 12 21 12 21z" />
        <circle cx="12" cy="10.5" r="2.2" />
      </svg>
    ),
  },
];

export default function WhatWeMove() {
  return (
    <div>
      <h2 className="text-3xl font-extrabold tracking-tight text-paper md:text-4xl">
        What We Move
      </h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {SERVICES.map((service) => (
          <ServiceTile
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}
