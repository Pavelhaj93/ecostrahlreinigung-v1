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

    // Create transporter with Active24 SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.active24.cz',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // your email: info@ecostrahlreinigung.de
        pass: process.env.SMTP_PASSWORD, // your email password
      },
    })

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
    return NextResponse.json(
      {error: 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.'},
      {status: 500},
    )
  }
}
