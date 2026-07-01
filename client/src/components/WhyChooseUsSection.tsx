import { Users, BookOpen, Zap, Trophy, Heart, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function WhyChooseUsSection() {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Users,
      title: 'Qualified Teachers',
      description: 'Experienced educators committed to student success and holistic development',
    },
    {
      icon: Heart,
      title: 'Safe Environment',
      description: 'Secure, nurturing campus with modern safety systems and pastoral care',
    },
    {
      icon: Zap,
      title: 'Digital Learning',
      description: 'Integrated technology in classrooms for 21st-century skill development',
    },
    {
      icon: BookOpen,
      title: 'Modern Classrooms',
      description: 'State-of-the-art facilities designed for interactive and collaborative learning',
    },
    {
      icon: Trophy,
      title: 'Sports Excellence',
      description: 'Comprehensive sports programs developing athletic talent and teamwork',
    },
    {
      icon: Globe,
      title: 'Moral Values',
      description: 'Character education emphasizing integrity, respect, and social responsibility',
    },
  ];

  return (
    <section id="student-life" className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0056D2] mb-3 md:mb-4">
            {t('whyChoose.title')}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            {t('whyChoose.subtitle')}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-8 border-t-4 border-[#F4B400]"
              >
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-blue-50 rounded-full mb-4 md:mb-6">
                  <Icon className="text-[#0056D2]" size={28} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
