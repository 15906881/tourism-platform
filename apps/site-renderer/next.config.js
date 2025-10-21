const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
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
        destination: '/default/:path*',
      }
    ];
  },
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
