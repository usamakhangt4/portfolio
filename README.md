# Muhammad Usama Khan Portfolio

Static portfolio built with Astro 7 and Tailwind CSS v4.

Requires Node `>=22.12.0`.

## Scripts

```bash
npm install
npm run dev -- --host 127.0.0.1
npm run check
npm run build
```

## Structure

- `src/content/work/` contains case studies.
- `src/content.config.ts` validates portfolio content at build time.
- `src/pages/index.astro` is the static homepage.
- `src/pages/work/[slug].astro` generates case-study pages.
- `src/styles/global.css` contains Tailwind v4 and site styling.

Set `SITE_URL` or `PUBLIC_SITE_URL` for production canonical URLs and sitemap output.
