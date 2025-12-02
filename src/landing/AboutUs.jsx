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
      <section className="relative bg-gradient-soft pt-20 sm:pt-32 md:pt-40 pb-24 sm:pb-32 md:pb-40 overflow-hidden">
        {/* Main content container */}
        {/* Positioned background SVG images */}
        
        <img
          src={Ellipse30}
          alt=""
          className="absolute bottom-[-10px] right-[-20px] w-[200px] sm:w-[240px] md:w-[280px] pointer-events-none"
        />
        <img
          src={small}
          alt=""
          className="absolute bottom-[-30px] right-[160px] w-[420px] sm:w-[500px] md:w-[560px] pointer-events-none"
        />        

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Headline */}
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
              We design systems that learn, adapt, and evolve with you.
            </h2>

            {/* Sub-headline */}
            <p className="mt-6 font-body text-base sm:text-lg leading-relaxed text-gray-600">
              From healthcare startups to e-commerce platforms, we serve
              businesses across industries.
            </p>

            {/* CTA Button */}
            <div className="mt-8 sm:mt-10">
              <a
                href="#"
                className="
                    inline-block
                    font-body font-medium text-primary
                    border-2 border-primary
                    rounded-lg
                    px-6 py-3
                    text-sm sm:text-base
                    hover:bg-primary
                    hover:text-white
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

      <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-gray-500 text-2xl sm:text-3xl md:text-4xl font-normal mb-2 md:mb-3">
            Our Purpose
          </h3>
          <h2 className="text-slate-900 text-2xl sm:text-3xl md:text-4xl font-semibold px-4">
            Some text will be here
          </h2>
        </div>

        {/* Card Component */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-6xl w-full flex flex-col md:flex-row md:min-h-[300px] md:max-h-[400px]">
          {/* Left: Image Section */}
          <div className="md:w-4/12 w-full relative h-48 sm:h-56 md:h-auto">
            <img
              src={ceo}
              alt="Ameya Somvanshi"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Content Section */}
          <div className="md:w-7/12 w-full p-6 sm:p-8 md:p-12 flex flex-col justify-center">
            <blockquote className="mb-6 md:mb-8">
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                "We're building an AI-driven future where every process learns,
                every decision adapts, and every product creates real value. Our
                goal is to make intelligence a natural part of business —
                powering smarter, faster, and more efficient outcomes."
              </p>
            </blockquote>

            {/* Action Link with Primary Color */}
            <a
              href="about"
              className="text-primary font-semibold flex items-center gap-1 hover:opacity-80 transition-opacity mb-6 md:mb-10 w-fit"
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
              <h4 className="text-slate-900 font-black text-lg sm:text-xl">
                Ameya Somvanshi
              </h4>
              <p className="text-slate-500 font-medium text-sm sm:text-base">
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
