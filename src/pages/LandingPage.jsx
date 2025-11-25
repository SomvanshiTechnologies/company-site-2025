import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../landing/HeroSection';
import LatestTrends from '../landing/LatestTrends';
import Solutions from '../landing/Solutions';
import Technologies from '../landing/Technologies';
import BusinessImpact from '../landing/BusinessImpact';
import CoreCapabilities from '../landing/CoreCapabilities';
import AboutUs from '../landing/AboutUs';
import PrimaryCTA from '../landing/PrimaryCTA';
import LatestNews from '../landing/LatestNews';
import Testimonials from '../landing/Testimonials';
import Info from '../landing/Info';
const LandingPage = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />

      <main>
        <HeroSection />
        <Info />
        <LatestTrends />
        <Solutions />
        <Technologies />
        <BusinessImpact />
        <CoreCapabilities />
        <AboutUs />
        <PrimaryCTA />
        <LatestNews />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
