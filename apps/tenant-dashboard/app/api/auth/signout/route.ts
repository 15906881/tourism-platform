// apps/tenant-dashboard/app/api/auth/signout/route.ts
import { NextResponse } from 'next/server';
import { ONB_COOKIE } from '@/lib/tenantCookie';

function isLocal(host: string | null) {
  return !!host && /^(localhost|127\.0\.0\.1)(:|$)/.test(host);
}

function clearCookie(res: NextResponse, host: string | null) {
  const secure = !isLocal(host);
  res.cookies.set(ONB_COOKIE, '', {
    httpOnly: true,
    secure,
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
    expires: new Date(0),
  });
}

export async function POST(req: Request) {
  const url = new URL(req.url);
  const redirectTo = url.searchParams.get('redirectTo') || '/';
  const accept = req.headers.get('accept') || '';

  // If a browser posted this (expects HTML), redirect after clearing the cookie.
  if (accept.includes('text/html')) {
    const res = NextResponse.redirect(new URL(redirectTo, url), 303);
    clearCookie(res, req.headers.get('host'));
    return res;
  }

  // Programmatic callers (fetch/curl) get JSON.
  const res = NextResponse.json({ ok: true });
  clearCookie(res, req.headers.get('host'));
  return res;
}

export async function GET() {
  return NextResponse.json({ ok: false, error: 'Use POST' }, { status: 405 });
}
