import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    version: '1.0.0',
    service: 'tenant-dashboard'
  })
}

export const dynamic = 'force-dynamic'
