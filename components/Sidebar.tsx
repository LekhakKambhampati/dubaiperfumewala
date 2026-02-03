import React from 'react';
import { ViewState } from '../types';
import { LayoutDashboard, PieChart, TrendingUp, Lightbulb, Target } from 'lucide-react';

interface SidebarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, setView }) => {
  const menuItems = [
    { id: ViewState.OVERVIEW, icon: <LayoutDashboard size={20} />, label: 'Brand Overview' },
    { id: ViewState.FINANCIALS, icon: <PieChart size={20} />, label: 'Financials & Pricing' },
    { id: ViewState.STRATEGY, icon: <Target size={20} />, label: 'Strategy' },
    { id: ViewState.MARKETING, icon: <TrendingUp size={20} />, label: 'Marketing Channels' },
    { id: ViewState.VISION, icon: <Lightbulb size={20} />, label: 'Legacy Vision' },
  ];

  return (
    <div className="w-64 bg-slate-900 text-white h-screen flex-shrink-0 flex flex-col fixed left-0 top-0 border-r border-slate-800 shadow-2xl z-50">
      {/* Brand Logo Section */}
      <div className="p-6 border-b border-slate-800 bg-slate-950">
        <div className="flex items-center gap-3">
            {/* Abstract representation of the DPW circular mark */}
            <div className="w-10 h-10 rounded-full border border-gold-500/50 flex items-center justify-center bg-slate-900 shrink-0 relative overflow-hidden group shadow-lg shadow-gold-900/20">
                <div className="absolute inset-0 bg-gold-400/5 rounded-full group-hover:bg-gold-400/20 transition-colors"></div>
                <span className="font-serif font-black text-gold-500 text-xs italic tracking-tighter z-10 relative top-[1px]">DPW</span>
                {/* Decorative curve to mimic the logo flourish */}
                <div className="absolute -bottom-1 left-0 w-full h-1/2 border-t border-gold-500/20 rounded-[100%] transform -rotate-12"></div>
            </div>
            
            <div className="flex flex-col justify-center">
                <h1 className="text-xl font-serif font-bold text-white tracking-wide leading-none drop-shadow-sm">DUBAI</h1>
                <p className="text-[0.6rem] font-medium text-gold-500 tracking-[0.25em] uppercase leading-tight mt-1 ml-[1px]">Perfume Wala</p>
            </div>
        </div>
        
        {/* Dashboard Status Badge */}
        <div className="mt-5 flex items-center gap-2 px-3 py-1.5 bg-slate-900 rounded border border-slate-800">
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
             <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Strategic Dashboard</p>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setView(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group relative overflow-hidden ${
              currentView === item.id 
                ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-slate-950 shadow-lg shadow-gold-500/20' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <span className={`${currentView === item.id ? 'text-slate-900' : 'text-slate-500 group-hover:text-gold-400 transition-colors'}`}>
                {item.icon}
            </span>
            <span className="relative z-10">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-slate-800 bg-slate-950">
        <div className="text-xs text-slate-500 flex flex-col gap-1">
          <p className="font-medium text-slate-400">Confidential Report</p>
          <p className="opacity-50">Internal Distribution Only</p>
        </div>
      </div>
    </div>
  );
};