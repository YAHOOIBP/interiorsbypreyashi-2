import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Home, Lightbulb, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const VastuInsights = () => {
  const insights = [
    {
      title: "Main Entrance Direction",
      icon: <Home className="w-8 h-8 text-amber-600" />,
      content: "The main entrance should ideally face north, northeast, or east to attract positive energy, prosperity, and good health into your home.",
      tip: "Ensure your entrance is well-lit, clutter-free, and welcoming with plants or auspicious symbols."
    },
    {
      title: "Kitchen Placement",
      icon: <Lightbulb className="w-8 h-8 text-orange-600" />,
      content: "Position your kitchen in the southeast corner (fire zone) and cook facing east to align with the sun's energy and promote good health.",
      tip: "Keep the kitchen clean, well-ventilated, and avoid placing it directly opposite the main entrance."
    },
    {
      title: "Master Bedroom Location",
      icon: <Compass className="w-8 h-8 text-purple-600" />,
      content: "The master bedroom should be in the southwest zone to ensure stability, good health, and strong relationships for the head of the family.",
      tip: "Position the bed with the headboard against the south or west wall for optimal rest and energy."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <SEOHead
        title="Vastu Insights - Ancient Wisdom for Modern Homes"
        description="Discover practical Vastu Shastra tips and insights for creating harmonious living spaces with positive energy flow."
        keywords="Vastu Shastra, Vastu tips, home Vastu, Vastu consultation, positive energy home"
        canonicalUrl="/vastu-insights"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif mb-6 text-gray-800">
              Vastu Insights
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ancient wisdom for modern living. Transform your space with time-tested Vastu principles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Insights */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  {insight.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-serif text-gray-800 mb-4">{insight.title}</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">{insight.content}</p>
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                    <p className="text-amber-800 font-medium">💡 Pro Tip: {insight.tip}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-serif mb-6">Need Personalized Vastu Guidance?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert Vastu consultation tailored to your specific space and needs.
          </p>
          <Link
            to="/contact"
            className="bg-white text-amber-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 inline-flex items-center"
          >
            Book Consultation
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default VastuInsights;
