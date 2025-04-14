
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Services from '@/components/Services';
import Process from '@/components/Process';
import AppDownload from '@/components/AppDownload';
import Testimonials from '@/components/Testimonials';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Process />
      <AppDownload />
      <Testimonials />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
