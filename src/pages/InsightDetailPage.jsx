import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight, FiClock, FiCalendar } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  getInsightBySlug,
  getRelatedInsights,
  formatInsightDate,
} from '../data/insightsData';

const InsightDetailPage = () => {
  const { slug } = useParams();
  const insight = getInsightBySlug(slug);
  const related = getRelatedInsights(slug, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!insight) return;
    const previousTitle = document.title;
    document.title = insight.seo?.title || `${insight.title} | Somvanshi Technologies`;
    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta ? meta.getAttribute('content') : null;
    if (meta && insight.seo?.description) {
      meta.setAttribute('content', insight.seo.description);
    }
    return () => {
      document.title = previousTitle;
      if (meta && previousDescription !== null) {
        meta.setAttribute('content', previousDescription);
      }
    };
  }, [insight]);

  if (!insight) {
    return (
      <div className="min-h-screen w-full bg-white">
        <Navbar />
        <main className="max-w-3xl mx-auto px-6 py-32 text-center">
          <h1 className="font-heading text-3xl font-bold text-text mb-4">
            Insight not found
          </h1>
          <p className="font-body text-muted mb-8">
            The article you are looking for may have moved or no longer exists.
          </p>
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-white font-body font-medium hover:opacity-90 transition-opacity"
          >
            <FiArrowLeft className="w-5 h-5" />
            Back to Insights
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />

      <main>
        {/* Header */}
        <header className="border-b border-border bg-gradient-soft">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:pt-32 sm:pb-14">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-sm font-body font-medium text-muted hover:text-primary transition-colors mb-8"
            >
              <FiArrowLeft className="w-4 h-4" />
              All Insights
            </Link>

            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
              {insight.category}
            </span>

            <h1 className="mt-5 font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-text leading-[1.15]">
              {insight.title}
            </h1>

            <p className="mt-5 font-body text-lg text-muted leading-relaxed">
              {insight.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-body text-muted">
              <span className="font-semibold text-text">{insight.author}</span>
              {insight.role && (
                <span className="text-muted">{insight.role}</span>
              )}
              <span className="hidden sm:inline w-1 h-1 rounded-full bg-gray-300" />
              <span className="flex items-center gap-1.5">
                <FiCalendar className="w-3.5 h-3.5" />
                {formatInsightDate(insight.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <FiClock className="w-3.5 h-3.5" />
                {insight.readTime} min read
              </span>
            </div>
          </div>
        </header>

        {/* Hero image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 sm:mt-0 sm:pt-12">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={insight.image}
              alt={insight.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Reading column */}
        <article className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div
            className="insight-prose"
            dangerouslySetInnerHTML={{ __html: insight.content }}
          />

          {/* Tags */}
          {insight.tags?.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-2">
              {insight.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-gray-50 border border-border text-xs font-body font-medium text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </article>

        {/* Related Insights */}
        {related.length > 0 && (
          <section className="border-t border-border bg-gradient-soft">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text mb-10">
                Related Insights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/insights/${item.slug}`}
                    className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="h-40 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col flex-1 p-6">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                        {item.category}
                      </span>
                      <h3 className="font-heading text-base font-bold text-text leading-snug group-hover:text-primary transition-colors line-clamp-3">
                        {item.title}
                      </h3>
                      <span className="mt-auto pt-4 text-xs text-muted font-body flex items-center gap-1">
                        <FiClock className="w-3 h-3" />
                        {item.readTime} min read
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Closing CTA */}
        <section className="bg-text">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="max-w-2xl">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight">
                Ready to move from insight to implementation?
              </h2>
              <p className="mt-4 font-body text-base text-gray-300 leading-relaxed">
                Our teams help enterprises design and run intelligent systems
                across operations, financial services, healthcare, and logistics.
                Tell us what you are working on.
              </p>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-white font-body font-medium hover:opacity-90 transition-opacity"
              >
                Talk to our team
                <FiArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InsightDetailPage;
