const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

const sentryOptions = {
  silent: true,
  org: process.env.SENTRY_ORG,
  project: 'tourism-tenant-dashboard',
};

const configWithSentry = withSentryConfig(nextConfig, sentryOptions, {
  widenClientFileUpload: true,
  transpileClientSDK: true,
  hideSourceMaps: true,
  disableLogger: true,
});

// Add Amplify adapter - CORRECT IMPORT
const { adapter } = require('@aws-amplify/adapter-nextjs');

module.exports = adapter(configWithSentry);