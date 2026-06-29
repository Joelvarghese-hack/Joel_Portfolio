import Reveal from "@/components/scroll/Reveal";

// Simple wordmark placeholders. TODO: replace with real partner logos.
const CLIENTS = ["Limestone Co.", "Cataraqui", "RND Studio", "Frontenac", "Hu", "Maple & Oak"];

export default function Clients() {
  return (
    <section className="border-y border-cloud bg-paper px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-ink/40">
            Trusted by homes and businesses across the region
          </p>
          <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {CLIENTS.map((c) => (
              <li
                key={c}
                className="text-xl font-extrabold tracking-tight text-ink/30 transition-colors hover:text-ink/55"
              >
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
