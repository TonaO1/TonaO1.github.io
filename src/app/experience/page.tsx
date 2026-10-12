import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import type { Metadata } from "next";
import { experience } from "@/data/experience";
import { Screen, Chips } from "@/components/Screen";

export const metadata: Metadata = {
  title: "Experience | Tona Otoro",
  description: "Where Tona Otoro has worked: Parkeye, State Farm, Transurban, and George Mason.",
};

// Only render a logo if the file has actually been dropped into /public —
// keeps not-yet-added logos from showing up as broken images.
function hasLogo(logo?: string) {
  return !!logo && existsSync(join(process.cwd(), "public", logo));
}

export default function ExperiencePage() {
  return (
    <Screen title="Experience">
      <ol className="pixel-panel mx-1 my-1 flex flex-col px-5">
        {experience.map((e, i) => (
          <li
            key={i}
            className="grid grid-cols-1 gap-3 border-t-4 border-dotted border-parchment-deep py-6 first:border-t-0 sm:grid-cols-[9rem_1fr] sm:gap-6"
          >
            <div className="flex items-center gap-3 sm:flex-col sm:items-start">
              {hasLogo(e.logo) && (
                <div className="pixel-inset h-14 w-14 shrink-0 p-1.5">
                  <Image
                    src={e.logo!}
                    alt={`${e.org} logo`}
                    width={56}
                    height={56}
                    className="h-full w-full object-contain"
                  />
                </div>
              )}
              <div className="font-mono text-xs leading-relaxed text-muted">
                <p>
                  {e.start} – {e.end}
                </p>
                {e.location && <p>{e.location}</p>}
              </div>
            </div>
            <div>
              <h2 className="font-pixel text-xl leading-snug text-ink">
                {e.role} <span className="text-accent">— {e.org}</span>
              </h2>
              <ul className="mt-2 flex flex-col gap-2">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 text-[15px] leading-relaxed text-ink/85">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 bg-leaf" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3">
                <Chips items={e.tags} />
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Screen>
  );
}
