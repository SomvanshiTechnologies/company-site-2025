import React from "react";
import { motion } from "framer-motion";
import docImg from "../assets/solutions/automation.png";
import leftImg from "../assets/solutions/dashboard.gif";

function ProcessSteps() {
  const cards = [
    {
      img: docImg,
      title: "Intelligent Document Processing",
      desc: "Automate data extraction and classification with AI-powered document processing to enhance accuracy and efficiency.",
      link: "#",
    },
    {
      img: docImg,
      title: "Workflow Automation",
      desc: "Optimize and digitize business operations with seamless end-to-end workflow automation solutions.",
      link: "#",
    },
    {
      img: docImg,
      title: "Data Analytics Automation",
      desc: "Leverage advanced analytics and automation to transform raw data into actionable business insights.",
      link: "#",
    },
  ];

  // Framer Motion variants for entrance
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 px-6 md:px-12 py-16 bg-gradient-to-b from-[#FFFFFF] to-[#F9F9FF] overflow-hidden">
      {/* LEFT SECTION */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full lg:w-[50%]"
      >
        <motion.img
          src={leftImg}
          alt="automation"
          className="rounded-xl w-full shadow-[0_10px_25px_rgba(0,0,0,0.08)]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.h2
          className="mt-8 text-[36px] md:text-[42px] font-semibold tracking-tight text-[#1C1C1C]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Robotics Process
          <br />
          <span className="text-[#6E7FF3]">Automation</span>
        </motion.h2>

        <motion.p
          className="mt-4 text-[#6F6F6F] text-[15px] md:text-[16px] leading-relaxed max-w-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Crafting high-performance web applications with modern front-end and
          back-end technologies to deliver secure, scalable, and business-ready
          digital solutions.
        </motion.p>
      </motion.div>

      {/* RIGHT SECTION */}
      <div className="flex flex-col gap-6 w-full lg:w-[50%]">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 10px 25px rgba(110,127,243,0.25)",
              backgroundColor: "#FFFFFF",
              transition: { duration: 0.3 },
            }}
            className="group relative flex items-center gap-4 p-5 rounded-xl bg-[#F7F7FF] cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Image */}
            <motion.img
              src={card.img}
              className="w-[35%] rounded-lg object-cover"
              alt={card.title}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />

            {/* Text */}
            <div className="flex-1">
              {/* Title */}
              <p className="text-[#1C1C1C] font-bold text-[16px] md:text-[17px]">
                {card.title}
              </p>

              {/* Description + Link (fade in on hover) */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="hidden group-hover:block mt-2"
              >
                <p className="text-[#6F6F6F] text-[14px] leading-snug max-w-sm">
                  {card.desc}
                </p>
                <a
                  href={card.link}
                  className="text-[#6E7FF3] text-[14px] font-medium mt-2 inline-block"
                >
                  View More →
                </a>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProcessSteps;
