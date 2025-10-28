const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['@weblynk/templates', '@weblynk/blocks', '@weblynk/ui'],
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
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
        destination: '/site/:path*',
      }
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
        ],
      }
    ];
  }
};

const sentryOptions = {
  silent: true,
  org: process.env.SENTRY_ORG,
  project: 'tourism-site-renderer',
};

module.exports = withSentryConfig(nextConfig, sentryOptions, {
  widenClientFileUpload: true,
  transpileClientSDK: true,
  hideSourceMaps: true,
  disableLogger: true,
});