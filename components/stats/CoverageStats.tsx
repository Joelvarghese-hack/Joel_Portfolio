const STATS = [
  { value: "80+", label: "Moves completed" },
  { value: "2+", label: "Years in business" },
  { value: "100%", label: "Upfront pricing" },
  { value: "4", label: "Cities served" },
];

export default function CoverageStats() {
  return (
    <dl className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
      {STATS.map((stat) => (
        <div key={stat.label} className="flex flex-col text-center">
          <dd className="order-1 text-4xl font-extrabold tracking-tight text-paper lg:text-5xl">
            {stat.value}
          </dd>
          <dt className="order-2 mt-2 text-xs text-paper/60 md:text-sm">{stat.label}</dt>
        </div>
      ))}
    </dl>
  );
}
