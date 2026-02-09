import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getNewsById } from '@/lib/notion';
import { getTranslations } from '@/lib/i18n';
import type { Locale } from '@/types/content';

export const revalidate = 3600;

interface NewsDetailPageProps {
  params: {
    locale: string;
    id: string;
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const locale = params.locale as Locale;
  const t = await getTranslations(locale);
  
  const news = await getNewsById(params.id, locale);

  if (!news) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'ar' ? 'ar-PS' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="container-custom py-4">
          <Link
            href={`/${locale}/news`}
            className="inline-flex items-center gap-2 text-secondary-600 hover:text-secondary-700 font-semibold"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={locale === 'ar' ? 'M9 5l7 7-7 7' : 'M15 19l-7-7 7-7'}
              />
            </svg>
            {t.news.backToNews}
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-600 to-secondary-700 text-white py-12">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
              {formatDate(news.date)}
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold">
            {news.title}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          {/* Main Image */}
          {news.coverImage && (
            <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={news.coverImage}
                alt={news.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Description */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
                {news.description}
              </p>
            </div>
          </div>

          {/* Image Gallery */}
          {news.images && news.images.length > 1 && (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                {t.news.gallery}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {news.images.map((image, index) => (
                  <div
                    key={index}
                    className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                  >
                    <img
                      src={image}
                      alt={`${news.title} - ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Share Section */}
          <div className="mt-8 text-center">
            <Link
              href={`/${locale}/news`}
              className="btn-secondary inline-block"
            >
              {t.news.backToNews}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
