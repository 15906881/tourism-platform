/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Experimental: Disable CSS optimization to avoid PostCSS issues
  experimental: {
    optimizeCss: false,
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '(?<subdomain>.+)\\.weblynk\\.app',
          },
        ],
        destination: '/site/:path*',
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'weblynk\\.app',
          },
        ],
        destination: '/default/:path*',
      }
    ];
  },
};

module.exports = nextConfig;
