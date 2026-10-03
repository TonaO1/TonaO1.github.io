export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <p className="font-mono text-[13px] uppercase tracking-widest text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-display text-4xl font-medium tracking-tight text-ink">
        {title}
      </h2>
    </div>
  );
}
