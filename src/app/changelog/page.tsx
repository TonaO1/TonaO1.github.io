import Link from "next/link";
import type { Metadata } from "next";
import { changelog } from "@/data/changelog";
import { Screen } from "@/components/Screen";

export const metadata: Metadata = {
  title: "Patch notes | Tona Otoro",
  description: "What's new with Tona Otoro and this site.",
};

const kindColor = {
  "+": "text-leaf",
  "~": "text-ember",
  "!": "text-muted",
} as const;

export default function ChangelogPage() {
  return (
    <Screen title="Patch Notes">
      <ol className="pixel-panel mx-1 my-1 flex flex-col py-3 font-mono text-sm">
        {changelog.map((entry, i) => {
          const body = (
            <>
              <span className={`w-3 shrink-0 font-pixel text-base ${kindColor[entry.kind]}`}>
                {entry.kind}
              </span>
              <span className="flex min-w-0 flex-1 flex-col sm:flex-row sm:items-baseline sm:gap-3">
                <span className="min-w-0 flex-1 text-ink">{entry.text}</span>
                <span className="shrink-0 text-muted">{entry.date}</span>
              </span>
            </>
          );
          const rowClass = "flex items-baseline gap-3 px-5 py-2";
          const external = entry.href?.startsWith("http");
          return (
            <li key={i}>
              {entry.href ? (
                external ? (
                  <a href={entry.href} className={`${rowClass} hover:bg-parchment-dim`}>
                    {body}
                  </a>
                ) : (
                  <Link href={entry.href} className={`${rowClass} hover:bg-parchment-dim`}>
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
    </Screen>
  );
}
