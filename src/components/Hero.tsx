import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Rocket, Shield, Zap, Cpu, ArrowRight, Globe, BarChart3, Mail, Phone, MapPin, Github, Linkedin, Twitter, Bot, Sparkles, Activity, TrendingUp, User } from 'lucide-react';
import { cn } from '../lib/utils';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
      {/* Left Pane: Content (7 cols) */}
      <div className="relative z-10 lg:col-span-7 flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24 md:pt-32 pb-16 md:pb-20 bg-navy-950">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 hidden lg:block">
          <div className="rail-text">NUVORA SYSTEMS — ARCHITECTING THE FUTURE</div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full glass border-white/10 mb-8 md:mb-12">
            <div className="w-2 h-2 bg-cyan-accent rounded-full animate-ping" />
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Next-Gen AI Infrastructure</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[140px] font-black tracking-tighter uppercase leading-[0.9] md:leading-[0.8] mb-8 md:mb-12">
            AI That <br />
            <span className="text-gradient">Replaces</span> <br />
            <span className="text-white">Entire Teams</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-400 mb-10 md:mb-16 font-medium leading-tight tracking-tight max-w-xl">
            We don't just build bots. We architect autonomous systems that handle sales, support, and operations while you sleep.
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-8">
            <Link to="/login" className="group relative bg-white text-black px-8 md:px-12 py-4 md:py-6 rounded-full text-lg md:text-xl font-black uppercase tracking-tighter flex items-center justify-center space-x-4 hover:bg-cyan-accent hover:text-white transition-all duration-700 apple-shadow overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-accent to-purple-accent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <span className="relative z-10">See Live Demo</span>
              <ArrowRight className="relative z-10 w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-3 transition-transform" />
            </Link>
            <a href="#audit" className="px-8 md:px-12 py-4 md:py-6 rounded-full text-lg md:text-xl font-black uppercase tracking-tighter glass hover:bg-white/10 transition-all border border-white/10 apple-shadow text-center">
              Get Free AI Audit
            </a>
          </div>

          <div className="mt-16 md:mt-24 pt-8 md:pt-12 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-12">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map(i => (
                <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-navy-950 apple-shadow" referrerPolicy="no-referrer" />
              ))}
            </div>
            <div>
              <div className="text-base md:text-lg font-black text-white">500+ Systems Deployed</div>
              <div className="text-[8px] md:text-[10px] font-bold text-gray-500 uppercase tracking-widest">Trusted by $100M+ Global Brands</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Pane: Visuals (5 cols) */}
      <div className="relative lg:col-span-5 bg-navy-900 overflow-hidden hidden lg:flex items-center justify-center border-l border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-accent/5 rounded-full blur-[200px] animate-pulse" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-xl px-8"
        >
          {/* Floating Feature Bubbles */}
          <div className="absolute -top-32 -left-10 animate-float" style={{ animationDelay: '0s' }}>
            <div className="glass p-8 rounded-[40px] apple-shadow rotate-[-8deg] border-cyan-accent/20">
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan-accent/20 flex items-center justify-center"><Bot className="w-8 h-8 text-cyan-accent" /></div>
                <div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Autonomous Agent</div>
                  <div className="text-lg font-black">NUVORA_V4</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-20 -right-10 animate-float" style={{ animationDelay: '3s' }}>
            <div className="glass p-8 rounded-[40px] apple-shadow rotate-[6deg] border-purple-accent/20">
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-accent/20 flex items-center justify-center"><TrendingUp className="w-8 h-8 text-purple-accent" /></div>
                <div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Performance</div>
                  <div className="text-lg font-black">+840% ROI</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-[80px] glass-dark border-white/10 apple-shadow overflow-hidden p-3">
            <div className="bg-navy-950 rounded-[77px] overflow-hidden border border-white/5">
              <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/5">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500/50 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500/50 rounded-full" />
                    <div className="w-3 h-3 bg-green-500/50 rounded-full" />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">Command Center</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-green-500">Live</span>
                </div>
              </div>
              <div className="p-12">
                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div className="p-8 rounded-[32px] glass-dark border-white/5">
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Revenue</div>
                    <div className="text-3xl font-black">$2.4M</div>
                  </div>
                  <div className="p-8 rounded-[32px] glass-dark border-white/5">
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Savings</div>
                    <div className="text-3xl font-black text-cyan-accent">$840K</div>
                  </div>
                </div>
                <div className="h-48 rounded-[40px] glass-dark border-white/5 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-accent/10 to-transparent animate-shimmer" />
                  <div className="flex items-center space-x-10 relative z-10">
                    <div className="w-12 h-12 rounded-xl glass flex items-center justify-center"><User className="w-6 h-6 text-gray-500" /></div>
                    <div className="w-2 h-2 bg-cyan-accent rounded-full animate-ping" />
                    <div className="w-20 h-20 rounded-3xl bg-cyan-accent/20 border border-cyan-accent/40 flex items-center justify-center apple-shadow"><Bot className="w-10 h-10 text-cyan-accent" /></div>
                    <div className="w-2 h-2 bg-cyan-accent rounded-full animate-ping" />
                    <div className="w-12 h-12 rounded-xl glass flex items-center justify-center"><TrendingUp className="w-6 h-6 text-gray-500" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
