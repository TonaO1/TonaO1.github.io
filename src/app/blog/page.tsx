import type { Metadata } from "next";
import { JournalSelect } from "@/components/JournalSelect";

export const metadata: Metadata = {
  title: "Journal | Tona Otoro",
  description: "Notes from building Parkeye, UFCStyles, and other projects.",
};

export default function BlogIndex() {
  return <JournalSelect />;
}
