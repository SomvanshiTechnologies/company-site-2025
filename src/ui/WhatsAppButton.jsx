import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaPhone, FaArrowUp } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppButton = () => {
  const [showMessage, setShowMessage] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowScrollTop(true);
      else setShowScrollTop(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCallClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "call_button_click", {
        event_category: "engagement",
        event_label: "call_button",
        value: 1,
      });
    }
  };

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "whatsapp_button_click", {
        event_category: "engagement",
        event_label: "whatsapp_button",
        value: 1,
      });
    }
  };

  return (
    <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 flex items-center space-x-3">
  <AnimatePresence>
    {showMessage && (
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5 }}
        className="bg-white text-black border text-xs md:text-sm px-3 py-1 rounded-md shadow-lg text-center"
      >
        Connect with us on <br /> call or WhatsApp
      </motion.div>
    )}
  </AnimatePresence>

  <motion.a
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 50 }}
    transition={{ duration: 0.5, delay: 0.7 }}
    className="bg-primary text-white text-2xl md:text-3xl border-4 border-white rounded-full p-3 shadow-lg hover:shadow-blue-200 hover:bg-blue-400 transition duration-300"
    href="tel:+919637507575"
    title="Call us at +91 96375 07575"
    onClick={handleCallClick}
  >
    <FaPhone />
  </motion.a>

  <motion.a
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 50 }}
    transition={{ duration: 0.5, delay: 0.9 }}
    className="bg-green-500 text-white text-2xl md:text-3xl rounded-full p-3 shadow-lg hover:shadow-green-500 border-4 border-white hover:bg-green-600 transition duration-300"
    href="https://wa.me/9637507575?text=Hello%20Somvanshi%20Technologies%2C%0AI%E2%80%99m%20interested%20in%20your%20services%20and%20would%20like%20to%20know%20more.%20Could%20someone%20from%20your%20team%20please%20assist%20me%3F"
    target="_blank"
    rel="noopener noreferrer"
    onClick={handleWhatsAppClick}
  >
    <FaWhatsapp />
  </motion.a>

  {/* Scroll to Top Button - separate div for smooth positioning */}
  <div className="absolute -top-16 right-0">
    <AnimatePresence>
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          onClick={handleScrollToTop}
          className="bg-blue-600 text-white text-xl md:text-2xl rounded-full p-2 md:p-3 shadow-lg hover:bg-blue-700 border-2 border-white transition duration-300"
          title="Scroll to top"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  </div>
</div>

  );
};

export default WhatsAppButton;
