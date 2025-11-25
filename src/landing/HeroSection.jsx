import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { FaShieldAlt, FaLightbulb, FaClock } from "react-icons/fa";
import AnimatedBackground from "../ui/AnimatedBackground";

const featureTags = [
  { text: 'Intelligent Systems', icon: FaShieldAlt },
  { text: 'Transformative Systems', icon: FaLightbulb },
  { text: 'Impactful Systems', icon: FaClock },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-gray-50 via-white to-gray-50">
      <AnimatedBackground />

      <div className="relative my-12 sm:my-24 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <motion.div
                className="inline-flex items-center gap-2 text-primary font-semibold bg-white border border-primary px-4 py-2 rounded-full text-xs sm:text-sm mb-6 sm:mb-8 mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Sparkles className="w-3 h-3" />
                Trusted by 50+ Global Enterprises
              </motion.div>
            </div>

            {/* Main Heading */}
            <motion.h1
              className="font-gilroy font-extrabold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-primary">Engineering intelligent</span>
              <br />
              systems for a
              <br />
              <span className="text-primary">smarter world.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl leading-relaxed text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We help businesses grow using intelligent, scalable AI solutions
              that transform how global leaders operate, scale, and succeed.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="mb-10 sm:mb-12 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/solutions"
                  className="rounded-lg border-2 border-primary px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-primary hover:bg-blue-50 transition-all duration-300 text-center inline-flex items-center justify-center gap-2"
                >
                  Explore our solutions
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="bg-primary hover:bg-hover text-white px-6 py-3 sm:px-8 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center justify-center gap-2"
                >
                  Start your project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {featureTags.map((tag) => {
                const Icon = tag.icon;
                return (
                  <div key={tag.text} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-primary" />
                    {tag.text}
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Content - Hero Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Main Hero Image */}
            <div className="relative bg-linear-to-br from-primary/10 to-primary/0 rounded-2xl p-6 backdrop-blur-sm border border-primary/20">
              <img
                src={'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1600'}
                alt="Modern IT office with developers working on intelligent systems"
                className="h-[400px] w-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { number: "50+", label: "Global Clients" },
            { number: "10M+", label: "Hours Saved" },
            { number: "2", label: "Countries" },
            { number: "99.9%", label: "Uptime" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
