/** Repeating brand strip on green. Decorative, hidden from screen readers. */
export default function Marquee({ reverse = false }: { reverse?: boolean }) {
  const items = Array.from({ length: 8 });
  return (
    <div className={`marquee ${reverse ? "marquee--reverse" : ""}`} aria-hidden="true">
      {[0, 1].map((track) => (
        <div className="marquee__track" key={track}>
          {items.map((_, i) => (
            <span key={i} className="flex items-center gap-6">
              <span className="display text-xl text-white md:text-2xl">Bitlane Moving</span>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M3 6h11v9H3z M14 9h4l3 3v3h-7z"
                  stroke="#0C0A0A"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <circle cx="7" cy="17" r="1.6" stroke="#0C0A0A" strokeWidth="1.6" />
                <circle cx="17.5" cy="17" r="1.6" stroke="#0C0A0A" strokeWidth="1.6" />
              </svg>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
