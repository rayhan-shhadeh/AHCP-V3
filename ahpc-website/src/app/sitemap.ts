import { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';
import { getActivities, getNews } from '@/lib/notion';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://palestinianchild.org';

  // Static pages for each locale
  const staticPages: MetadataRoute.Sitemap = [];
  
  for (const locale of locales) {
    // Main pages
    staticPages.push(
      {
        url: `${baseUrl}/${locale}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1.0,
      },
      {
        url: `${baseUrl}/${locale}/about`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/${locale}/activities`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/${locale}/news`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/${locale}/contact`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}/${locale}/donate`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      }
    );
  }

  // Dynamic activity pages
  const activityPages: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    try {
      const activities = await getActivities(locale);
      activities.forEach((activity) => {
        activityPages.push({
          url: `${baseUrl}/${locale}/activities/${activity.id}`,
          lastModified: new Date(activity.date),
          changeFrequency: 'monthly',
          priority: 0.6,
        });
      });
    } catch (error) {
      console.error(`Error fetching activities for sitemap (${locale}):`, error);
    }
  }

  // Dynamic news pages
  const newsPages: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    try {
      const news = await getNews(locale);
      news.forEach((item) => {
        newsPages.push({
          url: `${baseUrl}/${locale}/news/${item.id}`,
          lastModified: new Date(item.date),
          changeFrequency: 'monthly',
          priority: 0.6,
        });
      });
    } catch (error) {
      console.error(`Error fetching news for sitemap (${locale}):`, error);
    }
  }

  // Combine all pages
  return [...staticPages, ...activityPages, ...newsPages];
}
