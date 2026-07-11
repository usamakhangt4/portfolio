/** Resolve the public site origin for canonicals, sitemap, and JSON-LD. */
export function resolveSiteUrl(): string {
  return (import.meta.env.SITE || "https://usamakhan.vercel.app").replace(
    /\/$/,
    "",
  );
}
