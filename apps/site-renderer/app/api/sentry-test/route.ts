import { NextResponse } from 'next/server'

export async function GET() {
  try {
    throw new Error('Sentry test error - this is intentional')
  } catch (error) {
    console.error(error)
    return NextResponse.json({ 
      status: 'sentry_test_triggered',
      message: 'Test error was triggered and should appear in Sentry'
    })
  }
}
