// Edit this file to update your projects. Each one gets a row on the
// /projects select screen and its own demo page at /projects/<slug>.
//
// `kind` drives the Personal / Hackathon / Internship filter.
// `demo` controls the video slot at the top of the project page:
//   - { youtubeId: "..." }        → embedded YouTube player (works for Shorts
//                                   too; set `vertical: true` for 9:16 videos)
//   - { unavailable: "reason" }   → an honest "no demo available" panel
//   - leave it out                → "demo coming soon" placeholder
// The YouTube ID is the part after `watch?v=`, `youtu.be/`, or `shorts/`.

export type ProjectKind = "personal" | "hackathon" | "internship";

export type ProjectStatus = "Live" | "Deployed" | "Shipped" | "In-Dev" | "Internal";

export type ProjectDemo =
  | { youtubeId: string; vertical?: boolean }
  | { unavailable: string };

export type Project = {
  slug: string;
  name: string;
  kind: ProjectKind;
  year: string;
  status: ProjectStatus;
  org?: string; // who it was built for, e.g. the internship company
  award?: string;
  tagline: string; // one line, shown in the project list
  blurb: string; // full description, shown on the project page
  tags: string[];
  links: { label: string; href: string }[]; // first link is the list's "Source" button
  image?: string; // square-ish icon/cover under /public
  demo?: ProjectDemo;
  posts?: string[]; // slugs from posts.ts to list as related build logs
};

export const projects: Project[] = [
  {
    slug: "parkeye",
    name: "Parkeye",
    kind: "personal",
    year: "2026",
    status: "Live",
    award: "📱 500+ App Store downloads in week one · 400+ weekly active users",
    tagline:
      "Campus parking app forecasting lot occupancy at George Mason up to 4 hours ahead.",
    blurb:
      "A campus parking app that forecasts lot occupancy at George Mason up to 4 hours ahead. An ETL pipeline loads 5 years of history (25,700+ records across 14 lots) into PostgreSQL to train an XGBoost quantile model, served by a FastAPI backend to a React Native client and corrected in real time by crowdsourced park and departure events.",
    tags: ["XGBoost", "FastAPI", "PostgreSQL", "React Native", "Sentry"],
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/parkeye-campus-parking/id6790588821" },
      { label: "parkeye.app", href: "https://www.parkeye.app/" },
    ],
    image: "/logos/ParkeyeLogo.png",
    demo: { youtubeId: "AQ2-pI8AKt8", vertical: true },
    posts: ["how-parkeye-predicts-parking"],
  },
  {
    slug: "ufc-styles",
    name: "UFCStyles",
    kind: "personal",
    year: "2026",
    status: "Deployed",
    tagline:
      "Style-similarity API that captures how a fighter fights, not how well.",
    blurb:
      "A style-similarity API that captures how a fighter fights, not how well. I trained PyTorch autoencoder and contrastive (NT-Xent) encoders on leak-free, point-in-time snapshots of 8,800+ UFC bouts; the embeddings recover held-out martial-arts backgrounds at 1.45x chance level (0.29 vs. 0.20). Queries return in 70ms (p95) from a torch-free NumPy inference path on AWS Lambda behind API Gateway, with DynamoDB and ECR provisioned end to end in Terraform.",
    tags: ["PyTorch", "AWS Lambda", "API Gateway", "DynamoDB", "Terraform"],
    links: [{ label: "GitHub", href: "https://github.com/TonaO1/UFCStyles" }],
    posts: ["ufc-styles-day-1"],
  },
  {
    slug: "consil-ai",
    name: "Consil AI",
    kind: "hackathon",
    year: "2025",
    status: "Shipped",
    org: "PatriotHacks 2025",
    award: "🏆 1st Place of 33 teams, PatriotHacks 2025 (AI Track)",
    tagline:
      "Teacher dashboard for student profiles, improvement plans, and seating charts, with an AI planner.",
    blurb:
      "A teacher dashboard for managing student profiles, generating personalized improvement plans, and building classroom seating charts from one interface, on a Supabase-backed data layer handling auth, storage, and access control. An Azure OpenAI planning agent with a BeautifulSoup scraper behind Next.js API routes returns source-backed improvement plans for each student.",
    tags: ["Next.js", "Supabase", "TypeScript", "Azure"],
    links: [{ label: "GitHub", href: "https://github.com/cchamb26/consilai" }],
    image: "/logos/ConsilAI.png",
  },
  {
    slug: "state-farm-timestamp-tool",
    name: "Issuance Timestamp Tool",
    kind: "internship",
    year: "2026",
    status: "Internal",
    org: "State Farm",
    tagline:
      "Internal full-stack tool that simplified issuance timestamp setup for 20+ engineers.",
    blurb:
      "A full-stack internal tool (Java Spring Boot REST API + React frontend) that simplified issuance timestamp setup for 20+ engineers across 100+ weekly requests. Shipped to dev and QA on Red Hat OpenShift on AWS through a GitLab CI/CD pipeline gated by a JUnit regression suite.",
    tags: ["Spring Boot", "React", "OpenShift", "GitLab CI/CD", "JUnit"],
    links: [],
    image: "/logos/state-farm.png",
    demo: {
      unavailable:
        "Built inside State Farm's internal network during my Summer 2026 internship. I no longer have access to the code or the environment, so there's no recording to show.",
    },
  },
];

export const kindLabel: Record<ProjectKind, string> = {
  personal: "Personal",
  hackathon: "Hackathon",
  internship: "Internship",
};
