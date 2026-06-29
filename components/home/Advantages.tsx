import Reveal from "@/components/scroll/Reveal";
import Icon from "@/components/ui/Icon";

const ADVANTAGES = [
  { icon: "quote", title: "Free quotes", body: "Tell us about your move and get a fixed price the same day." },
  { icon: "crew", title: "Professional crew", body: "Trained, in-house movers who treat your home with care." },
  { icon: "shield", title: "No outsourcing", body: "The crew that quotes your move is the crew that shows up." },
  { icon: "layers", title: "Comprehensive services", body: "Packing, moving, assembly, and storage under one roof." },
  { icon: "star", title: "Strong reviews", body: "A steady record of moves done right, across Ontario." },
  { icon: "tag", title: "All-inclusive pricing", body: "One fixed quote covers the whole job. No add-ons." },
];

export default function Advantages() {
  return (
    <section id="why" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="display text-[clamp(1.9rem,4.5vw,3.2rem)] text-ink">Advantages</h2>
        </Reveal>
        <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {ADVANTAGES.map((a) => (
            <Reveal key={a.title} className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink text-green-lime">
                <Icon name={a.icon as never} width={24} height={24} />
              </span>
              <div>
                <h3 className="text-lg font-extrabold text-ink">{a.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{a.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
