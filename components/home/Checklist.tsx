import Reveal from "@/components/scroll/Reveal";
import Icon from "@/components/ui/Icon";

const ITEMS = [
  { title: "Set your moving budget", body: "We help you scope the job and lock a fixed price so there are no surprises later." },
  { title: "Book your full-service move", body: "Pick a date and crew size. We confirm the window and the plan in writing." },
  { title: "Pack and label carefully", body: "Or hand it to us. Either way, every box is labelled by room for an easy unload." },
  { title: "Protect and pad the load", body: "We wrap furniture and pad fragile items before anything goes on the truck." },
  { title: "Notify your key contacts", body: "Utilities, mail, and services. A quick checklist keeps move week calm." },
];

export default function Checklist() {
  return (
    <section id="process" className="bg-ink px-6 py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <h2 className="display text-[clamp(1.9rem,4.5vw,3.2rem)] text-white">
            Your moving checklist
          </h2>
          <p className="mt-4 text-white/60">
            Five steps from first call to settled in. We handle most of them for
            you, so moving day is the easy day.
          </p>
          <a
            href="#quote"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-green px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-green-deep"
          >
            Get a free quote
          </a>
        </Reveal>

        <Reveal>
          <ol className="grid gap-3">
            {ITEMS.map((item, i) => (
              <li
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green text-white">
                  <Icon name="check" width={16} height={16} strokeWidth={2.4} />
                </span>
                <div>
                  <p className="text-base font-extrabold text-white">
                    <span className="text-green-lime">{String(i + 1).padStart(2, "0")}.</span>{" "}
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-white/60">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
