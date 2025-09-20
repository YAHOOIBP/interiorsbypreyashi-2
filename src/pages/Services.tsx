import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Building2, Calculator, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import LeadModal from '../components/LeadModal';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const navigate = useNavigate();

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

Space Planning & Optimization – Smart layouts that maximize every inch of your space while maintaining comfort and flow.

2D Floor Plans & 3D Visualizations – Clear plans and realistic renderings to visualize the final outcome before execution.

Elevations & Detailed Layouts – Comprehensive drawings covering designs, flooring, and structural detailing.

Bespoke Furniture & Ceiling Design – Custom-made furniture and creative ceiling concepts that add uniqueness and functionality.

Material & Finish Selection – Guidance in choosing high-quality, durable, and aesthetic finishes suited to your lifestyle.

Lighting, Electrical & Plumbing Layouts – Detailed layouts for seamless functionality and convenience.

Vastu Consultancy (on request) – Integrating Vastu principles for harmony, prosperity, and positive energy.

Site Visits, Supervision & Execution – Regular monitoring and professional supervision to ensure quality.

Complete Turnkey Project Management – End-to-end solutions from concept to completion.`,
    },
    {
      id: 'vastu-consultation',
      title: 'Vastu Consultation',
      subtitle: 'Residential, Commercial & Industrial',
      icon: <Building2 className="w-10 h-10 text-amber-600" />,
      description: 'Expert Vastu guidance to create harmony, balance, and positive energy in your spaces.',
      features: [
        'Vastu-Compliant Floor Planning',
        'Space & Directional Analysis',
        'Remedies Without Demolition',
        'Residential & Commercial Vastu Solutions',
        'Integration with Interior Design',
        'Personalized Consultation & Reports',
      ],
      learnMore: `We provide expert Vastu guidance for harmony and positive energy. Our approach blends traditional principles with modern design.

Vastu-Compliant Floor Planning – Aligning layouts with natural energy flow.

Space & Directional Analysis – Assessing property orientation and energy zones.

Remedies Without Demolition – Practical, non-structural solutions.

Integration with Interior Design – Ensuring both aesthetic appeal and functionality.

Personalized Consultation & Reports – Tailored recommendations.`,
    },
    {
      id: 'vedic-numerology',
      title: 'Vedic Numerology',
      subtitle: 'Personal & Business',
      icon: <Calculator className="w-10 h-10 text-amber-600" />,
      description: 'Unlock the power of numbers to bring clarity and success in every aspect of life.',
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

Personal Numerology Consultations – Understand your strengths and challenges.

Name Spelling Corrections – Align your name numbers for success.

Business & Brand Alignment – Choose auspicious names.

Childbirth & Naming Guidance – Favorable names and dates.

Marriage & Auspicious Date Selection – Compatibility and timing.

Financial Insights – Cycles for investments and career.

Number Analysis – Mobile, vehicle, property numbers.

Lucky Numbers, Dates & Colors – To bring balance and confidence.`,
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
    <>
      <SEOHead
        title="Our Services - Interiors By Preyashi"
        description="Explore our comprehensive services including Interior Design, Vastu Consultation, and Vedic Numerology."
        structuredData={structuredData}
      />
      <main className="bg-stone-50 font-inter">
        <section className="bg-amber-50 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-amber-800 font-montserrat"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto"
          >
            Comprehensive design solutions blending creativity, functionality, and ancient wisdom.
          </motion.p>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="bg-white p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">{service.icon}</div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold font-montserrat text-stone-800">{service.title}</h2>
                    <p className="text-amber-700 font-semibold mb-3">{service.subtitle}</p>
                    <p className="text-stone-600 mb-6">{service.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => toggleService(service.id)}
                      className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium transition-colors"
                    >
                      Learn More
                      {expandedService === service.id ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    <AnimatePresence>
                      {expandedService === service.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: 'auto', opacity: 1, marginTop: '2rem' }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden mt-4 prose text-stone-700"
                        >
                          {service.learnMore.split('\n').map((line, idx) => (
                            <p key={idx}>{line}</p>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <LeadModal open={isLeadModalOpen} onClose={() => setIsLeadModalOpen(false)} title="Schedule Your Consultation" />
    </>
  );
};

export default Services;
