/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: '/Smart-Event-Planner',
  basePath: '/Smart-Event-Planner',
}

module.exports = nextConfig
