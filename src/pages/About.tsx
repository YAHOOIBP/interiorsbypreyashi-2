import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Heart, Instagram, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white pt-20 page-background bg-about">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-serif mb-6 text-gray-800">
                Meet Preyashi
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Interior Designer | Vastu Consultant | Vedic Numerologist
              </p>
              <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  With more than 7 years of experience, Preyashi More Birmiwal is an interior designer who believes every space should show the lifestyle and personality of the people living in it. She is the founder of Interiors by Preyashi and has worked on many homes and offices, where she mixes modern design with Vastu Shastra and Vedic Numerology.
                </p>
                <p>
                  This special approach makes her designs not only beautiful but also full of positive energy and balance. Preyashi always listens carefully to her clients—whether it's a small family or a big one—so she can understand everyone's needs and tastes. She then combines these ideas to create interiors that feel both personal and peaceful.
                </p>
                <p>
                  Her style is all about balance, comfort, and timeless beauty, making sure every part of the space is useful as well as attractive. What makes her different is her belief that design is not just about looks. For her, interiors also affect happiness, success, and overall well-being.
                </p>
                <p>
                  By blending creativity with ancient knowledge, she creates spaces that are both stylish and meaningful. Living in Northeast India, Preyashi continues to design with love, balance, and a touch of tradition—so that every home or office truly reflects the people who use it.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="/images/team/preyashi-founder.jpg"
                  alt="Preyashi More Birmiwal"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Fun Fact */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-lg shadow-xl max-w-xs"
              >
                <Heart className="w-6 h-6 text-amber-200 mb-2" />
                <p className="text-sm font-medium">
                  "Every project is designed with love, balance, and a touch of ancient science."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
              My Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Combining modern design sensibilities with ancient wisdom for holistic living spaces
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors duration-300">
                <Star className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-serif mb-4 text-gray-800">Interior Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Creating beautiful, functional spaces that reflect your personality and lifestyle, 
                with expertise in residential, commercial, and hospitality interiors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors duration-300">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-serif mb-4 text-gray-800">Vastu Consultation</h3>
              <p className="text-gray-600 leading-relaxed">
                Integrating ancient Vastu Shastra principles to ensure your space promotes 
                positive energy flow, prosperity, and well-being for all inhabitants.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors duration-300">
                <Heart className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-serif mb-4 text-gray-800">Vedic Numerology</h3>
              <p className="text-gray-600 leading-relaxed">
                Using the power of numbers to align your living spaces with your personal 
                vibrations, creating harmony between you and your environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-gray-800">
              My Design Philosophy
            </h2>
            <blockquote className="text-2xl md:text-3xl font-light text-gray-700 leading-relaxed italic mb-8">
              "A beautifully designed space is not just about aesthetics—it's about creating an environment 
              that nurtures your soul, supports your dreams, and brings harmony to your daily life."
            </blockquote>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Let's Connect
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Follow my journey and get inspired by the latest design trends, Vastu tips, and project updates.
            </p>
            
            <div className="flex justify-center space-x-6">
              <motion.a
                href="https://www.instagram.com/interiorsbypreyashi/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-amber-600 p-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/preyashi-more-birmiwal-interiors-by-preyashi-804781364/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-amber-600 p-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;