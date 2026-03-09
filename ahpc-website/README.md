# AHPC Website - Association for Happiness of the Palestinian Child

A production-grade, bilingual (Arabic/English) Next.js website built with **zero-failure deployment** architecture for the Association for Happiness of the Palestinian Child (AHPC) NGO in Nablus, Palestine.

## 🎯 Project Overview

This website is built following a **zero-fail architecture** principle:

- ✅ Zero build-time failures
- ✅ Zero runtime server dependencies
- ✅ Zero paid services required
- ✅ Static-first with ISR for dynamic content
- ✅ Non-technical admins can update content via Notion
- ✅ Fully bilingual with RTL support

## 🚀 Features

- 🌐 **Bilingual Support**: Full Arabic (RTL) and English (LTR) support
- 📱 **Fully Responsive**: Optimized for all devices
- 🎨 **Modern Design**: Professional NGO aesthetic with trust-building colors
- 🎥 **Hero Video Section**: Engaging homepage (ready for video)
- 📰 **Dynamic Content**: Activities and News powered by Notion CMS
- 💰 **Donation Page**: Static page with bank account details
- ⚡ **SEO Optimized**: Built-in metadata and OpenGraph tags
- ♿ **Accessible**: WCAG accessibility standards
- 🔒 **Production Ready**: ISR with safe fallbacks, no fragile dependencies

## 📁 Project Structure

```
ahpc-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with fonts
│   │   ├── page.tsx                # Redirect to default locale
│   │   └── [locale]/
│   │       ├── layout.tsx          # Locale layout with Header/Footer
│   │       ├── page.tsx            # Home page
│   │       ├── about/
│   │       │   └── page.tsx        # About page
│   │       ├── activities/
│   │       │   └── page.tsx        # Activities page
│   │       ├── news/
│   │       │   └── page.tsx        # News page
│   │       ├── contact/
│   │       │   └── page.tsx        # Contact page
│   │       ├── donate/
│   │       │   └── page.tsx        # Donate page
│   │       └── not-found.tsx       # 404 page
│   │
│   ├── components/
│   │   ├── Header.tsx              # Navigation header
│   │   ├── Footer.tsx              # Site footer
│   │   ├── Hero.tsx                # Hero section
│   │   ├── ActivityCard.tsx        # Activity display card
│   │   └── NewsCard.tsx            # News display card
│   │
│   ├── lib/
│   │   ├── i18n.ts                 # Internationalization utilities
│   │   └── notion.ts               # Notion API with safe fallbacks
│   │
│   ├── messages/
│   │   ├── ar.json                 # Arabic translations
│   │   └── en.json                 # English translations
│   │
│   ├── styles/
│   │   └── globals.css             # Global styles with RTL support
│   │
│   └── types/
│       └── content.ts              # TypeScript type definitions
│
├── public/
│   └── videos/                     # Hero video (optional)
│
├── .env.example                    # Environment variables template
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🛠️ Technology Stack

- **Frontend**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Inter + Arabic font)
- **CMS**: Notion (headless)
- **Deployment**: Vercel (free tier)
- **Revalidation**: ISR (Incremental Static Regeneration)

## 📋 Prerequisites

- Node.js 18.17.0 or higher
- npm or yarn
- Notion account (free)
- Vercel account (free)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd ahpc-website
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Notion (Optional but Recommended)

#### Create Notion Databases

Create three databases in Notion with the following schemas:

**Pages Database**:

- `slug` (Text)
- `locale` (Select: ar / en)
- `title` (Title)
- `body` (Rich Text)
- `published` (Checkbox)

**Activities Database**:

- `title` (Title)
- `description` (Rich Text)
- `date` (Date)
- `cover_image` (Files)
- `locale` (Select: ar / en)
- `published` (Checkbox)

**News Database**:

- Same structure as Activities

#### Create Notion Integration

1. Go to https://www.notion.so/my-integrations
2. Create a new integration
3. Copy the Integration Token
4. Share your databases with the integration

### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```env
# Notion Integration Token
NOTION_TOKEN=your_notion_integration_token_here

# Notion Database IDs
NOTION_PAGES_DB_ID=your_pages_database_id
NOTION_ACTIVITIES_DB_ID=your_activities_database_id
NOTION_NEWS_DB_ID=your_news_database_id

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://palestinianchild.org
```

**Note**: The website works without Notion configured. Pages will show empty states gracefully.

### 5. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Adding Hero Video (Optional)

To add a hero video:

1. Place your video file in `public/videos/hero-video.mp4`
2. Uncomment the video section in `src/components/Hero.tsx`

## 🌍 Internationalization

The website supports two locales:

- `ar` - Arabic (default, RTL)
- `en` - English (LTR)

### Routes

- Arabic: `https://domain.com/ar/*`
- English: `https://domain.com/en/*`
- Root: Redirects to `/ar`

### Adding Translations

Edit the JSON files in `src/messages/`:

- `ar.json` - Arabic translations
- `en.json` - English translations

## 📝 Content Management

### With Notion (Recommended)

1. Add content to your Notion databases
2. Set `published` checkbox to true
3. Content appears on the website within 1 hour (ISR revalidation)

### Without Notion

The website works without Notion integration:

- Activities and News pages show empty states
- All other pages display static content
- No build errors occur

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Add environment variables
4. Deploy

The website will:

- Build successfully even if Notion is down
- Use ISR for dynamic content
- Revalidate content every hour
- Never fail during deployment

### Build Locally

```bash
npm run build
npm run start
```

## 🔒 Zero-Fail Architecture

This website is designed to NEVER break during deployment:

### ✅ Safe Patterns Used

- **ISR with Fallbacks**: All dynamic content has empty state fallbacks
- **No Build-Time API Calls**: `generateStaticParams` doesn't call external APIs
- **Safe Fetch Wrapper**: Notion API calls wrapped in try-catch with empty array fallback
- **Static Routing**: No middleware, no dynamic redirects
- **No Server Dependencies**: All pages are static or ISR-enabled

### ❌ Patterns Avoided

- No middleware
- No authentication
- No runtime API dependencies during build
- No fragile external service calls
- No database connections
- No CMS servers

## 📱 Organization Contact Information

- **Name**: جمعية إسعاد الطفل الفلسطيني (AHPC)
- **Location**: مخيم عسكر القديم - بجانب مدرسة قرطبة الثانوية للبنات، نابلس، فلسطين
- **Phone**: +970 599 116 582, +970 923 19 9816
- **Email**: isaadtefelfalastini@gmail.com
- **Website**: www.isaadtefelfalastini.com
- **Facebook**: facebook.com/share/1Agb8p5Xji

## 🤝 Contributing

This is a private project for AHPC. For issues or suggestions, please contact the development team.

## 📄 License

This project is proprietary software for the Association for Happiness of the Palestinian Child (AHPC).

## 🆘 Support

For technical support or questions:

1. Check the documentation in this README
2. Review the code comments
3. Contact the development team

## ✨ Key Features Explained

### Safe Notion Integration

```typescript
// lib/notion.ts uses safe fetch wrapper
async function safeFetch<T>(
  fetchFn: () => Promise<T[]>,
  fallback: T[] = [],
): Promise<T[]> {
  if (!notion) return fallback;

  try {
    const result = await fetchFn();
    return result;
  } catch (error) {
    console.error("Notion fetch error:", error);
    return fallback; // Always returns fallback, never throws
  }
}
```

### ISR Configuration

```typescript
// Every dynamic page has revalidation
export const revalidate = 3600; // Revalidate every hour
```

### RTL/LTR Support

```typescript
// Automatic direction based on locale
export function getDirection(locale: Locale): "rtl" | "ltr" {
  return locale === "ar" ? "rtl" : "ltr";
}
```

## 🎯 Production Checklist

- [x] Zero build failures guaranteed
- [x] Safe Notion integration with fallbacks
- [x] ISR enabled for dynamic content
- [x] RTL/LTR support implemented
- [x] Responsive design on all devices
- [x] SEO metadata configured
- [x] Accessibility standards met
- [x] Static donation page
- [x] Empty states for all dynamic content
- [x] Professional NGO design
- [x] No paid services required
- [x] Documentation complete

## 🌟 Next Steps

1. Configure Notion databases
2. Add content to Notion
3. Upload hero video (optional)
4. Deploy to Vercel
5. Update bank account details in donate page
6. Test on all devices
7. Share with stakeholders

---

Built with ❤️ for the children of Palestine
