// Edit this file to update your education entry.

export type EducationEntry = {
  school: string;
  degree: string;
  location: string;
  gpa?: string;
  logo?: string;
  bullets: { label: string; text: string }[];
};

export const education: EducationEntry[] = [
  {
    school: "George Mason University",
    degree: "Bachelor of Science in Computer Science",
    location: "Fairfax, VA",
    gpa: "3.97/4.00",
    logo: "/logos/GmuLogo.png",
    bullets: [
      {
        label: "Coursework",
        text: "Object-Oriented Programming (Java), Low Level Programming (C), Data Structures & Algorithms, Discrete Mathematics, Multivariable Calculus",
      },
      {
        label: "Leadership",
        text: "ColorStack Academic Chair, Google Developer Groups Technical Lead",
      },
      {
        label: "Selective Programs",
        text: "Pinterest Pin It To Win It, Capital One Tech Summit, Liberty Mutual Spark Summit",
      },
    ],
  },
];
