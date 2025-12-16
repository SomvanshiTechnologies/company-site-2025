import React from "react";
import ceo from "./../assets/images/profile/amey-somvanshi-ceo.jpg";
import small from "../assets/Small.svg";
import Ellipse30 from "../assets/Ellipse 30.svg";

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

      @keyframes rotate-gradient {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }

      .animated-gradient-ring {
        background: linear-gradient(
          90deg,
          #7C3AED,
          #A855F7,
          #C084FC,
          #E9D5FF,
          #C084FC,
          #A855F7,
          #7C3AED
        );
        background-size: 200% 200%;
        animation: rotate-gradient 4s ease infinite;
        -webkit-mask:
          linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
      }
    `}
  </style>
);

const AboutUs = () => {
  return (
    <div className="relative overflow-x-hidden">
      {/* --- Top Section: "We design systems..." --- */}
      <section className="relative bg-white pt-32 sm:pt-40 md:pt-48 pb-32 sm:pb-40 md:pb-48 overflow-hidden">
        {/* Main content container */}
        {/* Positioned background SVG images */}

        <img
          src={Ellipse30}
          alt=""
          className="absolute bottom-[-10px] right-[-20px] w-[200px] sm:w-[240px] md:w-[280px] pointer-events-none opacity-40"
        />
        <img
          src={small}
          alt=""
          className="absolute bottom-[-30px] right-[160px] w-[420px] sm:w-[500px] md:w-[560px] pointer-events-none opacity-40"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Headline */}
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8" style={{ lineHeight: '1.2' }}>
              We design systems that learn, adapt, and evolve with you.
            </h2>

            {/* Sub-headline */}
            <p className="font-body text-lg sm:text-xl text-gray-600 mb-10" style={{ lineHeight: '1.8' }}>
              From healthcare startups to e-commerce platforms, we serve
              businesses across industries.
            </p>

            {/* CTA Button */}
            <div className="mt-10">
              <a
                href="#"
                className="
                    inline-block
                    font-body font-medium text-gray-700
                    border border-gray-300
                    rounded-lg
                    px-8 py-3
                    text-base
                    hover:bg-gray-50
                    hover:border-gray-400
                    transition-colors
                  "
              >
                Start your project <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* --- Animated Semicircular Rings --- */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 z-0 pointer-events-none"
        >
          {/* Ring 1 - Large */}
          <div
            className="
                absolute
                bottom-0
                right-[180px]
                sm:right-[200px]
                md:right-[220px]
                lg:right-[240px]
                w-[400px] h-[280px]
                sm:w-[480px] sm:h-[320px]
                md:w-[560px] md:h-[360px]
                lg:w-[640px] lg:h-[400px]
                rounded-full
                animated-gradient-ring
                translate-y-1/2
                animate-bob
              "
            style={{
              animationDelay: "0s",
              padding: "20px",
            }}
          />
          {/* Ring 2 - Small */}
          <div
            className="
                absolute
                bottom-[-20px]
                sm:bottom-[-30px]
                md:bottom-[-40px]
                right-0
                w-[200px] h-[200px]
                sm:w-[240px] sm:h-[240px]
                md:w-[280px] md:h-[280px]
                lg:w-[320px] lg:h-[320px]
                rounded-full
                animated-gradient-ring
                translate-y-1/2
                animate-bob
              "
            style={{
              animationDelay: "1.5s",
              padding: "16px",
            }}
          />
        </div>
      </section>

      <section className="bg-gray-50 flex flex-col items-center justify-center py-32 sm:py-40 px-6">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <h3 className="text-gray-900 text-4xl sm:text-5xl font-bold" style={{ lineHeight: '1.2' }}>
            Our Purpose
          </h3>
        </div>

        {/* Card Component */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden max-w-6xl w-full flex flex-col md:flex-row">
          {/* Left: Image Section */}
          <div className="md:w-5/12 w-full relative h-64 sm:h-80 md:h-auto">
            <img
              src={ceo}
              alt="Ameya Somvanshi"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Content Section */}
          <div className="md:w-7/12 w-full p-10 sm:p-12 md:p-16 flex flex-col justify-center">
            <blockquote className="mb-10">
              <p className="text-gray-700 text-lg sm:text-xl" style={{ lineHeight: '1.8' }}>
                "We're building an AI-driven future where every process learns,
                every decision adapts, and every product creates real value. Our
                goal is to make intelligence a natural part of business —
                powering smarter, faster, and more efficient outcomes."
              </p>
            </blockquote>

            {/* Action Link with Primary Color */}
            <a
              href="about"
              className="text-primary font-medium flex items-center gap-2 hover:opacity-80 transition-opacity mb-10 w-fit text-base"
            >
              Our objectives
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>

            {/* Author Details */}
            <div>
              <h4 className="text-gray-900 font-bold text-xl sm:text-2xl mb-2">
                Ameya Somvanshi
              </h4>
              <p className="text-gray-600 font-medium text-base sm:text-lg">
                CEO | Somvanshi Technologies
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
