import Link from 'next/link';
import type { NewsItem } from '@/types/content';

interface NewsCardProps {
  news: NewsItem;
  locale: string;
}

export default function NewsCard({ news, locale }: NewsCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'ar' ? 'ar-PS' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Link href={`/${locale}/news/${news.id}`} className="block">
      <div className="card-hover bg-white rounded-xl shadow-lg overflow-hidden h-full">
        {/* Image */}
        <div className="relative h-48 bg-gradient-to-br from-secondary-100 to-secondary-200 overflow-hidden">
          {news.coverImage ? (
            <img
              src={news.coverImage}
              alt={news.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <svg
                className="w-16 h-16 text-secondary-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
          )}
          {/* Date Badge */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-secondary-700 shadow-lg">
            {formatDate(news.date)}
          </div>
          {/* Multiple Images Indicator */}
          {news.images && news.images.length > 1 && (
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-secondary-700 shadow-lg flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {news.images.length}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-bold text-xl mb-3 text-gray-900 line-clamp-2">
            {news.title}
          </h3>
          <p className="text-gray-600 leading-relaxed line-clamp-3">
            {news.description}
          </p>
          
          {/* Read More Indicator */}
          <div className="mt-4 text-secondary-600 font-semibold flex items-center gap-2">
            <span>{locale === 'ar' ? 'اقرأ المزيد' : 'Read More'}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={locale === 'ar' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'} />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
