const STATS = [
  { value: "80+", label: "Moves completed" },
  { value: "2+", label: "Years in business" },
  { value: "100%", label: "Upfront pricing" },
  { value: "4", label: "Cities served" },
];

export default function CoverageStats() {
  return (
    <dl className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col rounded-2xl border border-cloud bg-mist p-5 text-center"
        >
          <dd className="display order-1 text-3xl text-green-deep lg:text-4xl">{stat.value}</dd>
          <dt className="order-2 mt-2 text-xs text-ink/55 md:text-sm">{stat.label}</dt>
        </div>
      ))}
    </dl>
  );
}
