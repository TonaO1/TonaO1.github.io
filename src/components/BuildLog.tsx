import Link from "next/link";
import { buildLog } from "@/data/buildLog";
import { SectionHeading } from "./SectionHeading";

export function BuildLog() {
  return (
    <section id="log" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading eyebrow="from the build log" title="Writing" />
      {buildLog.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-line p-6 font-mono text-sm text-muted">
          Coming soon: nothing posted yet.
        </div>
      ) : (
      <div className="flex flex-col gap-4">
        {buildLog.map((entry) => (
          <Link
            key={entry.slug}
            href={`/blog/${entry.slug}`}
            className="group rounded-2xl border border-line bg-paper-raised p-6 transition-shadow hover:shadow-md"
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-sm text-muted">
              <span className="text-ember">$</span>
              <span>{entry.date}</span>
            </div>
            <h3 className="mt-3 font-display text-2xl font-medium text-ink">
              {entry.title}
            </h3>
            <p className="mt-2 max-w-2xl text-[17px] leading-relaxed text-muted">
              {entry.excerpt}
            </p>
            <span className="mt-4 inline-block font-mono text-sm text-accent underline decoration-transparent underline-offset-4 group-hover:decoration-accent">
              Read the full post →
            </span>
          </Link>
        ))}
        <Link
          href="/blog/"
          className="mt-2 w-fit font-mono text-sm text-accent underline decoration-transparent underline-offset-4 transition-colors hover:decoration-accent"
        >
          All posts →
        </Link>
      </div>
      )}
    </section>
  );
}
