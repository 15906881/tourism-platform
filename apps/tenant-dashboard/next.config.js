const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@weblynk/server', '@weblynk/auth', '@weblynk/db'],
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', 'prisma'],
  },
};

const sentryOptions = {
  silent: true,
  org: process.env.SENTRY_ORG,
  project: 'tourism-tenant-dashboard',
};

module.exports = withSentryConfig(nextConfig, sentryOptions, {
  widenClientFileUpload: true,
  transpileClientSDK: true,
  hideSourceMaps: true,
  disableLogger: true,
});
