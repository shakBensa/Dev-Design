// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, projectType, message } = await request.json();
    
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'shakedbravo@gmail.com',
      subject: `פנייה חדשה מהאתר - ${projectType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7C3AED;">פנייה חדשה מהאתר</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
            <p><strong>שם:</strong> ${firstName} ${lastName}</p>
            <p><strong>אימייל:</strong> ${email}</p>
            <p><strong>טלפון:</strong> ${phone || 'לא צוין'}</p>
            <p><strong>סוג פרויקט:</strong> ${projectType}</p>
            <p><strong>הודעה:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${message}
            </div>
          </div>
        </div>
      `
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully', data });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}