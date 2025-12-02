import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import HeroSection from '../solutions/HeroSection';
import SolutionCategories from '../solutions/SolutionCategories';
import AISolutionsIntro from '../solutions/AISolutionsIntro';
import ServicesGrid from '../solutions/ServicesGrid';
import ProcessSteps from '../solutions/ProcessSteps';
import FeatureShowcase from '../solutions/FeatureShowcase';
import CallToAction from '../solutions/CallToAction';
import AgenticSolutions from '../solutions/AgenticSolutions';
import TrustIndicators from '../solutions/TrustIndicators';
import InsightsSection from '../solutions/InsightsSection';
import Testimonials from '../solutions/Testimonials';
import ClientLogos from '../solutions/ClientLogos';
import ContactForm from '../solutions/ContactForm';


const SolutionsPage = () => {
  return (
        <div Name="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-gray-50 via-white to-gray-50">

      <Navbar />

      <main className="flex-grow w-full">
        {/* 1. Main Hero Section */}
        <HeroSection />
        
        {/* 2. Category List (Pocket Engineering, AI Solutions, etc.) */}
        <SolutionCategories />
        
        {/* 3. Introduction to AI Solutions */}
        <AISolutionsIntro />
        
        {/* 4. Grid of specific services (Chatbot, Voice Agent, etc.) */}
        <ServicesGrid />
        
        {/* 5. Process Steps (01, 02, 03...) */}
        <ProcessSteps />
        
        {/* 6. Feature Showcase (Intelligent Doc Processing, etc.) */}
        <FeatureShowcase />
        
        {/* 7. Call To Action Banner */}
        <CallToAction />
        
        {/* 8. Agentic AI and other solution cards */}
        <AgenticSolutions />
        
        {/* 9. Trust Indicators (Security, Cloud, Support) */}
        <TrustIndicators />
        
        {/* 10. Latest Trends and Insights */}
        <InsightsSection />
        
        {/* 11. Client Testimonials */}
        <Testimonials />
        
        {/* 12. Client Logo Strip */}
        <ClientLogos />
        
        {/* 13. Contact Form */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default SolutionsPage;
