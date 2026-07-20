import { useEffect, useState, useRef } from 'react';
import { useT } from '@/i18n/useT';

interface Stat {
  labelKey: string;
  value: number;
  suffix: string;
}

function CounterCard({ labelKey, value, suffix }: Stat) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const t = useT();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 50);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div
      ref={ref}
      className="text-center p-3 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0056D2] mb-1">
        {count.toLocaleString()}{suffix}
      </div>
      <p className="text-gray-600 font-semibold text-[10px] md:text-xs">{t(labelKey)}</p>
    </div>
  );
}

export default function StatisticsSection() {
  const t = useT();

  const stats: Stat[] = [
    { labelKey: 'stats.card.students', value: 800, suffix: '+' },
    { labelKey: 'stats.card.teachers', value: 65, suffix: '+' },
    { labelKey: 'stats.card.classrooms', value: 32, suffix: '' },
    { labelKey: 'stats.card.years', value: 15, suffix: '+' },
  ];

  return (
    <section className="py-10 md:py-14 lg:py-20 bg-gradient-to-r from-[#0056D2] to-[#0040A0] text-white">
      <div className="container">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3">
            {t('stats.title')}
          </h2>
          <p className="text-xs md:text-sm lg:text-base text-blue-100 max-w-2xl mx-auto px-2">
            {t('stats.subtitle')}
          </p>
        </div>

        {/* Stats Grid - 2x2 on mobile, 4col on lg */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {stats.map((stat, index) => (
            <CounterCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
