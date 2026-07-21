import { projects } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading eyebrow="selected work" title="Projects" />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.slug}
            className="group flex flex-col rounded-2xl border border-line bg-paper-raised p-6 shadow-[0_1px_0_0_rgba(22,35,28,0.03)] transition-shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-2xl font-medium text-ink">
                {p.name}
              </h3>
            </div>
            {p.award && (
              <p className="mt-1 font-mono text-xs text-ember">{p.award}</p>
            )}
            <p className="mt-3 flex-1 leading-relaxed text-moss">{p.blurb}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line bg-paper px-2.5 py-1 font-mono text-[11px] text-moss"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-4 border-t border-line pt-4">
              {p.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="font-mono text-sm text-pine underline decoration-transparent underline-offset-4 transition-colors hover:decoration-pine"
                >
                  {l.label} →
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
