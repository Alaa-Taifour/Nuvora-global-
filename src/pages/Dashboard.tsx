import React from 'react';
import { motion } from 'motion/react';
import { useAuth } from '../components/AuthContext';
import { Navigate, Link } from 'react-router-dom';
import { LayoutDashboard, MessageSquare, Briefcase, Settings, TrendingUp, Users, Clock, Zap, Search, Globe, ShieldCheck } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: 'Mon', value: 400 },
  { name: 'Tue', value: 300 },
  { name: 'Wed', value: 600 },
  { name: 'Thu', value: 800 },
  { name: 'Fri', value: 500 },
  { name: 'Sat', value: 900 },
  { name: 'Sun', value: 1100 },
];

export const Dashboard: React.FC = () => {
  const { user, profile, loading } = useAuth();

  if (loading) return <div className="min-h-screen bg-navy-900 flex items-center justify-center text-white">Loading...</div>;
  if (!user) return <Navigate to="/login" />;

  return (
    <div className="min-h-screen bg-navy-900 text-white pt-20 md:pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="text-cyan-accent font-bold uppercase tracking-widest text-[10px] md:text-xs mb-2">Agency Command Center</div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Welcome, <span className="text-gradient">{profile?.displayName?.split(' ')[0]}</span>
            </h1>
          </motion.div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">System Status</div>
              <div className="text-xs md:text-sm font-bold text-green-500 flex items-center justify-end space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>All Systems Operational</span>
              </div>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {[
            { label: "Revenue", value: "$42.5K", icon: TrendingUp, color: "text-cyan-accent" },
            { label: "Users", value: "1.2K", icon: Users, color: "text-purple-accent" },
            { label: "AI Tasks", value: "8.4K", icon: Zap, color: "text-yellow-500" },
            { label: "Security", value: "100%", icon: ShieldCheck, color: "text-green-500" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-4 md:p-8 rounded-2xl md:rounded-[32px] glass-dark border-white/5 apple-shadow"
            >
              <stat.icon className={`w-5 h-5 md:w-8 md:h-8 ${stat.color} mb-2 md:mb-4`} />
              <div className="text-xl md:text-3xl font-black mb-1">{stat.value}</div>
              <div className="text-[8px] md:text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart */}
          <div className="lg:col-span-2 space-y-8">
            <section className="p-6 md:p-8 rounded-3xl md:rounded-[40px] glass-dark border-white/5 apple-shadow">
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <h3 className="text-lg md:text-2xl font-bold uppercase tracking-tight">Growth Analytics</h3>
                <select className="bg-white/5 border border-white/10 rounded-lg md:rounded-xl px-2 md:px-4 py-1 md:py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest outline-none">
                  <option>7 Days</option>
                  <option>30 Days</option>
                </select>
              </div>
              <div className="h-[200px] md:h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4EE5E5" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#4EE5E5" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                    <XAxis dataKey="name" stroke="#ffffff20" fontSize={10} tickLine={false} axisLine={false} />
                    <YAxis stroke="#ffffff20" fontSize={10} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0A1428', border: '1px solid #ffffff10', borderRadius: '12px', fontSize: '10px' }}
                      itemStyle={{ color: '#4EE5E5' }}
                    />
                    <Area type="monotone" dataKey="value" stroke="#4EE5E5" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </section>

            {/* Instant Tools */}
            <section>
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-6">Instant Tools</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  { title: "SEO Analyzer", icon: Search, desc: "Instant audit of any URL for SEO performance." },
                  { title: "Brand Identity", icon: Globe, desc: "Generate color palettes and typography sets." }
                ].map((tool, i) => (
                  <div key={i} className="p-6 rounded-2xl md:rounded-3xl glass hover:bg-white/10 transition-all cursor-pointer group">
                    <tool.icon className="w-8 h-8 md:w-10 md:h-10 text-cyan-accent mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg md:text-xl font-bold mb-2 uppercase tracking-tight">{tool.title}</h4>
                    <p className="text-xs md:text-sm text-gray-400">{tool.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <section className="p-6 md:p-8 rounded-3xl md:rounded-[40px] bg-gradient-accent text-white apple-shadow">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4">AI Strategist</h3>
              <p className="text-sm md:text-base font-medium mb-6 md:mb-8 opacity-90 leading-relaxed">Your personal AI consultant is ready to help you optimize your agency workflows.</p>
              <Link to="/chat" className="block w-full bg-black text-white text-center py-4 md:py-5 rounded-xl md:rounded-2xl font-bold hover:scale-[1.02] transition-transform text-sm md:text-base">
                Start Strategy Session
              </Link>
            </section>

            <section className="p-6 md:p-8 rounded-3xl md:rounded-[40px] glass-dark border-white/5">
              <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight mb-6">Recent Activity</h3>
              <div className="space-y-4 md:space-y-6">
                {[
                  { title: "Security Audit", time: "10m ago", icon: ShieldCheck },
                  { title: "New Lead", time: "2h ago", icon: Users },
                  { title: "Task Completed", time: "5h ago", icon: Zap }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white/5 flex items-center justify-center">
                      <item.icon className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                    </div>
                    <div>
                      <div className="text-xs md:text-sm font-bold">{item.title}</div>
                      <div className="text-[8px] md:text-[10px] text-gray-500 uppercase font-bold">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
