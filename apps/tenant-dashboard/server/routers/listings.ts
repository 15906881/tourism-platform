import { router, protectedProcedure } from '../trpc';
import { z } from 'zod';

export const listingsRouter = router({
  list: protectedProcedure
    .input(z.object({
      take: z.number().min(1).max(100).default(20),
      skip: z.number().min(0).default(0),
    }).optional())
    .query(async ({ ctx, input }) => {
      return await ctx.runAsTenant((tx) =>
        tx.listings.findMany({
          take: input?.take || 20,
          skip: input?.skip || 0,
          orderBy: { created_at: 'desc' },
        })
      );
    }),

  getById: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      return await ctx.runAsTenant((tx) =>
        tx.listings.findUnique({
          where: { id: input.id },
        })
      );
    }),
});
