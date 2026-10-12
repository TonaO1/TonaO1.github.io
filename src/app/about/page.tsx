import Image from "next/image";
import type { Metadata } from "next";
import { site } from "@/data/site";
import { education } from "@/data/education";
import { Screen, Panel } from "@/components/Screen";
import { IconGithub, IconLinkedin, IconMail } from "@/components/icons";

export const metadata: Metadata = {
  title: "Character | Tona Otoro",
  description: "About Tona Otoro: background, education, and how to get in touch.",
};

const school = education[0];

export default function AboutPage() {
  const stats = [
    { label: "Class", value: site.role },
    { label: "School", value: school?.school },
    { label: "Based in", value: site.location },
    { label: "GPA", value: school?.gpa },
    { label: "Honors", value: school?.honors },
  ].filter((s) => s.value);

  return (
    <Screen title="Character" wide>
      <div className="grid gap-6 px-1 py-1 md:grid-cols-[18rem_1fr]">
        {/* Character card */}
        <div className="flex flex-col gap-4">
          <div className="pixel-panel p-3">
            <Image
              src={site.headshot}
              alt={`Portrait of ${site.name}`}
              width={480}
              height={600}
              priority
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <Panel>
            <p className="font-pixel text-3xl leading-tight text-ink">{site.name}</p>
            <p className="mt-1 font-mono text-xs text-muted">{site.eyebrow}</p>
            <dl className="mt-4 flex flex-col gap-1.5 font-mono text-sm">
              {stats.map((s) => (
                <div key={s.label} className="pixel-inset flex justify-between gap-3 px-2 py-1">
                  <dt className="text-muted">{s.label}</dt>
                  <dd className="text-right">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Panel>
        </div>

        <div className="flex flex-col gap-6">
          <Panel title="Bio">
            <p className="text-lg leading-relaxed text-ink">{site.tagline}</p>
            <p className="mt-3 text-[17px] leading-relaxed text-ink/80">
              {site.intro}{" "}
              {site.introLink && (
                <a href={site.introLink.href} className="text-accent underline underline-offset-4">
                  {site.introLink.label}
                </a>
              )}
            </p>
          </Panel>

          {education.map((e) => (
            <Panel key={e.school} title="Education">
              <p className="font-pixel text-lg text-ink">
                {e.degree} <span className="text-accent">— {e.school}</span>
              </p>
              <p className="font-mono text-xs text-muted">
                {e.location}
                {e.honors ? ` · ${e.honors}` : ""}
                {e.gpa ? ` · GPA ${e.gpa}` : ""}
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {e.bullets.map((b) => (
                  <li key={b.label} className="flex gap-2.5 text-[15px] leading-relaxed text-ink/85">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 bg-leaf" />
                    <span>
                      <span className="font-medium text-ink">{b.label}:</span> {b.text}
                    </span>
                  </li>
                ))}
              </ul>
            </Panel>
          ))}

          <Panel title="Contact">
            <div className="grid grid-cols-2 gap-4 px-1 py-1 sm:grid-cols-4">
              <a href={site.links.email} className="pixel-btn py-2.5 text-base">
                <IconMail className="h-4 w-4" /> Email
              </a>
              <a href={site.links.github} className="pixel-btn py-2.5 text-base">
                <IconGithub className="h-4 w-4" /> GitHub
              </a>
              <a href={site.links.linkedin} className="pixel-btn py-2.5 text-base">
                <IconLinkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href={site.links.resume} className="pixel-btn py-2.5 text-base">
                Resume
              </a>
            </div>
          </Panel>
        </div>
      </div>
    </Screen>
  );
}
