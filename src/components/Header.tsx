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
        <div key={item.name} className={isMobile ? 'w-full' : 'relative group'}>
          <button
  onClick={() => {
    if (isMobile) {
      // Always navigate first
      handleNavigation(item.path);
      // Then toggle submenu
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
            <ChevronDown className={`w-4 h-4 ml-1 ${isMobile && activeDropdown === item.name ? 'rotate-180' : ''} transition-transform duration-300`} />
          </button>

          {/* Desktop Dropdown */}
          {!isMobile && (
            <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              {item.dropdown.map((dropdownItem: any) => (
                <button
                  key={dropdownItem.name}
                  onClick={() => handleNavigation(dropdownItem.path)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300 first:rounded-t-lg last:rounded-b-lg"
                >
                  {dropdownItem.name}
                </button>
              ))}
            </div>
          )}

          {/* Mobile Dropdown */}
          {isMobile && activeDropdown === item.name && (
            <div className="bg-gray-50">
              {item.dropdown.map((dropdownItem: any) => (
                <button
                  key={dropdownItem.name}
                  onClick={() => handleNavigation(dropdownItem.path)}
                  className="block w-full text-left px-8 py-3 text-gray-600 hover:text-amber-600 transition-colors duration-300"
                >
                  {dropdownItem.name}
                </button>
              ))}
            </div>
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
    <>
      {/* Fixed Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Section */}
            <div className="flex items-center flex-shrink-0">
              <button
                onClick={() => handleNavigation('/')}
                className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300"
              >
                {/* Logo Image */}
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
                
                {/* Brand Text */}
                <div className="block">
  <h1 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-gray-800 leading-tight">
    Interiors by Preyashi
  </h1>
  <p className="text-xs sm:text-sm text-gray-600 -mt-1">
    Design • Vastu • Numerology
  </p>
</div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => renderNavItem(item))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-gray-700 hover:text-amber-600 hover:bg-gray-100 transition-colors duration-300"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            {/* Mobile Brand Text (Show when menu is open) */}
            <div className="px-4 py-3 border-b border-gray-200 sm:hidden">
              <h2 className="text-lg font-serif font-bold text-gray-800">
                Interiors by Preyashi
              </h2>
              <p className="text-sm text-gray-600">
                Design • Vastu • Numerology
              </p>
            </div>
            
            <nav className="py-2 max-h-96 overflow-y-auto">
              {navigationItems.map((item) => renderNavItem(item, true))}
            </nav>
          </motion.div>
        )}
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;
