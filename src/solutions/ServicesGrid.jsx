import React from "react";
import { ArrowRight } from "lucide-react";
import Herodashboard from '../assets/solutions/hero-dashboard.png';


function ServicesGrid() {
  const services = [
    {
      id: "01",
      title: "Custom Web Application Development",
      image: "/images/code1.png",
    },
    {
      id: "02",
      title: "API & Microservices Development",
      image: "/images/code2.png",
    },
    {
      id: "03",
      title: "Mobile App (iOS & Android)",
      image: "/images/code3.png",
    },
    {
      id: "04",
      title: "Full-Stack Modernization & DevOps Services",
      image: "/images/code4.png",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-purple-600 to-indigo-700 p-10 text-white">
      {/* LEFT TEXT + BUTTON + IMAGE SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
        <div>
          <h2 className="text-4xl font-semibold mb-4">Product Engineering</h2>
          <p className="text-lg max-w-md mb-6 opacity-90">
            Crafting high-performance web applications with modern front-end and back-end technologies to deliver secure, scalable, and business-ready digital solutions.
          </p>
          <button className="flex items-center gap-2 bg-white text-purple-700 px-6 py-3 rounded-xl font-medium shadow hover:scale-105 transition-all">
            Get Started <ArrowRight size={18} />
          </button>
        </div>

        {/* HERO IMAGE */}
        <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
          <img
            src={Herodashboard}
            alt="dashboard"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white text-black p-6 rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1"
          >
            <div className="text-3xl font-bold text-purple-700 mb-4">{service.id}</div>

            <div className="w-full h-32 rounded-md overflow-hidden mb-4">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-lg font-medium mb-4 leading-snug">{service.title}</h3>

            <button className="flex items-center gap-2 text-purple-700 font-medium">
              View More <ArrowRight size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesGrid;