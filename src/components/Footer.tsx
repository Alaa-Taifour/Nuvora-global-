import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Linkedin, Twitter, Github, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-24 bg-navy-950 border-t border-white/5">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <Rocket className="w-8 h-8 text-cyan-accent" />
              <span className="text-2xl font-black uppercase tracking-tighter">Nuvora</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Architecting the future of work through elite AI systems. We replace entire teams with autonomous infrastructure.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-cyan-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-cyan-accent transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-cyan-accent transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">Solutions</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-500 hover:text-cyan-accent transition-colors font-bold uppercase tracking-widest">AI Lead Gen</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-cyan-accent transition-colors font-bold uppercase tracking-widest">Support Agents</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-cyan-accent transition-colors font-bold uppercase tracking-widest">Infrastructure</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-cyan-accent transition-colors font-bold uppercase tracking-widest">Strategy Audit</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-500 hover:text-cyan-accent transition-colors font-bold uppercase tracking-widest">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-cyan-accent transition-colors font-bold uppercase tracking-widest">Case Studies</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-cyan-accent transition-colors font-bold uppercase tracking-widest">Careers</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-cyan-accent transition-colors font-bold uppercase tracking-widest">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-cyan-accent" />
                <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">hello@nuvora.ai</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-cyan-accent" />
                <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">+1 (888) NUVORA-AI</span>
              </li>
              <li className="flex items-center space-x-4">
                <MapPin className="w-5 h-5 text-cyan-accent" />
                <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">© 2026 Nuvora AI Agency. All rights reserved.</p>
          <div className="flex space-x-12">
            <a href="#" className="text-[10px] font-bold text-gray-500 hover:text-cyan-accent transition-colors uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-[10px] font-bold text-gray-500 hover:text-cyan-accent transition-colors uppercase tracking-widest">Terms of Service</a>
            <a href="#" className="text-[10px] font-bold text-gray-500 hover:text-cyan-accent transition-colors uppercase tracking-widest">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
