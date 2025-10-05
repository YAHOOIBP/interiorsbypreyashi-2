import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
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
              className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
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
  );
};

export default Header;
