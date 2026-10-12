import type { Metadata } from "next";
import { ProjectSelect } from "@/components/ProjectSelect";

export const metadata: Metadata = {
  title: "Projects | Tona Otoro",
  description: "Personal, hackathon, and internship projects, each with a demo.",
};

export default function ProjectsPage() {
  return <ProjectSelect />;
}
