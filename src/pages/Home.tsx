import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Users, Award, Heart, Play, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import LeadModal from '../components/LeadModal';

const Home: React.FC = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentInteriorIndex, setCurrentInteriorIndex] = useState(0);
  const [currentVastuTip, setCurrentVastuTip] = useState(0);
  const [currentNumerologyInsight, setCurrentNumerologyInsight] = useState(0);
  const [currentDrawingIndex, setCurrentDrawingIndex] = useState(0);
  const [currentClientLogoIndex, setCurrentClientLogoIndex] = useState(0);

  // Touch state management for swipe functionality
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  // Instagram Reels auto-scroll state
  const [reelsOffset, setReelsOffset] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

// ADD THESE NEW ONES for smooth reels dragging
const [isDraggingReels, setIsDraggingReels] = useState(false);
const [reelsDragStart, setReelsDragStart] = useState(0);
const [reelsDragOffset, setReelsDragOffset] = useState(0);

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent, section: string) => {
    setTouchStartX(e.touches[0].clientX);
    setIsSwiping(true);
    if (section === 'reels') {
      setAutoScroll(false);
    }
  };

  const handleTouchMove = (e: React.TouchEvent, section: string) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent, section: string) => {
    if (!isSwiping) return;
    
    const swipeDistance = touchStartX - touchEndX;
    const minSwipeDistance = 50; // Minimum distance for a valid swipe
    
    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (section === 'testimonials') {
        if (swipeDistance > 0) {
          // Swipe left - next testimonial
          setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
        } else {
          // Swipe right - previous testimonial
          setCurrentTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1);
        }
      } else if (section === 'vastu') {
        if (swipeDistance > 0) {
          // Swipe left - next tip
          setCurrentVastuTip(prev => (prev + 1) % vastuTips.length);
        } else {
          // Swipe right - previous tip
          setCurrentVastuTip(prev => prev === 0 ? vastuTips.length - 1 : prev - 1);
        }
      } else if (section === 'numerology') {
        if (swipeDistance > 0) {
          // Swipe left - next insight
          setCurrentNumerologyInsight(prev => (prev + 1) % numerologyInsights.length);
        } else {
          // Swipe right - previous insight
          setCurrentNumerologyInsight(prev => prev === 0 ? numerologyInsights.length - 1 : prev - 1);
        }
      } else if (section === 'interiors') {
        if (swipeDistance > 0) {
          // Swipe left - next interior
          setCurrentInteriorIndex(prev => (prev + 1) % worldClassInteriors.length);
        } else {
          // Swipe right - previous interior
          setCurrentInteriorIndex(prev => prev === 0 ? worldClassInteriors.length - 1 : prev - 1);
        }
     } else if (section === 'reels') {
  const cardWidth = 320 + 24;
  const maxOffset = 0;
  const minOffset = -(cardWidth * instagramReels.length);
  
  if (swipeDistance > 0) {
    // Swipe left - advance carousel
    setReelsOffset(prev => Math.max(minOffset, prev - cardWidth));
  } else {
    // Swipe right - go back
    setReelsOffset(prev => Math.min(maxOffset, prev + cardWidth));
  }
}
    }
    
    setIsSwiping(false);
    setTouchStartX(0);
    setTouchEndX(0);
    
    if (section === 'reels') {
      // Resume auto-scroll after swipe
      setTimeout(() => setAutoScroll(true), 2000);
    }
  };
// Smooth continuous dragging ONLY for reels
const handleReelsDragStart = (e: React.TouchEvent) => {
  setAutoScroll(false);
  setIsDraggingReels(true);
  setReelsDragStart(e.touches[0].clientX);
  setReelsDragOffset(reelsOffset);
};

const handleReelsDragMove = (e: React.TouchEvent) => {
  if (!isDraggingReels) return;
  const currentX = e.touches[0].clientX;
  const diff = currentX - reelsDragStart;
  
  // Apply smooth drag with the offset
  const newOffset = reelsDragOffset + diff;
  const cardWidth = 320 + 24;
  const maxOffset = 0;
  const minOffset = -(cardWidth * (instagramReels.length - 1));
  
  // Clamp to boundaries
  setReelsOffset(Math.max(minOffset, Math.min(maxOffset, newOffset)));
};

const handleReelsDragEnd = () => {
  if (!isDraggingReels) return;
  
  // Snap to nearest card
  const cardWidth = 320 + 24;
  const currentIndex = Math.round(-reelsOffset / cardWidth);
  setReelsOffset(-(currentIndex * cardWidth));
  
  setIsDraggingReels(false);
  
  // Resume auto-scroll after 3 seconds
  setTimeout(() => setAutoScroll(true), 3000);
};

  // AutoCAD Drawings for Hero Section
  const autocadDrawings = [
    {
      src: "/images/autocad/floor-plan-1.webp",
      alt: "Modern Floor Plan - Living Space Design",
      title: "Contemporary Floor Plan"
    },
    {
      src: "/images/autocad/elevation-1.webp", 
      alt: "Interior Elevation - Kitchen Design",
      title: "Kitchen Elevation"
    },
    {
      src: "/images/autocad/section-1.webp",
      alt: "Architectural Section - Cross Section View", 
      title: "Section Drawing"
    },
    {
      src: "/images/autocad/3d-plan.webp",
      alt: "3D Floor Plan - Detailed Layout",
      title: "3D Visualization"
    }
  ];

  // Client Logos for Carousel
  const clientLogos = [
    { src: "/images/clients/client-1.webp", alt: "hindustan unilever" },
    { src: "/images/clients/client-2.webp", alt: "indian railway" },
    { src: "/images/clients/client-3.webp", alt: "kcr hotel" },
    { src: "/images/clients/client-4.webp", alt: "jay bee energy duliajan" },
    { src: "/images/clients/client-5.webp", alt: "nirvian" },
    { src: "/images/clients/client-6.webp", alt: "ant energies" },
    { src: "/images/clients/client-7.webp", alt: "gold gym" }
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
      coverImage: "/images/reels/reel-cover-1.webp",
      reelLink: "https://www.instagram.com/reel/DMFY-N7ycuf"
    },
    {
      title: "360 degree view of conference room", 
      description: "Ever wondered what the perfect conference room looks like?",
      coverImage: "/images/reels/reel-cover-2.webp",
      reelLink: "https://www.instagram.com/reel/DG4-b0sSZGP"
    },
    {
      title: "Are you Ruled by planet Moon ?",
      description: "Ruled by the Moon, you're sensitive, intuitive & emotionally tuned in",
      coverImage: "/images/reels/reel-cover-3.webp",
      reelLink: "https://www.instagram.com/reel/DLE2bnJSrhP"
    },
    {
      title: "Modern Bedroom Makeover",
      description: "Renovation focused on updating the room while keeping the original floor", 
      coverImage: "/images/reels/reel-cover-4.webp",
      reelLink: "https://www.instagram.com/reel/C_DprW9PrNi"
    },
    {
      title: "Clients Testimonial",
      description: "Our clients are the heart of our business",
      coverImage: "/images/reels/reel-cover-5.webp", 
      reelLink: "https://www.instagram.com/reel/C_dZ34uv6rM"
    },
    {
      title: "Transformation Of Favourite Corner",
      description: "Testament to effective design, where form meets function",
      coverImage: "/images/reels/reel-cover-6.webp", 
      reelLink: "https://www.instagram.com/reel/CeTMFuvphOq"
    },
    {
      title: "Trendy kids Bedroom colour combinations",
      description: "Heaven for little ones with our expert-approved color combination",
      coverImage: "/images/reels/reel-cover-7.webp", 
      reelLink: "https://www.instagram.com/reel/C_fx6UfPAfw"
    }
  ];

  // Calculate total width for auto-scroll
  const cardWidth = 320 + 24; // card width + gap
  const totalWidth = cardWidth * instagramReels.length;

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

  // Auto-scroll effect for Instagram reels
  // Smooth auto-scroll for reels
useEffect(() => {
  if (!autoScroll || isDraggingReels) return;

  const interval = setInterval(() => {
    setReelsOffset(prev => {
      const cardWidth = 320 + 24;
      const totalCards = instagramReels.length;
      const nextOffset = prev - 2; // Smooth pixel-by-pixel scroll
      
      // Loop back when reaching end
      if (nextOffset <= -(cardWidth * totalCards)) {
        return 0;
      }
      return nextOffset;
    });
  }, 30); // Smooth 33fps

  return () => clearInterval(interval);
}, [autoScroll, isDraggingReels, instagramReels.length]);


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
    <div id="main-content" className="min-h-screen bg-cream-50 overflow-x-hidden">
      <SEOHead
        title="Interiors By Preyashi - Expert Interior Design with Vastu & Numerology"
        description="Transform your space with world-class interior design, authentic Vastu consultation, and personalized numerology guidance across Northeast India."
        keywords="interior design Assam, Vastu consultation, numerology interior design, Tinsukia interior designer"
        canonicalUrl="/"
        structuredData={structuredData}
      />

      {/* Hero Section with Blueprint Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Blueprint Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(/images/bg-1.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'  // Adds parallax effect
          }}
        ></div>
        
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        
        {/* Additional subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10 z-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-8 md:py-0 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left px-4 sm:px-0"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4 md:mb-6 text-white leading-tight drop-shadow-lg"
            >
              <span className="text-primary-light">Interiors By</span><br />
              <span className="text-primary italic">Preyashi</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-6 md:mb-8 leading-relaxed drop-shadow-md"
            >
              Where ancient wisdom meets modern design.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 md:mb-8 leading-relaxed drop-shadow-md"
            >
              Creating harmonious spaces through<br />
              <span className="text-primary-light font-semibold">Interior Design</span>, <span className="text-cta font-semibold">Vastu Shastra</span> & <span className="text-accent font-semibold">Vedic Numerology</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => setIsLeadModalOpen(true)}
                className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Your Project
              </button>
              <Link
                to="/portfolio"
                className="border-2 border-primary-light text-primary-light px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-primary-light hover:text-neutral-dark transition-all duration-300 flex items-center justify-center backdrop-blur-sm bg-white/10"
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
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30 backdrop-blur-sm">
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
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/hero/hero-fallback.webp";
                  }}
                />
              </AnimatePresence>
              
              {/* Enhanced overlay with title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                <h3 className="text-white font-semibold text-lg mb-2 drop-shadow-lg">{autocadDrawings[currentDrawingIndex].title}</h3>
                <div className="flex items-center text-primary-light">
                  <Star className="w-4 h-4 mr-1" />
                  <span className="text-sm drop-shadow-md">Professional Design</span>
                </div>
              </div>
            </div>

            {/* Enhanced floating stats with backdrop blur */}
            <div className="absolute -top-4 -left-4 bg-white/20 backdrop-blur-md rounded-xl p-4 text-white border border-white/30 shadow-xl">
              <div className="text-2xl font-bold text-primary-light drop-shadow-lg">7+</div>
              <div className="text-sm drop-shadow-md">Years Experience</div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white/20 backdrop-blur-md rounded-xl p-4 text-white border border-white/30 shadow-xl">
              <div className="text-2xl font-bold text-accent drop-shadow-lg">50+</div>
              <div className="text-sm drop-shadow-md">Projects</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* World-Class Interiors - Simplified with Touch Support */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
              World-Class Interior Designs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our portfolio of luxury interiors that blend modern sophistication with traditional Indian elements
            </p>
          </motion.div>

          <div 
            className="bg-gradient-to-r from-neutral-light to-primary-light/10 rounded-2xl p-8 md:p-12"
            onTouchStart={(e) => handleTouchStart(e, 'interiors')}
            onTouchMove={(e) => handleTouchMove(e, 'interiors')}
            onTouchEnd={(e) => handleTouchEnd(e, 'interiors')}
          >
            <div className={`select-none transition-transform duration-150 ${isSwiping ? 'scale-[0.98]' : ''}`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentInteriorIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <h3 className="text-3xl font-serif text-gray-800 mb-4">
                    {worldClassInteriors[currentInteriorIndex].title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                    {worldClassInteriors[currentInteriorIndex].description}
                  </p>
                  <p className="text-primary font-medium italic">
                    {worldClassInteriors[currentInteriorIndex].inspiration}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {worldClassInteriors.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentInteriorIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentInteriorIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vastu & Numerology - Simplified with Touch Support */}
      <section className="py-20 bg-gradient-to-r from-neutral-light to-primary-light/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vastu Wisdom */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-3xl font-serif text-gray-800 mb-6 text-center">
                Ancient Vastu Wisdom
              </h3>
              <p className="text-gray-600 mb-8 text-center">
                Transform your home into a sanctuary of positive energy with time-tested Vastu Shastra principles
              </p>
              
              <div
                onTouchStart={(e) => handleTouchStart(e, 'vastu')}
                onTouchMove={(e) => handleTouchMove(e, 'vastu')}
                onTouchEnd={(e) => handleTouchEnd(e, 'vastu')}
                className={`select-none transition-transform duration-150 ${isSwiping ? 'scale-[0.98]' : ''}`}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentVastuTip}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h4 className="text-xl font-semibold text-primary mb-4">
                      {vastuTips[currentVastuTip].title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {vastuTips[currentVastuTip].tip}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              <div className="flex justify-center mt-6 space-x-2">
                {vastuTips.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVastuTip(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentVastuTip ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Numerology */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-3xl font-serif text-gray-800 mb-6 text-center">
                Numerology & Sacred Geometry
              </h3>
              <p className="text-gray-600 mb-8 text-center">
                Unlock the power of numbers to create harmonious living spaces that resonate with your personal energy
              </p>
              
              <div
                onTouchStart={(e) => handleTouchStart(e, 'numerology')}
                onTouchMove={(e) => handleTouchMove(e, 'numerology')}
                onTouchEnd={(e) => handleTouchEnd(e, 'numerology')}
                className={`select-none transition-transform duration-150 ${isSwiping ? 'scale-[0.98]' : ''}`}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentNumerologyInsight}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h4 className="text-xl font-semibold text-primary mb-4">
                      {numerologyInsights[currentNumerologyInsight].title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {numerologyInsights[currentNumerologyInsight].tip}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              <div className="flex justify-center mt-6 space-x-2">
                {numerologyInsights.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentNumerologyInsight(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentNumerologyInsight ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Philosophies - Compact */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-gray-800 mb-6">Our Core Philosophies</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Precision",
                description: "Meticulous attention to detail from concept to execution for flawless results."
              },
              {
                icon: "✨",
                title: "Creativity",
                description: "Innovative designs that reflect your unique personality and lifestyle."
              },
              {
                icon: "🏠",
                title: "Vastu Expertise",
                description: "Creating harmonious spaces that promote well-being and prosperity."
              }
            ].map((philosophy, index) => (
              <motion.div
                key={philosophy.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{philosophy.icon}</div>
                <h3 className="text-xl font-serif text-gray-800 mb-3">{philosophy.title}</h3>
                <p className="text-gray-600">{philosophy.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Carousel Section */}
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
                      loading="lazy"
                      className="w-full h-full object-contain transition-transform duration-300"
                      style={{ 
                        filter: 'none', // Remove any grayscale filter
                        opacity: 1 // Full opacity always
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/images/clients/default-client.webp";
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instagram Reels - Enhanced Auto-scrolling + Swipe Carousel */}
      <section className="py-20 bg-gradient-to-r from-neutral-light to-primary-light/30">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif text-gray-800 mb-6">Follow Our Journey</h2>
            <p className="text-xl text-gray-600">See our latest projects and design tips on Instagram</p>
          </motion.div>

          {/* Auto-scrolling + Swipe Reels Carousel */}
          <div 
  className="relative overflow-hidden cursor-grab active:cursor-grabbing"
  onTouchStart={handleReelsDragStart}
  onTouchMove={handleReelsDragMove}
  onTouchEnd={handleReelsDragEnd}
>
  <motion.div
    animate={{ x: reelsOffset }}
    transition={{ 
      type: isDraggingReels ? "tween" : "tween",
      duration: isDraggingReels ? 0 : 0.5,
      ease: "easeOut"
    }}
    className="flex space-x-6 select-none"
  >

            <motion.div
              style={{ x: reelsOffset }}
              animate={autoScroll ? { x: [-totalWidth, 0] } : {}}
              transition={autoScroll
                ? { x: { repeat: Infinity, duration: 25, ease: 'linear' }}
                : {}
              }
              className="flex space-x-6"
            >
              {/* Double the reels for seamless infinite scroll */}
              {[...instagramReels, ...instagramReels].map((reel, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => window.open(reel.reelLink, '_blank')}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative aspect-square bg-gradient-to-br from-neutral-light to-primary-light/40 flex items-center justify-center">
                    <img
                      src={reel.coverImage}
                      alt={reel.title}
                      loading="lazy"
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        // Fallback to default cover
                        const target = e.currentTarget as HTMLImageElement;
                        target.src = "/images/reels/default-cover.webp";
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                      <Play className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-800 mb-2">{reel.title}</h3>
                    <p className="text-gray-600 text-sm">{reel.description}</p>
                    <div className="mt-4 flex items-center text-primary text-sm font-medium">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Watch on Instagram
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials - Enhanced with Google Reviews Link and Touch Support */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center overflow-x-auto scrollbar-hide" style={{ touchAction: 'pan-y' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-serif mb-6">What Our Clients Say</h2>
          </motion.div>

          <div
            onTouchStart={(e) => handleTouchStart(e, 'testimonials')}
            onTouchMove={(e) => handleTouchMove(e, 'testimonials')}
            onTouchEnd={(e) => handleTouchEnd(e, 'testimonials')}
            className={`select-none transition-transform duration-150 ${isSwiping ? 'scale-[0.98]' : ''}`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-xl italic mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                
                <div>
                  <div className="font-semibold text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="opacity-90">{testimonials[currentTestimonial].location}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2 mb-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentTestimonial ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Google Reviews Link */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://maps.app.goo.gl/h9urqLv7WTLWRwbF8', '_blank')}
            className="bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-neutral-light transition-colors duration-300 inline-flex items-center shadow-lg"
          >
            <Star className="w-5 h-5 mr-2 fill-yellow-500 text-yellow-500" />
            Read All Google Reviews
            <ExternalLink className="w-4 h-4 ml-2" />
          </motion.button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create something extraordinary together. Your dream space is just a conversation away.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLeadModalOpen(true)}
                className="bg-cta text-white px-8 py-4 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300"
              >
                Get Free Consultation
              </motion.button>
              
              <Link
                to="/contact"
                className="border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-gray-800 transition-all duration-300 inline-block"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lead Modal */}
      <LeadModal 
        isOpen={isLeadModalOpen} 
        onClose={() => setIsLeadModalOpen(false)}
        title="Start Your Dream Project"
      />
    </div>
  );
};

export default Home;
