/** @type {import('next').NextConfig} */

// STATIC_EXPORT=1 produces a fully static build in `out/` for GitHub Pages.
// PAGES_BASE_PATH must match the repo name when served from
// https://<user>.github.io/<repo>/. Leave both unset for local dev.
const isStaticExport = process.env.STATIC_EXPORT === "1";
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig = {
  reactStrictMode: true,
  // Expose the base path to the client so image src values can be prefixed
  // (next/image does not prepend basePath when unoptimized in a static export).
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  // A static export has no image optimizer route, so serve images as-is.
  // They are pre-sized at build, so there is no quality loss.
  ...(isStaticExport
    ? { output: "export", basePath, trailingSlash: true, images: { unoptimized: true } }
    : {}),
};

export default nextConfig;
