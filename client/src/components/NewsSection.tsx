import { Card } from '@/components/ui/card';
import { Calendar, ArrowRight } from 'lucide-react';
import { useT } from '@/i18n/useT';

export default function NewsSection() {
  const t = useT();

  const news = [
    { date: t('news.item1.date'), title: t('news.item1.title'), excerpt: t('news.item1.excerpt'), tagKey: 'news.tag.event' },
    { date: t('news.item2.date'), title: t('news.item2.title'), excerpt: t('news.item2.excerpt'), tagKey: 'news.tag.academic' },
    { date: t('news.item3.date'), title: t('news.item3.title'), excerpt: t('news.item3.excerpt'), tagKey: 'news.tag.sports' },
  ];

  return (
    <section id="news" className="py-12 md:py-16 lg:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0056D2] mb-3 md:mb-4">
            {t('news.title')}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            {t('news.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {news.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="bg-gradient-to-r from-[#0056D2] to-[#0040A0] p-4 text-white text-xs font-medium">
                {t(item.tagKey)}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0056D2] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{item.excerpt}</p>
                <div className="flex items-center gap-1 text-[#0056D2] text-sm font-medium">
                  <span>{t('news.readMore')}</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
