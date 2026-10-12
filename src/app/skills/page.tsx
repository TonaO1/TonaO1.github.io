import type { Metadata } from "next";
import { skills } from "@/data/skills";
import { Screen, Panel } from "@/components/Screen";

export const metadata: Metadata = {
  title: "Skills | Tona Otoro",
  description: "Languages, frameworks, databases, and tools Tona Otoro works with.",
};

// Each skill group renders as a row of inventory slots.
export default function SkillsPage() {
  return (
    <Screen title="Inventory">
      <div className="flex flex-col gap-6 px-1 py-1">
        {skills.map((g) => (
          <Panel key={g.label} title={g.label}>
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="pixel-inset flex min-h-12 items-center justify-center px-2 py-2 text-center font-pixel text-[15px] leading-tight text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Panel>
        ))}
      </div>
    </Screen>
  );
}
