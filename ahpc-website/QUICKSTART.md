# Quick Start Guide - AHPC Website

Get the website running locally in under 5 minutes.

## ⚡ Super Quick Start (No Notion)

The website works perfectly without Notion configured. You can set up Notion later.

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser
http://localhost:3000
```

That's it! 🎉

## 🚀 Full Setup (With Notion CMS)

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Set Up Environment Variables

Create `.env` file in the root:

```env
NOTION_TOKEN=your_notion_token
NOTION_ACTIVITIES_DB_ID=your_activities_db_id
NOTION_NEWS_DB_ID=your_news_db_id
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Step 3: Set Up Notion

1. Create Notion account at [notion.so](https://notion.so)
2. Create three databases (Activities, News, Pages)
3. Create integration at [notion.so/my-integrations](https://notion.so/my-integrations)
4. Copy integration token
5. Share databases with integration
6. Get database IDs from URLs

**Detailed instructions**: See [NOTION_SETUP.md](./NOTION_SETUP.md)

### Step 4: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🧪 Test Your Setup

### Without Notion

You should see:
- ✅ Home page loads
- ✅ All navigation links work
- ✅ Arabic and English versions work
- ✅ RTL/LTR direction switches correctly
- ✅ Empty states for Activities and News
- ✅ Contact page shows contact info
- ✅ Donate page shows bank details

### With Notion

You should see:
- ✅ All of the above, plus:
- ✅ Activities from Notion display on home page
- ✅ News from Notion display on home page
- ✅ Activities page shows all activities
- ✅ News page shows all news items

## 📱 Viewing Different Locales

**Arabic (RTL)**: http://localhost:3000/ar

**English (LTR)**: http://localhost:3000/en

## 🎨 Customization Quick Reference

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#22c55e',  // Main green color
    600: '#16a34a',  // Darker green
  },
  secondary: {
    500: '#ef4444',  // Main red color
    600: '#dc2626',  // Darker red
  },
}
```

### Change Translations

Edit files in `src/messages/`:
- `ar.json` for Arabic
- `en.json` for English

### Update Contact Info

Edit `src/components/Footer.tsx` and `src/app/[locale]/contact/page.tsx`

### Update Bank Details

Edit `src/app/[locale]/donate/page.tsx`

## 🔧 Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Run production build
npm run lint         # Run linter

# Type checking
npx tsc --noEmit    # Check TypeScript errors
```

## 📋 Pre-Deployment Checklist

Before deploying to production:

- [ ] Environment variables configured (or skip for no Notion)
- [ ] Notion databases set up (optional)
- [ ] All pages tested in both languages
- [ ] Mobile responsiveness verified
- [ ] Contact information updated
- [ ] Bank details updated in donate page
- [ ] Translations reviewed
- [ ] Images optimized (< 2 MB each)

## 🚀 Deploy to Vercel

1. Push code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables (optional)
6. Click "Deploy"
7. Wait 2-3 minutes
8. Done! Your site is live 🎉

## 🆘 Troubleshooting

### Port 3000 Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Module Not Found Errors

```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

```bash
# Check TypeScript errors
npx tsc --noEmit

# Check for missing dependencies
npm install
```

### Notion Content Not Showing

1. Check environment variables are set
2. Verify Notion token is correct
3. Ensure databases are shared with integration
4. Check `published` checkbox in Notion
5. Wait up to 1 hour for ISR revalidation

## 📚 Next Steps

1. **Read Documentation**:
   - [README.md](./README.md) - Full overview
   - [NOTION_SETUP.md](./NOTION_SETUP.md) - Notion configuration
   - [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide
   - [ARCHITECTURE.md](./ARCHITECTURE.md) - Technical details

2. **Add Content**:
   - Set up Notion databases
   - Add activities and news
   - Upload images

3. **Customize**:
   - Update colors in Tailwind config
   - Modify translations
   - Add logo and images
   - Update contact details

4. **Deploy**:
   - Push to GitHub
   - Deploy to Vercel
   - Configure custom domain

## 💡 Tips

- **Development**: Use `npm run dev` for hot reload
- **Production**: Test with `npm run build && npm run start`
- **Debugging**: Check browser console for errors
- **Performance**: Use Chrome DevTools Lighthouse
- **Mobile**: Test on real devices or use Chrome DevTools

## 🎯 Success Criteria

Your setup is successful when:

- ✅ Development server runs without errors
- ✅ All pages are accessible
- ✅ Both languages work correctly
- ✅ RTL/LTR rendering is correct
- ✅ Images load properly
- ✅ No console errors
- ✅ Mobile responsive design works

## 🌟 You're Ready!

The website is now running locally. Start adding content and customizing to your needs!

For detailed information, refer to:
- **Content Management**: [NOTION_SETUP.md](./NOTION_SETUP.md)
- **Deployment**: [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Architecture**: [ARCHITECTURE.md](./ARCHITECTURE.md)

---

Happy building! 🚀
