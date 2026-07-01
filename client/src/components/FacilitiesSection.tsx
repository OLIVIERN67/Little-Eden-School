import { Card } from '@/components/ui/card';
import { BookOpen, Microscope, Gamepad2, Bus, Laptop, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FacilitiesSection() {
  const { t } = useLanguage();

  const facilities = [
    {
      icon: BookOpen,
      title: 'Library',
      description: 'Well-organized library with age-appropriate books fostering reading habits and research skills.',
    },
    {
      icon: Microscope,
      title: 'Science Lab',
      description: 'Modern laboratory equipped for hands-on experiments in biology, chemistry, and physics.',
    },
    {
      icon: Laptop,
      title: 'Computer Lab',
      description: 'Advanced computer facilities for digital literacy and ICT skill development.',
    },
    {
      icon: Gamepad2,
      title: 'Playground',
      description: 'Safe, spacious recreational areas for physical activity and outdoor learning.',
    },
    {
      icon: Bus,
      title: 'School Transport',
      description: 'Safe and reliable transport services with well-maintained buses and qualified drivers.',
    },
    {
      icon: Users,
      title: 'Smart Classrooms',
      description: 'Interactive learning spaces equipped with modern technology for enhanced education.',
    },
  ];

  return (
    <section id="facilities" className="py-12 md:py-16 lg:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0056D2] mb-3 md:mb-4">
            {t('facilities.title')}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            {t('facilities.subtitle')}
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="p-8">
                  <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#0056D2] to-[#0040A0] rounded-lg mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Feature Highlight */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-[#0056D2] to-[#2E8B57] rounded-lg p-6 md:p-8 lg:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <h4 className="text-lg md:text-2xl font-bold mb-2">Safe Campus</h4>
              <p className="text-sm md:text-base text-blue-100">24/7 security systems and trained personnel ensuring student safety.</p>
            </div>
            <div>
              <h4 className="text-lg md:text-2xl font-bold mb-2">Green Environment</h4>
              <p className="text-sm md:text-base text-blue-100">Beautiful landscaping and outdoor spaces promoting wellness and connection to nature.</p>
            </div>
            <div>
              <h4 className="text-lg md:text-2xl font-bold mb-2">Accessible Design</h4>
              <p className="text-sm md:text-base text-blue-100">Inclusive facilities accommodating students of all abilities and needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
