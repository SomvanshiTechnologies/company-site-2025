import magicIcon from "../assets/solutions/magic-icon.svg";
import { motion } from "framer-motion";
import React, { useState } from "react";
import code1 from "../assets/solutions/Frame1.png";
import heroBg from "../assets/industries/hero.png";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function RealEstateShowcase() {
  const [hovered, setHovered] = useState(null);

  const services = [
    {
      id: "01",
      title: "Conversational AI for Patient Engagement",
      thumb: code1,
    },
    {
      id: "02",
      title: "AI-Driven Clinical & Operational Efficiency",
      thumb: code1,
    },
    { id: "03", title: "Intelligent Hospital Automation", thumb: code1 },
  ];

  return (
    <>
      {/* =========================
          HERO SECTION (Real-estate)
      ========================== */}
      <section id="real-estate" className="relative w-full h-[480px] pt-24">
        {/* Background Image */}
        <img
          src={heroBg}
          alt="Industry Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-white text-4xl font-bold mb-4"
            >
              Real Estate
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-white/90 text-base leading-relaxed"
            >
              Implement an AI-driven and patient-centric approach to
              revolutionize care delivery. Improve clinical outcomes,
              operational efficiency, and patient trust with a new level of
              precision medicine, predictive analytics, and intelligent
              automation.
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-5 py-3 bg-white text-primary font-medium rounded-md shadow-md
                           transition-all duration-300 hover:shadow-lg hover:scale-[1.03]"
              >
                Read More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================
          SOLUTIONS SECTION
      ========================== */}
      <section
        id="life-sciences"
        className="bg-[#5A11EE] w-full py-20 text-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Row */}
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold">
              Solutions in Real Estate
            </h2>

            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="bg-white text-[#5A11EE] px-2 py-1 rounded-full text-sm font-semibold">
                ➜
              </span>
              <span className="text-sm font-medium">Healthcare</span>
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-nowrap items-center gap-6 overflow-x-auto">
            {services.map((service, index) => {
              const isHovered = hovered === index;

              return (
                <div
                  key={service.id}
                  className="relative transition-all duration-300 ease-out cursor-pointer flex-shrink-0"
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    width: isHovered ? 430 : 300,
                    height: "260px",
                  }}
                >
                  <div className="p-6 rounded-xl border border-black/20 bg-white h-full flex relative overflow-hidden">
                    {/* TEXT */}
                    <div className="flex flex-col h-full w-full">
                      <div>
                        <div className="text-4xl font-bold text-[#183058] mb-10">
                          {service.id}
                        </div>
                        <h2 className="w-45 text-xl font-bold font-medium leading-snug text-[#183058]">
                          {service.title}
                        </h2>
                      </div>
                      <button className="flex items-center gap-2 font-medium text-[#183058]/95 hover:text-[#183058] transition-all duration-300 mt-auto text-sm">
                        <span>
                          <u>View More</u>
                        </span>
                        <ArrowRight
                          size={15}
                          className="transition-transform duration-300"
                        />
                      </button>
                    </div>

                    {/* IMAGE */}
                    <div
                      className={`absolute right-6 top-1/2 -translate-y-1/2 w-48 h-32 rounded-lg overflow-hidden shadow-lg transition-all duration-500
                        ${
                          isHovered
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-8"
                        }
                      `}
                    >
                      <img
                        src={service.thumb}
                        className="w-full h-full object-cover"
                        alt={service.title}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
