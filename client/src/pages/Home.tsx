import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import AcademicsSection from '@/components/AcademicsSection';
import StatisticsSection from '@/components/StatisticsSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import GallerySection from '@/components/GallerySection';
import StaffDirectorySection from '@/components/StaffDirectorySection';
import NewsEventsSection from '@/components/NewsEventsSection';
import AdmissionsProcessSection from '@/components/AdmissionsProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyChooseUsSection />
        <AcademicsSection />
        <StatisticsSection />
        <FacilitiesSection />
        <GallerySection />
        <StaffDirectorySection />
        <NewsEventsSection />
        <AdmissionsProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
