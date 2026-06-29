import Hero from "@/components/home/Hero";
import Clients from "@/components/home/Clients";
import GetsIt from "@/components/home/GetsIt";
import ReliableMovers from "@/components/home/ReliableMovers";
import Includes from "@/components/home/Includes";
import Advantages from "@/components/home/Advantages";
import Checklist from "@/components/home/Checklist";
import TruckSection from "@/components/truck/TruckSection";
import AboutBlock from "@/components/home/AboutBlock";
import Faq from "@/components/home/Faq";
import Blog from "@/components/home/Blog";
import Marquee from "@/components/ui/Marquee";
import Reveal from "@/components/scroll/Reveal";
import QuoteForm from "@/components/quote/QuoteForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <GetsIt />
      <ReliableMovers />
      <Includes />
      <Advantages />
      <Checklist />
      <Marquee />
      <TruckSection />
      <AboutBlock />
      <Marquee reverse />
      <Faq />
      <Blog />

      <section id="quote" className="bg-green px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="display text-[clamp(2rem,4.8vw,3.4rem)] text-white">
              Ready when you are
            </h2>
            <p className="mt-4 max-w-md text-white/85">
              Send a few details and we will put together a fixed upfront price,
              usually the same day. No commitment, no pressure.
            </p>
            <ul className="mt-6 grid gap-2.5 text-sm font-semibold text-white/90">
              <li>Licensed and insured movers</li>
              <li>One fixed price, locked in writing</li>
              <li>Serving Kingston and across Ontario</li>
            </ul>
            <a
              href="tel:+16137701638"
              className="mt-7 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
            >
              Or call (613) 770-1638
            </a>
          </Reveal>

          <Reveal className="rounded-3xl bg-paper p-6 shadow-2xl md:p-8">
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
