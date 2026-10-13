import Link from "next/link";
import { site } from "@/data/site";
import { Options } from "@/components/Options";
import { IconGithub, IconLinkedin } from "@/components/icons";

const [firstName, lastName] = site.name.toUpperCase().split(" ");

export default function Home() {
  return (
    <div className="relative flex min-h-dvh flex-col items-center px-4 pt-[8vh] pb-4">
      <header className="relative text-center">
        <h1 className="logo-text text-5xl leading-none font-bold tracking-wide sm:text-7xl md:text-8xl">
          {firstName} {lastName}
        </h1>
        <p className="logo-text logo-sub mt-5 text-2xl font-bold tracking-[0.25em] sm:text-4xl">
          PORTFOLIO
        </p>
        {/* Phones: sits under the logo so it can't cover PORTFOLIO. Wider
            screens: tilted off the logo's bottom-right corner. */}
        <p className="splash mx-auto mt-6 w-fit origin-center text-lg whitespace-nowrap sm:absolute sm:-right-20 sm:bottom-0 sm:mt-0 sm:text-3xl">
          {site.splash}
        </p>
      </header>

      <nav aria-label="Main menu" className="mt-[7vh] flex w-full max-w-md flex-col gap-4 px-1">
        <Link href="/projects/" className="pixel-btn py-3 text-xl">
          Projects
        </Link>
        <Link href="/experience/" className="pixel-btn py-3 text-xl">
          Experience
        </Link>
        <Link href="/about/" className="pixel-btn py-3 text-xl">
          Character
        </Link>

        <div className="mt-4 flex gap-3 sm:gap-4">
          <a href={site.links.github} aria-label="GitHub" className="pixel-btn h-12 w-12 shrink-0">
            <IconGithub className="h-5 w-5" />
          </a>
          <Link href="/blog/" className="pixel-btn flex-1 text-base sm:text-lg">
            Journal
          </Link>
          <Link href="/skills/" className="pixel-btn flex-1 text-base sm:text-lg">
            Skills
          </Link>
          <a href={site.links.linkedin} aria-label="LinkedIn" className="pixel-btn h-12 w-12 shrink-0">
            <IconLinkedin className="h-5 w-5" />
          </a>
        </div>
      </nav>

      <footer className="mt-auto flex w-full flex-col-reverse items-center gap-3 pt-10 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-center gap-3">
          <Options />
          <Link
            href="/changelog/"
            className="bg-wood-dark/85 px-2 py-0.5 font-pixel text-base text-parchment [text-shadow:1px_1px_0_var(--wood-dark)] hover:text-gold sm:bg-transparent sm:p-0 sm:[text-shadow:2px_2px_0_var(--wood-dark)]"
          >
            {site.version}
          </Link>
        </div>
        {/* Phones: a dark plate and a 1px shadow keep the small pixel text
            crisp where it crosses the hill edges. */}
        <p className="w-full max-w-md bg-wood-dark/85 px-3 py-2 text-center font-pixel text-sm leading-relaxed text-parchment [text-shadow:1px_1px_0_var(--wood-dark)] sm:w-auto sm:max-w-none sm:bg-transparent sm:p-0 sm:text-right sm:leading-snug sm:[text-shadow:2px_2px_0_var(--wood-dark)]">
          © {new Date().getFullYear()} {site.name}. Not affiliated with any game studio.
          <br />
          Menu style inspired by{" "}
          <a href="https://rayyanhai.dev/" className="underline hover:text-gold">
            rayyanhai.dev
          </a>{" "}
          and classic pixel RPGs.
        </p>
      </footer>
    </div>
  );
}
