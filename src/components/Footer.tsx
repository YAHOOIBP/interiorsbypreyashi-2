import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Heart,
  Linkedin,
} from 'lucide-react';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Universal navigation handler - works for ALL pages
  const handleNavigation = (path: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    
    if (location.pathname === path) {
      // If already on the target page, scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to the page and then scroll to top
      navigate(path);
      // Small delay to ensure navigation completes before scrolling
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceAreas = [
    'Guwahati',
    'Tinsukia',
    'Dibrugarh', 
    'Jorhat',
    'Silchar',
    'Tezpur',
    'Itanagar',
    'Namsai',
    'Tezu',
    'Pasighat',
    'Upper Assam',
    'Arunachal Pradesh',
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <button
              onClick={() => handleNavigation('/')}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold leading-tight">
                  Interiors by Preyashi
                </h3>
                <p className="text-xs text-gray-400">Design • Vastu • Numerology</p>
              </div>
            </button>
            <p className="text-gray-300 leading-relaxed">
              Creating harmonious spaces through expert interior design, authentic Vastu 
              consultation, and personalized numerology guidance across Northeast India.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://instagram.com/interiorsbypreyashi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://facebook.com/interiorsbypreyashi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/company/interiorsbypreyashi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-gray-300 text-sm">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Tinsukia, Assam</p>
                  <p className="text-gray-400 text-sm">Northeast India</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a
                  href="tel:+918486076075"
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                >
                  +91 8486076075
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a
                  href="mailto:contact@interiorsbypreyashi.com"
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                >
                  contact@interiorsbypreyashi.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-400 text-sm">Sunday: By Appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <div className="flex items-center space-x-1 mb-4 md:mb-0">
              <span>© 2025 Interiors by Preyashi. Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>in Assam, India.</span>
            </div>
            <div className="flex space-x-6">
              <button
                onClick={() => handleNavigation('/privacy-policy')}
                className="hover:text-amber-400 transition-colors duration-300"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleNavigation('/terms-of-service')}
                className="hover:text-amber-400 transition-colors duration-300"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
