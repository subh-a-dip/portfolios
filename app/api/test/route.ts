import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    message: 'API is working',
    timestamp: new Date().toISOString(),
    env: {
      hasEmailUser: !!process.env.EMAIL_USER,
      hasEmailPass: !!process.env.EMAIL_PASS
    }
  })
}