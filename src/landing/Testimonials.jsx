import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import tmbg from '../assets/tmbg.png';

// Client logos data (using placeholder service)
const clientLogos = [
  { id: 1, name: 'Client 1', logo: 'https://placehold.co/180x80/E0E7FF/4F46E5?text=Client+1' },
  { id: 2, name: 'Client 2', logo: 'https://placehold.co/180x80/E0E7FF/4F46E5?text=Client+2' },
  { id: 3, name: 'Client 3', logo: 'https://placehold.co/180x80/E0E7FF/4F46E5?text=Client+3' },
  { id: 4, name: 'Client 4', logo: 'https://placehold.co/180x80/E0E7FF/4F46E5?text=Client+4' },
  { id: 5, name: 'Client 5', logo: 'https://placehold.co/180x80/E0E7FF/4F46E5?text=Client+5' },
  { id: 6, name: 'Client 6', logo: 'https://placehold.co/180x80/E0E7FF/4F46E5?text=Client+6' },
];

// Testimonials data array
const testimonialsData = [
  {
    id: 1,
    quote: "We're building an AI-driven future where every process learns, every decision adapts, and every product creates real value. Our goal is to make intelligence a natural part of business — powering smarter, faster, and more efficient outcomes.",
    author: "Sophia Carter",
    position: "CEO, Company name",
    avatar: "S",
    avatarColor: "bg-red-500"
  },
  {
    id: 2,
    quote: "The innovation and dedication shown by this team has transformed our business operations. Their AI solutions have streamlined our workflows and increased efficiency by 40%.",
    author: "Michael Chen",
    position: "CTO, Tech Innovations",
    avatar: "M",
    avatarColor: "bg-blue-500"
  },
  {
    id: 3,
    quote: "Outstanding results! Their expertise in AI and machine learning has helped us stay ahead of the competition. The intelligent systems they built continue to exceed our expectations.",
    author: "Emily Rodriguez",
    position: "Director, Digital Solutions Inc",
    avatar: "E",
    avatarColor: "bg-green-500"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Auto-scroll functionality
  useEffect(() => {
    let interval;
    if (isAutoScrolling) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change testimonial every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  // Handle previous button click
  const handlePrevious = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
    // Resume auto-scroll after 10 seconds of inactivity
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  // Handle next button click
  const handleNext = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
    // Resume auto-scroll after 10 seconds of inactivity
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  // Handle dot click
  const handleDotClick = (index) => {
    setIsAutoScrolling(false);
    setCurrentIndex(index);
    // Resume auto-scroll after 10 seconds of inactivity
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  const currentTestimonial = testimonialsData[currentIndex];

  // Duplicate logos for infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <>
      {/* --- Top Section: Clients & Testimonials --- */}
      <section className="bg-gradient-light py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* --- "Our Clients and Ecosystems" Logo Carousel --- */}
          <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <h2 className="text-center font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-8 sm:mb-10 md:mb-12">
              Our Clients and Ecosystems
            </h2>

            {/* Infinite Scrolling Logo Carousel */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-logos">
                {duplicatedLogos.map((client, index) => (
                  <div
                    key={`${client.id}-${index}`}
                    className="shrink-0 mx-6 sm:mx-8 md:mx-10 flex items-center justify-center"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-12 sm:h-16 md:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- "Testimonials" Carousel --- */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-8 sm:mb-10 md:mb-12">
              Testimonials
            </h2>

            {/* Testimonial Card with smooth transition */}
            <div className="relative overflow-hidden">
              <div
                className="transition-all duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  display: 'flex'
                }}
              >
                {testimonialsData.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="min-w-full"
                  >
                    <div className="relative bg-white p-5 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-sm border border-gray-100">
                      {/* Quote and Content Container */}
                      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                        {/* Quote Icon */}
                        <svg
                          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-[#1e3a8a] shrink-0 mt-0 sm:mt-1"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.333 8h-2.667c-1.833 0-3.333 1.5-3.333 3.333v8c0 1.833 1.5 3.333 3.333 3.333h4.667v-11.333h-4.667v-3.333zM25.333 8h-2.667c-1.833 0-3.333 1.5-3.333 3.333v8c0 1.833 1.5 3.333 3.333 3.333h4.667v-11.333h-4.667v-3.333z" />
                        </svg>

                        {/* Content */}
                        <div className="flex-1">
                          <blockquote className="font-body text-[#1e3a8a] text-sm sm:text-base md:text-lg leading-relaxed font-normal">
                            {testimonial.quote}
                          </blockquote>

                          {/* Author */}
                          <footer className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4">
                            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${testimonial.avatarColor} flex items-center justify-center text-white font-bold text-lg sm:text-xl relative shrink-0`}>
                              {testimonial.avatar}
                              {/* Green online indicator */}
                              <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
                            </div>
                            <div>
                              <p className="font-body font-bold text-[#1e3a8a] text-sm sm:text-base md:text-lg">
                                {testimonial.author}
                              </p>
                              <p className="font-body text-gray-500 text-xs sm:text-sm md:text-base font-normal">
                                {testimonial.position}
                              </p>
                            </div>
                          </footer>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center justify-between mt-4 sm:mt-6">
              {/* Arrows on LEFT */}
              <div className="flex gap-1 sm:gap-2">
                <button
                  onClick={handlePrevious}
                  aria-label="Previous testimonial"
                  className="w-10 h-8 sm:w-12 sm:h-9 flex items-center justify-center rounded-md border border-blue-200 text-blue-400 hover:bg-blue-50 transition-colors"
                >
                  <FaChevronLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="w-10 h-8 sm:w-12 sm:h-9 flex items-center justify-center rounded-md border border-blue-200 text-blue-400 hover:bg-blue-50 transition-colors"
                >
                  <FaChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </button>
              </div>

              {/* Dots on RIGHT */}
              <div className="flex items-center gap-2 sm:gap-2.5">
                {testimonialsData.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => handleDotClick(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    className={`h-1 w-5 sm:w-7 rounded-full transition-all duration-300 cursor-pointer ${
                      index === currentIndex
                        ? 'bg-blue-500'
                        : 'bg-blue-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Bottom CTA Section with Background Image --- */}
      <section className="relative text-white overflow-hidden min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
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
              href="contact"
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

      {/* Logo Carousel Animation Styles */}
      <style jsx>{`
        @keyframes scroll-logos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll-logos {
          display: flex;
          animation: scroll-logos 25s linear infinite;
        }

        .animate-scroll-logos:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};

export default Testimonials;
