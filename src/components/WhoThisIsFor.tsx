import React from 'react';
import { motion } from 'motion/react';
import { Building2, Rocket, ShoppingBag, CheckCircle2, Globe, Laptop, ShoppingCart } from 'lucide-react';
import { cn } from '../lib/utils';

const audiences = [
  {
    title: "SaaS & Tech",
    description: "Scale your user base 10x without adding a single support agent. We build autonomous onboarding and retention systems.",
    icon: Rocket,
    color: "text-cyan-accent",
    bg: "bg-cyan-accent/10"
  },
  {
    title: "Agencies",
    description: "Replace your entire SDR and fulfillment team with AI. Automate lead generation and client reporting with 99% accuracy.",
    icon: Building2,
    color: "text-purple-accent",
    bg: "bg-purple-accent/10"
  },
  {
    title: "E-commerce",
    description: "Handle 10,000+ support tickets daily with zero human intervention. Automate inventory management and personalized marketing.",
    icon: ShoppingBag,
    color: "text-white",
    bg: "bg-white/10"
  }
];

export const WhoThisIsFor: React.FC = () => {
  return (
    <section className="py-32 bg-navy-950 relative">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-white/10 mb-6">
            <CheckCircle2 className="w-4 h-4 text-cyan-accent" />
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">Ideal Partners</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 leading-none">Who We <span className="text-gradient">Automate</span></h2>
          <p className="text-gray-400 font-medium max-w-2xl mx-auto">We partner with high-growth companies that are ready to replace manual operations with elite AI infrastructure.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((target, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group p-12 rounded-[60px] glass border-white/5 hover:border-white/20 transition-all duration-500 apple-shadow flex flex-col items-center text-center"
            >
              <div className={cn("w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 apple-shadow", target.bg)}>
                <target.icon className={cn("w-10 h-10", target.color)} />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">{target.title}</h3>
              <p className="text-gray-400 leading-relaxed font-medium mb-8">{target.description}</p>
              <div className="mt-auto pt-8 border-t border-white/5 w-full">
                <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-accent">10x Efficiency Gain</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
