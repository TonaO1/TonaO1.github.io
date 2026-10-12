import Image from "next/image";
import type { Project, ProjectStatus } from "@/data/projects";

// Square project icon: the project's image if it has one, otherwise a
// parchment tile with its initials.
export function ProjectIcon({ project, size = 64 }: { project: Project; size?: number }) {
  const box = "pixel-inset flex shrink-0 items-center justify-center overflow-hidden";
  if (project.image) {
    return (
      <div className={box} style={{ width: size, height: size }}>
        <Image
          src={project.image}
          alt=""
          width={size}
          height={size}
          className="h-full w-full object-contain p-1.5"
        />
      </div>
    );
  }
  // Capital letters make the best initials ("UFCStyles" → "UF", "Consil AI" → "CA").
  const capitals = project.name.match(/[A-Z0-9]/g) ?? [];
  const initials = (capitals.length >= 2 ? capitals.join("") : project.name).slice(0, 2).toUpperCase();
  return (
    <div className={`${box} font-pixel text-2xl text-wood`} style={{ width: size, height: size }}>
      {initials}
    </div>
  );
}

const statusStyle: Record<ProjectStatus, { bars: number; color: string }> = {
  Live: { bars: 3, color: "text-leaf" },
  Deployed: { bars: 3, color: "text-leaf" },
  Shipped: { bars: 3, color: "text-leaf" },
  "In-Dev": { bars: 2, color: "text-ember" },
  Internal: { bars: 1, color: "text-muted" },
};

// Signal-strength bars + label, like a server/world status indicator.
export function StatusBadge({ status }: { status: ProjectStatus }) {
  const { bars, color } = statusStyle[status];
  return (
    <div className={`flex flex-col items-end gap-1 ${color}`}>
      <span className="flex items-end gap-[3px]" aria-hidden="true">
        {[1, 2, 3, 4].map((b) => (
          <span
            key={b}
            className={b <= bars ? "bg-current" : "bg-parchment-deep"}
            style={{ width: 4, height: 4 + b * 3 }}
          />
        ))}
      </span>
      <span className="font-pixel text-sm">{status}</span>
    </div>
  );
}
