import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Heart, Instagram, Linkedin, MapPin, Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const About = () => {
  // Enhanced structured data for better search visibility
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Preyashi More Birmiwal",
    "jobTitle": "Interior Designer, Vastu Consultant & Vedic Numerologist",
    "description": "Expert interior designer with 7+ years experience specializing in Vastu Shastra and Vedic Numerology. Founder of Interiors by Preyashi, serving Northeast India with holistic design solutions.",
    "url": "https://interiorsbypreyashi.com/about",
    "image": "https://interiorsbypreyashi.com/images/founder/preyashi-profile.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tinsukia",
      "addressRegion": "Assam",
      "addressCountry": "India"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Interiors By Preyashi",
      "url": "https://interiorsbypreyashi.com"
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Interior Designer",
      "occupationLocation": {
        "@type": "Place",
        "name": "Northeast India"
      },
      "skills": ["Interior Design", "Vastu Shastra", "Vedic Numerology", "Space Planning", "Residential Design", "Commercial Design", "Hospitality Design"]
    },
    "alumniOf": "Interior Design Professional",
    "knowsAbout": ["Interior Design", "Vastu Shastra", "Vedic Numerology", "Space Planning", "Color Psychology", "Feng Shui", "Home Decoration", "Office Design"],
    "areaServed": ["Assam", "Arunachal Pradesh", "Northeast India", "Tinsukia", "Dibrugarh", "Guwahati"],
    "award": "Top Interior Designer Northeast India",
    "memberOf": {
      "@type": "Organization", 
      "name": "Professional Interior Designers Association"
    }
  };

  const achievements = [
    {
      icon: <Award className="w-6 h-6 text-amber-600" />,
      title: "19+ Successful Projects",
      description: "Completed diverse residential, commercial, and hospitality projects across Northeast India"
    },
    {
      icon: <Star className="w-6 h-6 text-amber-600" />,
      title: "7+ Years Experience",
      description: "Extensive expertise in interior design, Vastu consultation, and Vedic numerology"
    },
    {
      icon: <Users className="w-6 h-6 text-amber-600" />,
      title: "100+ Happy Clients", 
      description: "Satisfied families and businesses throughout Assam and Arunachal Pradesh"
    },
    {
      icon: <Heart className="w-6 h-6 text-amber-600" />,
      title: "Holistic Design Approach",
      description: "Unique integration of modern design with ancient Vastu and numerology principles"
    }
  ];

  const expertiseAreas = [
    {
      title: "Interior Design Excellence",
      description: "Creating beautiful, functional spaces that reflect your personality and lifestyle, with expertise in residential, commercial, and hospitality interiors. Specializing in space planning, furniture design, color coordination, and lighting solutions.",
      keywords: "interior design, space planning, residential design, commercial interiors, hospitality design"
    },
    {
      title: "Authentic Vastu Consultation", 
      description: "Integrating ancient Vastu Shastra principles to ensure your space promotes positive energy flow, prosperity, and well-being for all inhabitants. Expert in directional analysis, energy flow optimization, and non-structural remedies.",
      keywords: "Vastu Shastra, Vastu consultation, positive energy, directional analysis, energy flow"
    },
    {
      title: "Vedic Numerology Guidance",
      description: "Using the power of numbers to align your living spaces with your personal vibrations, creating harmony between you and your environment. Specialized in name analysis, birth date calculations, and cosmic number alignments.",
      keywords: "Vedic numerology, cosmic numbers, personal vibrations, numerology consultation, name analysis"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <SEOHead
        title="About Preyashi More Birmiwal - Expert Interior Designer, Vastu Consultant & Numerologist | Tinsukia, Assam"
        description="Meet Preyashi More Birmiwal, founder of Interiors by Preyashi with 7+ years experience in interior design, Vastu Shastra consultation, and Vedic numerology. Serving Northeast India with holistic design solutions that blend modern aesthetics with ancient wisdom."
        keywords="Preyashi More Birmiwal, interior designer Tinsukia, Vastu consultant Assam, numerologist Northeast India, interior design Dibrugarh, Vastu Shastra expert, Vedic numerology consultant, holistic interior design, Assam interior designer, Arunachal Pradesh interior design"
        canonicalUrl="/about"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-gray-800 leading-tight">
                  About 
                  <span className="block text-amber-700 italic">Preyashi</span>
                </h1>
                
                <h2 className="text-xl md:text-2xl text-amber-600 font-semibold mb-8">
                  Interior Designer | Vastu Consultant | Vedic Numerologist
                </h2>
                
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                  <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                    <MapPin className="w-4 h-4 text-amber-600 mr-2" />
                    <span className="text-gray-700">Tinsukia, Assam</span>
                  </div>
                  <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                    <Calendar className="w-4 h-4 text-amber-600 mr-2" />
                    <span className="text-gray-700">7+ Years Experience</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="relative inline-block">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-amber-200 to-orange-200 p-4 shadow-xl">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                    <img
                      src="/images/founder/preyashi-profile.jpg"
                      alt="Preyashi More Birmiwal - Interior Designer and Vastu Consultant in Tinsukia, Assam"
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        e.currentTarget.src = "/images/founder/placeholder-profile.jpg";
                      }}
                    />
                  </div>
                </div>
                
                {/* Social Media Links */}
                <div className="flex justify-center space-x-4 mt-8">
                  <motion.a
                    href="https://instagram.com/interiorsbypreyashi"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                  >
                    <Instagram className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/preyashi-more-birmiwal"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Story - SEO Optimized Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">My Design Journey</h2>
            </div>
            
            <div className="text-gray-700 leading-relaxed space-y-6 text-lg">
              <p>
                With more than <strong>7 years of professional experience</strong>, <strong>Preyashi More Birmiwal</strong> is a renowned <strong>interior designer in Tinsukia, Assam</strong>, who believes every space should authentically reflect the lifestyle and personality of the people living in it. As the <strong>founder of Interiors by Preyashi</strong>, she has successfully transformed numerous homes, offices, and commercial spaces across <strong>Northeast India</strong>, creating a unique signature style that seamlessly blends <strong>modern design with Vastu Shastra and Vedic Numerology</strong>.
              </p>
              
              <p>
                This distinctive holistic approach makes her designs not only visually stunning but also energetically balanced and spiritually harmonious. <strong>Preyashi specializes in Vastu consultation in Assam</strong> and is recognized as one of the top <strong>numerology experts in Northeast India</strong>. She meticulously listens to her clients—whether it's an intimate family home or a sprawling commercial complex—taking time to understand everyone's unique needs, preferences, and dreams.
              </p>
              
              <p>
                Her signature design philosophy centers around <strong>balance, comfort, and timeless beauty</strong>, ensuring every element of the space serves both functional and aesthetic purposes. What truly sets Preyashi apart as an <strong>interior designer in Dibrugarh and Guwahati regions</strong> is her deep belief that <strong>interior design transcends mere visual appeal</strong>—for her, thoughtfully designed interiors directly influence happiness, success, prosperity, and overall well-being.
              </p>
              
              <p>
                By masterfully combining contemporary design sensibilities with <strong>ancient Vastu wisdom and numerological insights</strong>, she creates living and working spaces that are both stylish and profoundly meaningful. Based in the heart of <strong>Northeast India</strong>, Preyashi continues to design with genuine love, perfect balance, and reverence for traditional knowledge—ensuring that every home, office, or commercial space truly embodies and celebrates the unique essence of the people who inhabit it.
              </p>
            </div>
            
            <div className="text-center mt-12">
              <blockquote className="text-2xl italic text-amber-700 font-medium">
                "Every project is designed with love, balance, and a touch of ancient science."
              </blockquote>
              <p className="text-gray-600 mt-4">- Preyashi More Birmiwal, Founder</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">Professional Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building a legacy of excellence in interior design across Northeast India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    {achievement.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{achievement.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas - SEO Enhanced */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">Areas of Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combining modern design sensibilities with ancient wisdom for holistic living spaces
            </p>
          </motion.div>

          <div className="space-y-12">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className={`w-full h-64 bg-gradient-to-br ${
                    index === 0 ? 'from-blue-100 to-purple-100' :
                    index === 1 ? 'from-green-100 to-teal-100' :
                    'from-orange-100 to-pink-100'
                  } rounded-lg flex items-center justify-center`}>
                    <div className="text-6xl opacity-60">
                      {index === 0 ? '🎨' : index === 1 ? '🏠' : '🔢'}
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-serif text-gray-800 mb-4">{area.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{area.description}</p>
                  <p className="text-sm text-amber-600 font-medium">
                    <strong>Specialties:</strong> {area.keywords}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <blockquote className="text-3xl md:text-4xl font-serif italic leading-relaxed">
              "A beautifully designed space is not just about aesthetics—it's about creating an environment that nurtures your soul, supports your dreams, and brings harmony to your daily life."
            </blockquote>
            <p className="mt-6 text-xl opacity-90">- Preyashi More Birmiwal</p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Follow my journey and get inspired by the latest design trends, Vastu tips, and project updates. Let's create something extraordinary together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-amber-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-amber-700 transition-colors duration-300"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/portfolio"
                className="border border-amber-600 text-amber-600 px-8 py-4 rounded-lg font-medium hover:bg-amber-600 hover:text-white transition-colors duration-300"
              >
                View My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
