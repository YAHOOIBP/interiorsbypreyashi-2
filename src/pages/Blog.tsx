import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight, Mail, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import LeadModal from '../components/LeadModal';

const Blog = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add Firebase newsletter subscription logic
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const blogPosts = [
    {
      id: 1,
      title: 'Vastu Principles for Modern Homes',
      excerpt: 'Discover how ancient Vastu Shastra principles can be seamlessly integrated into contemporary interior design for harmony and prosperity.',
      content: 'Vastu Shastra, the ancient Indian science of architecture and design, offers timeless principles that can enhance the energy flow in modern homes...',
      author: 'Preyashi More Birmiwal',
      date: '2024-12-15',
      readTime: '8 min read',
      category: 'Vastu',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 2,
      title: '5 Interior Design Mistakes to Avoid',
      excerpt: 'Learn about the most common interior design pitfalls and how to avoid them for a perfectly balanced and functional living space.',
      content: 'Interior design is both an art and a science. While creativity is essential, avoiding common mistakes can make the difference between a good design and a great one...',
      author: 'Preyashi More Birmiwal',
      date: '2024-12-10',
      readTime: '6 min read',
      category: 'Design Tips',
      image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 3,
      title: 'Color Psychology in Interior Design',
      excerpt: 'Understand how different colors affect mood and behavior, and learn to use color psychology to create the perfect atmosphere in your home.',
      content: 'Colors have a profound impact on our emotions and behavior. In interior design, understanding color psychology can help create spaces that not only look beautiful but also feel right...',
      author: 'Preyashi More Birmiwal',
      date: '2024-12-05',
      readTime: '7 min read',
      category: 'Color Theory',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 4,
      title: 'Vedic Numerology in Interior Design',
      excerpt: 'Explore how Vedic numerology can guide your interior design choices to create spaces that resonate with your personal energy.',
      content: 'Vedic numerology offers insights into the vibrational qualities of numbers and how they can influence our living spaces...',
      author: 'Preyashi More Birmiwal',
      date: '2024-11-28',
      readTime: '9 min read',
      category: 'Numerology',
      image: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Interiors By Preyashi Blog",
    "description": "Interior design insights, Vastu tips, and design inspiration from Northeast India's premier interior designer",
    "url": "https://interiorsbypreyashi.com/blog",
    "author": {
      "@type": "Person",
      "name": "Preyashi More Birmiwal"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "datePublished": post.date,
      "image": post.image
    }))
  };

  return (
    <div className="min-h-screen bg-white pt-20 page-background bg-blog">
      <SEOHead
        title="Blog"
        description="Interior design insights, Vastu tips, and design inspiration from Northeast India's premier interior designer Preyashi More Birmiwal."
        keywords="interior design blog, vastu tips, design inspiration, Northeast India, Assam interior design"
        canonicalUrl="/blog"
        structuredData={structuredData}
      />

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter blur-sm brightness-75"
        style={{ backgroundImage: `url('https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')` }}
        aria-hidden="true"
      />
      {/* Translucent Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-90" aria-hidden="true"></div>

      {/* Page Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-serif mb-6 text-gray-800">
                Design Insights & Inspiration
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover the latest trends, timeless principles, and expert insights from the world 
                of interior design, Vastu Shastra, and Vedic numerology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif mb-4 text-gray-800">
                Stay Inspired
              </h2>
              <p className="text-gray-600 mb-8">
                Subscribe to our newsletter for the latest design tips, Vastu insights, and project updates.
              </p>
              
              {isSubscribed ? (
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-md mx-auto"
                >
                  <div className="text-green-600 font-medium">Thank you for subscribing!</div>
                  <div className="text-green-600 text-sm mt-1">You'll receive our latest updates soon.</div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Subscribe
                  </motion.button>
                </form>
              )}

              <noscript>
                <div className="mt-4 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <p className="text-purple-800">Subscribe to our newsletter by contacting us at contact@pmdesign.co.in</p>
                </div>
              </noscript>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-serif text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center transition-colors duration-300"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-6">
                Ready to Transform Your Space?
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                Get inspired by our blog and let's create something beautiful together. 
                Your dream space is just a consultation away.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLeadModalOpen(true)}
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Start Your Project
              </motion.button>

              <noscript>
                <div className="mt-4">
                  <Link 
                    to="/contact" 
                    className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg"
                  >
                    Start Your Project
                  </Link>
                </div>
              </noscript>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Lead Modal */}
      <LeadModal 
        isOpen={isLeadModalOpen} 
        onClose={() => setIsLeadModalOpen(false)}
        title="Start Your Design Journey"
      />
    </div>
  );
};

export default Blog;