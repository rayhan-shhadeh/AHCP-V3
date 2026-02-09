import { getTranslations } from '@/lib/i18n';
import type { Locale } from '@/types/content';

export default async function DonatePage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  const t = await getTranslations(locale);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t.donate.title}
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            {t.donate.description}
          </p>
        </div>
      </section>

      {/* Donation Information */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Impact Message */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              {locale === 'ar' ? 'تأثير تبرعك' : 'Your Donation Impact'}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  ),
                  title: locale === 'ar' ? 'التعليم' : 'Education',
                  description: locale === 'ar' 
                    ? 'دعم التعليم والمستلزمات المدرسية'
                    : 'Support education and school supplies',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ),
                  title: locale === 'ar' ? 'الرعاية الصحية' : 'Healthcare',
                  description: locale === 'ar'
                    ? 'توفير الرعاية الصحية والأدوية'
                    : 'Provide healthcare and medicine',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: locale === 'ar' ? 'الدعم النفسي' : 'Psychological Support',
                  description: locale === 'ar'
                    ? 'برامج الدعم النفسي والاجتماعي'
                    : 'Psychological and social support programs',
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-primary-600 text-white rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bank Details */}
          <div className="bg-white border-2 border-primary-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
              {t.donate.bankDetails.title}
            </h2>
            <p className="text-center text-gray-600 mb-8">
              {t.donate.directDonation}
            </p>

            <div className="space-y-4 max-w-2xl mx-auto">
              {[
                {
                  label: t.donate.bankDetails.accountName,
                  value: locale === 'ar' 
                    ? 'جمعية إسعاد الطفل الفلسطيني'
                    : 'Association for Happiness of the Palestinian Child',
                },
                {
                  label: t.donate.bankDetails.accountNumber,
                  value: locale === 'ar' ? 'يرجى الاتصال للحصول على التفاصيل' : 'Please contact for details',
                },
                {
                  label: t.donate.bankDetails.bankName,
                  value: locale === 'ar' ? 'يرجى الاتصال للحصول على التفاصيل' : 'Please contact for details',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center md:justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <span className="font-semibold text-gray-700 mb-2 md:mb-0">
                    {item.label}:
                  </span>
                  <span className="text-gray-900 font-mono bg-white px-4 py-2 rounded border border-gray-200">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact for Details */}
            <div className="mt-8 p-6 bg-primary-50 rounded-xl text-center">
              <p className="text-gray-700 mb-4">
                {locale === 'ar'
                  ? 'للحصول على التفاصيل البنكية الكاملة، يرجى الاتصال بنا:'
                  : 'For complete banking details, please contact us:'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+970599116582"
                  className="flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +970 599 116 582
                </a>
                <a
                  href="mailto:isaadtefelfalastini@gmail.com"
                  className="flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* Thank You Message */}
          <div className="mt-12 text-center">
            <p className="text-xl text-gray-700 font-medium">
              {locale === 'ar'
                ? 'شكراً لدعمكم الكريم ومساهمتكم في بناء مستقبل أفضل لأطفالنا'
                : 'Thank you for your generous support in building a better future for our children'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
