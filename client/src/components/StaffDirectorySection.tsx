import { Card } from '@/components/ui/card';
import { Mail, Phone, Award } from 'lucide-react';
import { galleryPaths } from '@/lib/gallery';
import { useLanguage } from '@/contexts/LanguageContext';

interface StaffMember {
  name: string;
  position: string;
  qualification: string;
  bio: string;
  email: string;
  phone: string;
  image: string;
}

export default function StaffDirectorySection() {
  const { t } = useLanguage();

  const staffMembers: StaffMember[] = [
    {
      name: 'Dr. Emmanuel Rwigema',
      position: 'Principal',
      qualification: 'Ph.D. in Education',
      bio: 'Visionary leader with 20+ years in educational excellence and institutional development.',
      email: 'e.rwigema@littleeden.rw',
      phone: '+250 788 123 456',
      image: galleryPaths.staff[0],
    },
    {
      name: 'Mrs. Aimee Mukamusoni',
      position: 'Head of Academics',
      qualification: 'M.Ed. Curriculum Design',
      bio: 'Dedicated educator specializing in curriculum development and student achievement.',
      email: 'a.mukamusoni@littleeden.rw',
      phone: '+250 788 234 567',
      image: galleryPaths.staff[1],
    },
    {
      name: 'Mr. Patrick Niyigena',
      position: 'Head of Primary',
      qualification: 'B.Ed. Primary Education',
      bio: 'Passionate about fostering critical thinking and creativity in young learners.',
      email: 'p.niyigena@littleeden.rw',
      phone: '+250 788 345 678',
      image: galleryPaths.staff[2],
    },
    {
      name: 'Ms. Claudette Habimana',
      position: 'Head of Nursery',
      qualification: 'B.Ed. Early Childhood',
      bio: 'Expert in child development and creating nurturing learning environments.',
      email: 'c.habimana@littleeden.rw',
      phone: '+250 788 456 789',
      image: galleryPaths.staff[3],
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4B400]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2E8B57]/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0056D2] mb-3 md:mb-4">
            {t('staff.title')}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            {t('staff.subtitle')}
          </p>
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {staffMembers.map((member, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              {/* Card Container */}
              <div className="relative h-full">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"></div>

                {/* Content */}
                <div className="relative p-6 md:p-6 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="mb-4 overflow-hidden rounded-lg h-40 md:h-48 bg-gray-200">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Position Badge */}
                  <div className="inline-block mb-2 px-3 py-1 bg-gradient-to-r from-[#0056D2] to-[#0040A0] text-white rounded-full text-xs font-semibold w-fit">
                    {member.position}
                  </div>

                  {/* Name */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>

                  {/* Qualification */}
                  <div className="flex items-center gap-2 mb-3 text-xs md:text-sm text-[#0056D2] font-semibold">
                    <Award size={16} />
                    {member.qualification}
                  </div>

                  {/* Bio */}
                  <p className="text-xs md:text-sm text-gray-600 mb-4 flex-grow leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Contact Info */}
                  <div className="border-t border-gray-200 pt-4 space-y-2">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-xs md:text-sm text-gray-700 hover:text-[#0056D2] transition-colors"
                    >
                      <Mail size={14} />
                      <span className="truncate">{member.email}</span>
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-2 text-xs md:text-sm text-gray-700 hover:text-[#0056D2] transition-colors"
                    >
                      <Phone size={14} />
                      <span>{member.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 md:p-8 border-l-4 border-[#0056D2]">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{t('staff.facultyTitle')}</h3>
          <p className="text-sm md:text-base text-gray-700">
            {t('staff.facultyText')}
          </p>
        </div>
      </div>
    </section>
  );
}
