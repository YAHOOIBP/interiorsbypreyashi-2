import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import WhereWeWork from './pages/WhereWeWork';
import Services from './pages/Services';
import HowWeWork from './pages/HowWeWork';
import DesignSolutions from './pages/DesignSolutions';
import TurnkeySolutions from './pages/TurnkeySolutions';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          
          <AnimatePresence mode="wait">
            <motion.main
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-1"
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/where-we-work" element={<WhereWeWork />} />
                <Route path="/services" element={<Services />} />
                <Route path="/how-we-work" element={<HowWeWork />} />
                <Route path="/design-solutions" element={<DesignSolutions />} />
                <Route path="/turnkey-solutions" element={<TurnkeySolutions />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </motion.main>
          </AnimatePresence>
          
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;