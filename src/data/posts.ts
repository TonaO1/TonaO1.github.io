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
  tags?: string[]; // optional stack chips shown under the title
  blocks: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "ufc-styles-day-1",
    title: "UFC Styles, day 1: turning six scraped CSVs into four clean tables",
    date: "2026-09-02",
    readingTime: "2 min read",
    tags: ["Python", "pandas", "NumPy", "UFCStats"],
    blocks: [
      {
        type: "p",
        text: "The goal is an embedding that captures how a fighter fights, not how well. Day 1 was the data.",
      },
      { type: "h2", text: "The snapshot" },
      {
        type: "p",
        text: "UFCStats has no API, so I collected a snapshot from Greco1899's scrape_ufc_stats (784 events through UFC 330, 8,859 bouts, 41,672 fighter-round stat rows, 4,588 fighters) and wrote the adapter that joins its six CSVs into events, fights, fight stats, and fighters.",
      },
      { type: "h2", text: "The strings lie" },
      {
        type: "p",
        text: "The tables only share strings, and the strings lie. Every event name in the results table has a trailing space, so a merge on it matches zero rows without a warning. Two cards were renamed to Noche UFC after the fact, leaving 25 bouts duplicated with no date; a missing date passes a leak-free check silently, so the adapter requires a successful event join and asserts every fight ID is unique.",
      },
      {
        type: "p",
        text: "Fighters are identified by name only, and eight names belong to two fighters each. The adapter breaks each tie on listed weight, because merging a flyweight and a middleweight under one ID would invent a fake hybrid in the embedding. Five broken names are hand-mapped rather than fuzzy-matched, since Patricio Freire is one edit from his brother Patricky.",
      },
      { type: "h2", text: "Two filters I dropped" },
      {
        type: "p",
        text: "DWCS is structurally unreachable from the scraper's index, and TUF Finale cards are real sanctioned bouts that include four title fights.",
      },
      { type: "h2", text: "Checks that fail loudly" },
      {
        type: "p",
        text: "The partition contract, head plus body plus leg equals significant strikes and distance plus clinch plus ground equals the same, holds with zero violations. Statless rows are frozen at 42, and unresolved fighter IDs at zero, so a refresh that breaks a name fails loudly.",
      },
      {
        type: "p",
        text: "Output: 8,832 fights, 41,506 stat rows, all 4,588 fighters kept, because scope is day 2's job.",
      },
    ],
  },
  {
    slug: "how-parkeye-predicts-parking",
    title: "How Parkeye predicts parking at GMU",
    date: "2026-09-02",
    readingTime: "2 min read",
    tags: ["React Native", "FastAPI", "PostgreSQL", "XGBoost", "Pytest"],
    blocks: [
      {
        type: "p",
        text: "Every client pulls fresh lot availability from our API every 30 seconds. Here's where those numbers come from.",
      },
      { type: "h2", text: "Forecasting from five years of history" },
      {
        type: "p",
        text: "Forecasting starts with XGBoost models trained on five years of historic lot counts collected by the George Mason parking department, with features for breaks, exam weeks, and day of the week.",
      },
      { type: "h2", text: "Crowdsourcing fills the gap" },
      {
        type: "p",
        text: "Snapshots can't capture live conditions, so crowdsourcing fills the gap. With a user's permission, one dormant geofence around campus wakes the app on arrival; on-device motion and dwell detection then work out which lot you parked in and when you left.",
      },
      {
        type: "p",
        text: "A park means a spot filled; a departure means one opened, and those signals correct the model's predictions in real time.",
      },
      { type: "h2", text: "What we collect, and what we don't" },
      {
        type: "p",
        text: "Park and departure events carry only a lot ID, a timestamp, and a random device identifier our app generates and rotates every two weeks. We never record your name, your account, or GPS coordinates.",
      },
      {
        type: "p",
        text: "Raw events are deleted after seven days; no availability figure is published unless at least three devices contributed; and off campus, detection doesn't run at all.",
      },
    ],
  },
];
