import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return { title: post ? `${post.title} — Tona Otoro` : "Post not found" };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main className="flex-1">
      <article className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
        <Link
          href="/#log"
          className="font-mono text-xs uppercase tracking-widest text-pine transition-colors hover:text-pine-dim"
        >
          ← Back to writing
        </Link>

        <div className="mt-6 flex items-center gap-3 font-mono text-xs text-moss">
          <span className="text-ember">$</span>
          <span>{post.date}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime}</span>
        </div>

        <h1 className="mt-3 font-display text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
          {post.title}
        </h1>

        <div className="prose-log mt-10 flex flex-col gap-5">
          {post.blocks.map((block, i) =>
            block.type === "h2" ? (
              <h2
                key={i}
                className="mt-4 font-display text-2xl font-medium text-ink"
              >
                {block.text}
              </h2>
            ) : (
              <p key={i} className="leading-relaxed text-ink/85">
                {block.text}
              </p>
            )
          )}
        </div>
      </article>
    </main>
  );
}
