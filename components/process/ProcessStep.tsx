type ProcessStepProps = {
  number: string;
  title: string;
  body: string;
};

export default function ProcessStep({ number, title, body }: ProcessStepProps) {
  return (
    <li className="flex gap-5">
      <span
        className="text-4xl font-extrabold leading-none text-velocity-red md:text-5xl"
        aria-hidden="true"
      >
        {number}
      </span>
      <div>
        <h3 className="text-base font-bold text-paper md:text-lg">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-paper/65">{body}</p>
      </div>
    </li>
  );
}
