import React from 'react';

const CustomStyles = () => (
  <style>
    {`
      @keyframes bob {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-12px);
        }
      }
      
      .animate-bob {
        animation: bob 5s ease-in-out infinite;
      }
    `}
  </style>
);


const AboutUs = () => {
  return (
    <>
      <CustomStyles />
      {/* This outer div wraps both sections and handles the horizontal clipping 
        of the arches.
      */}
      <div className="relative overflow-x-hidden">
      
        {/* --- Top Section: "We design systems..." --- */}
        <section className="relative bg-gradient-light py-16 sm:py-24">
          {/* Main content container */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl">
              {/* Headline */}
              <h2 className="font-heading text-4xl sm:text-5xl font-semibold text-text">
                We design systems that learn, adapt, and evolve with you.
              </h2>
              
              {/* Sub-headline */}
              <p className="mt-6 font-body text-lg leading-8 text-gray-600">
                From healthcare startups to e-commerce platforms, we serve businesses across industries.
              </p>
              
              {/* CTA Button */}
              <div className="mt-10">
                <a
                  href="contact"
                  className="
                    font-body font-medium text-primary 
                    border border-primary 
                    rounded-md 
                    px-4 py-2.5 
                    text-sm 
                    hover:bg-primary/5 
                    transition-colors
                  "
                >
                  Start your project <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* --- Animated Arches --- 
            Positioned at the bottom of this first section,
            peeking out from the right side.
          */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 right-0 z-0 flex translate-y-1/4"
          >
            {/* Large Arch */}
            <div 
              className="
                w-160 h-160 
                rounded-full 
                bg-gradient-purple 
                opacity-60 
                translate-x-1/3 
                animate-bob
              "
              style={{ animationDelay: '0s' }}
            />
            {/* Small Arch */}
            <div 
              className="
                w-[20rem] h-80 
                rounded-full 
                bg-gradient-purple 
                opacity-80 
                -translate-x-1/4 
                animate-bob
              "
              style={{ animationDelay: '1.5s' }}
            />
          </div>
        </section>

        {/* --- Bottom Section: "Our Purpose" --- */}
        <section className="relative z-10 bg-gradient-light py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            
            {/* Section Headers */}
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-heading text-4xl font-semibold text-primary">
                Our Purpose
              </h2>
              <p className="mt-4 font-heading text-3xl text-text">
                Some text will be here
              </p>
            </div>
            
            {/* Content Grid */}
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column: Image */}
              <div>
                <img
                  src="https://placehold.co/800x600/E0E7FF/4F46E5?text=Ameya+Somvanshi" // Placeholder image
                  alt="Ameya Somvanshi"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
              
              {/* Right Column: Quote */}
              <div className="relative">
                <blockquote className="font-heading text-xl sm:text-2xl text-text font-medium leading-relaxed italic border-l-4 border-primary/50 pl-6">
                  "We're building an AI-driven future where every process learns, every
                  decision adapts, and every product creates real value. Our goal is to make
                  intelligence a natural part of business — powering smarter, faster, and
                  more efficient outcomes."
                </blockquote>
                <a href="about" className="font-body text-primary text-sm font-medium block mt-6 hover:opacity-80">
                  Our objectives <span aria-hidden="true">›</span>
                </a>
                <footer className="mt-8">
                  <p className="font-body text-lg font-semibold text-text">
                    Ameya Somvanshi
                  </p>
                  <p className="font-body text-gray-600">
                    CEO | Somvanshi Technologies
                  </p>
                </footer>
              </div>
              
            </div>
            
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
