import { router, protectedProcedure } from '../trpc'
import { TRPCError } from '@trpc/server'

export const tenantsRouter = router({
  getCurrent: protectedProcedure.query(async ({ ctx }) => {
    if (!ctx.tenantId) {
      throw new TRPCError({ code: 'NOT_FOUND', message: 'No tenant context' })
    }
    
    const tenant = await ctx.db.tenant.findUnique({
      where: { id: ctx.tenantId },
      include: {
        _count: {
          select: {
            memberships: true,
            listings: true,
            sites: true,
          },
        },
      },
    })
    
    if (!tenant) {
      throw new TRPCError({ code: 'NOT_FOUND', message: 'Tenant not found' })
    }
    
    return tenant
  }),
})
