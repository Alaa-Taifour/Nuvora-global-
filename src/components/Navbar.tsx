import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { auth, signOut } from '../lib/firebase';
import { LogOut, User, MessageSquare, LayoutDashboard, Rocket, Menu, X, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export const Navbar: React.FC = () => {
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Solutions', path: '/#services', icon: LayoutDashboard, auth: false },
    { name: 'Case Studies', path: '/#trust', icon: Briefcase, auth: false },
    { name: 'AI Audit', path: '/#audit', icon: MessageSquare, auth: false },
  ];

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8 py-4 md:py-6',
      isScrolled ? 'py-2 md:py-4' : 'py-4 md:py-8'
    )}>
      <div className={cn(
        'container mx-auto px-4 md:px-6 py-2 md:py-3 rounded-full transition-all duration-500 flex items-center justify-between max-w-7xl',
        isScrolled ? 'glass-dark apple-shadow border-white/10' : 'bg-transparent border-transparent'
      )}>
        <Link to="/" className="flex items-center space-x-2 md:space-x-3 group">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg md:rounded-xl flex items-center justify-center group-hover:bg-cyan-accent transition-colors duration-500 apple-shadow">
            <Rocket className="w-5 h-5 md:w-6 md:h-6 text-black" />
          </div>
          <span className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white">Nuvora</span>
          <span className="hidden sm:inline-block text-[8px] font-black uppercase tracking-widest text-cyan-accent/50 border border-cyan-accent/20 px-1.5 py-0.5 rounded-sm">v1.1</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-cyan-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          {user ? (
            <div className="flex items-center space-x-6 pl-6 border-l border-white/10">
              <Link to="/dashboard" className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-colors">Dashboard</Link>
              <button onClick={handleLogout} className="text-gray-400 hover:text-red-500 transition-colors">
                <LogOut className="w-5 h-5" />
              </button>
              <Link to="/dashboard" className="w-10 h-10 rounded-full overflow-hidden border border-white/20 hover:border-cyan-accent transition-colors apple-shadow">
                {profile?.photoURL ? (
                  <img src={profile.photoURL} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-white/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                )}
              </Link>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-white text-black px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-cyan-accent hover:text-white transition-all apple-shadow"
            >
              Client Portal
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6 md:w-8 md:h-8" /> : <Menu className="w-6 h-6 md:w-8 md:h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-full left-4 right-4 mt-2 glass-dark rounded-3xl p-6 border-white/10 apple-shadow lg:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-black uppercase tracking-tighter text-white hover:text-cyan-accent py-2"
                >
                  {link.name}
                </a>
              ))}
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-black uppercase tracking-tighter text-white hover:text-cyan-accent py-2"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-lg font-black uppercase tracking-tighter text-red-500 text-left py-2"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-white text-black px-8 py-4 rounded-2xl text-base font-black uppercase tracking-tighter text-center mt-4"
                >
                  Client Portal
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
