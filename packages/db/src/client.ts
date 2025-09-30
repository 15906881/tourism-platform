import { PrismaClient, Prisma } from '../generated/prisma';

const base = new PrismaClient();

/**
 * Run a function inside a transaction with RLS context set for the duration.
 * All Prisma calls inside `fn` MUST use the provided `tx` (TransactionClient).
 */
export async function withTenantContext<T>(
  tenantId: string,
  fn: (tx: Prisma.TransactionClient) => Promise<T>,
  opts?: { userId?: string }
): Promise<T> {
  return base.$transaction(async (tx) => {
    // Third arg `true` = LOCAL (ends with the transaction)
    await tx.$executeRaw`select set_config('app.tenant_id', ${tenantId}, true)`;
    if (opts?.userId) {
      await tx.$executeRaw`select set_config('app.user_id', ${opts.userId}, true)`;
    }
    return fn(tx);
  });
}

/** Admin/platform client (no tenant scoping). Use sparingly. */
export const prismaAdmin = base;
