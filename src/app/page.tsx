import Header from '@/components/common/Header';
import ContactSection from '@/components/sections/home/ContactSection';
import FooterSection from '@/components/sections/home/FooterSection';
import HeroSection from '@/components/sections/home/HeroSection';
import InvestmentSection from '@/components/sections/home/InvestmentSection';
import PropertyAdvisorySection from '@/components/sections/home/PropertyAdvisorySection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-secondary-light">
      <Header />
      <HeroSection />
      <InvestmentSection />
      <PropertyAdvisorySection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
