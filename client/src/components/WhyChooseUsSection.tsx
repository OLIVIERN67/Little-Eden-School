import { Users, BookOpen, Zap, Trophy, Heart, Globe } from 'lucide-react';
import { useT } from '@/i18n/useT';

export default function WhyChooseUsSection() {
  const t = useT();

  const iconMap = [Users, Heart, Zap, BookOpen, Trophy, Globe];

  return (
    <section id="why-choose" className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0056D2] mb-3 md:mb-4">
            {t('why.title')}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            {t('why.subtitle')}
          </p>
        </div>

        {/* Cards Grid - 1col mobile, 2col md, 3col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[0, 1, 2, 3, 4, 5].map((index) => {
            const Icon = iconMap[index];
            const titleKey = `why.card.${index}.title`;
            const textKey = `why.card.${index}.text`;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-5 md:p-6 border-t-4 border-[#F4B400]"
              >
                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-full mb-3 md:mb-4">
                  <Icon className="text-[#0056D2]" size={24} />
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">
                  {t(titleKey)}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {t(textKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
