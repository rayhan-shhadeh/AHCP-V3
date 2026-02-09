import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { locales, getDirection, getTranslations } from '@/lib/i18n';
import type { Locale } from '@/types/content';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale as Locale;

  // Validate locale
  if (!locales.includes(locale)) {
    notFound();
  }

  const direction = getDirection(locale);
  const t = await getTranslations(locale);

  return (
    <html lang={locale} dir={direction} className="scroll-smooth">
      <body className={`font-${locale === 'ar' ? 'arabic' : 'sans'} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header locale={locale} t={t} />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer locale={locale} t={t} />
        </div>
      </body>
    </html>
  );
}
