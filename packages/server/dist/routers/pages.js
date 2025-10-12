import { z } from 'zod';
import { router, protectedProcedure } from '../trpc';
import { requireRole } from '../permissions';
export const pagesRouter = router({
    list: protectedProcedure
        .input(z.object({ siteId: z.string() }))
        .query(async ({ input, ctx }) => {
        // Verify site belongs to tenant
        const site = await ctx.db.sites.findFirst({
            where: { id: input.siteId, tenant_id: ctx.tenantId },
        });
        if (!site)
            return [];
        return ctx.db.pages.findMany({
            where: { site_id: input.siteId },
            include: { templates: true },
            orderBy: { created_at: 'desc' },
        });
    }),
    update: protectedProcedure
        .input(z.object({
        id: z.string(),
        overrides: z.record(z.string(), z.any()).optional(),
        published: z.boolean().optional(),
    }))
        .mutation(async ({ input, ctx }) => {
        requireRole(ctx, ['admin', 'manager']);
        const { id, ...data } = input;
        return ctx.db.pages.update({
            where: { id },
            data,
        });
    }),
});
