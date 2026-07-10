import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Academics', href: '#academics' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Student Life', href: '#student-life' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'News & Events', href: '#news' },
   
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md border-b border-gray-200">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-3">
          <img
            src="logo.jpeg"
            alt="Little Eden School Logo"
            className="h-10 w-10 md:h-12 md:w-12"
          />
          <div className="hidden sm:block">
            <h1 className="text-lg md:text-xl font-bold text-[#0056D2]">Little Eden</h1>
            {/* <p className="text-xs text-gray-600">Excellence in Education</p> */}
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
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
        <div className="hidden lg:flex items-center gap-2 xl:gap-3">
          <Button
            variant="outline"
            className="border-[#0056D2] text-[#0056D2] hover:bg-[#0056D2] hover:text-white text-sm px-3 md:px-4"
          >
            Contact Us
          </Button>
          <Button className="bg-[#0056D2] hover:bg-[#0040A0] text-white text-sm px-3 md:px-4">
            Apply Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors active:bg-gray-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} className="text-[#0056D2]" /> : <Menu size={24} className="text-[#0056D2]" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-200 py-4 max-h-[calc(100vh-64px)] overflow-y-auto">
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
              <Button
                variant="outline"
                className="flex-1 border-[#0056D2] text-[#0056D2] text-sm py-2 h-auto"
              >
                Contact
              </Button>
              <Button className="flex-1 bg-[#0056D2] text-white text-sm py-2 h-auto">
                Apply
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
