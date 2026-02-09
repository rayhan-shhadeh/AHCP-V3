"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { Locale } from "@/types/content";

interface HeaderProps {
  locale: Locale;
  t: any;
}

export default function Header({ locale, t }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const otherLocale: Locale = locale === "ar" ? "en" : "ar";

  const navigation = [
    { name: t.common.home, href: `/${locale}` },
    { name: t.common.about, href: `/${locale}/about` },
    { name: t.common.activities, href: `/${locale}/activities` },
    { name: t.common.news, href: `/${locale}/news` },
    { name: t.common.contact, href: `/${locale}/contact` },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <div className="w-14 h-14 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt={locale === "ar" ? "جمعية إسعاد الطفل الفلسطيني" : "AHPC"}
                width={56}
                height={56}
                priority
                className="object-contain"
              />
            </div>

            <div className="hidden md:block">
              <div
                className={`font-bold text-gray-900 ${locale === "ar" ? "text-right" : "text-left"}`}
              >
                {locale === "ar" ? "جمعية إسعاد الطفل الفلسطيني" : "AHPC"}
              </div>
              <div className="text-sm text-gray-600">
                {locale === "ar" ? "نابلس - فلسطين" : "Nablus - Palestine"}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Donate Button */}
            <Link
              href={`/${locale}/donate`}
              className="hidden sm:block btn-primary"
            >
              {t.common.donate}
            </Link>

            {/* Language Switcher */}
            <Link
              href={`/${otherLocale}`}
              className="px-3 py-2 rounded-lg border-2 border-gray-300 hover:border-primary-500 hover:text-primary-600 transition-all font-semibold"
            >
              {otherLocale.toUpperCase()}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href={`/${locale}/donate`}
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary text-center mt-2"
              >
                {t.common.donate}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
