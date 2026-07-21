// Edit this file to update your project cards. Add more objects to this
// array as you ship more projects — the layout supports any number of them.

export type Project = {
  slug: string;
  name: string;
  award?: string;
  blurb: string;
  tags: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "parkeye",
    name: "Parkeye",
    blurb:
      "A parking-availability forecasting model that predicts campus lot occupancy up to 4 hours ahead. Built an ETL pipeline from 5 years of historical data (25,700+ records across 14 George Mason lots), trained an XGBoost quantile regression model, and shipped it as a FastAPI microservice powering a React Native app — piloted with George Mason parking staff after incorporating 400+ student feedback responses.",
    tags: ["XGBoost", "FastAPI", "PostgreSQL", "React Native"],
    links: [{ label: "Demo", href: "https://youtube.com/shorts/AQ2-pI8AKt8?feature=share" }],
  },
  {
    slug: "consil-ai",
    name: "Consil AI",
    award: "🏆 1st Place, PatriotHacks 2025 (AI Track)",
    blurb:
      "A teacher dashboard for managing student profiles, generating personalized improvement plans, and building classroom seating charts from one interface — with an AI planning assistant (an Azure OpenAI Phi agent plus a source-backed web scraper) built in.",
    tags: ["Next.js", "Supabase", "TypeScript", "Azure"],
    links: [{ label: "GitHub", href: "https://github.com/cchamb26/consilai" }],
  },
];
