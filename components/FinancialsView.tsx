import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts';
import { PRICING_DATA, BUNDLE_DATA, UNIT_ECONOMICS } from '../constants';
import { ShoppingBag, TrendingUp, DollarSign } from 'lucide-react';

export const FinancialsView: React.FC = () => {
  const totalASP = UNIT_ECONOMICS.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="space-y-6">
      
      {/* Top Row: Unit Economics & Pricing Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Unit Economics Pie */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 font-serif">Unit Economics (per 50ml)</h3>
                <p className="text-sm text-slate-500 mb-4">Based on ₹{totalASP} Average Selling Price</p>
            </div>
            <div className="h-64 w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                    data={UNIT_ECONOMICS}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    >
                    {UNIT_ECONOMICS.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                    </Pie>
                    <Tooltip formatter={(value: number) => `₹${value}`} />
                    <Legend />
                </PieChart>
                </ResponsiveContainer>
                {/* Center Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none pb-6">
                   <div className="text-center">
                     <p className="text-xs text-slate-400 font-bold uppercase">Total ASP</p>
                     <p className="text-xl font-serif font-bold text-slate-800">₹{totalASP}</p>
                   </div>
                </div>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                {UNIT_ECONOMICS.map((item, idx) => {
                    const percentage = Math.round((item.value / totalASP) * 100);
                    return (
                        <div key={idx} className={`text-center ${idx === 1 ? 'border-l border-slate-100' : ''}`}>
                             <p className={`text-2xl font-bold ${item.name === 'Gross Margin' ? 'text-emerald-500' : 'text-red-500'}`}>
                                {percentage}%
                             </p>
                             <p className="text-lg font-bold text-slate-800">₹{item.value}</p>
                             <p className="text-xs text-slate-500 uppercase tracking-wider">{item.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>

        {/* Pricing Architecture Bar Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-6 font-serif">Channel-Wise Pricing Architecture</h3>
            <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                <BarChart data={PRICING_DATA} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                    <XAxis type="number" domain={[0, 1500]} hide />
                    <YAxis dataKey="channel" type="category" width={140} tick={{fontSize: 12, fill: '#475569'}} />
                    <Tooltip 
                        cursor={{fill: '#f8fafc'}}
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Bar dataKey="price" fill="#d97706" radius={[0, 4, 4, 0]} barSize={40}>
                        {
                            PRICING_DATA.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={index === 0 ? '#10b981' : '#d97706'} />
                            ))
                        }
                    </Bar>
                </BarChart>
                </ResponsiveContainer>
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center">*Green indicates Loyalty/Member pricing strategy for owned shops.</p>
        </div>
      </div>

      {/* Bundle Strategy */}
      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
        <h3 className="text-lg font-bold text-slate-800 mb-6 font-serif flex items-center gap-2">
            <ShoppingBag className="text-gold-600" /> Bundle Strategy
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {BUNDLE_DATA.map((bundle, idx) => (
                <div key={idx} className="bg-white p-5 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                    <div className="absolute top-0 right-0 h-16 w-16 bg-gold-100 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                    <div className="relative z-10">
                        <h4 className="font-bold text-slate-800 text-lg">{bundle.name}</h4>
                        <p className="text-2xl font-serif text-gold-600 my-2">₹{bundle.price.toLocaleString()}</p>
                        <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">
                            {bundle.useCase}
                        </span>
                    </div>
                </div>
            ))}
        </div>
      </div>

    </div>
  );
};