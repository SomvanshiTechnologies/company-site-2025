import React, { useState } from "react";

const tabs = [
  { label: "Life Sciences & Healthcare", target: "life-sciences" },
  { label: "Edtech", target: "edtech" },
  { label: "Supply Chain & Logistics", target: "supply-chain" },
  { label: "BFSI", target: "bfsi" },
  { label: "Real Estate", target: "real-estate" },
];

export default function IndustryMenu() {
  const [active, setActive] = useState("Life Sciences & Healthcare");

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full bg-white sticky top-0 z-50 ml-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-4">

          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => {
                setActive(tab.label);
                scrollToSection(tab.target);
              }}
              className={`relative pb-2 text-sm font-medium whitespace-nowrap transition
                ${active === tab.label ? "text-blue-600" : "text-gray-600 hover:text-black"}`}
            >
              {tab.label}

              {active === tab.label && (
                <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-blue-600 rounded-full"></span>
              )}
            </button>
          ))}

        </div>
      </div>
    </div>
  );
}

