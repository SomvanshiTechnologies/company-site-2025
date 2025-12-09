import React, { useState, useEffect, useRef } from "react";

const tabs = [
  { label: "Life Sciences & Healthcare", target: "life-sciences" },
  { label: "Edtech", target: "edtech" },
  { label: "Supply Chain & Logistics", target: "supply-chain" },
  { label: "BFSI", target: "bfsi" },
  { label: "Real Estate", target: "real-estate" },
];

export default function IndustryMenu() {
  const [active, setActive] = useState("Life Sciences & Healthcare");
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

  return (
    <div
      ref={menuRef}
      className={`w-full bg-white transition-all ${
        isSticky ? "fixed top-[60px] z-50" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-4">
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
  );
}
