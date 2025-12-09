import React, { useState, useEffect } from "react";
// 1. Import useNavigate from react-router-dom
import { useNavigate } from 'react-router-dom'; 

import slide1Img from "../assets/solutions/ai-2.png";
import slideImg2 from "../assets/solutions/ai-3.png";
import wave from "../assets/solutions/wave.gif";
import AnimatedBackground from "../ui/AnimatedBackground";
import { motion } from "framer-motion";


const HeroSection = () => {
  // 2. Initialize the navigation function
  const navigate = useNavigate(); 
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Function for the 'Start Project' button
  const startProject = () => {
    // Navigate to /contact using React Router's navigate
    navigate('/contact'); 
  };

  // Function for the 'Read more' button on slide 2
  const readMoreConversationalAI = () => {
    // Navigate to the specific article path /trends/:id
    // Replace 'conversational-ai-id' with the actual ID for this article
    navigate('/trends/conversational-ai-id');
  };

  // Function for the 'Read more' button on slide 3
  const readMoreWayfinding = () => {
    // Navigate to the specific article path /trends/:id
    // Replace 'ai-wayfinding-id' with the actual ID for this article
    navigate('/trends/ai-wayfinding-id');
  };

  return (
    <section className="relative h-[600px] sm:mt-17 mb-0 z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 overflow-hidden">
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
        <div className="relative z-10 ml-10 flex flex-col justify-center h-full px-6 sm:pl-12 lg:pl-[60px] max-w-full sm:max-w-[520px]">
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
              onClick={startProject} // Calls navigate('/contact')
            >
              Start Project →
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* ---------------- SLIDE 2 ---------------- */}
      <div
        className={`absolute inset-0 flex flex-col md:flex-row transition-opacity duration-700 ease-in-out ${
          current === 1 ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Text */}
        <div className="w-full ml-8 md:w-1/2 flex flex-col justify-center px-6 sm:px-8 lg:pl-20 lg:pr-8 text-[#0F172A]">
          <h1 className="text-[20px] font-bold leading-tight text-transparent bg-clip-text bg-linear-to-r from-[#8A2BE2] to-[#4FA7FF]">
            Conversational AI <br /> That Cares
          </h1>

          <p className="mt-4 text-[15px] leading-relaxed max-w-md">
            Enable 24/7 patient engagement through voice chat and predictive care
            assistants — reducing wait times and improving satisfaction.
          </p>

          <button 
            className="bg-[#3182CE] hover:bg-[#2B6CB0] text-white font-medium px-5 py-2.5 rounded-md mt-6 text-[15px] w-max"
            onClick={readMoreConversationalAI} // Calls navigate('/trends/...')
          >
            Read more →
          </button>
        </div>

        {/* Image */}
        <div className="hidden md:block md:w-1/2 h-full pr-25">
          <img
            src={slide1Img}
            alt="Conversational AI"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* ---------------- SLIDE 3 ---------------- */}
      <div
        className={`absolute inset-0 flex flex-col md:flex-row transition-opacity duration-700 ease-in-out ${
          current === 2 ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Text */}
        <div className="w-full ml-8 md:w-1/2 flex flex-col justify-center px-6 sm:px-8 lg:pl-20 lg:pr-8 text-[#0F172A]">
          <h1 className="text-[20px] md:text-[20px] font-bold leading-tight text-transparent bg-clip-text bg-linear-to-r from-[#8A2BE2] to-[#4FA7FF]">
            AI in Navigating & <br /> Wayfinding
          </h1>

          <p className="mt-4 text-[15px] leading-relaxed max-w-md">
            Simplify patient journeys with intelligent indoor wayfinding guiding
            visitors with ease.
          </p>

          <button 
            className="bg-[#3182CE] hover:bg-[#2B6CB0] text-white font-medium px-5 py-2.5 rounded-md mt-6 text-[15px] w-max"
            onClick={readMoreWayfinding} // Calls navigate('/trends/...')
          >
            Read more →
          </button>
        </div>

        {/* Image */}
        <div className="hidden md:block md:w-1/2 h-full pr-25">
          <img
            src={slideImg2}
            alt="AI Wayfinding"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;