import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, MessageCircle, Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEOHead from "../components/SEOHead";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqData = [
    {
      category: "General Services",
      questions: [
        {
          id: "what-services",
          q: "What services do you offer?",
          a: "We offer three main services: Interior Design (residential & commercial), Vastu Consultation (residential, commercial & industrial), and Vedic Numerology (personal & business). Our interior design includes complete space planning, 3D visualizations, furniture design, material selection, and turnkey project management. Our Vastu consultation focuses on creating harmonious spaces with positive energy flow, while our numerology services help align your personal and business decisions with cosmic energies."
        },
        {
          id: "service-areas",
          q: "What locations do you serve?",
          a: "We provide services across all of India with specialized expertise in Northeast India, particularly Assam and Arunachal Pradesh. Our primary service areas include Guwahati, Tinsukia, Dibrugarh, Jorhat, Silchar, Itanagar, Tezpur, and surrounding regions. We also serve major Indian cities like Delhi NCR, Mumbai, Bangalore, Chennai, Hyderabad, and Pune through remote consultations and project management."
        },
        {
          id: "experience-credentials",
          q: "What are your qualifications and experience?",
          a: "Preyashi More Birmiwal is the founder with over 7 years of professional experience in interior design, Vastu consultation, and Vedic numerology. She has successfully completed 50+ projects across residential, commercial, hospitality, government, and industrial sectors. Our team combines modern design expertise with deep knowledge of ancient Indian sciences like Vastu Shastra and numerology."
        },
        {
          id: "design-style",
          q: "What is your design style and approach?",
          a: "Our design philosophy centers on creating spaces that reflect your personality while incorporating positive energy principles. We blend modern aesthetics with traditional Indian wisdom, focusing on functionality, comfort, and timeless beauty. Every design is customized to your lifestyle, family needs, and cultural preferences while ensuring the space promotes well-being and prosperity."
        }
      ]
    },
    {
      category: "Design Process & Timeline",
      questions: [
        {
          id: "design-process",
          q: "What is your design process?",
          a: "Our comprehensive 7-step process includes: 1) Initial consultation to understand your needs and vision, 2) Site analysis and measurements, 3) Concept development with mood boards and 3D visualizations, 4) Design refinement based on your feedback, 5) Material selection and procurement, 6) Project execution with regular supervision, and 7) Final styling and handover. Throughout the process, we maintain transparent communication and involve you in all major decisions."
        },
        {
          id: "project-timeline",
          q: "How long does a typical project take?",
          a: "Project timelines vary based on scope and complexity: Small residential projects (single room): 2-4 weeks, Complete apartment/house interiors: 2-3 months, Commercial projects: 3-6 months, Large residential or hospitality projects: 4-8 months. Vastu consultations typically take 1-2 weeks, while numerology consultations are completed within 3-5 days. We provide detailed timelines during the initial consultation."
        },
        {
          id: "design-changes",
          q: "Can I make changes during the design process?",
          a: "Yes, we encourage client feedback and accommodate changes during the design development phase. Minor modifications are included in our service, while major changes may affect timeline and budget. We provide 3 rounds of revisions during the concept phase and 2 rounds during design development. Additional changes can be made with mutual agreement on any cost or timeline adjustments."
        },
        {
          id: "project-supervision",
          q: "Do you provide on-site supervision?",
          a: "Absolutely! On-site supervision is a crucial part of our service. We conduct regular site visits to ensure quality execution, timeline adherence, and proper installation. For local projects (Assam/Arunachal Pradesh), we provide weekly site visits. For pan-India projects, we coordinate with trusted local contractors and conduct periodic visits or virtual supervision as needed."
        }
      ]
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          id: "pricing-structure",
          q: "How do you price your services?",
          a: "Our pricing is transparent and project-based: Interior Design: ₹25-50 per sq ft for design consultation, ₹75-150 per sq ft for complete design execution (varies by location and complexity), Vastu Consultation: ₹5,000-25,000 depending on property size and scope, Vedic Numerology: ₹2,000-8,000 for personal consultations, ₹8,000-15,000 for business consultations. We provide detailed quotes after understanding your specific requirements."
        },
        {
          id: "payment-terms",
          q: "What are your payment terms?",
          a: "We follow a structured payment schedule: 30% advance upon project confirmation, 40% at design approval and material procurement, 20% at 70% project completion, 10% upon final delivery and handover. For consultations: 50% advance, 50% upon completion. We accept payments via bank transfer, UPI, cheque, and online payment gateways. All payments include applicable taxes."
        },
        {
          id: "cost-inclusions",
          q: "What is included in your pricing?",
          a: "Our pricing includes: Design consultation and space planning, 2D floor plans and 3D visualizations, Detailed drawings and elevations, Material selection and sourcing assistance, Project management and supervision, Vastu compliance (when opted), Site visits and quality checks, Final styling and installation guidance. Material costs, civil work, electrical work, and transportation are quoted separately based on actual requirements."
        },
        {
          id: "budget-flexibility",
          q: "Can you work within my budget?",
          a: "Yes, we pride ourselves on delivering excellent design within various budget ranges. During our initial consultation, we discuss your budget openly and create design solutions that maximize value within your financial parameters. We offer different service packages and can prioritize elements based on your needs and budget constraints."
        }
      ]
    },
    {
      category: "Vastu & Numerology",
      questions: [
        {
          id: "vastu-integration",
          q: "How do you integrate Vastu with modern design?",
          a: "We seamlessly blend Vastu principles with contemporary aesthetics without compromising on style or functionality. Our approach includes: Orienting rooms and furniture according to Vastu guidelines, Using appropriate colors and materials for each direction, Incorporating natural elements and proper lighting, Ensuring clutter-free and well-ventilated spaces, Providing non-structural remedies when direct Vastu compliance isn't possible. The result is a modern, beautiful space that also promotes positive energy and well-being."
        },
        {
          id: "vastu-necessity",
          q: "Is Vastu consultation necessary for every project?",
          a: "Vastu consultation is optional and offered based on client preference. Many clients choose to include Vastu principles as they believe in the positive energy and harmony it brings to living and working spaces. We can incorporate basic Vastu guidelines in any design or provide detailed Vastu consultation as a separate service. Our goal is to create spaces that you feel comfortable and happy in, whether that includes Vastu or not."
        },
        {
          id: "numerology-benefits",
          q: "How can numerology help in interior design decisions?",
          a: "Vedic numerology helps create spaces that resonate with your personal energy and life goals. Benefits include: Choosing colors that enhance your natural vibrations, Selecting auspicious dates for moving or inaugurating, Aligning your living space with your life path numbers, Creating harmony between family members' numbers, Optimizing business spaces for success and prosperity, Selecting favorable directions for important activities. This creates a deeper connection between you and your living space."
        },
        {
          id: "scientific-basis",
          q: "What is the scientific basis for Vastu and numerology?",
          a: "Vastu Shastra is based on principles of physics, including the earth's magnetic field, solar energy, wind patterns, and gravitational forces. It considers the impact of cardinal directions, natural light, ventilation, and energy flow on human well-being. Numerology studies the vibrational frequencies of numbers and their psychological effects. While these are traditional sciences, many of their principles align with modern understanding of environmental psychology, ergonomics, and wellness design."
        }
      ]
    },
    {
      category: "Materials & Quality",
      questions: [
        {
          id: "material-sourcing",
          q: "How do you source materials and furniture?",
          a: "We have established relationships with trusted suppliers, manufacturers, and artisans across India and internationally. Our sourcing network includes: Local craftsmen and furniture makers, Authorized dealers for premium brands, Sustainable and eco-friendly material suppliers, Specialty stores for unique items and antiques, Custom manufacturers for bespoke pieces. We prioritize quality, authenticity, and value for money while ensuring timely delivery and proper installation."
        },
        {
          id: "quality-assurance",
          q: "What quality assurance do you provide?",
          a: "Quality is paramount in all our projects. Our quality assurance includes: Careful vendor selection and material inspection, Regular site supervision and progress monitoring, Quality checks at each project phase, Professional installation and finishing standards, Post-completion walkthrough and defect rectification, 1-year warranty on our design execution, 6-month complimentary maintenance support. We ensure every detail meets our high standards before project handover."
        },
        {
          id: "sustainable-practices",
          q: "Do you use sustainable and eco-friendly materials?",
          a: "Yes, sustainability is increasingly important in our design approach. We offer: Locally sourced materials to reduce environmental impact, Eco-friendly paints, adhesives, and finishes, Sustainable wood from certified sources, Energy-efficient lighting and appliances, Water-saving fixtures and systems, Upcycled and recycled materials where appropriate, Natural and organic textiles, Air-purifying plants and natural ventilation solutions. We can create completely eco-conscious designs upon request."
        },
        {
          id: "maintenance-care",
          q: "Do you provide maintenance and after-care services?",
          a: "Yes, we believe in long-term relationships with our clients. Our after-care services include: 6-month complimentary maintenance support, Annual maintenance contracts for ongoing upkeep, Guidance on cleaning and caring for different materials, Assistance with minor repairs and touch-ups, Seasonal décor updates and refresh consultations, Replacement assistance for wear-and-tear items, Emergency support for urgent issues. We want your space to remain beautiful and functional for years to come."
        }
      ]
    },
    {
      category: "Consultation & Getting Started",
      questions: [
        {
          id: "initial-consultation",
          q: "How does the initial consultation work?",
          a: "The initial consultation is a comprehensive discussion to understand your vision, needs, and requirements. It includes: Understanding your lifestyle, preferences, and functional needs, Discussing budget parameters and timeline expectations, Site visit and space analysis, Preliminary design direction and style discussion, Vastu and numerology preferences, Detailed scope of work and service explanation, Project timeline and next steps. This consultation can be conducted in-person (for local clients) or virtually (for pan-India clients)."
        },
        {
          id: "consultation-cost",
          q: "Is there a charge for the initial consultation?",
          a: "We offer complimentary initial consultations for serious project inquiries within our service areas (Assam/Arunachal Pradesh). For pan-India clients, we may charge a nominal consultation fee of ₹2,000-5,000, which is adjusted against the project cost if you proceed with our services. Detailed Vastu consultations and numerology sessions are charged separately as they require extensive analysis and personalized reports."
        },
        {
          id: "what-to-prepare",
          q: "What should I prepare for the consultation?",
          a: "To make the most of our consultation, please prepare: Floor plans or layout drawings of your space (if available), Photos of the current space from multiple angles, List of your requirements and preferences, Budget range for the project, Timeline expectations and any constraints, Inspiration images or references you like, Family members' preferences and special requirements, Any specific concerns or problems with the current space. This information helps us provide more accurate guidance and estimates."
        },
        {
          id: "remote-consultations",
          q: "Do you offer remote consultations for clients outside your area?",
          a: "Yes, we provide comprehensive remote consultation services for clients across India and internationally. Our remote services include: Virtual consultations via video calls, Digital site surveys using photos and measurements, 3D visualization and design presentations, Online design collaboration and approval, Digital delivery of plans and specifications, Coordination with local contractors and suppliers, Virtual project monitoring and guidance, Remote Vastu and numerology consultations. We ensure seamless service delivery regardless of location."
        }
      ]
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.flatMap(category => 
      category.questions.map(qa => ({
        "@type": "Question",
        "name": qa.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": qa.a
        }
      }))
    )
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <SEOHead
        title="Frequently Asked Questions - Interiors By Preyashi"
        description="Find answers to common questions about our interior design services, Vastu consultation, numerology, pricing, and process."
        keywords="interior design FAQ, Vastu consultation questions, numerology services, design process, pricing, Tinsukia interior designer"
        canonicalUrl="/faq"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif mb-6 text-gray-800">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your questions answered about our process, pricing, services, and more. Find everything you need to know about transforming your space with Interiors by Preyashi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          {faqData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-serif text-gray-800 mb-8 pb-4 border-b-2 border-indigo-200">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((item) => (
                  <motion.div
                    key={item.id}
                    className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
                    whileHover={{ shadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <button
                      onClick={() => toggleFAQ(item.id)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 flex-1 pr-4">
                        {item.q}
                      </h3>
                      <div className="flex-shrink-0">
                        {openFAQ === item.id ? (
                          <ChevronUp className="w-5 h-5 text-indigo-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-indigo-600" />
                        )}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {openFAQ === item.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <p className="text-gray-700 leading-relaxed">
                              {item.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Reach out to us for a personalized consultation. We're here to help you create the perfect space.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="bg-white text-indigo-600 px-6 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('tel:+918486076075')}
                className="bg-white text-indigo-600 px-6 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/918486076075?text=Hello! I have some questions about your interior design services.', '_blank')}
                className="bg-green-500 text-white px-6 py-4 rounded-lg font-medium hover:bg-green-600 transition-all duration-300 shadow-lg flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
