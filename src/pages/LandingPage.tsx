import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Rocket, Bot } from 'lucide-react';
import Hero from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { LiveDemo } from '../components/LiveDemo';
import TrustSection from '../components/TrustSection';
import { ProductizedServices } from '../components/ProductizedServices';
import { AIAuditFunnel } from '../components/AIAuditFunnel';
import { WhoThisIsFor } from '../components/WhoThisIsFor';
import { Comparison } from '../components/Comparison';
import { Timeline } from '../components/Timeline';
import { ROICalculator } from '../components/ROICalculator';

import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-950 text-white selection:bg-cyan-accent selection:text-black">
      <Helmet>
        <title>Nuvora | AI Systems That Replace Entire Teams</title>
        <meta name="description" content="We build elite AI systems that replace entire teams. Cut costs, scale faster, and operate 24/7 with Nuvora's AI automation infrastructure." />
        <meta name="keywords" content="AI Agency, AI Automation, AI Systems, Business Automation, Nuvora AI, Digital Transformation" />
        <meta property="og:title" content="Nuvora | AI Systems That Replace Entire Teams" />
        <meta property="og:description" content="Elite AI automation and digital strategy for $100M brands." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      <Navbar />
      
      <main>
        <Hero />
        <TrustSection />
        <LiveDemo />
        <ProductizedServices />
        <Comparison />
        <ROICalculator />
        <AIAuditFunnel />
        <FAQ />
        <Footer />
      </main>

      {/* Floating Chat Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Link
          to="/chat"
          className="flex items-center space-x-3 bg-white text-black px-8 py-5 rounded-full font-black uppercase tracking-tighter apple-shadow hover:bg-cyan-accent hover:text-white transition-all group"
        >
          <Bot className="w-7 h-7 group-hover:scale-110 transition-transform" />
          <span className="hidden md:inline">Chat with Nuvora</span>
        </Link>
      </motion.div>
    </div>
  );
};
