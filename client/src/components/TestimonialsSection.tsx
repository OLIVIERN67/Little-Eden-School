import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Mutesi',
      role: 'Parent',
      text: 'Little Eden School has transformed my child\'s confidence and academic performance. The teachers are genuinely invested in each student\'s success.',
      rating: 5,
    },
    {
      name: 'Jean Habimana',
      role: 'Parent',
      text: 'The holistic approach to education here is exceptional. My daughter has grown not just academically but also in character and leadership.',
      rating: 5,
    },
    {
      name: 'David Nkusi',
      role: 'Student',
      text: 'I love coming to school here. The teachers make learning fun, and I have made great friends. The facilities are amazing!',
      rating: 5,
    },
    {
      name: 'Grace Nyiraneza',
      role: 'Parent',
      text: 'The communication between school and parents is excellent. I always know what\'s happening and how my child is progressing.',
      rating: 5,
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0056D2] mb-3 md:mb-4">
            What Parents & Students Say
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Hear from our community about their experiences at Little Eden School.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 md:p-8 hover:shadow-lg transition-shadow">
              {/* Stars */}
              <div className="flex gap-1 mb-3 md:mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-[#F4B400] text-[#F4B400]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-3 md:pt-4">
                <p className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.name}</p>
                <p className="text-xs md:text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 bg-[#0056D2] rounded-lg p-6 md:p-8 lg:p-12 text-white text-center">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
            Ready to Join Our Community?
          </h3>
          <p className="text-sm md:text-base lg:text-lg text-blue-100 mb-4 md:mb-6">
            Give your child the gift of excellent education and holistic development.
          </p>
          <button className="bg-[#F4B400] hover:bg-[#E0A200] text-[#0056D2] px-6 md:px-8 py-2 md:py-3 rounded-lg font-bold transition-colors text-sm md:text-base">
            Start the Admission Process
          </button>
        </div>
      </div>
    </section>
  );
}
