import { Client } from '@notionhq/client';
import type { Activity, NewsItem, Locale } from '@/types/content';

const notion = process.env.NOTION_TOKEN 
  ? new Client({ auth: process.env.NOTION_TOKEN })
  : null;

// Safe fetch wrapper - always returns empty array on failure
async function safeFetch<T>(
  fetchFn: () => Promise<T[]>,
  fallback: T[] = []
): Promise<T[]> {
  if (!notion) return fallback;
  
  try {
    const result = await fetchFn();
    return result;
  } catch (error) {
    console.error('Notion fetch error:', error);
    return fallback;
  }
}

export async function getActivities(locale: Locale): Promise<Activity[]> {
  return safeFetch(async () => {
    if (!process.env.NOTION_ACTIVITIES_DB_ID) return [];

    const response = await notion!.databases.query({
      database_id: process.env.NOTION_ACTIVITIES_DB_ID,
      filter: {
        and: [
          {
            property: 'published',
            checkbox: {
              equals: true,
            },
          },
          {
            property: 'locale',
            select: {
              equals: locale,
            },
          },
        ],
      },
      sorts: [
        {
          property: 'date',
          direction: 'descending',
        },
      ],
    });

    return response.results.map((page: any) => {
      // Get all images from cover_image field
      const allImages = page.properties.cover_image?.files?.map((file: any) => 
        file.file?.url || file.external?.url
      ).filter(Boolean) || [];
      
      // Get full description text
      const fullDescription = page.properties.description?.rich_text?.map((text: any) => 
        text.plain_text
      ).join('') || '';

      return {
        id: page.id,
        title: page.properties.title?.title?.[0]?.plain_text || 'Untitled',
        description: fullDescription,
        date: page.properties.date?.date?.start || new Date().toISOString(),
        coverImage: allImages[0], // First image for preview
        images: allImages, // All images for gallery
        locale,
        published: true,
      };
    });
  }, []);
}

export async function getNews(locale: Locale): Promise<NewsItem[]> {
  return safeFetch(async () => {
    if (!process.env.NOTION_NEWS_DB_ID) return [];

    const response = await notion!.databases.query({
      database_id: process.env.NOTION_NEWS_DB_ID,
      filter: {
        and: [
          {
            property: 'published',
            checkbox: {
              equals: true,
            },
          },
          {
            property: 'locale',
            select: {
              equals: locale,
            },
          },
        ],
      },
      sorts: [
        {
          property: 'date',
          direction: 'descending',
        },
      ],
    });

    return response.results.map((page: any) => {
      // Get all images from cover_image field
      const allImages = page.properties.cover_image?.files?.map((file: any) => 
        file.file?.url || file.external?.url
      ).filter(Boolean) || [];
      
      // Get full description text
      const fullDescription = page.properties.description?.rich_text?.map((text: any) => 
        text.plain_text
      ).join('') || '';

      return {
        id: page.id,
        title: page.properties.title?.title?.[0]?.plain_text || 'Untitled',
        description: fullDescription,
        date: page.properties.date?.date?.start || new Date().toISOString(),
        coverImage: allImages[0], // First image for preview
        images: allImages, // All images for gallery
        locale,
        published: true,
      };
    });
  }, []);
}

// Revalidate every hour (3600 seconds)
export const revalidate = 3600;

// Get single activity by ID
export async function getActivityById(id: string, locale: Locale): Promise<Activity | null> {
  return safeFetch(async () => {
    if (!notion) return [];

    const page = await notion.pages.retrieve({ page_id: id });
    
    // Get all images from cover_image field
    const allImages = (page as any).properties.cover_image?.files?.map((file: any) => 
      file.file?.url || file.external?.url
    ).filter(Boolean) || [];
    
    // Get full description text
    const fullDescription = (page as any).properties.description?.rich_text?.map((text: any) => 
      text.plain_text
    ).join('') || '';

    return [{
      id: page.id,
      title: (page as any).properties.title?.title?.[0]?.plain_text || 'Untitled',
      description: fullDescription,
      date: (page as any).properties.date?.date?.start || new Date().toISOString(),
      coverImage: allImages[0],
      images: allImages,
      locale,
      published: true,
    }];
  }, []).then(results => results[0] || null);
}

// Get single news by ID
export async function getNewsById(id: string, locale: Locale): Promise<NewsItem | null> {
  return safeFetch(async () => {
    if (!notion) return [];

    const page = await notion.pages.retrieve({ page_id: id });
    
    // Get all images from cover_image field
    const allImages = (page as any).properties.cover_image?.files?.map((file: any) => 
      file.file?.url || file.external?.url
    ).filter(Boolean) || [];
    
    // Get full description text
    const fullDescription = (page as any).properties.description?.rich_text?.map((text: any) => 
      text.plain_text
    ).join('') || '';

    return [{
      id: page.id,
      title: (page as any).properties.title?.title?.[0]?.plain_text || 'Untitled',
      description: fullDescription,
      date: (page as any).properties.date?.date?.start || new Date().toISOString(),
      coverImage: allImages[0],
      images: allImages,
      locale,
      published: true,
    }];
  }, []).then(results => results[0] || null);
}
