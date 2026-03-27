import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, User, Database, CheckCircle, ArrowRight, Activity, Zap, Shield, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

const steps = [
  { id: 'lead', label: 'Inbound Lead', icon: User, color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { id: 'ai', label: 'Nuvora AI Agent', icon: Bot, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
  { id: 'crm', label: 'CRM Sync', icon: Database, color: 'text-purple-400', bg: 'bg-purple-400/10' },
  { id: 'revenue', label: 'Revenue Generated', icon: CheckCircle, color: 'text-green-400', bg: 'bg-green-400/10' },
];

export const LiveDemo: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="demo" className="py-32 relative overflow-hidden bg-black/40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-white/10 mb-6">
            <Activity className="w-4 h-4 text-cyan-accent" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-300">Interactive Workflow</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            The <span className="text-gradient">AI Command</span> Center
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Watch how Nuvora automates your entire sales funnel from lead capture to revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Workflow Visualization */}
          <div className="relative p-8 rounded-[48px] glass-dark border-white/5 apple-shadow min-h-[500px] flex flex-col justify-between">
            <div className="absolute inset-0 z-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]" />
            </div>

            <div className="relative z-10 space-y-12">
              {steps.map((step, i) => (
                <div key={step.id} className="relative flex items-center space-x-6">
                  <motion.div
                    animate={{
                      scale: activeStep === i ? 1.1 : 1,
                      opacity: activeStep === i ? 1 : 0.4,
                    }}
                    className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500",
                      activeStep === i ? step.bg : "bg-white/5"
                    )}
                  >
                    <step.icon className={cn("w-8 h-8", activeStep === i ? step.color : "text-gray-600")} />
                  </motion.div>
                  
                  <div className="flex-1">
                    <motion.h3
                      animate={{ opacity: activeStep === i ? 1 : 0.4 }}
                      className="text-xl font-bold text-white uppercase tracking-tight"
                    >
                      {step.label}
                    </motion.h3>
                    <motion.p
                      animate={{ opacity: activeStep === i ? 1 : 0 }}
                      className="text-sm text-gray-400"
                    >
                      {i === 0 && "Lead captured from landing page or social."}
                      {i === 1 && "AI qualifies lead and schedules a call instantly."}
                      {i === 2 && "Data synced to your CRM with full context."}
                      {i === 3 && "Conversion tracked and revenue attributed."}
                    </motion.p>
                  </div>

                  {i < steps.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-12 bg-white/5 overflow-hidden">
                      <motion.div
                        animate={{
                          top: activeStep === i ? "0%" : "-100%",
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-cyan-accent to-transparent"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* AI Chat Preview */}
          <div className="relative rounded-[48px] overflow-hidden glass-dark border-white/10 apple-shadow h-[500px] flex flex-col">
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/5">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Nuvora AI Agent • Live</div>
            </div>
            
            <div className="flex-1 p-6 space-y-6 overflow-y-auto font-mono text-sm">
              <div className="flex space-x-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0"><User className="w-4 h-4 text-gray-400" /></div>
                <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5 text-gray-300">
                  "I'm interested in your AI automation services for my e-commerce brand."
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="flex space-x-3"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-accent/20 flex items-center justify-center flex-shrink-0"><Bot className="w-4 h-4 text-cyan-accent" /></div>
                <div className="bg-cyan-accent/5 p-4 rounded-2xl rounded-tl-none border border-cyan-accent/20 text-cyan-50">
                  "Great! I've analyzed your store. You could save ~40 hours/week by automating customer support. Would you like to see a custom ROI projection?"
                </div>
              </motion.div>

              <div className="flex space-x-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0"><User className="w-4 h-4 text-gray-400" /></div>
                <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5 text-gray-300">
                  "Yes, please. How fast can we implement this?"
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 }}
                className="flex space-x-3"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-accent/20 flex items-center justify-center flex-shrink-0"><Bot className="w-4 h-4 text-cyan-accent" /></div>
                <div className="bg-cyan-accent/5 p-4 rounded-2xl rounded-tl-none border border-cyan-accent/20 text-cyan-50">
                  "We can have your core system live in 14 days. I've sent a calendar link to your email. Let's build your future."
                </div>
              </motion.div>
            </div>

            <div className="p-4 bg-white/5 border-t border-white/5">
              <div className="w-full h-10 bg-white/5 rounded-xl border border-white/10 flex items-center px-4">
                <span className="text-gray-600">Type a message...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
