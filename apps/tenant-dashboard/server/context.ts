import { prisma } from '@weblynk/db';
import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import { randomUUID } from 'crypto';

export async function createContext(_opts: FetchCreateContextFnOptions) {
  // Keep these in sync with your auth later
  const accountId: string | null = null;
  const userId: string | null = null;
  const role: string | null = null;
  const membership: null = null;
  const tenantId: string | null = null;

  // Minimal helper used by routers expecting ctx.runAsTenant(...)
  async function runAsTenant<T>(fn: (tx: typeof prisma) => Promise<T> | T): Promise<T> {
    if (!tenantId) throw new Error('No tenant context');
    return await fn(prisma);
  }

  const requestId = randomUUID();

  return {
    req: _opts.req,
    db: prisma,
    accountId,
    tenantId,
    userId,
    role,
    membership,
    requestId,
    runAsTenant,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
