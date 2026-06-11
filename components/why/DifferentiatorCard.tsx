type DifferentiatorCardProps = {
  title: string;
  body: string;
};

export default function DifferentiatorCard({ title, body }: DifferentiatorCardProps) {
  return (
    <article className="rounded-xl border border-paper/[0.08] bg-paper/[0.03] p-5">
      <h3 className="text-base font-bold text-paper md:text-lg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-paper/65">{body}</p>
    </article>
  );
}
