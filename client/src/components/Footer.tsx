import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0056D2] text-white py-10 md:py-12 lg:py-16">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* About */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Little Eden School</h3>
            <p className="text-blue-100 text-xs md:text-sm leading-relaxed">
              Excellence in Education. Nurturing minds, building futures, and creating responsible global citizens.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-1 md:space-y-2">
              <li><a href="#home" className="text-blue-100 hover:text-white transition-colors text-xs md:text-sm">Home</a></li>
              <li><a href="#about" className="text-blue-100 hover:text-white transition-colors text-xs md:text-sm">About Us</a></li>
              <li><a href="#academics" className="text-blue-100 hover:text-white transition-colors text-xs md:text-sm">Academics</a></li>
              <li><a href="#admissions" className="text-blue-100 hover:text-white transition-colors text-xs md:text-sm">Admissions</a></li>
              <li><a href="#contact" className="text-blue-100 hover:text-white transition-colors text-xs md:text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Contact</h4>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span className="text-blue-100 text-xs md:text-sm">Musanze, Rwanda</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span className="text-blue-100 text-xs md:text-sm">(+250) 788 305 797</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span className="text-blue-100 text-xs md:text-sm">info@littleeden.rw</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Follow Us</h4>
            <div className="flex gap-2 md:gap-4">
              <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors active:bg-white/40">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors active:bg-white/40">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors active:bg-white/40">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors active:bg-white/40">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400 my-6 md:my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-blue-100 text-xs md:text-sm gap-3 md:gap-0">
          <p>&copy; 2024 Little Eden School. All rights reserved.</p>
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
