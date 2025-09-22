import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Lightbulb, Cpu, Recycle, Sun, Droplets, Wind, TreePine, Package, Heart, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import LeadModal from '../components/LeadModal';

const DesignSolutions = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = React.useState(false);

  // Ensure page always loads from top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const solutions = [
    {
      icon: Package,
      title: 'Adaptive Partitioning & Flexible Layouts',
      description: 'Dynamic spaces that transform based on your needs and lifestyle changes',
      details: 'We use innovative sliding panels, movable walls, and folding dividers to adapt spaces dynamically—ideal for transforming areas for events, privacy, or open living. Perfect for modern families who need versatile spaces that can serve multiple functions throughout the day.',
      benefits: ['Space Flexibility', 'Event Adaptability', 'Privacy Control', 'Open Living Options', 'Multi-functional Areas'],
      category: 'Space Planning',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Leaf,
      title: 'Biophilic & Wellness-Focused Design',
      description: 'Connecting interiors with nature for better well-being and mental health',
      details: 'Incorporating indoor vertical gardens, living walls, and natural materials like wood and stone, our designs promote wellness, reduce stress, and enhance indoor air quality. This approach creates healing environments that support both physical and mental well-being.',
      benefits: ['Stress Reduction', 'Improved Air Quality', 'Enhanced Well-being', 'Natural Connection', 'Mental Health Support'],
      category: 'Wellness Design',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Cpu,
      title: 'Smart Technology Integration',
      description: 'Seamless tech integration for modern living and future-ready homes',
      details: 'From ambient lighting and automated blinds to smart thermostats and voice-controlled environments, we blend intuitive technology for seamless functionality and comfort. Our smart home solutions are designed to be user-friendly and energy-efficient.',
      benefits: ['Home Automation', 'Energy Efficiency', 'Convenience', 'Future-Ready', 'Voice Control'],
      category: 'Smart Homes',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Sun,
      title: 'Immersive Multi-Sensory Experiences',
      description: 'Engaging all senses for emotional connection and memorable spaces',
      details: 'Leveraging soundscapes, scent diffusers, tactile textures, and mood lighting, this approach goes beyond visuals to create emotionally resonant and personalized spaces. Each element is carefully chosen to evoke specific feelings and memories.',
      benefits: ['Emotional Connection', 'Personalized Experience', 'Sensory Engagement', 'Memorable Spaces', 'Therapeutic Environments'],
      category: 'Sensory Design',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Lightbulb,
      title: 'Interactive & Dynamic Surfaces',
      description: 'Responsive surfaces that engage, inform, and adapt to user needs',
      details: 'Imagine walls or counters that respond to touch—changing texture or displaying information. We incorporate smart materials and interactive design elements for modern, engaging experiences that adapt to your daily routines.',
      benefits: ['Interactive Experience', 'Modern Appeal', 'Information Display', 'Engaging Design', 'Adaptive Interfaces'],
      category: 'Interactive Design',
      color: 'from-teal-500 to-blue-500'
    },
    {
      icon: TreePine,
      title: 'Sculptural & Textural Feature Installations',
      description: 'Artistic elements that add depth, personality, and visual interest',
      details: 'From bas-relief wall panels to floor-to-ceiling textured feature walls, these artistic installations add depth, warmth, and personality to any interior. Each piece is custom-designed to reflect your unique style and story.',
      benefits: ['Artistic Appeal', 'Unique Character', 'Visual Interest', 'Personal Expression', 'Conversation Starters'],
      category: 'Artistic Features',
      color: 'from-amber-500 to-yellow-500'
    },
    {
      icon: Recycle,
      title: 'Sustainable & Zero-Waste Focus',
      description: 'Eco-conscious design for a better future and environmental responsibility',
      details: 'Embracing eco-conscious design, we use recycled, upcycled materials, biodegradable fabrics, and circular, zero-waste principles to promote healthier and greener interiors. Every choice considers long-term environmental impact.',
      benefits: ['Environmental Responsibility', 'Healthier Spaces', 'Sustainable Materials', 'Future-Conscious', 'Carbon Footprint Reduction'],
      category: 'Sustainable Design',
      color: 'from-green-600 to-teal-600'
    },
    {
      icon: Cpu,
      title: 'AI-Aided Concept Development',
      description: 'Technology-enhanced design process for faster, better results',
      details: 'Leveraging AI tools, we generate mood boards, layout options, and design prototypes rapidly—enabling more tailored and efficient planning for each project. This allows us to explore more possibilities in less time.',
      benefits: ['Rapid Prototyping', 'Tailored Solutions', 'Efficient Planning', 'Technology Integration', 'Enhanced Creativity'],
      category: 'Design Technology',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Heart,
      title: 'Playful & Sensory Personalization',
      description: 'Storytelling through design elements that reflect your unique journey',
      details: 'Inspired by boutique design trends, we focus on storytelling—using expressive furniture, rich textiles, and sculptural lighting to infuse spaces with personal identity and emotional depth. Your space becomes a reflection of your life story.',
      benefits: ['Personal Identity', 'Emotional Depth', 'Storytelling', 'Unique Expression', 'Memory Creation'],
      category: 'Personalized Design',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const impactMetrics = [
    { number: '40%', label: 'Energy Savings', description: 'Through smart technology integration' },
    { number: '60%', label: 'Air Quality Improvement', description: 'With biophilic design elements' },
    { number: '80%', label: 'Client Satisfaction', description: 'From personalized solutions' },
    { number: '25%', label: 'Space Efficiency', description: 'Through adaptive layouts' }
  ];

  // Enhanced structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Innovative Interior Design Solutions | Interiors By Preyashi",
    "description": "Cutting-edge interior design solutions including smart technology integration, biophilic design, sustainable materials, and adaptive layouts. Serving Northeast India with innovative, eco-conscious design methodologies.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Interiors By Preyashi",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Tinsukia",
        "addressRegion": "Assam",
        "addressCountry": "India"
      }
    },
    "areaServed": ["Northeast India", "Assam", "Arunachal Pradesh", "Tinsukia", "Dibrugarh", "Guwahati"],
    "serviceType": [
      "Smart Home Design",
      "Biophilic Interior Design", 
      "Sustainable Interior Design",
      "Adaptive Space Planning",
      "Interactive Design Solutions",
      "AI-Aided Design",
      "Wellness-Focused Design",
      "Eco-Conscious Design"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Design Solutions",
      "itemListElement": solutions.map((solution, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "name": solution.title,
        "description": solution.description,
        "category": solution.category
      }))
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <SEOHead
        title="Innovative Design Solutions - Smart Homes, Biophilic Design & Sustainable Interiors | Interiors By Preyashi"
        description="Explore cutting-edge interior design solutions: smart technology integration, biophilic wellness design, sustainable materials, adaptive layouts, and AI-aided concepts. Innovative, eco-conscious design services across Northeast India."
        keywords="innovative interior design, smart home design, biophilic design, sustainable interior design, adaptive space planning, eco-conscious design, wellness-focused interiors, AI interior design, interactive design solutions, Tinsukia design innovation"
        canonicalUrl="/design-solutions"
        structuredData={structuredData}
      />

      {/* Hero Section - Clean gradient without background image */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-teal-600 mr-3" />
              <span className="text-teal-600 font-semibold uppercase tracking-wide">Future-Ready Design</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-gray-800 leading-tight">
              Innovative
              <span className="block text-teal-700 italic">Design Solutions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Innovative, sustainable, and forward-thinking design methodologies that create 
              <strong> spaces for the future</strong> while respecting our environment and 
              <strong> enhancing human well-being</strong>.
            </p>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Elevate spaces with thoughtful, innovative solutions that blend beauty with practicality. 
              Each design element is crafted to be visually striking, easy to maintain, and equipped for the future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
              Our Design Innovation Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of design solutions that transform spaces 
              into intelligent, sustainable, and emotionally resonant environments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              
              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Solution Header */}
                  <div className={`bg-gradient-to-r ${solution.color} p-6 text-white`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-medium opacity-90">{solution.category}</span>
                    </div>
                    <h3 className="text-xl font-serif mb-2">{solution.title}</h3>
                    <p className="text-white/90">{solution.description}</p>
                  </div>

                  {/* Solution Content */}
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed mb-6">{solution.details}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 mb-3">Key Benefits:</h4>
                      {solution.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
              Measurable Impact Through Innovation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our design solutions aren't just about creating beautiful spaces today—they're about 
              building a sustainable future for generations to come.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg"
              >
                <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">{metric.number}</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">{metric.label}</div>
                <div className="text-gray-600 text-sm">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
                Design Philosophy for Tomorrow
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our approach to design solutions is rooted in three core principles: 
                <strong> sustainability</strong>, <strong>innovation</strong>, and <strong>human-centered design</strong>. 
                We believe that great design should not only look beautiful but also contribute to a better world.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: <Leaf className="w-5 h-5" />, text: "Environmental responsibility in every design decision" },
                  { icon: <Lightbulb className="w-5 h-5" />, text: "Innovation that enhances daily life experiences" },
                  { icon: <Heart className="w-5 h-5" />, text: "Human-centered solutions that promote well-being" }
                ].map((principle, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-4 text-teal-600">
                      {principle.icon}
                    </div>
                    <span>{principle.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-8">
                <div className="text-6xl mb-6">🌱</div>
                <h3 className="text-2xl font-serif text-gray-800 mb-4">Future-Ready Design</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every project contributes to environmental conservation while enhancing quality of life. 
                  We design spaces that adapt to changing needs and stand the test of time.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
              Experience Design Innovation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Step into our designs with immersive visualization technology. Experience spaces 
              before they're built with our cutting-edge design tools and virtual reality previews.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <Cpu className="w-8 h-8" />, title: "AI-Powered Design", description: "Advanced algorithms help create optimal layouts" },
                { icon: <Sun className="w-8 h-8" />, title: "Virtual Reality Preview", description: "Experience your space before construction begins" },
                { icon: <Sparkles className="w-8 h-8" />, title: "Smart Integration", description: "Seamless technology integration planning" }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Ready for Design Innovation?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Experience innovative design solutions that are beautiful, sustainable, and built for tomorrow. 
              Let's create something extraordinary together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsLeadModalOpen(true)}
                className="bg-white text-teal-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center shadow-lg"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Explore Innovative Solutions
              </button>
              <Link
                to="/portfolio"
                className="border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-teal-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                View Our Innovation Portfolio
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lead Modal */}
      <LeadModal 
        isOpen={isLeadModalOpen} 
        onClose={() => setIsLeadModalOpen(false)}
        title="Discover Design Innovation"
      />
    </div>
  );
};

export default DesignSolutions;
