import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Zap, Shield, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

export const Comparison: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-black/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-white/10 mb-6">
            <Zap className="w-4 h-4 text-cyan-accent" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-300">The AI Advantage</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            Before vs <span className="text-gradient">After AI</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See how Nuvora transforms your operations from manual chaos to automated precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {/* Before AI */}
          <div className="p-8 md:p-12 rounded-3xl md:rounded-[60px] glass-dark border-white/5 apple-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 md:p-8 opacity-5">
              <XCircle className="w-24 h-24 md:w-40 md:h-40 text-red-500" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-8 md:mb-10 text-gray-500">Traditional Agency</h3>
            <ul className="space-y-4 md:space-y-8">
              {[
                "Manual lead qualification (slow)",
                "Human-dependent customer support",
                "Fragmented data silos",
                "High operational overhead",
                "Limited scalability",
                "Error-prone manual workflows"
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 md:space-x-4 text-gray-400">
                  <XCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500/50 flex-shrink-0" />
                  <span className="text-sm md:text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After AI */}
          <div className="p-8 md:p-12 rounded-3xl md:rounded-[60px] glass-dark border-cyan-accent/20 apple-shadow relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-accent/5 via-transparent to-transparent opacity-50" />
            <div className="absolute top-0 right-0 p-6 md:p-8 opacity-10">
              <CheckCircle2 className="w-24 h-24 md:w-40 md:h-40 text-cyan-accent" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-8 md:mb-10 text-white">Nuvora AI Systems</h3>
            <ul className="space-y-4 md:space-y-8">
              {[
                "Instant AI lead qualification",
                "24/7 autonomous support agents",
                "Unified AI data infrastructure",
                "70% lower operational costs",
                "Infinite scalability",
                "Precision-engineered automation"
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 md:space-x-4 text-white">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-cyan-accent flex-shrink-0" />
                  <span className="text-sm md:text-base font-bold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
