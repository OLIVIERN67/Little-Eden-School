import { galleryPaths } from '@/lib/gallery';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src={galleryPaths.about}
              alt="Little Eden School Classroom"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0056D2] mb-4 md:mb-6">
              {t('about.title')}
            </h2>

            <p className="text-sm md:text-base text-[#2E8B57] font-semibold mb-4 md:mb-6">{t('about.subtitle')}</p>

            <div className="space-y-4 md:space-y-6">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{t('about.mission')}</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {t('about.missionText')}
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{t('about.vision')}</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {t('about.visionText')}
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{t('about.values')}</h3>
                <ul className="space-y-2 text-sm md:text-base text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#F4B400] font-bold mt-1">✓</span>
                    <span><strong>{t('about.excellence')}:</strong> {t('about.excellenceText')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#F4B400] font-bold mt-1">✓</span>
                    <span><strong>{t('about.integrity')}:</strong> {t('about.integrityText')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#F4B400] font-bold mt-1">✓</span>
                    <span><strong>{t('about.community')}:</strong> {t('about.communityText')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#F4B400] font-bold mt-1">✓</span>
                    <span><strong>{t('about.growth')}:</strong> {t('about.growthText')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
