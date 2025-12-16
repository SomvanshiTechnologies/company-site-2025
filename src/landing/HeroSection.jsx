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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <AnimatedBackground />

      <div className="relative my-24 sm:my-32 lg:my-40 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
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
              className="font-gilroy font-black text-4xl md:text-6xl lg:text-7xl text-gray-900 mb-8 leading-[1.15] text-center lg:text-left"
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
              className="text-lg sm:text-xl text-gray-600 mb-12 sm:mb-14 max-w-xl leading-relaxed text-center lg:text-left"
              style={{ lineHeight: '1.8' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We help businesses grow using intelligent, scalable AI solutions
              that transform how global leaders operate, scale, and succeed.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="mb-14 sm:mb-16 flex flex-col sm:flex-row sm:flex-wrap items-center gap-4 sm:gap-5 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/contact"
                  className="bg-primary hover:bg-hover text-white px-10 py-4 rounded-lg font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
                >
                  Start your project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/solutions"
                  className="rounded-lg border border-gray-300 px-10 py-4 text-base font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Explore solutions
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
            <div className="relative bg-linear-to-br from-primary/10 to-primary/0 rounded-xl backdrop-blur-sm">
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
          className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mt-20 sm:mt-28 pt-12 sm:pt-16 border-t border-gray-200"
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
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
