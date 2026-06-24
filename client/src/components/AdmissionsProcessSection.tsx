import { Card } from '@/components/ui/card';
import { CheckCircle, FileText, Users, Award, Calendar } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

export default function AdmissionsProcessSection() {
  const steps: Step[] = [
    {
      number: 1,
      title: 'Application',
      description: 'Submit your application form with required documents',
      icon: <FileText size={32} />,
      details: ['Birth Certificate', 'Previous School Records', 'Health Certificate', 'Parent Information'],
    },
    {
      number: 2,
      title: 'Assessment',
      description: 'Your child participates in age-appropriate assessment',
      icon: <Users size={32} />,
      details: ['Academic Assessment', 'Behavioral Observation', 'Interview with Teachers', 'Aptitude Testing'],
    },
    {
      number: 3,
      title: 'Interview',
      description: 'Meet with our admissions team and school leadership',
      icon: <Users size={32} />,
      details: ['Parent Interview', 'Campus Tour', 'Discussion of Child\'s Needs', 'Q&A Session'],
    },
    {
      number: 4,
      title: 'Admission',
      description: 'Receive admission decision and complete enrollment',
      icon: <CheckCircle size={32} />,
      details: ['Admission Letter', 'Fee Structure', 'Enrollment Forms', 'Orientation Schedule'],
    },
  ];

  const feeStructure = [
    { level: 'Nursery (Ages 3-5)', annualFee: 'RWF 2,500,000', monthlyFee: 'RWF 250,000' },
    { level: 'Primary (Grades 1-6)', annualFee: 'RWF 3,500,000', monthlyFee: 'RWF 350,000' },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#F4B400]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#2E8B57]/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0056D2] mb-3 md:mb-4">
            Admissions Process
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Join our growing family through a simple and transparent admission process.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-1 bg-gradient-to-r from-[#0056D2] to-transparent"></div>
                )}

                {/* Step Card */}
                <div className="relative group">
                  {/* Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105"></div>

                  {/* Content */}
                  <div className="relative p-6 md:p-8">
                    {/* Step Number */}
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#0056D2] to-[#0040A0] text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl mb-4 shadow-lg">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="text-[#F4B400] mb-4">
                      {step.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base text-gray-600 mb-4">
                      {step.description}
                    </p>

                    {/* Details */}
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 bg-[#F4B400] rounded-full mt-1.5 flex-shrink-0"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fee Structure */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-[#0056D2] mb-6 md:mb-8 text-center">
            Fee Structure
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {feeStructure.map((item, index) => (
              <Card key={index} className="p-6 md:p-8 hover:shadow-lg transition-shadow">
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4">{item.level}</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700 font-semibold">Annual Fee:</span>
                    <span className="text-[#0056D2] font-bold text-lg">{item.annualFee}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Monthly Fee:</span>
                    <span className="text-[#2E8B57] font-bold text-lg">{item.monthlyFee}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-6 md:mt-8 p-4 md:p-6 bg-blue-50 border-l-4 border-[#0056D2] rounded-lg">
            <p className="text-sm md:text-base text-gray-700">
              <strong>Note:</strong> Fees include tuition, materials, meals, and extracurricular activities. Scholarships and financial aid are available for deserving students. Contact our admissions office for more information.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#0056D2] via-[#0040A0] to-[#2E8B57] rounded-xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            Ready to Apply?
          </h3>
          <p className="text-sm md:text-base text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto">
            Start your child's journey to excellence. Submit your application today and join our community of learners.
          </p>
          <button className="inline-block px-8 md:px-10 py-3 md:py-4 bg-[#F4B400] hover:bg-[#E0A200] text-[#0056D2] rounded-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Start Application
          </button>
        </div>
      </div>
    </section>
  );
}
