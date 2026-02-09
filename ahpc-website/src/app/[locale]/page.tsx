import Hero from "@/components/Hero";
import ActivityCard from "@/components/ActivityCard";
import NewsCard from "@/components/NewsCard";
import Link from "next/link";
import { getTranslations } from "@/lib/i18n";
import { getActivities, getNews } from "@/lib/notion";
import type { Locale } from "@/types/content";

export const revalidate = 3600; // Revalidate every hour

export default async function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  const t = await getTranslations(locale);

  // Fetch content with safe fallbacks
  const activities = await getActivities(locale);
  const news = await getNews(locale);

  return (
    <>
      {/* Hero Section */}
      <Hero locale={locale} t={t} />

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {t.home.mission.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t.home.mission.description}
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            {t.home.impact.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "500", label: t.home.impact.stats.children },
              { value: "60", label: t.home.impact.stats.programs },
              { value: "50", label: t.home.impact.stats.volunteers },
              { value: "14", label: t.home.impact.stats.years },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t.activities.title}
            </h2>
            <Link
              href={`/${locale}/activities`}
              className="text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-2"
            >
              {t.common.viewAll}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={locale === "ar" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
                />
              </svg>
            </Link>
          </div>

          {activities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activities.slice(0, 3).map((activity) => (
                <ActivityCard
                  key={activity.id}
                  activity={activity}
                  locale={locale}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              {t.activities.noActivities}
            </div>
          )}
        </div>
      </section>

      {/* News Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t.news.title}
            </h2>
            <Link
              href={`/${locale}/news`}
              className="text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-2"
            >
              {t.common.viewAll}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={locale === "ar" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
                />
              </svg>
            </Link>
          </div>

          {news.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.slice(0, 3).map((item) => (
                <NewsCard key={item.id} news={item} locale={locale} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              {t.news.noNews}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {locale === "ar" ? "كن جزءاً من التغيير" : "Be Part of the Change"}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {locale === "ar"
              ? "ساهم في تحسين حياة الأطفال الأيتام وساعدنا في بناء مستقبل أفضل لهم"
              : "Help improve the lives of orphan children and build a better future for them"}
          </p>
          <Link
            href={`/${locale}/donate`}
            className="inline-block bg-white text-primary-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-50 transition-all hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            {t.common.donate}
          </Link>
        </div>
      </section>
    </>
  );
}
