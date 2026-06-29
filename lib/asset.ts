// Prefixes a public asset path with the deploy base path (e.g. /Bitlane-Website)
// so images resolve correctly when the site is served from a subpath.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
