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

// Security headers
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
];

const sentryOptions = {
  silent: true,
  org: process.env.SENTRY_ORG,
  project: 'tourism-site-renderer',
};

const moduleExports = withSentryConfig(nextConfig, sentryOptions, {
  widenClientFileUpload: true,
  transpileClientSDK: true,
  hideSourceMaps: true,
  disableLogger: true,
});

moduleExports.headers = async () => {
  return [
    {
      source: '/(.*)',
      headers: securityHeaders,
    }
  ];
};

module.exports = moduleExports;
// CSP configuration
const csp = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self';
  connect-src 'self' https://sentry.io;
  frame-ancestors 'none';
`.replace(/\n/g, ' ').trim()

// Add to existing headers
const existingHeaders = module.exports.headers || (() => [])
module.exports.headers = async () => {
  const existing = await existingHeaders()
  return [
    ...existing,
    {
      source: '/(.*)',
      headers: [
        { key: 'Content-Security-Policy', value: csp },
      ],
    }
  ]
}
