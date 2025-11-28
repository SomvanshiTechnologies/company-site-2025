import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from '../assets/logo/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Platform", href: "/" },
    {/*{
      name: "Solution",
      href: "#",
      dropdown: [
        { name: "Website Development", href: "/technologies/web" },
        { name: "Frontend Development", href: "/technologies/frontend" },
        { name: "Backend Development", href: "/technologies/backend" },
        { name: "App Development", href: "/technologies/application" },
        { name: "Full Stack Development", href: "/technologies/fullstack" },
        { name: "Cloud Optimization", href: "/technologies/cloud" },
        { name: "Hosting Solutions", href: "/technologies/hosting" },
      ],
    },*/},
    
    { name: "Solutions", href: "/technologies" },

    {
      name: "Industries", 
      href: "#",
      dropdown: [
        { name: "Healthcare", href: "/industries/healthcare" },
        { name: "Finance", href: "/industries/finance" },
        { name: "E-commerce", href: "/industries/ecommerce" },
        { name: "Education", href: "/industries/education" },
        { name: "Manufacturing", href: "/industries/manufacturing" },
      ],
    },
    { name: "Insights", href: "/insights" },
    { name: "Company", href: "/about" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <motion.img
                src={logo}
                alt="Somvanshi Logo"
                className="h-12 w-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary transition-colors cursor-pointer">
                      {item.name}
                      <ChevronDown className="w-3 h-3" />
                    </span>

                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`relative text-sm font-medium transition-colors hover:text-primary ${
                      location.pathname === item.href
                        ? "text-primary"
                        : "text-gray-700"
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.href && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag_report_conversion) {
                  window.gtag_report_conversion();
                }
              }}
              className="border-2 border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition-all font-medium text-sm"
            >
              Contact
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-gray-700" />
            ) : (
              <Menu className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-4 py-4 space-y-3">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-2">
                        {item.name}
                      </div>
                      <div className="pl-4 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block text-sm text-gray-600 hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block text-sm font-medium transition-colors ${
                        location.pathname === item.href
                          ? "text-primary"
                          : "text-gray-700 hover:text-primary"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="block w-full border-2 border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition-all font-medium text-sm text-center"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (typeof window !== 'undefined' && window.gtag_report_conversion) {
                    window.gtag_report_conversion();
                  }
                }}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
