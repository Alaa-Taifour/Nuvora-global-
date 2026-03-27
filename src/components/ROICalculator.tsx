import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, TrendingUp, DollarSign, Clock, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export const ROICalculator: React.FC = () => {
  const [employees, setEmployees] = useState(10);
  const [avgSalary, setAvgSalary] = useState(60000);
  const [automationEfficiency, setAutomationEfficiency] = useState(40);

  const currentCost = employees * avgSalary;
  const savings = currentCost * (automationEfficiency / 100);
  const newCost = currentCost - savings;

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-white/10 mb-6">
              <Calculator className="w-4 h-4 text-purple-accent" />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-300">ROI Calculator</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
              Calculate Your <span className="text-gradient">AI Savings</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Discover how much you can save by implementing Nuvora's AI systems. Our clients typically see a 30-60% reduction in manual operational costs within the first 90 days.
            </p>
            
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex justify-between text-sm font-bold uppercase tracking-widest text-gray-500">
                  <span>Number of Employees</span>
                  <span className="text-white">{employees}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={employees}
                  onChange={(e) => setEmployees(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/5 rounded-lg appearance-none cursor-pointer accent-cyan-accent"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm font-bold uppercase tracking-widest text-gray-500">
                  <span>Average Annual Salary</span>
                  <span className="text-white">${avgSalary.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="30000"
                  max="200000"
                  step="5000"
                  value={avgSalary}
                  onChange={(e) => setAvgSalary(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/5 rounded-lg appearance-none cursor-pointer accent-purple-accent"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm font-bold uppercase tracking-widest text-gray-500">
                  <span>Automation Efficiency (%)</span>
                  <span className="text-white">{automationEfficiency}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="90"
                  value={automationEfficiency}
                  onChange={(e) => setAutomationEfficiency(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/5 rounded-lg appearance-none cursor-pointer accent-cyan-accent"
                />
              </div>
            </div>
          </div>

          <div className="relative p-12 rounded-[60px] glass-dark border-white/10 apple-shadow overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <TrendingUp className="w-40 h-40 text-cyan-accent" />
            </div>

            <div className="relative z-10 space-y-12">
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Current Operational Cost</div>
                <div className="text-5xl font-black text-white">${currentCost.toLocaleString()}</div>
              </div>

              <div className="p-8 rounded-[40px] bg-gradient-accent apple-shadow">
                <div className="text-xs font-bold text-white/70 uppercase tracking-widest mb-2">Estimated Annual Savings</div>
                <div className="text-6xl font-black text-white">${savings.toLocaleString()}</div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">New Operational Cost</div>
                  <div className="text-3xl font-black text-cyan-accent">${newCost.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Time Saved / Year</div>
                  <div className="text-3xl font-black text-purple-accent">{(employees * 2000 * (automationEfficiency / 100)).toLocaleString()} hrs</div>
                </div>
              </div>

              <button className="w-full bg-white text-black py-6 rounded-3xl font-bold text-xl hover:bg-cyan-accent hover:text-white transition-all flex items-center justify-center space-x-3 apple-shadow">
                <span>Get Full AI Audit</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
