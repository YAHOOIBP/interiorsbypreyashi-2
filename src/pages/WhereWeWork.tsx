import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Globe, Star, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LeadModal from '../components/LeadModal';

const WhereWeWork = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = React.useState(false);
  const navigate = useNavigate();

  const regions = [
    {
      state: 'Pan India Coverage',
      subtitle: 'Serving All Major Cities Across India',
      cities: [
        { name: 'Delhi NCR', description: 'National Capital Region' },
        { name: 'Mumbai', description: 'Financial Capital of India' },
        { name: 'Bangalore', description: 'Silicon Valley of India' },
        { name: 'Chennai', description: 'Detroit of India' },
        { name: 'Hyderabad', description: 'Cyberabad - Tech Hub' },
        { name: 'Pune', description: 'Oxford of the East' },
        { name: 'Kolkata', description: 'Cultural Capital of India' },
        { name: 'Ahmedabad', description: 'Manchester of India' },
      ]
    },
    {
      state: 'Northeast India Specialization',
      subtitle: 'Our Area of Expertise - Assam & Arunachal Pradesh',
      cities: [
        { name: 'Guwahati', description: 'Gateway to Northeast India' },
        { name: 'Tinsukia', description: 'Tea Capital of India' },
        { name: 'Dibrugarh', description: 'Industrial Hub of Upper Assam' },
        { name: 'Jorhat', description: 'Cultural Capital of Assam' },
        { name: 'Silchar', description: 'Commercial Center of Barak Valley' },
        { name: 'Tezpur', description: 'Cultural Town on Brahmaputra' },
        { name: 'Itanagar', description: 'Capital of Arunachal Pradesh' },
        { name: 'Namsai', description: 'Golden Pagoda City' },
        { name: 'Tezu', description: 'Administrative Hub of Lohit' },
        { name: 'Pasighat', description: 'Oldest Town of Arunachal' },
        { name: 'Ziro', description: 'UNESCO World Heritage Site' },
        { name: 'Tawang', description: 'Land of Monpa Tribe' },
        { name: 'Bomdila', description: 'Buddhist Cultural Center' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20 page-background bg-where-we-work">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Globe className="w-12 h-12 text-amber-600 mr-4" />
              <h1 className="text-5xl md:text-6xl font-serif text-gray-800">
                Where We Work
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Bringing world-class interior design services <strong>across all of India</strong> with specialized expertise 
              in the beautiful Northeast region, particularly <strong>Assam and Arunachal Pradesh</strong>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-amber-600 text-lg">
              <div className="flex items-center">
                <Globe className="w-6 h-6 mr-2" />
                <span className="font-semibold">Pan India Services</span>
              </div>
              <div className="hidden sm:block w-2 h-2 bg-amber-600 rounded-full"></div>
              <div className="flex items-center">
                <Star className="w-6 h-6 mr-2" />
                <span className="font-semibold">Northeast India Specialists</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coverage Overview */}
      <section className="relative z-10 py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-8">Our Service Coverage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Globe className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-serif mb-3">Pan India Services</h3>
                <p className="leading-relaxed">
                  Professional interior design services available across all major Indian cities. 
                  Remote consultations, detailed planning, and project management nationwide.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Award className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-serif mb-3">Northeast Expertise</h3>
                <p className="leading-relaxed">
                  Specialized knowledge of local architecture, climate considerations, and cultural preferences 
                  unique to Assam, Arunachal Pradesh, and the entire Northeast region.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
              Our Service Regions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From metropolitan cities to the serene landscapes of Northeast India, 
              we bring beautiful, harmonious design to your doorstep wherever you are.
            </p>
          </motion.div>

          {/* Regions Grid */}
          <div className="grid grid-cols-1 gap-12">
            {regions.map((region, regionIndex) => (
              <motion.div
                key={region.state}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: regionIndex * 0.2 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
              >
                <div className={`${regionIndex === 0 ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : 'bg-gradient-to-r from-amber-600 to-orange-600'} text-white p-8`}>
                  <div className="flex items-center justify-center mb-4">
                    {regionIndex === 0 ? 
                      <Globe className="w-10 h-10 mr-4" /> : 
                      <Star className="w-10 h-10 mr-4" />
                    }
                    <h3 className="text-3xl md:text-4xl font-serif text-center">{region.state}</h3>
                  </div>
                  <p className="text-center text-lg opacity-90">{region.subtitle}</p>
                </div>
                
                <div className="p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {region.cities.map((city, cityIndex) => (
                      <motion.div
                        key={city.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: cityIndex * 0.05 }}
                        whileHover={{ scale: 1.03, y: -5 }}
                        className="border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-gray-50 to-white hover:border-amber-200"
                      >
                        <div className="flex items-start space-x-3">
                          <MapPin className={`w-5 h-5 ${regionIndex === 0 ? 'text-blue-600' : 'text-amber-600'} mt-1 flex-shrink-0`} />
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2 text-lg">{city.name}</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">{city.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
              Why Clients Across India Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combining nationwide reach with specialized regional expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-serif mb-4 text-gray-800">Pan India Reach</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional services across all major Indian cities with remote consultations 
                and comprehensive project management.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-serif mb-4 text-gray-800">Regional Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                Deep understanding of Northeast India's unique architecture, climate, 
                and cultural preferences, especially in Assam and Arunachal Pradesh.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-serif mb-4 text-gray-800">Timely Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Reliable project delivery with regular updates and personal attention 
                to every detail, regardless of location across India.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-serif mb-4 text-gray-800">24/7 Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Dedicated support throughout your project with direct access 
                to our design team for consultations and updates nationwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Special Northeast Features */}
      <section className="relative z-10 py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
              Our Northeast India Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              While we serve all of India, our deep roots and expertise in Northeast India, 
              particularly Assam and Arunachal Pradesh, give us unique insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200"
            >
              <h3 className="text-2xl font-serif mb-4 text-amber-800 flex items-center">
                <MapPin className="w-6 h-6 mr-2" />
                Climate Expertise
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Understanding of monsoon patterns, humidity control, and ventilation requirements 
                specific to Northeast India's unique climate conditions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8 border border-green-200"
            >
              <h3 className="text-2xl font-serif mb-4 text-green-800 flex items-center">
                <Award className="w-6 h-6 mr-2" />
                Cultural Integration
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Incorporating traditional Northeast Indian design elements, local craftsmanship, 
                and cultural motifs into modern interior designs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200"
            >
              <h3 className="text-2xl font-serif mb-4 text-blue-800 flex items-center">
                <Star className="w-6 h-6 mr-2" />
                Local Networks
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Established relationships with local suppliers, craftsmen, and contractors 
                across Assam and Arunachal Pradesh for seamless project execution.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Whether you're in bustling Mumbai, tech-savvy Bangalore, or the serene mountains of Tawang, 
              we're here to bring your design dreams to life across all of India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLeadModalOpen(true)}
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Schedule Consultation
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/portfolio')}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                View Our Work
              </motion.button>
            </div>
            <noscript>
              <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg">
                  Schedule Consultation
                </a>
                <a href="/portfolio" className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-orange-600 transition-all duration-300">
                  View Our Work
                </a>
              </div>
            </noscript>
          </motion.div>
        </div>
      </section>

      {/* Lead Modal */}
      <LeadModal 
        isOpen={isLeadModalOpen} 
        onClose={() => setIsLeadModalOpen(false)}
        title="Schedule Your Consultation"
      />
    </div>
  );
};

export default WhereWeWork;