import { router, protectedProcedure } from '../trpc';
import { z } from 'zod';

export const tenantRouter = router({
  getCurrent: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prismaAdmin.tenants.findUnique({
      where: { id: ctx.tenantId },
    });
  }),

  update: protectedProcedure
    .input(z.object({ name: z.string().min(1).max(255) }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prismaAdmin.tenants.update({
        where: { id: ctx.tenantId },
        data: { name: input.name },
      });
    }),
});
