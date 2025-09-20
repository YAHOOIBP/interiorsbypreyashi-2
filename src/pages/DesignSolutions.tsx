import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Lightbulb, Cpu, Recycle, Sun, Droplets, Wind, TreePine, Package, Heart } from 'lucide-react';
import LeadModal from '../components/LeadModal';

const DesignSolutions = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = React.useState(false);

  const solutions = [
    {
      icon: Package,
      title: 'Adaptive Partitioning & Flexible Layouts',
      description: 'Dynamic spaces that transform based on your needs',
      details: 'We use sliding panels, movable walls, or folding dividers to adapt spaces dynamically—ideal for transforming areas for events, privacy, or open living.',
      benefits: ['Space Flexibility', 'Event Adaptability', 'Privacy Control', 'Open Living Options'],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: Leaf,
      title: 'Biophilic & Wellness-Focused Design',
      description: 'Connecting interiors with nature for better well-being',
      details: 'Incorporating indoor vertical gardens, living walls, and natural materials like wood and stone, our designs promote wellness, reduce stress, and enhance indoor air quality.',
      benefits: ['Stress Reduction', 'Improved Air Quality', 'Enhanced Well-being', 'Natural Connection'],
      image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: Cpu,
      title: 'Smart Technology Integration',
      description: 'Seamless tech integration for modern living',
      details: 'From ambient lighting and automated blinds to smart thermostats and voice-controlled environments, we blend intuitive tech for seamless functionality and comfort.',
      benefits: ['Home Automation', 'Energy Efficiency', 'Convenience', 'Future-Ready'],
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: Sun,
      title: 'Immersive Multi-Sensory Experiences',
      description: 'Engaging all senses for emotional connection',
      details: 'Leveraging soundscapes, scent diffusers, tactile textures, and mood lighting, this approach goes beyond visuals to create emotionally resonant and personalized spaces.',
      benefits: ['Emotional Connection', 'Personalized Experience', 'Sensory Engagement', 'Memorable Spaces'],
      image: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: Lightbulb,
      title: 'Interactive & Dynamic Surfaces',
      description: 'Responsive surfaces that engage and inform',
      details: 'Imagine walls or counters that respond to touch—changing texture or displaying information. We can incorporate smart materials and interactive design elements for modern, engaging experiences.',
      benefits: ['Interactive Experience', 'Modern Appeal', 'Information Display', 'Engaging Design'],
      image: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: TreePine,
      title: 'Sculptural & Textural Feature Installations',
      description: 'Artistic elements that add depth and personality',
      details: 'From bas-relief wall panels to floor-to-ceiling tiled fireplaces, these artistic features add depth, warmth, and personality to any interior.',
      benefits: ['Artistic Appeal', 'Unique Character', 'Visual Interest', 'Personal Expression'],
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: Recycle,
      title: 'Sustainable & Zero-Waste Focus',
      description: 'Eco-conscious design for a better future',
      details: 'Embracing eco-conscious design, we use recycled, upcycled materials, biodegradable fabrics, and circular, zero-waste principles to promote healthier and greener interiors.',
      benefits: ['Environmental Responsibility', 'Healthier Spaces', 'Sustainable Materials', 'Future-Conscious'],
      image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: Cpu,
      title: 'AI-Aided Concept Development',
      description: 'Technology-enhanced design process',
      details: 'Leveraging AI tools, we generate mood boards, layout options, and design prototypes rapidly—enabling more tailored and efficient planning for each project.',
      benefits: ['Rapid Prototyping', 'Tailored Solutions', 'Efficient Planning', 'Technology Integration'],
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: Heart,
      title: 'Playful & Sensory Personalization',
      description: 'Storytelling through design elements',
      details: 'Inspired by boutique design trends, we focus on storytelling—using expressive furniture, rich textiles, or sculptural lighting to infuse spaces with personal identity and emotional depth.',
      benefits: ['Personal Identity', 'Emotional Depth', 'Storytelling', 'Unique Expression'],
      image: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  return (
    <div className="relative min-h-screen bg-white pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter blur-sm brightness-75"
        style={{ backgroundImage: `url('https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')` }}
        aria-hidden="true"
      />
      {/* Translucent Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-90" aria-hidden="true"></div>

      {/* Hero Section */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif mb-6 text-gray-800">
              Design Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Innovative, sustainable, and forward-thinking design methodologies that create 
              spaces for the future while respecting our environment and enhancing human well-being.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
              Creative & Future-Ready Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Elevate spaces with thoughtful, innovative solutions that blend beauty with practicality. 
              Each design element is crafted to be visually striking, easy to maintain, and equipped for the future.
            </p>
          </motion.div>

          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <solution.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-serif text-gray-800">{solution.title}</h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    {solution.details}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-lg shadow-xl"
                  >
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Stats */}
      <section className="relative z-10 py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
              Innovation by Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Measurable impact through innovative design solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '40%', label: 'Energy Savings', description: 'Through smart lighting & systems' },
              { number: '30%', label: 'Water Conservation', description: 'Via efficient fixtures & recycling' },
              { number: '60%', label: 'Improved Air Quality', description: 'Through biophilic design' },
              { number: '95%', label: 'Client Satisfaction', description: 'With sustainable solutions' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
                Building for Tomorrow
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our design solutions aren't just about creating beautiful spaces today—they're about 
                building a sustainable future for generations to come. Every project contributes to 
                environmental conservation while enhancing quality of life.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <TreePine className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Carbon-neutral design practices</span>
                </div>
                <div className="flex items-center">
                  <Wind className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Natural ventilation optimization</span>
                </div>
                <div className="flex items-center">
                  <Recycle className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Circular economy principles</span>
                </div>
                <div className="flex items-center">
                  <Sun className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Renewable energy integration</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Sustainable Interior Design"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-lg shadow-xl">
                <div className="text-2xl font-bold">7+ Years</div>
                <div className="text-sm">Sustainable Design Leadership</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
              360° Virtual Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Step into our designs with immersive 360-degree virtual tours. 
              Experience spaces before they're built with our cutting-edge visualization technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <iframe
              src="https://momento360.com/e/u/e79fc0fb51454258a63e32c4469a24f2?utm_campaign=embed&utm_source=other&heading=-247.24&pitch=2.77&field-of-view=75&size=medium"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              title="360° Conference Room Design"
              className="w-full"
            ></iframe>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Conference Room Design - 360° View
              </h3>
              <p className="text-gray-600">
                Explore this professional conference room design in full 360° detail. 
                Use your mouse or touch to navigate and experience the space.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Design the Future Today
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Experience innovative design solutions that are beautiful, sustainable, and built for tomorrow. 
              Let's create something extraordinary together.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsLeadModalOpen(true)}
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Explore Sustainable Design
            </motion.button>

            <noscript>
              <div className="mt-4">
                <a href="/contact" className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg">
                  Explore Sustainable Design
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
        title="Explore Sustainable Design Solutions"
      />
    </div>
  );
};

export default DesignSolutions;