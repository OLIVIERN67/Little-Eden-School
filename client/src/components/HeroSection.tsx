import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useT } from '@/i18n/useT';

export default function HeroSection() {
  const t = useT();

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/Highlights/GRADU_5.jpg)',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 py-12 md:py-20 lg:py-28">
        <div className="max-w-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 md:mb-5 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-100 mb-5 md:mb-7 leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Button
              size="lg"
              className="bg-[#F4B400] hover:bg-[#E0A200] text-[#0056D2] font-bold text-xs sm:text-sm py-2 h-auto"
              onClick={() => {
                const el = document.querySelector('#admissions');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('hero.cta.apply')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-bold text-xs sm:text-sm py-2 h-auto"
              onClick={() => {
                const el = document.querySelector('#about');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('hero.cta.learnMore')}
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-10 md:mt-14 animate-bounce hidden sm:block">
            <ChevronDown className="text-white" size={28} />
          </div>
        </div>
      </div>
    </section>
  );
}
