import Nav from "@/components/nav/Nav";
import Hero from "@/components/hero/Hero";
import WhyBitlane from "@/components/why/WhyBitlane";
import WhatWeMove from "@/components/services/WhatWeMove";
import TheProcess from "@/components/process/TheProcess";
import ServiceArea from "@/components/area/ServiceArea";
import CoverageStats from "@/components/stats/CoverageStats";
import QuoteForm from "@/components/quote/QuoteForm";
import Footer from "@/components/footer/Footer";
import HorizontalStage from "@/components/scroll/HorizontalStage";
import PathNode from "@/components/scroll/PathNode";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HorizontalStage>
          <PathNode id="hero" isNode nodeY={0.52} anchor="right" hero>
            <Hero />
          </PathNode>

          <PathNode id="why" isNode nodeY={0.3} cardMd="420px" cardLg="540px">
            <WhyBitlane />
          </PathNode>

          <PathNode id="services" isNode nodeY={0.68} cardMd="440px" cardLg="560px">
            <WhatWeMove />
          </PathNode>

          <PathNode id="process" isNode nodeY={0.32} cardMd="420px" cardLg="520px">
            <TheProcess />
          </PathNode>

          <PathNode
            id="area"
            isNode
            nodeY={0.62}
            anchor="right"
            routeBranch
            gap="clamp(380px, 36vw, 600px)"
            cardMd="400px"
            cardLg="500px"
          >
            <ServiceArea />
          </PathNode>

          <PathNode id="stats" cardMd="560px" cardLg="760px" ariaLabel="Coverage">
            <CoverageStats />
          </PathNode>

          <PathNode
            id="quote"
            isNode
            nodeY={0.5}
            anchor="in-right"
            destination
            cardMd="440px"
            cardLg="560px"
          >
            <QuoteForm />
          </PathNode>
        </HorizontalStage>
      </main>
      <Footer />
    </>
  );
}
