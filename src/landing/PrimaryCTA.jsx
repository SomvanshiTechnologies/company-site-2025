import React from 'react';

const CustomGridStyles = () => (
  <style>
    {`
      .bg-grid-pattern {
        background-image:
          linear-gradient(to right, rgba(199, 210, 254, 0.5) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(199, 210, 254, 0.5) 1px, transparent 1px);
        background-size: 20px 20px;
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
          className="absolute inset-0 bg-grid-pattern opacity-80 z-0"
        />

        {/* Content Container
          - 'relative z-10' to put content on top of the grid
        */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          
          {/* Constrain the text width */}
          <div className="max-w-2xl">
            {/* Kicker/Eyebrow Text */}
            <p className="font-body text-sm font-bold text-blue-900">
              Start building today!
            </p>
            
            {/* Main Headline */}
            <h2 className="mt-4 font-body text-4xl sm:text-5xl font-semibold text-text tracking-tight">
              Unlock Your Potential with<br />
              <strong className="font-bold">Custom AI Solutions</strong>
            </h2>
            
            {/* Sub-headline */}
            <p className="mt-6 font-body text-sm leading-8 text-blue-900">
              We help businesses grow using custom AI solutions. Let's build your project together.
            </p>
            
            {/* CTA Button */}
            <div className="mt-4">
              <a
                href="contact"
                className="
                  inline-block 
                  rounded-md 
                  bg-blue-800
                  px-4 py-2.5 
                  text-sm font-medium text-white 
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
