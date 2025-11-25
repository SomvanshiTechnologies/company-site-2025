import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../config/supabase';



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
        .from('solutions')
        .select('*')
        .eq('is_published', true)
        .order('display_order', { ascending: true });

      if (error) throw error;

      // Group solutions by category
      const groupedData = {};
      (data || []).forEach(solution => {
        if (!groupedData[solution.category]) {
          groupedData[solution.category] = [];
        }
        groupedData[solution.category].push({
          id: solution.id,
          title: solution.title,
          excerpt: solution.excerpt
        });
      });

      // Convert to tabs format
      const tabs = Object.keys(groupedData).map(category => ({
        name: category,
        cards: groupedData[category].slice(0, 3) // Show max 3 per category
      }));

      setSolutions(data || []);
      setTabsData(tabs);
    } catch (error) {
      console.error('Error fetching solutions:', error);
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
          width: offsetWidth
        });
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);

    return () => {
      window.removeEventListener('resize', updateIndicator);
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
      <section className="bg-white py-16 sm:py-24">
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
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl leading-tight tracking-wide mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: '600' }}>
            <span className="text-text">Transforming </span>
            <span className="text-primary">Every Sector with AI</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-text opacity-70 max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            From healthcare startups to e-commerce platforms, we serve businesses across industries.
          </p>
        </div>

        <div className="mb-12 border-b-2 border-gray-200 relative">
          <nav className="flex justify-center gap-x-10 overflow-x-auto" aria-label="Tabs">
            {tabsData.map((tab, index) => (
              <button
                key={tab.name}
                ref={(el) => (tabRefs.current[index] = el)}
                onClick={() => handleTabClick(index)}
                className="relative whitespace-nowrap pb-4 transition-all duration-300 ease-in-out"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: '500',
                  fontSize: '1rem',
                  background: 'transparent',
                  border: 'none',
                  padding: '0',
                  paddingBottom: '1rem',
                  borderRadius: '0',
                  transform: 'none',
                  color: activeTab === index ? '#000000' : '#666666'
                }}
              >
                {tab.name}
              </button>
            ))}
          </nav>
          <span
            className="absolute bottom-0 h-0.5 bg-primary transition-all duration-500 ease-out"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`
            }}
          ></span>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-300 ease-in-out ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
          {tabsData[activeTab].cards.map((card, index) => (
            <div
              key={`${tabsData[activeTab].name}-${card.id}`}
              className="border-0.1 border-primary bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 ease-in-out"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <h3
                className="text-2xl mb-4 text-text"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: '700' }}
              >
                {card.title}
              </h3>
              <p
                className="leading-relaxed mb-8 text-text opacity-70"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {card.excerpt}
              </p>
              <Link
                to={`/solutions/${card.id}`}
                className="border-2 border-primary text-primary rounded-lg px-8 py-2.5 hover:bg-primary hover:text-white transition-all duration-300 ease-in-out inline-block"
                style={{ fontFamily: 'var(--font-body)', fontWeight: '500' }}
              >
                View
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/solutions"
            className="bg-primary text-white px-12 py-3 rounded-lg hover:opacity-90 transition-all duration-300 ease-in-out shadow-md inline-block"
            style={{ fontFamily: 'var(--font-body)', fontWeight: '500' }}
          >
            View all
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Solutions;
