import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import tmbg from '../assets/tmbg.png';

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

  return (
    <>
      {/* --- Top Section: Clients & Testimonials --- */}
      <section className="bg-gradient-light py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* --- "Our Clients" Logo Cloud --- */}
          <div className="mb-16 sm:mb-24">
            <h2 className="text-center font-heading text-3xl sm:text-4xl font-bold text-text mb-12">
              Our Clients
            </h2>
            {/* Logo Grid */}
            <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl md:max-w-4xl md:grid-cols-4">
              {/* Placeholder Logos */}
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-300 h-20 rounded-md opacity-60"
                  title="Client Logo Placeholder"
                />
              ))}
            </div>
          </div>

          {/* --- "Testimonials" Carousel --- */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center font-heading text-3xl sm:text-4xl font-bold text-text mb-12">
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
                    <div className="relative bg-white p-8 sm:p-12 rounded-lg shadow-sm border border-gray-100">
                      {/* Quote and Content Container */}
                      <div className="flex items-start gap-4">
                        {/* Quote Icon */}
                        <svg
                          className="w-12 h-12 sm:w-14 sm:h-14 text-[#1e3a8a] shrink-0 mt-1"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.333 8h-2.667c-1.833 0-3.333 1.5-3.333 3.333v8c0 1.833 1.5 3.333 3.333 3.333h4.667v-11.333h-4.667v-3.333zM25.333 8h-2.667c-1.833 0-3.333 1.5-3.333 3.333v8c0 1.833 1.5 3.333 3.333 3.333h4.667v-11.333h-4.667v-3.333z" />
                        </svg>

                        {/* Content */}
                        <div className="flex-1">
                          <blockquote className="font-body text-[#1e3a8a] text-base sm:text-lg leading-relaxed font-normal">
                            {testimonial.quote}
                          </blockquote>

                          {/* Author */}
                          <footer className="mt-8 flex items-center gap-4">
                            <div className={`w-14 h-14 rounded-full ${testimonial.avatarColor} flex items-center justify-center text-white font-bold text-xl relative shrink-0`}>
                              {testimonial.avatar}
                              {/* Green online indicator */}
                              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
                            </div>
                            <div>
                              <p className="font-body font-bold text-[#1e3a8a] text-base sm:text-lg">
                                {testimonial.author}
                              </p>
                              <p className="font-body text-gray-500 text-sm sm:text-base font-normal">
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
            <div className="flex items-center justify-between mt-8">
              {/* Arrows on LEFT */}
              <div className="flex gap-1">
                <button
                  onClick={handlePrevious}
                  aria-label="Previous testimonial"
                  className="w-12 h-10 flex items-center justify-center rounded-md border border-blue-300 bg-white text-blue-500 hover:bg-blue-50 transition-all duration-200 cursor-pointer"
                >
                  <FaChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="w-12 h-10 flex items-center justify-center rounded-md border border-blue-300 bg-white text-blue-500 hover:bg-blue-50 transition-all duration-200 cursor-pointer"
                >
                  <FaChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Dots on RIGHT */}
              <div className="flex items-center gap-2.5">
                {testimonialsData.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => handleDotClick(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    className={`h-1 w-7 rounded-full transition-all duration-300 cursor-pointer ${
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
      <section className="pb-50" >
        
        <section className="relative h-75 text-white overflow-hidden">
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
        <div className="relative z-10 max-w-7xl mx-auto py-20 px-6 lg:px-8 text-left">
          <h2 className="font-heading text-4xl sm:text-4xl font-normal tracking-wide">
            Your AI journey starts here.
          </h2>
          <h3 className="mt-1.5 font-heading text-4xl sm:text-4xl font-normal tracking-wide">
            Let's create something intelligent together.
          </h3>

          {/* CTA Button */}
          <div className="mt-5">
            <a
              href="contact"
              className="
                inline-flex
                items-center
                gap-2
                font-body font-medium text-white
                border-2 border-white
                rounded-lg
                px-8 py-3
                text-base
                hover:bg-white
                hover:text-purple-700
                transition-all
                duration-300
                shadow-lg
                hover:shadow-xl
              "
            >
              Contact us <span aria-hidden="true" className="text-lg">→</span>
            </a>
          </div>
        </div>
      </section>
      </section>
    </>
  );
};

export default Testimonials;
