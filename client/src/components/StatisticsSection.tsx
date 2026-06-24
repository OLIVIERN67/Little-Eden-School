import { useEffect, useState, useRef } from 'react';
import { TrendingUp } from 'lucide-react';

interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon?: React.ReactNode;
}

function CounterCard({ label, value, suffix, icon }: Stat) {
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
    const duration = 2500;
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
      className="relative group"
    >
      {/* Card Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105"></div>
      
      {/* Content */}
      <div className="relative p-6 md:p-8 text-center">
        {/* Icon */}
        {icon && (
          <div className="flex justify-center mb-3 md:mb-4">
            <div className="p-3 bg-gradient-to-br from-[#0056D2] to-[#0040A0] rounded-lg text-white">
              {icon}
            </div>
          </div>
        )}
        
        {/* Counter Value */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#0056D2] to-[#2E8B57] bg-clip-text text-transparent mb-2 md:mb-3">
          {count.toLocaleString()}{suffix}
        </div>
        
        {/* Label */}
        <p className="text-gray-700 font-semibold text-sm md:text-base">{label}</p>
      </div>
    </div>
  );
}

export default function StatisticsSection() {
  const stats: Stat[] = [
    { 
      label: 'Students', 
      value: 800, 
      suffix: '+',
      icon: <TrendingUp size={24} />
    },
    { 
      label: 'Teachers', 
      value: 65, 
      suffix: '+',
      icon: <TrendingUp size={24} />
    },
    { 
      label: 'Classrooms', 
      value: 32, 
      suffix: '',
      icon: <TrendingUp size={24} />
    },
    { 
      label: 'Years of Excellence', 
      value: 15, 
      suffix: '+',
      icon: <TrendingUp size={24} />
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4B400]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2E8B57]/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0056D2] mb-3 md:mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Serving families and building futures through quality education and dedicated service.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <CounterCard {...stat} />
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#0056D2] to-[#2E8B57] rounded-full text-white text-sm font-semibold">
            Trusted by 800+ families across Rwanda
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
