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

const ClientLogos = () => {
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
          {/* --- "Our Clients" Logo Carousel --- */}
          <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <h2 className="text-center font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-8 sm:mb-10 md:mb-12">
              Our Clients 
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
        </div>
      </section>
    </>
  );
};

export default ClientLogos;
