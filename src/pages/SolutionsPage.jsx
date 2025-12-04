import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import HeroSection from '../solutions/HeroSection';
import SolutionCategories from '../solutions/SolutionCategories';
import AISolutionsIntro from '../solutions/AISolutionsIntro';
import ServicesGrid from '../solutions/ServicesGrid';
import ProcessSteps from '../solutions/ProcessSteps';
import FeatureShowcase from '../solutions/FeatureShowcase';
import CallToAction from '../solutions/CallToAction';
import CloudSolutions from '../solutions/CloudSolutions';
import TrustIndicators from '../solutions/TrustIndicators';
import InsightsSection from '../solutions/InsightsSection';
import Testimonials from '../solutions/Testimonials';
import ClientLogos from '../solutions/ClientLogos';
import ContactForm from '../solutions/ContactForm';

const SolutionsPage = () => {

  const refAI = useRef(null);
  const refProduct = useRef(null);
  const refRPA = useRef(null);
  const refTransform = useRef(null);
  const refCloud = useRef(null);

  const scrollToSection = (index) => {
    const refs = [refAI, refProduct, refRPA, refTransform, refCloud];
    if (refs[index]?.current) {
      refs[index].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative items-center justify-center min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-50">
      <Navbar />

      <main className="w-full">
        {/* HERO */}
        <HeroSection />

        {/* CATEGORY TABS */}
        <SolutionCategories scrollToSection={scrollToSection} />

        {/* SECTIONS */}
        <div ref={refAI}>
          <AISolutionsIntro />
        </div>

        <div ref={refProduct}>
          <ServicesGrid />
        </div>

        <div ref={refRPA}>
          <ProcessSteps />
        </div>

        <div ref={refTransform}>
          <CallToAction />
        </div>

        <div ref={refCloud}>
          <CloudSolutions />
        </div>

        {/* STATIC SECTIONS */}
        <TrustIndicators />
        <InsightsSection />        
        <ClientLogos />
        <Testimonials />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default SolutionsPage;
