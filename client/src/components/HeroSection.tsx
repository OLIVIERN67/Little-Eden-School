import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/manus-storage/EDEN_10.jpg_347607f4.jpeg)',
        }}
      >
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/40"></div>
        
        {/* Animated Accent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0056D2]/10"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 py-16 md:py-24 lg:py-32">
        <div className="max-w-2xl">
          {/* Animated Heading */}
          <h1 
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Where Excellence Meets Nurturing Care
          </h1>

          {/* Animated Subheading */}
          <p 
            className={`text-base sm:text-lg md:text-xl text-gray-100 mb-6 md:mb-8 leading-relaxed transition-all duration-1000 delay-200 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Little Eden School is committed to providing world-class education that develops the whole child—academically, socially, and emotionally. Join our community of learners and leaders.
          </p>

          {/* Animated CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Button
              size="lg"
              className="bg-[#F4B400] hover:bg-[#E0A200] text-[#0056D2] font-bold text-sm sm:text-base py-2 sm:py-3 h-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-bold text-sm sm:text-base py-2 sm:py-3 h-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Button>
          </div>

          {/* Animated Scroll Indicator */}
          <div className="mt-12 md:mt-16 hidden sm:block">
            <div className="animate-bounce">
              <ChevronDown className="text-white drop-shadow-lg" size={32} />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#F4B400]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#2E8B57]/10 rounded-full blur-3xl"></div>
    </section>
  );
}
