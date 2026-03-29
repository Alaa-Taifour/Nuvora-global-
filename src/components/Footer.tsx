import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Linkedin, Twitter, Github, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 md:py-24 bg-navy-950 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-24">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6 md:mb-8">
              <Rocket className="w-6 h-6 md:w-8 md:h-8 text-cyan-accent" />
              <span className="text-xl md:text-2xl font-black uppercase tracking-tighter">Nuvora</span>
            </div>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6 md:mb-8">
              Architecting the future of work through elite AI systems. We replace entire teams with autonomous infrastructure.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-cyan-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-cyan-accent transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-cyan-accent transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-6 md:mb-8">Solutions</h4>
            <ul className="space-y-3 md:space-y-4">
              <li><a href="#" className="text-xs md:text-sm text-gray-500 hover:text-cyan-accent transition-colors font-bold uppercase tracking-widest">AI Lead Gen</a></li>
              <li><a href="#" className="text-xs md:text-sm text-gray-500 hover:text-cyan-accent transition-colors font-bold uppercase tracking-widest">Support Agents</a></li>
              <li><a href="#" className="text-xs md:text-sm text-gray-500 hover:text-cyan-accent transition-colors font-bold uppercase tracking-widest">Infrastructure</a></li>
              <li><a href="#" className="text-xs md:text-sm text-gray-500 hover:text-cyan-accent transition-colors font-bold uppercase tracking-widest">Strategy Audit</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-6 md:mb-8">Company</h4>
            <ul className="space-y-3 md:space-y-4">
              <li><a href="#" className="text-xs md:text-sm text-gray-500 hover:text-cyan-accent transition-colors font-bold uppercase tracking-widest">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-cyan-accent transition-colors font-bold uppercase tracking-widest">Case Studies</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-cyan-accent transition-colors font-bold uppercase tracking-widest">Careers</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-cyan-accent transition-colors font-bold uppercase tracking-widest">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-6 md:mb-8">Contact</h4>
            <ul className="space-y-4 md:space-y-6">
              <li className="flex items-center space-x-4">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-cyan-accent" />
                <span className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-widest">hello@nuvora.ai</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-cyan-accent" />
                <span className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-widest">+1 (888) NUVORA-AI</span>
              </li>
              <li className="flex items-center space-x-4">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-cyan-accent" />
                <span className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-widest">San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <p className="text-[8px] md:text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center md:text-left">© 2026 Nuvora AI Agency. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <a href="#" className="text-[8px] md:text-[10px] font-bold text-gray-500 hover:text-cyan-accent transition-colors uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-[8px] md:text-[10px] font-bold text-gray-500 hover:text-cyan-accent transition-colors uppercase tracking-widest">Terms of Service</a>
            <a href="#" className="text-[8px] md:text-[10px] font-bold text-gray-500 hover:text-cyan-accent transition-colors uppercase tracking-widest">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
