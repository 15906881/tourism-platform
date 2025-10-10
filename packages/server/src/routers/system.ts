import { router, publicProcedure } from '../trpc';

export const systemRouter = router({
  health: publicProcedure.query(() => ({ ok: true as const })),
  version: publicProcedure.query(() => ({
    name: 'tenant-dashboard',
    env: process.env.NODE_ENV ?? 'development',
  })),
});
