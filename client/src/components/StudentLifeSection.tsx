import { Card } from '@/components/ui/card';
import { Music, Trophy, BookOpen, Palette } from 'lucide-react';
import { useT } from '@/i18n/useT';

export default function StudentLifeSection() {
  const t = useT();

  const activities = [
    { icon: Music, key: 'student.activity.music.title', textKey: 'student.activity.music.text' },
    { icon: Trophy, key: 'student.activity.sports.title', textKey: 'student.activity.sports.text' },
    { icon: BookOpen, key: 'student.activity.library.title', textKey: 'student.activity.library.text' },
    { icon: Palette, key: 'student.activity.arts.title', textKey: 'student.activity.arts.text' },
  ];

  return (
    <section id="student" className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0056D2] mb-3 md:mb-4">
            {t('student.title')}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            {t('student.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <Card key={index} className="p-6 md:p-8 text-center hover:shadow-lg transition-shadow group">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-[#F4B400] to-[#E0A200] p-4 rounded-full group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={28} />
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{t(activity.key)}</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{t(activity.textKey)}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
