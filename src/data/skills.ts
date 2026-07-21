// Edit this file to update your technical skills list.

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["HTML/CSS", "Java", "C", "Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    label: "Frameworks",
    items: [
      "React",
      "Next.js",
      "FastAPI",
      "Pytest",
      "Pandas",
      "XGBoost",
      "Scikit-learn",
      "Spring Boot",
      "JUnit",
      "React Native",
    ],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "SQLite", "MySQL"],
  },
  {
    label: "Tools & Platforms",
    items: ["Git", "Docker", "Jupyter Notebook", "Expo", "Azure", "GitHub Actions", "Jira", "AWS", "Bruno"],
  },
  {
    label: "Machine Learning",
    items: ["Feature Engineering", "Model Training & Deployment", "Statistical Analysis", "Data Pipelines (ETL)"],
  },
  {
    label: "Concepts",
    items: [
      "RESTful APIs",
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Client-Server Architecture",
      "Relational Databases",
      "Agile Methodologies",
      "CI/CD",
    ],
  },
];
