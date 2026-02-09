import { getTranslations } from '@/lib/i18n';
import { getNews } from '@/lib/notion';
import NewsCard from '@/components/NewsCard';
import type { Locale } from '@/types/content';

export const revalidate = 3600;

export default async function NewsPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  const t = await getTranslations(locale);
  const news = await getNews(locale);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-600 to-secondary-700 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t.news.title}
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            {t.news.description}
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {news.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((item) => (
                <NewsCard key={item.id} news={item} locale={locale} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 text-gray-300">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <p className="text-xl text-gray-500">{t.news.noNews}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
