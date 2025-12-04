import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import tmbg from '../assets/tmbg.png';

function FeatureShowcase() {
  return (
    <>
      {/* --- Bottom CTA Section with Background Image --- */}
      <section className="relative text-white overflow-hidden min-h-[300px] sm:min-h-[250px] md:min-h-[250px]">

        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${tmbg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-8 md:ml-12 lg:ml-20 text-left">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-normal tracking-wide">
            Your AI journey starts here.
          </h2>
          <h3 className="mt-2 sm:mt-3 md:mt-4 font-heading text-2xl sm:text-3xl md:text-4xl font-normal tracking-wide">
            Let's create something intelligent together.
          </h3>

          {/* CTA Button */}
          <div className="mt-6 sm:mt-8">
            <a
              href="/contact"
              className="
                inline-flex
                items-center
                gap-2
                font-body font-medium text-white
                border-2 border-white
                rounded-lg
                px-6 sm:px-8
                py-2.5 sm:py-3
                text-sm sm:text-base
                hover:bg-white
                hover:text-purple-700
                transition-all
                duration-300
                shadow-lg
                hover:shadow-xl
              "
            >
              Contact us <span aria-hidden="true" className="text-base sm:text-lg">→</span>
            </a>
          </div>
        </div>

      </section>
    </>
  );
}

export default FeatureShowcase;
