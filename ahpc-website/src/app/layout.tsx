import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import '@/styles/globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AHPC - Association for Happiness of the Palestinian Child',
  description: 'جمعية إسعاد الطفل الفلسطيني - نابلس - نعمل من أجل مستقبل أفضل لأطفالنا',
  keywords: 'AHPC, Palestine, Nablus, Children, Charity, NGO, فلسطين, نابلس, أطفال, جمعية',
  authors: [{ name: 'AHPC' }],
  openGraph: {
    type: 'website',
    locale: 'ar_PS',
    alternateLocale: 'en_US',
    url: 'https://www.isaadtefelfalastini.com',
    siteName: 'AHPC',
    title: 'Association for Happiness of the Palestinian Child',
    description: 'Working for a better future for Palestinian children',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
