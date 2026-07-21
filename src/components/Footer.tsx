import { site } from "@/data/site";
import { IconGithub, IconLinkedin, IconMail } from "./icons";

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
        <div className="flex items-center gap-5 text-moss">
          <a href={site.links.email} aria-label="Email" className="transition-colors hover:text-pine">
            <IconMail className="h-5 w-5" />
          </a>
          <a href={site.links.github} aria-label="GitHub" className="transition-colors hover:text-pine">
            <IconGithub className="h-5 w-5" />
          </a>
          <a href={site.links.linkedin} aria-label="LinkedIn" className="transition-colors hover:text-pine">
            <IconLinkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
