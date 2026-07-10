import { useEffect, useState, useRef } from 'react';

interface Stat {
  label: string;
  value: number;
  suffix: string;
}

function CounterCard({ label, value, suffix }: Stat) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      className="text-center p-4 md:p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0056D2] mb-1 md:mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <p className="text-gray-600 font-semibold text-xs md:text-sm">{label}</p>
    </div>
  );
}

export default function StatisticsSection() {
  const stats: Stat[] = [
    { label: 'Students', value: 800, suffix: '+' },
    { label: 'Teachers', value: 65, suffix: '+' },
    { label: 'Classrooms', value: 32, suffix: '' },
    { label: 'Years of Excellence', value: 15, suffix: '+' },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-r from-[#0056D2] to-[#0040A0] text-white">
      <div className="container">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-blue-100 max-w-2xl mx-auto px-2">
            Serving families and building futures through quality education and dedicated service.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <CounterCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
