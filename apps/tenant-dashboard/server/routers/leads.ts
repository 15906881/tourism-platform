import { router, protectedProcedure, publicProcedure } from '../trpc';
import { z } from 'zod';

export const leadsRouter = router({
  list: protectedProcedure
    .input(z.object({
      take: z.number().min(1).max(100).default(20),
      skip: z.number().min(0).default(0),
    }).optional())
    .query(async ({ ctx, input }) => {
      return await ctx.runAsTenant((tx) =>
        tx.leads.findMany({
          take: input?.take || 20,
          skip: input?.skip || 0,
          orderBy: { created_at: 'desc' },
        })
      );
    }),

  // Public endpoint - no auth required
  createPublic: publicProcedure
    .input(z.object({
      name: z.string().min(1).max(255),
      email: z.string().email(),
      phone: z.string().optional(),
      message: z.string().max(2000),
    }))
    .mutation(async ({ ctx, input }) => {
      // TODO: Add rate limiting with Redis
      // TODO: Add captcha verification
      return await ctx.runAsTenant((tx) =>
        tx.leads.create({
          data: {
            name: input.name,
            email: input.email,
            phone: input.phone,
            message: input.message,
            source: 'contact_form',
          },
        })
      );
    }),
});
