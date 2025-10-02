import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import About from './pages/About';
import WhereWeWork from './pages/WhereWeWork';
import Services from './pages/Services';
import HowWeWork from './pages/HowWeWork';
import DesignSolutions from './pages/DesignSolutions';
import TurnkeySolutions from './pages/TurnkeySolutions';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import VastuInsights from './pages/VastuInsights';
import NumerologyInsights from './pages/NumerologyInsights';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-neutral-light">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[9999] bg-neutral-dark text-white px-4 py-2 rounded-br-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-grow" role="main">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/where-we-work" element={<WhereWeWork />} />
                <Route path="/services" element={<Services />} />
                <Route path="/how-we-work" element={<HowWeWork />} />
                <Route path="/design-solutions" element={<DesignSolutions />} />
                <Route path="/turnkey-solutions" element={<TurnkeySolutions />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/vastu-insights" element={<VastuInsights />} />
                <Route path="/numerology-insights" element={<NumerologyInsights />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
