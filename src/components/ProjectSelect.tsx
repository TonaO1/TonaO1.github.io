"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { projects, kindLabel, type ProjectKind } from "@/data/projects";
import { Screen, BackButton } from "./Screen";
import { ProjectIcon, StatusBadge } from "./ProjectIcon";

const filters: ("all" | ProjectKind)[] = ["all", "personal", "hackathon", "internship"];

export function ProjectSelect() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState<"all" | ProjectKind>("all");
  const [selected, setSelected] = useState<string | null>(null);

  const q = query.trim().toLowerCase();
  const visible = projects.filter(
    (p) =>
      (kind === "all" || p.kind === kind) &&
      (!q ||
        [p.name, p.tagline, p.org ?? "", ...p.tags].some((s) => s.toLowerCase().includes(q)))
  );
  const current = visible.find((p) => p.slug === selected);
  const source = current?.links[0];

  // First click selects a row, a second click on the same row opens it —
  // same as picking a save file.
  function pick(slug: string) {
    if (selected === slug) router.push(`/projects/${slug}/`);
    else setSelected(slug);
  }

  return (
    <Screen
      title="Select Project"
      actions={
        <>
          {current ? (
            <Link href={`/projects/${current.slug}/`} className="pixel-btn min-w-28 flex-1 py-2.5 text-lg">
              Open
            </Link>
          ) : (
            <button type="button" disabled className="pixel-btn min-w-28 flex-1 py-2.5 text-lg">
              Open
            </button>
          )}
          {source ? (
            <a href={source.href} className="pixel-btn min-w-28 flex-1 py-2.5 text-lg">
              {source.label}
            </a>
          ) : (
            <button type="button" disabled className="pixel-btn min-w-28 flex-1 py-2.5 text-lg">
              {current ? "No link" : "Source"}
            </button>
          )}
          <button
            type="button"
            disabled={!current}
            onClick={() => setSelected(null)}
            className="pixel-btn min-w-28 flex-1 py-2.5 text-lg"
          >
            Cancel
          </button>
          <BackButton href="/" />
        </>
      }
    >
      <div className="mx-auto flex max-w-xl flex-col gap-3 px-1 pt-1">
        <label className="sr-only" htmlFor="project-search">
          Search projects
        </label>
        <input
          id="project-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects…"
          className="pixel-inset w-full px-3 py-2 font-pixel text-lg text-ink placeholder:text-muted/70 focus:outline-none focus-visible:outline-gold"
        />
        <div role="group" aria-label="Filter by kind" className="flex flex-wrap justify-center gap-3 py-1">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              data-active={kind === f}
              aria-pressed={kind === f}
              onClick={() => setKind(f)}
              className="pixel-btn px-3 py-1 text-sm"
            >
              {f === "all" ? "All" : kindLabel[f]}{" "}
              <span className="opacity-70">
                {f === "all" ? projects.length : projects.filter((p) => p.kind === f).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      <ul className="mt-4 flex flex-col gap-4 px-1 pb-2">
        {visible.map((p) => {
          const isSelected = p.slug === selected;
          const hasVideo = p.demo && "youtubeId" in p.demo;
          return (
            <li key={p.slug}>
              <button
                type="button"
                onClick={() => pick(p.slug)}
                aria-pressed={isSelected}
                className={`pixel-panel flex w-full items-start gap-4 p-4 text-left transition-colors ${
                  isSelected ? "outline-4 outline-offset-4 outline-gold" : "hover:bg-[#fbf1da]"
                }`}
              >
                <ProjectIcon project={p} />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="font-pixel text-xl text-ink">{p.name}</span>
                    <span className="font-mono text-xs text-muted">{p.year}</span>
                    <span className="bg-wood px-1.5 font-pixel text-xs text-parchment">
                      {kindLabel[p.kind]}
                      {p.org && p.kind !== "personal" ? ` · ${p.org}` : ""}
                    </span>
                    {hasVideo && (
                      <span className="bg-accent px-1.5 font-pixel text-xs text-gold">▶ demo</span>
                    )}
                  </div>
                  <p className="mt-1 text-[15px] leading-snug text-muted">{p.tagline}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="hidden sm:block">
                  <StatusBadge status={p.status} />
                </div>
              </button>
            </li>
          );
        })}
        {visible.length === 0 && (
          <li className="pixel-panel p-6 text-center font-pixel text-lg text-muted">
            No projects match that search.
          </li>
        )}
      </ul>

      <p className="pt-2 text-center font-pixel text-sm text-parchment/80">
        {visible.length} {visible.length === 1 ? "project" : "projects"} · select a project, click
        again to open
      </p>
    </Screen>
  );
}
