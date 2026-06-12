/** @type {import('next').NextConfig} */

// STATIC_EXPORT=1 produces a fully static build in `out/` for GitHub Pages.
// PAGES_BASE_PATH must match the repo name when served from
// https://<user>.github.io/<repo>/. Leave both unset for local dev.
const isStaticExport = process.env.STATIC_EXPORT === "1";
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig = {
  reactStrictMode: true,
  ...(isStaticExport ? { output: "export", basePath, trailingSlash: true } : {}),
};

export default nextConfig;
