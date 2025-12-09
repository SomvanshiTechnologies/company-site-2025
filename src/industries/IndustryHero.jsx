import React, { useState, useEffect } from "react";
import heroBg from "../assets/industries/industry-hero.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedBackground from "../ui/AnimatedBackground";

export default function IndustryHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 3);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[400px] mt-12 sm:mt-17 mb-0 z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 overflow-hidden">
      <AnimatedBackground />

      {/* Background Image */}
      <img
        src={heroBg}
        alt="Industry Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[320px] flex items-center">
          <div className="max-w-[640px] lg:max-w-[700px]">

            {/* p Animation */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-white/80 text-sm sm:text-base mb-3"
            >
              AI That Drives Real Business Breakthroughs
            </motion.p>

            {/* h2 Animation */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
              className="text-white text-3xl sm:text-3xl md:text-3xl font-semibold leading-tight"
            >
              Accelerating Intelligent Transformation with
              <br />
              <span className="block">AI-Powered Innovation</span>
            </motion.h2>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              className="mt-6"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-5 py-3 bg-primary hover:bg-primary text-white font-medium rounded-md shadow-sm transition"
                aria-label="Start Project"
              >
                <span>Start Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
