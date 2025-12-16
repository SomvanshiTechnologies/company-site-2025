import React from 'react';

// --- Data for the capabilities ---
const capabilitiesData = [
  {
    title: 'Intelligent Insights',
    description: 'Turn complex data into clear decisions with AI that learns your patterns and predicts outcomes.',
    linkText: 'View More',
  },
  {
    title: 'Autonomous Operations',
    description: 'Eliminate repetitive tasks our AI automates workflows, saving time and improving accuracy.',
    linkText: 'View More',
  },
  {
    title: 'Fortified Intelligence',
    description: 'AI systems that are strong, secure, and reliable protected from threats and built to operate safely at scale.',
    linkText: 'View More',
  }
];

export default function CoreCapabilities() {
  return (
    // Section wrapper with a white background
    <section className="bg-gray-50 py-32 sm:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900" style={{ lineHeight: '1.2' }}>
            AI that Transforms the Way You Work
          </h2>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

          {capabilitiesData.map((item, index) => (
            // Each column item
            <div key={item.title} className="bg-white p-10 rounded-xl border border-gray-200 flex flex-col">

              <h4 className="font-heading text-2xl font-bold mb-5 text-gray-900" style={{ lineHeight: '1.3' }}>
                {item.title}
              </h4>

              <p className="font-body text-gray-600 text-base" style={{ lineHeight: '1.7' }}>
                {item.description}
              </p>
                
                {/* "View More" Link
                  - 'mt-auto' pushes it to the bottom of the flex container
                  - 'pt-6' adds padding above it
                  - For the last item (index === 2), 'md:self-end' aligns it to the right
                */}
                {/* <a
                  href="#"
                  className={`
                    font-body font-medium text-white hover:opacity-80 mt-auto pt-6
                    ${index === capabilitiesData.length - 1 ? 'md:self-end' : 'self-start'}
                  `}
                >
                  {item.linkText}
                </a> */}
              </div>
            ))}

          </div>

      </div>
    </section>
  );
}