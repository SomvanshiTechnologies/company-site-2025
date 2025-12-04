import React, { useState, useEffect } from "react";
import slide1Img from "../assets/solutions/ai-2.png";   
import slideImg2 from "../assets/solutions/ai-3.png";      
import wave from "../assets/solutions/wave.gif"; 

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
<section className="relative w-full h-[70vh] overflow-hidden mt-[70px]">

  {/* -------- SLIDE 1 -------- */}
  <div
  className={`absolute inset-0 transition-opacity duration-700 ease-in-out
  ${current === 0 ? "opacity-100" : "opacity-0"}`}
>

  {/* BACKGROUND IMAGE FULL WIDTH */}
  <img src={wave} className="absolute inset-0 w-full h-full object-cover" />
  <div className="absolute inset-0 bg-black/40"></div>

  {/* TEXT OVERLAY */}
  <div className="relative z-10 flex flex-col justify-center h-full pl-[60px] max-w-[520px]">
    <h1 className="text-[40px] font-semibold text-white leading-tight">
      Our Solutions
    </h1>

    <p className="mt-4 text-white text-[15px] leading-relaxed">
      From automation to intelligence, our AI-driven solutions help enterprises streamline processes,
      make faster decisions, and deliver exceptional experiences.
    </p>

    <button className="bg-[#3182CE] hover:bg-[#2B6CB0] text-white font-medium px-5 py-2.5 rounded-md mt-6 w-30 text-[10px]">
      Start Project →
    </button>
  </div>

</div>


  {/* -------- SLIDE 2 -------- */}
  <div
  className={`absolute inset-0 flex transition-opacity duration-700 ease-in-out ${
    current === 1 ? "opacity-100" : "opacity-0"
  }`}
>
  {/* Left Text Section */}
  <div className="w-1/2 flex flex-col justify-center pl-20 pr-8 text-[#0F172A]">
    <h1 className="text-[20px] font-bold leading-tight">Conversational AI That Cares</h1>
    <p className="mt-4 text-[10px] leading-relaxed max-w-md">
      Enable 24/7 patient engagement through voice chat, and predictive care
      assistants reducing wait times and improving satisfaction.
    </p>
      <button className="bg-[#3182CE] hover:bg-[#2B6CB0] text-white font-medium px-5 py-2.5 rounded-md mt-6 text-[15px] w-max">
      Read more →
    </button>
  </div>

  {/* Right Image Section */}
  <div className="w-1/2 h-full">
    <img src={slide1Img} className="w-full h-full object-cover" />
  </div>
</div>


  {/* -------- SLIDE 3 -------- */}
  <div
  className={`absolute inset-0 flex transition-opacity duration-700 ease-in-out ${
    current === 2 ? "opacity-100" : "opacity-0"
  }`}
>
  {/* Left Text Section */}
  <div className="w-1/2 flex flex-col justify-center pl-20 pr-8 text-[#0F172A]">
    <h1 className="text-[20px] font-bold leading-tight">AI in Navigating & Wayfinding</h1>
    <p className="mt-4 text-[10px] leading-relaxed max-w-md">
        Simplify patient journeys with intelligent indoor wayfinding guiding visitors with ease.
      </p>
      <button className="bg-[#3182CE] hover:bg-[#2B6CB0] text-white font-medium px-5 py-2.5 rounded-md mt-6 text-[15px] w-max">
      Read more →
    </button>
    </div>

  <div className="w-1/2 h-full">
      <img src={slideImg2} className="w-full h-full object-cover" />
    </div>
  </div> 
 

</section>
  );
};

export default HeroSection;
