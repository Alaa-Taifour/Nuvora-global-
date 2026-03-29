import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Send, 
  Copy, 
  Download, 
  RefreshCw, 
  Check, 
  Zap, 
  Bot, 
  Cpu, 
  Globe, 
  Search, 
  ShieldCheck,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { GoogleGenAI } from "@google/genai";

export const Generator: React.FC = () => {
  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [output, setOutput] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setIsGenerating(true);
    setOutput(null);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [{ role: 'user', parts: [{ text: `Generate a detailed AI automation strategy for the following business challenge: ${input}. 
        Format the response with clear headings, bullet points, and an estimated ROI section. 
        Keep the tone professional, elite, and strategic.` }] }],
      });

      setOutput(response.text || "I'm sorry, I couldn't generate a strategy at this time.");
    } catch (error) {
      console.error('Generation error:', error);
      setOutput("An error occurred while generating your strategy. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link to="/dashboard" className="p-3 rounded-2xl glass hover:bg-white/10 transition-all text-gray-400 hover:text-white">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <div className="text-cyan-accent font-black uppercase tracking-[0.3em] text-[10px] mb-2 flex items-center space-x-2">
              <Cpu size={12} className="animate-pulse" />
              <span>Neural Processing Engine</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">AI <span className="text-gradient">Strategist</span></h1>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <div className="px-4 py-2 rounded-xl glass border-white/10 flex items-center space-x-2">
            <Zap size={14} className="text-yellow-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Model:</span>
            <span className="text-xs font-black text-white">Nuvora-v4-Ultra</span>
          </div>
        </div>
      </header>

      {/* Input Section */}
      <section className="relative">
        <div className="p-10 rounded-[50px] glass-dark border-white/5 apple-shadow relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-accent via-purple-accent to-transparent opacity-50" />
          
          <div className="flex flex-col space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black uppercase tracking-tighter flex items-center space-x-3">
                <Sparkles className="text-cyan-accent" size={20} />
                <span>Define Your Objective</span>
              </h3>
              <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">2,450 Credits Available</div>
            </div>
            
            <div className="relative">
              <textarea 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your business challenge or automation goal in detail..."
                className="w-full bg-white/[0.03] border border-white/10 rounded-[32px] p-8 min-h-[200px] text-lg font-medium outline-none focus:border-cyan-accent/50 focus:bg-white/[0.05] transition-all resize-none placeholder:text-gray-600"
              />
              <div className="absolute bottom-6 right-6 flex items-center space-x-3">
                <button 
                  onClick={handleGenerate}
                  disabled={isGenerating || !input.trim()}
                  className="px-10 py-5 bg-white text-black rounded-2xl font-black uppercase tracking-tighter apple-shadow hover:bg-cyan-accent hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-3 group"
                >
                  {isGenerating ? (
                    <RefreshCw size={20} className="animate-spin" />
                  ) : (
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  )}
                  <span>{isGenerating ? 'Processing...' : 'Generate Strategy'}</span>
                </button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {['Scale Operations', 'Reduce Headcount', 'Optimize Lead Gen', 'Customer Support AI'].map((tag) => (
                <button 
                  key={tag}
                  onClick={() => setInput(tag)}
                  className="px-4 py-2 rounded-xl glass border-white/5 text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-cyan-accent hover:border-cyan-accent/30 transition-all"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Output Section */}
      <AnimatePresence mode="wait">
        {isGenerating && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-12 rounded-[50px] glass-dark border-white/5 apple-shadow flex flex-col items-center justify-center space-y-8 min-h-[400px]"
          >
            <div className="relative">
              <div className="w-24 h-24 border-4 border-white/5 border-t-cyan-accent rounded-full animate-spin glow-primary" />
              <Bot className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-cyan-accent animate-pulse" />
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-black uppercase tracking-tighter">Analyzing Infrastructure</div>
              <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] animate-pulse">Neural networks are processing your request...</div>
            </div>
            
            {/* Shimmer Skeletons */}
            <div className="w-full max-w-2xl space-y-4 pt-8">
              <div className="h-4 bg-white/5 rounded-full w-full shimmer" />
              <div className="h-4 bg-white/5 rounded-full w-[90%] shimmer" />
              <div className="h-4 bg-white/5 rounded-full w-[95%] shimmer" />
              <div className="h-4 bg-white/5 rounded-full w-[80%] shimmer" />
            </div>
          </motion.div>
        )}

        {output && !isGenerating && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-12 rounded-[50px] glass-dark border-white/5 apple-shadow relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 flex items-center space-x-3">
              <button 
                onClick={handleCopy}
                className="p-3 rounded-xl glass border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-all relative group"
              >
                {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-navy-800 text-[10px] font-bold uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {copied ? 'Copied!' : 'Copy'}
                </span>
              </button>
              <button className="p-3 rounded-xl glass border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-all relative group">
                <Download size={18} />
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-navy-800 text-[10px] font-bold uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Download
                </span>
              </button>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="text-cyan-accent font-black uppercase tracking-[0.3em] text-[10px] mb-8">Generation Complete</div>
              <div className="whitespace-pre-wrap font-medium text-gray-300 leading-relaxed text-lg">
                {output}
              </div>
            </div>
            
            <div className="mt-12 pt-12 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-navy-950 bg-white/10 flex items-center justify-center text-[10px] font-bold">
                      AI
                    </div>
                  ))}
                </div>
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Verified by Neural Engine</div>
              </div>
              <button 
                onClick={() => { setOutput(null); setInput(''); }}
                className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors flex items-center space-x-2"
              >
                <RefreshCw size={14} />
                <span>Start New Generation</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
