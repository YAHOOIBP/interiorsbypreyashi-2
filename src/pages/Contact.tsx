import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, User, Briefcase, Calendar, FileText, Send } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { sendLeadEmail } from '../utils/emailService';
import { submitLead } from '../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';


const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: '',
    projectLocation: '',
    budget: '',
    timeline: '',
    message: ''
  });

  // Ensure page always loads from top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectTypes = [
    'Residential Interior Design',
    'Commercial Interior Design', 
    'Hospitality Interior Design',
    'Vastu Consultation',
    'Numerology Consultation',
    'Complete Home Renovation',
    'Office Design',
    'Restaurant Design',
    'Turnkey Solutions',
    'Other'
  ];

  const budgetRanges = [
    'Under ₹5 Lakhs',
    '₹5 - ₹10 Lakhs',
    '₹10 - ₹15 Lakhs', 
    '₹15 - ₹25 Lakhs',
    '₹25 - ₹40 Lakhs',
    '₹40+ Lakhs',
    'Consultation Only'
  ];

  const timelineOptions = [
    'Immediate (Within 1 Month)',
    'Short Term (1-3 Months)',
    'Medium Term (3-6 Months)',
    'Long Term (6+ Months)',
    'Planning Stage',
    'Just Exploring'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Send email notification
    const emailResult = await sendLeadEmail(formData);

    // Submit lead via your Firebase helper, which returns sequential leadId
    const result = await submitLead({
      name: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      projectType: formData.projectType,
      projectLocation: formData.projectLocation,
      budget: formData.budget,
      timeline: formData.timeline,
      message: formData.message
    });

    if (!result.success) {
      throw new Error('submitLead failed');
    }

    // Save backup to Firestore
    await addDoc(collection(db, 'leads'), {
      ...formData,
      leadId: result.leadId,
      submittedAt: new Date().toISOString(),
      emailSent: emailResult.success
    });

    // Show sequential reference ID
    setReferenceId(result.leadId);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (error) {
    console.error('Submission error:', error);
    alert('Submission failed. Please try again.');
  }

  setIsSubmitting(false);
};


  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Hello! I'm interested in your interior design services. I would like to discuss my project with you.");
    window.open(`https://wa.me/918486076075?text=${message}`, '_blank');
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      primary: '+91 8486076075',
      secondary: 'Available 10 AM - 7 PM',
      action: () => window.open('tel:+918486076075'),
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      primary: 'contact@interiorsbypreyashi.com',
      secondary: 'We respond within 24 hours',
      action: () => window.open('mailto:contact@interiorsbypreyashi.com'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      primary: 'Manav Kalyan Road, Parbatia',
      secondary: 'Namgarh Path - 03, Tinsukia, Assam - 786125',
      action: () => window.open('https://maps.app.goo.gl/yzgGQoBTxWtwRNuQ9'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      primary: 'Monday - Saturday: 10 AM - 7 PM',
      secondary: 'Sunday: By Appointment Only',
      action: null,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const serviceAreas = [
    'Tinsukia', 'Guwahati', 'Dibrugarh', 'Jorhat', 'Silchar', 'Tezpur',
    'Itanagar', 'Namsai', 'Tezu', 'Pasighat', 'All of Assam', 'All of India', 'Arunachal Pradesh'
  ];

  // Enhanced structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Interiors By Preyashi",
    "alternateName": "PM Design - Interiors By Preyashi",
    "description": "Professional interior design services with Vastu consultation and numerology guidance in Northeast India. Contact us for residential, commercial, and hospitality interior design projects.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Manav Kalyan Road, Parbatia, Namgarh Path - 03",
      "addressLocality": "Tinsukia",
      "addressRegion": "Assam",
      "postalCode": "786125",
      "addressCountry": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 27.4924,
      "longitude": 95.3647
    },
    "telephone": "+918486076075",
    "email": "contact@interiorsbypreyashi.com",
    "url": "https://interiorsbypreyashi.com/contact",
    "openingHours": [
      "Mo-Sa 10:00-19:00"
    ],
    "areaServed": ["Assam", "Arunachal Pradesh", "Northeast India"],
    "priceRange": "₹₹₹",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "UPI"],
    "hasMap": "https://maps.app.goo.gl/yzgGQoBTxWtwRNuQ9",
    "founder": {
      "@type": "Person",
      "name": "Preyashi More Birmiwal"
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <SEOHead
          title="Thank You - Contact Confirmation | Interiors By Preyashi"
          description="Thank you for contacting Interiors By Preyashi. We have received your inquiry and will respond within 24 hours."
          keywords="contact confirmation, interior design inquiry, Tinsukia contact"
          canonicalUrl="/contact"
        />
        
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-4 text-center"
          >
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-2xl font-serif text-gray-800 mb-4">Thank You!</h2>
            <p className="text-gray-600 mb-6">
              Your inquiry has been received successfully. Your reference ID is:
            </p>
            
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <span className="font-mono text-lg font-semibold text-gray-800">{referenceId}</span>
            </div>
            
            <p className="text-gray-600 text-sm mb-6">
              We'll get back to you within 24 hours. Save this reference ID for future correspondence.
            </p>
            
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: '',
                  email: '',
                  phone: '',
                  projectType: '',
                  projectLocation: '',
                  budget: '',
                  timeline: '',
                  message: ''
                });
              }}
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300"
            >
              Send Another Message
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <SEOHead
        title="Contact Us - Interior Design Consultation | Get Free Quote | Interiors By Preyashi Tinsukia"
        description="Contact Interiors By Preyashi for professional interior design services in Northeast India. Get free consultation, quotes for residential, commercial, Vastu & numerology services. Located in Tinsukia, Assam."
        keywords="contact interior designer Tinsukia, interior design consultation Assam, contact PM Design, Preyashi More Birmiwal contact, interior design quote Northeast India, Vastu consultation contact, numerology consultation Tinsukia"
        canonicalUrl="/contact"
        structuredData={structuredData}
      />

      {/* Hero Section - Clean gradient without background image */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8 text-blue-600 mr-3" />
              <span className="text-blue-600 font-semibold uppercase tracking-wide">Get In Touch</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-gray-800 leading-tight">
              Contact
              <span className="block text-blue-700 italic">Our Team</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Ready to transform your space? Get in touch with us to discuss your project and 
              receive a <strong>personalized consultation</strong> from our <strong>design experts</strong>.
            </p>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We'd love to hear about your project! Whether you're planning a complete home makeover 
              or need expert Vastu consultation, our team is here to bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative group cursor-pointer ${info.action ? 'hover:shadow-xl' : ''} transition-all duration-300`}
                onClick={info.action || undefined}
              >
                <div className="bg-white rounded-2xl shadow-lg p-6 text-center h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{info.title}</h3>
                  <p className="text-gray-700 font-medium mb-2">{info.primary}</p>
                  <p className="text-gray-500 text-sm">{info.secondary}</p>
                  
                  {info.action && (
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-blue-600 text-sm font-medium">Click to {info.title.toLowerCase()}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-serif text-gray-800 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      aria-required="true"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 text-gray-900"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      aria-required="true"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 text-gray-900"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    aria-required="true"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 text-gray-900"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-gray-700 font-medium mb-2">
                      <Briefcase className="w-4 h-4 inline mr-2" />
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 text-gray-900"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="projectLocation" className="block text-gray-700 font-medium mb-2">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Project Location
                    </label>
                    <input
                      type="text"
                      id="projectLocation"
                      name="projectLocation"
                      value={formData.projectLocation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 text-gray-900"
                      placeholder="City, State"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-gray-700 font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 text-gray-900"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map(budget => (
                        <option key={budget} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-gray-700 font-medium mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 text-gray-900"
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map(timeline => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    <FileText className="w-4 h-4 inline mr-2" />
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 text-gray-900"
                    placeholder="Tell us about your project, requirements, and any specific ideas you have in mind..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </div>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Information & Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* WhatsApp Contact */}
              <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-serif text-gray-800">Quick Contact via WhatsApp</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Get instant responses to your queries. Chat with our design team directly on WhatsApp 
                  for immediate assistance and quick consultations.
                </p>
                <button
                  onClick={handleWhatsAppContact}
                  className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Click to start instant conversation
                </button>
              </div>

              {/* Office Location */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-serif text-gray-800 mb-6">Visit Our Office</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">PM Design – Interiors By Preyashi</p>
                      <p className="text-gray-600">Manav Kalyan Road, Parbatia, Namgarh Path -03</p>
                      <p className="text-gray-600">Tinsukia, Assam - 786125, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-gray-700">Monday - Saturday: 10 AM - 7 PM</p>
                      <p className="text-gray-700">Sunday: By Appointment Only</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">
                  Located in the heart of Northeast India, we serve clients across Assam and Arunachal Pradesh
                </p>
                
                <button
                  onClick={() => window.open('https://maps.google.com/?q=PM+Design+Interiors+By+Preyashi', '_blank')}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
                >
                  View on Google Maps →
                </button>
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-serif text-gray-800 mb-6">Service Areas</h3>
                <p className="text-gray-600 mb-4">
                  Serving Assam and Arunachal Pradesh
                </p>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
              Quick Response Guarantee
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We understand that your project is important to you. That's why we guarantee:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: '24 Hour Response', description: 'All inquiries answered within 24 hours' },
                { title: 'Free Consultation', description: 'Complimentary initial design consultation' },
                { title: 'Transparent Pricing', description: 'Clear, detailed quotes with no hidden costs' }
              ].map((guarantee, index) => (
                <motion.div
                  key={guarantee.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="p-6 bg-blue-50 rounded-xl"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{guarantee.title}</h3>
                  <p className="text-gray-600">{guarantee.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
