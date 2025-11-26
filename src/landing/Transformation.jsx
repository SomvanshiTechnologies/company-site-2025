import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Brain,
  Cloud,
  Code,
  MessageSquare,
  ArrowRight,
  Zap,
  Database,
  Shield
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import background from '../assets/images/bg-for-service.jpg'

const Transformation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const navigate = useNavigate();

  const services = [
    {
      icon: Brain,
      title: 'AI Automation',
      description: 'Intelligent process automation that reduces manual work by 80% and eliminates human error.',
      features: ['Machine Learning Models', 'Process Optimization', 'Predictive Analytics'],
      color: 'from-purple-500 to-purple-600',
      delay: 0,
    },
    {
      icon: Cloud,
      title: 'Custom SaaS',
      description: 'Scalable cloud solutions built for enterprise needs with 99.9% uptime guarantee.',
      features: ['Cloud Architecture', 'Multi-tenant Systems', 'API Development'],
      color: 'from-blue-500 to-blue-600',
      delay: 0.1,
    },
    {
      icon: Code,
      title: 'Enterprise Development',
      description: 'Full-stack applications that handle millions of users with enterprise-grade security.',
      features: ['Web Applications', 'Mobile Apps', 'System Integration'],
      color: 'from-green-500 to-green-600',
      delay: 0.2,
    },
    {
      icon: MessageSquare,
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation roadmaps that drive business growth.',
      features: ['Strategy Consulting', 'Digital Roadmaps', 'Technology Audit'],
      color: 'from-primary to-primary',
      delay: 0.3,
    },
  ];

  return (
    <section className="py-12 relative overflow-hidden" ref={ref}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={background}
          alt="Developers working in modern office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="text-white relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-gilroy font-extrabold md:text-4xl mb-4">
            Solutions That <span className="text-brand-orange">Transform</span>
          </h2>
          <p className="text-lg    max-w-3xl mx-auto">
            We engineer cutting-edge technology solutions that solve complex business challenges
            and drive sustainable growth for enterprises worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: service.delay }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-linear-to-br ${service.color} opacity-10 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-125 transition-transform duration-500`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-linear-to-br ${service.color} rounded-lg mb-4 shadow-lg`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-gilroy font-extrabold text-dark-gray mb-3 group-hover:text-brand-orange transition-colors">
                  {service.title}
                </h3>

                <p className="   text-medium-gray mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs    text-medium-gray">
                      <div className="w-1 h-1 bg-brand-orange rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {/* <motion.button
                  className="inline-flex items-center gap-2 text-brand-orange    font-semibold text-sm hover:gap-3 transition-all duration-300"
                  whileHover={{ x: 3 }}
                >
                  Learn More
                  <ArrowRight className="w-3 h-3" />
                </motion.button> */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg    font-semibold transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/solutions')}
          >
            <Zap className="w-4 h-4" />
            Explore All Solutions
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Transformation;
