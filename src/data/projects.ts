// Edit this file to update your project cards. Add more objects to this
// array as you ship more projects — the layout supports any number of them.

export type Project = {
  slug: string;
  name: string;
  award?: string;
  blurb: string;
  tags: string[];
  links: { label: string; href: string }[];
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "parkeye",
    name: "Parkeye",
    award: "📱 500+ App Store downloads in week one · 400+ weekly active users",
    blurb:
      "A campus parking app that forecasts lot occupancy at George Mason up to 4 hours ahead. An ETL pipeline loads 5 years of history (25,700+ records across 14 lots) into PostgreSQL to train an XGBoost quantile model, served by a FastAPI backend to a React Native client and corrected in real time by crowdsourced park and departure events.",
    tags: ["XGBoost", "FastAPI", "PostgreSQL", "React Native", "Sentry"],
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/parkeye-campus-parking/id6790588821" },
      { label: "Demo", href: "https://youtube.com/shorts/AQ2-pI8AKt8?feature=share" },
    ],
    image: "/logos/ParkeyeLogo.png",
  },
  {
    slug: "ufc-styles",
    name: "UFCStyles",
    blurb:
      "A style-similarity API that captures how a fighter fights, not how well. I trained PyTorch autoencoder and contrastive (NT-Xent) encoders on 8,800+ UFC bouts, using only data available before each fight. The resulting embeddings recover fighters' martial-arts backgrounds 45 points above a random baseline. Queries return in 70ms (p95) from a lightweight NumPy inference path on AWS Lambda, with all infrastructure provisioned in Terraform.",
    tags: ["PyTorch", "AWS Lambda", "DynamoDB", "Terraform"],
    links: [
      { label: "GitHub", href: "https://github.com/TonaO1/UFCStyles" },
      { label: "Build log", href: "/blog/ufc-styles-day-1/" },
    ],
  },
  {
    slug: "consil-ai",
    name: "Consil AI",
    award: "🏆 1st Place, PatriotHacks 2025 (AI Track)",
    blurb:
      "A teacher dashboard for managing student profiles, generating personalized improvement plans, and building classroom seating charts from one interface, with a built-in AI planning assistant (an Azure OpenAI Phi agent plus a source-backed web scraper).",
    tags: ["Next.js", "Supabase", "TypeScript", "Azure"],
    links: [{ label: "GitHub", href: "https://github.com/cchamb26/consilai" }],
    image: "/logos/ConsilAI-cover.png",
  },
];
