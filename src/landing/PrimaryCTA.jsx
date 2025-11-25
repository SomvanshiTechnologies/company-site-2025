import React from 'react';

const CustomGridStyles = () => (
  <style>
    {`
      .bg-grid-pattern {
        background-image:
          linear-gradient(to right, rgba(199, 210, 254, 0.2) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(199, 210, 254, 0.2) 1px, transparent 1px);
        background-size: 40px 40px;
        background-position: center;
      }
    `}
  </style>
);

const PrimaryCTA = () => {
  return (
    <>
      <CustomGridStyles />
      {/* Section Wrapper:
        - 'relative' to position the grid pattern
        - 'bg-gradient-light' from your theme
        - 'overflow-hidden' to clip the pattern
      */}
      <section className="relative bg-gradient-light overflow-hidden py-16 sm:py-24">

        {/* Grid Pattern Overlay
          - 'absolute' positions it behind the content
          - 'inset-0' makes it cover the whole section
          - 'opacity-50' makes it subtle
        */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-grid-pattern opacity-50 z-0"
        />

        {/* Content Container
          - 'relative z-10' to put content on top of the grid
        */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          
          {/* Constrain the text width */}
          <div className="max-w-2xl">
            {/* Kicker/Eyebrow Text */}
            <p className="font-body text-base font-medium text-primary">
              Start building today!
            </p>
            
            {/* Main Headline */}
            <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-semibold text-text tracking-tight">
              Unlock Your Potential with<br />
              <strong className="font-bold">Custom AI Solutions</strong>
            </h2>
            
            {/* Sub-headline */}
            <p className="mt-6 font-body text-lg leading-8 text-gray-600">
              We help businesses grow using custom AI solutions. Let's build your project together.
            </p>
            
            {/* CTA Button */}
            <div className="mt-10">
              <a
                href="#"
                className="
                  inline-block 
                  rounded-md 
                  bg-primary 
                  px-4 py-2.5 
                  text-base font-medium text-white 
                  shadow-sm 
                  hover:opacity-90 
                  transition-opacity
                "
              >
                Start your project <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrimaryCTA;
