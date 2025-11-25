import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCircleChevronLeft , FaCircleChevronRight } from "react-icons/fa6";
import { CgArrowLongRight } from "react-icons/cg";
import { supabase } from '../config/supabase';


const LatestTrends = () => {
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
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-primary">
            Latest Trends and Insights
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Large Cards */}
          {largeCards.map((card) => (
            <div key={card.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 p-3 hover:shadow-lg transition-shadow">
              {card.image_url && (
                <img src={card.image_url} alt={card.title} className="w-full h-48 object-cover border rounded" />
              )}
              <div className="pr-3.5 mt-4 ">
                <p className="font-body text-sm text-gray-500 mb-2">
                 <span className='text-gray-900'>{card.type}</span> | {formatDate(card.created_at)}
                </p>
                <h3 className="font-heading text-xl font-semibold text-text mb-3">
                  {card.title}
                </h3>
                <p className="font-body text-gray-600 mb-4">
                  {card.excerpt}
                </p>
                <Link to={`/trends/${card.id}`} className="p-2 text-primary hover:opacity-80">
                  <CgArrowLongRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
          ))}
          
          {/* Small Cards Column */}
          <div className="flex flex-col gap-8">
            {smallCards.map((card) => (
              <div key={card.id} className="bg-gradient-soft p-6 rounded-lg shadow-md border border-gray-200">
                <p className="font-body text-sm text-gray-500 mb-2">
                  <span className='text-gray-900'>{card.type}</span> | {formatDate(card.created_at)}
                </p>
                <h3 className="font-heading text-lg font-semibold text-text mb-3">
                  {card.title}
                </h3>
                <p className="font-body text-gray-600 mb-4">
                  {card.excerpt}
                </p>
                <Link to={`/trends/${card.id}`} className="text-primary hover:opacity-80">
                  <CgArrowLongRight className="w-6 h-6" />
                </Link>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer Controls */}
        <div className="flex justify-between items-center mt-12">
          {/* Pagination */}
          <div className="flex gap-2">
            <button
              aria-label="Previous"
              className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
            >
              <FaCircleChevronLeft className="w-5 h-5" />
            </button>
            <button
              aria-label="Next"
              className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
            >
              <FaCircleChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          {/* Explore Link */}
          <div>
            <Link to="/trends" className="font-body font-medium text-primary text-sm hover:opacity-80">
              Explore all Trends and Insights
              <span aria-hidden="true" className="ml-1">→</span>
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default LatestTrends;
