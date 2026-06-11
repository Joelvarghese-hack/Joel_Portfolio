import ProcessStep from "@/components/process/ProcessStep";

const STEPS = [
  {
    number: "01",
    title: "Get your quote.",
    body: "Fill out the form or call us. Tell us where you're moving from and to, your home size, and your preferred date. We'll put together a fixed upfront price, no ambiguity.",
  },
  {
    number: "02",
    title: "We show up, prepared.",
    body: "Our crew arrives on time with everything needed to protect and move your belongings. Furniture pads, shrink wrap, straps, the works. You don't lift a finger.",
  },
  {
    number: "03",
    title: "You're home.",
    body: "Everything placed exactly where you want it. We reassemble furniture, remove all packing materials, and won't leave until you're satisfied. That's the job done.",
  },
];

export default function TheProcess() {
  return (
    <div>
      <h2 className="text-3xl font-extrabold tracking-tight text-paper md:text-4xl">
        The Process
      </h2>
      <ol className="mt-7 grid gap-7">
        {STEPS.map((step) => (
          <ProcessStep
            key={step.number}
            number={step.number}
            title={step.title}
            body={step.body}
          />
        ))}
      </ol>
    </div>
  );
}
