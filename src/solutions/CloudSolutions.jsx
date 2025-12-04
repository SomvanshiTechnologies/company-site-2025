import React from "react";
import cloudImg from "../assets/solutions/hero-dashboard.png";  // replace with your image
import purpleRing from "../assets/Small.svg";   // optional

export default function CloudSolutions() {
  return (
    <section className="w-full bg-gradient-to-b from-[#F6F8FF] to-[#FBF6FB] py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT IMAGE */}
        <div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src={cloudImg}
              alt="cloud solutions"
              className="w-full h-[340px] object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-left">
          
          <h2 className="text-[46px] md:text-[54px] lg:text-[62px] font-extrabold leading-tight text-[#1B2744]">
            Cloud <span className="text-[#3D86E6]">Solutions</span>
          </h2>

          <p className="text-[#56607A] mt-5 text-[17px] md:text-[18px] leading-relaxed max-w-md">
            Crafting high-performance web applications with modern front-end and
            back-end technologies to deliver secure, scalable, and
            business-ready digital solutions.
          </p>

          <button
            className="mt-8 inline-flex items-center gap-3 border border-[#3D86E6] text-[#3D86E6] px-5 py-3 
                       rounded-lg font-medium text-[15px] hover:bg-[#3D86E6] hover:text-white transition"
          >
            Get Started →
          </button>
        </div>
      </div>

      {/* decorative ring */}
      <img
        src={purpleRing}
        className="absolute top-0 right-10 w-40 opacity-100 pointer-events-none"
        style={{ transform: 'rotate(180deg)' }}
        aria-hidden
      />
    </section>
  );
}
