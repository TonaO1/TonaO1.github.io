import Link from "next/link";
import { buildLog } from "@/data/buildLog";
import { SectionHeading } from "./SectionHeading";

export function BuildLog() {
  return (
    <section id="log" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading eyebrow="from the build log" title="Writing" />
      <div className="flex flex-col gap-4">
        {buildLog.map((entry) => (
          <Link
            key={entry.slug}
            href={`/blog/${entry.slug}`}
            className="group rounded-2xl border border-line bg-paper-raised p-6 transition-shadow hover:shadow-md"
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-xs text-moss">
              <span className="text-ember">$</span>
              <span>git log --oneline</span>
              <span className="text-moss/70">{entry.date}</span>
            </div>
            <h3 className="mt-3 font-display text-2xl font-medium text-ink">
              {entry.title}
            </h3>
            <p className="mt-2 max-w-2xl leading-relaxed text-moss">
              {entry.excerpt}
            </p>
            <span className="mt-4 inline-block font-mono text-sm text-pine underline decoration-transparent underline-offset-4 group-hover:decoration-pine">
              Read the full post →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
