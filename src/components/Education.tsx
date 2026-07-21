import { education } from "@/data/education";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading eyebrow="school" title="Education" />
      <ol className="flex flex-col">
        {education.map((e, i) => (
          <li
            key={i}
            className="grid grid-cols-1 gap-1 border-t border-line py-6 first:border-t-0 sm:grid-cols-[140px_1fr]"
          >
            <p className="font-mono text-xs text-moss">{e.timeframe}</p>
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
