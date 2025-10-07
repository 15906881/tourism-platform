import { NextResponse } from 'next/server';
import { appRouter } from '@weblynk/server';
import {
  ONB_COOKIE,
  ONB_COOKIE_MAX_AGE,
  signTenantId,
} from '@/lib/tenantCookie';
import { limiter } from '@/lib/rateLimit';

function clientKey(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'local';
  const ua = req.headers.get('user-agent') ?? 'unknown';
  return `register:${ip}:${ua.slice(0, 20)}`;
}

export async function POST(req: Request) {
  // Best-effort rate limit (no-op in dev if limiter is permissive)
  try {
    if (!limiter.take(clientKey(req))) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }
  } catch {
    /* ignore limiter failures in dev */
  }

  const { email, company } = await req.json();

  // Reuse your tRPC logic
  const caller = appRouter.createCaller({
    db: undefined as any,
    tenantId: 'public',
    role: 'admin',
  });
  const { tenantId } = await caller.onboarding.registerDev({ email, company });

  // Sign + set HttpOnly cookie
  const signed = await signTenantId(tenantId);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ONB_COOKIE, signed, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: ONB_COOKIE_MAX_AGE,
    secure: process.env.NODE_ENV === 'production',
  });
  return res;
}