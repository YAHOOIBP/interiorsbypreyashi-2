import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEOHead from "../components/SEOHead";

const faqData = [
  {
    category: "General",
    questions: [
      {
        q: "What locations do you serve?",
        a: "We serve clients throughout Assam and Arunachal Pradesh including major cities and rural areas.",
      },
      {
        q: "What is the difference between an interior designer and an interior decorator?",
        a: "Interior designers plan and create spaces including layout and function, decorators focus primarily on aesthetics.",
      },
      {
        q: "How do I determine my interior design style?",
        a: "We offer consultations and a quiz to help discover your personal design style, whether minimalist, traditional, or Vastu-based.",
      },
    ],
  },
  {
    category: "Design Process",
    questions: [
      {
        q: "What is your design process?",
        a: "Our 7-step process includes consultation, site visit, concept planning, visualization, adjustments, execution and handover.",
      },
      {
        q: "How long does a typical project take?",
        a: "Timelines vary but a residential project generally takes 3-6 months. We provide detailed schedules after planning.",
      },
      {
        q: "How involved must I be during the project?",
        a: "You can be as involved as you want. We collaborate closely or offer turnkey solutions managing everything for you.",
      },
    ],
  },
  {
    category: "Services & Pricing",
    questions: [
      {
        q: "How do you charge for your services?",
        a: "Pricing is project-based depending on scope and complexity. We provide transparent quotes after consultation.",
      },
      {
        q: "What is a turnkey interior design solution?",
        a: "Turnkey means we handle everything from design, material sourcing to execution, leaving you stress-free.",
      },
      {
        q: "Do you offer Vastu and numerology services separately?",
        a: "Yes, Vastu and Vedic Numerology consultations are available as standalone services or along with interior design.",
      },
    ],
  },
];

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openQuestionIdx, setOpenQuestionIdx] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleCategoryClick = (index: number) => {
    setActiveCategory(index);
    setOpenQuestionIdx(null);
  };

  const toggleQuestion = (index: number) => {
    setOpenQuestionIdx(openQuestionIdx === index ? null : index);
  };

  const redirectToContact = () => {
    navigate("/contact");
  };

  const structuredFaqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.flatMap((category) =>
      category.questions.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      }))
    ),
  };

  return (
    <div className="bg-stone-50 font-inter">
      <SEOHead
        title="FAQ - Interiors By Preyashi"
        description="Find answers to your questions about our interior design, Vastu, and numerology services."
        structuredData={structuredFaqData}
      />

      <section className="bg-amber-50 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-amber-800 font-montserrat"
        >
          Frequently Asked Questions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto"
        >
          Your questions answered about our process, pricing, and more.
        </motion.p>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {faqData.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => handleCategoryClick(idx)}
              className={`px-5 py-2 text-sm font-semibold rounded-full border-2 transition-colors duration-300 ${
                activeCategory === idx
                  ? "bg-amber-600 text-white border-amber-600"
                  : "bg-white text-amber-700 border-amber-300 hover:bg-amber-100"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {faqData[activeCategory].questions.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggleQuestion(idx)}
                className="w-full flex justify-between items-center text-left p-5 font-semibold text-lg text-stone-800"
                aria-expanded={openQuestionIdx === idx}
              >
                <span>{item.q}</span>
                {openQuestionIdx === idx ? (
                  <ChevronUp className="w-6 h-6 text-amber-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-500" />
                )}
              </button>
              <AnimatePresence initial={false}>
                {openQuestionIdx === idx && (
                  <motion.div
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-stone-600">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-stone-800 mb-2">Still Have Questions?</h3>
          <p className="text-stone-600 mb-6">Reach out to us for a personalized consultation.</p>
          <button
            onClick={redirectToContact}
            className="bg-amber-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors shadow-lg"
          >
            Schedule Consultation
          </button>
        </div>
      </main>
    </div>
  );
};

export default FAQ;
