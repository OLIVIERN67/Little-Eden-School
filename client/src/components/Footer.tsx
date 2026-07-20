import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useT } from '@/i18n/useT';

export default function Footer() {
  const t = useT();

  return (
    <footer className="bg-[#0056D2] text-white py-8 md:py-12 lg:py-16">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">{t('footer.about.title')}</h3>
            <p className="text-blue-100 text-xs md:text-sm leading-relaxed">
              {t('footer.about.text')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">{t('footer.quickLinks.title')}</h4>
            <ul className="space-y-1 md:space-y-2">
              <li><a href="#home" className="text-blue-100 hover:text-white transition-colors text-xs md:text-sm">{t('footer.quickLinks.home')}</a></li>
              <li><a href="#about" className="text-blue-100 hover:text-white transition-colors text-xs md:text-sm">{t('footer.quickLinks.about')}</a></li>
              <li><a href="#academics" className="text-blue-100 hover:text-white transition-colors text-xs md:text-sm">{t('footer.quickLinks.academics')}</a></li>
              <li><a href="#admissions" className="text-blue-100 hover:text-white transition-colors text-xs md:text-sm">{t('footer.quickLinks.admissions')}</a></li>
              <li><a href="#contact" className="text-blue-100 hover:text-white transition-colors text-xs md:text-sm">{t('footer.quickLinks.contact')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">{t('footer.contact.title')}</h4>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span className="text-blue-100 text-xs md:text-sm">{t('footer.contact.location')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span className="text-blue-100 text-xs md:text-sm">{t('footer.contact.phone')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} />
                <span className="text-blue-100 text-xs md:text-sm">{t('footer.contact.email')}</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">{t('footer.social.title')}</h4>
            <div className="flex gap-2 md:gap-3">
              <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400 my-5 md:my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-blue-100 text-xs md:text-sm gap-2 sm:gap-0">
          <p>{t('footer.bottom.copy')}</p>
          <div className="flex gap-3 md:gap-6">
            <a href="#" className="hover:text-white transition-colors">{t('footer.bottom.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.bottom.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
