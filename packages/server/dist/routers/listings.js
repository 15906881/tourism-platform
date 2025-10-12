import { z } from 'zod';
import { router, protectedProcedure } from '../trpc';
export const listingsRouter = router({
    list: protectedProcedure
        .input(z.object({
        limit: z.number().default(20),
        offset: z.number().default(0),
        status: z.enum(['draft', 'published', 'archived']).optional(),
    }))
        .query(async ({ input, ctx }) => {
        const where = {
            tenant_id: ctx.tenantId,
            ...(input.status && { status: input.status }),
        };
        const listings = await ctx.db.listings.findMany({
            where,
            take: input.limit,
            skip: input.offset,
            orderBy: { created_at: 'desc' },
        });
        const total = await ctx.db.listings.count({ where });
        return {
            listings,
            total,
            hasMore: input.offset + input.limit < total,
        };
    }),
});
