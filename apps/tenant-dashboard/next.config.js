/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@weblynk/ui', '@weblynk/blocks', '@weblynk/templates', '@weblynk/db'],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
