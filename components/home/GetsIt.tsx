import { asset } from "@/lib/asset";
import Reveal from "@/components/scroll/Reveal";
import Icon from "@/components/ui/Icon";

const STATS = [
  { value: "80+", label: "Moves completed" },
  { value: "2+", label: "Years in business" },
  { value: "100%", label: "Upfront pricing" },
  { value: "4", label: "Cities served" },
];

export default function GetsIt() {
  return (
    <section className="bg-mist px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="display mx-auto max-w-3xl text-center text-[clamp(1.9rem,4.5vw,3.2rem)] text-ink">
            Finally, a moving company that gets it.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-ink/60">
            Real crews, real trucks, and a price that holds. Here is a look at a
            day on the job with Bitlane.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal className="overflow-hidden rounded-3xl sm:col-span-2 lg:row-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/img/grid1.jpg")}
              alt="A Bitlane mover unloading boxes from the truck"
              loading="lazy"
              className="h-full min-h-[260px] w-full object-cover"
            />
          </Reveal>

          <Reveal className="flex flex-col justify-between rounded-3xl bg-green p-6 text-white">
            <Icon name="quote" width={30} height={30} stroke="#fff" />
            <p className="mt-6 text-lg font-bold leading-snug">
              They wrapped every piece of furniture and the final bill matched
              the quote exactly.
            </p>
            <p className="mt-4 text-sm font-semibold text-white/80">
              A recent Kingston to Ottawa move
            </p>
          </Reveal>

          <Reveal className="overflow-hidden rounded-3xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/img/grid2.jpg")}
              alt="A Bitlane mover carrying a packed box"
              loading="lazy"
              className="h-full min-h-[180px] w-full object-cover"
            />
          </Reveal>

          <Reveal className="flex flex-col justify-center rounded-3xl border border-cloud bg-paper p-6">
            <p className="display text-3xl text-green-deep">Same day</p>
            <p className="mt-2 text-sm text-ink/60">
              Last-minute booking available for urgent moves across the Kingston
              area.
            </p>
          </Reveal>

          <Reveal className="overflow-hidden rounded-3xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/img/truck.jpg")}
              alt="A Bitlane moving truck"
              loading="lazy"
              className="h-full min-h-[180px] w-full object-cover"
            />
          </Reveal>
        </div>

        <Reveal className="mt-12 grid grid-cols-2 gap-4 rounded-3xl bg-ink px-6 py-8 text-center md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="display text-3xl text-green-lime md:text-4xl">{s.value}</p>
              <p className="mt-1.5 text-xs text-white/60 md:text-sm">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
