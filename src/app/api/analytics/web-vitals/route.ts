import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const metric = await request.json()
    
    // Log the metric for analysis
    console.log('Web Vitals Metric:', {
      name: metric.name,
      value: metric.value,
      id: metric.id,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    })

    // Here you could:
    // 1. Store in a database
    // 2. Send to analytics service
    // 3. Trigger alerts for poor performance
    
    // For now, just log and return success
    return NextResponse.json({ success: true, received: true })
  } catch (error) {
    console.error('Error processing web vitals:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process metric' },
      { status: 400 }
    )
  }
}
