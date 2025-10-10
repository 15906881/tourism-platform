import { router, publicProcedure } from '../trpc';

export const systemRouter = router({
  health: publicProcedure.query(() => ({ ok: true as const })),
  version: publicProcedure.query(() => ({
    name: 'tenant-dashboard',
    version: process.env.npm_package_version ?? '0.0.0',
    env: process.env.NODE_ENV ?? 'development',
  })),
});
