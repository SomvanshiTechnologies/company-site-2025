import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import sampleImg from "../assets/solutions/automation.png";
import purpleRing from "../assets/Small.svg";

export default function CallToAction() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cards = [
    {
      title: "Process Automation Workflow",
      desc: "Automate tasks, streamline operations, and reduce manual effort with intelligent workflow automation solutions.",
    },
    {
      title: "Intelligent Document Processing",
      desc: "Extract, classify, and analyze information from complex documents with AI-powered automation tools.",
    },
    {
      title: "Data Analytics & Optimization",
      desc: "Leverage real-time analytics to identify trends, optimize processes, and drive strategic business insights.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section id="aiTransformation" className="relative w-full bg-gradient-to-b from-[#F6F8FF] to-[#FBF6FB] py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
        
        {/* LEFT SECTION */}
        <div>
          <h1 className="text-[60px] md:text-[54px] lg:text-[72px] leading-tight font-extrabold text-[#1B2744]">
            Agentic <span className="text-[#3D86E6]">AI</span>
          </h1>

          <p className="text-[#56607A] mt-6 text-[17px] md:text-[18px] max-w-sm leading-relaxed">
            Automate repetitive tasks, optimize workflows, and enhance operational efficiency with enterprise-grade RPA solutions.
          </p>

          <button className="mt-10 inline-flex items-center gap-3 border border-[#3D86E6] text-[#3D86E6] px-5 py-3 rounded-lg font-medium text-[15px] hover:bg-[#3D86E6] hover:text-white transition-all duration-300 hover:shadow-lg">
            Get Started <ArrowRight size={18} />
          </button>
        </div>

        {/* RIGHT SECTION — CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {cards.map((card, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="relative w-full max-w-[300px] h-[340px] rounded-2xl overflow-hidden bg-white/60 backdrop-blur-sm border border-white/40 cursor-pointer group transition-all duration-200"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* BACKGROUND IMAGE */}
                <motion.img
                  src={sampleImg}
                  alt={card.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out ${
                    isHovered ? "scale-110 opacity-100" : "scale-100 opacity-70"
                  }`}
                />

                {/* GRADIENT OVERLAY */}
                <div
                  className={`absolute inset-0 transition-all duration-300 ${
                    isHovered
                      ? "bg-gradient-to-t from-[#3D86E6]/70 via-transparent to-transparent"
                      : "bg-gradient-to-t from-[#111]/40 via-transparent to-transparent"
                  }`}
                ></div>

                {/* TEXT LAYER */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 text-white pointer-events-none"
                  animate={{
                    y: isHovered ? -10 : 0,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                >
                  <h3
                    className={`text-[15px] font-bold mb-43 transition-colors duration-200 ${
                      isHovered ? "text-white" : "text-[#F2F2F2]"
                    }`}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <motion.p
                    className={`text-[14px] leading-relaxed transition-all duration-300 ${
                      isHovered ? "opacity-100 max-h-44" : "opacity-0 max-h-0"
                    }`}
                  >
                    {card.desc}
                  </motion.p>

                  {/* CTA BUTTON (always hoverable) */}
                  <motion.div
                    className={`mt-4 flex items-center gap-2 text-[14px] font-medium transition-all duration-200 ${
                      isHovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <button className="flex items-center gap-2 bg-white text-[#3D86E6] px-4 py-2 rounded-md font-semibold hover:bg-[#3D86E6] hover:text-white transition-all duration-300">
                      Learn More <ArrowRight size={16} />
                    </button>
                  </motion.div>
                </motion.div>

                {/* GLOW EFFECT */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border border-transparent pointer-events-none"
                  animate={{
                    boxShadow: isHovered
                      ? "0 0 35px rgba(61,134,230,0.45)"
                      : "0 0 0 rgba(0,0,0,0)",
                  }}
                  transition={{ duration: 0.25 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* DECORATIVE RING */}
      <img
        src={purpleRing}
        alt="ring"
        className="pointer-events-none absolute -left-10 w-48 md:w-56 opacity-100"
        aria-hidden
      />
    </section>
  );
}
