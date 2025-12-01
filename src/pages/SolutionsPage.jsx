import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Solutions from '../landing/Solutions';

const SolutionsPage = () => {
  return (
        <div Name="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-gray-50 via-white to-gray-50">

      <Navbar />

      <main>
        <Solutions />
      </main>

      <Footer />
    </div>
  );
};

export default SolutionsPage;
