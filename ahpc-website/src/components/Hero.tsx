'use client';

import Link from 'next/link';
import type { Locale } from '@/types/content';

interface HeroProps {
  locale: Locale;
  t: any;
}

export default function Hero({ locale, t }: HeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video - Optional */}
      {/* Uncomment when video is available */}
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video> */}
      
      {/* Fallback Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white px-4">
        <div className="max-w-4xl mx-auto animate-fadeIn">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl border-4 border-white/30">
              <span className="text-white font-bold text-3xl">AHPC</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t.home.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
            {t.home.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={`/${locale}/donate`}
              className="bg-white text-primary-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-50 transition-all hover:shadow-2xl hover:scale-105 active:scale-95"
            >
              {t.common.donate}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary-700 transition-all hover:shadow-2xl hover:scale-105 active:scale-95"
            >
              {t.common.learnMore}
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
