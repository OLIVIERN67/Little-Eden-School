import { Card } from '@/components/ui/card';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

interface Event {
  date: string;
  month: string;
  title: string;
  description: string;
  location: string;
  type: 'event' | 'news';
  image: string;
}

export default function NewsEventsSection() {
  const events: Event[] = [
    {
      date: '15',
      month: 'Jun',
      title: 'Annual Sports Day',
      description: 'A fun-filled day of sports, games, and friendly competition. Students showcase their athletic talents and teamwork.',
      location: 'School Grounds',
      type: 'event',
      image: '/manus-storage/EDEN_5.jpg_04c80c41.jpeg',
    },
    {
      date: '20',
      month: 'Jul',
      title: 'Music & Arts Festival',
      description: 'Students showcase their talents in music, dance, and art. A celebration of creativity and self-expression.',
      location: 'School Auditorium',
      type: 'event',
      image: '/manus-storage/EDEN_7.jpg_1e2b216a.jpeg',
    },
    {
      date: '10',
      month: 'Aug',
      title: 'Parent-Teacher Conference',
      description: 'Meet with teachers to discuss your child\'s progress, achievements, and areas for growth.',
      location: 'School Classrooms',
      type: 'event',
      image: '/manus-storage/EDEN_1.jpg_cf768854.jpeg',
    },
    {
      date: '05',
      month: 'Sep',
      title: 'Science Fair',
      description: 'Young scientists present their exciting projects and experiments. A showcase of innovation and discovery.',
      location: 'School Grounds',
      type: 'event',
      image: '/manus-storage/EDEN_4.jpg_23b0194f.jpeg',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4B400]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2E8B57]/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0056D2] mb-3 md:mb-4">
            News & Events
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Stay updated with the latest happenings at Little Eden School.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              {/* Card Container */}
              <div className="relative h-full overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                {/* Image */}
                <div className="relative h-48 md:h-56 overflow-hidden bg-gray-300">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-br from-[#F4B400] to-[#E0A200] rounded-lg p-3 shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#0056D2]">{event.date}</div>
                      <div className="text-xs font-semibold text-[#0056D2]">{event.month}</div>
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 bg-white">
                  {/* Type Badge */}
                  <div className="inline-block mb-3 px-3 py-1 bg-[#0056D2]/10 text-[#0056D2] rounded-full text-xs font-semibold uppercase">
                    {event.type}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0056D2] transition-colors">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-gray-700 mb-4">
                    <MapPin size={16} className="text-[#0056D2]" />
                    <span>{event.location}</span>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-[#0056D2] font-semibold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <button className="inline-block px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-[#0056D2] to-[#0040A0] text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            View All Events & News
          </button>
        </div>
      </div>
    </section>
  );
}
