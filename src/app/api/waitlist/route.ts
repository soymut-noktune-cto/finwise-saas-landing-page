import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import type { WaitlistFormData } from '@/types';

// Initialize Resend only if API key is available
const getResendClient = () => {
  if (!process.env.RESEND_API_KEY) {
    return null;
  }
  return new Resend(process.env.RESEND_API_KEY);
};

// Email validation
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Simple rate limiting using Map (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // Max 3 requests per minute per IP

const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
};

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body: WaitlistFormData = await request.json();
    const { email } = body;

    // Validate email
    if (!email || !validateEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Check if Resend is configured
    const resend = getResendClient();
    if (!resend) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Email service is not configured. Please contact support.' 
        },
        { status: 500 }
      );
    }

    const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';

    // Send confirmation email to the user
    try {
      await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: 'Welcome to the Soymut Waitlist!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #333;">Welcome to Soymut</h1>
            <p>Thank you for joining our waitlist!</p>
            <p>You're now on the list to be among the first to experience Soymut, the AI-powered dream and consciousness companion.</p>
            <p>We'll notify you as soon as we're ready to launch. In the meantime, get ready to explore the infinite layers of your mind and awaken self-awareness through your dreams.</p>
            <p style="margin-top: 30px; color: #666;">
              Best regards,<br>
              The Soymut Team
            </p>
          </div>
        `,
      });

      // Optionally, send notification to yourself
      if (process.env.ADMIN_EMAIL) {
        await resend.emails.send({
          from: fromEmail,
          to: process.env.ADMIN_EMAIL,
          subject: 'New Waitlist Signup',
          html: `
            <div style="font-family: Arial, sans-serif;">
              <h2>New Waitlist Signup</h2>
              <p>Email: ${email}</p>
              <p>Time: ${new Date().toISOString()}</p>
            </div>
          `,
        });
      }

      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you for joining! Check your email for confirmation.' 
        },
        { status: 200 }
      );
    } catch (emailError: unknown) {
      console.error('Error sending email:', emailError);
      
      // Check if it's a duplicate email error from Resend
      const errorMessage = emailError instanceof Error ? emailError.message : '';
      if (errorMessage && errorMessage.includes('already exists')) {
        return NextResponse.json(
          { success: false, error: 'This email is already on the waitlist' },
          { status: 400 }
        );
      }

      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to send confirmation email. Please try again.' 
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

