import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import AcademicsSection from '@/components/AcademicsSection';
import AdmissionsSection from '@/components/AdmissionsSection';
import StudentLifeSection from '@/components/StudentLifeSection';
import StatisticsSection from '@/components/StatisticsSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import GallerySection from '@/components/GallerySection';
import NewsSection from '@/components/NewsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0f0f0f]">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyChooseUsSection />
        <AcademicsSection />
        <AdmissionsSection />
        <StudentLifeSection />
        <StatisticsSection />
        <FacilitiesSection />
        <GallerySection />
        <NewsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
