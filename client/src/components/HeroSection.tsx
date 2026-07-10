import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/manus-storage/EDEN_10.jpg_347607f4.jpeg)',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 py-16 md:py-24 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Where Excellence Meets Nurturing Care
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 md:mb-8 leading-relaxed">
            Little Eden School is committed to providing world-class education that develops the whole child—academically, socially, and emotionally. Join our community of learners and leaders.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              size="lg"
              className="bg-[#F4B400] hover:bg-[#E0A200] text-[#0056D2] font-bold text-sm sm:text-base py-2 sm:py-3 h-auto"
            >
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-bold text-sm sm:text-base py-2 sm:py-3 h-auto"
            >
              Learn More
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-12 md:mt-16 animate-bounce hidden sm:block">
            <ChevronDown className="text-white" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
}
