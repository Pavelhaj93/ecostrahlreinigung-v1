import {NextRequest, NextResponse} from 'next/server'
import nodemailer from 'nodemailer'

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

    // Check if environment variables are set
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('SMTP credentials not configured')
      return NextResponse.json(
        {error: 'E-Mail-Dienst ist nicht konfiguriert. Bitte kontaktieren Sie uns direkt.'},
        {status: 500},
      )
    }

    // Create transporter with Active24 SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.cz',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // your email: info@ecostrahlreinigung.de
        pass: process.env.SMTP_PASSWORD, // your email password
      },
      debug: true, // Enable debug output
      logger: true, // Log to console
    })

    // Verify connection
    try {
      await transporter.verify()
      console.log('SMTP connection verified')
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError)
      return NextResponse.json(
        {
          error:
            'E-Mail-Verbindung konnte nicht hergestellt werden. Bitte versuchen Sie es später erneut.',
        },
        {status: 500},
      )
    }

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'info@ecostrahlreinigung.de',
      subject: `Neue Kontaktanfrage von ${name}`,
      text: `
Name: ${name}
E-Mail: ${email}

Nachricht:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Neue Kontaktanfrage</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
            <hr style="border: 1px solid #ddd;">
            <p><strong>Nachricht:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      {message: 'Vielen Dank für Ihre Nachricht! Wir melden uns bald bei Ihnen.'},
      {status: 200},
    )
  } catch (error) {
    console.error('Contact form error:', error)
    // Return more detailed error information
    const errorMessage =
      error instanceof Error ? error.message : 'Unbekannter Fehler beim Senden der Nachricht.'
    console.error('Detailed error:', errorMessage)

    return NextResponse.json(
      {
        error: 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined,
      },
      {status: 500},
    )
  }
}
