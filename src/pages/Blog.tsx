import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, ChevronRight, Search, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS, getAllCategories } from '../lib/blogData';
import SEOHead from '../components/SEOHead';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', ...getAllCategories()];
  
  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS[0]; // First post as featured
  const regularPosts = filteredPosts.slice(selectedCategory === 'all' && !searchTerm ? 1 : 0);

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

      {/* Featured Post (only show when no search/filter active) */}
      {selectedCategory === 'all' && !searchTerm && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12">
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-medium">
                      <Tag className="w-3 h-3 mr-1" />
                      Featured • {featuredPost.category}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-serif text-gray-800 mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <span>{featuredPost.author}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Read Full Article
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
                
                <div className="relative bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center p-8">
                  <div className="w-full max-w-sm">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg mb-4 flex items-center justify-center">
                        <div className="text-6xl text-purple-300">✨</div>
                      </div>
                      <div className="text-center">
                        <h3 className="font-serif text-lg text-gray-800 mb-2">Featured Insight</h3>
                        <p className="text-sm text-gray-600">Latest design wisdom from our experts</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

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
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                      className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="p-6">
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-serif text-gray-800 mb-3 line-clamp-2 leading-tight">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                          <div className="flex items-center">
                            <User className="w-3 h-3 mr-1" />
                            <span>{post.author}</span>
                          </div>
                          
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <Link
                          to={`/blog/${post.slug}`}
                          className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300"
                        >
                          Read More
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
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
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-purple-300 focus:outline-none"
              />
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap">
                Subscribe
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
