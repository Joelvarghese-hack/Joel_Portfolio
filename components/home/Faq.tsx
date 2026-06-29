import Reveal from "@/components/scroll/Reveal";

const FAQS = [
  {
    q: "What does a full-service move cost?",
    a: "It depends on the size of your home, the distance, and the services you choose. We price by the space your belongings take up, not their weight, and lock the number in writing before moving day. Send the quote form or call and you will have a fixed price the same day.",
  },
  {
    q: "How do I choose the right movers?",
    a: "Look for licensed and insured movers who give you a fixed written quote and do not outsource the job. With Bitlane, the crew that quotes your move is the crew that shows up, and the price does not change on the day.",
  },
  {
    q: "What is included in a full-service move?",
    a: "Everything from packing and wrapping to loading, driving, unloading, reassembly, and placing items in your new home. You can take the whole package or just the parts you need.",
  },
];

export default function Faq() {
  return (
    <section className="bg-mist px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <h2 className="display text-[clamp(1.9rem,4.5vw,3rem)] text-ink">
            Have questions?
          </h2>
          <p className="mt-4 text-ink/60">
            Still deciding? Call us at{" "}
            <a href="tel:+16137701638" className="font-bold text-green-deep hover:underline">
              (613) 770-1638
            </a>{" "}
            and we will talk it through.
          </p>
        </Reveal>

        <Reveal className="grid gap-3">
          {FAQS.map((f, i) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-cloud bg-paper p-5 [&_summary::-webkit-details-marker]:hidden"
              open={i === 0}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-extrabold text-ink">
                {f.q}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-soft text-green-deep transition-transform group-open:rotate-45">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{f.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
