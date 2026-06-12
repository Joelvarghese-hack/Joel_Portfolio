import Hero from "@/components/hero/Hero";
import TruckSection from "@/components/truck/TruckSection";
import QuoteForm from "@/components/quote/QuoteForm";
import WhyBitlane from "@/components/why/WhyBitlane";
import WhatWeMove from "@/components/services/WhatWeMove";
import ServiceArea from "@/components/area/ServiceArea";
import CoverageStats from "@/components/stats/CoverageStats";
import Reveal from "@/components/scroll/Reveal";

const CARD =
  "rounded-2xl border border-paper/10 bg-[#15151B]/95 p-6 md:p-8 shadow-[0_30px_70px_-32px_rgba(139,30,45,0.5)]";

export default function Home() {
  return (
    <main>
      <Hero />

      <TruckSection />

      <section id="quote-section" className="px-6 py-16 md:py-24">
        <Reveal className={`mx-auto w-full max-w-2xl ${CARD}`}>
          <QuoteForm />
        </Reveal>
      </section>

      <section id="why" className="px-6 py-16 md:py-24">
        <Reveal className="mx-auto w-full max-w-5xl">
          <WhyBitlane />
        </Reveal>
      </section>

      <section id="services" className="px-6 py-16 md:py-24">
        <Reveal className="mx-auto w-full max-w-5xl">
          <WhatWeMove />
        </Reveal>
      </section>

      <section id="area" className="px-6 py-16 md:py-24">
        <Reveal className={`mx-auto w-full max-w-2xl ${CARD}`}>
          <ServiceArea />
        </Reveal>
      </section>

      <section aria-label="Coverage" className="px-6 py-16 md:py-24">
        <Reveal className="mx-auto w-full max-w-4xl">
          <CoverageStats />
        </Reveal>
      </section>
    </main>
  );
}
