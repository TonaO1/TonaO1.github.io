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
