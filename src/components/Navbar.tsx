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
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 lg:px-8 py-6',
      isScrolled ? 'py-4' : 'py-8'
    )}>
      <div className={cn(
        'container mx-auto px-6 py-3 rounded-full transition-all duration-500 flex items-center justify-between max-w-7xl',
        isScrolled ? 'glass-dark apple-shadow border-white/10' : 'bg-transparent border-transparent'
      )}>
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center group-hover:bg-cyan-accent transition-colors duration-500 apple-shadow">
            <Rocket className="w-6 h-6 text-black" />
          </div>
          <span className="text-2xl font-black uppercase tracking-tighter text-white">Nuvora</span>
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
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-4 glass-dark rounded-[40px] p-10 border-white/10 apple-shadow lg:hidden"
          >
            <div className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-black uppercase tracking-tighter text-white hover:text-cyan-accent"
                >
                  {link.name}
                </a>
              ))}
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-black uppercase tracking-tighter text-white hover:text-cyan-accent"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-2xl font-black uppercase tracking-tighter text-red-500 text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-white text-black px-8 py-5 rounded-full text-xl font-black uppercase tracking-tighter text-center"
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
