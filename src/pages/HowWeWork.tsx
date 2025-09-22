import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, PenTool, Hammer, Key, CheckCircle, Users, MapPin, Clock, FileText, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import LeadModal from '../components/LeadModal';

const HowWeWork = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = React.useState(false);
  const navigate = useNavigate();

  // Ensure page always loads from top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      icon: MessageCircle,
      title: 'Initial Consultation',
      description: 'Understanding your requirements, lifestyle, and challenges while analyzing your space or plans',
      details: 'We begin with an in-depth consultation to understand your lifestyle, design preferences, functional requirements, and budget constraints. This comprehensive discussion helps us analyze your existing space or architectural plans, identifying opportunities and challenges that will guide our design approach.',
      duration: '1-2 Hours',
      deliverables: ['Requirement Analysis', 'Lifestyle Assessment', 'Challenge Identification', 'Budget Planning'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      title: 'Site Visit & Assessment',
      description: 'Detailed study of the property layout, directions, and energy flow as per Vastu principles',
      details: 'Our team conducts a thorough site survey, taking precise measurements and analyzing the property orientation, natural light patterns, ventilation, and energy flow. We assess the space according to Vastu Shastra principles, identifying the most auspicious placements for different functions and activities.',
      duration: '2-3 Hours',
      deliverables: ['Site Survey', 'Directional Analysis', 'Energy Flow Assessment', 'Measurement Documentation'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: PenTool,
      title: 'Concept & Planning',
      description: 'Preparing 2D floor plans, layouts, and Vastu-compliant suggestions tailored to your needs',
      details: 'Based on our consultation and site assessment, we develop multiple layout options and 2D floor plans that optimize space utilization while adhering to Vastu principles. Each concept is carefully crafted to reflect your lifestyle needs and aesthetic preferences.',
      duration: '1-2 Weeks',
      deliverables: ['2D Floor Plans', 'Multiple Layout Options', 'Vastu Recommendations', 'Space Planning Solutions'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: CheckCircle,
      title: 'Design & Visualization',
      description: 'Creating detailed 3D designs, elevations, and material recommendations aligned with function and Vastu',
      details: 'We transform approved concepts into detailed 3D visualizations and elevations, allowing you to experience your space before construction begins. Our material recommendations balance aesthetics, functionality, durability, and Vastu compliance while staying within your budget.',
      duration: '1-2 Weeks',
      deliverables: ['3D Visualizations', 'Detailed Elevations', 'Material Recommendations', 'Vastu Integration', 'Color Schemes'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Users,
      title: 'Remedies & Adjustments',
      description: 'Developing effective, practical solutions without demolition wherever possible',
      details: 'For existing spaces requiring Vastu corrections, we provide innovative remedies that enhance energy flow without major structural changes. Our solutions focus on strategic placement, color therapy, lighting adjustments, and symbolic enhancements.',
      duration: '3-5 Days',
      deliverables: ['Remedy Solutions', 'Adjustment Plans', 'Non-Demolition Options', 'Energy Enhancement Strategies'],
      color: 'from-teal-500 to-blue-500'
    },
    {
      icon: Hammer,
      title: 'Execution & Supervision',
      description: 'Coordinating with contractors, monitoring progress, and ensuring timely, quality completion',
      details: 'We manage the entire execution phase, coordinating with skilled contractors and suppliers to ensure seamless implementation. Our regular site supervision maintains quality standards, timeline adherence, and budget control throughout the construction process.',
      duration: 'Project Dependent (2-6 Months)',
      deliverables: ['Contractor Coordination', 'Progress Monitoring', 'Quality Assurance', 'Timeline Management'],
      color: 'from-amber-500 to-yellow-500'
    },
    {
      icon: Key,
      title: 'Final Handover',
      description: 'Delivering a space that is aesthetically pleasing, functional, and energetically balanced',
      details: 'We conduct a comprehensive final inspection, ensuring every detail meets our quality standards and your expectations. The handover includes documentation, maintenance guidelines, and ongoing support to help you enjoy your transformed space for years to come.',
      duration: '1-2 Days',
      deliverables: ['Final Inspection', 'Space Balancing', 'Handover Documentation', 'Maintenance Guidelines', 'Post-completion Support'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const processHighlights = [
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Client-Centric Approach',
      description: 'Every decision is made with your lifestyle, preferences, and budget in mind. We listen carefully and adapt our designs to match your unique vision.'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Quality Assurance',
      description: 'Rigorous quality checks at every stage ensure the highest standards of craftsmanship and materials, delivering results that exceed expectations.'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Transparent Communication',
      description: 'Regular updates, clear timelines, and open communication throughout the project keep you informed and involved in every major decision.'
    }
  ];

  // Enhanced structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Interior Design Process - How We Work | Interiors By Preyashi",
    "description": "Comprehensive 7-step interior design process combining modern design with Vastu Shastra principles. From consultation to handover, delivering exceptional results across Northeast India.",
    "image": "https://interiorsbypreyashi.com/images/process/how-we-work-hero.jpg",
    "totalTime": "PT2M6M", // 2-6 months typical project duration
    "supply": ["Interior Design Consultation", "Vastu Assessment", "3D Visualization", "Project Management"],
    "tool": ["Professional Design Software", "Vastu Compass", "3D Modeling Tools", "Project Management Systems"],
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "text": step.details,
      "time": step.duration,
      "supply": step.deliverables
    })),
    "author": {
      "@type": "Person",
      "name": "Preyashi More Birmiwal"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Interiors By Preyashi"
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <SEOHead
        title="How We Work - Interior Design Process | Vastu-Compliant Design Methodology | Interiors By Preyashi"
        description="Discover our proven 7-step interior design process combining modern aesthetics with Vastu Shastra principles. From consultation to handover - transparent, efficient, and client-focused approach across Northeast India."
        keywords="interior design process, how interior design works, Vastu design process, design methodology, interior design consultation, design and build process, Tinsukia interior designer process, Assam interior design workflow"
        canonicalUrl="/how-we-work"
        structuredData={structuredData}
      />

      {/* Hero Section - Clean without background image */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-gray-800 leading-tight">
              How We
              <span className="block text-amber-700 italic">Transform Spaces</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our structured yet flexible process ensures your interior design project is completed 
              <strong> on time</strong>, <strong>within budget</strong>, and <strong>exceeds your expectations</strong> at every stage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif text-gray-800 mb-8">Our Design Philosophy</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We focus on creating spaces that are aesthetically appealing, but we never compromise on 
              <strong> practicality</strong>, <strong>futuristic design elements</strong>, and <strong>easy-to-maintain solutions</strong>. 
              Whether it's interiors or Vastu consultancy, we follow a clear step-by-step approach that 
              ensures transparency, quality, and client satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
              Our 7-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to final handover, every step is carefully planned and executed 
              to deliver exceptional results.
            </p>
          </motion.div>

          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                >
                  {/* Step Number & Icon */}
                  <div className="lg:w-1/2 text-center lg:text-left">
                    <div className="relative inline-block mb-8">
                      <div className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-xl`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                      <h3 className="text-2xl font-serif text-gray-800 mb-4">{step.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                      
                      <div className="flex items-center justify-center lg:justify-start mb-4">
                        <Clock className="w-4 h-4 text-amber-600 mr-2" />
                        <span className="text-sm font-medium text-amber-600">{step.duration}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        {step.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-600 mr-2 flex-shrink-0" />
                            <span>{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Step Details */}
                  <div className="lg:w-1/2">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-amber-600">
                      <div className="flex items-center mb-4">
                        <FileText className="w-5 h-5 text-amber-600 mr-2" />
                        <span className="font-semibold text-gray-800">Process Details</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {step.details}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
              Why Our Process Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach has delivered successful projects across Northeast India, 
              ensuring quality, transparency, and client satisfaction at every step.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-serif text-gray-800 mb-4">{highlight.title}</h3>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Process Success Metrics</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven methodology delivers consistent results across all project types and scales
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '19+', label: 'Projects Completed', description: 'Using Our Process' },
              { number: '100%', label: 'On-Time Delivery', description: 'Project Timeline Adherence' },
              { number: '7+', label: 'Years Experience', description: 'Refined Methodology' },
              { number: '95%+', label: 'Client Satisfaction', description: 'Process Approval Rate' }
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">{metric.number}</div>
                <div className="text-lg font-semibold mb-1">{metric.label}</div>
                <div className="text-gray-400 text-sm">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Ready to Experience Our Process?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Experience our proven process firsthand. Schedule your initial consultation today and 
              take the first step toward your dream space.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsLeadModalOpen(true)}
                className="bg-white text-amber-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                Schedule Consultation
              </button>
              <button
                onClick={() => navigate('/portfolio')}
                className="border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-amber-600 transition-all duration-300"
              >
                View Our Work
              </button>
            </div>
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
