import { PrismaClient } from '../generated/prisma';

let _prismaAdmin: PrismaClient | undefined;

export function getPrismaAdmin(): PrismaClient {
  if (!_prismaAdmin) {
    _prismaAdmin = new PrismaClient({
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    });
  }
  return _prismaAdmin;
}

// For backwards compatibility - creates client lazily
export const prismaAdmin = new Proxy({} as PrismaClient, {
  get(_, prop) {
    return (getPrismaAdmin() as any)[prop];
  },
});

export async function withTenantContext<T>(
  tenantId: string,
  fn: (tx: any) => Promise<T>,
  opts?: { userId?: string }
): Promise<T> {
  const client = getPrismaAdmin();
  return client.$transaction(async (tx) => {
    await tx.$executeRaw`select set_config('app.tenant_id', ${tenantId}, true)`;
    if (opts?.userId) {
      await tx.$executeRaw`select set_config('app.user_id', ${opts.userId}, true)`;
    }
    return fn(tx);
  });
}
