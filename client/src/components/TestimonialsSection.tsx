import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  childAge?: string;
}

export default function TestimonialsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Mutesi',
      role: 'Parent',
      childAge: 'Parent of Amara (Age 7)',
      text: 'Little Eden School has transformed my child\'s confidence and academic performance. The teachers are genuinely invested in each student\'s success.',
      rating: 5,
    },
    {
      name: 'Jean Habimana',
      role: 'Parent',
      childAge: 'Parent of Ines (Age 5)',
      text: 'The holistic approach to education here is exceptional. My daughter has grown not just academically but also in character and leadership.',
      rating: 5,
    },
    {
      name: 'David Nkusi',
      role: 'Student',
      childAge: 'Grade 4 Student',
      text: 'I love coming to school here. The teachers make learning fun, and I have made great friends. The facilities are amazing!',
      rating: 5,
    },
    {
      name: 'Grace Nyiraneza',
      role: 'Parent',
      childAge: 'Parent of Kavi (Age 6)',
      text: 'The communication between school and parents is excellent. I always know what\'s happening and how my child is progressing.',
      rating: 5,
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#F4B400]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#2E8B57]/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0056D2] mb-3 md:mb-4">
            What Parents & Students Say
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Hear from our community about their experiences at Little Eden School.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group cursor-pointer"
            >
              {/* Card Container */}
              <div className="relative h-full">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-md group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-2"></div>

                {/* Content */}
                <div className="relative p-6 md:p-8 h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="text-[#F4B400] opacity-30" size={32} />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4 md:mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        className="fill-[#F4B400] text-[#F4B400] transition-transform group-hover:scale-110" 
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="text-sm md:text-base text-gray-700 mb-6 md:mb-8 leading-relaxed flex-grow">
                    "{testimonial.text}"
                  </p>

                  {/* Divider */}
                  <div className="border-t-2 border-gradient-to-r from-[#0056D2]/20 to-[#2E8B57]/20 pt-4 md:pt-6">
                    {/* Author Info */}
                    <p className="font-bold text-gray-900 text-sm md:text-base">{testimonial.name}</p>
                    <p className="text-xs md:text-sm text-[#0056D2] font-semibold mb-1">{testimonial.role}</p>
                    <p className="text-xs text-gray-600">{testimonial.childAge}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-2xl">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0056D2] via-[#0040A0] to-[#2E8B57]"></div>
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative p-8 md:p-12 lg:p-16 text-center text-white">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Ready to Join Our Community?
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto">
              Give your child the gift of excellent education and holistic development. Join 800+ families who trust Little Eden School.
            </p>
            <Button asChild className="inline-flex bg-[#F4B400] hover:bg-[#E0A200] text-[#0056D2] px-8 md:px-10 py-3 md:py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm md:text-base">
              <a href="#admissions">Start the Admission Process</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
