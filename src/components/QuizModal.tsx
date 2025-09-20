import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What's your preferred color palette?",
      options: [
        { id: 'A', text: 'Neutral and calming (whites, beiges, soft grays)', style: 'minimalist' },
        { id: 'B', text: 'Bold and vibrant (rich colors, dramatic contrasts)', style: 'eclectic' },
        { id: 'C', text: 'Earthy and natural (browns, greens, warm tones)', style: 'vastu' }
      ]
    },
    {
      question: "How do you prefer your living space?",
      options: [
        { id: 'A', text: 'Minimalist and clutter-free', style: 'minimalist' },
        { id: 'B', text: 'Cozy and filled with personality', style: 'eclectic' },
        { id: 'C', text: 'Balanced with natural elements', style: 'vastu' }
      ]
    },
    {
      question: "What's most important in your home?",
      options: [
        { id: 'A', text: 'Functionality and efficiency', style: 'minimalist' },
        { id: 'B', text: 'Comfort and warmth', style: 'eclectic' },
        { id: 'C', text: 'Harmony and positive energy', style: 'vastu' }
      ]
    }
  ];

  const results = {
    minimalist: {
      title: "Modern Minimalist",
      description: "You appreciate clean lines, functionality, and sophisticated simplicity. Our contemporary design solutions would be perfect for you!",
      features: ["Clean geometric lines", "Neutral color palettes", "Smart storage solutions", "High-quality materials"]
    },
    eclectic: {
      title: "Cozy Traditional",
      description: "You love warmth, personality, and comfort in your spaces. Our residential design services can create the perfect homey atmosphere for you!",
      features: ["Rich textures and fabrics", "Warm color schemes", "Personal collections display", "Comfortable seating areas"]
    },
    vastu: {
      title: "Vastu Harmony",
      description: "You value balance, natural elements, and positive energy. Our Vastu consultation and biophilic design approach would be ideal for your space!",
      features: ["Natural materials", "Proper directional alignment", "Energy flow optimization", "Biophilic design elements"]
    }
  };

  const handleAnswer = (optionId: string, style: string) => {
    const newAnswers = [...answers, style];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const styleCounts = newAnswers.reduce((acc, style) => {
        acc[style] = (acc[style] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      const dominantStyle = Object.keys(styleCounts).reduce((a, b) => 
        styleCounts[a] > styleCounts[b] ? a : b
      );

      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const handleClose = () => {
    resetQuiz();
    onClose();
  };

  const getResult = () => {
    const styleCounts = answers.reduce((acc, style) => {
      acc[style] = (acc[style] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const dominantStyle = Object.keys(styleCounts).reduce((a, b) => 
      styleCounts[a] > styleCounts[b] ? a : b
    );

    return results[dominantStyle as keyof typeof results];
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            style={{ 
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 p-6 flex justify-between items-center rounded-t-2xl">
              <div className="flex items-center">
                <Sparkles className="w-6 h-6 text-indigo-600 mr-2" />
                <h2 className="text-2xl font-serif text-gray-800">Discover Your Design Style</h2>
              </div>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="p-6">
              {!showResult ? (
                <div>
                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Question {currentQuestion + 1} of {questions.length}</span>
                      <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-indigo-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>

                  {/* Question */}
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-serif text-gray-800 mb-8 text-center">
                      {questions[currentQuestion].question}
                    </h3>

                    <div className="space-y-4">
                      {questions[currentQuestion].options.map((option, index) => (
                        <motion.button
                          key={option.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleAnswer(option.id, option.style)}
                          className="w-full p-4 text-left border-2 border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 group"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="font-medium text-gray-800 group-hover:text-indigo-700">
                                {option.id}. {option.text}
                              </span>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors duration-300" />
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>

                  {/* Navigation */}
                  {currentQuestion > 0 && (
                    <div className="mt-8 flex justify-start">
                      <button
                        onClick={() => {
                          setCurrentQuestion(currentQuestion - 1);
                          setAnswers(answers.slice(0, -1));
                        }}
                        className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-300"
                      >
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        Previous
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                /* Results */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="mb-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <Sparkles className="w-10 h-10 text-indigo-600" />
                    </motion.div>
                    
                    <h3 className="text-3xl font-serif text-gray-800 mb-4">
                      Your Style: {getResult().title}
                    </h3>
                    
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      {getResult().description}
                    </p>

                    <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                      <h4 className="font-semibold text-gray-800 mb-4">Perfect for you:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {getResult().features.map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-700">
                            <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.location.href = '/contact'}
                      className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-all duration-300 shadow-lg"
                    >
                      Get Free Consultation
                    </motion.button>
                    
                    <button
                      onClick={resetQuiz}
                      className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300"
                    >
                      Retake Quiz
                    </button>
                  </div>
                </motion.div>
              )}

              <noscript>
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Design Style Assessment</h3>
                  <p className="text-blue-700 text-sm mb-4">
                    JavaScript is required for the interactive quiz. Here are our main design approaches:
                  </p>
                  <ul className="text-blue-700 text-sm space-y-2">
                    <li><strong>Modern Minimalist:</strong> Clean lines, neutral colors, functional design</li>
                    <li><strong>Cozy Traditional:</strong> Warm colors, rich textures, comfortable spaces</li>
                    <li><strong>Vastu Harmony:</strong> Natural materials, energy flow, balanced design</li>
                  </ul>
                  <p className="text-blue-700 text-sm mt-4">
                    Contact us at +91 8486076075 to discuss which style suits you best!
                  </p>
                </div>
              </noscript>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuizModal;