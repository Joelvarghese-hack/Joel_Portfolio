import DifferentiatorCard from "@/components/why/DifferentiatorCard";

const DIFFERENTIATORS = [
  {
    title: "Priced by volume, not weight.",
    body: "You pay for the space your belongings take up, nothing more. No hidden surcharges for heavy furniture, no bait-and-switch on moving day.",
  },
  {
    title: "Upfront quotes, no surprises.",
    body: "Every quote is fixed before we touch a single box. You know the exact cost from the start, so you can plan with confidence.",
  },
  {
    title: "A stress-free experience.",
    body: "We handle the heavy lifting, literally. Licensed, insured, and trained to treat your home and belongings with the care they deserve.",
  },
];

export default function WhyBitlane() {
  return (
    <div>
      <h2 className="text-3xl font-extrabold tracking-tight text-paper md:text-4xl">
        Why Bitlane
      </h2>
      <div className="mt-6 grid gap-4">
        {DIFFERENTIATORS.map((item) => (
          <DifferentiatorCard key={item.title} title={item.title} body={item.body} />
        ))}
      </div>
    </div>
  );
}
