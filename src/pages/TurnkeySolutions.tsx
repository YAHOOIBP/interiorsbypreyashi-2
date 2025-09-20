import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Shield, DollarSign, Users, Settings, Package, Award } from 'lucide-react';
import LeadModal from '../components/LeadModal';

const TurnkeySolutions = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = React.useState(false);

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Hello! I'm interested in your turnkey interior design solutions. Could you please provide more information?");
    window.open(`https://wa.me/918486076075?text=${message}`, '_blank');
  };

  const services = [
    {
      icon: Settings,
      title: 'Complete Project Planning & Budgeting',
      description: 'Well-structured roadmap with transparent budgeting',
      details: [
        'We provide a well-structured roadmap for your project with transparent budgeting, ensuring clarity and financial control at every stage.'
      ]
    },
    {
      icon: Package,
      title: 'End-to-End Design & Execution',
      description: 'Complete process management from concept to final touches',
      details: [
        'From initial concept to final touches, our team manages the entire process, blending creativity with precision to deliver your vision.'
      ]
    },
    {
      icon: Users,
      title: 'Vendor & Material Procurement',
      description: 'Premium materials and trusted vendors at best value',
      details: [
        'We source premium materials and trusted vendors at the best value, ensuring quality, durability, and timely availability.'
      ]
    },
    {
      icon: CheckCircle,
      title: 'On-Site Supervision & Quality Control',
      description: 'Regular monitoring and strict quality standards',
      details: [
        'Regular site visits and strict monitoring maintain the highest standards of workmanship and flawless execution.'
      ]
    },
    {
      icon: Clock,
      title: 'Timeline Management & Progress Tracking',
      description: 'Keeping projects on schedule with detailed tracking',
      details: [
        'We keep your project on schedule with detailed tracking and updates, ensuring timely delivery without compromising quality.'
      ]
    },
    {
      icon: Users,
      title: 'Single-Window Client Communication',
      description: 'Dedicated point of contact for hassle-free coordination',
      details: [
        'Enjoy hassle-free coordination with a dedicated point of contact, making the entire process smooth and stress-free.'
      ]
    },
    {
      icon: Award,
      title: 'Hassle-Free Handover',
      description: 'Complete project delivery ready for use',
      details: [
        'Your fully completed and styled space is handed over, ready for use — with every detail thoughtfully taken care of.'
      ]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Time Efficiency',
      description: 'Complete projects 30% faster than traditional approaches',
      stats: '30% Faster Completion'
    },
    {
      icon: DollarSign,
      title: 'Cost Optimization',
      description: 'Bulk purchasing and vendor partnerships reduce overall costs',
      stats: '20% Cost Savings'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control at every stage ensures excellence',
      stats: '100% Quality Guarantee'
    },
    {
      icon: Users,
      title: 'Single Point Contact',
      description: 'One dedicated project manager handles everything',
      stats: 'Zero Hassle'
    }
  ];

  const process = [
    'Initial consultation and requirement analysis',
    'Comprehensive design development and approval',
    'Detailed project planning and timeline creation',
    'Material procurement and quality verification',
    'Coordinated execution with expert supervision',
    'Regular progress updates and milestone reviews',
    'Final quality inspection and client walkthrough',
    'Project handover with warranties and documentation',
    'Post-completion support and maintenance guidance'
  ];

  return (
    <div className="relative min-h-screen bg-white pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter blur-sm brightness-75"
        style={{ backgroundImage: `url('https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')` }}
        aria-hidden="true"
      />
      {/* Translucent Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-90" aria-hidden="true"></div>

      {/* Hero Section */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif mb-6 text-gray-800">
              Turnkey Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Complete hassle-free interior design solutions. From initial concept to final handover, 
              we handle every aspect of your project with expertise, transparency, and dedication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
              From Concept to Completion
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our turnkey solutions cover every aspect of your interior design project, 
              ensuring a seamless experience from start to finish.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-gray-800">{service.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3">
                  {service.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-sm text-gray-700 leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
              Why Choose Turnkey?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the convenience and peace of mind that comes with complete project management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-serif mb-4 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{benefit.description}</p>
                <div className="text-2xl font-bold text-blue-600">{benefit.stats}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
              Our Turnkey Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A streamlined process that ensures your project is completed on time, 
              within budget, and to the highest quality standards.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              'Initial consultation and requirement analysis',
              'Comprehensive design development and approval',
              'Detailed project planning and timeline creation',
              'Material procurement and quality verification',
              'Coordinated execution with expert supervision',
              'Regular progress updates and milestone reviews',
              'Final quality inspection and client walkthrough',
              'Project handover with warranties and documentation',
              'Post-completion support and maintenance guidance'
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center mb-6 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-6 flex-shrink-0 font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="relative z-10 py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
              Traditional vs Turnkey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See the difference our comprehensive approach makes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-100 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-serif mb-6 text-gray-800 text-center">Traditional Approach</h3>
              <ul className="space-y-4">
                {[
                  'Multiple vendors to coordinate',
                  'Separate procurement headaches',
                  'Quality control challenges',
                  'Timeline delays and overruns',
                  'Budget uncertainties',
                  'Constant decision fatigue'
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <span className="text-red-500 mr-3">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-blue-600 text-white p-8 rounded-lg"
            >
              <h3 className="text-2xl font-serif mb-6 text-white text-center">Our Turnkey Solution</h3>
              <ul className="space-y-4">
                {[
                  'Single point of contact',
                  'Complete material management',
                  'Guaranteed quality standards',
                  'On-time project delivery',
                  'Fixed budget transparency',
                  'Stress-free experience'
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-blue-100">
                    <span className="text-green-400 mr-3">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Ready for a Hassle-Free Experience?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Let us handle every detail of your interior design project. Sit back, relax, 
              and watch your dream space come to life with our complete turnkey solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLeadModalOpen(true)}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Get Turnkey Quote
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsAppContact}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>

            <noscript>
              <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg">
                  Get Turnkey Quote
                </a>
                <a href="https://wa.me/918486076075" className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-all duration-300">
                  Schedule Consultation
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
        title="Get Your Turnkey Quote"
      />
    </div>
  );
};

export default TurnkeySolutions;