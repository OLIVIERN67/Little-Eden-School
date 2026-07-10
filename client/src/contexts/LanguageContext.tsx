import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'en' | 'fr' | 'rw';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.academics': 'Academics',
    'nav.facilities': 'Facilities',
    'nav.gallery': 'Gallery',
    'nav.staff': 'Staff',
    'nav.news': 'News & Events',
    'nav.admissions': 'Admissions',
    'nav.studentLife': 'Student Life',
    'nav.contact': 'Contact',
    'nav.applyNow': 'Apply Now',
    'nav.contactUs': 'Contact Us',

    'hero.title': 'Where Excellence Meets Nurturing Care',
    'hero.description': 'Little Eden School is committed to providing world-class education that develops the whole child—academically, socially, and emotionally. Join our community of learners and leaders.',
    'hero.applyNow': 'Apply Now',
    'hero.learnMore': 'Learn More',

    'about.title': 'About Little Eden School',
    'about.subtitle': 'Where Learning Meets Joy',
    'about.mission': 'Our Mission',
    'about.missionText': 'To facilitate first-class education and character development that empowers students to become responsible global citizens and leaders of tomorrow.',
    'about.vision': 'Our Vision',
    'about.visionText': 'To provide the most skillful, competitive citizens who are models of servant leadership in their communities and the world.',
    'about.values': 'Our Values',
    'about.excellence': 'Excellence',
    'about.excellenceText': 'Commitment to the highest standards in all we do',
    'about.integrity': 'Integrity',
    'about.integrityText': 'Honesty and moral principles in all actions',
    'about.community': 'Community',
    'about.communityText': 'Fostering a supportive, inclusive environment',
    'about.growth': 'Growth',
    'about.growthText': 'Continuous learning and development for all',

    'whyChoose.title': 'Why Choose Little Eden School',
    'whyChoose.subtitle': 'Excellence in Education',

    'academics.title': 'Academic Programs',
    'academics.nursery': 'Nursery',
    'academics.primary': 'Primary',

    'stats.title': 'Our Impact in Numbers',
    'stats.subtitle': 'Serving families and building futures through quality education and dedicated service.',
    'stats.students': 'Students',
    'stats.teachers': 'Teachers',
    'stats.classrooms': 'Classrooms',
    'stats.years': 'Years of Excellence',
    'stats.trustLine': 'Trusted by 800+ families across Rwanda',

    'facilities.title': 'Our Facilities',
    'facilities.subtitle': 'State-of-the-art infrastructure designed to support comprehensive learning and development.',

    'gallery.title': 'School Gallery',
    'gallery.subtitle': 'Explore the vibrant life and culture of Little Eden School through our photo gallery.',
    'gallery.viewAll': 'View Full Gallery',

    'staff.title': 'Meet Our Leadership Team',
    'staff.subtitle': 'Experienced educators dedicated to your child\'s success',
    'staff.facultyTitle': 'Highly Qualified Faculty',
    'staff.facultyText': 'Our team comprises certified educators with advanced qualifications and years of experience in child development and education. We are committed to continuous professional development to provide the best learning experience for your child.',

    'news.title': 'News & Events',
    'news.subtitle': 'Stay updated with the latest happenings',
    'news.viewAll': 'View All Events & News',

    'admissions.title': 'Admissions Process',
    'admissions.subtitle': 'Join our growing family',
    'admissions.startApplication': 'Start Application',

    'testimonials.title': 'What Parents & Students Say',
    'testimonials.subtitle': 'Hear from our community',
    'testimonials.cta': 'Ready to Join Our Community?',
    'testimonials.ctaDescription': 'Give your child the gift of excellent education and holistic development.',
    'testimonials.startAdmission': 'Start the Admission Process',

    'contact.title': 'Get in Touch',
    'contact.subtitle': 'We\'d love to hear from you',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.sendMessage': 'Send us a Message',
    'contact.fullName': 'Full Name',
    'contact.namePlaceholder': 'Your name',
    'contact.emailAddress': 'Email Address',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.phoneNumber': 'Phone Number',
    'contact.phonePlaceholder': '(+250) 786 718 716',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Your message...',
    'contact.send': 'Send Message',
    'contact.hours': 'Office Hours',
    'contact.monday': 'Monday - Friday',
    'contact.saturday': 'Saturday',
    'contact.sunday': 'Sunday',
    'contact.downloads': 'Downloads',
    'contact.thanks': 'Thank you for your message. We will get back to you soon!',

    'footer.quickLinks': 'Quick Links',
    'footer.programs': 'Programs',
    'footer.contactInfo': 'Contact Info',
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.aboutText': 'Excellence in Education. Nurturing minds, building futures, and creating responsible global citizens.',
    'footer.followUs': 'Follow Us',
    'footer.home': 'Home',
    'footer.about': 'About Us',
    'footer.academics': 'Academics',
    'footer.admissions': 'Admissions',
    'footer.contact': 'Contact',
    'footer.location': 'Musanze, Rwanda',

    'common.learnMore': 'Learn More',
    'common.readMore': 'Read More',
    'common.viewMore': 'View More',
    'common.contactUs': 'Contact Us',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.academics': 'Académique',
    'nav.facilities': 'Installations',
    'nav.gallery': 'Galerie',
    'nav.staff': 'Personnel',
    'nav.news': 'Actualités & Événements',
    'nav.admissions': 'Admissions',
    'nav.studentLife': 'Vie Étudiante',
    'nav.contact': 'Contact',
    'nav.applyNow': 'Postuler Maintenant',
    'nav.contactUs': 'Nous Contacter',

    'hero.title': 'Là Où l\'Excellence Rencontre la Bienveillance',
    'hero.description': 'Little Eden School s\'engage à offrir une éducation de classe mondiale qui développe l\'enfant dans sa globalité — sur le plan académique, social et émotionnel. Rejoignez notre communauté d\'apprenants et de leaders.',
    'hero.applyNow': 'Postuler Maintenant',
    'hero.learnMore': 'En Savoir Plus',

    'about.title': 'À Propos de Little Eden School',
    'about.subtitle': 'Quand l\'Apprentissage Rencontre la Joie',
    'about.mission': 'Notre Mission',
    'about.missionText': 'Faciliter une éducation de premier ordre et un développement du caractère qui permettent aux élèves de devenir des citoyens mondiaux responsables et des leaders de demain.',
    'about.vision': 'Notre Vision',
    'about.visionText': 'Former des citoyens compétents et performants, modèles de leadership de service dans leurs communautés et dans le monde.',
    'about.values': 'Nos Valeurs',
    'about.excellence': 'Excellence',
    'about.excellenceText': 'Engagement envers les plus hauts standards dans tout ce que nous faisons',
    'about.integrity': 'Intégrité',
    'about.integrityText': 'Honnêteté et principes moraux dans toutes les actions',
    'about.community': 'Communauté',
    'about.communityText': 'Favoriser un environnement solidaire et inclusif',
    'about.growth': 'Croissance',
    'about.growthText': 'Apprentissage et développement continus pour tous',

    'whyChoose.title': 'Pourquoi Choisir Little Eden School',
    'whyChoose.subtitle': 'Excellence en Éducation',

    'academics.title': 'Programmes Académiques',
    'academics.nursery': 'Maternelle',
    'academics.primary': 'Primaire',

    'stats.title': 'Notre Impact en Chiffres',
    'stats.subtitle': 'Soutenir les familles et construire l\'avenir grâce à une éducation de qualité et un service dévoué.',
    'stats.students': 'Étudiants',
    'stats.teachers': 'Enseignants',
    'stats.classrooms': 'Salles de Classe',
    'stats.years': 'Années d\'Excellence',
    'stats.trustLine': 'Fait confiance par plus de 800 familles à travers le Rwanda',

    'facilities.title': 'Nos Installations',
    'facilities.subtitle': 'Une infrastructure de pointe conçue pour soutenir un apprentissage et un développement complets.',

    'gallery.title': 'Galerie de l\'École',
    'gallery.subtitle': 'Découvrez la vie et la culture dynamiques de Little Eden School à travers notre galerie photo.',
    'gallery.viewAll': 'Voir la Galerie Complète',

    'staff.title': 'Rencontrez Notre Équipe de Direction',
    'staff.subtitle': 'Des éducateurs expérimentés dédiés à la réussite de votre enfant',
    'staff.facultyTitle': 'Corps enseignant hautement qualifié',
    'staff.facultyText': 'Notre équipe est composée d’éducateurs certifiés dotés de qualifications avancées et de plusieurs années d’expérience en développement et en éducation de l’enfant. Nous nous engageons dans le développement professionnel continu afin d’offrir la meilleure expérience d’apprentissage à votre enfant.',

    'news.title': 'Actualités & Événements',
    'news.subtitle': 'Restez informé des derniers événements',
    'news.viewAll': 'Voir Tous les Événements & Actualités',

    'admissions.title': 'Processus d\'Admission',
    'admissions.subtitle': 'Rejoignez notre famille grandissante',
    'admissions.startApplication': 'Commencer la Candidature',

    'testimonials.title': 'Ce que Disent les Parents et les Étudiants',
    'testimonials.subtitle': 'Écoutez notre communauté',
    'testimonials.cta': 'Prêt à Rejoindre Notre Communauté?',
    'testimonials.ctaDescription': 'Offrez à votre enfant le cadeau d\'une excellente éducation et d\'un développement holistique.',
    'testimonials.startAdmission': 'Commencer le Processus d\'Admission',

    'contact.title': 'Nous Contacter',
    'contact.subtitle': 'Nous aimerions avoir de vos nouvelles',
    'contact.phone': 'Téléphone',
    'contact.email': 'Email',
    'contact.address': 'Adresse',
    'contact.sendMessage': 'Envoyez-nous un message',
    'contact.fullName': 'Nom complet',
    'contact.namePlaceholder': 'Votre nom',
    'contact.emailAddress': 'Adresse e-mail',
    'contact.emailPlaceholder': 'votre@email.com',
    'contact.phoneNumber': 'Numéro de téléphone',
    'contact.phonePlaceholder': '(+250) 788 000 000',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Votre message...',
    'contact.send': 'Envoyer le message',
    'contact.hours': 'Heures de Bureau',
    'contact.monday': 'Lundi - Vendredi',
    'contact.saturday': 'Samedi',
    'contact.sunday': 'Dimanche',
    'contact.downloads': 'Téléchargements',
    'contact.thanks': 'Merci pour votre message. Nous vous répondrons bientôt !',

    'footer.quickLinks': 'Liens Rapides',
    'footer.programs': 'Programmes',
    'footer.contactInfo': 'Informations de Contact',
    'footer.rights': 'Tous droits réservés',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions d\'Utilisation',
    'footer.aboutText': 'Excellence en éducation. Cultiver les esprits, construire l\'avenir et former des citoyens mondiaux responsables.',
    'footer.followUs': 'Suivez-Nous',
    'footer.home': 'Accueil',
    'footer.about': 'À Propos',
    'footer.academics': 'Académique',
    'footer.admissions': 'Admissions',
    'footer.contact': 'Contact',
    'footer.location': 'Musanze, Rwanda',

    'common.learnMore': 'En Savoir Plus',
    'common.readMore': 'Lire Plus',
    'common.viewMore': 'Voir Plus',
    'common.contactUs': 'Nous Contacter',
  },
  rw: {
    'nav.home': 'Ahabanza',
    'nav.about': 'Kubyerekeye',
    'nav.academics': 'Amashuri',
    'nav.facilities': 'Ibikoresho',
    'nav.gallery': 'Ifoto',
    'nav.staff': 'Abakozi',
    'nav.news': 'Amakuru & Ibirori',
    'nav.admissions': 'Kwiyandikisha',
    'nav.studentLife': 'Abanyeshuri',
    'nav.contact': 'Guhamagara',
    'nav.applyNow': '',
    'nav.contactUs': 'Hamagara',

    'hero.title': 'Aho Ubwiza Buhura n\'Uburere Bwita ku Mwana',
    'hero.description': 'Little Eden School yiyemeje gutanga uburezi bwo ku rwego rwo hejuru butera imbere umwana wose - mu myigire, mu mibanire no mu marangamutima. Injira mu muryango wacu w\'abiga n\'abayobozi.',
    'hero.applyNow': 'Andika',
    'hero.learnMore': 'Menya Byinshi',

    'about.title': 'Kubyerekeye Little Eden School',
    'about.subtitle': 'Aho Kwiga Hahuzwa n\'Ibyishimo',
    'about.mission': 'Intego Yacu',
    'about.missionText': 'Gutegura uburezi bwo ku rwego rwo hejuru no kubaka imico ituma abanyeshuri baba abaturage bashinzwe n\'abayobozi b\'ejo.',
    'about.vision': 'Icyerekezo Cyacu',
    'about.visionText': 'Gutegura abaturage bafite ubushobozi, bahatanira kuba urugero rw\'ubuyobozi bushingiye ku murimo mu muryango no ku isi.',
    'about.values': 'Indangagaciro Zacu',
    'about.excellence': 'Ubwiza',
    'about.excellenceText': 'Kwiyemeza kugera ku rwego rwo hejuru mu byo dukora byose',
    'about.integrity': 'Ubunyangamugayo',
    'about.integrityText': 'Kuba inyangamugayo no kubahiriza amahame y\'imyitwarire',
    'about.community': 'Umuryango',
    'about.communityText': 'Gushyigikira umuryango uhuza kandi wita ku bandi',
    'about.growth': 'Iterambere',
    'about.growthText': 'Kwiga no gutera imbere bidacogora kuri bose',

    'whyChoose.title': 'Kuki Wahitamo Little Eden School',
    'whyChoose.subtitle': 'Ubwiza mu Burezi',

    'academics.title': 'Porogaramu z\'Amashuri',
    'academics.nursery': 'Amashuri y\'Abato',
    'academics.primary': 'Amashuri y\'Ibanze',

    'stats.title': 'Ibyo Twagezeho mu Mibare',
    'stats.subtitle': 'Dushigikira imiryango kandi twubaka ejo hazaza binyuze mu burezi bufite ireme no gukorera abantu neza.',
    'stats.students': 'Abanyeshuri',
    'stats.teachers': 'Abarezi',
    'stats.classrooms': 'Amasomo',
    'stats.years': 'Imyaka y\'Ubwiza',
    'stats.trustLine': 'Twizerwa n\'imiryango irenga 800 mu Rwanda',

    'facilities.title': 'Ibikoresho Byacu',
    'facilities.subtitle': 'Ibikorwa remezo bigezweho byateguwe gushyigikira kwiga no kwiyubaka byuzuye.',

    'gallery.title': 'Ifoto z\'Ishuri',
    'gallery.subtitle': 'Reba ubuzima n\'umuco byiza bya Little Eden School biciye mu ifoto zacu.',
    'gallery.viewAll': 'Reba Ifoto Zose',

    'staff.title': 'Hura n\'Itsinda ry\'Ubuyobozi',
    'staff.subtitle': 'Abarezi bafite uburambe biyemeje gutsinda kw\'umwana wawe',
    'staff.facultyTitle': 'Abarezi bafite ubushobozi buhanitse',
    'staff.facultyText': 'Itsinda ryacu rigizwe n\'abarimu bemewe bafite impamyabumenyi ihanitse n\'uburambe bw\'imyaka myinshi mu iterambere ry\'umwana no mu burezi. Twiyemeje gukomeza kwiyungura ubumenyi kugira ngo dutange uburambe bwiza bwo kwiga ku mwana wawe.',

    'news.title': 'Amakuru & Ibirori',
    'news.subtitle': 'Menya ibyaherukaga kuba',
    'news.viewAll': 'Reba Ibirori Byose & Amakuru',

    'admissions.title': 'Inzira yo Kwiyandikisha',
    'admissions.subtitle': 'Injira mu muryango wacu ugenda waguka',
    'admissions.startApplication': 'Tangira Kwiyandikisha',

    'testimonials.title': 'Ibyo Ababyeyi & Abanyeshuri Bavuga',
    'testimonials.subtitle': 'Wumve ibitekerezo by\'umuryango wacu',
    'testimonials.cta': 'Witeguye Kwinjira mu Muryango Wacu?',
    'testimonials.ctaDescription': 'Aha umwana wawe impano y\'uburezi bwiza n\'iterambere ryuzuye.',
    'testimonials.startAdmission': 'Tangira Inzira yo Kwiyandikisha',

    'contact.title': 'Twandikire',
    'contact.subtitle': 'Twishimiye kumva ibitekerezo byawe',
    'contact.phone': 'Terefone',
    'contact.email': 'Imeli',
    'contact.address': 'Aho turi',
    'contact.sendMessage': 'Twoherereze Ubutumwa',
    'contact.fullName': 'Amazina Yose',
    'contact.namePlaceholder': 'Amazina yawe',
    'contact.emailAddress': 'Aderesi ya Imeli',
    'contact.emailPlaceholder': 'wowe@imeli.com',
    'contact.phoneNumber': 'Nomero ya Terefone',
    'contact.phonePlaceholder': '(+250) 788 000 000',
    'contact.message': 'Ubutumwa',
    'contact.messagePlaceholder': 'Ubutumwa bwawe...',
    'contact.send': 'Ohereza Ubutumwa',
    'contact.hours': 'Igihe cy\'Akazi',
    'contact.monday': 'Kuwa Mbere - Kuwa Gatanu',
    'contact.saturday': 'Kuwa Gatandatu',
    'contact.sunday': 'Kuwa Cyumweru',
    'contact.downloads': 'Gukuramo',
    'contact.thanks': 'Murakoze ku butumwa bwawe. Tuzabasha kubasubiza bidatinze!',

    'footer.quickLinks': 'Ihuza Rya Vuba',
    'footer.programs': 'Porogaramu',
    'footer.contactInfo': 'Amakuru yo Guhamagara',
    'footer.rights': 'Uburenganzira bwose bwabitswe',
    'footer.privacy': 'Politiki y\'Ibanga',
    'footer.terms': 'Amabwiriza yo Gukoresha',
    'footer.aboutText': 'Ubwiza mu burezi. Kurera ibitekerezo, kubaka ejo hazaza, no gukora abaturage b\'isi bashinzwe.',
    'footer.followUs': 'Dukurikire',
    'footer.home': 'Ahabanza',
    'footer.about': 'Kubyerekeye',
    'footer.academics': 'Amashuri',
    'footer.admissions': 'Kwiyandikisha',
    'footer.contact': 'Guhamagara',
    'footer.location': 'Musanze, Rwanda',

    'common.learnMore': 'Menya Byinshi',
    'common.readMore': 'Soma Byinshi',
    'common.viewMore': 'Reba Byinshi',
    'common.contactUs': 'Twandikire',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage && ['en', 'fr', 'rw'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => translations[language][key] || translations.en[key] || key;

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}