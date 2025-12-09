import magicIcon from "../assets/solutions/magic-icon.svg";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

function CapabilitiesImpact() {

   const cards = [
    {
      title: "Enhance Patient Engagement & Experience",
      desc: "Deliver personalized, 24/7 patient support through conversational AI, smart reminders, and multilingual communication that reduces wait times and improves satisfaction.",
    },
    {
      title: "Accelerate Clinical Decision-Making",
      desc: "Empower clinicians with AI-driven insights, automated triaging, and real-time data interpretation to improve diagnostic accuracy and treatment outcomes.",
    },
    {
      title: "Optimize Hospital Workflow Efficiency",
      desc: "Streamline scheduling, registration, claims, and documentation using AI + automation, reducing staff workload and improving care delivery speed.",
    },
    {
      title: "Strengthen Operational Agility & Compliance",
      desc: "Ensure secure, compliant operations through automated monitoring, standardized workflows, and seamless integration with EHR/EMR systems (HL7, FHIR, DICOM).",
    },
    {
      title: "Improve Diagnostic & Laboratory Accuracy",
      desc: "Leverage computer vision, predictive analytics, and automated error detection to speed up testing, minimize manual mistakes, and enhance lab efficiency.",
    },
    {
      title: "Reduce Cost & Risk Across Medical Supply Chains",
      desc: "Use predictive analytics and real-time visibility to manage inventory, prevent shortages, reduce wastage, and optimize procurement cycles.",
    },
  ];

  const cardVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.3, duration: 0.6 },
    },
  };
  
  return (
      <section className="w-full px-6 sm:px-12 py-16 bg-gradient-to-br from-[#F3F0FF] via-[#F8F5FF] to-[#EEF2FF]">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-[#1E1E4F] mb-12 ml-10">
          Capabilities & Impact
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cards.map((item, index) => (
            <motion.div
              key={index}
              className="
              bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)]
              hover:shadow-[0_8px_28px_rgba(0,0,0,0.10)]
              transform transition-all duration-300
            "
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* ICON */}
              <div className="mb-6">
                <img
                  src={magicIcon}
                  alt="Icon"
                  className="w-12 h-12 text-[#742FF3]"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-[20px] font-semibold text-[#1A1A3A] leading-snug mb-3">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[#4B4B70] text-[15px] leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* LINK */}
              <motion.button
                className="flex items-center gap-2 text-[#742FF3] font-semibold text-[15px]"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 260 }}
              >
                View More <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>
  )
}

export default CapabilitiesImpact