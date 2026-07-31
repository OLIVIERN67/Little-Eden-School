import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock, Users } from 'lucide-react';
import { useT } from '@/i18n/useT';
import { staffMembers } from '@/data/staff';

export default function ContactSection() {
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

  const t = useT();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: '', email: '', phone: '', message: '' });
    alert(t('contact.form.thanks'));
  };

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0056D2] mb-3 md:mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact Info Cards - responsive 1col on mobile, 3col on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          <Card className="p-5 md:p-6 text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-3">
              <div className="bg-blue-50 p-3 rounded-full">
                <MapPin className="text-[#0056D2]" size={24} />
              </div>
            </div>
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">{t('contact.card.location.title')}</h3>
            <p className="text-xs md:text-sm text-gray-600">{t('footer.contact.location')}</p>
          </Card>

          <Card className="p-5 md:p-6 text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-3">
              <div className="bg-blue-50 p-3 rounded-full">
                <Phone className="text-[#0056D2]" size={24} />
              </div>
            </div>
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">{t('contact.card.phone.title')}</h3>
            <p className="text-xs md:text-sm text-gray-600">{t('footer.contact.phone')}</p>
            <p className="text-xs md:text-sm text-gray-600">{t('contact.card.phone.alt')}</p>
          </Card>

          <Card className="p-5 md:p-6 text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-3">
              <div className="bg-blue-50 p-3 rounded-full">
                <Mail className="text-[#0056D2]" size={24} />
              </div>
            </div>
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">{t('contact.card.email.title')}</h3>
            <p className="text-xs md:text-sm text-gray-600">{t('footer.contact.email')}</p>
          </Card>
        </div>

        {/* Staff Section */}
        <div className="mb-8 md:mb-12">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-3">
              <div className="bg-blue-50 p-3 rounded-full">
                <Users className="text-[#0056D2]" size={28} />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{t('contact.staff.title')}</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {staffMembers.map((member) => (
              <Card key={member.role} className="p-5 md:p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-4 bg-gray-100 rounded-lg overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={`${member.role}: ${member.name}`} className="w-full h-full object-cover object-top" />
                  ) : (
                    /* Placeholder when no image is set */
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  )}
                </div>
                <h4 className="text-base md:text-lg font-bold text-gray-900 mb-1">{member.role}: {member.name}</h4>
                <a href={`tel:${member.phone}`} className="text-[#0056D2] hover:underline text-sm">
                  {member.phone}
                </a>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form and Hours - stacked on mobile, side-by-side on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Form */}
          <Card className="p-5 md:p-6">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">{t('contact.form.title')}</h3>
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">{t('contact.form.label.name')}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
                  placeholder={t('contact.form.placeholder.name')}
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">{t('contact.form.label.email')}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
                  placeholder={t('contact.form.placeholder.email')}
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">{t('contact.form.label.phone')}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
                  placeholder={t('contact.form.placeholder.phone')}
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">{t('contact.form.label.message')}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0056D2] resize-none"
                  placeholder={t('contact.form.placeholder.message')}
                ></textarea>
              </div>

              <Button className="w-full bg-[#0056D2] hover:bg-[#0040A0] text-white font-bold text-sm py-2 h-auto">
                {t('contact.form.submit')}
              </Button>
            </form>
          </Card>

          {/* Office Hours */}
          <Card className="p-5 md:p-6 h-full">
            <div className="flex items-start gap-3 md:gap-4 mb-5 md:mb-6">
              <div className="bg-blue-50 p-3 rounded-full flex-shrink-0">
                <Clock className="text-[#0056D2]" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{t('contact.hours.title')}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs md:text-sm">
                    <span className="font-semibold text-gray-900">{t('contact.hours.mondayToFriday')}</span>
                    <span className="text-gray-600">{t('contact.hours.mondayToFridayHours')}</span>
                  </div>
                  <div className="flex justify-between text-xs md:text-sm">
                    <span className="font-semibold text-gray-900">{t('contact.hours.saturday')}</span>
                    <span className="text-gray-600">{t('contact.hours.saturdayHours')}</span>
                  </div>
                  <div className="flex justify-between text-xs md:text-sm">
                    <span className="font-semibold text-gray-900">{t('contact.hours.sunday')}</span>
                    <span className="text-gray-600">{t('contact.hours.sundayHours')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mt-4">
              <h4 className="font-bold text-gray-900 mb-2 text-xs md:text-sm">{t('contact.quicklinks.title')}</h4>
              <ul className="space-y-1">
                <li><a href="#admissions" className="text-[#0056D2] hover:underline text-xs md:text-sm">{t('contact.quicklinks.admissions')}</a></li>
                <li><a href="#academics" className="text-[#0056D2] hover:underline text-xs md:text-sm">{t('contact.quicklinks.academics')}</a></li>
                <li><a href="#facilities" className="text-[#0056D2] hover:underline text-xs md:text-sm">{t('contact.quicklinks.facilities')}</a></li>
                <li><a href="#" className="text-[#0056D2] hover:underline text-xs md:text-sm">{t('contact.quicklinks.downloads')}</a></li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
