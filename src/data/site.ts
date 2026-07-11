import { resolveSiteUrl } from "../lib/site-url";

export const siteConfig = {
  name: "Muhammad Usama Khan",
  title: "Muhammad Usama Khan - Frontend Engineer",
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
export const stackGroups = [
  {
    title: "Product interfaces",
    description: "Typed, responsive product UI from component to route.",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Component systems",
    description: "Reusable primitives built to travel across applications.",
    items: ["Web Components", "shadcn/ui", "npm packages", "Canvas"],
  },
  {
    title: "Quality engineering",
    description: "Interaction quality that holds up beyond the happy path.",
    items: ["Accessibility", "Vitest", "Performance", "Type safety"],
  },
  {
    title: "Platform & delivery",
    description: "Practical tooling for shipping and maintaining products.",
    items: ["Firebase", "Vercel", "Git", "GitHub Actions"],
  },
] as const;
