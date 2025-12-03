import React from "react";
import wave from "../assets/solutions/wave.png"; // or correct path

const HeroSection = () => {
  return (
    <section className="relative w-full h-[70vh] flex items-center mt-[60px] px-0"

      style={{
        backgroundImage: `url(${wave})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="pl-20 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#E4E4E4]">
          Our Solutions
        </h1>

        <p className="text-gray-300 mt-4 text-[15px] leading-relaxed">
          From automation to intelligence, our AI-driven solutions help enterprises streamline
          processes, make faster decisions, and deliver exceptional experiences.
        </p>

        <button className="bg-[#3182CE] hover:bg-[#2B6CB0]
          text-white font-medium px-5 py-2.5 rounded-md mt-6 text-[15px]">
          Start Project →
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
