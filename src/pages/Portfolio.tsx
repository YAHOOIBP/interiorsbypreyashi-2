import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Eye, ExternalLink, ChevronLeft, ChevronRight, Star, Award, Home, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import LeadModal from '../components/LeadModal';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [imageCache, setImageCache] = useState(new Set());
  const [imageLoading, setImageLoading] = useState(false);

  // Ensure page always loads from top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // YOUR ORIGINAL PROJECT DATA - PRESERVED EXACTLY
  const projects = [
    {
      id: 1,
      title: "Hindustan Unilever Limited (HUL) – Conference Room",
      category: "Commercial",
      location: "Doomdooma, Assam",
      year: "2024",
      status: "Completed",
      duration: "4 months",
      mood: "Sundar aur Shaandar",
      description: "Hindustan Unilever Limited (HUL) is India\'s largest fast-moving consumer goods (FMCG) company and a subsidiary of Unilever, a British multinational. With a legacy of over 90 years, HUL has been serving Indian households with some of the most trusted brands. It\'s an honour that I had the opportunity to design and execute the conference room for HUL\'s office in Doomdooma, Assam. The project was carefully curated to reflect professionalism, modern aesthetics, and functionality—ensuring a comfortable and inspiring environment for corporate discussions and meetings within the given deadline.",
      images: [
        "/images/portfolio/HUL1.jpg",
        "/images/portfolio/HUL2.jpg", 
        "/images/portfolio/HUL1.jpg",
        "/images/portfolio/HUL1.jpg"
      ],
      features: ["Professional Design", "Sustainable Materials", "Modern Aesthetics", "Natural Lighting", "Functional Layout", "Corporate Standards"]
    },
    {
      id: 2,
      title: "KCR Sweet Shop & Restaurant",
      category: "Hospitality",
      location: "Tinsukia, Assam",
      year: "2023",
      status: "Completed",
      duration: "3 months", 
      mood: "Mithas Bhara Nazara",
      description: "Created an inviting and aesthetic restaurant and sweet shop interior that balances traditional warmth with a contemporary dining experience, ensuring comfort and easy maintenance.",
      images: [
        "/images/portfolio/KCR1.JPG",
        "/images/portfolio/KCR2.JPG",
        "/images/portfolio/KCR5.JPG"
      ],
      features: ["Brand Integration", "Traditional Warmth", "Contemporary Design", "Easy Maintenance", "Customer Comfort", "Wash Areas"]
    },
    {
      id: 3,
      title: "3BHK Two-Storey Residential Building",
      category: "Residential",
      location: "Tinsukia, Arunachal Pradesh",
      year: "2025",
      status: "Ongoing",
      duration: "6 months",
      mood: "Ghar, Vastu aur Sukoon",
      description: "A thoughtfully planned residence combining aesthetics, comfort, and Vastu-compliant design principles.",
      images: [
        "/images/portfolio/3BHK1.JPG",
        "/images/portfolio/3BHK2.JPG", 
        "/images/portfolio/3BHK3.JPG"
      ],
      features: ["Vastu Compliant", "Aesthetic Design", "Traditional Techniques", "Modern Amenities", "Comfort Focus", "Thoughtful Planning"]
    },
    {
      id: 4,
      title: "Restaurant",
      category: "Hospitality",
      location: "Tinsukia, Assam",
      year: "2025",
      status: "Ongoing",
      duration: "6 months",
      mood: "Swad aur Shaan",
      description: "Creating an inviting and stylish dining environment that balances ambiance, functionality, and customer experience.",
      images: [
        "/images/portfolio/Restro1.jpg",
        "/images/portfolio/Restro2.jpg", 
        "/images/portfolio/Restro3.jpg"
      ],
      features: ["Inviting Ambiance", "Stylish Design", "Traditional Techniques", "Functional Layout", "Customer Experience", "Thoughtful Planning"]
    },
    {
      id: 5,
      title: "Gym",
      category: "Commercial",
      location: "Tinsukia, Assam",
      year: "2025",
      status: "Ongoing",
      duration: "6 months",
      mood: "Josh aur Junoon",
      description: "Designing a fitness space focused on efficiency, ergonomics, and motivation for members.",
      images: [
        "/images/portfolio/gym1.jpg",
        "/images/portfolio/gym2.jpg", 
        "/images/portfolio/gym3.jpg",
        "/images/portfolio/gym1.jpg"
      ],
      features: ["Efficient Design", "Ergonomic Planning", "Motivational Environment", "Modern Amenities", "Comfort Focus", "Member-Focused"]
    },
    {
      id: 6,
      title: "Corporate Office",
      category: "Commercial", 
      location: "Kharagpur, W.B.",
      year: "2023",
      status: "Completed",
      duration: "2 months",
      mood: "Sundarta aur Sahi Planning",
      description: "Developed a well-structured office space in Kharagpur with efficient layouts, optimized storage, and a design that enhances productivity while maintaining a corporate elegance.",
      images: [
        "/images/portfolio/Kharagpur1.jpg",
        "/images/portfolio/Kharagpur2.jpg",
        "/images/portfolio/Kharagpur3.jpg"
      ],
      features: ["Efficient Layouts", "Optimized Storage", "Productivity Enhancement", "Contemporary Furniture", "Rich Textures", "Corporate Elegance"]
    },
    {
      id: 7,
      title: "Two Girls Bedroom",
      category: "Residential",
      location: "Tinsukia, Assam", 
      year: "2024",
      status: "Completed",
      duration: "5 months",
      mood: "Rangeen Khwab",
      description: "Designed a personalized and vibrant bedroom space for two young girls, combining functionality with playful aesthetics to reflect their individuality and growing needs.",
      images: [
        "/images/portfolio/2GirlsBedroom1.jpg",
        "/images/portfolio/2GirlsBedroom2.jpg",
        "/images/portfolio/2GirlsBedroom3.jpg"
      ],
      features: ["Personalized Design", "Multi-generational Design", "Modern Systems", "Vibrant Aesthetics", "Functional Layout", "Growth-Adaptive"]
    },
    {
      id: 8,
      title: "Office Project",
      category: "Commercial",
      location: "North Lakhimpur, Assam",
      year: "2023",
      status: 'Completed', 
      duration: "2.5 months",
      mood: "Aaram aur Asar",
      description: "Executed a modern office project in North Lakhimpur, integrating practical design solutions, ergonomic planning, and stylish interiors suited for a professional work environment.",
      images: [
        "/images/portfolio/Lakhimpur1.jpg",
        "/images/portfolio/Lakhimpur2.jpg",
        "/images/portfolio/Lakhimpur3.jpg"
      ],
      features: ["Modern Design", "Custom Furniture", "Ergonomic Planning", "Professional Environment", "Practical Solutions", "Sophisticated Colors"]
    },
    {
      id: 9,
      title: "Sanitary Showroom",
      category: "Commercial",
      location: "Tinsukia, Assam",
      year: "2024", 
      status: "Completed",
      duration: "2 months",
      mood: "Safai ka Jalwa",
      description: "Crafted an appealing showroom interior for a sanitary brand in Tinsukia, showcasing products in an organized, customer-friendly, and visually engaging manner.",
      images: [
        "/images/portfolio/Sanitary2.jpg",
        "/images/portfolio/Sanitary1.jpg",
        "/images/portfolio/Sanitary3.jpg"
      ],
      features: ["Space Optimization", "Smart Storage", "Product Showcase", "Organized Layout", "Customer-Friendly", "Visual Appeal"]
    },
    {
      id: 10,
      title: "Railway DRM Washroom",
      category: "Commercial",
      location: "Tinsukia & Dibrugarh, Assam",
      year: "2025",
      status: "Completed",
      duration: "1.5 months",
      mood: "Sukoon Bhari Jagah",
      description: "Handling official and functional design for railway administrative Rest houses, ensuring comfortable stays for officers.",
      images: [
        "/images/portfolio/R_WASHROOM1.jpg", 
        "/images/portfolio/R_WASHROOM2.jpg",
        "/images/portfolio/R_WASHROOM3.jpg"
      ],
      features: ["Modern Design", "Safety Focus", "Customer Flow", "Comfort Focus", "Modern Fixtures", "Administrative Standards"]
    },
    {
      id: 11,
      title: "Drilling Company",
      category: "Commercial",
      location: "Duliajan, Assam",
      year: "2025",
      status: "Completed",
      duration: "6 months",
      mood: "Mazbooti aur Bharosa",
      description: "Developing industrial interiors with a focus on safety, operational efficiency, and professional aesthetics.",
      images: [
        "/images/portfolio/DRILLING1.jpg",
        "/images/portfolio/DRILLING2.jpg", 
        "/images/portfolio/DRILLING3.jpg"
      ],
      features: ["Safety Focus", "Operational Efficiency", "Professional Aesthetics", "Industrial Standards"]
    },
    {
      id: 12,
      title: "Railway DRM Projects",
      category: "Commercial",
      location: "Tinsukia & Dibrugarh",
      year: "2025",
      status: "Ongoing",
      duration: "6 months",
      mood: "Kaam ka Dum",
      description: "Handling official and functional design for railway administrative Rest houses, ensuring comfortable stays for officers.",
      images: [
        "/images/portfolio/RAILWAY1.jpg",
        "/images/portfolio/RAILWAY2.jpg", 
        "/images/portfolio/RAILWAY3.jpg"
      ],
      features: ["Official Design", "Functional Layout", "Comfortable Stays", "Administrative Standards"]
    },
    {
      id: 13,
      title: "ANT Solar",
      category: "Commercial",
      location: "Tinsukia, Assam",
      year: "2025",
      status: "Completed",
      duration: "3 months",
      mood: "Suraj ki Shakti",
      description: "Designed the official workspace for ANT Solar, an authorized solar company in Tinsukia, creating a modern setup that reflects clean energy values, efficiency, and professionalism.",
      images: [
        "/images/portfolio/Ant1.jpg",
        "/images/portfolio/Ant2.jpg", 
        "/images/portfolio/Ant3.jpg"
      ],
      features: ["Authorized Solar Brand", "Modern Workspace", "Clean Energy Theme", "Efficient Layout"]
    }
  ];

  const categories = ['all', 'Residential', 'Commercial', 'Hospitality'];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Image preloading for performance
  useEffect(() => {
    const preloadImage = (src) => {
      if (!imageCache.has(src)) {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setImageCache(prev => new Set(prev).add(src));
        };
      }
    };

    // Preload first image of each project
    projects.forEach(project => {
      if (project.images[0]) {
        preloadImage(project.images[0]);
      }
    });
  }, []); // Remove projects dependency

  const nextImage = () => {
    if (selectedProject) {
      setImageLoading(true);
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setImageLoading(true);
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const stats = [
    { number: '50+', label: 'Completed Projects', icon: <Award className="w-6 h-6" /> },
    { number: '50+', label: 'Happy Clients', icon: <Star className="w-6 h-6" /> },
    { number: '13', label: 'Cities Covered', icon: <MapPin className="w-6 h-6" /> },
    { number: '7+', label: 'Years Experience', icon: <Calendar className="w-6 h-6" /> }
  ];

  // Enhanced structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Interior Design Portfolio | Interiors By Preyashi",
    "description": "Showcase of completed interior design projects including residential, commercial, and hospitality spaces across Northeast India. Expert interior design portfolio featuring modern, luxury, and heritage styles.",
    "creator": {
      "@type": "Person",
      "name": "Preyashi More Birmiwal",
      "jobTitle": "Interior Designer"
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "Interiors By Preyashi",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Tinsukia",
        "addressRegion": "Assam",
        "addressCountry": "India"
      }
    },
    "workExample": projects.map(project => ({
      "@type": "CreativeWork",
      "name": project.title,
      "description": project.description,
      "locationCreated": project.location,
      "dateCreated": project.year,
      "category": project.category,
      "keywords": project.features.join(', ')
    }))
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <SEOHead
        title="Interior Design Portfolio - Residential, Commercial & Hospitality Projects | Interiors By Preyashi"
        description="Explore our stunning interior design portfolio featuring 19+ completed projects across Northeast India. Residential homes, commercial offices, heritage hotels, and luxury villas designed with Vastu principles and modern aesthetics."
        keywords="interior design portfolio, residential interior design, commercial office design, hospitality interior design, luxury villa interiors, Assam interior design projects, Arunachal Pradesh interior design, Northeast India portfolio"
        canonicalUrl="/portfolio"
        structuredData={structuredData}
      />

      {/* Hero Section - Clean gradient without background image */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-purple-600 mr-3" />
              <span className="text-purple-600 font-semibold uppercase tracking-wide">Our Work</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-gray-800 leading-tight">
              Design
              <span className="block text-purple-700 italic">Portfolio</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Explore our completed and ongoing projects across <strong>Northeast India</strong>. 
              Each space tells a unique story of <strong>design excellence</strong>, functionality, 
              and <strong>aesthetic beauty</strong>.
            </p>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From intimate homes to grand commercial spaces, discover how we transform ordinary 
              spaces into extraordinary experiences that reflect your unique vision and lifestyle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                }`}
              >
                {category === 'all' ? 'All Projects' : category}
                <span className="ml-2 text-xs opacity-75">
                  ({category === 'all' ? projects.length : projects.filter(p => p.category === category).length})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid - Enhanced 3D Display with your original images */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => openProject(project)}
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
                    {/* 3D Enhanced Image Container with your original images */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src = "/images/portfolio/default-project.jpg";
                        }}
                      />
                      
                      {/* 3D Overlay Effects */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium text-white backdrop-blur-sm ${
                          project.category === 'Residential' ? 'bg-green-500/80' :
                          project.category === 'Commercial' ? 'bg-blue-500/80' :
                          'bg-orange-500/80'
                        }`}>
                          {project.category === 'Residential' ? <Home className="w-3 h-3 inline mr-1" /> : 
                           project.category === 'Commercial' ? <Building className="w-3 h-3 inline mr-1" /> : 
                           <Star className="w-3 h-3 inline mr-1" />}
                          {project.category}
                        </span>
                      </div>
                      
                      {/* Hover Action */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                          <Eye className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      
                      {/* Image Count Badge */}
                      <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                        +{project.images.length} photos
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-serif text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors duration-300" />
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-3">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{project.location}</span>
                        <span className="mx-2">•</span>
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{project.year}</span>
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {project.description.substring(0, 120)}...
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <span key={idx} className="px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded-full">
                            {feature}
                          </span>
                        ))}
                        {project.features.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            +{project.features.length - 3} more
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">{project.status}</span>
                        </div>
                        <div className="text-sm text-purple-600 font-medium">
                          View Details →
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal with your original images */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeProject}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Carousel with your original images */}
                <div className="relative aspect-square lg:aspect-auto">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={selectedProject.title}
                    loading="eager"
                    className="w-full h-full object-cover"
                    style={{ 
                      transition: 'opacity 0.3s ease',
                      opacity: imageCache.has(selectedProject.images[currentImageIndex]) ? 1 : 0.7
                    }}
                    onLoad={(e) => {
                      e.target.style.opacity = 1;
                      setImageCache(prev => new Set(prev).add(selectedProject.images[currentImageIndex]));
                      setImageLoading(false);
                    }}
                    onError={(e) => {
                      e.target.src = "/images/portfolio/default-project.jpg";
                    }}
                  />
                  
                  {/* Loading indicator */}
                  {imageLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  
                  {/* Navigation Buttons */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                  
                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </div>
                  
                  {/* Close Button */}
                  <button
                    onClick={closeProject}
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Project Details - Your original content */}
                <div className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        selectedProject.category === 'Residential' ? 'bg-green-100 text-green-800' :
                        selectedProject.category === 'Commercial' ? 'bg-blue-100 text-blue-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {selectedProject.category}
                      </span>
                      <span className="text-sm text-gray-500">{selectedProject.year}</span>
                    </div>
                    
                    <h2 className="text-3xl font-serif text-gray-800 mb-3">{selectedProject.title}</h2>
                    
                    <div className="flex items-center text-gray-600 mb-6">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{selectedProject.location}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <span className="text-gray-500">Status:</span>
                      <span className="ml-2 font-medium text-gray-700 leading-relaxed">{selectedProject.status}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Duration:</span>
                      <span className="ml-2 font-medium text-gray-700 leading-relaxed">{selectedProject.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Mood:</span>
                      <span className="ml-2 font-medium text-gray-700 leading-relaxed">{selectedProject.mood}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Category:</span>
                      <span className="ml-2 font-medium text-gray-700 leading-relaxed">{selectedProject.category}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">Description</h3>
                    <p className="text-gray-700 leading-relaxed">{selectedProject.description}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">Key Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.features.map((feature, idx) => (
                        <span key={idx} className="px-3 py-1 bg-purple-50 text-purple-600 text-sm rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <button
                      onClick={() => {
                        closeProject();
                        setIsLeadModalOpen(true);
                      }}
                      className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-300"
                    >
                      Start Similar Project
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Ready to Create Your Own Success Story?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Let's discuss your project and create something extraordinary together. 
              Your dream space is just a conversation away.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsLeadModalOpen(true)}
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                Start Your Project
              </button>
              <Link
                to="/contact"
                className="border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors duration-300"
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
        title="Start Your Dream Project"
      />
    </div>
  );
};

export default Portfolio;
