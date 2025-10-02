import { prismaAdmin, withTenantContext } from '@weblynk/db';

export async function createContext({ req }: { req: Request }) {
  // Auth middleware will populate these
  const tenantId = 'temp-tenant-id';
  const userId = 'temp-user-id';
  const role = 'tenant_user';

  return {
    req,
    tenantId,
    userId,
    role,
    runAsTenant: <T>(fn: (tx: any) => Promise<T>) => 
      withTenantContext(tenantId, fn, { userId }),
    prismaAdmin,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
