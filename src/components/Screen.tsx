import Link from "next/link";
import { Options } from "./Options";

// Shared frame for every inner screen: dimmed scene, pixel title at the top,
// a scrolling content area, and a bottom bar of wooden buttons. Mirrors a
// game's sub-menu: everything fits in one viewport and the list scrolls.

export function Screen({
  title,
  children,
  actions,
  wide = false,
}: {
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode; // defaults to a single Back-to-menu button
  wide?: boolean;
}) {
  return (
    <div className="relative flex h-dvh flex-col bg-[var(--dusk)]">
      <h1 className="shrink-0 px-4 pt-5 pb-3 text-center font-pixel text-2xl text-parchment [text-shadow:3px_3px_0_var(--wood-dark)] sm:text-3xl">
        {title}
      </h1>

      <main
        className={`screen-scroll mx-auto min-h-0 w-full flex-1 overflow-y-auto px-4 py-3 ${
          wide ? "max-w-6xl" : "max-w-4xl"
        }`}
      >
        {children}
      </main>

      <footer className="flex shrink-0 items-center gap-4 px-4 pt-3 pb-4">
        <Options />
        <div className="mx-auto flex w-full max-w-3xl flex-wrap justify-center gap-3 sm:flex-nowrap">
          {actions ?? <BackButton href="/" label="Back" />}
        </div>
        {/* Balances the Options button so the action row stays centered. */}
        <span className="hidden w-10 shrink-0 sm:block" aria-hidden="true" />
      </footer>
    </div>
  );
}

export function BackButton({ href, label = "Back" }: { href: string; label?: string }) {
  return (
    <Link href={href} className="pixel-btn min-w-32 flex-1 py-2.5 text-lg sm:max-w-64">
      {label}
    </Link>
  );
}

// Generic parchment section with a pixel heading, used inside screens.
export function Panel({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`pixel-panel p-5 ${className}`}>
      {title && <h2 className="mb-3 font-pixel text-xl text-ink">{title}</h2>}
      {children}
    </section>
  );
}

export function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <li key={t} className="chip">
          {t}
        </li>
      ))}
    </ul>
  );
}
