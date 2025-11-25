import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CgArrowLongRight } from "react-icons/cg";
import { FiArrowLeft, FiCalendar, FiTag, FiClock } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { supabase } from '../config/supabase';

const TrendDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [trendItem, setTrendItem] = useState(null);
  const [relatedTrends, setRelatedTrends] = useState({ previous: null, next: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchTrendDetails();
  }, [id]);

  const fetchTrendDetails = async () => {
    try {
      // Fetch the current trend
      const { data: currentTrend, error: currentError } = await supabase
        .from('trends')
        .select('*')
        .eq('id', id)
        .eq('is_published', true)
        .single();

      if (currentError) throw currentError;
      setTrendItem(currentTrend);

      // Fetch all published trends to find previous and next
      const { data: allTrends, error: allError } = await supabase
        .from('trends')
        .select('id, title, type')
        .eq('is_published', true)
        .order('created_at', { ascending: false });

      if (allError) throw allError;

      const currentIndex = allTrends.findIndex(item => item.id === parseInt(id));
      const previousTrend = currentIndex > 0 ? allTrends[currentIndex - 1] : null;
      const nextTrend = currentIndex < allTrends.length - 1 ? allTrends[currentIndex + 1] : null;

      setRelatedTrends({ previous: previousTrend, next: nextTrend });
    } catch (error) {
      console.error('Error fetching trend details:', error);
      setTrendItem(null);
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
      <div className="min-h-screen w-full bg-white">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16 text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-body">Loading trend details...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!trendItem) {
    return (
      <div className="min-h-screen w-full bg-white">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl font-heading font-bold text-primary mb-4">
            Trend Not Found
          </h1>
          <p className="text-gray-600 font-body mb-6">
            The trend or insight you're looking for doesn't exist.
          </p>
          <Link
            to="/trends"
            className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-body font-medium"
          >
            Back to All Trends
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Enhanced Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 font-body font-semibold bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all"
        >
          <FiArrowLeft className="w-5 h-5" />
          Back to Trends
        </button>

        {/* Article Header */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-10 mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-sm font-semibold rounded-full border border-primary/20">
              <FiTag className="w-4 h-4" />
              {trendItem.category}
            </span>
            <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full">
              {trendItem.type === 'Article' ? '📄' : '📍'} {trendItem.type}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
            {trendItem.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 font-body pt-6 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <FiCalendar className="w-4 h-4 text-primary" />
              <span>Published: {formatDate(trendItem.created_at)}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="w-4 h-4 text-primary" />
              <span>{Math.ceil(trendItem.content.split(' ').length / 200)} min read</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {trendItem.image_url && (
          <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={trendItem.image_url}
              alt={trendItem.title}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-10 mb-10">
          <div
            className="prose prose-lg max-w-none font-body"
            dangerouslySetInnerHTML={{ __html: trendItem.content }}
            style={{
              lineHeight: '1.8',
            }}
          />
        </div>

        {/* Related Trends Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-8 flex items-center gap-2">
            <span className="w-1 h-8 bg-primary rounded"></span>
            Continue Reading
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Previous Trend */}
            {relatedTrends.previous && (
              <Link
                to={`/trends/${relatedTrends.previous.id}`}
                className="group p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl hover:shadow-xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs text-gray-500 font-body uppercase tracking-wider">
                    ← Previous
                  </span>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {relatedTrends.previous.type === 'Article' ? '📄' : '📍'} {relatedTrends.previous.type}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-bold text-gray-900 group-hover:text-primary transition-colors mb-3 line-clamp-2">
                  {relatedTrends.previous.title}
                </h3>
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  <span className="text-sm font-body">Read Article</span>
                  <CgArrowLongRight className="w-5 h-5" />
                </div>
              </Link>
            )}

            {/* Next Trend */}
            {relatedTrends.next && (
              <Link
                to={`/trends/${relatedTrends.next.id}`}
                className="group p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl hover:shadow-xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs text-gray-500 font-body uppercase tracking-wider">
                    Next →
                  </span>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {relatedTrends.next.type === 'Article' ? '📄' : '📍'} {relatedTrends.next.type}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-bold text-gray-900 group-hover:text-primary transition-colors mb-3 line-clamp-2">
                  {relatedTrends.next.title}
                </h3>
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  <span className="text-sm font-body">Read Article</span>
                  <CgArrowLongRight className="w-5 h-5" />
                </div>
              </Link>
            )}
          </div>

          {/* View All Button */}
          <div className="text-center mt-10 pt-8 border-t border-gray-200">
            <Link
              to="/trends"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/90 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all font-body font-semibold"
            >
              Explore All Trends & Insights
              <CgArrowLongRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TrendDetailPage;
