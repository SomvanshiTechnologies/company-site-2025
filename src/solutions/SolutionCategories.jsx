import React, { useState, useRef, useEffect } from "react";
import aisolutions from '../assets/solutions/ai-solutions.png';

const SolutionCategories = ({ scrollToSection }) => {

  const [categories] = useState([
    { id: 1, name: "AI Solutions" },
    { id: 2, name: "Product Engineering" },
    { id: 3, name: "Robotics Process Automation" },
    { id: 4, name: "AI Transformation" },
    { id: 5, name: "Cloud Solutions" },
  ]);

  // Placeholder for indicator (optional — can be removed if not needed)
  const tabRefs = useRef([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    window.addEventListener("resize", () => updateIndicator(0));
    return () => window.removeEventListener("resize", () => updateIndicator(0));
  }, []);

  const updateIndicator = (index) => {
    const current = tabRefs.current[index];
    if (current) {
      setIndicatorStyle({
        left: current.offsetLeft,
        width: current.offsetWidth,
      });
    }
  };

  const handleTabClick = (index) => {
    scrollToSection(index);
    updateIndicator(index);
  };

  useEffect(() => {
    updateIndicator(0); // Initialize indicator position on mount
  }, []);

  return (
    <section className="bg-white w-full pb-10">

      {/* ====================== TABS ====================== */}
      <div className="sticky top-20 w-full sm:w-[70%] mt-10 ml-20 relative overflow-hidden">
          {/* Full light blue bottom line */}
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-100"></div>

          <div className="flex justify-start sm:justify-between gap-x-4 sm:gap-x-6 overflow-x-auto scrollbar-hide px-2 sm:px-0" aria-label="Tabs">

            {categories.map((cat, index) => (
              <button
                key={cat.id}
                ref={(el) => (tabRefs.current[index] = el)}
                onClick={() => handleTabClick(index)}
                className="pb-2 text-sm font-medium text-gray-600 hover:text-black"
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* INDICATOR LINE */}
          <span
            className="absolute bottom-[-1px] h-[3px] bg-primary transition-all duration-300"
            style={indicatorStyle}
          />
        </div>

     

      {/* ====================== HERO SECTION ====================== */}
      <div className="px-[50px] pt-8">
        <div
          className="w-full h-[340px] rounded-xl overflow-hidden bg-cover bg-center flex items-end p-10"
          style={{
            backgroundImage: `url(${aisolutions})`,
          }}
        >
          <div className="text-white max-w-[450px]">
            <p className="text-sm opacity-80">AI That Drives Real Business Breakthroughs</p>
            <h2 className="text-3xl font-semibold leading-tight mt-1">
              Accelerating Intelligent Transformation with AI-Powered<br />Innovation
            </h2>
          </div>
        </div>
      </div>

    </section>
  );
};

export default SolutionCategories;
