import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Star,
  Award,
  Users,
  Clock,
  MapPin,
  Instagram,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Home as HomeIcon,
  Compass,
  Zap,
  Eye,
  Sparkles,
  Heart,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import LeadModal from "../components/LeadModal";
import QuizModal from "../components/QuizModal";

const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = "",
}: {
  end: number | string;
  duration?: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView && typeof end === "number") {
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    } else if (typeof end === "string") {
      setCount(Number(end.replace(/[^0-9]/g, "")) || 0);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="text-4xl font-bold text-amber-600">
      {count}
      {suffix}
    </span>
  );
};

const reelList = [
  {
    url: "https://www.instagram.com/reel/DMFY-N7ycuf",
    title: "Entrances Main Door Designs",
    img: "/images/Reel1.jpg",
  },
  {
    url: "https://www.instagram.com/reel/DG4-b0sSZGP",
    title: "360 degree view of conference room",
    img: "/images/Reel2.jpg",
  },
  {
    url: "https://www.instagram.com/reel/DLE2bnJSrhP",
    title: "Are you Ruled by planet Moon ?",
    img: "/images/Reel3.jpg",
  },
  {
    url: "https://www.instagram.com/reel/C_DprW9PrNi",
    title: "Modern Bedroom Makeover",
    img: "/images/Reel4.jpg",
  },
  {
    url: "https://www.instagram.com/reel/C_dZ34uv6rM",
    title: "Clients Testimonial",
    img: "/images/Reel5.jpg",
  },
  {
    url: "https://www.instagram.com/reel/CeTMFuvphOq",
    title: "Transformation Of Favourite Corner",
    img: "/images/Reel6.jpg",
  },
  {
    url: "https://www.instagram.com/reel/C_fx6UfPAfw",
    title: "Trendy kids Bedroom colour combinations",
    img: "/images/Reel7.jpg",
  },
];

// World-Class Interior Photos Collection
const worldClassInteriors = [
  {
    id: 1,
    title: "Luxury Modern Living Room",
    description: "Contemporary design with traditional Indian elements and rich textures",
    category: "Living Room",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    inspiration: "Rich textures, warm lighting, and sophisticated color palette create an inviting luxury atmosphere"
  },
  {
    id: 2,
    title: "Opulent Master Bedroom",
    description: "Serene sanctuary with cultural motifs and modern comfort",
    category: "Bedroom", 
    image: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    inspiration: "Blend of modern minimalism with traditional Indian art creates a peaceful retreat"
  },
  {
    id: 3,
    title: "Elegant Dining Experience",
    description: "Sophisticated dining space with marble accents and artistic lighting",
    category: "Dining Room",
    image: "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    inspiration: "Marble textures and golden accents create an elegant dining atmosphere"
  },
  {
    id: 4,
    title: "Modern Kitchen Design",
    description: "Clean lines with natural materials and optimal functionality",
    category: "Kitchen",
    image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    inspiration: "White cabinetry with wood accents promotes cleanliness and positive energy"
  },
  {
    id: 5,
    title: "Heritage Study Room",
    description: "Traditional wisdom meets modern functionality",
    category: "Study Room",
    image: "https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    inspiration: "Rich wood tones and organized layout enhance focus and productivity"
  },
  {
    id: 6,
    title: "Luxury Bathroom Spa",
    description: "Spa-like retreat with natural elements and tranquil ambiance",
    category: "Bathroom",
    image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    inspiration: "Natural materials and clean design promote wellness and relaxation"
  }
];

// Vastu Tips Collection
const vastuTips = [
  {
    id: 1,
    icon: HomeIcon,
    title: "Main Entrance Vastu",
    tip: "Position your main door facing North, East, or Northeast to invite positive energy and prosperity into your home.",
    benefit: "Attracts wealth, health, and happiness",
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    id: 2,
    icon: Compass,
    title: "Living Room Direction",
    tip: "Place your living room in the Northeast or North direction with seating arranged to face East or North.",
    benefit: "Enhances family harmony and social connections",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    id: 3,
    icon: Zap,
    title: "Kitchen Placement",
    tip: "Locate your kitchen in the Southeast corner (fire element) for optimal health and family wellbeing.",
    benefit: "Promotes good health and family unity",
    color: "text-red-600",
    bgColor: "bg-red-50"
  },
  {
    id: 4,
    icon: Heart,
    title: "Bedroom Harmony",
    tip: "Position the master bedroom in Southwest direction with bed placed away from doors for peaceful sleep.",
    benefit: "Ensures restful sleep and relationship stability",
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    id: 5,
    icon: Shield,
    title: "Colors & Elements",
    tip: "Use soothing colors like cream, light yellow, and soft greens to promote peace and positive vibrations.",
    benefit: "Creates calming atmosphere and emotional balance",
    color: "text-amber-600",
    bgColor: "bg-amber-50"
  }
];

// Numerology Insights Collection
const numerologyInsights = [
  {
    id: 1,
    number: "1",
    title: "Leadership & Independence",
    insight: "Homes with address numbers totaling 1 promote leadership qualities and independence. Use bold, strong furniture pieces.",
    colors: ["Red", "Orange", "Gold"],
    elements: "Fire and Sun energy",
    tip: "Place a bright light or sun symbol in the East direction"
  },
  {
    id: 2,
    number: "2",
    title: "Cooperation & Balance",
    insight: "Number 2 homes foster partnerships and cooperation. Emphasize pairs and balanced arrangements in décor.",
    colors: ["White", "Silver", "Light Blue"],
    elements: "Water and Moon energy",
    tip: "Use paired objects and soft, curved furniture designs"
  },
  {
    id: 3,
    number: "3",
    title: "Creativity & Communication",
    insight: "Homes resonating with 3 enhance creativity and social connections. Perfect for artists and communicators.",
    colors: ["Yellow", "Gold", "Orange"],
    elements: "Air and Jupiter energy",
    tip: "Create artistic corners and open communication spaces"
  },
  {
    id: 4,
    number: "4",
    title: "Stability & Foundation", 
    insight: "Number 4 provides solid foundation and practical approach. Use square shapes and earth tones for grounding.",
    colors: ["Brown", "Green", "Earth Tones"],
    elements: "Earth and Saturn energy",
    tip: "Incorporate natural materials and geometric patterns"
  },
  {
    id: 5,
    number: "5",
    title: "Freedom & Adventure",
    insight: "Homes with 5 energy promote freedom and change. Great for travelers and dynamic personalities.",
    colors: ["Green", "Turquoise", "Mixed Colors"],
    elements: "Space and Mercury energy",
    tip: "Use versatile furniture and travel-inspired décor"
  },
  {
    id: 6,
    number: "6",
    title: "Love & Nurturing",
    insight: "Number 6 homes are perfect for families, emphasizing love, care, and nurturing. Ideal for family gatherings.",
    colors: ["Pink", "Rose", "Soft Pastels"],
    elements: "Earth and Venus energy", 
    tip: "Create comfortable family spaces with soft textures"
  }
];

const HomePage: React.FC = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [currentInteriorIndex, setCurrentInteriorIndex] = useState(0);

  const heroBgImages = [
    "https://www.winnerdesignsolutions.in/assets/images/courses/Interior%20Designing%20Using%20AutoCAD%20-%20Winner%20Design%20Solutions%201.jpg",
    "https://dwgshare.com/wp-content/uploads/2022/08/House-Design-Drawing-of-Interior-Design-V.2-3.jpg",
    "https://t3.ftcdn.net/jpg/06/21/66/58/360_F_621665818_ny9D2M4rYSn6SpINdke1akgwb4bMY75M.jpg",
  ];

  const [currentBg, setCurrentBg] = useState(0);
  const [isPreloading, setIsPreloading] = useState(false);

  // Preload next image
  useEffect(() => {
    const preloadImage = (src: string) => {
      const img = new Image();
      img.src = src;
    };

    // Preload all images on component mount
    heroBgImages.forEach(preloadImage);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsPreloading(true);
      
      // Preload next image
      const nextIndex = (currentBg + 1) % heroBgImages.length;
      const nextImg = new Image();
      nextImg.onload = () => {
        setCurrentBg(nextIndex);
        setIsPreloading(false);
      };
      nextImg.src = heroBgImages[nextIndex];
    }, 4000);

    return () => clearInterval(timer);
  }, [currentBg]);

  const reviews = [
    { name: "RAJAT RATHI", stars: 5, ago: "2 years ago", text: "She thoroughly investigated our budget and requirements before arriving at two design options. The whole process felt she's very personable and a pleasure to work with. The end result was stunning and we are extremely happy." },
    { name: "Nandini Birmiwal", stars: 5, ago: "2 years ago", text: "Undoubtedly, this is the one-stop solution for all of your requirements related to interior decor service. Lovely designs, economical, on-time and satisfactory service, caters to all client needs and a very effective space planning approach." },
    { name: "Suman Birmiwal", stars: 5, ago: "2 years ago", text: "Very sincere towards their work and the best creativity with cost cutting and managing everything till they hand you over the site." },
    { name: "Purnima Gogoi", stars: 5, ago: "5 years ago", text: "Love the work. Very knowledgeable and dedicated people towards their work. Worth the money. Best interior designer in Tinsukia so far." },
    { name: "Ruchika Bhatti", stars: 5, ago: "5 years ago", text: "I had a great experience with her, she is a great designer, I would always recommend her to everyone ❤️" },
    { name: "Kajal Jain", stars: 5, ago: "5 years ago", text: "They have got amazing designs..I really loved ur work😍" },
    { name: "Sumit Sharma", stars: 5, ago: "2 years ago", text: "Good behaviour, professional, very creative mind." },
    { name: "Nischay More", stars: 5, ago: "4 years ago", text: "Having good knowledge and exposure of work. I really loved her designs." },
    { name: "Harshit Jindal", stars: 5, ago: "5 years ago", text: "They provide indeed the best that one can ask for🔥👍 Do give a try." },
    { name: "Siddhant Agarwall", stars: 5, ago: "5 years ago", text: "Best interior designer in the town...best service good experience." },
    { name: "Rachna Goyal", stars: 5, ago: "2 years ago", text: "Very efficient n hard working n very innovative ideas. Positive, Quality." },
    { name: "Keshav Kanoi", stars: 5, ago: "5 years ago", text: "Worth for money. Thanks PM designs for the Excellent work." },
    { name: "Shruti Jogani", stars: 5, ago: "5 years ago", text: "Good taste n nice service." },
    { name: "Priyanka Agarwall", stars: 5, ago: "5 years ago", text: "Best place for interior designing." },
    { name: "Prasiddh Agarwall", stars: 5, ago: "5 years ago", text: "Best place for interior designing." },
    { name: "Sneha Sovasaria", stars: 5, ago: "2 years ago", text: "Positive — Responsiveness, Punctuality, Quality, Professionalism, Value." },
  ];

  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const nextReviewSlide = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % totalPages);
  };

  const prevReviewSlide = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const nextInteriorSlide = () => {
    setCurrentInteriorIndex((prev) => (prev + 1) % worldClassInteriors.length);
  };

  const prevInteriorSlide = () => {
    setCurrentInteriorIndex((prev) => (prev - 1 + worldClassInteriors.length) % worldClassInteriors.length);
  };

  const getCurrentReviews = () => {
    const start = currentReviewIndex * reviewsPerPage;
    return reviews.slice(start, start + reviewsPerPage);
  };

  useEffect(() => {
    const reviewTimer = setInterval(() => {
      nextReviewSlide();
    }, 5000);

    return () => clearInterval(reviewTimer);
  }, [currentReviewIndex]);

  useEffect(() => {
    const interiorTimer = setInterval(() => {
      nextInteriorSlide();
    }, 6000);

    return () => clearInterval(interiorTimer);
  }, [currentInteriorIndex]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Interiors By Preyashi",
    description: "Premium interior design services with Vastu consultation, Vedic numerology, and world-class design expertise in Northeast India.",
    url: "https://interiorsbypreyashi.com",
    telephone: "+918486076075",
    email: "contact@pmdesign.co.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Manav Kalyan Road, Parbatia, Namgarh Path - 03",
      addressLocality: "Tinsukia",
      addressRegion: "Assam",
      postalCode: "786125",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "27.48940927630817",
      longitude: "95.36547957545964",
    },
    openingHours: "Mo-Sa 10:00-19:00",
  };

  return (
    <div className="relative min-h-screen bg-stone-50 font-inter">
      <SEOHead
        title="Interiors By Preyashi – Best Interior Designer in Assam | Vastu & Numerology Expert"
        description="Premium interior design, world-class interiors, Vastu consultation, and Vedic numerology expert in Northeast India. Transform your space with ancient wisdom and modern design."
        canonical="https://interiorsbypreyashi.com/"
      />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      <LeadModal
        open={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        title="Schedule Your Consultation"
      />
      <QuizModal isOpen={isQuizModalOpen} onClose={() => setIsQuizModalOpen(false)} />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
        {/* Background Images with Seamless Transition */}
        {heroBgImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentBg ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${image}')` }}
            aria-hidden="true"
          />
        ))}
        
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        <div className="relative z-10 p-4">
          <motion.img
            src="/logo.png"
            alt="Interiors By Preyashi Logo"
            className="h-24 w-24 mx-auto mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.h1
            className="font-montserrat text-4xl md:text-5xl font-bold text-white drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Interiors By Preyashi
          </motion.h1>
          <motion.p
            className="mt-2 text-lg md:text-xl text-yellow-100 drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            From dreams to design, from spaces to purpose.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="tel:8486076075"
              className="bg-white/20 backdrop-blur-sm border border-white/40 text-white font-semibold px-7 py-3 rounded-full hover:bg-white/30 transition"
            >
              <Phone className="inline-block mr-2" size={18} />
              Call Now
            </a>
            <Link
              to="/contact"
              className="bg-amber-500 text-white font-semibold px-7 py-3 rounded-full hover:bg-amber-600 transition"
            >
              <Mail className="inline-block mr-2" size={18} />
              Get Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main content starts here */}
      <main className="relative z-10 bg-stone-50 px-4 py-16">
        {/* Animated Counters */}
        <section className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 -mt-40 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <Award className="text-amber-500 mb-3" size={32} />
            <AnimatedCounter end={7} suffix="+" />
            <div className="text-md text-stone-700 mt-1 font-medium">Years Experience</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <Star className="text-orange-400 mb-3" size={32} />
            <AnimatedCounter end={50} suffix="+" />
            <div className="text-md text-stone-700 mt-1 font-medium">Projects Completed</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <Users className="text-yellow-600 mb-3" size={32} />
            <AnimatedCounter end={100} suffix="%" />
            <div className="text-md text-stone-700 mt-1 font-medium">Client Satisfaction</div>
          </div>
        </section>

        {/* World-Class Interior Photos Showcase */}
        <section className="max-w-6xl mx-auto py-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold font-montserrat text-amber-800 mb-4">World-Class Interior Designs</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Discover our portfolio of luxury interiors that blend modern sophistication with traditional Indian elements
            </p>
          </motion.div>

          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative h-96 md:h-[500px]">
              <img
                src={worldClassInteriors[currentInteriorIndex].image}
                alt={worldClassInteriors[currentInteriorIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center mb-3">
                  <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                    {worldClassInteriors[currentInteriorIndex].category}
                  </span>
                  <Sparkles className="w-5 h-5 mr-2" />
                  <span className="text-sm">World-Class Design</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">{worldClassInteriors[currentInteriorIndex].title}</h3>
                <p className="text-lg mb-3">{worldClassInteriors[currentInteriorIndex].description}</p>
                <p className="text-sm text-yellow-200 italic">{worldClassInteriors[currentInteriorIndex].inspiration}</p>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevInteriorSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={nextInteriorSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center py-6 space-x-2">
              {worldClassInteriors.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentInteriorIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentInteriorIndex 
                      ? 'bg-amber-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Vastu Tips Section */}
        <section className="max-w-6xl mx-auto py-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-6">
              <Compass className="w-12 h-12 text-green-600 mr-4" />
              <h2 className="text-4xl font-bold font-montserrat text-amber-800">Ancient Vastu Wisdom</h2>
            </div>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Transform your home into a sanctuary of positive energy with time-tested Vastu Shastra principles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vastuTips.map((tip, index) => (
              <motion.div
                key={tip.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${tip.bgColor} rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-opacity-20`}
              >
                <div className="flex items-center mb-4">
                  <tip.icon className={`w-8 h-8 ${tip.color} mr-3`} />
                  <h3 className="text-xl font-bold text-gray-800">{tip.title}</h3>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{tip.tip}</p>
                <div className={`text-sm font-semibold ${tip.color} bg-white/60 rounded-lg px-3 py-2`}>
                  ✨ {tip.benefit}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link
              to="/blog"
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg inline-block"
            >
              Discover More Vastu Tips
            </Link>
          </motion.div>
        </section>

        {/* Numerology Insights Section */}
        <section className="max-w-6xl mx-auto py-16 mb-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl">
          <div className="px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center mb-6">
                <Eye className="w-12 h-12 text-purple-600 mr-4" />
                <h2 className="text-4xl font-bold font-montserrat text-purple-800">Numerology & Sacred Geometry</h2>
              </div>
              <p className="text-xl text-purple-700 max-w-3xl mx-auto">
                Unlock the power of numbers to create harmonious living spaces that resonate with your personal energy
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {numerologyInsights.map((insight, index) => (
                <motion.div
                  key={insight.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                      {insight.number}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{insight.title}</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{insight.insight}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-purple-600">Colors: </span>
                      <div className="flex gap-2 mt-1">
                        {insight.colors.map((color, idx) => (
                          <span key={idx} className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <span className="font-semibold text-purple-600">Element: </span>
                      <span className="text-gray-700 text-sm">{insight.elements}</span>
                    </div>
                    
                    <div className="bg-purple-50 rounded-lg p-3 mt-4">
                      <span className="font-semibold text-purple-600">💡 Tip: </span>
                      <span className="text-purple-700 text-sm">{insight.tip}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center mt-12"
            >
              <Link
                to="/blog"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg inline-block"
              >
                Explore More Numerology Insights
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-4xl mx-auto py-12 text-center">
          <h2 className="text-3xl font-bold font-montserrat text-amber-800 mb-8">Our Core Philosophies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center">
              <Clock className="text-orange-500 mb-3" size={36} />
              <h3 className="text-xl font-semibold text-orange-700 mb-2">Precision</h3>
              <p className="text-stone-600">Meticulous attention to detail from concept to execution for flawless results.</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="text-yellow-500 mb-3" size={36} />
              <h3 className="text-xl font-semibold text-amber-700 mb-2">Creativity</h3>
              <p className="text-stone-600">Innovative designs that reflect your unique personality and lifestyle.</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="text-green-600 mb-3" size={36} />
              <h3 className="text-xl font-semibold text-green-700 mb-2">Vastu Expertise</h3>
              <p className="text-stone-600">Creating harmonious spaces that promote well-being and prosperity.</p>
            </div>
          </div>
        </section>

        {/* Instagram Reels */}
        <section className="max-w-6xl mx-auto mt-16 py-10">
          <h2 className="text-3xl font-bold mb-8 font-montserrat text-orange-700 text-center">Follow Our Journey</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {reelList.map((reel) => (
              <a key={reel.url} href={reel.url} target="_blank" rel="noopener noreferrer" className="block group">
                <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-shadow">
                  <img src={reel.img} alt={reel.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-3">
                    <p className="text-white text-sm font-semibold">{reel.title}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Enhanced Google Reviews with 3D Slider */}
        <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-3xl shadow-2xl px-6 py-12 mb-16 max-w-4xl mx-auto overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-200/20 to-amber-200/20 backdrop-blur-sm"></div>
          
          <div className="relative z-10">
            <h2 className="font-bold text-2xl md:text-3xl text-amber-700 mb-8 font-montserrat text-center">
              What Our Clients Say
            </h2>
            
            <div className="relative">
              {/* Review Cards Container */}
              <div className="overflow-hidden rounded-2xl">
                <div 
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentReviewIndex * 100}%)` }}
                >
                  {Array.from({ length: totalPages }).map((_, pageIndex) => (
                    <div key={pageIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                        {reviews.slice(pageIndex * reviewsPerPage, (pageIndex + 1) * reviewsPerPage).map((review, index) => (
                          <div 
                            key={review.name + review.ago} 
                            className="group bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl p-6 flex flex-col h-full transition-all duration-500 transform hover:scale-105 hover:rotate-1"
                            style={{
                              background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(254,249,195,0.8) 100%)',
                              border: '1px solid rgba(245,158,11,0.2)',
                            }}
                          >
                            <div className="flex items-center justify-between mb-3">
                              <div className="font-montserrat font-semibold text-stone-800 text-sm group-hover:text-amber-700 transition-colors">
                                {review.name}
                              </div>
                              <div className="flex items-center ml-2">
                                {Array.from({ length: review.stars }).map((_, i) => (
                                  <span key={i} className="text-yellow-400 text-lg animate-pulse" style={{ animationDelay: `${i * 100}ms` }}>
                                    ★
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="text-xs text-stone-500 mb-3 group-hover:text-stone-600 transition-colors">
                              {review.ago}
                            </div>
                            <div className="text-stone-700 text-sm leading-relaxed flex-grow">
                              {review.text}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevReviewSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm text-amber-600 p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 z-20"
                aria-label="Previous reviews"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={nextReviewSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm text-amber-600 p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 z-20"
                aria-label="Next reviews"
              >
                <ChevronRight size={24} />
              </button>

              {/* Dot Indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReviewIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentReviewIndex 
                        ? 'bg-amber-500 scale-125' 
                        : 'bg-amber-200 hover:bg-amber-300'
                    }`}
                    aria-label={`Go to review page ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-yellow-300/30 to-orange-400/30 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-amber-300/30 to-red-400/30 rounded-full blur-xl"></div>

          <div className="mt-10 text-center relative z-10">
            <a
              href="https://maps.app.goo.gl/7heGYZtQHvswV5eE7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 transform"
            >
              Check out more reviews on Google
            </a>
          </div>
        </section>

        {/* Quiz Section */}
        <section className="mb-24 mt-12 flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-3 text-amber-700 font-montserrat">Find Your Perfect Design Style</h2>
          <p className="text-stone-600 mb-6 max-w-xl">Take our quick and fun quiz to discover which interior design approach best suits your personality and lifestyle.</p>
          <button
            onClick={() => setIsQuizModalOpen(true)}
            className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-lg font-bold px-10 py-4 rounded-full shadow-lg hover:scale-105 transition"
          >
            Start Quiz Now
          </button>
        </section>
      </main>
    </div>
  );
};

export default HomePage;