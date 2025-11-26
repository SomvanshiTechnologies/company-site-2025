import React from "react";

const solutions = [
  { name: "AI Automation", href: "#" },
  { name: "Custom SaaS", href: "#" },
  { name: "Enterprise Development", href: "#" },
  { name: "Digital Strategy", href: "#" },
];

const technologies = [
  { name: "Full Stack Development", href: "#" },
  { name: "Backend Development", href: "#" },
  { name: "Frontend Development", href: "#" },
  { name: "Cloud Optimization", href: "#" },
];

const company = [
  { name: "About Us", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Contact", href: "/contact" },
];

const MailIcon = () => (
  <svg
    className="w-5 h-5 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    className="w-5 h-5 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const LocationIcon = () => (
  <svg
    className="w-5 h-5 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.227-1.669 4.771-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.669-4.771 4.919-4.919 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z" />
  </svg>
);

const FloatingPhoneIcon = () => (
  <svg
    className="w-8 h-8"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21.384,17.345l-3.33-3.33a1.2,1.2,0,0,0-1.694,0l-1.6,1.6a13.3,13.3,0,0,1-6.58-6.58l1.6-1.6a1.2,1.2,0,0,0,0-1.694l-3.33-3.33a1.2,1.2,0,0,0-1.694,0L2.616,4.562a3.6,3.6,0,0,0,0,5.088,22.064,22.064,0,0,0,11.7,11.7,3.6,3.6,0,0,0,5.088,0Z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    className="w-8 h-8"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.996 0-3.933-.523-5.64-1.475l-6.326 1.688zm7.832-4.2c1.777 1.005 3.822 1.59 5.991 1.591 5.438 0 9.875-4.438 9.875-9.875 0-5.437-4.438-9.875-9.875-9.875-5.438 0-9.875 4.438-9.875 9.875 0 2.063.602 4.024 1.687 5.77l-1.138 4.162 4.274-1.138zM15.236 14.194c-.191-.096-1.138-.562-1.316-.624-.178-.062-.308-.095-.438.095-.13.191-.497.624-.61.751-.112.126-.225.141-.413.046-.188-.096-1.005-.372-1.913-1.179-.708-.616-1.187-1.376-1.331-1.618-.144-.241-.014-.372.08-.492.082-.107.191-.191.287-.287.096-.096.126-.16.191-.27.062-.112.031-.208-.016-.304-.046-.096-.438-1.05-.599-1.438-.16-.388-.321-.333-.438-.333-.112 0-.241 0-.371.016-.13.016-.308.046-.469.237-.16.191-.624.609-.624 1.492s.639 1.725.724 1.851c.085.126 1.251 1.913 3.03 2.664.413.177.662.207.887.207.477 0 1.005-.191 1.221-.577.216-.388.216-.724.151-.819-.062-.095-.191-.159-.383-.254z" />
  </svg>
);

const Footer = () => {
  return (
    <>
      <footer className="bg-text text-gray-300 font-body">
        <div className="max-w-7xl mx-auto px-6 lg:px-3 pt-16 pb-12">
          {/* Main Footer Grid */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-16">
            {/* Left Section: Logo & Info */}
            <div className="flex-1 max-w-md">
              <div className="h-14 w-48 bg-white flex items-center justify-center rounded-md mb-6">
                <img
                  src="/logo.png"
                  alt="Somvanshi Technologies"
                  className="w-auto object-contain"
                />
              </div>

              <p className="text-sm leading-relaxed text-gray-200 mb-6">
                Your trusted offshore software development partner from Pune,
                India. Engineering the future of enterprise technology with AI
                automation, custom SaaS solutions, and digital transformation
                strategies.
              </p>

              <div className="space-y-3 text-sm">
                <a
                  href="mailto:somvanshitechnologies@gmail.com"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <MailIcon />
                  <span>somvanshitechnologies@gmail.com</span>
                </a>
                <a
                  href="mailto:ceo@somvanshitechnologies.com"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <MailIcon />
                  <span>ceo@somvanshitechnologies.com</span>
                </a>
                <a
                  href="tel:+919637507575"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <PhoneIcon />
                  <span>+91 96375 07575</span>
                </a>
                <a
                  href="tel:+919171018101"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <PhoneIcon />
                  <span>+91 91710 18101</span>
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <LocationIcon />
                  <span>Pune, India</span>
                </div>
              </div>
            </div>

            {/* Right Section: 3 Columns */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-10">
              {/* Solutions */}
              <div>
                <h3 className="font-heading text-lg font-semibold text-white mb-4">
                  Solutions
                </h3>
                <ul className="space-y-3">
                  {solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="font-heading text-lg font-semibold text-white mb-4">
                  Technologies
                </h3>
                <ul className="space-y-3">
                  {technologies.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="font-heading text-lg font-semibold text-white mb-4">
                  Company
                </h3>
                <ul className="space-y-3">
                  {company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Divider */}
          <hr className="border-gray-700 my-10" />

          {/* Copyright & Socials */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © 2025 Somvanshi Technologies. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <LinkedInIcon />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="mailto:somvanshitechnologies@gmail.com"
                aria-label="Email"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <MailIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* --- Floating Action Buttons --- */}
      {/* <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="tel:+919637507575"
          aria-label="Call us"
          className="
            w-16 h-16 
            rounded-full 
            bg-primary 
            text-white 
            flex items-center justify-center 
            shadow-lg 
            hover:opacity-90 
            transition-all 
            transform 
            hover:scale-105
          "
        >
          <FloatingPhoneIcon />
        </a>
        <a
          href="https://wa.me/919171018101"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="
            w-16 h-16 
            rounded-full 
            bg-green-500 
            text-white 
            flex items-center justify-center 
            shadow-lg 
            hover:opacity-90 
            transition-all 
            transform 
            hover:scale-105
          "
        >
          <WhatsAppIcon />
        </a>
      </div> */}
    </>
  );
};

export default Footer;
