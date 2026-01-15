import { NextResponse } from 'next/server'

export async function GET() {
  // Health check endpoint for monitoring
  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: process.env.npm_package_version || '0.1.0',
  })
}

export const dynamic = 'force-dynamic'
