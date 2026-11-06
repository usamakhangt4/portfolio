import { resolveSiteUrl } from "../lib/site-url";

export const siteConfig = {
  name: "Muhammad Usama Khan",
  role: "Applied AI Engineer",
  title: "Muhammad Usama Khan - Applied AI Engineer",
  description:
    "Applied AI engineer building computer vision systems, local GPU inference pipelines, and full-stack applications, backed by 7+ years of software engineering experience.",
  lede: "I build computer vision systems, local GPU inference pipelines, and full-stack applications—backed by 7+ years of software engineering experience.",
  url: resolveSiteUrl(),
  email: "usamakhangt4@gmail.com",
  location: "Wah Cantt, Pakistan",
  availability: "Open to applied AI and full-stack roles",
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
  { value: "7+", label: "Years of software engineering" },
  { value: "CV", label: "Computer vision systems" },
  { value: "GPU", label: "Local inference pipelines" },
  { value: "2", label: "Published component libraries" },
] as const;

export const experience = [
  {
    company: "Victoria Plum",
    role: "Senior Frontend Developer",
    location: "Remote, England",
    period: "Jul 2024–Present",
    summary:
      "Applied AI and full-stack product work across computer vision, a commerce platform, product viewing, and Herd WMS, while mentoring other engineers.",
    highlights: [
      "Lumenweave: computer vision and local GPU inference, from a React/Vite and Three.js embed through a FastAPI photo API to a separate Windows GPU service.",
      "Global Foods: a Laravel and Vue full-stack platform, with customer, EPOS, and operations apps plus Ionic Android and iOS builds.",
      "Giolindo: a 32-image Canvas rotation viewer and a separate 3D/AR configurator with runtime material switching.",
      "Herd WMS: NestJS, PostgreSQL, Redis, Prisma, and WebSockets.",
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
    title: "Frontend",
    description:
      "Typed product UI, including component libraries and data-heavy screens.",
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
