import React from 'react';
import { MetricCard } from './MetricCard';
import { TARGET_AUDIENCE, USP_PILLARS } from '../constants';
import { Users, MapPin, Target, Gem, Clock, ShieldCheck } from 'lucide-react';

export const OverviewView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard 
          title="Total SKUs" 
          value="50" 
          subtext="Focus on 5-7 Hero Scents" 
          icon={<Gem size={24} />}
        />
        <MetricCard 
          title="Avg Selling Price" 
          value="₹950" 
          subtext="~63% Gross Margin" 
          icon={<Target size={24} />}
        />
        <MetricCard 
          title="Bottle Size" 
          value="30ml & 50ml" 
          subtext="Parfum Concentration" 
          icon={<Users size={24} />}
        />
        <MetricCard 
          title="Primary Market" 
          value="India" 
          subtext="Mumbai, Pune, Bangalore" 
          icon={<MapPin size={24} />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Value Proposition */}
        <div className="lg:col-span-2 bg-slate-900 text-white rounded-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Gem size={120} />
          </div>
          <h2 className="text-2xl font-serif font-bold mb-4 text-gold-400">Core Value Proposition</h2>
          <p className="text-xl italic mb-6">"One Spray. All Day. Dubai-style perfumes built for Indian weather."</p>
          <div className="space-y-4 text-slate-300">
            <p>
              Solving the biggest problem for Indian consumers: <strong className="text-white">Lack of longevity</strong> in heat and humidity.
              Positioned as a long-term legacy brand, not a short-term dupe business.
            </p>
          </div>
        </div>

        {/* Target Audience Profile */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Users className="text-gold-600" /> Target Profile
          </h3>
          <ul className="space-y-3">
            <li className="flex justify-between border-b border-slate-50 pb-2">
              <span className="text-slate-500">Gender</span>
              <span className="font-medium">{TARGET_AUDIENCE.gender}</span>
            </li>
            <li className="flex justify-between border-b border-slate-50 pb-2">
              <span className="text-slate-500">Age</span>
              <span className="font-medium">{TARGET_AUDIENCE.age}</span>
            </li>
            <li className="flex justify-between border-b border-slate-50 pb-2">
              <span className="text-slate-500">Motivation</span>
              <span className="font-medium text-right text-sm max-w-[150px]">{TARGET_AUDIENCE.motivation}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Differentiation Pillars */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-6 font-serif">Differentiation Strategy</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {USP_PILLARS.map((pillar, idx) => (
            <div key={idx} className="bg-slate-50 p-5 rounded-lg border-l-4 border-gold-500">
              <div className="flex items-center gap-2 mb-2 text-slate-800 font-bold">
                {idx === 0 ? <Clock size={20} /> : idx === 1 ? <Gem size={20} /> : <ShieldCheck size={20} />}
                {pillar.title}
              </div>
              <p className="text-sm text-slate-600">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};