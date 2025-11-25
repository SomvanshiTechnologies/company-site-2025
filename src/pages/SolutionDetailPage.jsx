import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CgArrowLongRight } from "react-icons/cg";
import { FiArrowLeft, FiTag, FiBox } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { supabase } from '../config/supabase';

const SolutionDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [solution, setSolution] = useState(null);
  const [relatedSolutions, setRelatedSolutions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchSolutionDetails();
  }, [id]);

  const fetchSolutionDetails = async () => {
    try {
      // Fetch the current solution
      const { data: currentSolution, error: currentError } = await supabase
        .from('solutions')
        .select('*')
        .eq('id', id)
        .eq('is_published', true)
        .single();

      if (currentError) throw currentError;
      setSolution(currentSolution);

      // Fetch related solutions (same category, different id)
      const { data: related, error: relatedError } = await supabase
        .from('solutions')
        .select('id, title, category, excerpt, image_url')
        .eq('is_published', true)
        .eq('category', currentSolution.category)
        .neq('id', id)
        .limit(3);

      if (relatedError) throw relatedError;
      setRelatedSolutions(related || []);
    } catch (error) {
      console.error('Error fetching solution details:', error);
      setSolution(null);
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
          <p className="text-gray-600 font-body">Loading solution details...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!solution) {
    return (
      <div className="min-h-screen w-full bg-white">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl font-heading font-bold text-primary mb-4">
            Solution Not Found
          </h1>
          <p className="text-gray-600 font-body mb-6">
            The solution you're looking for doesn't exist.
          </p>
          <Link
            to="/solutions"
            className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-body font-medium"
          >
            Back to All Solutions
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
          Back to Solutions
        </button>

        {/* Solution Header */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-10 mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-sm font-semibold rounded-full border border-primary/20">
              <FiTag className="w-4 h-4" />
              {solution.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
            {solution.title}
          </h1>

          <p className="text-lg text-gray-600 font-body">
            {solution.excerpt}
          </p>
        </div>

        {/* Featured Image */}
        {solution.image_url && (
          <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={solution.image_url}
              alt={solution.title}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Solution Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-10 mb-10">
          <div
            className="prose prose-lg max-w-none font-body"
            dangerouslySetInnerHTML={{ __html: solution.content }}
            style={{
              lineHeight: '1.8',
            }}
          />
        </div>

        {/* Related Solutions Section */}
        {relatedSolutions.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-8 flex items-center gap-2">
              <span className="w-1 h-8 bg-primary rounded"></span>
              Related Solutions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedSolutions.map((item) => (
                <Link
                  key={item.id}
                  to={`/solutions/${item.id}`}
                  className="group p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl hover:shadow-xl hover:border-primary/50 transition-all duration-300"
                >
                  {item.image_url && (
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <img
                        src={item.image_url}
                        alt={item.title}
                        className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
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
                to="/solutions"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/90 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all font-body font-semibold"
              >
                <FiBox className="w-5 h-5" />
                Explore All Solutions
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

export default SolutionDetailPage;
