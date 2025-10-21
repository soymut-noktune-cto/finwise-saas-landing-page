# Deployment Guide - Soymut Waitlist

## ✅ Local Configuration Complete

Your `.env.local` file has been configured with:
- **Resend API Key**: `re_Gqrw2NJp_***` (configured)
- **Verified Domain**: `updates.soymut.com` (DNS verified)
- **From Email**: `noreply@updates.soymut.com`

## Testing Locally

Your development server is now running at `http://localhost:3000`

### Test the Waitlist Feature:

1. **Open your browser** and go to `http://localhost:3000`

2. **Test the Hero Form**:
   - Enter your email in the form at the top of the page
   - Click "Join the Waitlist"
   - You should see a success message
   - Check your email for a confirmation message from `noreply@updates.soymut.com`

3. **Test the Waitlist Section**:
   - Scroll down to the "Be the First to Experience Soymut" section
   - Try submitting another email
   - Verify the confirmation email arrives

4. **Test Error Handling**:
   - Try submitting an invalid email (e.g., "test@invalid")
   - Try submitting the same email twice quickly
   - Verify rate limiting (submit 4+ times in a minute)

## Deploying to Vercel

### Step 1: Add Environment Variables to Vercel

1. Go to your Vercel dashboard: [vercel.com/dashboard](https://vercel.com/dashboard)

2. Select your **finwise-saas-landing-page** project

3. Navigate to **Settings** → **Environment Variables**

4. Add the following variables:

   **Variable 1:**
   ```
   Name: RESEND_API_KEY
   Value: re_Gqrw2NJp_67bTyecbGPXUa2CnGsUMY5wH
   Environment: Production, Preview, Development (check all)
   ```

   **Variable 2:**
   ```
   Name: FROM_EMAIL
   Value: noreply@updates.soymut.com
   Environment: Production, Preview, Development (check all)
   ```

   **Variable 3 (Optional):**
   ```
   Name: ADMIN_EMAIL
   Value: your-email@example.com (enter your email to receive notifications)
   Environment: Production, Preview, Development (check all)
   ```

5. Click **Save** after adding each variable

### Step 2: Push to GitHub

```bash
# Check what files have changed
git status

# Add all changes
git add .

# Commit with a descriptive message
git commit -m "Add waitlist feature with Resend integration"

# Push to main branch (this triggers automatic Vercel deployment)
git push origin main
```

### Step 3: Monitor Deployment

1. Vercel will automatically detect the push and start deploying
2. You can monitor the deployment in your Vercel dashboard
3. The build should complete successfully (we already tested `npm run build`)
4. Once deployed, you'll receive a deployment URL

### Step 4: Test Production

1. Visit your production URL (e.g., `https://your-app.vercel.app` or `https://soymut.com`)
2. Test the waitlist signup in both locations (Hero and Waitlist section)
3. Verify you receive confirmation emails from `noreply@updates.soymut.com`
4. If you configured `ADMIN_EMAIL`, check for admin notifications

## Email Template Customization

The confirmation email currently says:

```
Subject: Welcome to the Soymut Waitlist!

Thank you for joining our waitlist!

You're now on the list to be among the first to experience Soymut, 
the AI-powered dream and consciousness companion.

We'll notify you as soon as we're ready to launch...
```

To customize this, edit:
- File: `/src/app/api/waitlist/route.ts`
- Lines: 88-99 (HTML template)
- Lines: 86 (Subject line)

## Managing Waitlist Emails

### View All Signups in Resend:

1. Log into [resend.com](https://resend.com)
2. Go to **Emails** section
3. You'll see all sent emails (confirmation emails to users)
4. Click on any email to see details

### Export Email List:

Resend doesn't automatically store contact emails in a list by default. To collect them:

**Option 1: Use Resend Audiences (Recommended)**
1. In Resend dashboard, go to **Audiences**
2. Create a new audience called "Soymut Waitlist"
3. Get the audience ID
4. Update the API route to add contacts to this audience

**Option 2: Check Email Logs**
1. Go to **Emails** → **Logs**
2. Filter by "to" address
3. Manually export if needed

**Option 3: Add a Database (Future Enhancement)**
- Consider adding a database (like Supabase) to store emails
- This gives you full control and easy CSV export

## Troubleshooting

### Issue: Emails not sending in production

**Solution:**
- Verify environment variables are set in Vercel
- Check Vercel deployment logs for errors
- Ensure DNS records are still verified in Resend

### Issue: "From address is not verified"

**Solution:**
- Confirm `updates.soymut.com` shows as "Verified" in Resend dashboard
- Make sure `FROM_EMAIL` matches exactly: `noreply@updates.soymut.com`

### Issue: Build fails on Vercel

**Solution:**
- The build works locally (we tested it)
- Check Vercel build logs for specific error
- Ensure all environment variables are set

### Issue: Rate limiting too strict

**Solution:**
- Edit `/src/app/api/waitlist/route.ts`
- Line 20: Change `MAX_REQUESTS = 3` to a higher number
- Line 19: Adjust `RATE_LIMIT_WINDOW` for longer/shorter window

## Next Steps

### After Deployment:

1. ✅ Test the live site thoroughly
2. ✅ Send a test email to yourself
3. ✅ Share the link with friends to test
4. ✅ Monitor Resend dashboard for activity

### Future Enhancements:

1. **Analytics**: Track conversion rates with Google Analytics
2. **Database**: Store emails in Supabase/PostgreSQL
3. **Admin Dashboard**: Build a page to view/export emails
4. **A/B Testing**: Test different copy and CTAs
5. **Referral System**: Add "share with friends" functionality
6. **Drip Campaign**: Set up automated follow-up emails

## Support

- **Resend Issues**: [resend.com/docs](https://resend.com/docs)
- **Vercel Issues**: [vercel.com/docs](https://vercel.com/docs)
- **DNS Issues**: Check with your domain registrar

---

## Quick Reference

**Your Configuration:**
- API Key: `re_Gqrw2NJp_***` (last 8 chars hidden)
- Domain: `updates.soymut.com` (verified ✓)
- From Email: `noreply@updates.soymut.com`

**Important Files:**
- Email form: `/src/components/WaitlistForm.tsx`
- API endpoint: `/src/app/api/waitlist/route.ts`
- Content/copy: `/src/data/waitlist.ts`
- Email template: `/src/app/api/waitlist/route.ts` (lines 88-99)

**Vercel Environment Variables:**
```
RESEND_API_KEY=re_Gqrw2NJp_67bTyecbGPXUa2CnGsUMY5wH
FROM_EMAIL=noreply@updates.soymut.com
ADMIN_EMAIL=your-email@example.com (optional)
```

Good luck with your launch! 🚀

