// apps/tenant-dashboard/middleware.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const SAFE = new Set(['GET', 'HEAD', 'OPTIONS']);

function isSameOrigin(req: NextRequest) {
  const origin = req.headers.get('origin');
  if (!origin) return true; // allow non-browser tools (curl, postman)
  try {
    const o = new URL(origin);
    const host = req.headers.get('host') || '';
    return o.host === host; // scheme doesn't matter (http vs https on localhost)
  } catch {
    return false;
  }
}

export function middleware(req: NextRequest) {
  // Only guard mutating calls to tRPC
  if (!SAFE.has(req.method) && req.nextUrl.pathname.startsWith('/api/trpc/')) {
    if (!isSameOrigin(req)) {
      return new NextResponse('Forbidden', { status: 403 });
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/api/trpc/:path*'],
}