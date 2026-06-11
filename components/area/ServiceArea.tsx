const CITIES = [
  { name: "Kingston, ON.", note: "Home base." },
  { name: "Toronto, ON.", note: "About 3 hours." },
  { name: "Ottawa, ON.", note: "About 2 hours." },
  { name: "Montréal, QC.", note: "About 3 hours." },
];

export default function ServiceArea() {
  return (
    <div>
      <h2 className="text-3xl font-extrabold tracking-tight text-paper md:text-4xl">
        Service Area
      </h2>
      <ul className="mt-6 grid gap-4">
        {CITIES.map((city) => (
          <li key={city.name} className="flex items-baseline justify-between gap-4">
            <span className="text-base font-bold text-paper md:text-lg">{city.name}</span>
            <span className="text-sm text-paper/60">{city.note}</span>
          </li>
        ))}
      </ul>
      <p className="mt-7 text-sm leading-relaxed text-paper/65">
        Don&apos;t see your city? Call us, we travel further than you think.{" "}
        <a
          href="tel:+16137701638"
          className="font-semibold text-amber-pulse transition-colors hover:text-paper"
        >
          (613) 770-1638
        </a>
      </p>
    </div>
  );
}
