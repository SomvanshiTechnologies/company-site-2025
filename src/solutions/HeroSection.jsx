import React, { useState, useEffect } from "react";
import slide1Img from "../assets/solutions/ai-2.png";
import slideImg2 from "../assets/solutions/ai-3.png";
import wave from "../assets/solutions/wave.gif";
import AnimatedBackground from "../ui/AnimatedBackground";
import { motion } from "framer-motion";


const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[400px] sm:mt-17 mb-0 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
  <AnimatedBackground />

  {/* ---------------- SLIDE 1 ---------------- */}
  <div
    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
      current === 0 ? "opacity-100" : "opacity-0"
    }`}
  >
    {/* Background */}
    <img
      src={wave}
      alt="Slide Background"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40"></div>

    {/* Text */}
    <div className="relative z-10 flex flex-col justify-center h-full pl-[60px] max-w-[520px]">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        <motion.h1
          className="text-[40px] font-semibold text-white leading-tight"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          Our Solutions
        </motion.h1>

        <motion.p
          className="mt-4 text-white text-[15px] leading-relaxed"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          From automation to intelligence, our AI-driven solutions help
          enterprises streamline processes, make faster decisions, and deliver
          exceptional experiences.
        </motion.p>

        <motion.button
          className="bg-[#3182CE] hover:bg-[#2B6CB0] text-white font-medium px-5 py-2.5 rounded-md mt-6 text-[15px] w-max"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          Start Project →
        </motion.button>
      </motion.div>
    </div>
  </div>

  {/* ---------------- SLIDE 2 ---------------- */}
  <div
    className={`absolute inset-0 flex transition-opacity duration-700 ease-in-out ${
      current === 1 ? "opacity-100" : "opacity-0"
    }`}
  >
    {/* Text */}
    <div className="w-1/2 flex flex-col justify-center pl-20 pr-8 text-[#0F172A]">
      <h1 className="text-[20px] font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#8A2BE2] to-[#4FA7FF] whitespace-nowrap w-max">
        Conversational AI <br /> That Cares
      </h1>

      <p className="mt-4 text-[15px] leading-relaxed max-w-md">
        Enable 24/7 patient engagement through voice chat and predictive care
        assistants — reducing wait times and improving satisfaction.
      </p>

      <button className="bg-[#3182CE] hover:bg-[#2B6CB0] text-white font-medium px-5 py-2.5 rounded-md mt-6 text-[15px] w-max">
        Read more →
      </button>
    </div>

    {/* Image */}
    <div className="w-1/2 h-full">
      <img
        src={slide1Img}
        alt="Conversational AI"
        className="w-[95%] ml-auto h-full object-cover"
      />
    </div>
  </div>

  {/* ---------------- SLIDE 3 ---------------- */}
  <div
    className={`absolute inset-0 flex transition-opacity duration-700 ease-in-out ${
      current === 2 ? "opacity-100" : "opacity-0"
    }`}
  >
    {/* Text */}
    <div className="w-1/2 flex flex-col justify-center pl-20 pr-8 text-[#0F172A]">
      <h1 className="text-[26px] md:text-[20px] font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#8A2BE2] to-[#4FA7FF] whitespace-nowrap w-max">
        AI in Navigating & <br /> Wayfinding
      </h1>

      <p className="mt-4 text-[15px] leading-relaxed max-w-md">
        Simplify patient journeys with intelligent indoor wayfinding guiding 
        visitors with ease.
      </p>

      <button className="bg-[#3182CE] hover:bg-[#2B6CB0] text-white font-medium px-5 py-2.5 rounded-md mt-6 text-[15px] w-max">
        Read more →
      </button>
    </div>

    {/* Image */}
    <div className="w-1/2 h-full">
      <img
        src={slideImg2}
        alt="AI Wayfinding"
        className="w-[95%] ml-auto h-full object-cover"
      />
    </div>
  </div>
</section>

  );
};

export default HeroSection;
