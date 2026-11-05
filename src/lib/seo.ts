import type { CollectionEntry } from "astro:content";
import { siteConfig } from "@/data/site";

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function personJsonLd() {
  return {
    "@type": "Person",
    "@id": absoluteUrl("/#person"),
    name: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.ogImage),
    jobTitle: ["Applied AI Engineer", "Senior Frontend Developer"],
    description: siteConfig.description,
    sameAs: [
      siteConfig.social.github,
      siteConfig.social.linkedin,
      siteConfig.social.npm,
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "COMSATS University Islamabad",
    },
    homeLocation: {
      "@type": "Place",
      name: siteConfig.location,
    },
    knowsAbout: [
      "Applied AI",
      "Computer Vision",
      "Local GPU Inference",
      "React",
      "TypeScript",
      "Next.js",
      "Vue",
      "FastAPI",
      "Web Components",
      "Full-Stack Development",
      "Mobile Apps",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: { "@id": absoluteUrl("/#person") },
  };
}

export function profilePageJsonLd() {
  return {
    "@type": "ProfilePage",
    "@id": absoluteUrl("/#profilepage"),
    url: siteConfig.url,
    mainEntity: { "@id": absoluteUrl("/#person") },
  };
}

export function breadcrumbJsonLd(project: CollectionEntry<"work">) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: absoluteUrl("/work"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.data.title,
        item: absoluteUrl(`/work/${project.id}`),
      },
    ],
  };
}

export function creativeWorkJsonLd(project: CollectionEntry<"work">) {
  return {
    "@type": "CreativeWork",
    name: project.data.title,
    description: project.data.summary,
    url: absoluteUrl(`/work/${project.id}`),
    author: { "@id": absoluteUrl("/#person") },
    ...(project.data.year ? { datePublished: project.data.year } : {}),
    keywords: project.data.seo.keywords,
  };
}
