import { initTRPC, TRPCError } from '@trpc/server';
import { ZodError } from 'zod';
import type { Context } from './context';
import { requireAuth } from './middleware/auth';

const t = initTRPC.context<Context>().create({
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const router = t.router;
export const publicProcedure = t.procedure;

// Auth gate (uses your existing requireAuth(ctx))
const isAuthed = t.middleware(async ({ ctx, next }) => {
  await requireAuth(ctx);
  return next({ ctx });
});

// Tenant gate (some routers use ctx.tenantId!)
const hasTenant = t.middleware(({ ctx, next }) => {
  if (!ctx.tenantId) {
    throw new TRPCError({ code: 'FORBIDDEN', message: 'No tenant context' });
  }
  return next({ ctx });
});

export const protectedProcedure = publicProcedure.use(isAuthed);
export const tenantProcedure = protectedProcedure.use(hasTenant);

// Optional: export middleware if you want custom gates elsewhere
export const middleware = t.middleware;
