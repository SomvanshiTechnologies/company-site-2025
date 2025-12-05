import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
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

  // Card entrance animation
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#F6F8FF] to-[#FBF6FB] py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
        
        {/* LEFT CONTENT */}
        <div className="ml-0 lg:ml-[-30px] order-1 lg:order-1">
          <h1 className="text-[66px] md:text-[54px] lg:text-[72px] leading-tight font-extrabold text-[#1B2744]">
            Agentic <span className="text-[#3D86E6]">AI</span>
          </h1>

          <p className="text-[#56607A] mt-6 text-[17px] md:text-[18px] max-w-sm leading-relaxed">
            Automate repetitive tasks, optimize workflows, and enhance operational
            efficiency with enterprise-grade RPA solutions.
          </p>

          <button
            className="mt-10 inline-flex items-center gap-3 border border-[#3D86E6] text-[#3D86E6] px-5 py-3 rounded-lg font-medium text-[15px] hover:bg-[#3D86E6] hover:text-white transition"
          >
            Get Started <ArrowRight size={18} />
          </button>
        </div>

        {/* RIGHT: INLINE 3 CARDS */}
        <div className="order-2 lg:order-2 w-190">
          <div className="flex justify-between gap-6 ml-0">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 12px 25px rgba(61,134,230,0.25)",
                  transition: { duration: 0.3 },
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 flex-shrink-0 w-[30%] h-[340px] ${
                  hoveredIndex === index ? "bg-white" : "bg-transparent"
                }`}
              >
                {/* Default state with image */}
                {hoveredIndex !== index && (
                  <>
                    <motion.img
                      src={sampleImg}
                      alt={card.title}
                      className="w-full h-full object-cover block"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-[rgba(21,30,57,0.42)]"></div>
                    <div className="absolute top-6 left-5 right-6 text-white">
                      <div className="flex items-center justify-between">
                        <h3 className="text-[17px] font-semibold leading-snug">
                          {card.title}
                        </h3>
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>
                  </>
                )}

                {/* Hover state */}
                {hoveredIndex === index && (
                  <motion.div
                    className="p-6 h-full flex flex-col justify-between text-[#1B2744]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-[17px] font-semibold leading-snug">
                          {card.title}
                        </h3>
                        <ChevronUp className="w-5 h-5 text-[#1B2744]" />
                      </div>
                      <p className="mt-3 text-[14px] text-[#56607A] leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* PURPLE RING DECORATION */}
      <img
        src={purpleRing}
        alt="ring"
        className="pointer-events-none absolute -left-10 w-48 md:w-56 opacity-100"
        aria-hidden
      />
    </section>
  );
}
