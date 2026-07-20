import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FileText, Calendar, DollarSign, CheckCircle } from 'lucide-react';
import { useT } from '@/i18n/useT';

export default function AdmissionsSection() {
  const t = useT();

  const steps = [
    { icon: FileText, key: 'admissions.step1.title', textKey: 'admissions.step1.text' },
    { icon: Calendar, key: 'admissions.step2.title', textKey: 'admissions.step2.text' },
    { icon: DollarSign, key: 'admissions.step3.title', textKey: 'admissions.step3.text' },
    { icon: CheckCircle, key: 'admissions.step4.title', textKey: 'admissions.step4.text' },
  ];

  return (
    <section id="admissions" className="py-12 md:py-16 lg:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0056D2] mb-3 md:mb-4">
            {t('admissions.title')}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            {t('admissions.subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="p-6 md:p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-50 p-4 rounded-full">
                    <Icon className="text-[#0056D2]" size={28} />
                  </div>
                </div>
                <div className="text-sm font-bold text-[#0056D2] mb-2">
                  {t('admissions.step').replace('{n}', `${index + 1}`)}
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{t(step.key)}</h3>
                <p className="text-xs md:text-sm text-gray-600">{t(step.textKey)}</p>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-[#0056D2] hover:bg-[#0040A0] text-white font-bold px-8 py-3"
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('admissions.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
}
