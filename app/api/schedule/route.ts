import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, date, time, duration } = await request.json()

    // Create transporter using Gmail
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Format date for better readability
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    // Email to you about the meeting request
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'subhadipb1904@gmail.com',
      subject: `Meeting Request from ${name}`,
      html: `
        <h3>New Meeting Request</h3>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>👤 Name:</strong> ${name}</p>
          <p><strong>📅 Date:</strong> ${formattedDate}</p>
          <p><strong>🕐 Time:</strong> ${time}</p>
          <p><strong>⏱️ Duration:</strong> ${duration} minutes</p>
        </div>
        <p>Someone has requested a meeting with you. Please confirm or reschedule as needed.</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Schedule email error:', error)
    return NextResponse.json({ error: 'Failed to schedule meeting' }, { status: 500 })
  }
}