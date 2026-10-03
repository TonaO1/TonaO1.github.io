import Link from "next/link";
import { changelog } from "@/data/changelog";

const kindColor = {
  "+": "text-accent",
  "~": "text-ember",
  "!": "text-muted",
} as const;

export function Changelog() {
  if (changelog.length === 0) return null;

  return (
    <section aria-label="Changelog" className="mx-auto max-w-5xl px-6">
      <div className="overflow-hidden rounded-2xl border border-line bg-paper-raised">
        <div className="flex items-center justify-between border-b border-line px-5 py-2.5 font-mono text-sm text-muted">
          <span>
            <span className="text-ember">$</span> git log --oneline
          </span>
          <span className="hidden sm:inline">changelog</span>
        </div>
        <ol className="flex flex-col py-2 font-mono text-sm">
          {changelog.map((entry, i) => {
            const body = (
              <>
                <span className={`w-3 shrink-0 ${kindColor[entry.kind]}`}>
                  {entry.kind}
                </span>
                <span className="flex min-w-0 flex-1 flex-col sm:flex-row sm:items-baseline sm:gap-3">
                  <span className="min-w-0 flex-1 text-ink">{entry.text}</span>
                  <span className="shrink-0 text-muted">{entry.date}</span>
                </span>
              </>
            );
            const rowClass =
              "flex items-baseline gap-3 px-5 py-1.5 transition-colors";
            const external = entry.href?.startsWith("http");
            return (
              <li key={i}>
                {entry.href ? (
                  external ? (
                    <a
                      href={entry.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${rowClass} hover:bg-paper`}
                    >
                      {body}
                    </a>
                  ) : (
                    <Link
                      href={entry.href}
                      className={`${rowClass} hover:bg-paper`}
                    >
                      {body}
                    </Link>
                  )
                ) : (
                  <div className={rowClass}>{body}</div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
