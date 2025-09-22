import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Share2, ChevronRight } from 'lucide-react';
import { getPostBySlug, BLOG_POSTS } from '../lib/blogData';
import SEOHead from '../components/SEOHead';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState(getPostBySlug(slug || ''));
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);

  useEffect(() => {
    if (slug) {
      const foundPost = getPostBySlug(slug);
      if (foundPost) {
        setPost(foundPost);
        
        // Get related posts from the same category
        const related = BLOG_POSTS
          .filter(p => p.category === foundPost.category && p.id !== foundPost.id)
          .slice(0, 3);
        setRelatedPosts(related);
      } else {
        // Redirect to blog if post not found
        navigate('/blog');
      }
    }
  }, [slug, navigate]);

  const handleShare = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        // Fallback to copying URL to clipboard
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } else if (post) {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-gray-800 mb-4">Post Not Found</h1>
          <Link 
            to="/blog"
            className="text-amber-600 hover:text-amber-700 font-medium flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <SEOHead
        title={`${post.title} - Interiors By Preyashi Blog`}
        description={post.excerpt}
        keywords={`${post.category}, interior design, ${post.title.toLowerCase()}`}
        canonicalUrl={`/blog/${post.slug}`}
      />

      {/* Breadcrumb */}
      <section className="py-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-amber-600 transition-colors duration-300">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/blog" className="hover:text-amber-600 transition-colors duration-300">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-800 font-medium">
              {post.title}
            </span>
          </nav>
        </div>
      </section>

      {/* Article Header */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{post.author}</span>
              </div>
              
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4">
              <Link
                to="/blog"
                className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
              
              <button
                onClick={handleShare}
                className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors duration-300"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </button>
            </div>
          </motion.div>
        </div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto px-4"
        >
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <div 
                className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-800 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-800 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:mb-2"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </motion.div>

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto px-4 mt-12"
        >
          <div className="bg-amber-50 rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-20 h-20 bg-amber-200 rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-amber-700" />
              </div>
              <div className="text-center md:text-left flex-1">
                <h3 className="text-xl font-serif text-gray-800 mb-2">About {post.author}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Interior Designer, Vastu Consultant, and Vedic Numerologist with over 7 years of experience 
                  creating beautiful, harmonious spaces. Preyashi combines modern design principles with ancient 
                  wisdom to transform homes and commercial spaces across Northeast India.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start space-x-4">
                  <Link
                    to="/about"
                    className="text-amber-600 hover:text-amber-700 font-medium text-sm"
                  >
                    Learn More →
                  </Link>
                  <Link
                    to="/contact"
                    className="text-amber-600 hover:text-amber-700 font-medium text-sm"
                  >
                    Get Consultation →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 py-16 bg-gray-50"
          >
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-800 text-center mb-12">
                Related Articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <motion.article
                    key={relatedPost.id}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">
                          {relatedPost.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-serif text-gray-800 mb-3 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                      
                      <Link
                        to={`/blog/${relatedPost.slug}`}
                        className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors duration-300"
                      >
                        Read More
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="py-16 bg-amber-600 text-white"
        >
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get personalized design consultation that combines modern aesthetics with ancient wisdom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-amber-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/portfolio"
                className="border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-amber-600 transition-colors duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </motion.section>
      </article>
    </div>
  );
};

export default BlogPost;
