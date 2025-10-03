/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@weblynk/server', '@weblynk/auth', '@weblynk/db'],
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', 'prisma'],
  },
}

module.exports = nextConfig
