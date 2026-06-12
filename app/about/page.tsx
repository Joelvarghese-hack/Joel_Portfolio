import type { Metadata } from "next";
import PageHero from "@/components/inner/PageHero";
import CoverageStats from "@/components/stats/CoverageStats";

export const metadata: Metadata = {
  title: "About | Bitlane Relocations",
  description:
    "Bitlane Relocations is a licensed and insured moving company founded in Kingston, Ontario in 2022, with more than 80 moves completed across Ontario and Québec.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Bitlane"
        lede="A Kingston moving company built on fixed prices and careful hands."
      />
      <section className="px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-paper/75">
          <p>
            Bitlane Relocations is a moving company based in Kingston, Ontario.
            We started in 2022 with one truck and a simple position: moving day
            should be the easiest day of your move, not the hardest. Since
            then we&apos;ve completed more than 80 moves across Ontario and into
            Québec.
          </p>
          <p>
            We&apos;re fully licensed and insured, and we price by volume instead
            of weight. You pay for the space your belongings take up, and you
            know the exact cost before we touch a single box. That number
            doesn&apos;t change on moving day.
          </p>
          <p>
            Most of our work comes from referrals, which tells you more than
            any slogan could. If you&apos;re moving in or out of Kingston, Toronto,
            Ottawa, or Montréal, call us. We&apos;ll give you a straight answer on
            price and timing.
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-4xl">
          <CoverageStats />
        </div>
      </section>
    </main>
  );
}
