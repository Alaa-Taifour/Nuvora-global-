import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Shield, Zap, Cpu, ArrowRight, Globe, BarChart3, Mail, Phone, MapPin, Github, Linkedin, Twitter, Bot, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

const services = [
  {
    title: "AI Lead Generation System",
    outcome: "300% more qualified leads",
    deliverables: ["Custom AI scraper", "Autonomous outreach agents", "CRM integration", "Lead scoring engine"],
    timeline: "14 Days",
    pricing: "From $4,997/mo",
    icon: Zap,
    color: "text-cyan-accent",
    bg: "bg-cyan-accent/10"
  },
  {
    title: "AI Customer Support Agent",
    outcome: "90% reduction in manual tickets",
    deliverables: ["Custom LLM training", "Omnichannel integration", "Human-handoff protocol", "Sentiment analysis"],
    timeline: "14 Days",
    pricing: "From $2,997/mo",
    icon: Bot,
    color: "text-purple-accent",
    bg: "bg-purple-accent/10"
  },
  {
    title: "Full AI Automation Infrastructure",
    outcome: "Replace entire operational teams",
    deliverables: ["End-to-end workflow audit", "Custom internal AI tools", "Automated reporting", "Ongoing AI optimization"],
    timeline: "30 Days",
    pricing: "Custom Quote",
    icon: Cpu,
    color: "text-blue-accent",
    bg: "bg-blue-accent/10"
  }
];

export const ProductizedServices: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-32 relative overflow-hidden bg-black/40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-white/10 mb-6">
            <Cpu className="w-4 h-4 text-cyan-accent" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-300">Productized Offers</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none">
            Elite <span className="text-gradient">AI Systems</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            We don't sell hours. We sell outcomes. Choose the AI infrastructure that scales your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12">
          {services.map((service, i) => (
            <div key={i} className="relative p-6 md:p-10 rounded-3xl md:rounded-[60px] glass-dark border-white/5 apple-shadow flex flex-col justify-between group hover:border-cyan-accent/20 transition-all duration-500">
              <div>
                <div className={cn("w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-10 apple-shadow", service.bg)}>
                  <service.icon className={cn("w-6 h-6 md:w-8 md:h-8", service.color)} />
                </div>
                <h3 className="text-xl md:text-3xl font-black uppercase tracking-tighter mb-3 md:mb-4 text-white">{service.title}</h3>
                <div className="text-[8px] md:text-xs font-bold text-cyan-accent uppercase tracking-widest mb-6 md:mb-8">{service.outcome}</div>
                
                <ul className="space-y-3 md:space-y-6 mb-8 md:mb-12">
                  {service.deliverables.map((item, j) => (
                    <li key={j} className="flex items-center space-x-3 md:space-x-4 text-gray-400">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-cyan-accent/50 flex-shrink-0" />
                      <span className="text-xs md:text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 md:pt-10 border-t border-white/5">
                <div className="flex justify-between items-center mb-6 md:mb-8">
                  <div>
                    <div className="text-[8px] md:text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Timeline</div>
                    <div className="text-sm md:text-lg font-bold text-white">{service.timeline}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[8px] md:text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Investment</div>
                    <div className="text-sm md:text-lg font-bold text-white">{service.pricing}</div>
                  </div>
                </div>
                <button className="w-full bg-white text-black py-4 md:py-5 rounded-xl md:rounded-3xl font-bold text-sm md:text-lg hover:bg-cyan-accent hover:text-white transition-all flex items-center justify-center space-x-3 apple-shadow">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
