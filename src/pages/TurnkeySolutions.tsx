import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Shield, DollarSign, Users, Settings, Package, Award, ArrowRight, Star, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import LeadModal from '../components/LeadModal';

const TurnkeySolutions = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = React.useState(false);

  // Ensure page always loads from top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Hello! I'm interested in your turnkey interior design solutions. Could you please provide more information?");
    window.open(`https://wa.me/918486076075?text=${message}`, '_blank');
  };

  const services = [
    {
      icon: Settings,
      title: 'Complete Project Planning & Budgeting',
      description: 'Well-structured roadmap with transparent budgeting and financial control',
      details: [
        'Comprehensive project planning with detailed timelines and milestones',
        'Transparent budgeting with no hidden costs or surprise expenses',
        'Financial control systems to track every expense throughout the project',
        'Regular budget updates and cost optimization strategies'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Package,
      title: 'End-to-End Design & Execution',
      description: 'Complete process management from initial concept to final touches',
      details: [
        'Initial concept development and design visualization',
        'Detailed architectural and interior design planning',
        'Complete project execution with skilled craftsmen',
        'Final styling and finishing touches for perfect completion'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Vendor & Material Procurement',
      description: 'Premium materials and trusted vendors at optimal value',
      details: [
        'Sourcing premium materials from trusted, verified suppliers',
        'Bulk purchasing advantages for cost-effective solutions',
        'Quality verification and material authenticity checks',
        'Timely delivery coordination with reliable vendor network'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: CheckCircle,
      title: 'On-Site Supervision & Quality Control',
      description: 'Regular monitoring with strict quality standards and workmanship',
      details: [
        'Daily site visits and progress monitoring by expert supervisors',
        'Strict quality control checks at every project milestone',
        'Skilled craftsmen training and performance management',
        'Immediate issue resolution and quality assurance protocols'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Clock,
      title: 'Timeline Management & Progress Tracking',
      description: 'Keeping projects on schedule with detailed tracking and updates',
      details: [
        'Detailed project timeline with clear milestones and deadlines',
        'Real-time progress tracking and regular client updates',
        'Proactive schedule management to prevent delays',
        'Contingency planning for weather or unforeseen circumstances'
      ],
      color: 'from-teal-500 to-blue-500'
    },
    {
      icon: MessageCircle,
      title: 'Single-Window Client Communication',
      description: 'Dedicated project manager for hassle-free coordination',
      details: [
        'Single point of contact for all project communications',
        'Regular progress updates via calls, messages, and site visits',
        'Immediate response to client queries and concerns',
        'Transparent communication throughout the entire process'
      ],
      color: 'from-amber-500 to-yellow-500'
    },
    {
      icon: Award,
      title: 'Hassle-Free Handover',
      description: 'Complete project delivery ready for immediate use',
      details: [
        'Comprehensive final inspection and quality walkthrough',
        'Complete project documentation and warranty information',
        'Final cleaning and staging for immediate occupancy',
        'Post-handover support and maintenance guidance'
      ],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Time Efficiency',
      description: 'Complete projects 30% faster than traditional approaches through streamlined coordination',
      stats: '30% Faster Completion',
      details: 'Our integrated approach eliminates delays between different phases'
    },
    {
      icon: DollarSign,
      title: 'Cost Optimization',
      description: 'Bulk purchasing and vendor partnerships reduce overall project costs significantly',
      stats: '20% Cost Savings',
      details: 'Transparent pricing with no hidden costs or surprise expenses'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control at every stage ensures excellence and long-lasting results',
      stats: '100% Quality Guarantee',
      details: 'Comprehensive warranties and post-completion support included'
    },
    {
      icon: Users,
      title: 'Single Point Contact',
      description: 'One dedicated project manager handles everything for stress-free experience',
      stats: 'Zero Hassle',
      details: 'Seamless coordination between all teams and vendors'
    }
  ];

  const process = [
    'Initial consultation and comprehensive requirement analysis',
    'Detailed design development, visualization, and client approval',
    'Project planning with timeline creation and resource allocation',
    'Premium material procurement and rigorous quality verification',
    'Coordinated execution with expert supervision and progress tracking',
    'Regular milestone reviews and transparent progress updates',
    'Comprehensive quality inspection and detailed client walkthrough',
    'Complete project handover with warranties and documentation',
    'Ongoing post-completion support and maintenance guidance'
  ];

  const projectTypes = [
    {
      type: 'Residential Projects',
      description: 'Complete home interiors from apartments to luxury villas',
      features: ['Living rooms & bedrooms', 'Kitchens & bathrooms', 'Vastu-compliant layouts', 'Smart home integration']
    },
    {
      type: 'Commercial Spaces',
      description: 'Professional office and retail interior solutions',
      features: ['Office interiors', 'Retail showrooms', 'Hospitality spaces', 'Corporate branding']
    },
    {
      type: 'Hospitality Projects',
      description: 'Hotels, restaurants, and guest accommodation interiors',
      features: ['Hotel rooms & lobbies', 'Restaurant interiors', 'Guest house setups', 'Experience design']
    }
  ];

  // Enhanced structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Turnkey Interior Design Solutions | Complete Project Management",
    "description": "Complete hassle-free interior design solutions from concept to handover. Full project management including design, execution, material procurement, and quality control across Northeast India.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Interiors By Preyashi",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Tinsukia",
        "addressRegion": "Assam",
        "addressCountry": "India"
      },
      "telephone": "+918486076075"
    },
    "areaServed": ["Northeast India", "Assam", "Arunachal Pradesh", "Tinsukia", "Dibrugarh", "Guwahati"],
    "serviceType": [
      "Turnkey Interior Design",
      "Complete Project Management",
      "End-to-End Design Solutions",
      "Full Service Interior Design",
      "Project Planning and Execution",
      "Material Procurement Services",
      "Quality Control and Supervision"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Turnkey Solutions",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "name": service.title,
        "description": service.description
      }))
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "127"
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <SEOHead
        title="Turnkey Interior Design Solutions - Complete Project Management | Hassle-Free Design & Execution | Interiors By Preyashi"
        description="Complete turnkey interior design solutions from concept to handover. Full project management including design, material procurement, execution, and quality control. Hassle-free experience across Northeast India with 30% faster completion and cost optimization."
        keywords="turnkey interior design, complete interior solutions, full service interior design, project management interior design, hassle-free interior design, Tinsukia turnkey solutions, Assam complete interior design, end-to-end interior solutions"
        canonicalUrl="/turnkey-solutions"
        structuredData={structuredData}
      />

      {/* Hero Section - Clean gradient without background image */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-indigo-600 mr-3" />
              <span className="text-indigo-600 font-semibold uppercase tracking-wide">Complete Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-gray-800 leading-tight">
              Turnkey
              <span className="block text-indigo-700 italic">Interior Solutions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Complete hassle-free interior design solutions. From initial concept to final handover, 
              we handle <strong>every aspect of your project</strong> with expertise, transparency, 
              and <strong>unwavering dedication</strong>.
            </p>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Experience the convenience of complete project management with our proven track record of 
              delivering exceptional results on time and within budget.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsLeadModalOpen(true)}
                className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300 shadow-lg"
              >
                Get Complete Solution
              </button>
              <button
                onClick={handleWhatsAppContact}
                className="border border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-medium hover:bg-indigo-600 hover:text-white transition-colors duration-300"
              >
                WhatsApp Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
              Complete Project Management Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our turnkey solutions cover every aspect of your interior design project, 
              ensuring a seamless experience from start to finish.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Service Header */}
                  <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-serif">{service.title}</h3>
                    </div>
                    <p className="text-white/90">{service.description}</p>
                  </div>

                  {/* Service Details */}
                  <div className="p-6">
                    <ul className="space-y-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
              Experience the Turnkey Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the convenience and peace of mind that comes with complete project management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  
                  <div className="text-2xl font-bold text-indigo-600 mb-2">{benefit.stats}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">{benefit.description}</p>
                  <p className="text-sm text-gray-500 italic">{benefit.details}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
              Our Streamlined Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven process that ensures your project is completed on time, within budget, 
              and to the highest quality standards.
            </p>
          </motion.div>

          <div className="space-y-6">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg"
              >
                <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
              Complete Solutions for Every Space
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential homes to commercial spaces, we provide comprehensive turnkey solutions 
              for every type of interior project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectTypes.map((project, index) => (
              <motion.div
                key={project.type}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-serif text-gray-800 mb-3">{project.type}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Star className="w-4 h-4 text-indigo-600 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              See the Difference Our Approach Makes
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
              Our comprehensive turnkey solutions have delivered exceptional results across Northeast India
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: '50+', label: 'Turnkey Projects', description: 'Successfully Completed' },
                { number: '100%', label: 'On-Time Delivery', description: 'Project Completion Rate' },
                { number: '30%', label: 'Faster Completion', description: 'Than Traditional Approach' },
                { number: '95%+', label: 'Client Satisfaction', description: 'Across All Projects' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold mb-1">{stat.label}</div>
                  <div className="text-indigo-200 text-sm">{stat.description}</div>
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
              Ready for a Hassle-Free Experience?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Let us handle every detail of your interior design project. Sit back, relax, 
              and watch your dream space come to life with our complete turnkey solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsLeadModalOpen(true)}
                className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300 shadow-lg inline-flex items-center justify-center"
              >
                <Package className="w-5 h-5 mr-2" />
                Start Your Turnkey Project
              </button>
              <Link
                to="/portfolio"
                className="border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-gray-800 transition-all duration-300 inline-flex items-center justify-center"
              >
                View Completed Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lead Modal */}
      <LeadModal 
        isOpen={isLeadModalOpen} 
        onClose={() => setIsLeadModalOpen(false)}
        title="Get Your Complete Turnkey Solution"
      />
    </div>
  );
};

export default TurnkeySolutions;
