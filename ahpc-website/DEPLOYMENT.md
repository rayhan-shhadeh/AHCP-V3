# Deployment Guide - AHPC Website

This guide provides step-by-step instructions for deploying the AHPC website to production.

## 🎯 Deployment Strategy

The website uses a **zero-fail deployment** strategy:
- No build will ever fail due to content unavailability
- ISR (Incremental Static Regeneration) for dynamic content
- Static pages with no external dependencies
- Graceful fallbacks for all API calls

## 🚀 Vercel Deployment (Recommended)

Vercel is the recommended platform as it's optimized for Next.js and offers a generous free tier.

### Prerequisites

1. GitHub account
2. Vercel account (free) - [Sign up here](https://vercel.com/signup)
3. Repository pushed to GitHub

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - AHPC website"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/your-username/ahpc-website.git

# Push
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings

### Step 3: Configure Environment Variables

In Vercel project settings, add these environment variables:

```env
NOTION_TOKEN=secret_xxxxxxxxxxxxxxxxxx
NOTION_PAGES_DB_ID=xxxxxxxxxxxxxxxx
NOTION_ACTIVITIES_DB_ID=xxxxxxxxxxxxxxxx
NOTION_NEWS_DB_ID=xxxxxxxxxxxxxxxx
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

**Important**: Even without these variables, the site will build successfully.

### Step 4: Deploy

1. Click "Deploy"
2. Wait for build to complete (2-3 minutes)
3. Your site is live!

### Step 5: Custom Domain (Optional)

1. In Vercel project settings, go to "Domains"
2. Add your custom domain: `www.isaadtefelfalastini.com`
3. Follow Vercel's DNS instructions
4. Wait for DNS propagation (can take up to 48 hours)

## 🔧 Build Configuration

### Next.js Configuration

The `next.config.js` is already optimized:

```javascript
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // No image optimization required
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.notion.so',
      },
    ],
  },
  output: 'standalone',
}
```

### Build Command

```bash
npm run build
```

This will:
- Build all static pages
- Generate ISR pages with 1-hour revalidation
- Create optimized production bundle

## 🌍 Environment-Specific Configurations

### Development

```env
NOTION_TOKEN=your_dev_token
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Production

```env
NOTION_TOKEN=your_production_token
NEXT_PUBLIC_SITE_URL=https://www.isaadtefelfalastini.com
```

## 📊 Monitoring Build Health

### Build Checks

✅ **Expected behavior**:
- Build completes successfully
- All routes are accessible
- Empty states show when Notion is unavailable
- No 500 errors

❌ **If build fails**:
1. Check Vercel build logs
2. Verify TypeScript compilation locally: `npm run build`
3. Check for missing dependencies
4. Review environment variables

### Runtime Checks

After deployment, verify:

1. **Homepage** (`/ar` and `/en`)
   - Hero section loads
   - Mission section displays
   - Activities section (shows empty state if no Notion data)
   - News section (shows empty state if no Notion data)

2. **About Page** (`/ar/about`, `/en/about`)
   - Static content displays correctly

3. **Activities Page** (`/ar/activities`, `/en/activities`)
   - Shows activities if Notion configured
   - Shows empty state if Notion unavailable

4. **News Page** (`/ar/news`, `/en/news`)
   - Shows news if Notion configured
   - Shows empty state if Notion unavailable

5. **Contact Page** (`/ar/contact`, `/en/contact`)
   - All contact information displays

6. **Donate Page** (`/ar/donate`, `/en/donate`)
   - Bank details display (static content)

7. **Language Switching**
   - AR ↔ EN toggle works
   - RTL/LTR direction changes
   - Content translates correctly

## 🔄 Content Updates

### How Content Updates Work

1. **Admin updates Notion** → Content changes in Notion database
2. **Wait up to 1 hour** → ISR revalidation period
3. **Changes go live** → New content appears on website

### Force Immediate Update

To update content immediately:

1. Go to Vercel Dashboard
2. Navigate to "Deployments"
3. Click "Redeploy" on latest deployment
4. Select "Use existing Build Cache"

Or use Vercel API:

```bash
curl -X POST https://api.vercel.com/v1/deployments/DEPLOYMENT_ID/redeploy \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## 🚨 Troubleshooting

### Build Fails with TypeScript Errors

```bash
# Run type check locally
npm run build

# Fix any TypeScript errors shown
```

### Images Not Loading

1. Check image URLs in Notion
2. Verify images are publicly accessible
3. Check `next.config.js` remote patterns

### Notion Content Not Showing

1. Verify Notion integration token
2. Check database IDs are correct
3. Ensure databases are shared with integration
4. Check `published` checkbox is true in Notion

### Slow Page Load

1. Check Notion API response time
2. Verify ISR is working (check Vercel logs)
3. Consider increasing revalidation period

## 📈 Performance Optimization

### Current Settings

- **ISR Revalidation**: 3600 seconds (1 hour)
- **Image Optimization**: Disabled (for simplicity)
- **Static Generation**: All non-dynamic pages

### Recommended Optimizations

1. **Enable Image Optimization** (if using many images):
   ```javascript
   images: {
     unoptimized: false,
   }
   ```

2. **Adjust Revalidation Period**:
   ```typescript
   export const revalidate = 7200; // 2 hours
   ```

3. **Add Caching Headers** (in `next.config.js`):
   ```javascript
   async headers() {
     return [
       {
         source: '/api/:path*',
         headers: [
           { key: 'Cache-Control', value: 'public, max-age=3600' },
         ],
       },
     ]
   }
   ```

## 🔐 Security Checklist

- [x] Environment variables secured in Vercel
- [x] No API keys in client-side code
- [x] Notion integration token kept secret
- [x] HTTPS enforced (automatic with Vercel)
- [x] No authentication required (public website)

## 🎯 Post-Deployment Tasks

1. **Test all pages** on mobile and desktop
2. **Verify language switching** works correctly
3. **Check contact information** is accurate
4. **Update bank details** in donate page (if needed)
5. **Submit sitemap** to Google Search Console
6. **Set up monitoring** (optional: Vercel Analytics)
7. **Share with stakeholders** for feedback

## 📱 Social Media Integration

### Facebook Integration

The website includes Facebook links. To verify:

1. Use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. Enter your website URL
3. Check OpenGraph metadata

### Adding Social Meta Tags

Already configured in `src/app/layout.tsx`:

```typescript
openGraph: {
  type: 'website',
  locale: 'ar_PS',
  alternateLocale: 'en_US',
  url: 'https://www.isaadtefelfalastini.com',
  siteName: 'AHPC',
}
```

## 🌟 Success Criteria

Your deployment is successful when:

- ✅ All pages load without errors
- ✅ Both languages (AR/EN) work correctly
- ✅ RTL/LTR rendering is correct
- ✅ Contact information displays accurately
- ✅ Donate page shows bank details
- ✅ Empty states show gracefully when no content
- ✅ Website is mobile-responsive
- ✅ Performance is good (< 3s page load)

## 🆘 Getting Help

If you encounter issues:

1. Check Vercel deployment logs
2. Review this deployment guide
3. Check the main README.md
4. Contact development team

## 📝 Deployment Checklist

Before going live:

- [ ] Environment variables configured
- [ ] Notion databases set up (optional)
- [ ] Custom domain configured (optional)
- [ ] All pages tested
- [ ] Mobile responsiveness verified
- [ ] Bank details updated in donate page
- [ ] Contact information verified
- [ ] Social media links tested
- [ ] SEO metadata checked
- [ ] Privacy policy added (if required)
- [ ] Terms of service added (if required)

## 🎉 You're Live!

Once deployed, your website will be available at:
- Vercel URL: `https://ahpc-website.vercel.app`
- Custom domain: `https://www.isaadtefelfalastini.com`

The website will automatically:
- Update content from Notion every hour
- Serve static pages instantly
- Handle traffic spikes without issues
- Never fail due to Notion unavailability

---

Built with zero-fail architecture for maximum reliability
