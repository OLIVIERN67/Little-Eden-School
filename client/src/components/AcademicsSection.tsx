import { Card } from '@/components/ui/card';
import { BookOpen, Users } from 'lucide-react';
import { useT } from '@/i18n/useT';

export default function AcademicsSection() {
  const t = useT();

  const programs = [
    {
      level: t('academics.program.nursery.level'),
      icon: Users,
      description: t('academics.program.nursery.description'),
      highlights: [
        t('academics.program.nursery.h0'),
        t('academics.program.nursery.h1'),
        t('academics.program.nursery.h2'),
      ],
    },
    {
      level: t('academics.program.primary.level'),
      icon: BookOpen,
      description: t('academics.program.primary.description'),
      highlights: [
        t('academics.program.primary.h0'),
        t('academics.program.primary.h1'),
        t('academics.program.primary.h2'),
      ],
    },
  ];

  const curriculumItems = [
    { title: t('academics.curriculum.national.title'), text: t('academics.curriculum.national.text') },
    { title: t('academics.curriculum.stem.title'), text: t('academics.curriculum.stem.text') },
    { title: t('academics.curriculum.co.title'), text: t('academics.curriculum.co.text') },
  ];

  return (
    <section id="academics" className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0056D2] mb-3 md:mb-4">
            {t('academics.title')}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t('academics.subtitle')}
          </p>
        </div>

        {/* Programs Grid - stacked on mobile, 2col on md */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-10 md:mb-14 max-w-5xl mx-auto">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="bg-gradient-to-r from-[#0056D2] to-[#0040A0] p-6 md:p-8 text-white text-center">
                  <div className="flex justify-center mb-3">
                    <div className="bg-white/20 p-2.5 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Icon size={28} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">{program.level}</h3>
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-xs md:text-sm text-gray-700 mb-4 leading-relaxed">
                    {program.description}
                  </p>
                  <div className="space-y-2">
                    {program.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#F4B400] rounded-full flex-shrink-0"></span>
                        <span className="text-gray-600 text-xs md:text-sm font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Curriculum Highlights */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-5 md:p-8 lg:p-12">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-[#0056D2] mb-6 md:mb-8 text-center">
              {t('academics.curriculum.title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {curriculumItems.slice(0, 2).map((item, i) => (
                <div key={i} className="bg-white rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2 text-base md:text-lg">{item.title}</h4>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
              <div className="md:col-span-2 md:mx-auto md:max-w-md bg-white rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-gray-900 mb-2 text-base md:text-lg">{curriculumItems[2].title}</h4>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  {curriculumItems[2].text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
