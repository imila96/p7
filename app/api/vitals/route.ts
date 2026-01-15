import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Log web vitals
    console.log('Web Vitals:', body)
    
    // Here you can send to your analytics service
    // Example: Send to Google Analytics, Datadog, etc.
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing web vitals:', error)
    return NextResponse.json({ error: 'Failed to process vitals' }, { status: 500 })
  }
}
