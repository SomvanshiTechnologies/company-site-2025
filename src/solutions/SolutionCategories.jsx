import React, { useState, useEffect, useRef } from "react";
import aisolutions from "../assets/solutions/ai-solutions.png";

const tabs = [
  { label: "AI Solutions", target: "aiSolutions" },
  { label: "Product Engineering", target: "pdEngg" },
  { label: "Robotics Process Automation", target: "rpAutomation" },
  { label: "AI Transformation", target: "aiTransformation" },
  { label: "Cloud Solutions", target: "cloudSolutions" },
];

export default function SolutionCategories() {
  const [active, setActive] = useState("AI Solutions");
  const [isSticky, setIsSticky] = useState(false);
  const menuRef = useRef(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const originalTop = menuRef.current.offsetTop;

    const handleScroll = () => {
      setIsSticky(window.scrollY >= originalTop - 65);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    /* -------------------- Scroll Spy Logic -------------------- */
    useEffect(() => {
      const sections = tabs.map((tab) => document.getElementById(tab.target));
  
      const handleScrollSpy = () => {
        sections.forEach((sec, index) => {
          if (!sec) return;
  
          const rect = sec.getBoundingClientRect();
  
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(tabs[index].label);
          }
        });
      };
  
      window.addEventListener("scroll", handleScrollSpy);
      return () => window.removeEventListener("scroll", handleScrollSpy);
    }, []);

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={menuRef}
        className={`w-full bg-white transition-all ${ isSticky ? "fixed top-[65px] z-50 shadow-md" : ""}`}
        style={{ top: isSticky ? "60px" : "auto" }}
      >
        <div className="max-w-7xl ml-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex  gap-6 overflow-x-auto no-scrollbar py-4">
            {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => {
                setActive(tab.label);
                scrollToSection(tab.target);
              }}
              className={`relative pb-2 text-sm font-medium whitespace-nowrap transition ${
                active === tab.label
                  ? "text-primary"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {tab.label}

              {active === tab.label && (
                <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-primary rounded-full"></span>
              )}
            </button>
          ))}
          </div>
        </div>
      </div>

      {/* ====================== HERO SECTION ====================== */}
      <div className="px-4 sm:px-6 lg:px-12 pt-8 max-w-7xl mx-auto">
        <div
          className="w-full h-[340px] rounded-xl overflow-hidden bg-cover bg-center flex items-end p-6 sm:p-10"
          style={{
            backgroundImage: `url(${aisolutions})`,
          }}
        >
          <div className="text-white max-w-[450px]">
            <p className="text-sm opacity-80">
              AI That Drives Real Business Breakthroughs
            </p>
            <h2 className="text-3xl font-semibold leading-tight mt-1">
              Accelerating Intelligent Transformation with AI-Powered <br />
              Innovation
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
