# Installation Guide - AHPC Website

Complete step-by-step installation instructions.

## 📋 Prerequisites

Before you begin, ensure you have:

- **Node.js** 18.17.0 or higher
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify: `node --version`

- **npm** (comes with Node.js)
  - Verify: `npm --version`

- **Code Editor** (recommended)
  - VS Code: [code.visualstudio.com](https://code.visualstudio.com/)
  - Or any editor you prefer

## 🚀 Installation Steps

### Step 1: Extract the Project

Extract the `ahpc-website` folder to your desired location.

```bash
# Example locations:
# Windows: C:\Projects\ahpc-website
# Mac/Linux: ~/Projects/ahpc-website
```

### Step 2: Open Terminal

**Windows:**
- Open Command Prompt or PowerShell
- Navigate to project: `cd C:\Projects\ahpc-website`

**Mac/Linux:**
- Open Terminal
- Navigate to project: `cd ~/Projects/ahpc-website`

### Step 3: Install Dependencies

```bash
npm install
```

This will install all required packages (~5 minutes on first run).

**What gets installed:**
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Notion SDK
- And other dependencies

### Step 4: Verify Installation

Check if installation was successful:

```bash
npm run dev
```

You should see:

```
> ahpc-website@1.0.0 dev
> next dev

  ▲ Next.js 14.x.x
  - Local:        http://localhost:3000
  - Ready in xxxms
```

### Step 5: Open Browser

Open your browser and go to:

```
http://localhost:3000
```

You should see the AHPC website homepage!

## ✅ Verify Setup

Test these URLs to confirm everything works:

**Arabic (Default):**
- http://localhost:3000/ar (home)
- http://localhost:3000/ar/about
- http://localhost:3000/ar/activities
- http://localhost:3000/ar/news
- http://localhost:3000/ar/contact
- http://localhost:3000/ar/donate

**English:**
- http://localhost:3000/en (home)
- http://localhost:3000/en/about
- http://localhost:3000/en/activities
- http://localhost:3000/en/news
- http://localhost:3000/en/contact
- http://localhost:3000/en/donate

## 🔧 Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm run start

# Run linter
npm run lint
```

## 🛠️ Troubleshooting

### Error: "npm command not found"

**Solution:** Install Node.js from [nodejs.org](https://nodejs.org/)

### Error: "Port 3000 already in use"

**Solution 1:** Kill the process using port 3000
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill
```

**Solution 2:** Use a different port
```bash
npm run dev -- -p 3001
```

### Error: Module not found

**Solution:** Reinstall dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

**Solution:** Check for errors
```bash
npx tsc --noEmit
```

### Build Fails

**Solution:** Clear Next.js cache
```bash
rm -rf .next
npm run build
```

## 🌍 Environment Setup (Optional)

The website works without environment variables, but for full Notion integration:

### Create `.env` file

In the project root, create a file named `.env`:

```env
# Notion Integration Token
NOTION_TOKEN=your_notion_integration_token_here

# Notion Database IDs
NOTION_ACTIVITIES_DB_ID=your_activities_database_id
NOTION_NEWS_DB_ID=your_news_database_id

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Note:** See [NOTION_SETUP.md](./NOTION_SETUP.md) for details on getting these values.

## 📦 Project Structure

After installation, you'll have:

```
ahpc-website/
├── node_modules/          ← Installed dependencies (auto-created)
├── .next/                 ← Build output (auto-created)
├── src/                   ← Source code
├── public/                ← Static assets
├── package.json           ← Dependencies list
├── tsconfig.json          ← TypeScript config
├── tailwind.config.js     ← Tailwind config
├── next.config.js         ← Next.js config
└── Documentation files
```

## 🎯 Next Steps

After successful installation:

1. **Explore the Website**
   - Browse all pages
   - Test language switching
   - Check mobile responsiveness

2. **Read Documentation**
   - [README.md](./README.md) - Full overview
   - [QUICKSTART.md](./QUICKSTART.md) - Quick reference
   - [ARCHITECTURE.md](./ARCHITECTURE.md) - Technical details

3. **Set Up Notion (Optional)**
   - Follow [NOTION_SETUP.md](./NOTION_SETUP.md)
   - Add content to databases

4. **Deploy to Production**
   - Follow [DEPLOYMENT.md](./DEPLOYMENT.md)
   - Deploy to Vercel

## 💡 Tips

**Development Mode:**
- Hot reload enabled (changes show immediately)
- Detailed error messages
- Source maps for debugging

**Production Mode:**
- Optimized build
- Minified code
- Better performance
- Test with: `npm run build && npm run start`

**Code Editor Setup (VS Code):**
1. Install "ESLint" extension
2. Install "Tailwind CSS IntelliSense" extension
3. Install "TypeScript and JavaScript" extension

## 🆘 Get Help

If you encounter issues:

1. Check this installation guide
2. See [QUICKSTART.md](./QUICKSTART.md) troubleshooting
3. Review error messages in terminal
4. Check browser console (F12)
5. Contact development team

## ✨ Success!

If you can see the AHPC website at `http://localhost:3000`, installation is complete!

The website is now:
- ✅ Running locally
- ✅ Ready for development
- ✅ Ready for customization
- ✅ Ready for deployment

**Next Step:** Read [QUICKSTART.md](./QUICKSTART.md) for quick reference or [README.md](./README.md) for complete documentation.

---

Installation complete! Happy developing! 🚀
