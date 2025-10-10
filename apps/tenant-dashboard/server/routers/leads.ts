import { router, protectedProcedure, publicProcedure } from '../trpc';
import { z } from 'zod';

export const leadsRouter = router({
  list: protectedProcedure
    .input(z.object({
      take: z.number().int().positive().max(100).optional(),
      skip: z.number().int().nonnegative().optional(),
    }).optional())
    .query(async ({ ctx, input }) => {
      // Filter by the tenant relation (your error mentioned the field is `tenants`)
      return ctx.db.leads.findMany({
        where: { tenants: { id: ctx.tenantId! } },
        take: input?.take ?? 20,
        skip: input?.skip ?? 0,
        orderBy: { created_at: 'desc' },
      });
    }),

  create: publicProcedure
    .input(z.object({
      name: z.string().min(1),
      email: z.string().email(),
      phone: z.string().optional().nullable(),
      message: z.string().min(1),
      source: z.string().default('web'),
    }))
    .mutation(async ({ ctx, input }) => {
      // IMPORTANT: connect the required tenant relation
      return ctx.db.leads.create({
        data: {
          tenants: { connect: { id: ctx.tenantId! } },
          name: input.name,
          email: input.email,
          phone: input.phone ?? null,
          message: input.message,
          source: input.source,
        },
      });
    }),
});
