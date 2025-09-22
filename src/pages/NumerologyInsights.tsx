import React from 'react';
import { motion } from 'framer-motion';
import { Hash, Star, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const NumerologyInsights = () => {
  const insights = [
    {
      title: "Life Path Numbers",
      icon: <Star className="w-8 h-8 text-purple-600" />,
      content: "Your life path number, calculated from your birth date, reveals your life's purpose and the colors, materials, and design elements that resonate with your energy.",
      tip: "Life Path 1: Bold reds and golds. Life Path 2: Soft blues and silver. Life Path 3: Vibrant yellows and purple accents."
    },
    {
      title: "House Number Vibration",
      icon: <Hash className="w-8 h-8 text-blue-600" />,
      content: "Your house number influences the energy of your living space. Each number attracts different experiences and opportunities into your life.",
      tip: "House #1: Leadership energy. #2: Cooperation. #3: Creativity. #4: Stability. #5: Change and freedom."
    },
    {
      title: "Personal Year Cycles",
      icon: <Target className="w-8 h-8 text-green-600" />,
      content: "Understanding your personal year number helps you choose the right time for home renovations, moves, and major interior design changes.",
      tip: "Personal Year 1: New beginnings, perfect for major renovations. Year 4: Focus on organization and structural improvements."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <SEOHead
        title="Numerology Insights - Sacred Numbers for Interior Design"
        description="Discover how Vedic numerology can guide your interior design choices and create spaces aligned with your personal energy."
        keywords="Vedic numerology, numerology interior design, life path numbers, house numbers, personal numerology"
        canonicalUrl="/numerology-insights"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif mb-6 text-gray-800">
              Numerology Insights
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Sacred numbers that guide your interior design choices for spaces that truly resonate with your energy.
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
                  <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                    <p className="text-purple-800 font-medium">🔮 Numerology Tip: {insight.tip}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-serif mb-6">Discover Your Personal Numbers</h2>
          <p className="text-xl mb-8 opacity-90">
            Get a personalized numerology consultation to align your space with your unique energy signature.
          </p>
          <Link
            to="/contact"
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 inline-flex items-center"
          >
            Book Numerology Reading
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NumerologyInsights;
