import { getTranslations } from '@/lib/i18n';
import { getActivities } from '@/lib/notion';
import ActivityCard from '@/components/ActivityCard';
import type { Locale } from '@/types/content';

export const revalidate = 3600;

export default async function ActivitiesPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  const t = await getTranslations(locale);
  const activities = await getActivities(locale);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t.activities.title}
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            {t.activities.description}
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {activities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activities.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} locale={locale} />
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
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
              </div>
              <p className="text-xl text-gray-500">{t.activities.noActivities}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
