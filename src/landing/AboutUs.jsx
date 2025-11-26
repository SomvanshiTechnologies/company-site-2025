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
    <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      
      {/* Header Section */}
      <div className="text-center mb-12">
        <h3 className="text-gray-500 text-4xl font-normal mb-3">
          Our Purpose
        </h3>
        <h2 className="text-slate-900 text-4xl font-semibold">
          Some text will be here
        </h2>
      </div>

      {/* Card Component */}
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-6xl w-full flex flex-col md:flex-row min-h-[200px] max-h-[300px]">
        
        {/* Left: Image Section */}
        <div className="md:w-4/12 w-full relative h-64 md:h-auto">
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Ameya Somvanshi" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Content Section */}
        <div className="md:w-7/12 w-full p-8 md:p-12 flex flex-col justify-center">
          
          <blockquote className="mb-8">
            <p className="text-slate-700 text-lg leading-relaxed">
              “We're building an AI-driven future where every process learns, every 
              decision adapts, and every product creates real value. Our goal is to make 
              intelligence a natural part of business — powering smarter, faster, and 
              more efficient outcomes.”
            </p>
          </blockquote>

          {/* Action Link with Primary Color */}
          <a 
            href="about" 
            className="text-primary font-semibold flex items-center gap-1 hover:opacity-80 transition-opacity mb-10 w-fit"
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </a>

          {/* Author Details */}
          <div>
            <h4 className="text-slate-900 font-black text-xl">
              Ameya Somvanshi
            </h4>
            <p className="text-slate-500 font-medium">
              CEO | Somvanshi Technologies
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
