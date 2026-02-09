import type { Locale } from '@/types/content';

export const locales: Locale[] = ['ar', 'en'];
export const defaultLocale: Locale = 'ar';

export function getDirection(locale: Locale): 'rtl' | 'ltr' {
  return locale === 'ar' ? 'rtl' : 'ltr';
}

export async function getTranslations(locale: Locale) {
  try {
    const messages = await import(`@/messages/${locale}.json`);
    return messages.default;
  } catch (error) {
    console.error(`Failed to load translations for ${locale}:`, error);
    const fallback = await import(`@/messages/${defaultLocale}.json`);
    return fallback.default;
  }
}
