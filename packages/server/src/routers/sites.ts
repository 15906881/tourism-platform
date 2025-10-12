import { z } from 'zod'
import { router, protectedProcedure } from '../trpc'
import { TRPCError } from '@trpc/server'

export const sitesRouter = router({
  list: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.sites.findMany({
      where: { tenant_id: ctx.tenantId! },
      include: {
        _count: { select: { pages: true } },
      },
    })
  }),

  getByKey: protectedProcedure
    .input(z.object({ key: z.string() }))
    .query(async ({ ctx, input }) => {
      const site = await ctx.db.sites.findFirst({
        where: {
          tenant_id: ctx.tenantId!,
          key: input.key,
        },
        include: {
          pages: {
            where: { published: true },
            include: { templates: true },
          },
        },
      })
      
      if (!site) {
        throw new TRPCError({ code: 'NOT_FOUND', message: 'Site not found' })
      }
      
      return site
    }),
})
