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
    jobTitle: ["Frontend Engineer", "React Developer", "Next.js Developer"],
    description: siteConfig.description,
    sameAs: [siteConfig.social.github, siteConfig.social.npm],
    knowsAbout: [
      "React",
      "TypeScript",
      "Next.js",
      "Web Components",
      "Component Libraries",
      "npm",
      "Accessibility",
      "Performance Optimization",
      "Firebase",
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
    datePublished: project.data.year,
    keywords: project.data.seo.keywords,
  };
}
