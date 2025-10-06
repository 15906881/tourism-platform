import { NextResponse } from 'next/server';
import { appRouter, createContext } from '@weblynk/server';
import { ONB_COOKIE, ONB_COOKIE_MAX_AGE, signTenantId } from '@/lib/tenantCookie';

export async function POST(req: Request) {
  const { email, company } = await req.json();

  // Call tRPC to create the dev/tenant (stubbed in your server)
  const ctx = await createContext();
  const caller = appRouter.createCaller(ctx);
  const out = await caller.onboarding.registerDev({ email, company });

  const tenantId = out?.tenantId;
  if (!tenantId) {
    return NextResponse.json(
      { ok: false, error: 'registerDev returned no tenantId' },
      { status: 400 }
    );
  }

  // Sign the tenant id and set the cookie
  const cookieVal = signTenantId(tenantId);
  const host = req.headers.get('host') ?? '';
  const isLocal = host.startsWith('localhost') || host.startsWith('127.0.0.1');

  const res = NextResponse.json({ ok: true });
  res.cookies.set(ONB_COOKIE, cookieVal, {
    httpOnly: true,
    secure: !isLocal,      // Secure=false for localhost so cookies stick
    sameSite: 'lax',
    path: '/',
    maxAge: ONB_COOKIE_MAX_AGE,
  });

  return res;
}
