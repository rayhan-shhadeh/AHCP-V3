export type Locale = 'ar' | 'en';

export interface NotionPage {
  id: string;
  slug: string;
  locale: Locale;
  title: string;
  body: string;
  published: boolean;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  date: string;
  coverImage?: string;
  images?: string[]; // All images from cover_image field
  locale: Locale;
  published: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  coverImage?: string;
  images?: string[]; // All images from cover_image field
  locale: Locale;
  published: boolean;
}

export interface Translation {
  common: {
    home: string;
    about: string;
    activities: string;
    news: string;
    contact: string;
    donate: string;
    readMore: string;
    learnMore: string;
    viewAll: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
    mission: {
      title: string;
      description: string;
    };
    impact: {
      title: string;
      stats: {
        children: string;
        programs: string;
        volunteers: string;
        years: string;
      };
    };
  };
  about: {
    title: string;
    mission: string;
    vision: string;
    values: string;
  };
  activities: {
    title: string;
    description: string;
    noActivities: string;
    backToActivities: string;
    gallery: string;
  };
  news: {
    title: string;
    description: string;
    noNews: string;
    backToNews: string;
    gallery: string;
  };
  contact: {
    title: string;
    address: string;
    phone: string;
    email: string;
    website: string;
    facebook: string;
    sendMessage: string;
  };
  donate: {
    title: string;
    description: string;
    bankDetails: {
      title: string;
      accountName: string;
      accountNumber: string;
      bankName: string;
      iban: string;
      swift: string;
    };
    directDonation: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    contactUs: string;
    rights: string;
  };
}
