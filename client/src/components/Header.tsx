import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { galleryPaths } from '@/lib/gallery';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.academics'), href: '#academics' },
    { label: t('nav.admissions'), href: '#admissions' },
    { label: t('nav.studentLife'), href: '#student-life' },
    { label: t('nav.facilities'), href: '#facilities' },
    { label: t('nav.gallery'), href: '#gallery' },
    { label: t('nav.news'), href: '#news' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 shadow-md border-b border-gray-200 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="container flex items-center justify-between gap-3 py-3 md:h-20 md:py-0">
        {/* Logo */}
        <div className="flex min-w-0 items-center gap-2 md:gap-3">
          <img
            src={galleryPaths.header}
            alt="Little Eden School Logo"
            className="h-12 w-12 md:h-14 md:w-14 rounded-full object-contain bg-white p-1 ring-2 ring-[#0056D2]/10"
          />
          <div className="hidden sm:block">
            <h1 className="text-lg md:text-xl font-bold text-[#0056D2] leading-tight">Little Eden</h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-[#0056D2] transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden xl:flex items-center gap-3">
          <label className="relative">
            <span className="sr-only">Select language</span>
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value as 'en' | 'fr' | 'rw')}
              className="h-10 rounded-full border border-gray-200 bg-white pl-4 pr-10 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:border-[#0056D2] focus:border-[#0056D2] focus:outline-none focus:ring-2 focus:ring-[#0056D2]/20"
              aria-label="Select language"
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="rw">Kinyarwanda</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          </label>
          <Button className="bg-[#0056D2] hover:bg-[#0040A0] text-white text-sm px-3 md:px-4">
            {t('nav.applyNow')}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 xl:hidden">
          <label className="relative hidden sm:block">
            <span className="sr-only">Select language</span>
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value as 'en' | 'fr' | 'rw')}
              className="h-10 rounded-full border border-gray-200 bg-white pl-4 pr-10 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:border-[#0056D2] focus:border-[#0056D2] focus:outline-none focus:ring-2 focus:ring-[#0056D2]/20"
              aria-label="Select language"
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="rw">RW</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          </label>
          <button
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors active:bg-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} className="text-[#0056D2]" /> : <Menu size={24} className="text-[#0056D2]" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="xl:hidden bg-white border-t border-gray-200 py-4 max-h-[calc(100vh-64px)] overflow-y-auto">
          <div className="container flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#0056D2] hover:bg-gray-50 rounded-lg transition-colors active:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-2 pt-3 border-t border-gray-200 mt-2">
              <Button className="flex-1 bg-[#0056D2] text-white text-sm py-2 h-auto">
                {t('nav.applyNow')}
              </Button>
            </div>
            <div className="sm:hidden pt-3">
              <label className="relative block">
                <span className="sr-only">Select language</span>
                <select
                  value={language}
                  onChange={(event) => setLanguage(event.target.value as 'en' | 'fr' | 'rw')}
                  className="h-11 w-full rounded-lg border border-gray-200 bg-white px-4 pr-10 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:border-[#0056D2] focus:border-[#0056D2] focus:outline-none focus:ring-2 focus:ring-[#0056D2]/20"
                  aria-label="Select language"
                >
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  <option value="rw">Kinyarwanda</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              </label>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
