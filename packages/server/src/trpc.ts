import { initTRPC, TRPCError } from '@trpc/server';
import { ZodError } from 'zod';
import type { Context } from './context';
import pino from 'pino';

const logger = pino({ level: process.env.LOG_LEVEL || 'info' });

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

const loggingMiddleware = t.middleware(async ({ path, type, next, ctx }) => {
  const start = Date.now();
  logger.info({ requestId: ctx.requestId, path, type }, 'tRPC call started');
  const result = await next();
  logger.info({ requestId: ctx.requestId, duration: Date.now() - start }, 'tRPC call completed');
  return result;
});

const isAuthenticated = t.middleware(({ ctx, next }) => {
  if (!ctx.userId) {
    throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Not authenticated' });
  }
  return next({ ctx: { ...ctx, userId: ctx.userId } });
});

const hasTenant = t.middleware(({ ctx, next }) => {
  if (!ctx.tenantId) {
    throw new TRPCError({ code: 'FORBIDDEN', message: 'No tenant context' });
  }
  return next({ ctx: { ...ctx, tenantId: ctx.tenantId } });
});

const hasMembership = t.middleware(({ ctx, next }) => {
  if (!ctx.membership) {
    throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Membership required' });
  }
  return next({ ctx: { ...ctx, membership: ctx.membership } });
});

export const protectedProcedure = publicProcedure
  .use(loggingMiddleware)
  .use(isAuthenticated)
  .use(hasTenant);

export const membershipProcedure = protectedProcedure.use(hasMembership);

export const requireRole = (...roles: string[]) =>
  t.middleware(({ ctx, next }) => {
    if (!ctx.membership) {
      throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Membership required' });
    }
    if (!roles.includes(ctx.membership.role)) {
      throw new TRPCError({
        code: 'FORBIDDEN',
        message: `Role required: ${roles.join(' or ')}`
      });
    }
    return next({ ctx: { ...ctx, membership: ctx.membership } });
  });
