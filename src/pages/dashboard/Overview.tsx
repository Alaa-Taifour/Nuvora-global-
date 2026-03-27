import React from 'react';
import { motion } from 'motion/react';
import { useAuth } from '../../components/AuthContext';
import { 
  TrendingUp, 
  Users, 
  Zap, 
  ShieldCheck, 
  ArrowUpRight, 
  Search, 
  Globe, 
  MessageSquare,
  Sparkles,
  Bot
} from 'lucide-react';
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

const stats = [
  { label: "Revenue", value: "$42,500", change: "+12.5%", icon: TrendingUp, color: "text-cyan-accent", bg: "bg-cyan-accent/10" },
  { label: "Active Users", value: "1,284", change: "+8.2%", icon: Users, color: "text-purple-accent", bg: "bg-purple-accent/10" },
  { label: "AI Tasks", value: "8,492", change: "+24.1%", icon: Zap, color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { label: "Security", value: "100%", change: "Optimal", icon: ShieldCheck, color: "text-green-500", bg: "bg-green-500/10" }
];

const quickActions = [
  { title: "AI Audit", desc: "Run a full infrastructure scan.", icon: ShieldCheck, color: "from-cyan-accent to-blue-500" },
  { title: "SEO Scan", desc: "Analyze URL performance.", icon: Search, color: "from-purple-accent to-pink-500" },
  { title: "Brand Kit", desc: "Generate visual identity.", icon: Globe, color: "from-orange-500 to-red-500" },
  { title: "Chatbot", desc: "Configure support agent.", icon: Bot, color: "from-green-500 to-emerald-500" }
];

export const Overview: React.FC = () => {
  const { profile } = useAuth();

  return (
    <div className="space-y-10">
      {/* Welcome Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="text-cyan-accent font-black uppercase tracking-[0.3em] text-[10px] mb-3 flex items-center space-x-2">
            <Sparkles size={12} className="animate-pulse" />
            <span>Agency Command Center</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Welcome, <span className="text-gradient">{profile?.displayName?.split(' ')[0]}</span>
          </h1>
          <p className="text-gray-500 font-medium mt-4 max-w-xl">Your AI systems are performing optimally. We've detected 3 new optimization opportunities for your workflows.</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="px-8 py-4 bg-white text-black rounded-2xl font-black uppercase tracking-tighter apple-shadow hover:bg-cyan-accent hover:text-white transition-all flex items-center space-x-2">
            <Zap size={18} />
            <span>Upgrade Plan</span>
          </button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="p-8 rounded-[40px] glass-dark border-white/5 apple-shadow group relative overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 ${stat.bg} blur-3xl opacity-20 group-hover:opacity-40 transition-opacity`} />
            <div className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center mb-6`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div className="flex items-end justify-between mb-2">
              <div className="text-4xl font-black tracking-tighter">{stat.value}</div>
              <div className={`text-[10px] font-black uppercase tracking-widest ${stat.change.startsWith('+') ? 'text-green-500' : 'text-gray-500'}`}>
                {stat.change}
              </div>
            </div>
            <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Growth Analytics */}
        <div className="lg:col-span-2 space-y-8">
          <section className="p-10 rounded-[50px] glass-dark border-white/5 apple-shadow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-accent via-purple-accent to-transparent opacity-50" />
            <div className="flex items-center justify-between mb-10">
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tighter">Growth Analytics</h3>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Real-time performance metrics</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 bg-cyan-accent rounded-full" />
                  <span>Revenue</span>
                </div>
                <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-[10px] font-black uppercase tracking-widest outline-none hover:bg-white/10 transition-colors">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                </select>
              </div>
            </div>
            
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4EE5E5" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#4EE5E5" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    stroke="#ffffff20" 
                    fontSize={10} 
                    tickLine={false} 
                    axisLine={false} 
                    tick={{ fill: '#666', fontWeight: 700 }}
                  />
                  <YAxis 
                    stroke="#ffffff20" 
                    fontSize={10} 
                    tickLine={false} 
                    axisLine={false} 
                    tick={{ fill: '#666', fontWeight: 700 }}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0A1428', border: '1px solid #ffffff10', borderRadius: '24px', padding: '16px' }}
                    itemStyle={{ color: '#4EE5E5', fontWeight: 900, textTransform: 'uppercase', fontSize: '12px' }}
                    cursor={{ stroke: '#ffffff10', strokeWidth: 2 }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#4EE5E5" 
                    strokeWidth={4} 
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                    animationDuration={2000}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Quick Actions */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-black uppercase tracking-tighter">Instant Tools</h3>
              <button className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-accent hover:underline">View All Tools</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {quickActions.map((action, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-8 rounded-[40px] glass border-white/5 hover:border-white/20 transition-all cursor-pointer group relative overflow-hidden"
                >
                  <div className={`absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br ${action.color} blur-3xl opacity-10 group-hover:opacity-30 transition-opacity`} />
                  <div className="flex items-start justify-between mb-8">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${action.color} flex items-center justify-center apple-shadow group-hover:scale-110 transition-transform duration-500`}>
                      <action.icon className="w-7 h-7 text-white" />
                    </div>
                    <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors" size={20} />
                  </div>
                  <h4 className="text-2xl font-black uppercase tracking-tighter mb-2">{action.title}</h4>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">{action.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-8">
          {/* AI Strategist Widget */}
          <section className="p-10 rounded-[50px] bg-gradient-accent text-white apple-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -mr-32 -mt-32 group-hover:scale-110 transition-transform duration-700" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-3xl bg-white/20 backdrop-blur-xl flex items-center justify-center mb-8 apple-shadow">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-4 leading-none">AI<br/>Strategist</h3>
              <p className="font-bold opacity-80 leading-relaxed mb-10 text-sm">Your personal consultant is ready to optimize your agency workflows.</p>
              <button className="w-full bg-white text-black py-5 rounded-2xl font-black uppercase tracking-tighter hover:bg-black hover:text-white transition-all apple-shadow">
                Start Session
              </button>
            </div>
          </section>

          {/* Recent Activity */}
          <section className="p-10 rounded-[50px] glass-dark border-white/5 apple-shadow">
            <h3 className="text-xl font-black uppercase tracking-tighter mb-8">System Logs</h3>
            <div className="space-y-8">
              {[
                { title: "Security Audit", time: "10m ago", icon: ShieldCheck, color: "text-green-500" },
                { title: "New Lead", time: "2h ago", icon: Users, color: "text-cyan-accent" },
                { title: "Task Completed", time: "5h ago", icon: Zap, color: "text-yellow-500" },
                { title: "API Updated", time: "1d ago", icon: Sparkles, color: "text-purple-accent" }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-5 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-colors">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-black uppercase tracking-tight group-hover:text-cyan-accent transition-colors">{item.title}</div>
                    <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-1">{item.time}</div>
                  </div>
                  <ArrowUpRight className="text-gray-700 opacity-0 group-hover:opacity-100 transition-all" size={14} />
                </div>
              ))}
            </div>
            <button className="w-full mt-10 py-4 border border-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest text-gray-500 hover:bg-white/5 hover:text-white transition-all">
              View All Logs
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};
