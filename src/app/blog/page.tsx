import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "@/data/posts";
import { buildLog } from "@/data/buildLog";

export const metadata: Metadata = {
  title: "Build log | Tona Otoro",
  description: "Notes from building Parkeye, UFCStyles, and other projects.",
};

export default function BlogIndex() {
  // Newest first; excerpts live alongside the homepage preview in buildLog.ts.
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const excerpt = (slug: string) =>
    buildLog.find((entry) => entry.slug === slug)?.excerpt;

  return (
    <main className="flex-1">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <Link
          href="/"
          className="font-mono text-[13px] uppercase tracking-widest text-accent transition-colors hover:text-accent-dim"
        >
          ← Back home
        </Link>

        <p className="mt-10 font-mono text-[13px] uppercase tracking-widest text-accent">
          ~/blog
        </p>
        <h1 className="mt-2 font-display text-5xl font-medium tracking-tight text-ink">
          Build log
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
          Short notes on what I&apos;m building, what broke, and what I changed
          because of it.
        </p>

        <div className="mt-6 font-mono text-sm text-muted">
          <span className="text-ember">$</span> ls ./posts{" "}
          <span className="text-muted/70">· {sorted.length} total</span>
        </div>

        <ol className="mt-6 flex flex-col">
          {sorted.map((post) => (
            <li key={post.slug} className="border-t border-line first:border-t-0">
              <Link href={`/blog/${post.slug}`} className="group block py-7">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm text-muted">
                  <span>{post.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-2 font-display text-2xl font-medium text-ink transition-colors group-hover:text-accent">
                  {post.title}
                </h2>
                {excerpt(post.slug) && (
                  <p className="mt-2 text-[17px] leading-relaxed text-muted">
                    {excerpt(post.slug)}
                  </p>
                )}
                {post.tags && post.tags.length > 0 ? (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[13px] text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
