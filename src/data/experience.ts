// Edit this file to update your experience list. Add or remove entries
// freely — the layout supports any number of rows.
//
// `logo` is optional — point it at a file under /public/logos/ and it'll
// render next to the role.

export type ExperienceEntry = {
  role: string;
  org: string;
  start: string;
  end: string; // use "Present" for current roles
  description: string;
  logo?: string;
};

export const experience: ExperienceEntry[] = [
  {
    role: "Co-Founder & Backend Engineer",
    org: "Parkeye",
    start: "Apr 2026",
    end: "Present",
    description:
      "Launched a campus parking forecasting app on the App Store that hit 500+ downloads in its first week and 400+ weekly active users across George Mason's commuter student body. Built the backend as a FastAPI service over PostgreSQL serving a React Native client on 30-second polling, with a scheduled batch worker recomputing forecasts and Sentry surfacing production failures before users report them. Designed the ETL pipeline loading 25,700+ lot-occupancy records (5 years, 14 lots) that feeds an XGBoost quantile model forecasting occupancy ranges up to 4 hours out.",
    logo: "/logos/ParkeyeLogo.png",
  },
  {
    role: "Software Engineer Intern (Return Offer)",
    org: "State Farm",
    start: "Jun 2026",
    end: "Aug 2026",
    description:
      "Engineered Spring Boot and IBM z/OS Connect REST endpoints that cut per-request time from 2 minutes to 15 seconds for scheduling product model deployments serving 130 million customers. Built a full-stack internal tool (Spring Boot REST API + React) that simplified issuance timestamp setup for 20+ engineers across 100+ weekly requests, shipped to dev and QA on Red Hat OpenShift on AWS through a GitLab CI/CD pipeline gated by a JUnit regression suite.",
    logo: "/logos/state-farm.png",
  },
  {
    role: "Junior Programmer Intern",
    org: "Transurban",
    start: "Jan 2026",
    end: "May 2026",
    description:
      "Built a Python pipeline processing 4,000+ daily ETC transactions to automate statistical analysis of toll violations, logging detection confidence metrics to MySQL, and a Pandas-based alerting script that replaced weekly manual health checks and cut failure-detection latency by ~99%.",
    logo: "/logos/transurban.png",
  },
  {
    role: "Undergraduate Teaching Assistant",
    org: "George Mason University",
    start: "Jan 2026",
    end: "May 2026",
    description:
      "Tutored 40+ students across office hours and lab sessions, answered 200+ Piazza questions, and debugged student Java programs covering recursion, object-oriented design, and data structures.",
    logo: "/logos/gmuTA.png",
  },
];
