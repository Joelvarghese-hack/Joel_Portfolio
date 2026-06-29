import Reveal from "@/components/scroll/Reveal";
import Icon from "@/components/ui/Icon";

const FEATURES = [
  { icon: "estimate", title: "Free, accurate estimates", body: "A clear, itemized quote up front. The number you see is the number you pay." },
  { icon: "clock", title: "Always on schedule", body: "We arrive in the booked window and keep you posted from start to finish." },
  { icon: "tag", title: "Pricing without hidden fees", body: "No fuel surcharges, no heavy-item fees, no moving-day add-ons." },
  { icon: "sofa", title: "Furniture disassembly and wrapping", body: "We take apart, pad, and shrink-wrap your furniture so nothing gets scratched." },
  { icon: "box", title: "Packing and custom crating", body: "Full or partial packing with professional-grade materials and crating for fragiles." },
  { icon: "plug", title: "Disconnecting appliances", body: "We safely disconnect and prep your appliances for transport." },
  { icon: "truck", title: "Loading the truck", body: "Strapped, padded, and stacked so your belongings ride safely the whole way." },
  { icon: "unpack", title: "Unloading and unpacking", body: "We bring everything in and can unpack and clear away the boxes too." },
  { icon: "wrench", title: "Reassembly of furniture", body: "Beds, tables, and shelving rebuilt at the destination. No tools from you." },
  { icon: "home", title: "Arranging items in your new home", body: "Every box and piece of furniture placed exactly where you want it." },
];

export default function Includes() {
  return (
    <section id="services" className="bg-mist px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="display max-w-2xl text-[clamp(1.9rem,4.5vw,3.2rem)] text-ink">
            Our full-service moving includes
          </h2>
          <p className="mt-4 max-w-xl text-ink/60">
            One booking covers the entire move. Pick everything or just the parts
            you need, and the price is locked either way.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <Reveal
              key={f.title}
              className="group rounded-2xl border border-cloud bg-paper p-6 transition-all hover:-translate-y-1 hover:border-green hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-soft text-green-deep transition-colors group-hover:bg-green group-hover:text-white">
                <Icon name={f.icon as never} width={24} height={24} />
              </span>
              <h3 className="mt-4 text-lg font-extrabold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{f.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
