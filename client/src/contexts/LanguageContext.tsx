import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'fr' | 'rw';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.academics': 'Academics',
    'nav.facilities': 'Facilities',
    'nav.gallery': 'Gallery',
    'nav.staff': 'Staff',
    'nav.news': 'News & Events',
    'nav.admissions': 'Admissions',
    'nav.contact': 'Contact',
    'nav.applyNow': 'Apply Now',
    'nav.contactUs': 'Contact Us',

    // Hero Section
    'hero.title': 'Where Excellence Meets Nurturing Care',
    'hero.description': 'Little Eden School is committed to providing world-class education that develops the whole child—academically, socially, and emotionally. Join our community of learners and leaders.',
    'hero.applyNow': 'Apply Now',
    'hero.learnMore': 'Learn More',

    // About Section
    'about.title': 'About Little Eden School',
    'about.subtitle': 'Where Learning Meets Joy',

    // Why Choose Us
    'whyChoose.title': 'Why Choose Little Eden School',
    'whyChoose.subtitle': 'Excellence in Education',

    // Academics
    'academics.title': 'Academic Programs',
    'academics.nursery': 'Nursery',
    'academics.primary': 'Primary',

    // Statistics
    'stats.title': 'Our Impact in Numbers',
    'stats.students': 'Students',
    'stats.teachers': 'Teachers',
    'stats.classrooms': 'Classrooms',
    'stats.years': 'Years of Excellence',

    // Facilities
    'facilities.title': 'Our Facilities',

    // Gallery
    'gallery.title': 'School Gallery',
    'gallery.viewAll': 'View Full Gallery',

    // Staff
    'staff.title': 'Meet Our Leadership Team',
    'staff.subtitle': 'Experienced educators dedicated to your child\'s success',

    // News & Events
    'news.title': 'News & Events',
    'news.subtitle': 'Stay updated with the latest happenings',
    'news.viewAll': 'View All Events & News',

    // Admissions
    'admissions.title': 'Admissions Process',
    'admissions.subtitle': 'Join our growing family',
    'admissions.startApplication': 'Start Application',

    // Testimonials
    'testimonials.title': 'What Parents & Students Say',
    'testimonials.subtitle': 'Hear from our community',
    'testimonials.cta': 'Ready to Join Our Community?',
    'testimonials.ctaDescription': 'Give your child the gift of excellent education and holistic development.',
    'testimonials.startAdmission': 'Start the Admission Process',

    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'We\'d love to hear from you',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.hours': 'Office Hours',
    'contact.monday': 'Monday - Friday',
    'contact.saturday': 'Saturday',
    'contact.sunday': 'Sunday',

    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.programs': 'Programs',
    'footer.contact': 'Contact Info',
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',

    // Common
    'common.learnMore': 'Learn More',
    'common.readMore': 'Read More',
    'common.viewMore': 'View More',
    'common.contactUs': 'Contact Us',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.academics': 'Académique',
    'nav.facilities': 'Installations',
    'nav.gallery': 'Galerie',
    'nav.staff': 'Personnel',
    'nav.news': 'Actualités & Événements',
    'nav.admissions': 'Admissions',
    'nav.contact': 'Contact',
    'nav.applyNow': 'Postuler Maintenant',
    'nav.contactUs': 'Nous Contacter',

    // Hero Section
    'hero.title': 'Où l\'Excellence Rencontre les Soins Bienveillants',
    'hero.description': 'Little Eden School s\'engage à fournir une éducation de classe mondiale qui développe l\'enfant dans sa totalité—académiquement, socialement et émotionnellement. Rejoignez notre communauté d\'apprenants et de leaders.',
    'hero.applyNow': 'Postuler Maintenant',
    'hero.learnMore': 'En Savoir Plus',

    // About Section
    'about.title': 'À Propos de Little Eden School',
    'about.subtitle': 'Où l\'Apprentissage Rencontre la Joie',

    // Why Choose Us
    'whyChoose.title': 'Pourquoi Choisir Little Eden School',
    'whyChoose.subtitle': 'Excellence en Éducation',

    // Academics
    'academics.title': 'Programmes Académiques',
    'academics.nursery': 'Maternelle',
    'academics.primary': 'Primaire',

    // Statistics
    'stats.title': 'Notre Impact en Chiffres',
    'stats.students': 'Étudiants',
    'stats.teachers': 'Enseignants',
    'stats.classrooms': 'Salles de Classe',
    'stats.years': 'Années d\'Excellence',

    // Facilities
    'facilities.title': 'Nos Installations',

    // Gallery
    'gallery.title': 'Galerie de l\'École',
    'gallery.viewAll': 'Voir la Galerie Complète',

    // Staff
    'staff.title': 'Rencontrez Notre Équipe de Direction',
    'staff.subtitle': 'Des éducateurs expérimentés dédiés à la réussite de votre enfant',

    // News & Events
    'news.title': 'Actualités & Événements',
    'news.subtitle': 'Restez informé des derniers événements',
    'news.viewAll': 'Voir Tous les Événements & Actualités',

    // Admissions
    'admissions.title': 'Processus d\'Admission',
    'admissions.subtitle': 'Rejoignez notre famille en croissance',
    'admissions.startApplication': 'Commencer la Candidature',

    // Testimonials
    'testimonials.title': 'Ce que Disent les Parents et les Étudiants',
    'testimonials.subtitle': 'Écoutez notre communauté',
    'testimonials.cta': 'Prêt à Rejoindre Notre Communauté?',
    'testimonials.ctaDescription': 'Offrez à votre enfant le cadeau d\'une excellente éducation et d\'un développement holistique.',
    'testimonials.startAdmission': 'Commencer le Processus d\'Admission',

    // Contact
    'contact.title': 'Nous Contacter',
    'contact.subtitle': 'Nous aimerions avoir de vos nouvelles',
    'contact.phone': 'Téléphone',
    'contact.email': 'Email',
    'contact.address': 'Adresse',
    'contact.hours': 'Heures de Bureau',
    'contact.monday': 'Lundi - Vendredi',
    'contact.saturday': 'Samedi',
    'contact.sunday': 'Dimanche',

    // Footer
    'footer.quickLinks': 'Liens Rapides',
    'footer.programs': 'Programmes',
    'footer.contact': 'Informations de Contact',
    'footer.rights': 'Tous droits réservés',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions d\'Utilisation',

    // Common
    'common.learnMore': 'En Savoir Plus',
    'common.readMore': 'Lire Plus',
    'common.viewMore': 'Voir Plus',
    'common.contactUs': 'Nous Contacter',
  },
  rw: {
    // Navigation
    'nav.home': 'Ahabanza',
    'nav.about': 'Kubyibwa',
    'nav.academics': 'Amashuri',
    'nav.facilities': 'Ibikoresho',
    'nav.gallery': 'Ifoto',
    'nav.staff': 'Abakozi',
    'nav.news': 'Amakuru & Ibirori',
    'nav.admissions': 'Kwiyandikisha',
    'nav.contact': 'Guhamagara',
    'nav.applyNow': 'Andika Nabi',
    'nav.contactUs': 'Hamagara',

    // Hero Section
    'hero.title': 'Aho Ubwenge Bumvikana n\'Ubukungu',
    'hero.description': 'Little Eden School ihamagara guhabwa amashuri yuzuye ayo akubita umwana muburyo bwose—mu mahoro, mu mahoro n\'mu mahoro. Injira mu muryango wacu w\'abigize n\'abayobozi.',
    'hero.applyNow': 'Andika Nabi',
    'hero.learnMore': 'Menya Byinshi',

    // About Section
    'about.title': 'Kubyibwa Little Eden School',
    'about.subtitle': 'Aho Kwiga Kumvikana n\'Ubwiyunge',

    // Why Choose Us
    'whyChoose.title': 'Kuki Hitamo Little Eden School',
    'whyChoose.subtitle': 'Ubwenge mu Mahoro',

    // Academics
    'academics.title': 'Porogaramu z\'Amashuri',
    'academics.nursery': 'Amashuri Yibinyobwa',
    'academics.primary': 'Amashuri Yibanze',

    // Statistics
    'stats.title': 'Ingaruka Zacu mu Mibare',
    'stats.students': 'Abigize',
    'stats.teachers': 'Abigisha',
    'stats.classrooms': 'Icyigire',
    'stats.years': 'Imyaka y\'Ubwenge',

    // Facilities
    'facilities.title': 'Ibikoresho Byacu',

    // Gallery
    'gallery.title': 'Ifoto z\'Ishuri',
    'gallery.viewAll': 'Reba Ifoto Zose',

    // Staff
    'staff.title': 'Hamagara Itsinda Ryacu ry\'Ubuyobozi',
    'staff.subtitle': 'Abigisha bafite ubwenge bahamagara gutera inzira z\'umwana wacu',

    // News & Events
    'news.title': 'Amakuru & Ibirori',
    'news.subtitle': 'Kunyuze mu mahoro ashya',
    'news.viewAll': 'Reba Ibirori Byose & Amakuru',

    // Admissions
    'admissions.title': 'Inzira y\'Kwiyandikisha',
    'admissions.subtitle': 'Injira mu muryango wacu',
    'admissions.startApplication': 'Tangira Kwiyandikisha',

    // Testimonials
    'testimonials.title': 'Ibyo Bavuga Ababyeyi & Abigize',
    'testimonials.subtitle': 'Wumva muryango wacu',
    'testimonials.cta': 'Witeguye Kwinjira mu Muryango Wacu?',
    'testimonials.ctaDescription': 'Aha umwana wacu impano y\'amashuri yuzuye n\'iterambere ryose.',
    'testimonials.startAdmission': 'Tangira Inzira y\'Kwiyandikisha',

    // Contact
    'contact.title': 'Hamagara',
    'contact.subtitle': 'Dushatse kumva kuri inwe',
    'contact.phone': 'Terefone',
    'contact.email': 'Imeli',
    'contact.address': 'Aho Duhereza',
    'contact.hours': 'Igihe cy\'Akazi',
    'contact.monday': 'Kuwa Mbere - Kuwa Gatanu',
    'contact.saturday': 'Kuwa Gatandatu',
    'contact.sunday': 'Kuwa Cyumweru',

    // Footer
    'footer.quickLinks': 'Ihuza Vuba',
    'footer.programs': 'Porogaramu',
    'footer.contact': 'Imenyereza y\'Guhamagara',
    'footer.rights': 'Uburenganzira Bwose Byabitswe',
    'footer.privacy': 'Inyandiko y\'Ubwiyunge',
    'footer.terms': 'Amabwiriza y\'Gukoresha',

    // Common
    'common.learnMore': 'Menya Byinshi',
    'common.readMore': 'Soma Byinshi',
    'common.viewMore': 'Reba Byinshi',
    'common.contactUs': 'Hamagara',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Get saved language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage && ['en', 'fr', 'rw'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
