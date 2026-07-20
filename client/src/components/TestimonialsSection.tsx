import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { useT } from '@/i18n/useT';

export default function TestimonialsSection() {
  const t = useT();

  const testimonials = [
    {
      name: 'Sarah Mutesi',
      roleKey: 'testimonials.role.parent',
      textKey: 'testimonials.t0.text',
      rating: 5,
    },
    {
      name: 'Jean Habimana',
      roleKey: 'testimonials.role.parent',
      textKey: 'testimonials.t1.text',
      rating: 5,
    },
    {
      name: 'David Nkusi',
      roleKey: 'testimonials.role.student',
      textKey: 'testimonials.t2.text',
      rating: 5,
    },
    {
      name: 'Grace Nyiraneza',
      roleKey: 'testimonials.role.parent',
      textKey: 'testimonials.t3.text',
      rating: 5,
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0056D2] mb-3 md:mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-5 md:p-6 hover:shadow-lg transition-shadow">
              {/* Stars */}
              <div className="flex gap-0.5 mb-2 md:mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-[#F4B400] text-[#F4B400]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xs md:text-sm text-gray-700 mb-3 md:mb-4 leading-relaxed italic">
                "{t(testimonial.textKey)}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-2 md:pt-3">
                <p className="font-semibold text-gray-900 text-xs md:text-sm">{testimonial.name}</p>
                <p className="text-xs text-gray-600">{t(testimonial.roleKey)}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-14 bg-[#0056D2] rounded-lg p-5 md:p-8 lg:p-12 text-white text-center">
          <h3 className="text-lg md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3">
            {t('testimonials.cta.title')}
          </h3>
          <p className="text-xs md:text-sm lg:text-base text-blue-100 mb-4 md:mb-6">
            {t('testimonials.cta.text')}
          </p>
          <button
            className="bg-[#F4B400] hover:bg-[#E0A200] text-[#0056D2] px-5 md:px-8 py-2 md:py-3 rounded-lg font-bold transition-colors text-xs md:text-sm lg:text-base"
            onClick={() => {
              const el = document.querySelector('#admissions');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('testimonials.cta.button')}
          </button>
        </div>
      </div>
    </section>
  );
}
