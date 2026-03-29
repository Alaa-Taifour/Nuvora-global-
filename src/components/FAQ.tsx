import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How long does it take to deploy a system?",
    answer: "Our standard deployment timeline is 14 days. This includes the initial audit, architecture design, integration, and final testing. More complex enterprise infrastructures may take up to 30 days."
  },
  {
    question: "Will AI really replace my entire team?",
    answer: "Our systems are designed to automate repetitive, high-volume tasks that currently require human intervention. While it may not replace every role, it typically allows companies to scale 10x without adding headcount, or reduce operational costs by up to 70%."
  },
  {
    question: "Is my data secure with Nuvora?",
    answer: "Security is our top priority. We build on enterprise-grade infrastructure with end-to-end encryption. We also offer on-premise deployment options for companies with strict data residency requirements."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We specialize in high-growth SaaS, E-commerce, and Professional Service agencies. Any business with high-volume digital operations can benefit from our AI systems."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-32 bg-navy-950">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-white/10 mb-6">
            <HelpCircle className="w-4 h-4 text-cyan-accent" />
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">Common Questions</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">Addressing Your <span className="text-gradient">Objections</span></h2>
          <p className="text-sm md:text-base text-gray-400 font-medium">Everything you need to know before architecting your AI future.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl md:rounded-[32px] glass-dark border-white/5 overflow-hidden apple-shadow">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 md:px-10 py-6 md:py-8 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-base md:text-xl font-black uppercase tracking-tight pr-4">{faq.question}</span>
                {openIndex === i ? <Minus className="w-5 h-5 md:w-6 md:h-6 text-cyan-accent flex-shrink-0" /> : <Plus className="w-5 h-5 md:w-6 md:h-6 text-gray-500 flex-shrink-0" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 md:px-10 pb-6 md:pb-8 text-sm md:text-base text-gray-400 leading-relaxed font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
