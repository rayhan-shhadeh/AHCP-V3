import Link from 'next/link';
import type { Locale } from '@/types/content';

interface FooterProps {
  locale: Locale;
  t: any;
}

export default function Footer({ locale, t }: FooterProps) {
  const quickLinks = [
    { name: t.common.home, href: `/${locale}` },
    { name: t.common.about, href: `/${locale}/about` },
    { name: t.common.activities, href: `/${locale}/activities` },
    { name: t.common.news, href: `/${locale}/news` },
    { name: t.common.contact, href: `/${locale}/contact` },
    { name: t.common.donate, href: `/${locale}/donate` },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">AHPC</span>
              </div>
              <div>
                <div className="font-bold text-lg">
                  {locale === 'ar' ? 'جمعية إسعاد الطفل' : 'AHPC'}
                </div>
                <div className="text-sm text-gray-400">
                  {locale === 'ar' ? 'نابلس - فلسطين' : 'Nablus - Palestine'}
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.contactUs}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">
                  {locale === 'ar' 
                    ? 'مخيم عسكر القديم - بجانب مدرسة قرطبة الثانوية للبنات، نابلس'
                    : 'Old Askar Camp - Next to Qurtuba Secondary School for Girls, Nablus'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="text-gray-300">
                  <div>+970 599 116 582</div>
                  <div>+970 923 19 9816</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:isaadtefelfalastini@gmail.com" className="text-gray-300 hover:text-primary-400 transition-colors">
                  isaadtefelfalastini@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <a 
                  href="https://facebook.com/share/1Agb8p5Xji" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
