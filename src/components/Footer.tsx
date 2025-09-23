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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info with Logo */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              {/* Footer Logo */}
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                <img
                  src="/images/logo/logo.png"
                  alt="Interiors By Preyashi Logo"
                  className="w-10 h-10 object-contain rounded-full"
                  onError={(e) => {
                    // Fallback to text logo if image not found
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling!.style.display = 'block';
                  }}
                />
                {/* Fallback Text Logo */}
                <span className="text-white font-bold text-lg hidden">P</span>
              </div>
              
              <div>
                <h3 className="text-xl font-serif font-bold">Interiors by Preyashi</h3>
                <p className="text-gray-300 text-sm">Design • Vastu • Numerology</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Creating harmonious spaces through expert interior design, 
              Vastu Shastra, and Vedic Numerology across Northeast India.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/interiorsbypreyashi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/interiorsbypreyashi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/interiorsbypreyashi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
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
            <h3 className="text-lg font-semibold mb-6">Service Areas</h3>
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
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="tel:+918486076075" 
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                  >
                    +91 8486076075
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:contact@pmdesign.co.in" 
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300 break-all"
                  >
                    contact@pmdesign.co.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm leading-relaxed">
                  Manav Kalyan Road, Parbatia<br />
                  Namgarh Path -03<br />
                  Tinsukia, Assam - 786125
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Mon - Sat: 10 AM - 7 PM</p>
                  <p>Sunday: By Appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm text-center md:text-left">
              © 2024 Interiors By Preyashi. All rights reserved. | 
              <span className="inline-flex items-center ml-1">
                Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> in Northeast India
              </span>
            </div>
            
            <div className="flex space-x-6 text-sm text-center">
              <button className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
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
