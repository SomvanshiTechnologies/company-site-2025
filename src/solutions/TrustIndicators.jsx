import React from "react";
import iconPurple from "../assets/solutions/magic-icon.svg"; 

export default function TrustIndicators() {
  const cards = [
    {
      title: "Security Measures",
      desc: "In an era where data breaches and cyber threats loom large, our commitment to your security is unwavering. protocols multi factor authentication remains protected at all times.",
    },
    {
      title: "Customer Support",
      desc: "Our dedicated customer support team is here to assist every need help troubleshooting an issue, or simply want to provide feedback, we're here to listen and provide timely assistance.",
    },
    {
      title: "Trusted Partner",
      desc: "As your trusted partner, we prioritize success and satisfaction above all else. With a commitment to integrity, reliability, and excellence, we strive to exceed your expectations at every turn.",
    },
    {
      title: "Speed and Reliability",
      desc: "Experience the unparalleled combination of speed reliability with our cutting-edge technology. Our platform is engineered to deliver performance uninterrupted service.",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24">
      {/* Heading */}
      <div className="text-left mb-12">
        <h2 className="text-[42px] md:text-[48px] font-extrabold text-[#1B2744] leading-tight">
          Why Businesses Trust
        </h2>
        <h3 className="text-[42px] md:text-[48px] font-extrabold text-[#3A86E9] leading-tight mt-1">
          Our Technology Solutions
        </h3>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {cards.map((item, index) => (
          <div
            key={index}
            className="
              bg-gradient-to-br from-[#F7F9FE] via-[#FBF7FF] to-[#ECF8FF]
              p-10 rounded-xl shadow-sm cursor-pointer
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-xl
            "
          >
            {/* Icon */}
            <img
              src={iconPurple}
              alt="icon"
              className="w-10 h-10 mb-5"
            />

            {/* Title */}
            <h4 className="text-[22px] md:text-[24px] font-semibold text-[#1B2744] mb-3">
              {item.title}
            </h4>

            {/* Description */}
            <p className="text-[#515D75] text-[15px] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}
