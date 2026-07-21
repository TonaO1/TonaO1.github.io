import { experience } from "@/data/experience";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading eyebrow="where I've worked" title="Experience" />
      <ol className="flex flex-col">
        {experience.map((e, i) => (
          <li
            key={i}
            className="grid grid-cols-1 gap-1 border-t border-line py-6 first:border-t-0 sm:grid-cols-[140px_1fr]"
          >
            <p className="font-mono text-xs text-moss">
              {e.start} — {e.end}
            </p>
            <div>
              <h3 className="font-display text-xl font-medium text-ink">
                {e.role}{" "}
                <span className="font-sans text-base font-normal text-moss">
                  @ {e.org}
                </span>
              </h3>
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
