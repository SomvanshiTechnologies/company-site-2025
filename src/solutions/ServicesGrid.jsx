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
    <div className="w-full bg-gradient-to-br from-purple-600 to-indigo-700 p-10 text-white">

      {/* TOP HERO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center mb-12">
        <div>
          <h2 className="text-4xl font-semibold mb-4">Product Engineering</h2>
          <p className="text-lg max-w-md mb-6 opacity-90">
            Crafting high-performance applications with modern technologies.
          </p>
          <button className="flex items-center gap-2 bg-white text-purple-700 px-6 py-3 rounded-xl font-medium shadow hover:scale-105 transition-all">
            Get Started <ArrowRight size={18} />
          </button>
        </div>

        <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
          <img src={heroSrc} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* EXPANDING CARD ROW */}
      <div className="flex gap-2 overflow-hidden relative">
        {services.map((service, index) => {
          const isHovered = hovered === index;

          const collapsed = 280;
          const expanded = 350;

          return (
            <div
              key={service.id}
              className="relative flex-shrink-0 transition-all duration-300 ease-out cursor-pointer"
              onMouseEnter={() => {
                setHovered(index);
                setHeroSrc(service.hero);
              }}
              onMouseLeave={() => {
                setHovered(null);
                setHeroSrc(Herodashboard);
              }}
              style={{ width: isHovered ? expanded : collapsed }}
            >
              {/* CARD BACKGROUND */}
              <div className="p-2 rounded-xl border border-white/40 bg-white/5 h-full flex flex-col justify-between relative z-10">
                <div className="w-30 pointer-events-none">
                  <div className="text-2xl font-bold text-white/80 mb-4">
                    {service.id}
                  </div>
                  <h3 className="text-xl font-medium leading-snug mb-4">
                    {service.title}
                  </h3>
                </div>

                <button className="flex items-center gap-2 font-medium text-white/70 hover:text-white transition-all duration-300 pointer-events-auto">
                  View More
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 hover:translate-x-1"
                  />
                </button>
              </div>

              {/* THUMB IMAGE */}
              <div
                className={`absolute right-3 top-1/2 -translate-y-1/2 w-44 h-32 rounded-lg overflow-hidden shadow-lg transition-all duration-300
                  ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
                `}
              >
                <img src={service.thumb} className="w-full h-full object-cover" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
