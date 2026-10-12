"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { posts } from "@/data/posts";
import { buildLog } from "@/data/buildLog";
import { Screen, BackButton } from "./Screen";

// Newest first; excerpts live alongside the old homepage preview in buildLog.ts.
const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
const excerpt = (slug: string) => buildLog.find((entry) => entry.slug === slug)?.excerpt;

export function JournalSelect() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  const q = query.trim().toLowerCase();
  const visible = sorted.filter(
    (p) =>
      !q ||
      [p.title, excerpt(p.slug) ?? "", ...(p.tags ?? [])].some((s) => s.toLowerCase().includes(q))
  );
  const current = visible.find((p) => p.slug === selected);

  function pick(slug: string) {
    if (selected === slug) router.push(`/blog/${slug}/`);
    else setSelected(slug);
  }

  return (
    <Screen
      title="Journal"
      actions={
        <>
          {current ? (
            <Link href={`/blog/${current.slug}/`} className="pixel-btn min-w-32 flex-1 py-2.5 text-lg sm:max-w-64">
              Open Entry
            </Link>
          ) : (
            <button type="button" disabled className="pixel-btn min-w-32 flex-1 py-2.5 text-lg sm:max-w-64">
              Open Entry
            </button>
          )}
          <BackButton href="/" />
        </>
      }
    >
      <div className="mx-auto max-w-xl px-1 pt-1">
        <label className="sr-only" htmlFor="journal-search">
          Search journal
        </label>
        <input
          id="journal-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search…"
          className="pixel-inset w-full px-3 py-2 font-pixel text-lg text-ink placeholder:text-muted/70 focus:outline-none"
        />
      </div>

      <ul className="mt-5 flex flex-col gap-4 px-1 pb-2">
        {visible.map((post) => {
          const isSelected = post.slug === selected;
          return (
            <li key={post.slug}>
              <button
                type="button"
                onClick={() => pick(post.slug)}
                aria-pressed={isSelected}
                className={`pixel-panel block w-full p-4 text-left transition-colors ${
                  isSelected ? "outline-4 outline-offset-4 outline-gold" : "hover:bg-[#fbf1da]"
                }`}
              >
                <span className="font-pixel text-xl leading-snug text-ink">{post.title}</span>
                {excerpt(post.slug) && (
                  <span className="mt-1 line-clamp-2 block text-[15px] leading-snug text-muted">
                    {excerpt(post.slug)}
                  </span>
                )}
                <span className="mt-2 block font-mono text-xs text-muted">
                  {post.date} · {post.readingTime}
                  {post.tags?.length ? ` · ${post.tags.join(", ")}` : ""}
                </span>
              </button>
            </li>
          );
        })}
        {visible.length === 0 && (
          <li className="pixel-panel p-6 text-center font-pixel text-lg text-muted">
            No entries match that search.
          </li>
        )}
      </ul>

      <p className="pt-2 text-center font-pixel text-sm text-parchment/80">
        {visible.length} {visible.length === 1 ? "entry" : "entries"}
      </p>
    </Screen>
  );
}
