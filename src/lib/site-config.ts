/**
 * Single source of truth for the production domain.
 * Import SITE_URL wherever an absolute URL is needed — never hardcode the domain string.
 */
export const SITE_URL = "https://www.cryptobeacon.site";

/** Convenience helper: returns an absolute URL for a given path. */
export function siteUrl(path: string = ""): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
