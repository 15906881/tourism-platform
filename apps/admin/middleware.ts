import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Simple in-memory rate limiting
const rateLimitMap = new Map()

export function middleware(request: NextRequest) {
  // Rate limiting for auth endpoints
  if (request.nextUrl.pathname.startsWith('/api/auth')) {
    const ip = request.ip || 'unknown'
    const now = Date.now()
    const windowStart = rateLimitMap.get(ip) || 0
    
    if (now - windowStart < 60000) { // 1 minute window
      return new NextResponse('Too Many Requests', { status: 429 })
    }
    
    rateLimitMap.set(ip, now)
  }

  const response = NextResponse.next()
  
  // Security headers
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  
  return response
}

export const config = {
  matcher: ['/api/:path*', '/admin/:path*']
}
