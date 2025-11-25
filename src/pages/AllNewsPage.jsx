import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { supabase } from '../config/supabase';

const AllNewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [allNews, setAllNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setAllNews(data || []);
    } catch (error) {
      console.error('Error fetching news:', error);
      setAllNews([]);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['All', ...new Set(allNews.map(item => item.category))];

  const filteredNews = selectedCategory === 'All'
    ? allNews
    : allNews.filter(item => item.category === selectedCategory);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-primary mb-4">
            Latest News
          </h1>
          <p className="text-lg text-gray-600 font-body">
            Stay updated with the latest technology news, insights, and developments
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-4 py-2 rounded-md font-body font-medium text-sm transition-colors
                ${selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 font-body">Loading news...</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200/75 flex flex-col hover:shadow-xl transition-shadow"
                >
                  {/* Card Image */}
                  {item.image_url && (
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                  )}

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {item.category}
                      </span>
                    </div>

                    {/* Author Meta */}
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={item.author_avatar_url || 'https://placehold.co/40x40/E0E7FF/4F46E5?text=AV'}
                        alt={item.author_name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="font-body font-medium text-text text-sm">
                        {item.author_name}
                      </span>
                      <span className="font-body text-gray-500 text-sm ml-auto">
                        • {formatDate(item.created_at)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-xl font-semibold text-text mb-2">
                      {item.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="font-body text-gray-600 mb-6">
                      {item.excerpt}
                    </p>

                    {/* View Button */}
                    <div className="mt-auto">
                      <Link
                        to={`/news/${item.id}`}
                        className="
                          inline-block
                          font-body font-medium text-primary
                          border border-primary
                          rounded-md
                          px-4 py-2
                          text-sm
                          hover:bg-primary/5
                          transition-colors
                        "
                      >
                        Read More <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredNews.length === 0 && !loading && (
              <div className="text-center py-12">
                <p className="text-gray-500 font-body text-lg">
                  No news found in this category.
                </p>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default AllNewsPage;
