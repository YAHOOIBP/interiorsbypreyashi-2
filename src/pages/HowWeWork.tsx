import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, PenTool, Hammer, Key, CheckCircle, Users, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import LeadModal from '../components/LeadModal';

const HowWeWork = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = React.useState(false);
  const navigate = useNavigate();

  const steps = [
    {
      icon: MessageCircle,
      title: 'Initial Consultation',
      description: 'Understanding your requirements, lifestyle, and challenges',
      details: 'Understanding your requirements, lifestyle, and challenges while analyzing your space or plans.',
      duration: '1-2 Hours',
      deliverables: ['Requirement Analysis', 'Lifestyle Assessment', 'Challenge Identification']
    },
    {
      icon: MapPin,
      title: 'Site Visit & Assessment',
      description: 'Detailed study of the property layout and energy flow',
      details: 'Detailed study of the property layout, directions, and energy flow as per Vastu principles.',
      duration: '2-3 Hours',
      deliverables: ['Site Survey', 'Directional Analysis', 'Energy Flow Assessment']
    },
    {
      icon: PenTool,
      title: 'Concept & Planning',
      description: 'Preparing layouts and Vastu-compliant suggestions',
      details: 'Preparing 2D floor plans, layouts, and Vastu-compliant suggestions tailored to your needs.',
      duration: '1-2 Weeks',
      deliverables: ['2D Floor Plans', 'Layout Options', 'Vastu Recommendations']
    },
    {
      icon: CheckCircle,
      title: 'Design & Visualization',
      description: 'Offering 3D designs and material recommendations',
      details: 'Offering 3D designs, elevations, and material recommendations aligned with both function and Vastu.',
      duration: '1-2 Weeks',
      deliverables: ['3D Visualizations', 'Elevations', 'Material Recommendations', 'Vastu Integration']
    },
    {
      icon: Users,
      title: 'Remedies & Adjustments',
      description: 'Suggesting effective, practical solutions',
      details: 'Suggesting effective, practical solutions without demolition wherever possible.',
      duration: '3-5 Days',
      deliverables: ['Remedy Solutions', 'Adjustment Plans', 'Non-Demolition Options']
    },
    {
      icon: Hammer,
      title: 'Execution & Supervision',
      description: 'Coordinating with contractors and monitoring progress',
      details: 'Coordinating with contractors, monitoring progress, and ensuring timely, quality completion.',
      duration: 'Project Dependent',
      deliverables: ['Contractor Coordination', 'Progress Monitoring', 'Quality Assurance']
    },
    {
      icon: Key,
      title: 'Final Handover',
      description: 'Delivering a balanced and functional space',
      details: 'Delivering a space that is aesthetically pleasing, functional, and energetically balanced.',
      duration: '1-2 Days',
      deliverables: ['Final Inspection', 'Space Balancing', 'Handover Documentation', 'Post-completion Support']
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Interior Design Process",
    "description": "Our 7-step interior design process from consultation to handover",
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "text": step.details
    }))
  };

  return (
    <div className="relative min-h-screen bg-white pt-20">
      <SEOHead
        title="How We Work"
        description="Our structured 7-step interior design process ensures quality, transparency, and client satisfaction from consultation to final handover."
        keywords="interior design process, how we work, design consultation, project management, Tinsukia, Assam"
        canonicalUrl="/how-we-work"
        structuredData={structuredData}
      />

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter blur-sm brightness-75"
        style={{ backgroundImage: `url('https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')` }}
        aria-hidden="true"
      />
      {/* Translucent Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-90" aria-hidden="true"></div>

      {/* Hero Section */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif mb-6 text-gray-800">
              How We Work
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our structured yet flexible process ensures your interior design project is completed 
              on time, within budget, and exceeds your expectations at every stage.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We focus on creating spaces that are aesthetically appealing, but we never compromise on practicality, 
              futuristic design elements, and easy-to-maintain solutions. Whether it's interiors or Vastu consultancy, 
              we follow a clear step-by-step approach.
            </p>

            <noscript>
              <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg max-w-2xl mx-auto">
                <h2 className="font-semibold text-amber-800 mb-2">Our 7-Step Process</h2>
                <p className="text-amber-700 text-sm">
                  From initial consultation to final handover, we ensure quality and transparency at every step.
                </p>
              </div>
            </noscript>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-300 to-amber-600"></div>
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center mb-16 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                        <step.icon className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <span className="text-sm text-amber-600 font-medium">Step {index + 1}</span>
                        <h3 className="text-2xl font-serif text-gray-800">{step.title}</h3>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">{step.description}</h4>
                    <p className="text-gray-600 leading-relaxed mb-4">{step.details}</p>
                    
                    <div className="border-t border-gray-100 pt-4">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium text-gray-700">Duration:</span>
                        <span className="text-sm text-amber-600 font-medium">{step.duration}</span>
                      </div>
                      
                      <div>
                        <span className="text-sm font-medium text-gray-700 mb-2 block">Deliverables:</span>
                        <ul className="space-y-1">
                          {step.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center">
                              <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></div>
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className="w-6 h-6 bg-amber-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                </div>

                {/* Empty Space for Timeline Balance */}
                <div className="hidden lg:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="relative z-10 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
              Why Our Process Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our systematic approach has delivered successful projects across Northeast India, 
              ensuring quality, transparency, and client satisfaction at every step.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-serif mb-4 text-gray-800">Client-Centric Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                Every decision is made with your lifestyle, preferences, and budget in mind. 
                We listen carefully and adapt our designs to match your unique vision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-serif mb-4 text-gray-800">Quality Assurance</h3>
              <p className="text-gray-600 leading-relaxed">
                Rigorous quality checks at every stage ensure the highest standards of 
                craftsmanship and materials, delivering results that exceed expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <PenTool className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-serif mb-4 text-gray-800">Transparent Communication</h3>
              <p className="text-gray-600 leading-relaxed">
                Regular updates, clear timelines, and open communication throughout the project 
                keep you informed and involved in every major decision.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Let's Start Your Journey
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Experience our proven process firsthand. Schedule your initial consultation 
              today and take the first step toward your dream space.
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
                View Our Portfolio
              </motion.button>
            </div>

            <noscript>
              <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-block bg-white text-amber-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg">
                  Schedule Consultation
                </a>
                <a href="/portfolio" className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-amber-600 transition-all duration-300">
                  View Our Portfolio
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

export default HowWeWork;