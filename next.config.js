/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Smart-Event-Planner' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/Smart-Event-Planner' : '',
  distDir: 'out',
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  // Отключаем RSC для статического экспорта
  reactStrictMode: false,
  swcMinify: true,
}

module.exports = nextConfig
