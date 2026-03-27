import React, { useState, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { TopNavbar } from './TopNavbar';
import { CursorGlow } from './CursorGlow';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

export const DashboardLayout: React.FC = () => {
  const { user, loading } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen bg-navy-950 flex flex-col items-center justify-center text-white space-y-8">
        <div className="w-16 h-16 border-4 border-white/5 border-t-cyan-accent rounded-full animate-spin glow-primary" />
        <div className="text-xl font-black uppercase tracking-widest text-gray-400 animate-pulse">Initializing Systems...</div>
      </div>
    );
  }

  if (!user) return <Navigate to="/login" />;

  return (
    <div 
      className="min-h-screen bg-navy-950 text-white selection:bg-cyan-accent selection:text-black bg-mesh overflow-hidden"
      style={{ '--sidebar-width': isCollapsed ? '80px' : '280px' } as React.CSSProperties}
    >
      <CursorGlow />
      
      {/* Sidebar */}
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Main Content Area */}
      <div 
        className="transition-all duration-300 min-h-screen flex flex-col"
        style={{ marginLeft: 'var(--sidebar-width)' }}
      >
        <TopNavbar />
        
        <main className="flex-1 pt-20 p-8 overflow-y-auto relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={window.location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer / Status Bar */}
        <footer className="h-12 border-t border-white/5 px-8 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-gray-500 bg-black/20 backdrop-blur-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span>All Systems Operational</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-cyan-accent rounded-full" />
              <span>v2.4.0-stable</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-cyan-accent transition-colors">Documentation</a>
            <a href="#" className="hover:text-cyan-accent transition-colors">Support</a>
            <span>© 2026 Nuvora AI Agency</span>
          </div>
        </footer>
      </div>
    </div>
  );
};
