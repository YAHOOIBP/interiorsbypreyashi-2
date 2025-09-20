import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, MapPin, Calendar, ArrowRight, X } from 'lucide-react';
import LeadModal from '../components/LeadModal';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'completed', name: 'Completed' },
    { id: 'ongoing', name: 'Ongoing' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Hindustan Unilever Limited (HUL) – Conference Room',
      category: 'completed',
      location: 'Doomdooma, Assam',
      year: '2024',
      type: 'Corporate',
      description: 'Hindustan Unilever Limited (HUL) is India\'s largest fast-moving consumer goods (FMCG) company and a subsidiary of Unilever, a British multinational. With a legacy of over 90 years, HUL has been serving Indian households with some of the most trusted brands. It\'s an honour that I had the opportunity to design and execute the conference room for HUL\'s office in Doomdooma, Assam. The project was carefully curated to reflect professionalism, modern aesthetics, and functionality—ensuring a comfortable and inspiring environment for corporate discussions and meetings within the given deadline.',
      images: [
        '/images/portfolio/HUL1.jpg',
        '/images/portfolio/HUL2.jpg',
        '/images/portfolio/HUL1.jpg'
      ],
      features: ['Professional Design', 'Modern Aesthetics', 'Functional Layout', 'Corporate Standards']
    },
    {
      id: 2,
      title: 'KCR Sweet Shop & Restaurant',
      category: 'completed',
      location: 'Tinsukia, Assam',
      year: '2024',
      type: 'Hospitality',
      description: 'Created an inviting and aesthetic restaurant and sweet shop interior that balances traditional warmth with a contemporary dining experience, ensuring comfort and easy maintenance.',
      images: [
        '/images/portfolio/KCR1.JPG',
        '/images/portfolio/KCR2.JPG',
        '/images/portfolio/KCR5.JPG'
      ],
      features: ['Traditional Warmth', 'Contemporary Design', 'Easy Maintenance', 'Customer Comfort']
    },
    {
      id: 3,
      title: 'Corporate Office',
      category: 'completed',
      location: 'Kharagpur',
      year: '2024',
      type: 'Commercial',
      description: 'Developed a well-structured office space in Kharagpur with efficient layouts, optimized storage, and a design that enhances productivity while maintaining a corporate elegance.',
      images: [
        '/images/portfolio/Kharagpur1.jpg',
        '/images/portfolio/Kharagpur2.jpg',
        '/images/portfolio/Kharagpur3.jpg'
      ],
      features: ['Efficient Layouts', 'Optimized Storage', 'Productivity Enhancement', 'Corporate Elegance']
    },
    {
      id: 4,
      title: 'Residential Project – Two Girls\' Bedroom',
      category: 'completed',
      location: 'Tinsukia, Assam',
      year: '2024',
      type: 'Residential',
      description: 'Designed a personalized and vibrant bedroom space for two young girls, combining functionality with playful aesthetics to reflect their individuality and growing needs.',
      images: [
        '/images/portfolio/2GirlsBedroom1.jpg',
        '/images/portfolio/2GirlsBedroom2.jpg',
        '/images/portfolio/2GirlsBedroom3.jpg'
      ],
      features: ['Personalized Design', 'Vibrant Aesthetics', 'Functional Layout', 'Growth-Adaptive']
    },
    {
      id: 5,
      title: 'Office Project',
      category: 'completed',
      location: 'North Lakhimpur',
      year: '2024',
      type: 'Commercial',
      description: 'Executed a modern office project in North Lakhimpur, integrating practical design solutions, ergonomic planning, and stylish interiors suited for a professional work environment.',
      images: [
        'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
      ],
      features: ['Modern Design', 'Ergonomic Planning', 'Professional Environment', 'Practical Solutions']
    },
    {
      id: 6,
      title: 'Sanitary Showroom',
      category: 'completed',
      location: 'Tinsukia, Assam',
      year: '2024',
      type: 'Commercial',
      description: 'Crafted an appealing showroom interior for a sanitary brand in Tinsukia, showcasing products in an organized, customer-friendly, and visually engaging manner.',
      images: [
        '/images/portfolio/Sanitary1.jpg',
        '/images/portfolio/Sanitary2.jpg',
        '/images/portfolio/Sanitary3.jpg'
      ],
      features: ['Product Showcase', 'Organized Layout', 'Customer-Friendly', 'Visual Appeal']
    },
    {
      id: 7,
      title: 'Railway DRM Washroom',
      category: 'completed',
      location: 'Tinsukia & Dibrugarh',
      year: '2024',
      type: 'Government',
      description: 'Handling official and functional design for railway administrative Rest houses, ensuring comfortable stays for officers.',
      images: [
        '/images/portfolio/R_WASHROOM1.jpg',
        '/images/portfolio/R_WASHROOM2.jpg',
        '/images/portfolio/R_WASHROOM3.jpg'
      ],
      features: ['Modern Design', 'Safety Focus', 'Comfort Focus', 'Administrative Standards']
    },
    {
      id: 8,
      title: '3BHK Two-Story Residential Building',
      category: 'ongoing',
      location: 'Tinsukia, Assam',
      year: '2024',
      type: 'Residential',
      description: 'A thoughtfully planned residence combining aesthetics, comfort, and Vastu-compliant design principles.',
      images: [
        '/images/portfolio/3BHK1.JPG',
        '/images/portfolio/3BHK2.JPG',
        '/images/portfolio/3BHK3.JPG'
      ],
      features: ['Vastu Compliant', 'Aesthetic Design', 'Comfort Focus', 'Thoughtful Planning']
    },
    {
      id: 9,
      title: 'Restaurant',
      category: 'ongoing',
      location: 'Tinsukia',
      year: '2024',
      type: 'Hospitality',
      description: 'Creating an inviting and stylish dining environment that balances ambiance, functionality, and customer experience.',
      images: [
        'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
      ],
      features: ['Inviting Ambiance', 'Stylish Design', 'Functional Layout', 'Customer Experience']
    },
    {
      id: 10,
      title: 'Gym',
      category: 'ongoing',
      location: 'Tinsukia',
      year: '2024',
      type: 'Fitness',
      description: 'Designing a fitness space focused on efficiency, ergonomics, and motivation for members.',
      images: [
        'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
      ],
      features: ['Efficient Design', 'Ergonomic Planning', 'Motivational Environment', 'Member-Focused']
    },
    {
      id: 11,
      title: 'Drilling Company',
      category: 'ongoing',
      location: 'Duliajan (under Oil India)',
      year: '2024',
      type: 'Industrial',
      description: 'Developing industrial interiors with a focus on safety, operational efficiency, and professional aesthetics.',
      images: [
        '/images/portfolio/DRILLING1.jpg',
        '/images/portfolio/DRILLING2.jpg',
        '/images/portfolio/DRILLING3.jpg'
      ],
      features: ['Safety Focus', 'Operational Efficiency', 'Professional Aesthetics', 'Industrial Standards']
    },
    {
      id: 12,
      title: 'Railway DRM Projects',
      category: 'ongoing',
      location: 'Tinsukia & Dibrugarh',
      year: '2024',
      type: 'Government',
      description: 'Handling official and functional design for railway administrative Rest houses, ensuring comfortable stays for officers.',
      images: [
        '/images/portfolio/RAILWAY1.jpg',
        '/images/portfolio/RAILWAY2.jpg',
        '/images/portfolio/RAILWAY3.jpg'
      ],
      features: ['Official Design', 'Functional Layout', 'Comfortable Stays', 'Administrative Standards']
    },
    {
      id: 13,
      title: 'Corporate Office',
      category: 'ongoing',
      location: 'Makum',
      year: '2024',
      type: 'Commercial',
      description: 'Designing a modern and functional workspace that reflects the company\'s brand and enhances employee productivity.',
      images: [
        '/images/portfolio/R_WASHROOM1.jpg',
        '/images/portfolio/R_WASHROOM2.jpg',
        '/images/portfolio/R_WASHROOM3.jpg'
      ],
      features: ['Modern Design', 'Brand Reflection', 'Productivity Enhancement', 'Functional Workspace']
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white pt-20 page-background bg-portfolio">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif mb-6 text-gray-800">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our completed and ongoing projects across Northeast India. Each space tells a unique story 
              of design excellence, functionality, and aesthetic beauty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white sticky top-20 z-40 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center space-x-1">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        project.category === 'completed' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {project.category === 'completed' ? 'Completed' : 'Ongoing'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{project.location}</span>
                      <span className="mx-2">•</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{project.year}</span>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {project.description.substring(0, 120)}...
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-amber-600">{project.type}</span>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-amber-600 transition-colors duration-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center z-10">
                <h3 className="text-2xl font-serif text-gray-800">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {selectedProject.images.map((image: string, index: number) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedProject.title} ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Project Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                        <span>{selectedProject.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                        <span>{selectedProject.year}</span>
                      </div>
                      <div>
                        <span className="font-medium">Type: </span>
                        <span>{selectedProject.type}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h4>
                    <ul className="space-y-1">
                      {selectedProject.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-amber-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Description</h4>
                  <p className="text-gray-600 leading-relaxed">{selectedProject.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Ready to Create Your Own Masterpiece?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Let's discuss your project and create something extraordinary together. 
              Your dream space is just a conversation away.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsLeadModalOpen(true)}
              className="bg-white text-amber-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Lead Modal */}
      <LeadModal 
        isOpen={isLeadModalOpen} 
        onClose={() => setIsLeadModalOpen(false)}
        title="Start Your Project"
      />
    </div>
  );
};

export default Portfolio;