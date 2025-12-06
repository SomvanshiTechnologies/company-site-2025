import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Herodashboard from "../assets/solutions/dashboard.gif";
import code1 from "../assets/solutions/Frame1.png";

export default function ServicesGrid() {
  const [heroSrc, setHeroSrc] = useState(Herodashboard);
  const [hovered, setHovered] = useState(null);

  const services = [
    { id: "01", title: "Custom Web App Development", hero: code1, thumb: code1 },
    { id: "02", title: "API & Microservices Development", hero: code1, thumb: code1 },
    { id: "03", title: "Mobile App (iOS & Android)", hero: code1, thumb: code1 },
    { id: "04", title: "Full-Stack Modernization & DevOps", hero: code1, thumb: code1 },
  ];

  return (
<div className="w-full bg-gradient-to-br from-[#7F3DFF] to-[#5C22FF]
 p-10 text-white overflow-hidden">
      {/* TOP HERO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
        <div>
          <h2 className="text-4xl font-semibold mb-4">Product Engineering</h2>
          <p className="text-lg max-w-md mb-6 text-white/80">
            Crafting high-performance applications with modern technologies.
          </p>
          <button className="flex items-center gap-2 text-white px-6 py-3 rounded-xl font-medium shadow hover:scale-105 transition-all border-2 border-white font-bold">
            Get Started <ArrowRight size={18} />
          </button>

        </div>

        <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
          <img src={heroSrc} className="w-full h-full object-cover" alt="Hero" />
        </div>
      </div>

      {/* EXPANDING CARD ROW */}
      <div className="flex flex-nowrap justify-center gap-6">
        {services.map((service, index) => {
          const isHovered = hovered === index;
          const collapsed = 260;
          const expanded = 380;

          return (
            <div
              key={service.id}
              className="relative transition-all duration-300 ease-out cursor-pointer flex-shrink-0"
              onMouseEnter={() => {
                setHovered(index);
                setHeroSrc(service.hero);
              }}
              onMouseLeave={() => {
                setHovered(null);
                setHeroSrc(Herodashboard);
              }}
              style={{ width: isHovered ? expanded : collapsed, height: "210px" }}
            >
              {/* CARD BODY */}
              <div className="p-6 rounded-xl border border-black/30 bg-white h-full flex items-center justify-between relative z-10 overflow-hidden">
                
                {/* LEFT TEXT SIDE */}
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="text-2xl font-bold text-[#183058] mb-3">{service.id}</div> 
                    <h3 className="text-lg w-40 font-medium leading-snug text-[#183058]">{service.title}</h3>
                  </div>

                  <button className="flex items-center gap-2 font-medium text-[#183058]/95 hover:text-[#183058] transition-all duration-300 mt-auto text-sm">
                  <span><u>View More</u></span>
                  <ArrowRight size={15} className="transition-transform duration-300" />
                  </button>
                </div>

                {/* IMAGE - only visible on hover */}
                <div
                  className={`absolute right-6 top-1/2 -translate-y-1/2 w-40 h-28 rounded-lg overflow-hidden shadow-lg transition-all duration-500 ease-out
                    ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 pointer-events-none"}
                  `}
                >
                  <img
                    src={service.thumb}
                    className="w-full h-full object-cover object-center"
                    alt={service.title}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
