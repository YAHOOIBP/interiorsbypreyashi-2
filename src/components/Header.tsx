import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { Link, useLocation } from 'react-router-dom';
=======
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
>>>>>>> 9cc960553008d53424c6989837d3be196c13dd8d
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
<<<<<<< HEAD
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
=======
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
>>>>>>> 9cc960553008d53424c6989837d3be196c13dd8d
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
<<<<<<< HEAD
    setShowServicesDropdown(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const servicesMenu = [
    { name: 'All Services', path: '/services' },
    { name: 'How We Work', path: '/how-we-work' },
    { name: 'Design Solutions', path: '/design-solutions' },
    { name: 'Turnkey Solutions', path: '/turnkey-solutions' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white shadow-md'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo Section - YOUR ACTUAL LOGO IMAGE */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 flex-shrink-0 z-50"
          >
            {/* Your actual logo image - UPDATE PATH AS NEEDED */}
            <img 
              src="/images/logo/logo.png" 
              alt="Interiors by Preyashi Logo" 
              className="w-14 h-14 lg:w-14 lg:h-14 object-contain"
              loading="eager"
            />
            <div className="flex flex-col">
              <span className="text-lg lg:text-xl font-bold text-neutral-dark">
                Interiors by Preyashi
              </span>
              <span className="text-xs text-neutral-dark hidden sm:block">
                Design • Vastu • Numerology
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-primary font-semibold' 
                  : 'text-neutral-dark hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/about') 
                  ? 'text-primary font-semibold' 
                  : 'text-neutral-dark hover:text-primary'
              }`}
            >
              About
            </Link>
            
            <div 
              className="relative"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <button
                className={`flex items-center text-sm font-medium transition-colors duration-200 ${
                  location.pathname.includes('/services')
                    ? 'text-primary font-semibold' 
                    : 'text-neutral-dark hover:text-primary'
                }`}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {showServicesDropdown && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                  {servicesMenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-neutral-dark hover:bg-neutral-light hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/where-we-work"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/where-we-work') 
                  ? 'text-primary font-semibold' 
                  : 'text-neutral-dark hover:text-primary'
              }`}
            >
              Where We Work
            </Link>
            <Link
              to="/portfolio"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/portfolio') 
                  ? 'text-primary font-semibold' 
                  : 'text-neutral-dark hover:text-primary'
              }`}
            >
              Portfolio
            </Link>
            <Link
              to="/blog"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/blog') 
                  ? 'text-primary font-semibold' 
                  : 'text-neutral-dark hover:text-primary'
              }`}
            >
              Blog
            </Link>
            <Link
              to="/faq"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/faq') 
                  ? 'text-primary font-semibold' 
                  : 'text-neutral-dark hover:text-primary'
              }`}
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white bg-primary hover:bg-primary-dark transition-colors duration-200 z-50"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-screen opacity-100 visible' 
              : 'max-h-0 opacity-0 invisible overflow-hidden'
          }`}
        >
          <nav className="py-4 border-t border-primary-light bg-white">
            <div className="space-y-1">
              <Link
                to="/"
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                  isActive('/') 
                    ? 'bg-primary text-white' 
                    : 'text-neutral-dark hover:bg-neutral-light hover:text-primary'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                  isActive('/about') 
                    ? 'bg-primary text-white' 
                    : 'text-neutral-dark hover:bg-neutral-light hover:text-primary'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              
              <div>
                <button
                  onClick={() => setShowServicesDropdown(!showServicesDropdown)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                    location.pathname.includes('/services')
                      ? 'bg-primary-light text-primary'
                      : 'text-neutral-dark hover:bg-neutral-light hover:text-primary'
                  }`}
                >
                  Services
                  <ChevronDown 
                    className={`h-5 w-5 transition-transform duration-200 ${
                      showServicesDropdown ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {showServicesDropdown && (
                  <div className="pl-4 mt-2 space-y-1 bg-neutral-light rounded-lg py-2">
                    {servicesMenu.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block px-4 py-2 text-sm rounded transition-colors duration-200 ${
                          isActive(item.path)
                            ? 'text-primary font-semibold'
                            : 'text-neutral-dark hover:text-primary'
                        }`}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setShowServicesDropdown(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/where-we-work"
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                  isActive('/where-we-work') 
                    ? 'bg-primary text-white' 
                    : 'text-neutral-dark hover:bg-neutral-light hover:text-primary'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Where We Work
              </Link>
              <Link
                to="/portfolio"
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                  isActive('/portfolio') 
                    ? 'bg-primary text-white' 
                    : 'text-neutral-dark hover:bg-neutral-light hover:text-primary'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/blog"
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                  isActive('/blog') 
                    ? 'bg-primary text-white' 
                    : 'text-neutral-dark hover:bg-neutral-light hover:text-primary'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/faq"
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                  isActive('/faq') 
                    ? 'bg-primary text-white' 
                    : 'text-neutral-dark hover:bg-neutral-light hover:text-primary'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className="block mx-4 my-3 bg-primary hover:bg-primary-dark text-white text-center py-3 px-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
=======
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
>>>>>>> 9cc960553008d53424c6989837d3be196c13dd8d
  );
};

export default Header;