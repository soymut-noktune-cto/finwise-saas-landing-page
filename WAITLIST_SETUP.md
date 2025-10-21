# Waitlist Feature Setup Guide

## Overview
The waitlist feature has been successfully implemented on your Soymut landing page. Users can now join the waitlist from two locations:
1. **Hero Section** - Email signup form prominently displayed at the top
2. **Dedicated Waitlist Section** - A standalone section positioned after the Benefits section

## What's Been Implemented

### Frontend Components
- **WaitlistForm** - Reusable form component with validation and state management
- **Waitlist Section** - Dedicated section with compelling copy
- **Hero Integration** - App store buttons replaced with waitlist form

### Backend
- **API Route** (`/api/waitlist`) - Handles email submissions with:
  - Server-side email validation
  - Rate limiting (3 requests per minute per IP)
  - Resend integration for email delivery
  - Confirmation emails to users
  - Optional admin notifications

### Features
✅ Email validation (client and server-side)  
✅ Loading states and error handling  
✅ Success/error messages  
✅ Rate limiting protection  
✅ Responsive design  
✅ Confirmation emails via Resend  

## Setup Instructions

### Step 1: Create a Resend Account
1. Go to [resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free tier)
3. Verify your email address

### Step 2: Get Your API Key
1. Log into your Resend dashboard
2. Navigate to **API Keys** section
3. Click **Create API Key**
4. Copy the generated API key (starts with `re_`)

### Step 3: Configure Environment Variables
1. In your project root, create a file named `.env.local`
2. Add the following configuration:

```bash
# Resend API Key (required)
RESEND_API_KEY=re_your_actual_api_key_here

# From Email Address (required)
# For free tier, use: onboarding@resend.dev
# For production with verified domain: noreply@yourdomain.com
FROM_EMAIL=onboarding@resend.dev

# Optional: Admin email to receive notifications
# ADMIN_EMAIL=your-email@example.com
```

### Step 4: (Optional) Verify Your Domain
For production use with your own email address:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `soymut.com`)
4. Add the DNS records provided by Resend to your domain registrar
5. Wait for verification (usually a few minutes)
6. Update `FROM_EMAIL` in `.env.local` to `noreply@yourdomain.com`

### Step 5: Test Locally
1. Start your development server:
```bash
npm run dev
```

2. Navigate to `http://localhost:3000`
3. Try submitting an email in either:
   - Hero section form
   - Waitlist section (scroll down)
4. Check the email inbox for confirmation

### Step 6: Deploy to Vercel
1. Push your changes to GitHub:
```bash
git add .
git commit -m "Add waitlist feature"
git push origin main
```

2. In your Vercel dashboard:
   - Go to your project
   - Navigate to **Settings** → **Environment Variables**
   - Add the following variables:
     - `RESEND_API_KEY` = your API key
     - `FROM_EMAIL` = your from email address
     - `ADMIN_EMAIL` = (optional) your admin email

3. Redeploy your site (automatically triggers on push)

## Customization

### Update Copy/Messaging
Edit `/src/data/waitlist.ts` to customize:
- Button text
- Placeholders
- Success/error messages
- Section headings

### Styling
The components use Tailwind CSS and match your existing design system. Modify the component files:
- `/src/components/WaitlistForm.tsx` - Form styling
- `/src/components/Waitlist.tsx` - Section styling

### Email Template
Edit `/src/app/api/waitlist/route.ts` to customize:
- Email subject line
- Email body HTML
- Confirmation email content

## Testing Checklist

- [ ] Form appears in Hero section
- [ ] Form appears in Waitlist section  
- [ ] Email validation works (invalid emails show error)
- [ ] Success message appears after submission
- [ ] Confirmation email is received
- [ ] Admin notification email works (if configured)
- [ ] Rate limiting prevents spam (try submitting 4+ times quickly)
- [ ] Build succeeds: `npm run build`
- [ ] Production build works: `npm run start`

## Troubleshooting

### "Email service is not configured" Error
- **Cause**: `RESEND_API_KEY` environment variable is not set
- **Solution**: Add the API key to `.env.local` (local) or Vercel Environment Variables (production)

### Emails Not Sending
- **Cause**: Invalid API key or rate limits exceeded
- **Solution**: 
  - Verify your API key is correct
  - Check Resend dashboard for errors
  - Ensure you haven't exceeded free tier limits (100/day)

### "From address is not verified" Error
- **Cause**: Using a custom email address without domain verification
- **Solution**: Either verify your domain or use `onboarding@resend.dev` for testing

### Build Fails
- **Cause**: Missing dependencies or TypeScript errors
- **Solution**: Run `npm install` and check for TypeScript errors

## Support

For issues with:
- **Resend**: Check [Resend Documentation](https://resend.com/docs)
- **Next.js**: Check [Next.js Documentation](https://nextjs.org/docs)
- **This implementation**: Review the code comments in the component files

## What's Next?

Consider these enhancements:
1. **Analytics**: Track waitlist signups with Google Analytics
2. **Database**: Store emails in a database instead of just sending them
3. **CSV Export**: Add admin dashboard to export waitlist emails
4. **A/B Testing**: Test different copy and CTAs
5. **Referral Program**: Add referral links for viral growth

