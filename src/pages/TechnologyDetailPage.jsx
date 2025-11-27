import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CgArrowLongRight } from "react-icons/cg";
import { FiArrowLeft, FiTag, FiCpu } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { supabase } from '../config/supabase';

const TechnologyDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [technology, setTechnology] = useState(null);
  const [relatedTechnologies, setRelatedTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchTechnologyDetails();
  }, [id]);

  const fetchTechnologyDetails = async () => {
    try {
      // Fetch the current technology
      const { data: currentTechnology, error: currentError } = await supabase
        .from('technologies')
        .select('*')
        .eq('id', id)
        .eq('is_published', true)
        .single();

      if (currentError) throw currentError;
      setTechnology(currentTechnology);

      // Fetch related technologies (same category, different id)
      const { data: related, error: relatedError } = await supabase
        .from('technologies')
        .select('id, title, category, excerpt, image_url')
        .eq('is_published', true)
        .eq('category', currentTechnology.category)
        .neq('id', id)
        .limit(3);

      if (relatedError) throw relatedError;
      setRelatedTechnologies(related || []);
    } catch (error) {
      console.error('Error fetching technology details:', error);
      setTechnology(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-white">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16 text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-body">Loading technology details...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!technology) {
    return (
      <div className="min-h-screen w-full bg-white">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl font-heading font-bold text-primary mb-4">
            Technology Not Found
          </h1>
          <p className="text-gray-600 font-body mb-6">
            The technology you're looking for doesn't exist.
          </p>
          <Link
            to="/technologies"
            className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-body font-medium"
          >
            Back to All Technologies
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
          Back to Technologies
        </button>

        {/* Technology Header */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-10 mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-sm font-semibold rounded-full border border-primary/20">
              <FiTag className="w-4 h-4" />
              {technology.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
            {technology.title}
          </h1>

          <p className="text-lg text-gray-600 font-body">
            {technology.excerpt}
          </p>
        </div>

        {/* Featured Image */}
        {technology.image_url && (
          <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl bg-gray-50 flex items-center justify-center p-16">
            <img
              src={technology.image_url}
              alt={technology.title}
              className="max-w-md w-full h-auto object-contain"
            />
          </div>
        )}

        {/* Technology Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-10 mb-10">
          <div
            className="prose prose-lg max-w-none font-body"
            dangerouslySetInnerHTML={{ __html: technology.content }}
            style={{
              lineHeight: '1.8',
            }}
          />
        </div>

        {/* Related Technologies Section */}
        {relatedTechnologies.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-8 flex items-center gap-2">
              <span className="w-1 h-8 bg-primary rounded"></span>
              Related Technologies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTechnologies.map((item) => (
                <Link
                  key={item.id}
                  to={`/technologies/detail/${item.id}`}
                  className="group p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl hover:shadow-xl hover:border-primary/50 transition-all duration-300"
                >
                  {item.image_url && (
                    <div className="mb-4 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center p-4">
                      <img
                        src={item.image_url}
                        alt={item.title}
                        className="w-full h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-gray-900 group-hover:text-primary transition-colors mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-body mb-3 line-clamp-2">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    <span className="text-sm font-body">Learn More</span>
                    <CgArrowLongRight className="w-5 h-5" />
                  </div>
                </Link>
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center mt-10 pt-8 border-t border-gray-200">
              <Link
                to="/technologies"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/90 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all font-body font-semibold"
              >
                <FiCpu className="w-5 h-5" />
                Explore All Technologies
                <CgArrowLongRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default TechnologyDetailPage;
