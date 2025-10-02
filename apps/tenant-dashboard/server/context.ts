import { prismaAdmin, withTenantContext } from '@weblynk/db';
import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';

export async function createContext(opts: FetchCreateContextFnOptions) {
  // Auth middleware will populate tenantId/userId/role from JWT
  return {
    req: opts.req,
    // These will be undefined until protectedProcedure middleware runs
    tenantId: undefined as string | undefined,
    userId: undefined as string | undefined,
    role: undefined as string | undefined,
    runAsTenant: <T>(fn: (tx: any) => Promise<T>) => {
      const tid = (opts as any).tenantId; // Will be set by middleware
      if (!tid) throw new Error('tenantId not set - use protectedProcedure');
      return withTenantContext(tid, fn, { userId: (opts as any).userId });
    },
    prismaAdmin,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
