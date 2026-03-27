import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Zap, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  Rocket,
  Search,
  Globe,
  ShieldCheck,
  CreditCard,
  History
} from 'lucide-react';
import { cn } from '../../lib/utils';

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

const menuItems = [
  { name: 'Overview', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'AI Strategist', icon: MessageSquare, path: '/chat' },
  { name: 'SEO Analyzer', icon: Search, path: '/dashboard/seo' },
  { name: 'Brand Identity', icon: Globe, path: '/dashboard/brand' },
  { name: 'Security Audit', icon: ShieldCheck, path: '/dashboard/security' },
  { name: 'Transactions', icon: History, path: '/dashboard/history' },
  { name: 'Billing', icon: CreditCard, path: '/dashboard/billing' },
  { name: 'Settings', icon: Settings, path: '/dashboard/settings' },
];

export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, setIsCollapsed }) => {
  const location = useLocation();

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 80 : 280 }}
      className="fixed left-0 top-0 h-screen glass-dark border-r border-white/5 z-40 flex flex-col"
    >
      {/* Logo Area */}
      <div className="p-6 flex items-center justify-between">
        <AnimatePresence mode="wait">
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="flex items-center space-x-3"
            >
              <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black uppercase tracking-tighter text-white">Nuvora</span>
            </motion.div>
          )}
          {isCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto"
            >
              <Rocket className="w-5 h-5 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
        
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 rounded-lg hover:bg-white/5 text-gray-400 transition-colors"
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex items-center space-x-3 px-4 py-3 rounded-xl transition-all group relative",
                isActive ? "text-white bg-white/5" : "text-gray-400 hover:text-white hover:bg-white/[0.02]"
              )}
            >
              {isActive && (
                <motion.div 
                  layoutId="active-pill"
                  className="absolute left-0 w-1 h-6 bg-cyan-accent rounded-r-full glow-primary"
                />
              )}
              <item.icon className={cn(
                "w-5 h-5 transition-transform group-hover:scale-110",
                isActive ? "text-cyan-accent" : "text-gray-500"
              )} />
              {!isCollapsed && (
                <span className="text-sm font-bold uppercase tracking-widest">{item.name}</span>
              )}
              
              {/* Tooltip for collapsed state */}
              {isCollapsed && (
                <div className="absolute left-full ml-4 px-3 py-2 bg-navy-800 border border-white/10 rounded-lg text-xs font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                  {item.name}
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Profile/Credits */}
      <div className="p-4 border-t border-white/5">
        <div className={cn(
          "p-4 rounded-2xl glass border-white/5 flex items-center gap-3",
          isCollapsed ? "justify-center" : ""
        )}>
          <div className="w-8 h-8 rounded-full bg-purple-accent/20 flex items-center justify-center text-purple-accent">
            <Zap size={16} />
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">Credits</div>
              <div className="text-sm font-black text-white">2,450 <span className="text-[10px] text-gray-500">/ 5,000</span></div>
            </div>
          )}
        </div>
      </div>
    </motion.aside>
  );
};
