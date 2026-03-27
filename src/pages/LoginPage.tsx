import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider, signInWithPopup } from '../lib/firebase';
import { Rocket, Chrome } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-accent/10 rounded-full blur-[160px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-md p-10 rounded-[48px] glass-dark border-white/10 apple-shadow text-center"
      >
        <div className="flex justify-center mb-10">
          <div className="w-20 h-20 bg-gradient-accent rounded-[24px] flex items-center justify-center rotate-12 apple-shadow">
            <Rocket className="w-12 h-12 text-white -rotate-12" />
          </div>
        </div>

        <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-4">Launch <br /> <span className="text-gradient">Nuvora</span></h2>
        <p className="text-gray-400 mb-12 font-medium">Access your elite AI-powered agency command center.</p>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center space-x-4 bg-white text-black py-5 rounded-2xl font-bold hover:bg-cyan-accent hover:text-white transition-all duration-500 group apple-shadow"
        >
          <Chrome className="w-6 h-6" />
          <span>Continue with Google</span>
        </button>

        <p className="mt-10 text-[10px] text-gray-600 uppercase tracking-[0.2em] font-bold">
          Secure • Production Ready • Strategic
        </p>
      </motion.div>
    </div>
  );
};
