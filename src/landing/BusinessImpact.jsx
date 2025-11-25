import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import bgimg from '../assets/bgimg.png';
import rocket from '../assets/rocket.png';

const impactData = [
  {
    title: 'Ways AI is Transforming Customer Support',
    description: 'With conversational AI platform, our clients reduced response time by 60% while improving customer satisfaction scores......',
    linkText: 'Check',
  },
  {
    title: 'AI-Driven Process Automation for Business Efficiency',
    description: 'Somvanshi\'s AI automation suite helped clients eliminate repetitive manual tasks, cutting operational costs by up to 40%......',
    linkText: 'Check',
  },
  {
    title: 'Ways AI is Transforming Customer Support',
    description: 'Write an amazing......',
    linkText: 'Check',
  }
];

const BusinessImpact = () => {
  const sectionRef = useRef(null);

  // Framer Motion scroll tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"] // Start when section enters viewport, end when it leaves
  });

  // ========== CUSTOMIZABLE ENGINE POSITIONS ==========
  const leftEnginePosition = -80;
  const rightEnginePosition = 40;
  // ===================================================

  // Transform scroll progress to rocket position
  // Start from bottom (20% below viewport) and move to top (flies away at -120%)
  const rocketY = useTransform(scrollYProgress, [0, 1], ["120%", "-120%"]);

  // Clouds parallax effect (slower movement)
  const cloudY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  // Exhaust opacity and intensity
  const exhaustOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8], [0, 1, 1]);

  // Brightness increases as rocket accelerates
  const brightness = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  // Glow intensity
  const glowIntensity = useTransform(scrollYProgress, [0, 1], [20, 60]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  // Speed lines visibility
  const speedLinesOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [0, 0, 1]);

  // Particles visibility
  const particlesOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [0, 1, 0]);

  return (
    <section ref={sectionRef} className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Main two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* --- Left Column: Text Content --- */}
          <div className="bg-gradient-soft p-8 sm:p-10 lg:p-12 rounded-lg shadow-lg">

            {/* Section Header */}
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold mb-6">
              <span className="text-primary">Business</span>
              <span className="text-text"> Impact and </span>
              <span className="text-primary">Growth</span>
              <span className="text-text"> of clients</span>
            </h2>

            {/* Items List */}
            <div className="space-y-6">
              {impactData.map((item, index) => (
                <div key={index}>
                  {/* Add a separator before each item except the first one */}
                  {index > 0 && <hr className="border-gray-300/70 my-6" />}

                  <h3 className="font-heading text-xl font-semibold text-text mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-gray-600 mb-3">
                    {item.description}
                  </p>
                  <a href="#" className="font-body font-medium text-primary hover:opacity-80">
                    {item.linkText}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* --- Right Column: Rocket Launch Animation --- */}
          <div className="relative flex items-center justify-center min-h-[550px] overflow-hidden rounded-lg shadow-lg">
            {/* Background Image */}
            <img
              src={bgimg}
              alt="Space background"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Animated Clouds Layer - Moving Down with Parallax */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{ y: cloudY }}
            >
              {/* Cloud 1 - Top Left */}
              <motion.div
                className="absolute top-[10%] left-[10%] w-32 h-16 bg-white/40 rounded-full blur-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Cloud 2 - Top Right */}
              <motion.div
                className="absolute top-[15%] right-[15%] w-40 h-20 bg-white/30 rounded-full blur-xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />

              {/* Cloud 3 - Middle Left */}
              <motion.div
                className="absolute top-[40%] left-[5%] w-36 h-18 bg-white/35 rounded-full blur-xl"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />

              {/* Cloud 4 - Middle Right */}
              <motion.div
                className="absolute top-[50%] right-[10%] w-28 h-14 bg-white/40 rounded-full blur-xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
              />
            </motion.div>

            {/* Rocket Exhaust/Fire Trail - Appears as rocket launches - TWO ENGINES */}
            <motion.div
              className="absolute inset-0 flex items-end justify-center pb-8 pointer-events-none"
              style={{
                y: rocketY,
                opacity: exhaustOpacity
              }}
            >
              {/* Left Engine Exhaust */}
              <div className="absolute bottom-0 left-1/2 w-16 h-32" style={{ transform: `translateX(${leftEnginePosition}%)` }}>
                {/* Bright inner flame */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-20 rounded-full blur-md"
                  style={{
                    background: 'linear-gradient(to top, #ff6b00, #ffaa00, transparent)',
                    animation: 'flicker 0.15s ease-in-out infinite'
                  }}
                ></div>
                {/* Outer flame glow */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-24 rounded-full blur-lg"
                  style={{
                    background: 'linear-gradient(to top, #ff0000, #ff6b00, transparent)',
                    animation: 'flicker 0.2s ease-in-out infinite 0.1s'
                  }}
                ></div>
                {/* Smoke trail */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-40 rounded-full blur-2xl opacity-60"
                  style={{
                    background: 'linear-gradient(to top, #ffffff, #cccccc, transparent)',
                    animation: 'smoke 1s ease-out infinite'
                  }}
                ></div>
              </div>

              {/* Right Engine Exhaust */}
              <div className="absolute bottom-0 left-1/2 w-16 h-32" style={{ transform: `translateX(${rightEnginePosition}%)` }}>
                {/* Bright inner flame */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-20 rounded-full blur-md"
                  style={{
                    background: 'linear-gradient(to top, #ff6b00, #ffaa00, transparent)',
                    animation: 'flicker 0.15s ease-in-out infinite 0.05s'
                  }}
                ></div>
                {/* Outer flame glow */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-24 rounded-full blur-lg"
                  style={{
                    background: 'linear-gradient(to top, #ff0000, #ff6b00, transparent)',
                    animation: 'flicker 0.2s ease-in-out infinite 0.15s'
                  }}
                ></div>
                {/* Smoke trail */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-40 rounded-full blur-2xl opacity-60"
                  style={{
                    background: 'linear-gradient(to top, #ffffff, #cccccc, transparent)',
                    animation: 'smoke 1s ease-out infinite 0.3s'
                  }}
                ></div>
              </div>

            </motion.div>

            {/* Rocket Image with Launch Animation */}
            <motion.div
              className="absolute inset-0 flex items-end justify-center pb-8"
              style={{ y: rocketY }}
            >
              <motion.img
                src={rocket}
                alt="Rocket launching into space, symbolizing business growth"
                className="relative w-3/5 sm:w-1/2 lg:w-3/5 h-auto object-contain z-10"
                style={{
                  filter: brightness
                }}
                animate={{
                  x: [0, -1, 1, -1, 0]
                }}
                transition={{
                  duration: 0.15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Left Engine Glow Effect */}
              <motion.div
                className="absolute bottom-0 left-1/2 w-40 h-40 rounded-full blur-3xl -z-10"
                style={{
                  transform: `translateX(${leftEnginePosition}%)`,
                  opacity: exhaustOpacity
                }}
              >
                <div className="w-full h-full bg-orange-500 opacity-60 rounded-full" />
              </motion.div>

              {/* Right Engine Glow Effect */}
              <motion.div
                className="absolute bottom-0 left-1/2 w-40 h-40 rounded-full blur-3xl -z-10"
                style={{
                  transform: `translateX(${rightEnginePosition}%)`,
                  opacity: exhaustOpacity
                }}
              >
                <div className="w-full h-full bg-orange-500 opacity-60 rounded-full" />
              </motion.div>
            </motion.div>

            {/* Speed Lines Effect - Appears as rocket gains speed */}
            <motion.div
              className="absolute inset-0 pointer-events-none overflow-hidden"
              style={{ opacity: speedLinesOpacity }}
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 bg-white/30 blur-sm"
                  style={{
                    left: `${15 + i * 12}%`,
                    top: `${i * 10}%`
                  }}
                  animate={{
                    height: ["60px", "210px"],
                    y: ["0%", "100%"]
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.1
                  }}
                />
              ))}
            </motion.div>

            {/* Particle Effect - Small debris/sparks as rocket accelerates */}
            <motion.div
              className="absolute inset-0 pointer-events-none overflow-hidden"
              style={{ opacity: particlesOpacity }}
            >
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-orange-400 rounded-full"
                  style={{
                    left: `${45 + Math.sin(i * 2) * 15}%`,
                    bottom: `${30 + i * 5}%`,
                    boxShadow: '0 0 4px rgba(255, 107, 0, 0.8)'
                  }}
                  animate={{
                    y: [0, -20],
                    scale: [1, 0.5],
                    opacity: [1, 0]
                  }}
                  transition={{
                    duration: 0.8 + i * 0.1,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: i * 0.05
                  }}
                />
              ))}
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default BusinessImpact;
