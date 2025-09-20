import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LeadModal from '../components/LeadModal';

const WhereWeWork = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = React.useState(false);
  const navigate = useNavigate();

  const regions = [
    {
      state: 'Assam',
      cities: [
        { name: 'Guwahati', description: 'The Gateway to Northeast India' },
        { name: 'Tinsukia', description: 'Tea Capital of India' },
        { name: 'Dibrugarh', description: 'Industrial Hub of Upper Assam' },
        { name: 'Jorhat', description: 'Cultural Capital of Assam' },
        { name: 'Silchar', description: 'Commercial Center of Barak Valley' },
        { name: 'Tezpur', description: 'Cultural Town on Brahmaputra' },
      ]
    },
    {
      state: 'Arunachal Pradesh',
      cities: [
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
      <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif mb-6 text-gray-800">
              Where We Work
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Bringing world-class interior design services to the beautiful Northeast region of India. 
              We proudly serve clients across Assam and Arunachal Pradesh.
            </p>
            <div className="flex items-center justify-center text-amber-600 text-lg">
              <MapPin className="w-6 h-6 mr-2" />
              <span>Serving 13+ Cities Across Northeast India</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
              Our Service Regions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From the tea gardens of Upper Assam to the mountains of Arunachal Pradesh, 
              we bring beautiful, harmonious design to your doorstep.
            </p>
          </motion.div>

          {/* States Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {regions.map((region, regionIndex) => (
              <motion.div
                key={region.state}
                initial={{ opacity: 0, x: regionIndex === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="bg-amber-600 text-white p-6">
                  <h3 className="text-3xl font-serif text-center">{region.state}</h3>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {region.cities.map((city, cityIndex) => (
                      <motion.div
                        key={city.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: cityIndex * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-1">{city.name}</h4>
                            <p className="text-sm text-gray-600">{city.description}</p>
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
      <section className="relative z-10 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
              Why Northeast India Chooses Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-serif mb-4 text-gray-800">Local Understanding</h3>
              <p className="text-gray-600 leading-relaxed">
                Deep knowledge of local architecture, climate considerations, and cultural preferences 
                unique to the Northeast region.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-serif mb-4 text-gray-800">Timely Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Reliable project delivery with regular site visits and personal attention to every detail, 
                no matter the location.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-serif mb-4 text-gray-800">24/7 Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Dedicated support throughout your project journey with direct access to our design team 
                for consultations and updates.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative z-10 py-20 bg-amber-600 text-white">
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
              Whether you're in the bustling city of Guwahati or the serene mountains of Tawang, 
              we're here to bring your design dreams to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLeadModalOpen(true)}
                className="bg-white text-amber-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Schedule Consultation
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/portfolio')}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-amber-600 transition-all duration-300"
              >
                View Our Work
              </motion.button>
            </div>

            <noscript>
              <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-block bg-white text-amber-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg">
                  Schedule Consultation
                </a>
                <a href="/portfolio" className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-amber-600 transition-all duration-300">
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