import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Building2, Calculator, ChevronDown, ChevronUp, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import LeadModal from '../components/LeadModal';

const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const services = [
    {
      id: 'interior-design',
      title: 'Interior Design',
      subtitle: 'Residential & Commercial',
      icon: <Home className="w-10 h-10 text-amber-600" />,
      description: 'End-to-end interior solutions designed with precision, functionality, and creativity.',
      price: '₹50-500 per sq ft',
      features: [
        'Space Planning & Optimization',
        '2D Floor Plans & 3D Visualizations',
        'Elevations & Detailed Layouts',
        'Bespoke Furniture & Ceiling Design',
        'Material & Finish Selection',
        'Lighting, Electrical & Plumbing Layouts',
        'Vastu Consultancy (on request)',
        'Site Visits, Supervision & Execution',
        'Complete Turnkey Project Management',
      ],
      learnMore: `Our interior design services are a perfect blend of creativity, functionality, and attention to detail. We create aesthetically refined and practical spaces reflecting your personality while being easy to maintain.

**Space Planning & Optimization** – Smart layouts that maximize every inch of your space while maintaining comfort and flow.

**2D Floor Plans & 3D Visualizations** – Clear plans and realistic renderings to visualize the final outcome before execution.

**Elevations & Detailed Layouts** – Comprehensive drawings covering designs, flooring, and structural detailing.

**Bespoke Furniture & Ceiling Design** – Custom-made furniture and creative ceiling concepts that add uniqueness and functionality.

**Material & Finish Selection** – Guidance in choosing high-quality, durable, and aesthetic finishes suited to your lifestyle.

**Lighting, Electrical & Plumbing Layouts** – Detailed layouts for seamless functionality and convenience.

**Vastu Consultancy (on request)** – Integrating Vastu principles for harmony, prosperity, and positive energy.

**Site Visits, Supervision & Execution** – Regular monitoring and professional supervision to ensure quality.

**Complete Turnkey Project Management** – End-to-end solutions from concept to completion.`,
    },
    {
      id: 'vastu-consultation',
      title: 'Vastu Consultation',
      subtitle: 'Residential, Commercial & Industrial',
      icon: <Building2 className="w-10 h-10 text-amber-600" />,
      description: 'Expert Vastu guidance to create harmony, balance, and positive energy in your spaces.',
      price: '₹5,000-1.5 L',
      features: [
        'Vastu-Compliant Floor Planning',
        'Space & Directional Analysis',
        'Remedies Without Demolition',
        'Residential & Commercial Vastu Solutions',
        'Integration with Interior Design',
        'Personalized Consultation & Reports',
      ],
      learnMore: `We provide expert Vastu guidance for harmony and positive energy. Our approach blends traditional principles with modern design.

**Vastu-Compliant Floor Planning** – Aligning layouts with natural energy flow for optimal results.

**Space & Directional Analysis** – Comprehensive assessment of property orientation and energy zones.

**Remedies Without Demolition** – Practical, non-structural solutions to enhance positive energy.

**Integration with Interior Design** – Ensuring both aesthetic appeal and Vastu compliance.

**Personalized Consultation & Reports** – Tailored recommendations based on your specific needs and goals.`,
    },
    {
      id: 'vedic-numerology',
      title: 'Vedic Numerology',
      subtitle: 'Personal & Business',
      icon: <Calculator className="w-10 h-10 text-amber-600" />,
      description: 'Unlock the power of numbers to bring clarity and success in every aspect of life.',
      price: '₹2,000-45,000',
      features: [
        'Personal Numerology Consultations',
        'Name Spelling Corrections & Personalized Grids',
        'Business Name & Brand Alignment',
        'Childbirth & Naming Guidance',
        'Marriage & Auspicious Date Selection',
        'Financial Insights: Profit & Loss Cycles',
        'Mobile, Vehicle & Property Number Analysis',
        'Lucky Numbers, Dates & Colors',
      ],
      learnMore: `Through in-depth analysis of your name and birth date, we provide personalized numerology guidance.

**Personal Numerology Consultations** – Understand your strengths, challenges, and life path.

**Name Spelling Corrections** – Align your name numbers for enhanced success and prosperity.

**Business & Brand Alignment** – Choose auspicious names and numbers for business growth.

**Childbirth & Naming Guidance** – Select favorable names and dates for new arrivals.

**Marriage & Auspicious Date Selection** – Compatibility analysis and optimal timing.

**Financial Insights** – Understanding cycles for investments and career decisions.

**Number Analysis** – Evaluation of mobile, vehicle, and property numbers.

**Lucky Numbers, Dates & Colors** – Personal recommendations to bring balance and confidence.`,
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Interior Design Services",
    provider: {
      "@type": "LocalBusiness",
      name: "Interiors By Preyashi",
    },
    serviceType: ["Interior Design", "Vastu Consultation", "Vedic Numerology"],
    areaServed: ["Tinsukia", "Dibrugarh", "Guwahati", "Jorhat", "Assam", "Arunachal Pradesh"],
    description: "Comprehensive interior design services including Vastu consultation and numerology guidance.",
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <SEOHead
        title="Our Services - Interior Design, Vastu & Numerology | Interiors By Preyashi"
        description="Explore our comprehensive services: Interior Design (₹25-150/sq ft), Vastu Consultation (₹5K-25K), and Vedic Numerology (₹2K-15K). Expert guidance across Northeast India."
        keywords="interior design services, Vastu consultation pricing, numerology services cost, Tinsukia interior designer, Assam home design"
        canonicalUrl="/services"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif mb-6 text-gray-800">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive design solutions blending creativity, functionality, and ancient wisdom 
              to transform your space into a sanctuary of beauty and positive energy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8 md:p-12">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Service Icon and Header */}
                  <div className="lg:w-1/3">
                    <div className="flex items-center justify-center lg:justify-start mb-6">
                      <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                        {service.icon}
                      </div>
                      <div>
                        <h2 className="text-3xl font-serif text-gray-800">{service.title}</h2>
                        <p className="text-amber-600 font-semibold">{service.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="bg-amber-50 rounded-lg p-4 mb-6">
                      <div className="text-sm text-gray-600 mb-1">Starting from</div>
                      <div className="text-2xl font-bold text-amber-600">{service.price}</div>
                    </div>
                    
                    <button
                      onClick={() => setIsLeadModalOpen(true)}
                      className="w-full bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors duration-300 flex items-center justify-center"
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                  
                  {/* Features and Details */}
                  <div className="lg:w-2/3">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">What's Included:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button
                      onClick={() => toggleService(service.id)}
                      className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium transition-colors duration-300"
                    >
                      {expandedService === service.id ? 'Show Less' : 'Learn More'}
                      {expandedService === service.id ? 
                        <ChevronUp className="w-4 h-4" /> : 
                        <ChevronDown className="w-4 h-4" />
                      }
                    </button>
                    
                    <AnimatePresence>
                      {expandedService === service.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: 'auto', opacity: 1, marginTop: '2rem' }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden border-t border-gray-200 pt-6"
                        >
                          <div className="prose prose-gray max-w-none">
                            {service.learnMore.split('\n').map((paragraph, idx) => {
                              if (paragraph.trim() === '') return null;
                              
                              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                                const title = paragraph.replace(/\*\*/g, '');
                                return <h4 key={idx} className="font-semibold text-gray-800 mt-4 mb-2">{title}</h4>;
                              }
                              
                              return <p key={idx} className="text-gray-700 leading-relaxed mb-3">{paragraph}</p>;
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-gray-800 mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that ensures your vision becomes reality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Understanding your needs, style preferences, and project requirements"
              },
              {
                step: "02", 
                title: "Design Development",
                description: "Creating detailed plans, 3D visualizations, and material selections"
              },
              {
                step: "03",
                title: "Approval & Refinement", 
                description: "Client feedback, revisions, and final design approval"
              },
              {
                step: "04",
                title: "Execution",
                description: "Professional implementation with quality control and timely delivery"
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Ready to Begin Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Get a personalized consultation and detailed quote for your space transformation. 
              Let's create something extraordinary together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsLeadModalOpen(true)}
                className="bg-white text-amber-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                Get Free Consultation
              </button>
              
              <Link
                to="/portfolio"
                className="border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-amber-600 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lead Modal */}
      <LeadModal 
        isOpen={isLeadModalOpen} 
        onClose={() => setIsLeadModalOpen(false)}
        title="Get Your Project Quote"
      />
    </div>
  );
};

export default Services;
