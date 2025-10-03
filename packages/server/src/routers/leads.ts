import { z } from 'zod'
import { router, protectedProcedure } from '../trpc'

export const leadsRouter = router({
  list: protectedProcedure
    .input(z.object({
      limit: z.number().default(20),
      offset: z.number().default(0),
      status: z.string().optional(),
    }))
    .query(async ({ input, ctx }) => {
      const where = {
        tenant_id: ctx.tenantId!,
        ...(input.status && { status: input.status }),
      }
      
      const leads = await ctx.db.leads.findMany({
        where,
        take: input.limit,
        skip: input.offset,
        orderBy: { created_at: 'desc' },
      })
      
      const total = await ctx.db.leads.count({ where })
      
      return { leads, total, hasMore: input.offset + input.limit < total }
    }),
})
