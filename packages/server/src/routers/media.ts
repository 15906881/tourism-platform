import { z } from 'zod'
import { router, protectedProcedure } from '../trpc'

export const mediaRouter = router({
  list: protectedProcedure
    .input(z.object({
      limit: z.number().default(20),
      offset: z.number().default(0),
      mimeType: z.string().optional(),
    }))
    .query(async ({ input, ctx }) => {
      const where = {
        tenant_id: ctx.tenantId!,
        ...(input.mimeType && { mime_type: input.mimeType }),
      }
      
      const media = await ctx.db.media.findMany({
        where,
        take: input.limit,
        skip: input.offset,
        orderBy: { created_at: 'desc' },
      })
      
      const total = await ctx.db.media.count({ where })
      
      return { media, total, hasMore: input.offset + input.limit < total }
    }),

  getById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      return ctx.db.media.findFirst({
        where: { id: input.id, tenant_id: ctx.tenantId! },
      })
    }),
})
