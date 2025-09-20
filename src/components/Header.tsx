import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "How We Work", path: "/how-we-work" },
        { name: "Design Solutions", path: "/design-solutions" },
        { name: "Turnkey Solutions", path: "/turnkey-solutions" },
      ],
    },
    { name: "Where We Work", path: "/where-we-work" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  // This always shows a visible header with correct coloring on all routes
  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 bg-white shadow text-gray-900`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Interiors By Preyashi Logo"
            className="h-10 w-10 object-contain"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          <span className="font-montserrat font-bold text-xl hidden sm:inline-block">
            Interiors By Preyashi
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center font-semibold">
          {navigationItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {/* Make the top-level Services item a clickable Link */}
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 hover:text-amber-600 ${
                    location.pathname.startsWith(item.path)
                      ? "text-amber-600 font-bold"
                      : ""
                  }`}
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === item.name}
                >
                  {item.name} <ChevronDown size={16} />
                </Link>
                {activeDropdown === item.name && (
                  <div className="absolute top-full left-0 bg-white text-gray-900 shadow-lg rounded-md py-2 w-48">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-4 py-2 hover:bg-amber-100"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className={`hover:text-amber-600 ${
                  location.pathname === item.path
                    ? "text-amber-600 font-bold"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="hidden md:inline-block px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full font-semibold hover:scale-105 transition-transform"
        >
          Schedule Consultation
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 rounded-md focus:outline-none text-gray-900`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg text-gray-900">
          <div className="px-4 py-4">
            {navigationItems.map((item) => (
              <div key={item.name} className="mb-2">
                {item.dropdown ? (
                  <>
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-full flex justify-between items-center px-2 py-2 font-semibold hover:bg-amber-100 rounded-md"
                    >
                      {item.name}
                      <ChevronDown />
                    </Link>
                    {activeDropdown === item.name && (
                      <div className="mt-1 pl-4 border-l border-gray-300">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-2 py-1 hover:bg-amber-100 rounded-md"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 font-semibold hover:bg-amber-100 rounded-md"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            {/* Mobile CTA Button */}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full px-4 py-3 mt-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-md font-semibold hover:scale-105 transition-transform text-center block"
            >
              Schedule Consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
