// AISolutionsIntro.jsx
import React from "react";
import { ArrowRight } from "lucide-react";
import magicIcon from '../assets/solutions/magic-icon.svg';

const cards = [
  {
    title: "AI Automation",
    desc: "Empowering businesses with intelligent workflows, seamless system integration, and data-driven insights to improve efficiency, speed, and scalability.",
  },
  {
    title: "Website Chatbot",
    desc: "Delivering smart, conversational AI that enhances customer engagement, automates responses, and drives real-time support across your website.",
  },
  {
    title: "Voice Agent",
    desc: "Transforming customer interactions with natural, human-like voice automation that streamlines support, reduces wait times, and improves service quality.",
  },
  {
    title: "Website Chatbot",
    desc: "Delivering smart, conversational AI that enhances customer engagement, automates responses, and drives real-time support across your website.",
  },
];

const AISolutionsIntro = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 sm:px-8 py-4 pb-8 bg-white">
      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {cards.map((item, index) => (
          <div
            key={index}
            className="
              p-8 rounded-xl cursor-pointer transition-all duration-300
              bg-gradient-to-br from-[#F0F8FF] via-[#F7F4FF] to-[#E6F6FF]
              hover:shadow-xl hover:-translate-y-1
            "
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

            <button className="flex items-center gap-2 text-[#3A76D2] font-medium text-[15px]">
              View More <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* CONTACT BUTTON */}
      <div className="flex mt-12">
        <button
          className="
          px-6 py-3 border border-primary rounded-lg text-primary
          font-medium flex gap-2 hover:bg-primary hover:text-white transition
        "
        >
          Contact for Service <ArrowRight size={18} />
        </button>
      </div>      
    </section>
  );
};

export default AISolutionsIntro;
