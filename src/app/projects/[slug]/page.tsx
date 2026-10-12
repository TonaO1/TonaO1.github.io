import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, kindLabel } from "@/data/projects";
import { posts } from "@/data/posts";
import { Screen, BackButton, Panel, Chips } from "@/components/Screen";
import { ProjectIcon, StatusBadge } from "@/components/ProjectIcon";
import { YouTubeDemo } from "@/components/YouTubeDemo";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project ? `${project.name} | Tona Otoro` : "Project not found",
    description: project?.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = posts.filter((post) => project.posts?.includes(post.slug));
  const demo = project.demo;

  return (
    <Screen
      title={`${project.name} Demo`}
      wide
      actions={
        <>
          {project.links.map((l) => (
            <a key={l.href} href={l.href} className="pixel-btn min-w-32 flex-1 py-2.5 text-lg sm:max-w-64">
              {l.label}
            </a>
          ))}
          <BackButton href="/projects/" />
        </>
      }
    >
      <div className="flex flex-col gap-6 px-1 py-1">
        {/* Video slot: every project gets one, whatever its kind. */}
        {demo && "youtubeId" in demo ? (
          <Panel className="bg-wood-dark p-3 sm:p-4">
            <YouTubeDemo
              id={demo.youtubeId}
              vertical={demo.vertical}
              title={`${project.name} demo`}
            />
          </Panel>
        ) : demo ? (
          <Panel title="No demo available">
            <p className="leading-relaxed text-muted">{demo.unavailable}</p>
          </Panel>
        ) : (
          <Panel title="Demo coming soon">
            <p className="leading-relaxed text-muted">
              A video walkthrough of {project.name} will live here once it&apos;s recorded.
            </p>
          </Panel>
        )}

        <div className="grid gap-6 md:grid-cols-[1fr_17rem]">
          <Panel title="Overview">
            {project.award && <p className="mb-3 font-pixel text-base text-ember">{project.award}</p>}
            <p className="text-[17px] leading-relaxed text-ink/85">{project.blurb}</p>
            <div className="mt-4">
              <Chips items={project.tags} />
            </div>
          </Panel>

          <Panel title="Stats" className="h-fit">
            <div className="flex items-center gap-3">
              <ProjectIcon project={project} size={56} />
              <StatusBadge status={project.status} />
            </div>
            <dl className="mt-4 flex flex-col gap-1.5 font-mono text-sm">
              <div className="pixel-inset flex justify-between px-2 py-1">
                <dt className="text-muted">Type</dt>
                <dd>{kindLabel[project.kind]}</dd>
              </div>
              {project.org && (
                <div className="pixel-inset flex justify-between gap-3 px-2 py-1">
                  <dt className="text-muted">For</dt>
                  <dd className="text-right">{project.org}</dd>
                </div>
              )}
              <div className="pixel-inset flex justify-between px-2 py-1">
                <dt className="text-muted">Year</dt>
                <dd>{project.year}</dd>
              </div>
            </dl>
          </Panel>
        </div>

        {related.length > 0 && (
          <Panel title="Journal entries">
            <ul className="flex flex-col gap-2">
              {related.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="pixel-inset block px-3 py-2 transition-colors hover:bg-parchment"
                  >
                    <span className="font-pixel text-lg text-ink">{post.title}</span>
                    <span className="block font-mono text-xs text-muted">
                      {post.date} · {post.readingTime}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Panel>
        )}
      </div>
    </Screen>
  );
}
