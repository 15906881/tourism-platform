const { withSentryConfig } = require('@sentry/nextjs');

   /** @type {import('next').NextConfig} */
   const nextConfig = {
     // Remove this line: output: 'standalone',
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

   // Add Amplify adapter
   const { createAmplifyAdapter } = require('@aws-amplify/adapter-nextjs');

   module.exports = createAmplifyAdapter(configWithSentry);