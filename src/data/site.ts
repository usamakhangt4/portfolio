import { resolveSiteUrl } from "../lib/site-url";

export const siteConfig = {
  name: "Muhammad Usama Khan",
  title:
    "Muhammad Usama Khan — Frontend Engineer | React, TypeScript & Component Libraries",
  description:
    "Frontend engineer. Author of shadcn-virtualized-tree and viewer-360. Builds typed React libraries, Web Components, and Next.js product UIs.",
  url: resolveSiteUrl(),
  email: "usamakhangt4@gmail.com",
  // Same-origin Open Graph image (1200×630). Override via absolute URL if needed.
  ogImage: "/og.png",
  social: {
    github: "https://github.com/usamakhangt4",
    npm: "https://www.npmjs.com/~usamakhangt4",
  },
};

export const navItems = [
  { label: "Work", href: "/work" },
  { label: "Stack", href: "/#stack" },
  { label: "Contact", href: "/#contact" },
];

/** Short stack line for the homepage — not a skill-card grid. */
export const stackLine = [
  "React",
  "TypeScript",
  "Next.js",
  "Web Components",
  "npm packages",
  "Firebase",
];
