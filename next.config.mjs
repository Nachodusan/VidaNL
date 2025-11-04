/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repoBase = process.env.NEXT_PUBLIC_BASEPATH || "/VidaNL";

const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  output: "export",
  basePath: isProd ? repoBase : "",
  assetPrefix: isProd ? `${repoBase}/` : "",
  trailingSlash: true,
};

export default nextConfig;
