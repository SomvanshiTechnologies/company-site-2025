import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CgArrowLongRight } from "react-icons/cg";
import { FiFilter, FiGrid, FiList, FiTrendingUp } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { supabase } from '../config/supabase';

const AllTrendsPage = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [allTrends, setAllTrends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchTrends();
  }, []);

  const fetchTrends = async () => {
    try {
      const { data, error } = await supabase
        .from('trends')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setAllTrends(data || []);
    } catch (error) {
      console.error('Error fetching trends:', error);
      setAllTrends([]);
    } finally {
      setLoading(false);
    }
  };

  const types = ['All', ...new Set(allTrends.map(item => item.type))];
  const categories = ['All', ...new Set(allTrends.map(item => item.category))];

  const filteredTrends = allTrends.filter(item => {
    const typeMatch = selectedType === 'All' || item.type === selectedType;
    const categoryMatch = selectedCategory === 'All' || item.category === selectedCategory;
    return typeMatch && categoryMatch;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Enhanced Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
            <FiTrendingUp className="w-5 h-5" />
            <span className="text-sm font-semibold">Explore Innovation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary mb-4">
            Latest Trends & Insights
          </h1>
          <p className="text-lg text-gray-600 font-body max-w-3xl mx-auto">
            Discover cutting-edge trends, innovations, and insights shaping the future of technology
          </p>
        </div>

        {/* Enhanced Filters Section */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <FiFilter className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-heading font-semibold text-gray-900">Filter Trends</h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                title="Grid View"
              >
                <FiGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                title="List View"
              >
                <FiList className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="space-y-5">
            {/* Type Filter */}
            <div>
              <h3 className="text-sm font-body font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <span className="w-1 h-4 bg-primary rounded"></span>
                Content Type
              </h3>
              <div className="flex flex-wrap gap-2">
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`
                      px-5 py-2.5 rounded-lg font-body font-medium text-sm transition-all shadow-sm
                      ${selectedType === type
                        ? 'bg-gradient-to-r from-primary to-primary/90 text-white shadow-md'
                        : 'bg-white border border-gray-300 text-gray-700 hover:border-primary hover:text-primary hover:shadow'
                      }
                    `}
                  >
                    {type === 'All' ? '🔍 All' : type === 'Article' ? '📄 Article' : '📍 Venue'}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <h3 className="text-sm font-body font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <span className="w-1 h-4 bg-primary rounded"></span>
                Category
              </h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`
                      px-5 py-2.5 rounded-lg font-body font-medium text-sm transition-all shadow-sm
                      ${selectedCategory === category
                        ? 'bg-gradient-to-r from-primary to-primary/90 text-white shadow-md'
                        : 'bg-white border border-gray-300 text-gray-700 hover:border-primary hover:text-primary hover:shadow'
                      }
                    `}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-5 pt-5 border-t border-gray-200">
            <p className="text-sm text-gray-600 font-body">
              Showing <span className="font-semibold text-primary">{filteredTrends.length}</span> {filteredTrends.length === 1 ? 'trend' : 'trends'}
            </p>
          </div>
        </div>

        {/* Trends Display */}
        {loading ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 font-body">Loading trends...</p>
          </div>
        ) : (
          <>
            {/* Grid View */}
            {viewMode === 'grid' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTrends.map((item) => (
                  <div
                    key={item.id}
                    className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-2xl hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {item.image_url && (
                      <div className="overflow-hidden h-48">
                        <img
                          src={item.image_url}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    )}

                    <div className="p-6">
                      {/* Meta Info */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-xs font-semibold rounded-full border border-primary/20">
                          {item.category}
                        </span>
                        <span className="inline-block px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                          {item.type === 'Article' ? '📄' : '📍'} {item.type}
                        </span>
                      </div>

                      <p className="font-body text-xs text-gray-500 mb-3">
                        {formatDate(item.created_at)}
                      </p>

                      {/* Title */}
                      <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="font-body text-gray-600 mb-4 line-clamp-3">
                        {item.excerpt}
                      </p>

                      {/* Read More Link */}
                      <Link
                        to={`/trends/${item.id}`}
                        className="inline-flex items-center gap-2 text-primary hover:gap-3 font-body font-semibold transition-all"
                      >
                        Read Full Article
                        <CgArrowLongRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* List View */}
            {viewMode === 'list' && (
              <div className="space-y-4">
                {filteredTrends.map((item) => (
                  <div
                    key={item.id}
                    className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row">
                      {item.image_url && (
                        <div className="sm:w-72 h-48 sm:h-auto overflow-hidden flex-shrink-0">
                          <img
                            src={item.image_url}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      )}

                      <div className="p-6 flex-1">
                        {/* Meta Info */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-xs font-semibold rounded-full border border-primary/20">
                            {item.category}
                          </span>
                          <span className="inline-block px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                            {item.type === 'Article' ? '📄' : '📍'} {item.type}
                          </span>
                          <span className="font-body text-xs text-gray-500 ml-auto">
                            {formatDate(item.created_at)}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="font-body text-gray-600 mb-4">
                          {item.excerpt}
                        </p>

                        {/* Read More Link */}
                        <Link
                          to={`/trends/${item.id}`}
                          className="inline-flex items-center gap-2 text-primary hover:gap-3 font-body font-semibold transition-all"
                        >
                          Read Full Article
                          <CgArrowLongRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* No Results */}
            {filteredTrends.length === 0 && !loading && (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <FiTrendingUp className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500 font-body text-lg mb-2">
                  No trends found
                </p>
                <p className="text-gray-400 font-body text-sm">
                  Try adjusting your filters to see more results
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

export default AllTrendsPage;
