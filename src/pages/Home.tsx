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
    title: "360 degree view of conference room",
    img: "/images/Reel2.jpg",
  },
  {
    url: "https://www.instagram.com/reel/DLE2bnJSrhP",
    title: "Are you Ruled by planet Moon ?",
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

const Home: React.FC = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const heroBgImages = [
    "https://www.winnerdesignsolutions.in/assets/images/courses/Interior%20Designing%20Using%20AutoCAD%20-%20Winner%20Design%20Solutions%201.jpg",
    "https://dwgshare.com/wp-content/uploads/2022/08/House-Design-Drawing-of-Interior-Design-V.2-3.jpg",
    "https://t3.ftcdn.net/jpg/06/21/66/58/360_F_621665818_ny9D2M4rYSn6SpINdke1akgwb4bMY75M.jpg",
  ];
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroBgImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Interiors By Preyashi",
    description: "Premium interior design services with Vastu consultation and Vedic numerology in Northeast India.",
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
        title="Interiors By Preyashi – Best Interior Designer in Assam"
        description="Premium interior design, Vastu consultation, and Vedic numerology expert in Northeast India."
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
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url('${heroBgImages[currentBg]}')` }}
          aria-hidden="true"
        />
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

        {/* Google Reviews */}
        <section className="bg-gradient-to-tr from-orange-50 to-amber-100 rounded-3xl shadow-lg px-6 py-12 mb-16 max-w-4xl mx-auto">
  <h2 className="font-bold text-2xl md:text-3xl text-amber-700 mb-8 font-montserrat">
    What Our Clients Say
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {[
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
    ].map((r) => (
      <div key={r.name + r.ago} className="bg-white/90 rounded-xl shadow p-5 flex flex-col h-full futuristic-review">
        <div className="flex items-center justify-between mb-2">
          <div className="font-montserrat font-semibold text-stone-800">{r.name}</div>
          <div className="flex items-center ml-2">
            {Array.from({ length: r.stars }).map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg">★</span>
            ))}
          </div>
        </div>
        <div className="text-xs text-stone-500 mb-1">{r.ago}</div>
        <div className="text-stone-700 text-sm">{r.text}</div>
      </div>
    ))}
  </div>
  <div className="mt-10 text-center">
    <a
      href="https://maps.app.goo.gl/7heGYZtQHvswV5eE7"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-gradient-to-r from-amber-400 to-orange-600 text-white font-bold px-8 py-3 mt-6 rounded-full shadow-lg hover:scale-105 transition"
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

export default Home;
