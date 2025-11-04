import {NextRequest, NextResponse} from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const {name, email, message, privacyAccepted} = await request.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        {error: 'Name, E-Mail und Nachricht sind erforderlich.'},
        {status: 400},
      )
    }

    if (!privacyAccepted) {
      return NextResponse.json(
        {error: 'Bitte akzeptieren Sie die Datenschutzerklärung.'},
        {status: 400},
      )
    }

    // Here you would normally:
    // 1. Send email using a service like Nodemailer, SendGrid, etc.
    // 2. Save to database
    // 3. Send to your email address

    console.log('Contact form submission:', {name, email, message, privacyAccepted})

    // For now, just return success
    // In a real implementation, you would send the email here

    return NextResponse.json(
      {message: 'Vielen Dank für Ihre Nachricht! Wir melden uns bald bei Ihnen.'},
      {status: 200},
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      {error: 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.'},
      {status: 500},
    )
  }
}
