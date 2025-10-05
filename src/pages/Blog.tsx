import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, ChevronRight, Search, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS, getAllCategories } from '../lib/blogData';
import SEOHead from '../components/SEOHead';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import emailjs from '@emailjs/browser';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  

  async function handleSubscribe() {
  if (!email) return;
    const emailData = {
    subscriber_email: email,
    subscription_date: new Date().toLocaleDateString(),
    subscription_time: new Date().toLocaleTimeString()
  };

  try {
    await emailjs.send('service_u6op9ls', 'template_0jnte3q', emailData, 'VyG6mRGf3pAIfwSNl');
    await addDoc(collection(db, 'subscribers'), {
      email,
      subscribedAt: new Date().toISOString()
    });
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  } catch (err) {
    console.error(err);
    alert('Subscription failed');
  }
}

  // FIX 3: Ensure page always loads from top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // FIX 3: Scroll to top when opening article
  const handleReadMore = (post) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeArticle = () => {
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = ['all', ...getAllCategories()];
  
  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const regularPosts = filteredPosts;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Interiors By Preyashi Blog",
    "description": "Expert insights on interior design, Vastu Shastra, and numerology from professional designers.",
    "url": "https://interiorsbypreyashi.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Interiors By Preyashi"
    },
    "blogPost": BLOG_POSTS.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "url": `https://interiorsbypreyashi.com/blog/${post.slug}`
    }))
  };

  // If viewing an article - FIX 1: Add article view with visible text
  if (selectedPost) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <SEOHead
          title={`${selectedPost.title} | Interiors By Preyashi Blog`}
          description={selectedPost.excerpt}
          keywords={`${selectedPost.category.toLowerCase()}, interior design, ${selectedPost.title.toLowerCase()}`}
          canonicalUrl={`/blog/${selectedPost.slug}`}
        />
        
        {/* Article Header */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                {selectedPost.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
              {selectedPost.title}
            </h1>
            
            <div className="flex items-center justify-center space-x-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{selectedPost.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{selectedPost.readTime}</span>
              </div>
            </div>
            
            <button
              onClick={closeArticle}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-300"
            >
              ← Back to Blog
            </button>
          </div>
        </div>

        {/* FIX 2: Cover Image */}
        <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-10">
          <div className="aspect-square bg-white rounded-xl shadow-2xl overflow-hidden border-4 border-white">
            <img
              src={selectedPost.coverImage || '/images/blog/default-cover.webp'}
              alt={selectedPost.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-purple-600 text-lg font-medium hidden">
              Cover Image
            </div>
          </div>
        </div>

                <article className="max-w-4xl mx-auto px-4 py-16">
  <div className="prose prose-lg max-w-none">
    <div 
      style={{ color: '#374151', fontSize: '1.125rem', lineHeight: '1.75' }}
      dangerouslySetInnerHTML={{ __html: selectedPost.content }}
      className="blog-content"
    />
  </div>
          
          {/* Author Bio */}
          <div className="mt-16 p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mr-6">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">About Preyashi</h3>
                <p className="text-gray-700 leading-relaxed">
                  Interior designer, Vastu consultant, and numerology expert with over 7 years of experience creating harmonious living spaces across Northeast India.
                </p>
                {/* ADD BUTTONS HERE */}
      <div className="mt-4 flex flex-wrap gap-4">
        <a
          href="/about"
          className="text-amber-700 hover:text-amber-900 font-medium transition-colors"
        >
          Learn More &rarr;
        </a>
        <a
          href="/contact"
          className="text-amber-700 hover:text-amber-900 font-medium transition-colors"
        >
          Get Consultation &rarr;
        </a>
      </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <SEOHead
        title="Blog - Interior Design Insights | Interiors By Preyashi"
        description="Discover expert insights on interior design, Vastu Shastra, numerology, and home decoration tips from our professional design team."
        keywords="interior design blog, Vastu tips, numerology insights, home decoration, design trends, Tinsukia interior designer"
        canonicalUrl="/blog"
        structuredData={structuredData}
      />

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
              Explore our latest thoughts on interior design, Vastu wisdom, numerology insights, 
              and trends that are shaping beautiful living spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All Posts' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {regularPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-serif text-gray-800 mb-4">No posts found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-300"
              >
                Show All Posts
              </button>
            </motion.div>
          ) : (
            <>
              {(selectedCategory !== 'all' || searchTerm) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl font-serif text-gray-800 mb-2">
                    {searchTerm ? `Search results for "${searchTerm}"` : `${selectedCategory} Articles`}
                  </h2>
                  <p className="text-gray-600">
                    Found {regularPosts.length} {regularPosts.length === 1 ? 'post' : 'posts'}
                  </p>
                </motion.div>
              )}

              <motion.div
  layout
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
>
  <AnimatePresence>
    {regularPosts.map((post, index) => (
      <motion.article
        key={post.id}
        layout
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
      >
        {/* MOBILE-OPTIMIZED IMAGE */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={post.coverImage || '/images/blog/default-cover.webp'}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
          <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-purple-600 font-bold hidden">
            Cover Image
          </div>
          
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 bg-purple-600/90 text-white text-xs font-medium rounded-full">
              {post.category}
            </span>
          </div>
        </div>

        {/* MOBILE-OPTIMIZED CONTENT */}
        <div className="p-4 sm:p-5 lg:p-6">
          <h3 className="text-lg sm:text-xl font-serif text-gray-800 mb-2 leading-tight line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-gray-600 text-sm sm:text-base mb-3 line-clamp-2">
            {post.excerpt}
          </p>
          
          {/* SIMPLIFIED META FOR MOBILE */}
          <div className="flex items-center text-xs text-gray-500 mb-4">
            <User className="w-3 h-3 mr-1" />
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <Clock className="w-3 h-3 mr-1" />
            <span>{post.readTime}</span>
          </div>
          
          {/* MOBILE-FRIENDLY CTA */}
          <button
            onClick={() => handleReadMore(post)}
            className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors touch-manipulation"
          >
            Read Article →
          </button>
        </div>
      </motion.article>
    ))}
  </AnimatePresence>
</motion.div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Stay Inspired
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest design insights, Vastu tips, and project updates delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-purple-300 focus:outline-none"
              />
              <button
  onClick={handleSubscribe}
  disabled={!email || submitted}
  className="bg-white text-purple-600 px-6 py-3 rounded-lg disabled:opacity-50 transition-colors duration-300 whitespace-nowrap"
>
  {submitted ? 'Thank You!' : 'Subscribe'}
</button>
            </div>
            
            <p className="text-sm opacity-75 mt-4">
              No spam, unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
