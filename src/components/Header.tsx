import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

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
    
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      dropdown: [
        { name: 'How We Work', path: '/how-we-work' },
        { name: 'Design Solutions', path: '/design-solutions' },
        { name: 'Turnkey Solutions', path: '/turnkey-solutions' },
      ],
    },
    { name: 'Where We Work', path: '/where-we-work' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const renderNavItem = (item: any, isMobile = false) => {
    if (item.dropdown) {
      return (
        <div className="relative group" key={item.name}>
          <button
            onClick={() => {
              if (isMobile) {
                handleDropdownToggle(item.name);
              } else {
                handleNavigation(item.path);
              }
            }}
            className={`${
              isMobile
                ? 'flex items-center justify-between w-full px-4 py-3 text-left hover:bg-gray-50'
                : 'flex items-center px-3 py-2 hover:text-amber-600'
            } transition-colors duration-300 ${
              location.pathname === item.path ||
              item.dropdown.some((dropdownItem: any) => dropdownItem.path === location.pathname)
                ? 'text-amber-600 font-semibold'
                : 'text-gray-700 hover:text-amber-600'
            }`}
          >
            {item.name}
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>

          {/* Desktop Dropdown */}
          {!isMobile && (
            <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-2">
                {item.dropdown.map((dropdownItem: any) => (
                  <button
                    key={dropdownItem.name}
                    onClick={() => handleNavigation(dropdownItem.path)}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300"
                  >
                    {dropdownItem.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Mobile Dropdown */}
          {isMobile && activeDropdown === item.name && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 overflow-hidden"
            >
              {item.dropdown.map((dropdownItem: any) => (
                <button
                  key={dropdownItem.name}
                  onClick={() => handleNavigation(dropdownItem.path)}
                  className="block w-full text-left px-8 py-3 text-gray-600 hover:text-amber-600 transition-colors duration-300"
                >
                  {dropdownItem.name}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      );
    }

    return (
      <button
        key={item.name}
        onClick={() => handleNavigation(item.path)}
        className={`${
          isMobile
            ? 'block w-full text-left px-4 py-3 hover:bg-gray-50'
            : 'px-3 py-2 hover:text-amber-600'
        } transition-colors duration-300 ${
          location.pathname === item.path
            ? 'text-amber-600 font-semibold'
            : 'text-gray-700 hover:text-amber-600'
        }`}
      >
        {item.name}
      </button>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/'
          ? 'bg-white shadow-md'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => handleNavigation('/')}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <h1 className="text-xl font-serif text-gray-800 font-bold leading-tight">
                  Interiors by Preyashi
                </h1>
                <p className="text-xs text-gray-600">Design • Vastu • Numerology</p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => renderNavItem(item))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-gray-200 bg-white overflow-hidden"
          >
            <div className="py-4">
              {navigationItems.map((item) => renderNavItem(item, true))}
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;
