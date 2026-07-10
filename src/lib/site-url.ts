/** Resolve the public site origin for canonicals, sitemap, and JSON-LD. */
export function resolveSiteUrl(): string {
  const explicit =
    process.env.PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    import.meta.env.PUBLIC_SITE_URL;

  if (explicit) {
    return explicit.replace(/\/$/, "");
  }

  // Prefer the production hostname on Vercel (not the per-PR preview URL).
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (production) {
    return `https://${production.replace(/\/$/, "")}`;
  }

  return "https://usamakhangt4.github.io";
}
