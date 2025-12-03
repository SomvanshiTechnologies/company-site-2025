import React from "react";
import docImg from "../assets/solutions/automation.png";
import leftImg from '../assets/solutions/hero-dashboard.png';


function ProcessSteps() {
  return (
    <div className="w-full flex gap-8 px-12 py-10">

      {/* LEFT SECTION */}
      <div className="w-[50%]">
        <img
          src={leftImg}
          alt="automation"
          className="rounded-xl w-full"
        />

        <h2 className="mt-8 text-[36px] font-semibold tracking-tight text-[#1C1C1C]">
          Robotics Process
          <br />
          <span className="text-[#6E7FF3]">Automation</span>
        </h2>

        <p className="mt-4 text-[#6F6F6F] text-[15px] leading-relaxed max-w-md">
          Crafting high-performance web applications with modern front-end and back-end
          technologies to deliver secure, scalable, and business-ready digital solutions.
        </p>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex flex-col gap-6 w-[50%]">

        {/* CARD 1 */}
        <div className="flex items-center gap-4 p-4 rounded-xl bg-[#F7F7FF] hover:bg-[#ECECFE] transition-all cursor-pointer shadow-sm hover:shadow-md">
          <img src={docImg} className="w-[35%] rounded-lg" alt="" />
          <p className="text-[#1C1C1C] font-semibold text-[16px]">
            Intelligent Document Processing
          </p>
        </div>

        {/* CARD 2 */}
        <div className="flex items-center gap-4 p-4 rounded-xl bg-[#F7F7FF] hover:bg-[#ECECFE] transition-all cursor-pointer shadow-sm hover:shadow-md">
          <img src={docImg} className="w-[35%] rounded-lg" alt="" />
          <p className="text-[#1C1C1C] font-semibold text-[16px]">
            Intelligent Document Processing
          </p>
        </div>

        {/* CARD 3 */}
        <div className="flex items-center gap-4 p-4 rounded-xl bg-[#F7F7FF] hover:bg-[#ECECFE] transition-all cursor-pointer shadow-sm hover:shadow-md">
          <img src={docImg} className="w-[35%] rounded-lg" alt="" />
          <p className="text-[#1C1C1C] font-semibold text-[16px]">
            Intelligent Document Processing
          </p>
        </div>

      </div>
    </div>
  );
}

export default ProcessSteps;
