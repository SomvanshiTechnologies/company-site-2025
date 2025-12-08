import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Importing Industry Components from the '../industries/' directory
import IndustryHero from '../industries/IndustryHero';
import IndustryMenu from '../industries/IndustryMenu';
import LifeSciencesShowcase from '../industries/LifeSciencesShowcase';
import EdTechShowcase from '../industries/EdTechShowcase';
import SupplyChainShowcase from '../industries/SupplyChainShowcase';
import BFSIShowcase from '../industries/BFSIShowcase';
import RealEstateShowcase from '../industries/RealEstateShowcase';
import HealthcareShowcase from '../industries/HealthcareShowcase';
import CapabilitiesImpact from '../industries/CapabilitiesImpact';
import LatestTrends from '../industries/LatestTrends';
import GetStartedCTA from '../industries/GetStartedCTA';

const IndustriesPage = () => {
  // References for smooth scrolling to specific industry sections
  const refLifeSciences = useRef(null);
  const refEdTech = useRef(null);
  const refSupplyChain = useRef(null);
  const refBFSI = useRef(null);
  const refRealEstate = useRef(null);
  const refHealthcare = useRef(null);

  // Function to handle scroll actions from the IndustryMenu
  const scrollToSection = (index) => {
    const refs = [
      refLifeSciences, 
      refEdTech, 
      refSupplyChain, 
      refBFSI, 
      refRealEstate, 
      refHealthcare
    ];
    
    if (refs[index]?.current) {
      // Offset for sticky header
      const yOffset = -100; 
      const element = refs[index].current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  return (
    <div className="relative items-center justify-center min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-50">
      <Navbar />

      <main className="w-full">
        {/* HERO SECTION */}
        <IndustryHero />

        {/* INDUSTRY MENU / TABS (Passes scroll function) */}
        <IndustryMenu scrollToSection={scrollToSection} />

        {/* DYNAMIC INDUSTRY SHOWCASE SECTIONS */}
        <div ref={refLifeSciences}>
          <LifeSciencesShowcase />
        </div>

        <div ref={refEdTech}>
          <EdTechShowcase />
        </div>

        <div ref={refSupplyChain}>
          <SupplyChainShowcase />
        </div>

        <div ref={refBFSI}>
          <BFSIShowcase />
        </div>

        <div ref={refRealEstate}>
          <RealEstateShowcase />
        </div>

        <div ref={refHealthcare}>
          <HealthcareShowcase />
        </div>

        {/* SHARED SECTIONS */}
        <CapabilitiesImpact />
        <LatestTrends />
        
        {/* CALL TO ACTION */}
        <GetStartedCTA />
      </main>

      <Footer />
    </div>
  );
};

export default IndustriesPage;