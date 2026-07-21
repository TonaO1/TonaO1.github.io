import Link from "next/link";
import { site } from "@/data/site";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Build log", href: "#log" },
  { label: "Contact", href: `#contact` },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur supports-backdrop-blur:bg-paper/60">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="#top"
          className="font-display text-lg font-medium tracking-tight text-ink"
        >
          {site.name}
        </Link>
        <ul className="flex items-center gap-6 font-mono text-xs uppercase tracking-wider text-moss">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="transition-colors hover:text-pine"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
