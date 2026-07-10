import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string(),
    type: z.string(),
    year: z.string(),
    order: z.number(),
    tier: z.enum(["flagship", "supporting"]).default("flagship"),
    featured: z.boolean().default(true),
    stack: z.array(z.string()),
    highlights: z.array(z.string()),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.url(),
        }),
      )
      .default([]),
    seo: z.object({
      title: z.string(),
      description: z.string(),
      keywords: z.array(z.string()).default([]),
    }),
  }),
});

export const collections = { work };
