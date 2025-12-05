import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import sampleImg from "../assets/solutions/automation.png"; 
import purpleRing from "../assets/Small.svg"; 

/**
 * Pixel-matched CallToAction section.
 */
export default function CallToAction() {
  return (
    <section className="w-full bg-gradient-to-b from-[#F6F8FF] to-[#FBF6FB] py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
        {/* LEFT: Title / Copy */}
        <div className="ml-0 lg:ml-[-30px] order-1 lg:order-1">
          <h1 className="text-[56px] md:text-[64px] lg:text-[72px] leading-tight font-extrabold text-[#1B2744]">
            Agentic <span className="text-[#3D86E6]">AI</span>
          </h1>

          <p className="text-[#56607A] mt-6 text-[17px] md:text-[18px] max-w-md leading-relaxed">
            Automate repetitive tasks, optimize workflows, and enhance operational
            efficiency with enterprise-grade RPA solutions.
          </p>

          <button
            className="mt-10 inline-flex items-center gap-3 border border-[#3D86E6] text-[#3D86E6] px-5 py-3 rounded-lg font-medium text-[15px] hover:bg-[#3D86E6] hover:text-white transition"
            aria-label="Get started"
          >
            Get Started <ArrowRight size={18} />
          </button>
        </div>

        {/* RIGHT: 3 Cards */}
        <div className="order-2 lg:order-2">
          <div className="flex flex-wrap gap-7 ml-10 ">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="relative rounded-xl overflow-hidden shadow-[0_6px_18px_rgba(26,32,64,0.06)]"
                style={{ minHeight: "340px", flex: "1 1 30%" }}
              >
                {/* image (cover) */}
                <img
                  src={sampleImg}
                  alt={`solution-${n}`}
                  className="w-full h-[340px] object-cover block"
                  draggable={false}
                />

                {/* dark overlay for the look  */}
                <div className="absolute inset-0 bg-[rgba(21,30,57,0.42)] pointer-events-none" />
                <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between text-white">
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* purple ring */}
      <img
        src={purpleRing}
        alt="ring"
        className="pointer-events-none absolute -left-10 w-48 md:w-56 opacity-100"
        aria-hidden
      />
    </section>
  );
}
