// Edit this file to write your full build-log posts. Add a new object to
// `posts` for each post — the route at /blog/[slug] picks it up automatically.
// Also add a matching entry to src/data/buildLog.ts so it shows on the homepage.

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string };

export type Post = {
  slug: string;
  title: string;
  date: string; // e.g. "2026-06-14"
  readingTime: string; // e.g. "6 min read"
  blocks: PostBlock[];
};

export const posts: Post[] = [];
