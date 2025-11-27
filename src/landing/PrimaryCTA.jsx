import React from "react";

const CustomGridStyles = () => (
  <style>
    {`
      .bg-grid-pattern {
        background-image:
          linear-gradient(to right, rgba(84, 84, 191, 0.4) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(48, 80, 207, 0.4) 1px, transparent 1px);
        background-size: 19px 19px;
        opacity: 0.7;
      }

      .grid-top {
        transform: perspective(600px) rotateX(-45deg);
        transform-origin: top;
        mask-image: linear-gradient(to bottom, black, transparent 90%);
        -webkit-mask-image: linear-gradient(to bottom, black, transparent 90%);
      }

      .grid-bottom {        
        transform: perspective(600px) rotateX(45deg);
        transform-origin: bottom;
        mask-image: linear-gradient(to top, black, transparent 90%);
        -webkit-mask-image: linear-gradient(to top, black, transparent 90%);
      }
    `}
  </style>
);

const PrimaryCTA = () => {
  return (
    <>
      <CustomGridStyles />

      <section className="relative bg-gradient-light overflow-hidden py-24">

        {/* Top Grid Pattern */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-48 bg-grid-pattern grid-top z-0"
        />

        {/* Bottom Grid Pattern */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-48 bg-grid-pattern grid-bottom z-0"
        />

        {/* Main Content */}
        <div className="relative max-w-8xl mx-auto px-8 lg:px-8 z-10 ml-20">
          <div className="max-w-2xl">
            <p className="font-body text-sm font-bold text-blue-900">
              Start building today!
            </p>

            <h2 className="mt-4 font-body text-4xl sm:text-5xl font-semibold text-text tracking-tight">
              Unlock Your Potential with
              <br />
              <strong className="font-bold">Custom AI Solutions</strong>
            </h2>

            <p className="mt-6 font-body text-sm leading-8 text-blue-900">
              We help businesses grow using custom AI solutions. Let's build your project together.
            </p>

            <div className="mt-4">
              <a
                href="contact"
                className="inline-block rounded-md bg-blue-800 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:opacity-90 transition-opacity"
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
