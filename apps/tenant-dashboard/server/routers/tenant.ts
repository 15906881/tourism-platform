import { router, protectedProcedure } from '../trpc';

export const tenantRouter = router({
  getCurrent: protectedProcedure.query(async ({ ctx }) => {
    // protectedProcedure guarantees tenantId; fall back to null just in case
    if (!ctx.tenantId) return null;
    return ctx.db.tenant.findUnique({
      where: { id: ctx.tenantId },
    });
  }),
});
