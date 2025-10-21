const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

const sentryOptions = {
  silent: true,
  org: process.env.SENTRY_ORG,
  project: 'tourism-admin',
};

module.exports = withSentryConfig(nextConfig, sentryOptions, {
  widenClientFileUpload: true,
  transpileClientSDK: true,
  hideSourceMaps: true,
  disableLogger: true,
});
