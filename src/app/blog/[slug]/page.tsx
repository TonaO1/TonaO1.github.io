import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts } from "@/data/posts";
import { Screen, BackButton, Chips } from "@/components/Screen";

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
  return { title: post ? `${post.title} | Tona Otoro` : "Post not found" };
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
    <Screen title="Journal" actions={<BackButton href="/blog/" label="All entries" />}>
      <article className="pixel-panel mx-auto my-1 max-w-2xl px-6 py-8 sm:px-10">
        <p className="font-mono text-xs text-muted">
          {post.date} · {post.readingTime}
        </p>
        <h2 className="mt-2 font-pixel text-3xl leading-tight text-ink sm:text-4xl">{post.title}</h2>
        {post.tags && post.tags.length > 0 && (
          <div className="mt-4">
            <Chips items={post.tags} />
          </div>
        )}

        <div className="mt-8 flex flex-col gap-5">
          {post.blocks.map((block, i) =>
            block.type === "h2" ? (
              <h3 key={i} className="mt-3 font-pixel text-2xl text-accent">
                {block.text}
              </h3>
            ) : (
              <p key={i} className="text-[17px] leading-relaxed text-ink/85">
                {block.text}
              </p>
            )
          )}
        </div>
      </article>
    </Screen>
  );
}
