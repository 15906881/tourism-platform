// apps/tenant-dashboard/app/api/onboarding/signout/route.ts
import { NextResponse } from 'next/server';
import { ONB_COOKIE } from '@/lib/tenantCookie';

export async function POST(req: Request) {
  const host = req.headers.get('host') ?? '';
  const isLocal = host.startsWith('localhost') || host.startsWith('127.0.0.1');

  const res = NextResponse.json({ ok: true });
  // Clear cookie
  res.cookies.set(ONB_COOKIE, '', {
    httpOnly: true,
    secure: !isLocal,
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });
  return res;
}
