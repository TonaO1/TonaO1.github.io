// Edit this file to update the changelog strip on the homepage.
// Newest first. `kind` is the git-style prefix: "+" added, "~" changed,
// "!" maintenance. `href` is optional — point it at a post or project.

export type ChangelogEntry = {
  date: string; // e.g. "2026-09-02", or "2026-08" if the day doesn't matter
  kind: "+" | "~" | "!";
  text: string;
  href?: string;
};

export const changelog: ChangelogEntry[] = [
  {
    date: "2026-10-03",
    kind: "+",
    text: "Parkeye: 500+ App Store downloads, 400+ weekly active users",
    href: "https://apps.apple.com/us/app/parkeye-campus-parking/id6790588821",
  },
  {
    date: "2026-09-02",
    kind: "+",
    text: "build log: UFC Styles, day 1",
    href: "/blog/ufc-styles-day-1/",
  },
  {
    date: "2026-09-02",
    kind: "+",
    text: "build log: How Parkeye predicts parking at GMU",
    href: "/blog/how-parkeye-predicts-parking/",
  },
  {
    date: "2026-08",
    kind: "~",
    text: "wrapped my State Farm SWE internship, with a return offer",
  },
  {
    date: "2026-07-21",
    kind: "+",
    text: "launched this site",
  },
];
