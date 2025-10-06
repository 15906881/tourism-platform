import { NextResponse } from 'next/server';
import { ONB_COOKIE } from '@/lib/tenantCookie';

function isLocal(host: string | null) {
  // localhost or 127.0.0.1 with/without a port
  return !!host && /^(localhost|127\.0\.0\.1)(:|$)/.test(host);
}

function clearCookie(req: Request) {
  const host = req.headers.get('host');
  const secure = !isLocal(host);

  const res = NextResponse.json({ ok: true });

  res.cookies.set(ONB_COOKIE, '', {
    httpOnly: true,
    secure,
    sameSite: 'lax',
    path: '/',
    maxAge: 0,           // delete
    expires: new Date(0) // <-- 1) explicit expires in the past
  });

  return res;
}

export async function POST(req: Request) {  // supports POST
  return clearCookie(req);
}

export async function GET(req: Request) {   // and GET
  return clearCookie(req);
}