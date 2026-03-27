import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, ArrowRight, Bot, CheckCircle2, Loader2, Sparkles, TrendingUp, Clock, BarChart3 } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  company: string;
  revenue: string;
  bottleneck: string;
};

export const AIAuditFunnel: React.FC = () => {
  const [step, setStep] = useState<'form' | 'analyzing' | 'results'>('form');
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStep('analyzing');
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 4000));
    setStep('results');
  };

  const renderStep = () => {
    switch (step) {
      case 'form':
        return (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-white/10 mb-6">
                <Zap className="w-4 h-4 text-cyan-accent" />
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">Free Efficiency Audit</span>
              </div>
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 leading-none">Analyze Your <span className="text-gradient">Potential</span></h2>
              <p className="text-gray-400 font-medium">Discover exactly how much revenue you're leaving on the table by not using AI.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-4">Full Name</label>
                  <input {...register('name', { required: true })} className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-4 focus:outline-none focus:border-cyan-accent transition-all text-white" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-4">Business Email</label>
                  <input {...register('email', { required: true })} className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-4 focus:outline-none focus:border-cyan-accent transition-all text-white" placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-4">Current Monthly Revenue</label>
                <select {...register('revenue')} className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-4 focus:outline-none focus:border-cyan-accent transition-all appearance-none text-white">
                  <option value="0-10k" className="bg-navy-900">$0 - $10k</option>
                  <option value="10k-50k" className="bg-navy-900">$10k - $50k</option>
                  <option value="50k-250k" className="bg-navy-900">$50k - $250k</option>
                  <option value="250k+" className="bg-navy-900">$250k+</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-4">Biggest Operational Bottleneck</label>
                <textarea {...register('bottleneck')} className="w-full bg-white/5 border border-white/10 rounded-[32px] px-8 py-4 focus:outline-none focus:border-cyan-accent transition-all h-32 text-white" placeholder="e.g. Lead generation, customer support, manual data entry..." />
              </div>
              <button type="submit" className="w-full bg-white text-black py-6 rounded-full text-xl font-black uppercase tracking-tighter hover:bg-cyan-accent hover:text-white transition-all apple-shadow flex items-center justify-center space-x-4">
                <span>Run AI Diagnostic</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </form>
          </motion.div>
        );
      case 'analyzing':
        return (
          <motion.div
            key="analyzing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-2xl mx-auto text-center py-20"
          >
            <div className="relative w-32 h-32 mx-auto mb-12">
              <div className="absolute inset-0 border-4 border-cyan-accent/20 rounded-full" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-4 border-t-cyan-accent rounded-full"
              />
              <Bot className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-cyan-accent" />
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-8">Nuvora AI is analyzing your infrastructure...</h3>
            <div className="space-y-4 max-w-md mx-auto">
              {[
                "Scanning operational bottlenecks...",
                "Calculating potential ROI multipliers...",
                "Architecting custom automation roadmap...",
                "Finalizing efficiency report..."
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.8 }}
                  className="flex items-center space-x-4 text-[10px] font-bold uppercase tracking-widest text-gray-500"
                >
                  <div className="w-1.5 h-1.5 bg-cyan-accent rounded-full" />
                  <span>{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      case 'results':
        return (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-dark border-white/10 rounded-[60px] p-12 apple-shadow overflow-hidden relative">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <BarChart3 className="w-64 h-64" />
              </div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
                  <div>
                    <div className="text-cyan-accent font-bold uppercase tracking-[0.3em] mb-2">Audit Complete</div>
                    <h3 className="text-5xl font-black uppercase tracking-tighter">Your AI <span className="text-gradient">Roadmap</span></h3>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Efficiency Score</div>
                    <div className="text-4xl font-black text-white">42/100</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                  <div className="p-8 rounded-[40px] glass border-white/5">
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Potential Savings</div>
                    <div className="text-4xl font-black text-white">$12,400<span className="text-sm text-gray-500">/mo</span></div>
                  </div>
                  <div className="p-8 rounded-[40px] glass border-white/5">
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Time Reclaimed</div>
                    <div className="text-4xl font-black text-cyan-accent">140<span className="text-sm text-gray-500">hrs/mo</span></div>
                  </div>
                  <div className="p-8 rounded-[40px] glass border-white/5">
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">ROI Multiplier</div>
                    <div className="text-4xl font-black text-purple-accent">8.4x</div>
                  </div>
                </div>

                <div className="bg-cyan-accent/10 border border-cyan-accent/20 rounded-[40px] p-10 mb-16">
                  <h4 className="text-xl font-black uppercase tracking-tight mb-4 flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-cyan-accent" />
                    <span>Primary Recommendation</span>
                  </h4>
                  <p className="text-gray-300 leading-relaxed font-medium">
                    Based on your bottleneck in <span className="text-white font-bold">"{watch('bottleneck') || 'manual operations'}"</span>, we recommend deploying an <span className="text-cyan-accent font-bold">Autonomous Operations Agent</span>. This system will handle 85% of these manual tasks, allowing your team to focus on high-leverage growth.
                  </p>
                </div>

                <div className="text-center">
                  <button className="bg-white text-black px-12 py-6 rounded-full text-xl font-black uppercase tracking-tighter hover:bg-cyan-accent hover:text-white transition-all apple-shadow flex items-center justify-center space-x-4 mx-auto mb-6">
                    <span>Book Strategy Session</span>
                    <ArrowRight className="w-6 h-6" />
                  </button>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Limited Availability: 3 Spots Left for April</p>
                </div>
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <section id="audit" className="py-32 bg-navy-950 relative overflow-hidden">
      <div className="container mx-auto px-8 relative z-10">
        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>
      </div>
      
      {/* Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-purple-accent/5 rounded-full blur-[200px] -z-10" />
    </section>
  );
};
