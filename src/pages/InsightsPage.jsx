import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CgArrowLongRight } from 'react-icons/cg';
import { FiClock, FiArrowRight } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  insightsData,
  insightCategories,
  formatInsightDate,
} from '../data/insightsData';

const PAGE_TITLE = 'Insights | Somvanshi Technologies';
const PAGE_DESCRIPTION =
  'Perspectives, research, and reports on enterprise AI, intelligent automation, and modernization from the Somvanshi Technologies Knowledge hub.';

const InsightCard = ({ item }) => (
  <article className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-300">
    <Link to={`/insights/${item.slug}`} className="block overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </Link>

    <div className="flex flex-col flex-1 p-6">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          {item.category}
        </span>
        <span className="w-1 h-1 rounded-full bg-gray-300" />
        <span className="text-xs text-muted font-body">
          {formatInsightDate(item.date)}
        </span>
      </div>

      <h3 className="font-heading text-lg font-bold text-text leading-snug mb-3 group-hover:text-primary transition-colors">
        <Link to={`/insights/${item.slug}`}>{item.title}</Link>
      </h3>

      <p className="font-body text-sm text-muted leading-relaxed mb-5 line-clamp-3">
        {item.excerpt}
      </p>

      <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-text font-body">
            {item.author}
          </span>
          <span className="text-[11px] text-muted font-body flex items-center gap-1">
            <FiClock className="w-3 h-3" />
            {item.readTime} min read
          </span>
        </div>
        <Link
          to={`/insights/${item.slug}`}
          aria-label={`Read ${item.title}`}
          className="text-primary group-hover:translate-x-1 transition-transform"
        >
          <CgArrowLongRight className="w-6 h-6" />
        </Link>
      </div>
    </div>
  </article>
);

const InsightsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
    const previousTitle = document.title;
    document.title = PAGE_TITLE;
    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta ? meta.getAttribute('content') : null;
    if (meta) meta.setAttribute('content', PAGE_DESCRIPTION);
    return () => {
      document.title = previousTitle;
      if (meta && previousDescription !== null) {
        meta.setAttribute('content', previousDescription);
      }
    };
  }, []);

  // Newest first across the whole collection.
  const sorted = useMemo(
    () =>
      [...insightsData].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      ),
    []
  );

  const featured = useMemo(
    () => sorted.find((item) => item.featured) || sorted[0],
    [sorted]
  );

  const filtered = useMemo(() => {
    const rest = sorted.filter((item) => item.slug !== featured.slug);
    if (activeCategory === 'All') return rest;
    return rest.filter((item) => item.category === activeCategory);
  }, [sorted, featured, activeCategory]);

  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />

      <main>
        {/* Page intro */}
        <section className="border-b border-border bg-gradient-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:pt-32 sm:pb-16">
            <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Knowledge Institute
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text max-w-4xl leading-tight">
              Insights
            </h1>
            <p className="mt-5 font-body text-lg text-muted max-w-2xl leading-relaxed">
              Perspectives, research, and reports on enterprise AI, intelligent
              automation, and modernization, drawn from the work we do with
              banks, healthcare providers, logistics operators, and
              institutions.
            </p>
          </div>
        </section>

        {/* Featured insight */}
        {featured && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
            <Link
              to={`/insights/${featured.slug}`}
              className="group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center rounded-3xl border border-border hover:border-primary/40 hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white"
            >
              <div className="h-64 lg:h-full min-h-[320px] overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 lg:py-12 lg:pr-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                    Featured
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {featured.category}
                  </span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-text leading-tight group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-4 font-body text-base text-muted leading-relaxed max-w-xl">
                  {featured.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-4 text-sm font-body text-muted">
                  <span className="font-semibold text-text">
                    {featured.author}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span>{formatInsightDate(featured.date)}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="flex items-center gap-1">
                    <FiClock className="w-3.5 h-3.5" />
                    {featured.readTime} min read
                  </span>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-primary font-semibold font-body group-hover:gap-3 transition-all">
                  Read insight
                  <FiArrowRight className="w-5 h-5" />
                </span>
              </div>
            </Link>
          </section>
        )}

        {/* Category filters */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20">
          <div
            role="tablist"
            aria-label="Filter insights by category"
            className="flex flex-wrap gap-2 border-b border-border pb-5"
          >
            {insightCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all ${
                    isActive
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-text'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Card grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
              {filtered.map((item) => (
                <InsightCard key={item.slug} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-heading text-xl font-semibold text-text mb-2">
                No insights in this category yet
              </p>
              <p className="font-body text-muted">
                Choose another category to keep reading.
              </p>
            </div>
          )}
        </section>

        {/* Closing CTA, consistent with the rest of the site */}
        <section className="mt-20 sm:mt-28 bg-gradient-soft border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="max-w-2xl">
              <p className="font-body text-sm font-bold text-primary uppercase tracking-wider">
                Put these ideas to work
              </p>
              <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-bold text-text leading-tight">
                Let's talk about your roadmap
              </h2>
              <p className="mt-4 font-body text-base text-muted leading-relaxed">
                From agentic operations to legacy modernization, we help
                enterprises turn these strategies into running systems. Start a
                conversation with our team.
              </p>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-white font-body font-medium hover:opacity-90 transition-opacity"
              >
                Start a conversation
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

export default InsightsPage;
