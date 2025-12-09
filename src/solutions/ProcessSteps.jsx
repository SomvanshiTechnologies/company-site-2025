import React from "react";
import docImg from "../assets/solutions/automation.png";
import leftImg from "../assets/solutions/dashboard.gif";

function ProcessSteps() {
  // Card data for right section
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

  return (
    <div id="rpAutomation" className="w-full flex gap-8 px-12 py-10">
      {/* LEFT SECTION */}
      <div className="w-[50%]">
        <img src={leftImg} alt="automation" className="rounded-xl w-full" />

        <h2 className="mt-8 text-[36px] font-semibold tracking-tight text-[#1C1C1C]">
          Robotics Process
          <br />
          <span className="text-[#6E7FF3]">Automation</span>
        </h2>

        <p className="mt-4 text-[#6F6F6F] text-[15px] leading-relaxed max-w-md">
          Crafting high-performance web applications with modern front-end and
          back-end technologies to deliver secure, scalable, and business-ready
          digital solutions.
        </p>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex flex-col gap-6 w-[50%]">
        {cards.map((card, i) => (
          <div
            key={i}
            className="group relative flex items-center gap-4 p-4 rounded-xl bg-[#F7F7FF] cursor-pointer shadow-sm hover:shadow-md"
          >
            {/* Image */}
            <img src={card.img} className="w-[35%] rounded-lg" alt={card.title} />

            {/* Text */}
            <div>
              {/* Title (always visible) */}
              <p className="text-[#1C1C1C] font-bold text-[16px]">
                {card.title}
              </p>

              {/* Description + Link (only visible on hover) */}
              <div className="hidden group-hover:block mt-2">
                <p className="text-[#6F6F6F] text-[14px] leading-snug max-w-sm">
                  {card.desc}
                </p>
                <a
                  href={card.link}
                  className="text-[#6E7FF3] text-[14px] font-medium mt-2 inline-block"
                >
                  View More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProcessSteps;
