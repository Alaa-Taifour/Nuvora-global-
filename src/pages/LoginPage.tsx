import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider, signInWithPopup } from '../lib/firebase';
import { Rocket, Chrome, AlertCircle } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleGoogleLogin = async () => {
    setError(null);
    setIsLoggingIn(true);
    try {
      googleProvider.setCustomParameters({ prompt: 'select_account' });
      await signInWithPopup(auth, googleProvider);
      navigate('/dashboard');
    } catch (error: any) {
      console.error('Login failed:', error);
      if (error.code === 'auth/popup-blocked') {
        setError('Popup blocked. Please allow popups for this site.');
      } else if (error.code === 'auth/cancelled-popup-request') {
        setError('Login cancelled.');
      } else {
        setError('Login failed. Please try again.');
      }
    } finally {
      setIsLoggingIn(false);
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
        className="relative z-10 w-full max-w-md p-6 md:p-10 rounded-3xl md:rounded-[48px] glass-dark border-white/10 apple-shadow text-center"
      >
        <div className="flex justify-center mb-8 md:mb-10">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-accent rounded-2xl md:rounded-[24px] flex items-center justify-center rotate-12 apple-shadow">
            <Rocket className="w-10 h-10 md:w-12 md:h-12 text-white -rotate-12" />
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Launch <br /> <span className="text-gradient">Nuvora</span></h2>
        <p className="text-sm md:text-base text-gray-400 mb-8 md:mb-12 font-medium px-4">Access your elite AI-powered agency command center.</p>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold flex items-center justify-center space-x-2"
          >
            <AlertCircle className="w-4 h-4" />
            <span>{error}</span>
          </motion.div>
        )}

        <button
          onClick={handleGoogleLogin}
          disabled={isLoggingIn}
          className="w-full flex items-center justify-center space-x-4 bg-white text-black py-4 md:py-5 rounded-2xl font-bold hover:bg-cyan-accent hover:text-white transition-all duration-500 group apple-shadow disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoggingIn ? (
            <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <Chrome className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-sm md:text-base">Continue with Google</span>
            </>
          )}
        </button>

        <p className="mt-8 md:mt-10 text-[8px] md:text-[10px] text-gray-600 uppercase tracking-[0.2em] font-bold">
          Secure • Production Ready • Strategic
        </p>
      </motion.div>
    </div>
  );
};
