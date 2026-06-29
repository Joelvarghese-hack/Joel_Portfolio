type ProcessStepProps = {
  number: string;
  title: string;
  body: string;
};

export default function ProcessStep({ number, title, body }: ProcessStepProps) {
  return (
    <li className="flex gap-5 rounded-2xl border border-cloud bg-paper p-6">
      <span className="display text-4xl leading-none text-green md:text-5xl" aria-hidden="true">
        {number}
      </span>
      <div>
        <h3 className="text-lg font-extrabold text-ink">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/60">{body}</p>
      </div>
    </li>
  );
}
