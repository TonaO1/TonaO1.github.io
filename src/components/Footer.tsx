import { site } from "@/data/site";

export function Footer() {
  return (
    <footer
      id="contact"
      className="mt-auto border-t border-line px-6 py-10"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm text-moss">
          Built by {site.name}.
          {site.location ? ` ${site.location}.` : ""}
        </p>
        <div className="flex gap-5 font-mono text-sm text-moss">
          <a href={site.links.email} className="transition-colors hover:text-pine">
            Email
          </a>
          <a href={site.links.github} className="transition-colors hover:text-pine">
            GitHub
          </a>
          <a href={site.links.linkedin} className="transition-colors hover:text-pine">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
