/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // ✅ Static export for GitHub Pages
  output: 'export',
  // ✅ Use the repo name as basePath on Pages: https://<user>.github.io/<repo>
  basePath: isProd ? '/Vidanl' : '',
  assetPrefix: isProd ? '/Vidanl/' : '',
  trailingSlash: true,
}

export default nextConfig
