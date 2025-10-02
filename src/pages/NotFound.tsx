import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-light flex items-center justify-center px-4">
      <SEOHead
        title="404 - Page Not Found | Interiors By Preyashi"
        description="The page you're looking for doesn't exist. Return to Interiors By Preyashi homepage."
        canonicalUrl="/404"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-dark mb-4">
          Page Not Found
        </h2>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track to creating your dream space.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Home className="w-5 h-5 mr-2" />
            Go to Homepage
          </Link>

          <Link
            to="/portfolio"
            className="inline-flex items-center border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            View Portfolio
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center bg-cta hover:bg-green-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Phone className="w-5 h-5 mr-2" />
            Contact Us
          </Link>
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-neutral-dark mb-3">
            Quick Links
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <Link to="/about" className="text-primary hover:text-primary-dark transition-colors">
              About Us
            </Link>
            <Link to="/services" className="text-primary hover:text-primary-dark transition-colors">
              Services
            </Link>
            <Link to="/portfolio" className="text-primary hover:text-primary-dark transition-colors">
              Portfolio
            </Link>
            <Link to="/blog" className="text-primary hover:text-primary-dark transition-colors">
              Blog
            </Link>
            <Link to="/faq" className="text-primary hover:text-primary-dark transition-colors">
              FAQ
            </Link>
            <Link to="/contact" className="text-primary hover:text-primary-dark transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
