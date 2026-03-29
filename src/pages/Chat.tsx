import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../components/AuthContext';
import { Navigate } from 'react-router-dom';
import { Send, Bot, User, Loader2, Sparkles, Rocket, ChevronLeft } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { db, collection, addDoc, query, where, onSnapshot, serverTimestamp, handleFirestoreError, OperationType } from '../lib/firebase';

export const Chat: React.FC = () => {
  const { user, profile, loading: authLoading } = useAuth();
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!user) return;

    const path = `users/${user.uid}/conversations`;
    const unsubscribe = onSnapshot(
      collection(db, 'users', user.uid, 'conversations'), 
      (snapshot) => {
        const msgs: any[] = [];
        snapshot.forEach((doc) => {
          msgs.push({ id: doc.id, ...doc.data() });
        });
        setMessages(msgs.sort((a, b) => (a.timestamp?.seconds || 0) - (b.timestamp?.seconds || 0)));
      },
      (error) => {
        handleFirestoreError(error, OperationType.GET, path);
      }
    );

    return () => unsubscribe();
  }, [user]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (authLoading) return <div className="min-h-screen bg-navy-900 flex items-center justify-center text-white">Loading...</div>;
  if (!user) return <Navigate to="/login" />;

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    const path = `users/${user.uid}/conversations`;
    setInput('');
    setIsTyping(true);

    try {
      await addDoc(collection(db, 'users', user.uid, 'conversations'), {
        userId: user.uid,
        role: 'user',
        content: userMessage,
        timestamp: serverTimestamp()
      });

      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [{ role: 'user', parts: [{ text: userMessage }] }],
        config: {
          systemInstruction: "You are Nuvora AI, a world-class business consultant. Your goal is to help users scale their digital agencies. Be professional, strategic, and concise. Use the Nuvora color palette (Cyan and Purple) in your descriptions if relevant."
        }
      });

      const aiContent = response.text || "I'm sorry, I couldn't process that request.";

      await addDoc(collection(db, 'users', user.uid, 'conversations'), {
        userId: user.uid,
        role: 'assistant',
        content: aiContent,
        timestamp: serverTimestamp()
      });

    } catch (error) {
      console.error('Chat error:', error);
      if (error instanceof Error && error.message.includes('permission')) {
        handleFirestoreError(error, OperationType.WRITE, path);
      }
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="min-h-screen bg-navy-900 text-white flex flex-col pt-20">
      {/* Header */}
      <div className="p-6 glass-dark border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-accent rounded-2xl flex items-center justify-center apple-shadow">
            <Bot className="w-7 h-7 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold uppercase tracking-tight">Nuvora AI Consultant</h2>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-accent rounded-full animate-pulse" />
              <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Strategic Intelligence Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8 max-w-4xl mx-auto w-full scroll-smooth">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-6 opacity-30">
            <Rocket className="w-20 h-20 text-cyan-accent" />
            <div>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">Strategy Session</h3>
              <p className="max-w-xs mx-auto font-medium">How can I help you scale your agency today?</p>
            </div>
          </div>
        )}

        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div
              key={msg.id || i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex space-x-4 max-w-[90%] md:max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center apple-shadow ${msg.role === 'user' ? 'bg-white text-black' : 'bg-gradient-accent text-white'}`}>
                  {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                </div>
                <div className={`p-6 rounded-[32px] ${msg.role === 'user' ? 'bg-white/10 text-white rounded-tr-none' : 'glass-dark text-gray-200 rounded-tl-none'}`}>
                  <p className="leading-relaxed whitespace-pre-wrap text-sm md:text-base">{msg.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isTyping && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center">
                <Loader2 className="w-5 h-5 text-white animate-spin" />
              </div>
              <div className="p-6 rounded-[32px] glass-dark text-gray-500 italic text-sm">
                Nuvora is architecting a response...
              </div>
            </div>
          </motion.div>
        )}
        <div ref={scrollRef} />
      </div>

      {/* Input Area */}
      <div className="p-6 glass-dark border-t border-white/5 safe-bottom">
        <form onSubmit={handleSend} className="max-w-4xl mx-auto relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about agency growth..."
            className="w-full bg-white/5 border border-white/10 rounded-3xl py-5 pl-8 pr-20 focus:outline-none focus:border-cyan-accent transition-all text-white placeholder:text-gray-600 apple-shadow"
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="absolute right-3 top-3 bottom-3 px-6 bg-white text-black rounded-2xl font-bold hover:bg-cyan-accent hover:text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};
