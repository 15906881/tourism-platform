import { initTRPC, TRPCError } from '@trpc/server';
import { Context } from './context';

const t = initTRPC.context<Context>().create();

export const router = t.router;
export const publicProcedure = t.procedure;

// Protected procedure - validates JWT
export const protectedProcedure = t.procedure.use(async ({ ctx, next }) => {
  const authHeader = ctx.req?.headers.get('authorization');
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Missing authorization header' });
  }

  // For now, accept any token and use temp IDs
  // TODO: Verify JWT with Cognito
  return next({
    ctx: {
      ...ctx,
      tenantId: 'temp-tenant-id',
      userId: 'temp-user-id',
      role: 'tenant_user',
    },
  });
});
