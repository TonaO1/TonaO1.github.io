import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { experience } from "@/data/experience";
import { SectionHeading } from "./SectionHeading";

// Only render a logo if the file has actually been dropped into /public —
// keeps not-yet-added logos from showing up as broken images.
function hasLogo(logo?: string) {
  return !!logo && existsSync(join(process.cwd(), "public", logo));
}

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading eyebrow="where I've worked" title="Experience" />
      <ol className="flex flex-col">
        {experience.map((e, i) => (
          <li
            key={i}
            className="grid grid-cols-1 gap-4 border-t border-line py-6 first:border-t-0 sm:grid-cols-[140px_1fr]"
          >
            <div className="flex items-center justify-center">
              {hasLogo(e.logo) && (
                <Image
                  src={e.logo!}
                  alt={`${e.org} logo`}
                  width={140}
                  height={140}
                  className="h-auto w-full max-h-36 rounded-lg border border-line bg-paper-raised object-contain p-3"
                />
              )}
            </div>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-medium text-ink">
                  {e.role}{" "}
                  <span className="font-sans text-base font-normal text-moss">
                    @ {e.org}
                  </span>
                </h3>
                <p className="shrink-0 font-mono text-xs text-moss">
                  {e.start} — {e.end}
                </p>
              </div>
              <p className="mt-1.5 leading-relaxed text-moss">
                {e.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
