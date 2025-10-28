import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { eventId, emails, message } = body

    if (!eventId || !emails || !Array.isArray(emails)) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // For now, we'll just return success with the invite link
    // In a real implementation, you would integrate with EmailJS or another email service
    const baseUrl = process.env.NODE_ENV === 'production' 
      ? 'https://levmanzhai.github.io/Smart-Event-Planner'
      : 'http://localhost:3000'
    const inviteLink = `${baseUrl}/invite/${eventId}`
    
    // Here you would send emails using EmailJS or another service
    // For demonstration, we'll just log the details
    console.log('Sending invitations:', {
      eventId,
      inviteLink,
      emails,
      message
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Invitations sent successfully',
      inviteLink 
    })
  } catch (error: any) {
    console.error('Error in send-invitations:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
