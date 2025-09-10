# Vercel Deployment Setup Guide

## 1. Environment Variables Setup

Go to your Vercel dashboard → Project Settings → Environment Variables and add:

```
EMAIL_USER = subhadipb1904@gmail.com
EMAIL_PASS = your-actual-gmail-app-password
```

**Important:** Replace `your-actual-gmail-app-password` with your real Gmail App Password.

## 2. Gmail App Password Setup

1. Go to Google Account settings
2. Enable 2-Step Verification
3. Go to App Passwords
4. Generate password for "Mail"
5. Use this 16-character password in Vercel

## 3. Common Deployment Issues

### Issue: Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Run `npm run build` locally first

### Issue: API Routes Not Working
- Ensure environment variables are set in Vercel
- Check function logs in Vercel dashboard
- Verify nodemailer configuration

### Issue: Images Not Loading
- Check if images are in public/ folder
- Verify image paths are correct
- Ensure images are committed to git

## 4. Force Redeploy

If changes aren't reflecting:
1. Go to Vercel dashboard
2. Click "Deployments" tab
3. Click "Redeploy" on latest deployment
4. Or push a small change to trigger new deployment

## 5. Debug Steps

1. Check Vercel build logs
2. Check function logs for API errors
3. Test API endpoints directly
4. Verify environment variables are set