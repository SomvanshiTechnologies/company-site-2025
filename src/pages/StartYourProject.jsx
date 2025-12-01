import React from 'react';
import { ArrowRight } from 'lucide-react';

const StartYourProject = () => {
  return (
    <div className="w-full min-h-[400px] relative overflow-hidden flex items-center p-6 md:p-12 lg:px-24"
      style={{
        background: 'var(--background-image-gradient-soft, linear-gradient(135deg, #EEF2FF 0%, #FAF5FF 50%, #FDF2F8 100%))'
      }}
    >
      <div className="max-w-7xl w-full relative z-10 flex flex-col items-start justify-center h-full">
        
        {/* Content Section - Full width to allow single line text */}
        <div className="w-full flex flex-col items-start gap-5">
          <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-tight text-[#1e1b4b] tracking-tight font-heading whitespace-nowrap">
            We design systems that learn, adapt, and evolve with you.
          </h2>
          
          <p className="text-base md:text-lg text-[#4B5563] font-normal font-body w-full whitespace-nowrap">
            From healthcare startups to e-commerce platforms, we serve businesses across industries.
          </p>
          
          <button 
            className="group mt-5 px-6 py-3 rounded-lg border-[2px] border-[#5594D2] text-[#5594D2] font-semibold text-base hover:bg-[#5594D2] hover:text-white transition-all duration-300 flex items-center gap-2"
            type="button"
          >
            Start your project
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
          </button>
        </div>

      </div>

      {/* Animated Rings - Positioned as Semicircular Arcs in Bottom Right */}
      <div className="absolute bottom-0 right-0 pointer-events-none select-none overflow-hidden" style={{ width: '600px', height: '400px' }}>
        
        {/* Ring 1 - Large Main Outer Arc */}
        <div className="absolute bottom-[-280px] right-[-180px] w-[600px] h-[600px] flex items-center justify-center">
            <div 
                className="w-full h-full rounded-full animate-[spin_30s_linear_infinite]"
                style={{
                    background: 'conic-gradient(from 180deg, #7C3AED, #6D28D9, #4C1D95, #8B5CF6, #7C3AED)',
                    // Thick band mask
                    mask: 'radial-gradient(transparent 58%, black 58.5%)', 
                    WebkitMask: 'radial-gradient(transparent 58%, black 58.5%)',
                }}
            />
        </div>

        {/* Ring 2 - Inner Arc */}
        <div className="absolute bottom-[-150px] right-[-80px] w-[400px] h-[400px] flex items-center justify-center">
            <div 
                className="w-full h-full rounded-full animate-[spin_20s_linear_infinite_reverse]"
                style={{
                    background: 'conic-gradient(from 0deg, #8B5CF6, #7C3AED, #5B21B6, #8B5CF6)',
                    // Thick band mask
                    mask: 'radial-gradient(transparent 55%, black 55.5%)', 
                    WebkitMask: 'radial-gradient(transparent 55%, black 55.5%)',
                }}
            />
        </div>

      </div>
      
      {/* Styles for Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Nunito+Sans:wght@400;600&display=swap');
        
        .font-heading { font-family: 'Montserrat', sans-serif; }
        .font-body { font-family: 'Nunito Sans', sans-serif; }
      `}</style>
    </div>
  );
};

export default StartYourProject;