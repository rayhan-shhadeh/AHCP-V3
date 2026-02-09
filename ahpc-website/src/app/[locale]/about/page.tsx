import { getTranslations } from '@/lib/i18n';
import type { Locale } from '@/types/content';

export default async function AboutPage({
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
            {t.about.title}
          </h1>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Mission */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-primary-700">
              {t.about.mission}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                {locale === 'ar' 
                  ? 'جمعية إسعاد الطفل الفلسطيني هي منظمة غير حكومية تأسست في نابلس بهدف توفير الرعاية والدعم للأطفال الأيتام في فلسطين. نعمل على تحسين نوعية حياة الأطفال من خلال برامج شاملة تشمل التعليم، الرعاية الصحية، والدعم النفسي والاجتماعي.'
                  : 'The Association for Happiness of the Palestinian Child is an NGO established in Nablus to provide care and support for orphan children in Palestine. We work to improve children\'s quality of life through comprehensive programs including education, healthcare, and psychological and social support.'}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {locale === 'ar'
                  ? 'نؤمن بأن كل طفل يستحق فرصة للنمو في بيئة آمنة ومحبة، ونسعى جاهدين لتوفير هذه الفرصة من خلال برامجنا المتنوعة والمتخصصة.'
                  : 'We believe every child deserves the opportunity to grow in a safe and loving environment, and we strive to provide this opportunity through our diverse and specialized programs.'}
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-primary-700">
              {t.about.vision}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {locale === 'ar'
                  ? 'رؤيتنا هي بناء مجتمع فلسطيني يحظى فيه كل طفل بالرعاية والتعليم والفرص اللازمة للنمو والازدهار، بغض النظر عن ظروفه الأسرية أو الاجتماعية.'
                  : 'Our vision is to build a Palestinian society where every child receives the care, education, and opportunities needed to grow and thrive, regardless of their family or social circumstances.'}
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-primary-700">
              {t.about.values}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: locale === 'ar' ? 'الإخلاص' : 'Dedication',
                  description: locale === 'ar'
                    ? 'نعمل بكل إخلاص وتفان من أجل مصلحة الأطفال'
                    : 'We work with dedication for the benefit of children',
                },
                {
                  title: locale === 'ar' ? 'الشفافية' : 'Transparency',
                  description: locale === 'ar'
                    ? 'نلتزم بالشفافية في جميع أعمالنا وبرامجنا'
                    : 'We commit to transparency in all our work and programs',
                },
                {
                  title: locale === 'ar' ? 'المهنية' : 'Professionalism',
                  description: locale === 'ar'
                    ? 'نقدم خدماتنا بأعلى مستويات المهنية والجودة'
                    : 'We deliver our services with the highest standards of professionalism',
                },
                {
                  title: locale === 'ar' ? 'التعاون' : 'Collaboration',
                  description: locale === 'ar'
                    ? 'نؤمن بأهمية التعاون مع المجتمع والمؤسسات'
                    : 'We believe in the importance of collaboration with community and institutions',
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl"
                >
                  <h3 className="text-xl font-bold mb-3 text-primary-700">
                    {value.title}
                  </h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
