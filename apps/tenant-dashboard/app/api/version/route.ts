export const GET = () => Response.json({
  name: 'tenant-dashboard',
  version: process.env.npm_package_version ?? '0.0.0',
  env: process.env.NODE_ENV ?? 'development',
});
