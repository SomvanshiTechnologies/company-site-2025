import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../config/supabase';


const LatestNews = () => {
  const [displayNews, setDisplayNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      // First, try to get news with display_priority (1-3)
      const { data: priorityNews, error: priorityError } = await supabase
        .from('news')
        .select('*')
        .eq('is_published', true)
        .not('display_priority', 'is', null)
        .order('display_priority', { ascending: true })
        .limit(3);

      if (priorityError) throw priorityError;

      // If we have enough priority news, use them
      if (priorityNews && priorityNews.length === 3) {
        setDisplayNews(priorityNews);
      } else {
        // Otherwise, get latest news to fill up to 3
        const { data: latestNews, error: latestError } = await supabase
          .from('news')
          .select('*')
          .eq('is_published', true)
          .order('created_at', { ascending: false })
          .limit(3);

        if (latestError) throw latestError;
        setDisplayNews(latestNews || []);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      // Fallback to empty array on error
      setDisplayNews([]);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
       <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 flex justify-between items-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-primary">
            Latest News
          </h2>
          <Link
            to="/news"
            className="font-body font-medium text-primary hover:opacity-80 text-sm sm:text-base"
          >
            Explore all News
            <span aria-hidden="true" className="ml-1">→</span>
          </Link>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <div className="col-span-3 text-center py-12">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600 font-body">Loading news...</p>
            </div>
          ) : displayNews.length === 0 ? (
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-600 font-body">No news available at the moment.</p>
            </div>
          ) : (
            displayNews.map((item) => (
              // News Card
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-100 flex flex-col"
              >
                {/* Card Image */}
                {item.image_url && (
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-52 object-cover"
                  />
                )}

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Author Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={item.author_avatar_url || 'https://placehold.co/40x40/E0E7FF/4F46E5?text=AV'}
                        alt={item.author_name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <span className="font-body font-normal text-gray-800 text-sm">
                        By {item.author_name}
                      </span>
                    </div>
                    <span className="font-body text-gray-500 text-sm">
                      • {formatDate(item.created_at)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 leading-snug">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="font-body text-gray-500 text-sm mb-6 leading-relaxed">
                    {item.excerpt}
                  </p>

                  {/* View Button */}
                  <div className="mt-auto">
                    <Link
                      to={`/news/${item.id}`}
                      className="
                        inline-flex items-center gap-2
                        font-body font-medium text-blue-600
                        border-2 border-blue-600
                        rounded-lg
                        px-5 py-2.5
                        text-sm
                        hover:bg-blue-50
                        transition-all
                      "
                    >
                      View <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
          
        </div>
        
      </div>
    </section>
  );
};

export default LatestNews;
