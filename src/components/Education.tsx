import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { education } from "@/data/education";
import { SectionHeading } from "./SectionHeading";

// Only render a logo if the file has actually been dropped into /public —
// keeps not-yet-added logos from showing up as broken images.
function hasLogo(logo?: string) {
  return !!logo && existsSync(join(process.cwd(), "public", logo));
}

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading eyebrow="school" title="Education" />
      <ol className="flex flex-col">
        {education.map((e, i) => (
          <li
            key={i}
            className="grid grid-cols-1 gap-4 border-t border-line py-6 first:border-t-0 sm:grid-cols-[140px_1fr]"
          >
            <div className="flex items-center justify-center">
              {hasLogo(e.logo) && (
                <Image
                  src={e.logo!}
                  alt={`${e.school} logo`}
                  width={140}
                  height={140}
                  className="h-auto w-full max-h-36 rounded-lg border border-line bg-paper-raised object-contain p-3"
                />
              )}
            </div>
            <div>
              <h3 className="font-display text-xl font-medium text-ink">
                {e.degree}{" "}
                <span className="font-sans text-base font-normal text-moss">
                  @ {e.school}
                </span>
              </h3>
              <p className="mt-1 font-mono text-xs text-moss">
                {e.location}
                {e.gpa ? ` · GPA ${e.gpa}` : ""}
              </p>
              <ul className="mt-3 flex flex-col gap-1.5">
                {e.bullets.map((b) => (
                  <li key={b.label} className="leading-relaxed text-moss">
                    <span className="font-medium text-ink">{b.label}:</span>{" "}
                    {b.text}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
