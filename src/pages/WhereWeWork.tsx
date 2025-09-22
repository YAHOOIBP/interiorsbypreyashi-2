import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Globe, Star, Award, Map, Navigation, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import LeadModal from '../components/LeadModal';

const WhereWeWork = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = React.useState(false);
  const navigate = useNavigate();

  // Ensure page always loads from top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const regions = [
    {
      state: 'Pan India Coverage',
      subtitle: 'Serving All Major Cities Across India',
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      color: 'from-blue-500 to-cyan-500',
      cities: [
        { name: 'Delhi NCR', description: 'National Capital Region', projects: '5+ Projects' },
        { name: 'Mumbai', description: 'Financial Capital of India', projects: '3+ Projects' },
        { name: 'Bangalore', description: 'Silicon Valley of India', projects: '4+ Projects' },
        { name: 'Chennai', description: 'Detroit of India', projects: '2+ Projects' },
        { name: 'Hyderabad', description: 'Cyberabad - Tech Hub', projects: '3+ Projects' },
        { name: 'Pune', description: 'Oxford of the East', projects: '2+ Projects' },
        { name: 'Kolkata', description: 'Cultural Capital of India', projects: '2+ Projects' },
        { name: 'Ahmedabad', description: 'Manchester of India', projects: '1+ Projects' }
      ]
    },
    {
      state: 'Northeast India Specialization',
      subtitle: 'Our Area of Expertise - Assam & Arunachal Pradesh',
      icon: <Map className="w-8 h-8 text-green-600" />,
      color: 'from-green-500 to-emerald-500',
      cities: [
        { name: 'Guwahati', description: 'Gateway to Northeast India', projects: '8+ Projects' },
        { name: 'Tinsukia', description: 'Tea Capital of India - Our Base', projects: '12+ Projects' },
        { name: 'Dibrugarh', description: 'Industrial Hub of Upper Assam', projects: '6+ Projects' },
        { name: 'Jorhat', description: 'Cultural Capital of Assam', projects: '4+ Projects' },
        { name: 'Silchar', description: 'Commercial Center of Barak Valley', projects: '3+ Projects' },
        { name: 'Tezpur', description: 'Cultural Town on Brahmaputra', projects: '2+ Projects' },
        { name: 'Itanagar', description: 'Capital of Arunachal Pradesh', projects: '3+ Projects' },
        { name: 'Namsai', description: 'Golden Pagoda City', projects: '2+ Projects' },
        { name: 'Tezu', description: 'Administrative Hub of Lohit', projects: '1+ Projects' },
        { name: 'Pasighat', description: 'Oldest Town of Arunachal', projects: '1+ Projects' },
        { name: 'Ziro', description: 'UNESCO World Heritage Site', projects: '1+ Projects' },
        { name: 'Tawang', description: 'Land of Monpa Tribe', projects: '1+ Projects' },
        { name: 'Bomdila', description: 'Buddhist Cultural Center', projects: '1+ Projects' }
      ]
    }
  ];

  const serviceAreas = [
    {
      title: 'Metropolitan Cities',
      description: 'Professional services across all major Indian cities',
      features: ['Remote consultations', 'Virtual design planning', 'Project coordination', 'Quality supervision'],
      cities: 'Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Northeast India',
      description: 'Deep local expertise in Assam & Arunachal Pradesh',
      features: ['On-site presence', 'Local vendor network', 'Cultural integration', 'Climate-specific solutions'],
      cities: 'Guwahati, Tinsukia, Dibrugarh, Jorhat, Itanagar, Tezpur, Silchar',
      icon: <Navigation className="w-6 h-6" />
    },
    {
      title: 'Remote Locations',
      description: 'Comprehensive support for all locations across India',
      features: ['Virtual consultations', 'Detailed planning', 'Local coordination', 'Progress monitoring'],
      cities: 'Any city or town across India with reliable connectivity',
      icon: <Map className="w-6 h-6" />
    }
  ];

  const regionalExpertise = [
    {
      title: 'Climate Considerations',
      description: 'Understanding of monsoon patterns, humidity control, and ventilation requirements specific to Northeast India\'s unique climate conditions.',
      icon: <Clock className="w-6 h-6 text-blue-600" />
    },
    {
      title: 'Cultural Integration',
      description: 'Incorporating traditional Northeast Indian design elements, local craftsmanship, and cultural motifs into modern interior designs.',
      icon: <Star className="w-6 h-6 text-purple-600" />
    },
    {
      title: 'Local Network',
      description: 'Established relationships with local suppliers, craftsmen, and contractors across Assam and Arunachal Pradesh for seamless project execution.',
      icon: <Award className="w-6 h-6 text-green-600" />
    }
  ];

  const projectStats = [
    { number: '50+', label: 'Cities Served', description: 'Across India' },
    { number: '19+', label: 'Completed Projects', description: 'Pan India Coverage' },
    { number: '13', label: 'Northeast Cities', description: 'Specialized Expertise' },
    { number: '100%', label: 'Client Satisfaction', description: 'All Locations' }
  ];

  // Enhanced structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Interiors By Preyashi",
    "description": "Professional interior design services across India with specialized expertise in Northeast India, particularly Assam and Arunachal Pradesh. Serving 50+ cities nationwide.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tinsukia",
      "addressRegion": "Assam", 
      "addressCountry": "India"
    },
    "telephone": "+918486076075",
    "url": "https://interiorsbypreyashi.com/where-we-work",
    "areaServed": [
      ...regions[0].cities.map(city => ({ "@type": "City", "name": city.name })),
      ...regions[1].cities.map(city => ({ "@type": "City", "name": city.name }))
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 27.4924,
        "longitude": 95.3647
      },
      "geoRadius": "2000000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog", 
      "name": "Interior Design Services",
      "itemListElement": [
        { "@type": "Offer", "name": "Residential Interior Design", "areaServed": "India" },
        { "@type": "Offer", "name": "Commercial Interior Design", "areaServed": "India" },
        { "@type": "Offer", "name": "Vastu Consultation", "areaServed": "India" },
        { "@type": "Offer", "name": "Numerology Consultation", "areaServed": "India" }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <SEOHead
        title="Where We Work - Interior Design Services Across India | Northeast India Specialists | Interiors By Preyashi"
        description="Professional interior design services across 50+ Indian cities with specialized expertise in Northeast India. Serving Delhi, Mumbai, Bangalore, Guwahati, Tinsukia, Dibrugarh, Itanagar & more. Remote consultations available nationwide."
        keywords="interior design services India, interior designer Northeast India, Tinsukia interior design, Assam interior designer, Arunachal Pradesh interior design, Guwahati interior design, Dibrugarh interior design, pan India interior design services"
        canonicalUrl="/where-we-work"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-blue-600 mr-3" />
              <span className="text-blue-600 font-semibold uppercase tracking-wide">Service Coverage</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-gray-800 leading-tight">
              Where We
              <span className="block text-blue-700 italic">Transform Spaces</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Bringing world-class interior design services <strong>across all of India</strong> with 
              specialized expertise in the beautiful Northeast region, particularly 
              <strong> Assam and Arunachal Pradesh</strong>.
            </p>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From metropolitan cities to the serene landscapes of Northeast India, we bring 
              beautiful, harmonious design to your doorstep wherever you are.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Areas Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
              Comprehensive Service Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional interior design services tailored to each region's unique requirements and cultural preferences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                  {area.icon}
                </div>
                
                <h3 className="text-xl font-serif text-gray-800 mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>
                
                <div className="space-y-2 mb-6">
                  {area.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-xs text-gray-500 italic">{area.cities}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Coverage */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
              Cities We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Extensive coverage across India with deep expertise in Northeast region
            </p>
          </motion.div>

          <div className="space-y-16">
            {regions.map((region, regionIndex) => (
              <motion.div
                key={region.state}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: regionIndex * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Region Header */}
                <div className={`bg-gradient-to-r ${region.color} text-white p-8`}>
                  <div className="flex items-center justify-center mb-4">
                    {region.icon}
                    <h3 className="text-2xl md:text-3xl font-serif ml-4">{region.state}</h3>
                  </div>
                  <p className="text-center text-white/90 text-lg">{region.subtitle}</p>
                </div>

                {/* Cities Grid */}
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {region.cities.map((city, cityIndex) => (
                      <motion.div
                        key={city.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: cityIndex * 0.1 }}
                        className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-6 hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-gray-800">{city.name}</h4>
                          <MapPin className="w-4 h-4 text-blue-600" />
                        </div>
                        <p className="text-gray-600 text-sm mb-3 leading-relaxed">{city.description}</p>
                        <div className="text-xs text-blue-600 font-medium">{city.projects}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
              Northeast India Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While we serve all of India, our deep roots and expertise in Northeast India, 
              particularly Assam and Arunachal Pradesh, give us unique insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regionalExpertise.map((expertise, index) => (
              <motion.div
                key={expertise.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  {expertise.icon}
                </div>
                <h3 className="text-xl font-serif text-gray-800 mb-4">{expertise.title}</h3>
                <p className="text-gray-600 leading-relaxed">{expertise.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Our Reach Across India
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence across diverse locations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Promise */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Our Service Promise
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Whether you're in bustling Mumbai, tech-savvy Bangalore, or the serene mountains of Tawang, 
              we're here to bring your design dreams to life across all of India.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Nationwide Reach', description: 'Professional services across all major Indian cities with remote consultations and comprehensive project management.' },
                { title: 'Regional Expertise', description: 'Deep understanding of Northeast India\'s unique architecture, climate, and cultural preferences, especially in Assam and Arunachal Pradesh.' },
                { title: 'Dedicated Support', description: 'Reliable project delivery with regular updates and personal attention to every detail, regardless of location across India.' }
              ].map((promise, index) => (
                <motion.div
                  key={promise.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold mb-3">{promise.title}</h3>
                  <p className="opacity-90 leading-relaxed">{promise.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              No matter where you are in India, we're ready to transform your space with 
              expert design solutions tailored to your location and preferences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsLeadModalOpen(true)}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg inline-flex items-center justify-center"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Location-Specific Consultation
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-gray-800 transition-all duration-300 inline-flex items-center justify-center"
              >
                Contact Our Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lead Modal */}
      <LeadModal 
        isOpen={isLeadModalOpen} 
        onClose={() => setIsLeadModalOpen(false)}
        title="Get Location-Specific Consultation"
      />
    </div>
  );
};

export default WhereWeWork;
