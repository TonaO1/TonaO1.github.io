// Edit this file to update the build log preview shown on the homepage.
// The full post lives at src/app/blog/[slug]/page.tsx, sourced from posts.ts.

export type LogEntry = {
  slug: string;
  date: string; // e.g. "2026-06-14"
  title: string;
  excerpt: string;
};

export const buildLog: LogEntry[] = [];
