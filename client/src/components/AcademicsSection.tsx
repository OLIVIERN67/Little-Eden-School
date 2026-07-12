import { Card } from '@/components/ui/card';
import { BookOpen, Users, Lightbulb } from 'lucide-react';

export default function AcademicsSection() {
  const programs = [
    {
      level: 'Nursery',
      icon: Users,
      description: 'Foundation years focusing on play-based learning, social development, and early literacy skills.',
      highlights: ['Ages 3-5', 'Holistic Development', 'Creative Play'],
    },
    {
      level: 'Primary',
      icon: BookOpen,
      description: 'Comprehensive curriculum building strong academic foundations in core subjects and life skills.',
      highlights: ['Grades 1-6', 'STEM Focus', 'Character Education'],
    },
    // {
    //   level: 'Secondary',
    //   icon: Lightbulb,
    //   description: 'Advanced academics preparing students for university with critical thinking and leadership development.',
    //   highlights: ['Grades 7-12', 'Advanced Subjects', 'University Prep'],
    // },
  ];

  return (
    <section id="academics" className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0056D2] mb-3 md:mb-4">
            Academic Programs
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Our competence-based curriculum nurtures problem-solvers and critical thinkers at every level.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="bg-gradient-to-r from-[#0056D2] to-[#0040A0] p-6 md:p-8 text-white">
                  <Icon size={40} className="mb-3 md:mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold">{program.level}</h3>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  <div className="space-y-2">
                    {program.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#F4B400] rounded-full flex-shrink-0"></span>
                        <span className="text-gray-600 text-xs md:text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Curriculum Highlights */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 md:p-8 lg:p-12">
          <h3 className="text-xl md:text-2xl font-bold text-[#0056D2] mb-4 md:mb-6">Our Curriculum Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">National Curriculum</h4>
              <p className="text-sm md:text-base text-gray-700">Aligned with Rwanda's national standards, ensuring quality and consistency across all subjects.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">International Curriculum</h4>
              <p className="text-sm md:text-base text-gray-700">Global perspectives and international standards preparing students for worldwide opportunities.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">STEM Integration</h4>
              <p className="text-sm md:text-base text-gray-700">Science, Technology, Engineering, and Mathematics woven throughout all subjects for practical application.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Co-curricular Activities</h4>
              <p className="text-sm md:text-base text-gray-700">Sports, arts, music, debate, and clubs enriching the educational experience beyond the classroom.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
