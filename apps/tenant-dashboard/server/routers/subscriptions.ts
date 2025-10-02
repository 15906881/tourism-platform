import { router, protectedProcedure } from '../trpc';
import { z } from 'zod';

export const subscriptionsRouter = router({
  // Get current subscription for authenticated tenant
  getCurrent: protectedProcedure.query(async ({ ctx }) => {
    // Use admin client - subscriptions table doesn't need RLS for read
    // (tenant isolation already enforced by tenantId in WHERE clause)
    return await ctx.prismaAdmin.subscriptions.findFirst({
      where: { tenant_id: ctx.tenantId! },
      orderBy: { created_at: 'desc' },
    });
  }),

  // Get subscription history
  getHistory: protectedProcedure
    .input(
      z.object({
        take: z.number().min(1).max(50).default(10),
        skip: z.number().min(0).default(0),
      }).optional()
    )
    .query(async ({ ctx, input }) => {
      return await ctx.prismaAdmin.subscriptions.findMany({
        where: { tenant_id: ctx.tenantId! },
        take: input?.take || 10,
        skip: input?.skip || 0,
        orderBy: { created_at: 'desc' },
      });
    }),

  // Mutation paths (feature-flagged until Stripe integration)
  // TODO: Add upgrade/downgrade mutations when payment processor is ready
});
