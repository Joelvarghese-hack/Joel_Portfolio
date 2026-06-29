import Reveal from "@/components/scroll/Reveal";
import Icon from "@/components/ui/Icon";

const POSTS = [
  {
    tag: "Packing",
    title: "How to pack fragile items so nothing breaks in transit",
    read: "4 min read",
    icon: "box",
  },
  {
    tag: "Office moves",
    title: "Planning an office relocation without the downtime",
    read: "5 min read",
    icon: "estimate",
  },
  {
    tag: "Long distance",
    title: "What a fixed price really covers on a cross-province move",
    read: "3 min read",
    icon: "truck",
  },
];

export default function Blog() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="display text-[clamp(1.9rem,4.5vw,3rem)] text-ink">
            Discover our blog
          </h2>
          <p className="max-w-sm text-sm text-ink/55">
            Practical moving guides from the Bitlane crew. Sample articles shown,
            full posts coming soon.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {POSTS.map((p) => (
            <Reveal
              key={p.title}
              className="group overflow-hidden rounded-3xl border border-cloud bg-paper transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-40 items-center justify-center bg-green-soft text-green-deep">
                <Icon name={p.icon as never} width={48} height={48} strokeWidth={1.4} />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wide text-green-deep">
                  {p.tag}
                </span>
                <h3 className="mt-2 text-lg font-extrabold leading-snug text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-xs font-semibold text-ink/45">{p.read}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
