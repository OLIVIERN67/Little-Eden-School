import { Card } from '@/components/ui/card';
import { BookOpen, Microscope, Laptop, Gamepad2, Bus, Users } from 'lucide-react';
import { useT } from '@/i18n/useT';

export default function FacilitiesSection() {
  const t = useT();

  const facilityKeys = [
    { icon: BookOpen, key: 'facilities.library', image: '/placeholders/library.svg' },
    { icon: Microscope, key: 'facilities.sciencelab', image: '/placeholders/sciencelab.svg' },
    { icon: Laptop, key: 'facilities.computerlab', image: '/placeholders/computerlab.svg' },
    { icon: Gamepad2, key: 'facilities.playground', image: '/Highlights/Playground.jpeg' },
    { icon: Bus, key: 'facilities.transport', image: '/placeholders/transport.svg' },
    { icon: Users, key: 'facilities.smartclassrooms', image: '/placeholders/smartclassrooms.svg' },
  ];

  const featureKeys = [
    { key: 'facilities.feature.safe' },
    { key: 'facilities.feature.green' },
    { key: 'facilities.feature.accessible' },
  ];

  return (
    <section id="facilities" className="py-12 md:py-16 lg:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0056D2] mb-3 md:mb-4">
            {t('facilities.title')}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            {t('facilities.subtitle')}
          </p>
        </div>

        {/* Facilities Grid - 1col mobile, 2col md, 3col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {facilityKeys.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                {facility.image && (
                  <div className="relative aspect-video bg-gray-100 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={t(`${facility.key}.title`)}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-5 md:p-6">
                  <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#0056D2] to-[#0040A0] rounded-lg mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">
                    {t(`${facility.key}.title`)}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {t(`${facility.key}.description`)}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Feature Highlight - stacked on mobile, 3col on md */}
        <div className="mt-10 md:mt-14 bg-gradient-to-r from-[#0056D2] to-[#2E8B57] rounded-lg p-5 md:p-8 lg:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {featureKeys.map((feature, i) => (
              <div key={i}>
                <h4 className="text-base md:text-xl font-bold mb-1">{t(`${feature.key}.title`)}</h4>
                <p className="text-xs md:text-sm text-blue-100">{t(`${feature.key}.text`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
