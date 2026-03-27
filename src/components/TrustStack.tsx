import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star, CheckCircle2, Linkedin, Twitter, Github } from 'lucide-react';

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1200px-Slack_Technologies_Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1024px-OpenAI_Logo.svg.png",
];

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "COO at FinTech Global",
    content: "Nuvora didn't just automate our support; they replaced a 12-person team with a system that has 98% accuracy. The ROI was instant.",
    image: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "Marcus Chen",
    role: "Founder of ScaleUp SaaS",
    content: "The AI Lead Gen system they built generates more qualified meetings in a week than our SDRs did in a month. Truly game-changing.",
    image: "https://picsum.photos/seed/marcus/100/100"
  }
];

export const TrustStack: React.FC = () => {
  return (
    <section className="py-32 bg-navy-950 overflow-hidden">
      <div className="container mx-auto px-8">
        {/* Logo Marquee */}
        <div className="mb-32">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500 mb-12">
            Powering Systems for Global Industry Leaders
          </p>
          <div className="relative flex overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap py-12 items-center">
              {[...logos, ...logos].map((logo, i) => (
                <img 
                  key={i} 
                  src={logo} 
                  alt="Partner" 
                  className="h-8 md:h-10 mx-16 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-navy-950 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-navy-950 to-transparent z-10" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Case Studies */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full glass border-white/10">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">Success Stories</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none">
              Proven <span className="text-gradient">Results</span> <br />
              In 14 Days
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 rounded-[40px] glass border-white/5 apple-shadow">
                <div className="text-4xl font-black text-cyan-accent mb-2">+300%</div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Lead Volume</div>
              </div>
              <div className="p-8 rounded-[40px] glass border-white/5 apple-shadow">
                <div className="text-4xl font-black text-purple-accent mb-2">-70%</div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Manual Work</div>
              </div>
            </div>

            <div className="space-y-6">
              {testimonials.map((t, i) => (
                <div key={i} className="p-8 rounded-[40px] glass-dark border-white/5 apple-shadow relative">
                  <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5" />
                  <p className="text-lg text-gray-300 mb-6 italic leading-relaxed">"{t.content}"</p>
                  <div className="flex items-center space-x-4">
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full grayscale" referrerPolicy="no-referrer" />
                    <div>
                      <div className="font-black uppercase text-sm">{t.name}</div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Founder Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[60px] overflow-hidden apple-shadow aspect-[4/5]">
              <img 
                src="https://picsum.photos/seed/founder/800/1000" 
                alt="Founder" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12">
                <div className="glass p-8 rounded-[40px] border-white/10 apple-shadow">
                  <div className="text-[10px] font-bold text-cyan-accent uppercase tracking-[0.3em] mb-4">Founder & CEO</div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Alaa Taifour</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    "We don't just sell software. We architect the future of work. Our mission is to liberate human potential by automating the mundane."
                  </p>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-white/60">
                      <CheckCircle2 className="w-4 h-4 text-cyan-accent" />
                      <span>Ex-Google Architect</span>
                    </div>
                    <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-white/60">
                      <CheckCircle2 className="w-4 h-4 text-cyan-accent" />
                      <span>AI Systems Specialist</span>
                    </div>
                  </div>
                  <div className="mt-8 flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-cyan-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
                    <a href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-cyan-accent transition-colors"><Twitter className="w-5 h-5" /></a>
                    <a href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-cyan-accent transition-colors"><Github className="w-5 h-5" /></a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
