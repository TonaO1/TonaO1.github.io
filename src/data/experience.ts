// Edit this file to update the /experience screen. Add or remove entries
// freely — the layout supports any number of rows.
//
// `logo` is optional — point it at a file under /public/logos/ and it'll
// render next to the role.

export type ExperienceEntry = {
  role: string;
  org: string;
  start: string;
  end: string; // use "Present" for current roles
  location?: string;
  bullets: string[];
  tags: string[];
  logo?: string;
};

export const experience: ExperienceEntry[] = [
  {
    role: "Co-Founder & Backend Engineer",
    org: "Parkeye LLC",
    start: "Apr 2026",
    end: "Present",
    location: "Fairfax, VA",
    bullets: [
      "Launched a campus parking forecasting app on the App Store that hit 500+ downloads in its first week and 400+ weekly active users across George Mason's commuter student body.",
      "Built the backend as a FastAPI service over PostgreSQL, serving precomputed forecasts to a React Native client at 20ms p95 with 500 concurrent users and 600+ req/s sustained throughput in k6 load testing, with predictions recomputed on a scheduled batch worker.",
      "Designed an ETL pipeline loading 25,700+ lot-occupancy records across 5 years and 14 lots into PostgreSQL, feeding an XGBoost quantile model forecasting occupancy ranges up to 4 hours out.",
    ],
    tags: ["FastAPI", "PostgreSQL", "React Native", "XGBoost", "k6"],
    logo: "/logos/ParkeyeLogo.png",
  },
  {
    role: "Software Engineer Intern (Return Offer)",
    org: "State Farm",
    start: "Jun 2026",
    end: "Aug 2026",
    location: "Bloomington, IL",
    bullets: [
      "Engineered Spring Boot and IBM z/OS Connect REST endpoints that cut per-request time from 2 minutes to 15 seconds for scheduling product model deployments serving 130 million customers.",
      "Built a full-stack internal tool (Spring Boot REST API + React) that simplified issuance timestamp setup for 20+ engineers across 100+ weekly requests.",
      "Shipped the service to dev and QA on Red Hat OpenShift on AWS through a GitLab CI/CD pipeline, gated by a JUnit regression suite on every release.",
    ],
    tags: ["Spring Boot", "z/OS Connect", "React", "OpenShift", "GitLab CI/CD", "JUnit"],
    logo: "/logos/state-farm.png",
  },
  {
    role: "Junior Programmer Intern",
    org: "Transurban",
    start: "Jan 2026",
    end: "May 2026",
    location: "Alexandria, VA",
    bullets: [
      "Built a Python pipeline processing 4,000+ daily ETC transactions to automate statistical analysis of toll violations, logging detection confidence metrics to MySQL.",
      "Automated monitoring of ETC transaction build latency with a Pandas alerting script, replacing weekly manual health checks and cutting failure-detection latency by 99%.",
    ],
    tags: ["Python", "Pandas", "MySQL"],
    logo: "/logos/transurban.png",
  },
  {
    role: "Undergraduate Teaching Assistant",
    org: "George Mason University",
    start: "Jan 2026",
    end: "May 2026",
    location: "Fairfax, VA",
    bullets: [
      "Tutored 40+ students across office hours, lab sessions, and 200+ Piazza responses, debugging Java programs and diagnosing errors in recursion, object-oriented design, and data structure implementations.",
    ],
    tags: ["Java", "Teaching"],
    logo: "/logos/gmuTA.png",
  },
];
