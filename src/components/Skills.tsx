import { skills } from "@/data/skills";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading eyebrow="what I work with" title="Skills" />
      <div className="flex flex-col gap-5">
        {skills.map((g) => (
          <div key={g.label} className="grid grid-cols-1 gap-2 sm:grid-cols-[140px_1fr]">
            <p className="font-mono text-xs text-moss">{g.label}</p>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-paper-raised px-2.5 py-1 font-mono text-[11px] text-moss"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
