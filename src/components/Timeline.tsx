import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Shield, Zap, Cpu, ArrowRight, Globe, BarChart3, Mail, Phone, MapPin, Github, Linkedin, Twitter, Bot, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

const steps = [
  { day: 'Day 1', title: 'AI Audit & Strategy', description: 'We analyze your current workflows and identify the highest ROI automation opportunities.' },
  { day: 'Day 4', title: 'System Architecture', description: 'Our engineers design your custom AI infrastructure and data flow models.' },
  { day: 'Day 8', title: 'Beta Deployment', description: 'We launch your AI agents in a controlled environment for testing and refinement.' },
  { day: 'Day 14', title: 'Full Scale Launch', description: 'Your AI systems go live, replacing manual tasks and scaling your operations 24/7.' },
];

export const Timeline: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-white/10 mb-6">
            <Rocket className="w-4 h-4 text-cyan-accent" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-300">Implementation Timeline</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            From Audit to <span className="text-gradient">Full Scale</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We move fast. Your elite AI infrastructure is built and deployed in just 14 days.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative p-6 md:p-8 rounded-3xl md:rounded-[40px] glass-dark border-white/5 apple-shadow group hover:border-cyan-accent/20 transition-all duration-500">
              <div className="text-3xl md:text-4xl font-black text-gradient mb-3 md:mb-4">{step.day}</div>
              <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight mb-3 md:mb-4">{step.title}</h3>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed mb-6">{step.description}</p>
              <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 opacity-10 group-hover:opacity-100 transition-opacity">
                <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-cyan-accent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
