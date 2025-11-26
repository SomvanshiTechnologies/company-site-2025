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
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-text">
            AI that Transforms the Way You Work
          </h2>
        </div>
        
        {/* Main Purple Gradient Container */}
        <div className="bg-gradient-purple text-white rounded-xl shadow-2xl p-10 sm:p-12 lg:p-16">
          
          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-7">
            
            {capabilitiesData.map((item, index) => (
              // Each column item
              // Using flex to push the "View More" link to the bottom
              <div key={item.title} className="flex flex-col">
                
                <h4 className="font-heading text-3xl font-semibold mb-4 text-left">
                  {item.title}
                </h4>
                
                <p className="font-body text-gray-300 text-sm leading-7 text-left">
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
        
      </div>
    </section>
  );
}