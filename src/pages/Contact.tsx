import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { submitLead } from '../lib/firebase';
import SEOHead from '../components/SEOHead';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [leadId, setLeadId] = useState('');

  const projectTypes = [
    'Residential - Apartment',
    'Residential - Villa/House',
    'Commercial - Office',
    'Commercial - Retail',
    'Hospitality - Restaurant/Café',
    'Healthcare',
    'Educational',
    'Industrial',
    'Vastu Consultation',
    'Numerology Consultation',
    'Other'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitLead(formData);
      
      if (result.success) {
        setLeadId(result.leadId);
        setIsSubmitted(true);
        
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          projectType: '',
          message: ''
        });
      } else {
        alert('There was an error submitting your inquiry. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Interiors By Preyashi",
      "telephone": "+918486076075",
      "email": "contact@pmdesign.co.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Manav Kalyan Road, Parbatia, Namgarh Path -03",
        "addressLocality": "Tinsukia",
        "addressRegion": "Assam",
        "postalCode": "786125",
        "addressCountry": "IN"
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <SEOHead
          title="Contact Success"
          description="Thank you for contacting Interiors By Preyashi. We'll get back to you within 24 hours."
          canonicalUrl="/contact"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-8 bg-green-50 rounded-lg shadow-lg max-w-md mx-4"
        >
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-2xl font-serif text-gray-800 mb-4">Thank You!</h1>
          <p className="text-gray-600 mb-4">
            Your inquiry has been received successfully. Your reference ID is:
          </p>
          <div className="text-2xl font-bold text-green-600 bg-white p-3 rounded-lg mb-4">
            {leadId}
          </div>
          <p className="text-sm text-gray-600 mb-6">
            We'll get back to you within 24 hours. Save this reference ID for future correspondence.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setLeadId('');
            }}
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300"
          >
            Submit Another Inquiry
          </button>

          <noscript>
            <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg">
              <p className="text-green-800 text-sm">Your inquiry has been submitted successfully!</p>
            </div>
          </noscript>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20 page-background bg-contact">
      <SEOHead
        title="Contact Us"
        description="Get in touch with Interiors By Preyashi for your interior design project. Call +91 8486076075 or visit our office in Tinsukia, Assam."
        keywords="contact interior designer, Tinsukia interior design, contact Preyashi, interior design consultation"
        canonicalUrl="/contact"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-teal-50 to-cyan-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif mb-6 text-gray-800">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your space? Get in touch with us to discuss your project 
              and receive a personalized consultation from our design experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
            >
              <h2 className="text-3xl font-serif text-gray-800 mb-6">
                Start Your Project
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tell us about your project requirements, space details, budget range, timeline, and any specific preferences..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full bg-teal-600 text-white py-4 rounded-lg font-medium hover:bg-teal-700 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Inquiry
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-serif text-gray-800 mb-6">
                  Get In Touch
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We'd love to hear about your project! Whether you're planning a complete home makeover 
                  or need expert Vastu consultation, our team is here to bring your vision to life.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-6 bg-white rounded-lg shadow-lg border border-gray-100"
                >
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 8486076075</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-6 bg-white rounded-lg shadow-lg border border-gray-100"
                >
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">contact@pmdesign.co.in</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start p-6 bg-white rounded-lg shadow-lg border border-gray-100"
                >
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Office</h3>
                    <p className="text-gray-600">PM Design – Interiors By Preyashi</p>
                    <p className="text-gray-600">Tinsukia, Assam, India</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start p-6 bg-white rounded-lg shadow-lg border border-gray-100"
                >
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Clock className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Consultancy Hours</h3>
                    <div className="text-sm space-y-1">
                      <p className="text-gray-600">Monday - Saturday: 10 AM - 7 PM</p>
                      <p className="text-gray-600">Sunday: By Appointment Only</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* WhatsApp Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/918486076075?text=Hello! I would like to discuss my interior design project.', '_blank')}
                className="bg-green-500 text-white p-6 rounded-lg shadow-lg text-center cursor-pointer"
              >
                <MessageSquare className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-2">WhatsApp Quick Contact</h3>
                <p className="text-sm opacity-90">Click to start instant conversation</p>
              </motion.div>

              <noscript>
                <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg text-center">
                  <h3 className="font-semibold mb-2">WhatsApp Contact</h3>
                  <p className="text-sm">Message us at +91 8486076075</p>
                </div>
              </noscript>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif text-gray-800 mb-4">Find Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Northeast India, we serve clients across Assam and Arunachal Pradesh
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-lg shadow-lg overflow-hidden"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.352547073315!2d95.36547957545964!3d27.48940927630817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x373f6b782cec79d7%3A0x8aa4d9de21b326c0!2sPM%20Design%20(Interiors%20By%20Preyashi)!5e0!3m2!1sen!2sin!4v1757097402670!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }}
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="PM Design Location"
            ></iframe>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-6"
          >
            <p className="text-gray-700 font-medium">
              Manav Kalyan Road, Parbatia, Namgarh Path -03, Tinsukia, Assam - 786125
            </p>
            <p className="text-gray-600 mt-2">
              Serving Assam and Arunachal Pradesh
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;