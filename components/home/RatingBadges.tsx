import Icon from "@/components/ui/Icon";

// Sample medium-tier ratings. TODO: replace with real review-platform numbers.
const RATINGS = [
  { platform: "Google", score: "4.0", scale: "/ 5", reviews: "120 reviews" },
  { platform: "Yelp", score: "3.9", scale: "/ 5", reviews: "64 reviews" },
  { platform: "Facebook", score: "4.1", scale: "/ 5", reviews: "88 reviews" },
  { platform: "BBB", score: "A", scale: "rating", reviews: "Accredited" },
];

function Stars({ filled }: { filled: number }) {
  return (
    <span className="flex" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <Icon
          key={i}
          name="star"
          width={14}
          height={14}
          strokeWidth={1.4}
          className={i < filled ? "fill-green text-green" : "fill-cloud text-cloud"}
        />
      ))}
    </span>
  );
}

export default function RatingBadges({ compact = false }: { compact?: boolean }) {
  return (
    <ul
      className={`flex flex-wrap items-stretch gap-3 ${compact ? "" : "md:gap-4"}`}
      aria-label="Customer ratings across review platforms"
    >
      {RATINGS.map((r) => (
        <li
          key={r.platform}
          className="flex items-center gap-3 rounded-xl border border-cloud bg-paper px-3.5 py-2.5 shadow-sm"
        >
          <div>
            <p className="text-xs font-semibold text-ink/55">{r.platform}</p>
            <p className="flex items-baseline gap-1">
              <span className="text-lg font-extrabold leading-none text-ink">{r.score}</span>
              <span className="text-[0.65rem] text-ink/50">{r.scale}</span>
            </p>
          </div>
          <div className="border-l border-cloud pl-3">
            <Stars filled={r.platform === "BBB" ? 4 : Math.round(parseFloat(r.score))} />
            <p className="mt-1 text-[0.65rem] text-ink/50">{r.reviews}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
