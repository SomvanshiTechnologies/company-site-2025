import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../config/supabase";
import { Bold } from "lucide-react";


const Solutions = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [solutions, setSolutions] = useState([]);
  const [tabsData, setTabsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const intervalRef = useRef(null);
  const tabRefs = useRef([]);
  const AUTO_SWITCH_DELAY = 5000;

  useEffect(() => {
    fetchSolutions();
  }, []);

  const fetchSolutions = async () => {
    try {
      const { data, error } = await supabase
        .from("solutions")
        .select("*")
        .eq("is_published", true)
        .order("display_order", { ascending: true });

      if (error) throw error;

      // Group solutions by category
      const groupedData = {};
      (data || []).forEach((solution) => {
        if (!groupedData[solution.category]) {
          groupedData[solution.category] = [];
        }
        groupedData[solution.category].push({
          id: solution.id,
          title: solution.title,
          excerpt: solution.excerpt,
        });
      });

      // Convert to tabs format
      const tabs = Object.keys(groupedData).map((category) => ({
        name: category,
        cards: groupedData[category].slice(0, 3), // Show max 3 per category
      }));

      setSolutions(data || []);
      setTabsData(tabs);
    } catch (error) {
      console.error("Error fetching solutions:", error);
      setTabsData([]);
    } finally {
      setLoading(false);
    }
  };

  const startTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveTab((prevTab) => (prevTab + 1) % tabsData.length);
        setIsTransitioning(false);
      }, 300);
    }, AUTO_SWITCH_DELAY);
  };

  useEffect(() => {
    if (tabsData.length > 0) {
      startTimer();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [tabsData]);

  useEffect(() => {
    const updateIndicator = () => {
      const activeTabElement = tabRefs.current[activeTab];
      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement;
        setIndicatorStyle({
          left: offsetLeft,
          width: offsetWidth,
        });
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => {
      window.removeEventListener("resize", updateIndicator);
    };
  }, [activeTab]);

  const handleTabClick = (index) => {
    if (index === activeTab) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(index);
      setIsTransitioning(false);
      startTimer();
    }, 300);
  };

  if (loading) {
    return (
      <section className="min-h-screen w-full bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center py-12">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 font-body">Loading solutions...</p>
          </div>
        </div>
      </section>
    );
  }

  if (tabsData.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-32 sm:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2
            className="text-4xl sm:text-5xl leading-tight tracking-tight mb-6 text-bold"
            style={{ fontFamily: "var(--font-heading)", fontWeight: "800", lineHeight: "1.2" }}
          >
            <span className="text-text">Transforming </span>
            <span className="text-primary">Every Sector with AI</span>
          </h2>
          <p
            className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)", lineHeight: "1.8" }}
          >
            From healthcare startups to e-commerce platforms, we serve
            businesses across industries.
          </p>
        </div>

        <div className="mb-12 w-full sm:w-[80%] lg:w-[60%] mx-auto relative overflow-hidden">
          {/* Full light blue bottom line */}
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-100"></div>

          <nav className="flex justify-start sm:justify-between gap-x-4 sm:gap-x-6 overflow-x-auto scrollbar-hide px-2 sm:px-0" aria-label="Tabs">
            {tabsData.map((tab, index) => (
              <button
                key={tab.name}
                ref={(el) => (tabRefs.current[index] = el)}
                onClick={() => handleTabClick(index)}
                className={`relative pb-3 transition-all duration-300 ease-in-out whitespace-nowrap shrink-0 ${
                  activeTab === index ? "text-blue-900" : "text-gray-700"
                }`}
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: "600",
                  fontSize: "0.875rem",
                  background: "transparent",
                }}
              >
                {tab.name}
              </button>
            ))}
          </nav>

          {/* Active tab indicator (short blue bar) */}
          <span
            className="absolute bottom-0 h-[3px] bg-primary transition-[left,width] duration-500 ease-in-out"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
            }}
          ></span>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto transition-all duration-300 ease-in-out ${
            isTransitioning
              ? "opacity-0 translate-y-2"
              : "opacity-100 translate-y-0"
          }`}
        >
          {tabsData[activeTab].cards.map((card, index) => (
            <div
              key={`${tabsData[activeTab].name}-${card.id}`}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 ease-in-out flex flex-col h-full"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <h3
                className="text-2xl mb-4 text-gray-900 font-bold"
                style={{ fontFamily: "var(--font-heading)", fontWeight: "700", lineHeight: "1.3" }}
              >
                {card.title}
              </h3>
              <p
                className="mb-8 text-gray-600 text-base line-clamp-3"
                style={{ fontFamily: "var(--font-body)", lineHeight: "1.7" }}
              >
                {card.excerpt}
              </p>
              <Link
                to={`/solutions/${card.id}`}
                className="border border-gray-300 text-gray-700 rounded-lg px-6 py-2.5 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 ease-in-out inline-block mt-auto w-fit text-base font-medium"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Learn more
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/solutions"
            className="bg-primary text-white px-10 py-4 rounded-lg hover:opacity-90 transition-all duration-300 ease-in-out shadow-lg inline-block text-base font-semibold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            View all solutions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
