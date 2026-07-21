import Image from "next/image";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 flex-1">
          <p className="font-mono text-xs uppercase tracking-widest text-pine">
            {site.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-5xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl">
            {site.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/80">
            {site.tagline}
          </p>
          <p className="mt-3 max-w-xl leading-relaxed text-moss">{site.intro}</p>
          {site.introLink && (
            <a
              href={site.introLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block w-fit font-mono text-sm text-pine underline decoration-transparent underline-offset-4 transition-colors hover:decoration-pine"
            >
              {site.introLink.label} →
            </a>
          )}

          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-line bg-paper-raised px-4 py-1.5 font-mono text-xs text-moss">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
            </span>
            {site.status}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={site.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-pine px-5 py-2.5 font-mono text-sm text-paper-raised transition-colors hover:bg-pine-dim"
            >
              Resume
            </a>
            <a
              href={site.links.email}
              className="font-mono text-sm text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ember"
            >
              Email
            </a>
            <a
              href={site.links.github}
              className="font-mono text-sm text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ember"
            >
              GitHub
            </a>
            <a
              href={site.links.linkedin}
              className="font-mono text-sm text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ember"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {site.headshot && (
          <Image
            src={site.headshot}
            alt={`Portrait of ${site.name}`}
            width={320}
            height={400}
            priority
            className="h-56 w-44 shrink-0 rounded-2xl border border-line object-cover shadow-sm sm:h-72 sm:w-56"
          />
        )}
      </div>
    </section>
  );
}
