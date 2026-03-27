import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bell, Search, User, LogOut, Settings, CreditCard, ChevronDown } from 'lucide-react';
import { useAuth } from '../AuthContext';
import { auth, signOut } from '../../lib/firebase';
import { useNavigate } from 'react-router-dom';

export const TopNavbar: React.FC = () => {
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <header className="h-20 fixed top-0 right-0 left-0 lg:left-[var(--sidebar-width)] z-30 glass-dark border-b border-white/5 px-8 flex items-center justify-between transition-all duration-300">
      {/* Search Bar */}
      <div className="flex-1 max-w-md hidden md:block">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-cyan-accent transition-colors" />
          <input 
            type="text" 
            placeholder="Search AI Tools, Reports, Settings..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-2.5 pl-12 pr-4 text-sm font-medium outline-none focus:border-cyan-accent/50 focus:bg-white/[0.08] transition-all"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center space-x-6">
        {/* Credits Badge */}
        <div className="hidden sm:flex items-center space-x-3 px-4 py-2 rounded-full glass border-white/10 apple-shadow">
          <div className="w-2 h-2 bg-cyan-accent rounded-full animate-pulse glow-primary" />
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Credits:</span>
          <span className="text-xs font-black text-white">2,450</span>
        </div>

        {/* Notifications */}
        <div className="relative">
          <button 
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            className="p-2.5 rounded-xl hover:bg-white/5 text-gray-400 hover:text-white transition-all relative"
          >
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-purple-accent rounded-full border-2 border-navy-950 glow-purple" />
          </button>
          
          <AnimatePresence>
            {isNotificationsOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 mt-4 w-80 glass-dark border border-white/10 rounded-3xl p-6 apple-shadow z-50"
              >
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-sm font-black uppercase tracking-widest">Notifications</h4>
                  <button className="text-[10px] font-bold text-cyan-accent uppercase tracking-widest hover:underline">Mark all read</button>
                </div>
                <div className="space-y-4">
                  {[
                    { title: "AI Audit Complete", time: "2m ago", type: "success" },
                    { title: "New Lead Generated", time: "15m ago", type: "info" },
                    { title: "System Update", time: "1h ago", type: "warning" }
                  ].map((n, i) => (
                    <div key={i} className="p-3 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/5">
                      <div className="text-sm font-bold mb-1">{n.title}</div>
                      <div className="text-[10px] text-gray-500 uppercase font-bold">{n.time}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center space-x-3 p-1.5 pr-3 rounded-2xl hover:bg-white/5 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 group-hover:border-cyan-accent transition-colors apple-shadow">
              {profile?.photoURL ? (
                <img src={profile.photoURL} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gradient-accent flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
            <div className="hidden md:block text-left">
              <div className="text-sm font-black text-white leading-none mb-1">{profile?.displayName?.split(' ')[0]}</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none">Pro Plan</div>
            </div>
            <ChevronDown size={14} className={cn("text-gray-500 transition-transform", isProfileOpen ? "rotate-180" : "")} />
          </button>

          <AnimatePresence>
            {isProfileOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 mt-4 w-64 glass-dark border border-white/10 rounded-3xl p-4 apple-shadow z-50 overflow-hidden"
              >
                <div className="space-y-1">
                  {[
                    { label: "Profile Settings", icon: Settings, path: "/dashboard/settings" },
                    { label: "Billing & Plans", icon: CreditCard, path: "/dashboard/billing" },
                    { label: "Refer a Friend", icon: User, path: "/dashboard/refer" }
                  ].map((item) => (
                    <button 
                      key={item.label}
                      className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-400 hover:text-white transition-all text-sm font-bold uppercase tracking-widest"
                    >
                      <item.icon size={18} />
                      <span>{item.label}</span>
                    </button>
                  ))}
                  <div className="h-px bg-white/5 my-2" />
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-red-500/10 text-red-500 transition-all text-sm font-black uppercase tracking-widest"
                  >
                    <LogOut size={18} />
                    <span>Logout</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

// Helper for class names
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
