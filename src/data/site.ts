import { resolveSiteUrl } from "../lib/site-url";

export const siteConfig = {
  name: "Muhammad Usama Khan",
  role: "Senior Frontend Engineer",
  title: "Muhammad Usama Khan - Senior Frontend Engineer",
  description:
    "Senior frontend engineer with 7+ years building React and Next.js products, reusable component systems, data-heavy interfaces, and open-source libraries.",
  url: resolveSiteUrl(),
  email: "usamakhangt4@gmail.com",
  location: "Wah Cantt, Pakistan",
  availability: "Remote collaboration worldwide",
  resume: "/muhammad-usama-khan-resume.pdf",
  // Same-origin Open Graph image (1200×630). Override via absolute URL if needed.
  ogImage: "/og.png",
  social: {
    github: "https://github.com/usamakhangt4",
    linkedin: "https://www.linkedin.com/in/usamakhangt4/",
    npm: "https://www.npmjs.com/~usamakhangt4",
  },
};

export const navItems = [
  { label: "Experience", href: "/#experience" },
  { label: "Work", href: "/work" },
  { label: "Stack", href: "/#stack" },
  { label: "Contact", href: "/#contact" },
];

export const careerHighlights = [
  { value: "7+", label: "Years in frontend delivery" },
  { value: "4", label: "Professional product teams" },
  { value: "3", label: "Frontend engineers mentored" },
  { value: "2", label: "Published component libraries" },
] as const;

export const experience = [
  {
    company: "Victoria Plum",
    role: "Senior Frontend Developer",
    location: "Remote, England",
    period: "Jul 2024 - Present",
    summary:
      "Leading frontend delivery for Giolindo, a modern React and Next.js product, while mentoring a three-person frontend team.",
    highlights: [
      "Own component structure, UI quality, and delivery planning across a remote product team.",
      "Translate product and design requirements into reusable TypeScript and Tailwind interfaces.",
      "Strengthen code quality with reviews, ESLint, Prettier, pre-commit checks, and Turbopack workflows.",
    ],
  },
  {
    company: "Next Order",
    role: "Frontend Developer",
    location: "Remote, Australia",
    period: "Jul 2023 - Jul 2024",
    summary:
      "Built the Next Order Control Panel for restaurant and store operations, with a focus on data-heavy administration workflows.",
    highlights: [
      "Delivered dashboards, tables, forms, filters, modals, reports, and analytics views from Figma designs.",
      "Built reusable React and TypeScript components with Tailwind CSS.",
      "Integrated REST APIs through Axios, SWR, and React Query patterns.",
    ],
  },
  {
    company: "Emumba",
    role: "Frontend Developer",
    location: "Islamabad, Pakistan",
    period: "Sep 2020 - Jun 2023",
    summary:
      "Shipped frontend features across fintech, fleet tracking, analytics, dashboards, and tax-calculation products.",
    highlights: [
      "Developed complex forms, data tables, charts, and interactive dashboards.",
      "Worked with React, Next.js, TypeScript, Redux, Formik, React Query, Material UI, and Ant Design.",
      "Collaborated closely with designers on responsive, production-ready Figma implementation.",
    ],
  },
  {
    company: "TheTekSol",
    role: "Frontend Developer",
    location: "Remote, Pakistan",
    period: "Oct 2018 - Sep 2020",
    summary:
      "Developed a production review-management system for final-year projects and graduate thesis evaluations.",
    highlights: [
      "Built evaluation workflows, forms, review screens, and administrative interfaces.",
      "Delivered the system for COMSATS University Islamabad, Wah Campus.",
      "Worked across Laravel views, JavaScript, jQuery, Bootstrap, HTML, and CSS.",
    ],
  },
] as const;

export const professionalProjects = [
  {
    title: "Giolindo",
    type: "Modern product application",
    description:
      "Frontend delivery, reusable UI architecture, team mentoring, and development-workflow improvements for a React and Next.js product.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Turbopack"],
  },
  {
    title: "Next Order Control Panel",
    type: "Restaurant operations platform",
    description:
      "Admin workflows for menus, vouchers, staff reports, inventory analytics, voided items, service charges, and store-level controls.",
    stack: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "React Query"],
  },
  {
    title: "Capital Bee",
    type: "Fintech analytics",
    description:
      "Responsive crypto tax and wallet analytics interfaces covering profit and loss, trades, success rates, charts, and reporting tables.",
    stack: ["React", "Dashboards", "Charts", "Data tables", "Responsive UI"],
  },
  {
    title: "Flux",
    type: "Fleet management system",
    description:
      "GPS-based borrowed-bike tracking workflows with typed state, forms, validation, and maintainable themed components.",
    stack: ["React", "TypeScript", "Redux", "Formik", "Styled Components"],
  },
  {
    title: "Review Management System",
    type: "Academic workflow automation",
    description:
      "Production evaluation workflows for final-year projects and MS/PhD thesis reviews used by COMSATS University Islamabad, Wah Campus.",
    stack: ["Laravel", "JavaScript", "jQuery", "Bootstrap", "HTML/CSS"],
  },
] as const;

export const education = {
  degree: "BS in Software Engineering",
  school: "COMSATS University Islamabad - Wah Campus",
  period: "2016 - 2020",
} as const;

/** Short stack line for the homepage — not a skill-card grid. */
export const stackGroups = [
  {
    title: "Product interfaces",
    description: "Typed, responsive product UI from component to route.",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    title: "State & data",
    description: "Predictable application state and resilient API-driven flows.",
    items: ["Redux", "Zustand", "TanStack Query", "SWR", "REST APIs"],
  },
  {
    title: "Component systems",
    description: "Reusable primitives built to travel across applications.",
    items: ["Web Components", "shadcn/ui", "Material UI", "Ant Design", "npm"],
  },
  {
    title: "Quality & delivery",
    description: "Interaction quality and tooling that hold up beyond the happy path.",
    items: ["Accessibility", "Vitest", "Jest", "Cypress", "GitHub Actions"],
  },
] as const;
