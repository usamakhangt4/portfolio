import { resolveSiteUrl } from "../lib/site-url";

export const siteConfig = {
  name: "Usama Khan",
  legalName: "Muhammad Usama Bin Akhtar Khan",
  role: "Senior Frontend Engineer",
  title: "Usama Khan (Muhammad Usama Bin Akhtar Khan) — Senior Frontend Engineer",
  description:
    "Senior frontend engineer: 7+ years of React, Next.js and TypeScript product work, backed by full-stack and applied AI. Case studies, npm libraries and resume.",
  lede: "I build fast, accessible React and Next.js interfaces in TypeScript, and the full-stack and applied AI systems behind them. 7+ years shipping production software.",
  url: resolveSiteUrl(),
  email: "usamakhangt4@gmail.com",
  location: "Wah Cantt, Pakistan",
  availability: "Open to senior frontend and full-stack roles, remote or relocation",
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
  { value: "7+", label: "Years shipping production software" },
  { value: "4", label: "Client products delivered since 2024" },
  { value: "2", label: "Published npm component libraries" },
  { value: "AI", label: "Computer vision and local GPU inference" },
] as const;

export const experience = [
  {
    company: "FOCUS",
    role: "Senior Software Engineer",
    location: "Remote, Pakistan",
    period: "Jul 2024 – Present",
    summary:
      "Lead frontend delivery for client products, owning component architecture, code review, and quality tooling and mentoring engineers, with full-stack and applied AI work where the product needed it.",
    highlights: [
      "Giolindo: a 32-image Canvas rotation viewer built on my open-source viewer-360, and a separate 3D/AR configurator with runtime material switching.",
      "Lumenweave: a React/Vite and Three.js retailer embed backed by a FastAPI photo API and a separate GPU service for segmentation, depth, and inpainting.",
      "Global Foods: three Vue and Vite apps (customer, EPOS, operations) on Laravel and MariaDB, plus Ionic Android and iOS builds.",
      "Herd WMS: a real-time warehouse management system on NestJS, PostgreSQL, Prisma, Redis, and WebSockets.",
    ],
  },
  {
    company: "Next Order",
    role: "Frontend Developer",
    location: "Remote, Australia",
    period: "Jul 2023 – Jul 2024",
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
    role: "Frontend Developer · Markup Engineer",
    location: "Islamabad, Pakistan",
    period: "Sep 2020 – Jul 2023",
    summary:
      "Joined as Markup Engineer (Sep 2020 – Jan 2023) and moved to Frontend Developer (Jan – Jul 2023), shipping fintech, fleet-tracking, analytics, and tax products.",
    highlights: [
      "Developed complex forms, data tables, charts, and interactive dashboards.",
      "Worked with React, Next.js, TypeScript, Redux, Formik, React Query, Material UI, and Ant Design.",
      "Collaborated closely with designers on responsive, production-ready Figma implementation.",
    ],
  },
  {
    company: "TheTekSol",
    role: "Software Engineer",
    location: "Pakistan",
    period: "Sep 2018 – Sep 2020",
    summary:
      "Built a production review-management system for final-year projects and graduate thesis evaluations, plus a point-of-sale system.",
    highlights: [
      "Built evaluation workflows, forms, review screens, and administrative interfaces.",
      "Delivered the system for COMSATS University Islamabad, Wah Campus.",
      "Worked across Laravel views, JavaScript, jQuery, Bootstrap, HTML, and CSS.",
      "Developed a point-of-sale system in React.js and its admin panel in Next.js.",
    ],
  },
] as const;

export const earlierProfessionalProjects = [
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

/** Skill groups shown on the homepage. Every item is backed by shipped work. */
export const stackGroups = [
  {
    title: "Frontend",
    description:
      "Typed product UI: component libraries, data-heavy screens, and 3D/Canvas viewers.",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "Vue",
      "Vite",
      "Tailwind CSS",
      "Three.js",
      "Web Components",
      "shadcn/ui",
      "Redux",
      "TanStack Query",
      "Zustand",
      "Canvas",
    ],
  },
  {
    title: "Backend & Data",
    description: "APIs, databases, and realtime services behind the products.",
    items: [
      "FastAPI",
      "Flask",
      "Laravel",
      "MariaDB",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Prisma",
      "WebSockets",
    ],
  },
  {
    title: "Computer Vision",
    description: "Segmentation, depth, detection, and inpainting.",
    items: ["SAM 3", "Depth Anything V2", "YOLOPv2", "OpenCV", "Inpainting"],
  },
  {
    title: "Local AI/Inference",
    description: "Models and inference services running on local GPUs.",
    items: [
      "PyTorch",
      "FLUX.2 [klein] 4B",
      "Nunchaku INT4",
      "KittenTTS 2",
      "Ollama",
      "CUDA",
    ],
  },
  {
    title: "Mobile",
    description: "Android and iOS builds of the web product.",
    items: ["Ionic", "Capacitor", "Android", "iOS"],
  },
  {
    title: "DevOps & Testing",
    description: "Containers, checks, and the test tooling around delivery.",
    items: ["Docker", "GitHub Actions", "Vitest", "Jest", "Cypress", "ESLint"],
  },
] as const;
