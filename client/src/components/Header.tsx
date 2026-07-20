import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';
import { useT } from '@/i18n/useT';
import { useLanguage } from '@/i18n/LanguageContext';
import { LANGUAGES } from '@/i18n/languages';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const t = useT();
  const { language, setLanguage } = useLanguage();

  const navItems = [
    { label: t('header.nav.home'), href: '#home' },
    { label: t('header.nav.about'), href: '#about' },
    { label: t('header.nav.academics'), href: '#academics' },
    { label: t('header.nav.admissions'), href: '#admissions' },
    { label: t('header.nav.studentLife'), href: '#student' },
    { label: t('header.nav.facilities'), href: '#facilities' },
    { label: t('header.nav.gallery'), href: '#gallery' },
    { label: t('header.nav.news'), href: '#news' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node) && 
          !menuButtonRef.current?.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavItemClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full bg-white dark:bg-[#0f0f0f] transition-all duration-300 ${
        isScrolled ? 'shadow-lg border-b border-gray-200 dark:border-[#2a2a2a]' : 'border-b border-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-2 md:gap-3 group focus:outline-none focus:ring-2 focus:ring-[#0056D2] focus:ring-offset-2 rounded-lg"
            onClick={() => handleNavItemClick('#home')}
          >
            <img
              src="/logo.jpeg"
              alt={t('header.logo.alt')}
              className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 object-contain group-hover:scale-105 transition-transform duration-200"
            />
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#0056D2] leading-tight">
              {t('header.logoName')}
            </h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-0.5" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-2 py-2 text-xs lg:text-sm font-medium text-gray-700 dark:text-gray-200 
                         hover:text-[#0056D2] dark:hover:text-[#4d9eff] 
                         transition-colors duration-200 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-[#0056D2] focus:ring-offset-2
                         after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
                         after:w-0 after:h-0.5 after:bg-[#0056D2] after:transition-all after:duration-200
                         hover:after:w-full"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavItemClick(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden xl:flex items-center gap-2">
            <ThemeToggle />

            {/* Language Switch */}
            <div className="relative">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as any)}
                className="appearance-none bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 
                         rounded-lg px-2 py-1.5 pr-6 text-xs font-medium text-gray-700 dark:text-gray-200
                         hover:border-[#0056D2] dark:hover:border-[#4d9eff] focus:outline-none 
                         focus:ring-2 focus:ring-[#0056D2] focus:ring-offset-2 focus:border-transparent
                         transition-all duration-200 cursor-pointer"
                aria-label={t('header.mobile.selectLanguage')}
              >
                {LANGUAGES.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Contact Button */}
            <Button
              variant="outline"
              className="border-[#0056D2] text-[#0056D2] dark:border-[#4d9eff] dark:text-[#4d9eff] 
                       hover:bg-[#0056D2] hover:text-white dark:hover:bg-[#4d9eff] dark:hover:text-[#0f0f0f]
                       font-semibold text-xs lg:text-sm px-3 lg:px-4 py-1.5 h-8 lg:h-9 transition-all duration-200
                       focus:outline-none focus:ring-2 focus:ring-[#0056D2] focus:ring-offset-2"
              onClick={() => handleNavItemClick('#contact')}
            >
              {t('header.cta.contact')}
            </Button>

            {/* Apply Now Button */}
            <Button
              className="bg-[#0056D2] hover:bg-[#0040A0] text-white font-semibold text-xs lg:text-sm px-4 lg:px-5 py-1.5 h-8 lg:h-9 
                       shadow-md hover:shadow-lg transition-all duration-200
                       focus:outline-none focus:ring-2 focus:ring-[#0056D2] focus:ring-offset-2
                       focus:ring-offset-white dark:focus:ring-offset-[#0f0f0f]"
              onClick={() => handleNavItemClick('#admissions')}
            >
              {t('header.cta.apply')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            className="xl:hidden relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 
                     active:bg-gray-200 dark:active:bg-gray-700 transition-all duration-200
                     focus:outline-none focus:ring-2 focus:ring-[#0056D2] focus:ring-offset-2
                     touch-manipulation"
            onClick={handleMenuToggle}
            aria-label={isMenuOpen ? t('header.mobile.closeMenu') : t('header.mobile.openMenu')}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X size={22} className="text-[#0056D2] dark:text-[#4d9eff]" />
            ) : (
              <Menu size={22} className="text-[#0056D2] dark:text-[#4d9eff]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[calc(100vh-56px)] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <nav 
          className="bg-white dark:bg-[#0f0f0f] border-t border-gray-200 dark:border-[#2a2a2a] shadow-lg"
          aria-label="Mobile navigation"
        >
          <div className="container py-3">
            {/* Navigation Links */}
            <div className="flex flex-col gap-0.5 mb-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 
                           hover:text-[#0056D2] dark:hover:text-[#4d9eff] 
                           hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg
                           transition-all duration-200 focus:outline-none focus:ring-2 
                           focus:ring-[#0056D2] focus:ring-offset-2 active:bg-blue-50 
                           dark:active:bg-gray-700"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavItemClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Controls */}
            <div className="space-y-3 pt-3 border-t border-gray-200 dark:border-[#2a2a2a]">
              {/* Theme Toggle & Language */}
              <div className="flex items-center justify-between gap-3">
                <ThemeToggle />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as any)}
                  className="flex-1 appearance-none bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 
                           rounded-lg px-3 py-2 pr-8 text-xs font-medium text-gray-700 dark:text-gray-200
                           hover:border-[#0056D2] dark:hover:border-[#4d9eff] focus:outline-none 
                           focus:ring-2 focus:ring-[#0056D2] focus:ring-offset-2 focus:border-transparent
                           transition-all duration-200 cursor-pointer"
                  aria-label={t('header.mobile.selectLanguage')}
                >
                  {LANGUAGES.map((l) => (
                    <option key={l.code} value={l.code}>
                      {l.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* CTA Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant="outline"
                  className="border-[#0056D2] text-[#0056D2] dark:border-[#4d9eff] dark:text-[#4d9eff] 
                           hover:bg-[#0056D2] hover:text-white dark:hover:bg-[#4d9eff] dark:hover:text-[#0f0f0f]
                           font-semibold text-xs py-2 h-auto transition-all duration-200
                           focus:outline-none focus:ring-2 focus:ring-[#0056D2] focus:ring-offset-2"
                  onClick={() => handleNavItemClick('#contact')}
                >
                  {t('header.cta.contact')}
                </Button>
                <Button
                  className="bg-[#0056D2] hover:bg-[#0040A0] text-white font-semibold text-xs py-2 h-auto 
                           shadow-md hover:shadow-lg transition-all duration-200
                           focus:outline-none focus:ring-2 focus:ring-[#0056D2] focus:ring-offset-2"
                  onClick={() => handleNavItemClick('#admissions')}
                >
                  {t('header.cta.apply')}
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
