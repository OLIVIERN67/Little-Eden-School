import { useT } from '@/i18n/useT';

export default function AboutSection() {
  const t = useT();

  const values = [
    { key: 'about.value.excellence', textKey: 'about.value.excellence.text' },
    { key: 'about.value.integrity', textKey: 'about.value.integrity.text' },
    { key: 'about.value.community', textKey: 'about.value.community.text' },
    { key: 'about.value.growth', textKey: 'about.value.growth.text' },
  ];

  return (
    <section id="about" className="py-10 md:py-14 lg:py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src="/Highlights/GRADU_3.jpg"
              alt={t('about.imageAlt')}
              className="rounded-lg shadow-lg w-full h-auto max-h-[400px] md:max-h-none object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0056D2] mb-3 md:mb-5">
              {t('about.title')}
            </h2>

            <div className="space-y-3 md:space-y-5">
              <div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">{t('about.mission')}</h3>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  {t('about.mission.text')}
                </p>
              </div>

              <div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">{t('about.vision')}</h3>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  {t('about.vision.text')}
                </p>
              </div>

              <div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">{t('about.values')}</h3>
                <ul className="space-y-1.5 text-xs md:text-sm text-gray-700">
                  {values.map((v, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#F4B400] font-bold mt-0.5">&#10003;</span>
                      <span><strong>{t(v.key)}:</strong> {t(v.textKey)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
