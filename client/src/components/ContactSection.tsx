import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
    alert(t('contact.thanks'));
  };

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0056D2] mb-3 md:mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Contact Info Cards */}
          <Card className="p-6 md:p-8 text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-3 md:mb-4">
              <div className="bg-blue-50 p-3 md:p-4 rounded-full">
                <MapPin className="text-[#0056D2]" size={28} />
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{t('contact.address')}</h3>
            <p className="text-sm md:text-base text-gray-600">{t('footer.location')}</p>
          </Card>

          <Card className="p-6 md:p-8 text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-3 md:mb-4">
              <div className="bg-blue-50 p-3 md:p-4 rounded-full">
                <Phone className="text-[#0056D2]" size={28} />
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{t('contact.phone')}</h3>
            <p className="text-sm md:text-base text-gray-600">(+250) 788 305 797</p>
            <p className="text-sm md:text-base text-gray-600">(+250) 788 585 291</p>
          </Card>

          <Card className="p-6 md:p-8 text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-3 md:mb-4">
              <div className="bg-blue-50 p-3 md:p-4 rounded-full">
                <Mail className="text-[#0056D2]" size={28} />
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{t('contact.email')}</h3>
            <p className="text-sm md:text-base text-gray-600">info@littleeden.rw</p>
          </Card>
        </div>

        {/* Contact Form and Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Form */}
          <Card className="p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">{t('contact.sendMessage')}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.fullName')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
                  placeholder={t('contact.namePlaceholder')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.emailAddress')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
                  placeholder={t('contact.emailPlaceholder')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.phoneNumber')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
                  placeholder={t('contact.phonePlaceholder')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056D2] resize-none"
                  placeholder={t('contact.messagePlaceholder')}
                ></textarea>
              </div>

              <Button className="w-full bg-[#0056D2] hover:bg-[#0040A0] text-white font-bold">
                {t('contact.send')}
              </Button>
            </form>
          </Card>

          {/* Office Hours */}
          <div>
            <Card className="p-6 md:p-8 h-full flex flex-col justify-center">
              <div className="flex items-start gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="bg-blue-50 p-3 md:p-4 rounded-full flex-shrink-0">
                  <Clock className="text-[#0056D2]" size={28} />
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{t('contact.hours')}</h3>
                  <div className="space-y-2 md:space-y-3">
                    <div>
                      <p className="font-semibold text-gray-900 text-sm md:text-base">{t('contact.monday')}</p>
                      <p className="text-gray-600 text-xs md:text-sm">7:00 AM - 5:00 PM</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm md:text-base">{t('contact.saturday')}</p>
                      <p className="text-gray-600 text-xs md:text-sm">9:00 AM - 1:00 PM</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm md:text-base">{t('contact.sunday')}</p>
                      <p className="text-gray-600 text-xs md:text-sm">Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 md:pt-8 mt-6 md:mt-8">
                <h4 className="font-bold text-gray-900 mb-2 md:mb-3 text-sm md:text-base">{t('footer.quickLinks')}</h4>
                <ul className="space-y-1 md:space-y-2">
                  <li><a href="#admissions" className="text-[#0056D2] hover:underline text-xs md:text-sm">{t('footer.admissions')}</a></li>
                  <li><a href="#academics" className="text-[#0056D2] hover:underline text-xs md:text-sm">{t('footer.academics')}</a></li>
                  <li><a href="#facilities" className="text-[#0056D2] hover:underline text-xs md:text-sm">{t('footer.programs')}</a></li>
                  <li><a href="#" className="text-[#0056D2] hover:underline text-xs md:text-sm">{t('contact.downloads')}</a></li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
