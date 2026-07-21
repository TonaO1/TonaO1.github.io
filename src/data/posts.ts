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

export const posts: Post[] = [
  {
    slug: "parkeye",
    title: "Building Parkeye",
    date: "[TODO: YYYY-MM-DD]",
    readingTime: "[TODO: e.g. 6 min read]",
    blocks: [
      {
        type: "p",
        text: "[TODO: Open with the problem — what made you want to build Parkeye, and what wasn't working before it existed.]",
      },
      { type: "h2", text: "The problem" },
      {
        type: "p",
        text: "[TODO: Describe the parking problem on campus and who Parkeye is for.]",
      },
      { type: "h2", text: "How it's built" },
      {
        type: "p",
        text: "[TODO: Walk through the architecture — the ETL pipeline into PostgreSQL, the 21 engineered features and XGBoost quantile regression model, the FastAPI microservice and batch scheduler, and the React Native frontend. This is the part hackathon judges and MLH reviewers care about most.]",
      },
      { type: "h2", text: "What went wrong" },
      {
        type: "p",
        text: "[TODO: The real, specific things that broke or took longer than expected, and how you debugged them.]",
      },
      { type: "h2", text: "What I'd do differently" },
      {
        type: "p",
        text: "[TODO: Honest reflection — what you'd change with more time, and what you learned from piloting it with George Mason parking staff.]",
      },
    ],
  },
];
