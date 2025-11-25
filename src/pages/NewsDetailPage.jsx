import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { supabase } from '../config/supabase';

const NewsDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newsItem, setNewsItem] = useState(null);
  const [allNews, setAllNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchNewsItem();
  }, [id]);

  const fetchNewsItem = async () => {
    try {
      // Fetch current news item
      const { data: currentNews, error: currentError } = await supabase
        .from('news')
        .select('*')
        .eq('id', id)
        .eq('is_published', true)
        .single();

      if (currentError) throw currentError;
      setNewsItem(currentNews);

      // Fetch all news for navigation
      const { data: allNewsData, error: allError } = await supabase
        .from('news')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false});

      if (allError) throw allError;
      setAllNews(allNewsData || []);
    } catch (error) {
      console.error('Error fetching news:', error);
      setNewsItem(null);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-white">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16 text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-body">Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!newsItem) {
    return (
      <div className="min-h-screen w-full bg-white">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl font-heading font-bold text-primary mb-4">
            News Not Found
          </h1>
          <p className="text-gray-600 font-body mb-6">
            The news article you're looking for doesn't exist.
          </p>
          <Link
            to="/news"
            className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-body font-medium"
          >
            Back to All News
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const currentIndex = allNews.findIndex(item => item.id === id);
  const previousNews = currentIndex > 0 ? allNews[currentIndex - 1] : null;
  const nextNews = currentIndex < allNews.length - 1 ? allNews[currentIndex + 1] : null;

  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-primary hover:opacity-80 mb-8 font-body font-medium"
        >
          <span aria-hidden="true">←</span> Back
        </button>

        {/* Article Header */}
        <div className="mb-8">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
              {newsItem.category}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-primary mb-6">
            {newsItem.title}
          </h1>

          {/* Author and Date */}
          <div className="flex items-center gap-4 mb-8">
            <img
              src={newsItem.author_avatar_url || 'https://placehold.co/40x40/E0E7FF/4F46E5?text=AV'}
              alt={newsItem.author_name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-body font-medium text-text">
                {newsItem.author_name}
              </p>
              <p className="font-body text-gray-500 text-sm">
                {formatDate(newsItem.created_at)}
              </p>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {newsItem.image_url && (
          <div className="mb-8">
            <img
              src={newsItem.image_url}
              alt={newsItem.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none font-body mb-12"
          dangerouslySetInnerHTML={{ __html: newsItem.content }}
          style={{
            lineHeight: '1.8',
          }}
        />

        {/* Divider */}
        <div className="border-t border-gray-200 my-12"></div>

        {/* Navigation to Other Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Previous Article */}
          {previousNews && (
            <Link
              to={`/news/${previousNews.id}`}
              className="group p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <p className="text-sm text-gray-500 font-body mb-2">
                Previous Article
              </p>
              <h3 className="text-lg font-heading font-semibold text-text group-hover:text-primary transition-colors">
                {previousNews.title}
              </h3>
            </Link>
          )}

          {/* Next Article */}
          {nextNews && (
            <Link
              to={`/news/${nextNews.id}`}
              className="group p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow md:text-right"
            >
              <p className="text-sm text-gray-500 font-body mb-2">
                Next Article
              </p>
              <h3 className="text-lg font-heading font-semibold text-text group-hover:text-primary transition-colors">
                {nextNews.title}
              </h3>
            </Link>
          )}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/news"
            className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-body font-medium"
          >
            View All News
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsDetailPage;
