# Notion CMS Setup Guide - AHPC Website

This guide will help you set up Notion as the content management system for the AHPC website.

## 📋 Overview

The website uses Notion as a headless CMS for:
- **Activities**: Programs and events
- **News**: Latest updates and announcements
- **Pages**: Additional content pages (optional)

## 🎯 Why Notion?

- ✅ **Free**: No cost for small teams
- ✅ **User-Friendly**: Easy for non-technical users
- ✅ **Collaborative**: Multiple people can edit
- ✅ **Rich Content**: Text, images, dates, etc.
- ✅ **No Server**: Cloud-based, always accessible

## 🚀 Step-by-Step Setup

### Step 1: Create Notion Account

1. Go to [Notion.so](https://www.notion.so)
2. Sign up for a free account
3. Verify your email

### Step 2: Create Workspace

1. Click "Add a page" in sidebar
2. Create a new page named "AHPC Website Content"
3. This will be your content hub

### Step 3: Create Databases

You'll create three databases with specific schemas.

#### 3.1 Create Activities Database

1. In your content page, type `/database`
2. Select "Database - Full page"
3. Name it "Activities"
4. Click "New database"

**Add these properties:**

| Property Name | Type | Options |
|--------------|------|---------|
| title | Title | (default) |
| description | Text | - |
| date | Date | - |
| cover_image | Files & media | - |
| locale | Select | Options: `ar`, `en` |
| published | Checkbox | - |

**How to add properties:**
1. Click "+" in the table header
2. Select property type
3. Name the property
4. For Select type, add options `ar` and `en`

#### 3.2 Create News Database

Repeat the same process as Activities:

1. Create new database named "News"
2. Add the same properties as Activities

| Property Name | Type | Options |
|--------------|------|---------|
| title | Title | (default) |
| description | Text | - |
| date | Date | - |
| cover_image | Files & media | - |
| locale | Select | Options: `ar`, `en` |
| published | Checkbox | - |

#### 3.3 Create Pages Database (Optional)

For additional content pages:

| Property Name | Type | Options |
|--------------|------|---------|
| title | Title | (default) |
| slug | Text | - |
| body | Text | - |
| locale | Select | Options: `ar`, `en` |
| published | Checkbox | - |

### Step 4: Create Notion Integration

1. Go to [Notion Integrations](https://www.notion.so/my-integrations)
2. Click "+ New integration"
3. Fill in details:
   - **Name**: AHPC Website
   - **Logo**: Upload AHPC logo (optional)
   - **Associated workspace**: Select your workspace
   - **Type**: Internal integration
4. Click "Submit"
5. **Copy the Integration Token** (starts with `secret_`)
   - ⚠️ Keep this secret! Never share publicly

### Step 5: Share Databases with Integration

For each database (Activities, News, Pages):

1. Open the database in Notion
2. Click "..." (three dots) in top right
3. Scroll down and click "Add connections"
4. Search for "AHPC Website" (your integration name)
5. Click to connect
6. Repeat for all three databases

### Step 6: Get Database IDs

For each database, you need to get its ID:

1. Open the database in Notion
2. Look at the URL in your browser:
   ```
   https://www.notion.so/workspace/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx?v=...
   ```
3. Copy the ID (32-character string between workspace name and `?v=`)
4. Save it for later

Alternatively:
1. Click "..." on database
2. Click "Copy link"
3. The ID is in the URL

### Step 7: Add to Environment Variables

In your `.env` file (or Vercel environment variables):

```env
NOTION_TOKEN=secret_xxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_ACTIVITIES_DB_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_NEWS_DB_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_PAGES_DB_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## ✏️ Adding Content

### Adding an Activity

1. Open "Activities" database
2. Click "+ New"
3. Fill in the fields:
   - **title**: Activity name (e.g., "Summer Camp 2024")
   - **description**: Brief description of the activity
   - **date**: When the activity happened/will happen
   - **cover_image**: Click to upload an image
   - **locale**: Select `ar` for Arabic or `en` for English
   - **published**: Check this box to make it visible on website

**Example Arabic Activity:**
```
title: مخيم صيفي للأطفال 2024
description: نظمنا مخيماً صيفياً ترفيهياً وتعليمياً للأطفال الأيتام
date: 2024-07-15
cover_image: [upload image]
locale: ar
published: ✓
```

**Example English Activity:**
```
title: Summer Camp 2024
description: We organized a summer camp with recreational and educational activities
date: 2024-07-15
cover_image: [upload image]
locale: en
published: ✓
```

### Adding News

Same process as Activities:

1. Open "News" database
2. Click "+ New"
3. Fill in all fields
4. Select locale
5. Check "published"

**Example:**
```
title: New Partnership Announcement
description: AHPC partners with local schools to expand educational programs
date: 2024-08-01
cover_image: [upload image]
locale: en
published: ✓
```

## 🎨 Content Guidelines

### Images

**Recommended specs:**
- **Format**: JPG or PNG
- **Size**: 1200x800 pixels (3:2 ratio)
- **File size**: < 2 MB
- **Quality**: High quality, well-lit photos

**How to add images:**
1. Click in the "cover_image" field
2. Choose:
   - **Upload**: Upload from computer
   - **Link**: Paste image URL
   - **Embed**: Use image from web

### Text Content

**Title:**
- Keep it short: 5-10 words
- Descriptive and clear
- Arabic: Right-to-left
- English: Left-to-right

**Description:**
- 2-3 sentences
- Clear and engaging
- Explain what, when, where, why
- Use proper grammar

**Date:**
- Use the actual date of the event
- For future events, use planned date
- Format: YYYY-MM-DD

### Locale Selection

**Always specify locale:**
- `ar` for Arabic content
- `en` for English content

**Best practice:**
- Create same content in both languages
- Helps bilingual audience
- Better SEO

### Publishing

**Before publishing:**
- [ ] Title is clear and descriptive
- [ ] Description is complete
- [ ] Date is correct
- [ ] Image is uploaded (if available)
- [ ] Locale is selected
- [ ] Content is proofread

**To publish:**
- Check the "published" checkbox
- Content will appear on website within 1 hour

**To unpublish:**
- Uncheck the "published" checkbox
- Content will be hidden within 1 hour

## 🔄 How Updates Work

### Timing

- **Content added/updated in Notion** → Changes saved
- **Wait up to 1 hour** → ISR (Incremental Static Regeneration)
- **Changes appear on website** → Automatically

### Immediate Updates

To see changes immediately:
1. Go to Vercel Dashboard
2. Click "Deployments"
3. Click "Redeploy" on latest deployment

## 🛠️ Content Management Tips

### Organization

**Use Notion's features:**
- **Filters**: Show only published content
- **Sort**: By date (newest first)
- **Views**: Create different views (Published, Drafts, etc.)

**Create custom views:**
1. Click "..." on database
2. Select "Duplicate view"
3. Add filters (e.g., show only `published = true`)
4. Add sorts (e.g., sort by `date` descending)

### Collaboration

**Multiple editors:**
1. Invite team members to Notion workspace
2. Give them access to content page
3. Set permissions (edit, comment, view)

**Workflow:**
1. Editor creates content, leaves "published" unchecked
2. Reviewer checks content
3. Reviewer checks "published" when ready

## 📱 Mobile Editing

**Notion Mobile App:**
- Download Notion app (iOS/Android)
- Sign in with your account
- Edit content on the go
- Same databases, same power

## 🔍 Troubleshooting

### Content Not Showing on Website

**Checklist:**
1. Is "published" checkbox checked? ✓
2. Is "locale" set correctly? (ar or en)
3. Has it been more than 1 hour since updating?
4. Is the database shared with the integration?

### Images Not Loading

**Solutions:**
1. Re-upload the image in Notion
2. Ensure image is publicly accessible
3. Check image file size (should be < 5 MB)
4. Verify image format (JPG/PNG)

### Integration Not Working

**Steps to fix:**
1. Go to [My Integrations](https://www.notion.so/my-integrations)
2. Check if integration exists
3. Verify token is correct
4. Re-share databases with integration

## 🎯 Content Strategy

### Recommended Schedule

**Activities:**
- Add new activity after each major event
- Update at least monthly
- Mix of past and upcoming events

**News:**
- Post important announcements
- Share partnership news
- Celebrate milestones
- 2-4 updates per month

### Content Mix

**Activities (70%):**
- Educational programs
- Recreational events
- Healthcare initiatives
- Community projects

**News (30%):**
- New partnerships
- Volunteer opportunities
- Donation drives
- Success stories

## 📊 Content Checklist

Before launching:

- [ ] At least 5 activities in Arabic
- [ ] At least 5 activities in English
- [ ] At least 3 news items in Arabic
- [ ] At least 3 news items in English
- [ ] All content has images
- [ ] All content is proofread
- [ ] All content is marked "published"
- [ ] Dates are correct
- [ ] Locales are set correctly

## 🌟 Best Practices

1. **Consistency**: Post regularly to keep website fresh
2. **Quality**: Use good photos and clear descriptions
3. **Bilingual**: Always create content in both languages
4. **Accuracy**: Double-check dates and information
5. **Proofreading**: Review before publishing
6. **Engagement**: Share impact and success stories

## 📞 Support

If you need help:
1. Check this guide
2. Watch Notion tutorial videos
3. Contact development team
4. Visit [Notion Help Center](https://www.notion.so/help)

## 🎓 Learning Resources

**Notion Tutorials:**
- [Notion Getting Started](https://www.notion.so/help/guides/getting-started)
- [Databases Tutorial](https://www.notion.so/help/guides/creating-a-database)
- [Notion YouTube Channel](https://www.youtube.com/c/notion)

**Arabic Content:**
- Use Arabic keyboard for right-to-left text
- Notion supports Arabic fully
- Test how content looks on website

---

Happy content creation! 🎉
