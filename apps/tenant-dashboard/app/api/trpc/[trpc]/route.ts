// apps/tenant-dashboard/app/api/trpc/[trpc]/route.ts
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { cookies } from 'next/headers';
import { appRouter, createContext as baseCreateContext } from '@weblynk/server';
import { ONB_COOKIE, verifyTenantCookie } from '@/lib/tenantCookie';

type BaseCtx = Awaited<ReturnType<typeof baseCreateContext>>;

async function createCtxFromCookie(): Promise<BaseCtx> {
  const base = await baseCreateContext();

  // Only trust a VERIFIED cookie. If verification fails, force a falsy string,
  // so router code that does `if (!ctx.tenantId) throw ...` will trip.
  const raw = cookies().get(ONB_COOKIE)?.value;
  const verifiedTid = verifyTenantCookie(raw);
  const tenantId = (verifiedTid ?? '') as BaseCtx['tenantId']; // << no fallback

  return { ...base, tenantId };
}

const handler = (req: Request) =>
  fetchRequestHandler({
    router: appRouter,
    endpoint: '/api/trpc',
    req,
    createContext: createCtxFromCookie,
  });

export { handler as GET, handler as POST };
