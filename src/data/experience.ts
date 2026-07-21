// Edit this file to update your experience list. Add or remove entries
// freely — the layout supports any number of rows.

export type ExperienceEntry = {
  role: string;
  org: string;
  start: string;
  end: string; // use "Present" for current roles
  description: string;
};

export const experience: ExperienceEntry[] = [
  {
    role: "Software Engineer Intern",
    org: "State Farm",
    start: "Jun 2026",
    end: "Present",
    description:
      "Built a REST API endpoint with Spring Boot and JUnit to automate issuance timestamps for IBM IMS transactions, cutting manual setup time by ~88%. Deployed and validated changes across QA and dev on AWS ROSA using Bruno for endpoint testing.",
  },
  {
    role: "Junior Programmer Intern",
    org: "Transurban",
    start: "Jan 2026",
    end: "May 2026",
    description:
      "Built a Python pipeline processing 4,000+ daily ETC transactions to automate statistical analysis of toll violations, and a Pandas-based alerting script that cut failure-detection latency by ~99% compared to manual health checks.",
  },
  {
    role: "Undergraduate Teaching Assistant",
    org: "George Mason University",
    start: "Jan 2026",
    end: "May 2026",
    description:
      "Tutored a class of 40+ students, answered 200+ questions on the course Q&A page, and debugged student Java programs during office hours covering recursion, OOP, and data structures.",
  },
];
