import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FaAngleLeft , FaAngleRight } from "react-icons/fa6";
import { CgArrowLongRight } from "react-icons/cg";
import { supabase } from '../config/supabase';

const InsightsSection = () => {
  const [largeCards, setLargeCards] = useState([]);
  const [smallCards, setSmallCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrends();
  }, []);

  const fetchTrends = async () => {
    try {
      // Fetch Articles with priority or latest
      const { data: priorityArticles, error: articlePriorityError } = await supabase
        .from('trends')
        .select('*')
        .eq('is_published', true)
        .eq('type', 'Article')
        .not('display_priority', 'is', null)
        .order('display_priority', { ascending: true })
        .limit(2);

      if (articlePriorityError) throw articlePriorityError;

      if (priorityArticles && priorityArticles.length === 2) {
        setLargeCards(priorityArticles);
      } else {
        const { data: latestArticles, error: articleLatestError } = await supabase
          .from('trends')
          .select('*')
          .eq('is_published', true)
          .eq('type', 'Article')
          .order('created_at', { ascending: false })
          .limit(2);

        if (articleLatestError) throw articleLatestError;
        setLargeCards(latestArticles || []);
      }

      // Fetch Venues with priority or latest
      const { data: priorityVenues, error: venuePriorityError } = await supabase
        .from('trends')
        .select('*')
        .eq('is_published', true)
        .eq('type', 'Venue')
        .not('display_priority', 'is', null)
        .order('display_priority', { ascending: true })
        .limit(2);

      if (venuePriorityError) throw venuePriorityError;

      if (priorityVenues && priorityVenues.length === 2) {
        setSmallCards(priorityVenues);
      } else {
        const { data: latestVenues, error: venueLatestError } = await supabase
          .from('trends')
          .select('*')
          .eq('is_published', true)
          .eq('type', 'Venue')
          .order('created_at', { ascending: false })
          .limit(2);

        if (venueLatestError) throw venueLatestError;
        setSmallCards(latestVenues || []);
      }
    } catch (error) {
      console.error('Error fetching trends:', error);
      setLargeCards([]);
      setSmallCards([]);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  if (loading) {
    return (
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center py-12">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 font-body">Loading trends...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
        <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12">
          <h2 className="ml-0 lg:ml-[12px] text-3xl sm:text-4xl font-heading font-semibold text-primary">
            Latest Trends and Insights
          </h2>
        </div>

        {/* Content Grid - Desktop */}
        <div className="ml-0 lg:ml-[12px] hidden lg:grid lg:grid-cols-3 gap-8">
          {/* Large Cards */}
          {largeCards.map((card) => (
            <Link key={card.id} to={`/trends/${card.id}`}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
              {card.image_url && (
                <img src={card.image_url} alt={card.title} className="w-full h-48 object-cover rounded" />
              )}
              <div className="pr-3.5 p-5 mt-4 flex-1 flex flex-col">
                <p className="font-body text-sm text-gray-500 mb-2">
                 <span className='text-gray-900'>{card.type}</span> | {formatDate(card.created_at)}
                </p>
                <h3 className="font-heading text-xl font-semibold text-text mb-3 line-clamp-2">
                  {card.title}
                </h3>
                <p className="font-body text-gray-600 mb-4 line-clamp-3 flex-1">
                  {card.excerpt}
                </p>
                  <CgArrowLongRight className="w-6 h-6" />
              </div>
            </div>
            </Link>
          ))}

          {/* Small Cards Column - Desktop */}
          <div className="flex flex-col gap-4 h-full">
            {smallCards.map((card) => (
              <Link key={card.id} to={`/trends/${card.id}`} className="flex-1">
                <div className="bg-gradient-soft p-4 rounded-lg  h-full flex flex-col">
                  <p className="font-body text-sm text-gray-500 mb-2">
                    <span className='text-gray-900'>{card.type}</span> | {formatDate(card.created_at)}
                  </p>
                  <h3 className="font-heading text-lg font-semibold text-text mb-3 line-clamp-2">
                    {card.title}
                  </h3>
                  <p className="font-body text-gray-600 mb-4 line-clamp-2 flex-1">
                    {card.excerpt}
                  </p>
                  <div className="text-primary hover:opacity-80">
                    <CgArrowLongRight className="w-6 h-6" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Horizontal Scroll Layout */}
        <div className="lg:hidden">
          {/* Article Cards - Horizontal Scroll */}
          {largeCards.length > 0 && (
            <div className="mb-8">
              <h3 className="font-heading text-lg font-semibold text-text mb-4">Articles</h3>
              <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
                {largeCards.map((card) => (
                  <Link key={card.id} to={`/trends/${card.id}`} className="shrink-0 w-[85%] sm:w-[70%] snap-start">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                      {card.image_url && (
                        <img src={card.image_url} alt={card.title} className="w-full h-48 object-cover rounded" />
                      )}
                      <div className="pr-3.5 p-3 mt-4">
                        <p className="font-body text-sm text-gray-500 mb-2">
                          <span className='text-gray-900'>{card.type}</span> | {formatDate(card.created_at)}
                        </p>
                        <h3 className="font-heading text-xl font-semibold text-text mb-3 line-clamp-2">
                          {card.title}
                        </h3>
                        <p className="font-body text-gray-600 mb-4 line-clamp-3">
                          {card.excerpt}
                        </p>
                        <CgArrowLongRight className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Venue Cards - Horizontal Scroll */}
          {smallCards.length > 0 && (
            <div>
              <h3 className="font-heading text-lg font-semibold text-text mb-4">Venues</h3>
              <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
                {smallCards.map((card) => (
                  <Link key={card.id} to={`/trends/${card.id}`} className="shrink-0 w-[85%] sm:w-[70%] snap-start">
                    <div className="bg-gradient-soft p-4 rounded-lg  h-full">
                      <p className="font-body text-sm text-gray-500 mb-2">
                        <span className='text-gray-900'>{card.type}</span> | {formatDate(card.created_at)}
                      </p>
                      <h3 className="font-heading text-lg font-semibold text-text mb-3 line-clamp-2">
                        {card.title}
                      </h3>
                      <p className="font-body text-gray-600 mb-4 line-clamp-2">
                        {card.excerpt}
                      </p>
                      <div className="text-primary hover:opacity-80">
                        <CgArrowLongRight className="w-6 h-6" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Footer Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
          {/* Pagination - Hidden on mobile */}
          <div className="hidden lg:flex gap-1">
            {/* <button
              aria-label="Previous"
              className="w-12 h-9 flex items-center justify-center rounded-md border border-blue-200  text-blue-800 hover:bg-blue-50"
            >
              <FaAngleLeft className="text-primary w-3 h-3" />
            </button>
            <button
              aria-label="Next"
              className="w-12 h-9 flex items-center justify-center rounded-md border border-blue-200  text-blue-800 hover:bg-blue-50"
            >
              <FaAngleRight className="text-primary w-3 h-3" />
            </button> */}
          </div>

          {/* Explore Link */}
          <div className="w-full sm:w-auto text-center sm:text-right">
            <Link to="/trends" className="font-body font-medium text-primary text-sm hover:opacity-80 inline-block">
              Explore all Trends and Insights
              <span aria-hidden="true" className="ml-1">→</span>
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default InsightsSection;