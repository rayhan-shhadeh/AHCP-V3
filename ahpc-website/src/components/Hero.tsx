"use client";

import Link from "next/link";
import type { Locale } from "@/types/content";
import Image from "next/image";
interface HeroProps {
  locale: Locale;
  t: any;
}

export default function Hero({ locale, t }: HeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video - Optional */}
      {/* Image Background */}
      <Image
        src="/images/hero-background.jpg"
        alt="Hero Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Fallback Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-50 animate-fadeIn">
          {/* <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000"></div> */}
          {/* Background Image*/}
          <div className="absolute inset-0 bg-[url('/images/hero-background.jpg')] bg-repeat opacity-20 animate-fadeIn " />
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white px-4">
        <div className="max-w-4xl mx-auto animate-fadeIn">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
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
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight -translate-y-60">
            {t.home.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light -translate-y-60">
            {t.home.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center -translate-y-60">
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
        <div className="absolute bottom-50 left-1/2 transform -translate-x-1/2 translate-y-[150px] animate-bounce">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
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
//--------------------------------------------------------------------------------------------
// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import type { Locale } from "@/types/content";
// import Image from "next/image";

// interface HeroProps {
//   locale: Locale;
//   t: any;
// }

// export default function Hero({ locale, t }: HeroProps) {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
//       {/* Background Video (client-only to avoid hydration error) */}
//       {mounted && (
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//           poster="/images/hero-poster.jpg"
//           className="absolute inset-0 w-full h-full object-cover"
//         >
//           <source src="/videos/hero-video.mp4" type="video/mp4" />
//         </video>
//       )}

//       {/* Fallback Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay blur-3xl animate-pulse" />
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay blur-3xl animate-pulse animation-delay-2000" />
//         </div>
//       </div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* Content */}
//       <div className="relative z-10 container-custom text-center text-white px-4">
//         <div className="max-w-4xl mx-auto animate-fadeIn">
//           <div className="mb-8 flex justify-center">
//             {/* <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl border-4 border-white/30">
//               <span className="text-white font-bold text-3xl">AHPC</span>
//             </div> */}
//             <div className="w-14 h-14 flex items-center justify-center">
//               <Image
//                 src="/logo.png"
//                 alt={locale === "ar" ? "جمعية إسعاد الطفل الفلسطيني" : "AHPC"}
//                 width={56}
//                 height={56}
//                 priority
//                 className="object-contain"
//               />
//             </div>
//           </div>

//           <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//             {t.home.hero.title}
//           </h1>

//           <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
//             {t.home.hero.subtitle}
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <Link
//               href={`/${locale}/donate`}
//               className="bg-white text-primary-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-50 transition-all hover:shadow-2xl hover:scale-105 active:scale-95"
//             >
//               {t.common.donate}
//             </Link>

//             <Link
//               href={`/${locale}/about`}
//               className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary-700 transition-all hover:shadow-2xl hover:scale-105 active:scale-95"
//             >
//               {t.common.learnMore}
//             </Link>
//           </div>
//         </div>

//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
//           <svg
//             className="w-6 h-6 text-white"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//           >
//             <path d="M19 14l-7 7-7-7M12 21V3" />
//           </svg>
//         </div>
//       </div>
//     </section>
//   );
// }
