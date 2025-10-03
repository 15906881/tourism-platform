import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    ok: true, 
    service: 'tenant-dashboard',
    timestamp: new Date().toISOString() 
  })
}

export const dynamic = 'force-dynamic'
