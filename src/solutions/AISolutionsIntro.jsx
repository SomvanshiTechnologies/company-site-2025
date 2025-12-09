// AISolutionsIntro.jsx
import React from "react";
import { ArrowRight } from "lucide-react";
import magicIcon from '../assets/solutions/magic-icon.svg';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate

const cards = [
  {
    title: "AI Automation",
    desc: "Empowering businesses with intelligent workflows, seamless system integration, and data-driven insights to improve efficiency, speed, and scalability.",
    slug: "ai-automation" // Added a slug for navigation
  },
  {
    title: "Website Chatbot",
    desc: "Delivering smart, conversational AI that enhances customer engagement, automates responses, and drives real-time support across your website.",
    slug: "website-chatbot" // Added a slug for navigation
  },
  {
    title: "Voice Agent",
    desc: "Transforming customer interactions with natural, human-like voice automation that streamlines support, reduces wait times, and improves service quality.",
    slug: "voice-agent" // Added a slug for navigation
  },
  {
    title: "AI Chatbot Platform", // Renamed for clarity since it was a duplicate
    desc: "Delivering smart, conversational AI that enhances customer engagement, automates responses, and drives real-time support across your website.",
    slug: "ai-chatbot-platform" // Added a slug for navigation
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", bounce: 0.3, duration: 0.6 }
  },
};

const AISolutionsIntro = () => {
  // 2. Initialize the navigation function
  const navigate = useNavigate();

  // Function to handle navigation for the main Contact button
  const handleContactClick = () => {
    navigate('/contact');
  };

  // Function to handle navigation for the View More buttons on the cards
  const handleViewMoreClick = (slug) => {
    // Assuming your solution detail pages are at /solutions/:slug
    navigate(`/solutions/${slug}`);
  };

  return (
    <section id="aiSolutions" className="relative flex flex-col items-center justify-center px-4 sm:px-8 py-4 pb-8 bg-white">
      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-20">
        {cards.map((item, index) => (
          <motion.div
            key={index}
            className="
              p-8 rounded-xl cursor-pointer bg-linear-to-br from-[#F0F8FF] via-[#F7F4FF] to-[#E6F6FF]
                hover:-translate-y-2 transition-all duration-300
            "
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.2 }}
            onClick={() => handleViewMoreClick(item.slug)} // 3. Add onClick to the card container
          >
            <div className="mb-6">
              <img
                src={magicIcon}
                alt="AI Icon"
                className="w-10 h-10"
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {item.title}
            </h3>

            <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
              {item.desc}
            </p>

            <motion.button
              className="flex items-center gap-2 text-[#3A76D2] font-medium text-[15px]"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
              // Note: You can also use onClick here, but clicking the whole card is often better UX
              // onClick={() => handleViewMoreClick(item.slug)} 
            >
              View More <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* CONTACT BUTTON */}
      <motion.div className="flex mt-12">
        <motion.button
          className="
            px-6 py-3 border border-primary rounded-lg text-primary
            font-medium flex gap-2
          "
          whileHover={{ scale: 1.05, backgroundColor: "#3A76D2", color: "#fff" }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={handleContactClick} // 4. Add onClick to the Contact button
        >
          Contact for Service <ArrowRight size={18} />
        </motion.button>
      </motion.div>      
    </section>
  );
};

export default AISolutionsIntro;