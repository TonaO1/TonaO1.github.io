// Edit this file to update the build log preview shown on the homepage.
// The full post lives at src/app/blog/[slug]/page.tsx, sourced from posts.ts.

export type LogEntry = {
  slug: string;
  date: string; // e.g. "2026-06-14"
  title: string;
  excerpt: string;
};

export const buildLog: LogEntry[] = [
  {
    slug: "ufc-styles-day-1",
    date: "2026-09-02",
    title: "UFC Styles, day 1: turning six scraped CSVs into four clean tables",
    excerpt:
      "UFCStats has no API, so day 1 was an adapter that joins six scraped CSVs into four tables — and every string they share lies: trailing spaces, renamed cards, and eight names that belong to two fighters each.",
  },
  {
    slug: "how-parkeye-predicts-parking",
    date: "2026-09-02",
    title: "How Parkeye predicts parking at GMU",
    excerpt:
      "XGBoost forecasts trained on five years of lot counts, corrected in real time by crowdsourced park and departure events — without ever recording who you are or where you went.",
  },
];
