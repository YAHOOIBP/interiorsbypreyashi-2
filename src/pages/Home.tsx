import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Users, Award, Heart, Play, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import LeadModal from '../components/LeadModal';

const Home = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentInteriorIndex, setCurrentInteriorIndex] = useState(0);
  const [currentVastuTip, setCurrentVastuTip] = useState(0);
  const [currentNumerologyInsight, setCurrentNumerologyInsight] = useState(0);
  const [currentDrawingIndex, setCurrentDrawingIndex] = useState(0);
  const [currentClientLogoIndex, setCurrentClientLogoIndex] = useState(0);

  // AutoCAD Drawings for Hero Section
  const autocadDrawings = [
    { src: "/images/autocad/floor-plan-1.jpg", alt: "Modern Floor Plan - Living Space Design", title: "Contemporary Floor Plan" },
    { src: "/images/autocad/elevation-1.jpg", alt: "Interior Elevation - Design", title: " Elevation" },
    { src: "/images/autocad/section-1.jpg", alt: "Architectural Section - Cross Section View", title: "Section Drawing" },
    { src: "/images/autocad/3d-plan.jpg", alt: "3D Floor Plan - Detailed Layout", title: "3D Visualization" }
  ];

  // Client Logos for Carousel
  const clientLogos = [
    { src: "/images/clients/client-1.png", alt: "Client Logo 1" },
    { src: "/images/clients/client-2.png", alt: "Client Logo 2" },
    { src: "/images/clients/client-3.png", alt: "Client Logo 3" },
    { src: "/images/clients/client-4.png", alt: "Client Logo 4" },
    { src: "/images/clients/client-5.png", alt: "Client Logo 5" },
    { src: "/images/clients/client-6.png", alt: "Client Logo 6" },
    { src: "/images/clients/client-7.png", alt: "Client Logo 7" },
    { src: "/images/clients/client-8.png", alt: "Client Logo 8" }
  ];

  // Streamlined content arrays
  const worldClassInteriors = [
    {
      title: "Contemporary Indian Luxury",
      description: "Sophisticated spaces that celebrate rich cultural heritage while embracing modern functionality.",
      inspiration: "Drawing from Rajasthani palaces and modern Mumbai penthouses"
    },
    {
      title: "Scandinavian-Indian Fusion",
      description: "Minimalist Nordic design principles enhanced with warm Indian textiles and craftsmanship.",
      inspiration: "Inspired by Danish hygge meets traditional Indian comfort"
    },
    {
      title: "Art Deco Revival",
      description: "Bold geometric patterns and metallic accents create glamorous, timeless interiors.",
      inspiration: "Channeling 1920s Mumbai architecture with contemporary touches"
    },
    {
      title: "Biophilic Luxury",
      description: "Nature-integrated designs that bring the outdoors inside for wellness and tranquility.",
      inspiration: "Kerala backwaters and Japanese zen gardens reimagined for modern living"
    }
  ];

  const vastuTips = [
    {
      title: "Entrance Energy Flow",
      tip: "Keep your main entrance clean, well-lit, and obstacle-free to welcome positive energy. A beautiful nameplate and healthy plants enhance the welcoming energy."
    },
    {
      title: "Kitchen Placement Power",
      tip: "Position your kitchen in the southeast zone and face east while cooking to align with natural fire energy and promote health and prosperity."
    },
    {
      title: "Bedroom Rest & Romance",
      tip: "Place your bed in the southwest corner with headboard against a solid wall, avoiding mirrors facing the bed for better sleep and relationships."
    }
  ];

  const numerologyInsights = [
    {
      title: "Personal Number Harmony",
      tip: "Your birth date number influences your ideal color palette - discover which colors resonate with your personal energy for a truly harmonious space."
    },
    {
      title: "Address Vibrations",
      tip: "Your house number affects the energy of your space. Learn how to enhance or balance your home's numerical vibration through strategic design choices."
    }
  ];

  const testimonials = [
    {
      name: "RAJAT RATHI",
      location: "Dibrugarh, Assam",
      text: "She thoroughly investigated our budget and requirements before arriving at two design options. The whole process felt she's very personable and a pleasure to work with. The end result was stunning and we are extremely happy.",
      rating: 5
    },
    {
      name: "Purnima Gogoi",
      location: "Tinsukia, Assam", 
      text: "Love the work. Very knowledgeable and dedicated people towards their work. Worth the money. Best interior designer in Tinsukia so far.",
      rating: 5
    },
    {
      name: "Ruchika Bhatti",
      location: "Kharagpur",
      text: "I had a great experience with her, she is a great designer, I would always recommend her to everyone ❤️.",
      rating: 5
    },
    {
      name: "Kajal Jain",
      location: "Duliajan, Assam", 
      text: "They have got amazing designs..I really loved ur work😍.",
      rating: 5
    },
    {
      name: "Sumit Sharma",
      location: "Tinsukia, Assam", 
      text: "Good behaviour, professional, very creative mind.",
      rating: 5
    },
    {
      name: "Rachna Goyal",
      location: "Tinsukia, Assam", 
      text: "Very efficient n hard working n very innovative ideas. Positive, Quality.",
      rating: 5
    },
    {
      name: "Keshav Kanoi",
      location: "Tinsukia, Assam", 
      text: "Worth for money. Thanks PM designs for the Excellent work.",
      rating: 5
    },
    {
      name: "Sneha Sovasaria",
      location: "Tinsukia, Assam", 
      text: "Positive — Responsiveness, Punctuality, Quality, Professionalism, Value.",
      rating: 5
    }
  ];

  // Enhanced Instagram Reels with Links and Cover Images
  const instagramReels = [
    {
      title: "Entrances Main Door Designs",
      description: "Who knew a door could set the vibe this hard?",
      coverImage: "/images/reels/reel-cover-1.jpg",
      reelLink: "https://www.instagram.com/reel/DMFY-N7ycuf"
    },
    {
      title: "360 degree view of conference room", 
      description: "Ever wondered what the perfect conference room looks like?",
      coverImage: "/images/reels/reel-cover-2.jpg",
      reelLink: "https://www.instagram.com/reel/DG4-b0sSZGP"
    },
    {
      title: "Are you Ruled by planet Moon ?",
      description: "Ruled by the Moon, you’re sensitive, intuitive & emotionally tuned in",
      coverImage: "/images/reels/reel-cover-3.jpg",
      reelLink: "https://www.instagram.com/reel/DLE2bnJSrhP"
    },
    {
      title: "Modern Bedroom Makeover",
      description: "Renovation focused on updating the room while keeping the original floor", 
      coverImage: "/images/reels/reel-cover-4.jpg",
      reelLink: "https://www.instagram.com/reel/C_DprW9PrNi"
    },
    {
      title: "Clients Testimonial",
      description: "Our clients are the heart of our business",
      coverImage: "/images/reels/reel-cover-5.jpg", 
      reelLink: "https://www.instagram.com/reel/C_dZ34uv6rM"
    },
    {
      title: "Transformation Of Favourite Corner",
      description: "Testament to effective design, where form meets function",
      coverImage: "/images/reels/reel-cover-5.jpg", 
      reelLink: "https://www.instagram.com/reel/CeTMFuvphOq"
    },
    {
      title: "Trendy kids Bedroom colour combinations",
      description: "Heaven for little ones with our expert-approved color combination",
      coverImage: "/images/reels/reel-cover-5.jpg", 
      reelLink: "https://www.instagram.com/reel/C_fx6UfPAfw"
    }
  ];

  // Auto-rotate content with scroll position awareness
  useEffect(() => {
    const intervals = [
      setInterval(() => setCurrentDrawingIndex(prev => (prev + 1) % autocadDrawings.length), 3000),
      setInterval(() => setCurrentInteriorIndex(prev => (prev + 1) % worldClassInteriors.length), 4000),
      setInterval(() => setCurrentVastuTip(prev => (prev + 1) % vastuTips.length), 5000),
      setInterval(() => setCurrentNumerologyInsight(prev => (prev + 1) % numerologyInsights.length), 6000),
      setInterval(() => setCurrentTestimonial(prev => (prev + 1) % testimonials.length), 7000)
    ];

    return () => intervals.forEach(clearInterval);
  }, []);

  // Handle home page navigation - scroll to top
  useEffect(() => {
    const handleHomeNavigation = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Listen for home navigation events
    window.addEventListener('navigateHome', handleHomeNavigation);
    return () => window.removeEventListener('navigateHome', handleHomeNavigation);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness", 
    "name": "Interiors By Preyashi",
    "description": "Expert interior design services with Vastu consultation and numerology guidance in Northeast India",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tinsukia",
      "addressRegion": "Assam", 
      "addressCountry": "IN"
    },
    "telephone": "+918486076075",
    "url": "https://interiorsbypreyashi.com",
    "founder": {
      "@type": "Person",
      "name": "Preyashi More Birmiwal"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "127"
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Interior Design Services | Vastu Shastra & Numerology | Interiors By Preyashi"
        description="Transform your space with expert interior design, Vastu consultation, and numerology guidance in Northeast India. Creating harmonious homes and offices in Tinsukia, Assam."
        keywords="interior design, vastu shastra, numerology, home design, office interiors, Tinsukia, Assam, Northeast India"
        canonicalUrl="/"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-gray-800 leading-tight"
            >
              Where ancient wisdom meets modern design.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed"
            >
              Creating harmonious spaces through<br />
              <span className="text-amber-700 font-semibold">Interior Design</span>, <span className="text-amber-700 font-semibold">Vastu Shastra</span> & <span className="text-amber-700 font-semibold">Vedic Numerology</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => setIsLeadModalOpen(true)}
                className="bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Your Journey
              </button>
              <Link
                to="/portfolio"
                className="border border-amber-600 text-amber-700 px-8 py-4 rounded-lg text-lg font-medium hover:bg-amber-600 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                View Portfolio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentDrawingIndex}
                  src={autocadDrawings[currentDrawingIndex].src}
                  alt={autocadDrawings[currentDrawingIndex].alt}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.7 }}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "/images/hero/hero-fallback.jpg";
                  }}
                />
              </AnimatePresence>
              
              {/* Overlay with title */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-white font-semibold">{autocadDrawings[currentDrawingIndex].title}</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* World-Class Interiors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">World-Class Interiors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our portfolio of luxury interiors that blend modern sophistication with traditional Indian elements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-80 rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="w-24 h-24 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                    <Star className="w-12 h-12 text-amber-600" />
                  </div>
                  <p>Premium Interior Showcase</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentInteriorIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-3xl font-serif text-gray-800 mb-4">
                    {worldClassInteriors[currentInteriorIndex].title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    {worldClassInteriors[currentInteriorIndex].description}
                  </p>
                  <p className="text-amber-700 font-medium italic">
                    {worldClassInteriors[currentInteriorIndex].inspiration}
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vastu Wisdom Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-gray-800">Vastu Wisdom</h2>
              <p className="text-xl text-gray-600">
                Transform your home into a sanctuary of positive energy with time-tested Vastu Shastra principles
              </p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentVastuTip}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {vastuTips[currentVastuTip].title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {vastuTips[currentVastuTip].tip}
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-80 rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="w-24 h-24 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <Heart className="w-12 h-12 text-green-600" />
                  </div>
                  <p>Vastu Compliant Designs</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Numerology Insights Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-80 rounded-2xl overflow-hidden shadow-xl lg:order-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="w-24 h-24 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-purple-600">∞</span>
                  </div>
                  <p>Numerology Harmony</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6 lg:order-1"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-gray-800">Numerology Insights</h2>
              <p className="text-xl text-gray-600">
                Unlock the power of numbers to create harmonious living spaces that resonate with your personal energy
              </p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentNumerologyInsight}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {numerologyInsights[currentNumerologyInsight].title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {numerologyInsights[currentNumerologyInsight].tip}
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Our Philosophy</h2>
            {(() => {
              const philosophy = {
                description: "We believe that great interior design goes beyond aesthetics. It's about creating spaces that nurture the soul, support your dreams, and enhance your daily life through the perfect harmony of beauty, function, and positive energy."
              };
              return (
                <p className="text-xl md:text-2xl leading-relaxed opacity-90 max-w-3xl mx-auto">
                  {philosophy.description}
                </p>
              );
            })()}
          </motion.div>
        </div>
      </section>

      {/* Clients Section - MODIFIED to show colorful, bigger logos in circles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">Clients Worked With</h2>
            <p className="text-xl text-gray-600">
              Trusted by leading brands and homeowners across Northeast India
            </p>
          </motion.div>

          {/* Enhanced Client Logo Carousel - Colorful and Bigger */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex space-x-8"
              animate={{
                x: [0, -100 * clientLogos.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear"
                }
              }}
              style={{ width: `${200 * clientLogos.length}px` }}
            >
              {/* Render logos twice for seamless loop */}
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-32 h-32 flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="w-28 h-28 rounded-full bg-white shadow-lg flex items-center justify-center p-4 overflow-hidden">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="w-full h-full object-contain transition-transform duration-300"
                      style={{ 
                        filter: 'none', // Remove any grayscale filter
                        opacity: 1 // Full opacity always
                      }}
                      onError={(e) => {
                        e.target.src = "/images/clients/default-client.png";
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instagram Reels Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">Design Stories</h2>
            <p className="text-xl text-gray-600">
              See our latest projects and design tips on Instagram
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instagramReels.slice(0, 3).map((reel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => window.open(reel.reelLink, '_blank')}
              >
                <div className="aspect-[9/16] relative">
                  <img
                    src={reel.coverImage}
                    alt={reel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = "/images/reels/default-reel.jpg";
                    }}
                  />
                  
                  {/* Play overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white font-semibold mb-2">{reel.title}</h3>
                    <p className="text-gray-200 text-sm">{reel.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.instagram.com/interiorsbypreyashi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
            >
              <ExternalLink className="mr-2 w-5 h-5" />
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">What Our Clients Say</h2>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="text-center bg-white p-8 rounded-2xl shadow-xl"
            >
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 italic leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <p className="font-semibold text-gray-800">{testimonials[currentTestimonial].name}</p>
                  <p className="text-gray-600">{testimonials[currentTestimonial].location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Ready to Transform Your Space?</h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90">
              Let's create something extraordinary together. Your dream space is just a conversation away.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => setIsLeadModalOpen(true)}
                className="bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-amber-700 transition-colors duration-300 shadow-lg"
              >
                Start Your Project
              </button>
              <Link
                to="/contact"
                className="border border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-gray-800 transition-colors duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lead Modal */}
      <LeadModal 
        isOpen={isLeadModalOpen} 
        onClose={() => setIsLeadModalOpen(false)}
        title="Transform Your Space"
      />
    </div>
  );
};

export default Home;
