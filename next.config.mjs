/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // ✅ Static export for GitHub Pages
  output: "export",
  // ✅ BasePath y AssetPrefix corregidos (coinciden con el nombre exacto del repo)
  basePath: isProd ? "/VidaNL" : "",
  assetPrefix: isProd ? "/VidaNL/" : "",
  trailingSlash: true,
};

export default nextConfig;
