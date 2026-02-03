import React from 'react';
import { MARKETING_PERSONA, CONTENT_PILLARS, FUNNEL_STRATEGY } from '../constants';
import { User, Flame, BookOpen, Crown, ArrowDown, Users, Target, Zap, MessageCircle } from 'lucide-react';

export const MarketingView: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Flame': return <Flame size={24} className="text-orange-500" />;
      case 'BookOpen': return <BookOpen size={24} className="text-blue-500" />;
      case 'Crown': return <Crown size={24} className="text-gold-500" />;
      default: return <Zap size={24} className="text-slate-500" />;
    }
  };

  return (
    <div className="space-y-10 pb-10">
      
      {/* Section 1: The Target Persona */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-slate-900 rounded-lg text-gold-500"><User size={24} /></div>
          <div>
            <h3 className="text-xl font-serif font-bold text-slate-900">The Ideal Customer Profile (ICP)</h3>
            <p className="text-slate-500 text-sm">Who we are talking to and why they buy.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="bg-white rounded-xl shadow-lg border-t-4 border-gold-500 p-6 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-5">
                <Users size={120} />
             </div>
             <h4 className="text-2xl font-bold text-slate-800 mb-1">{MARKETING_PERSONA.title}</h4>
             <p className="text-sm text-slate-500 italic mb-6">"{MARKETING_PERSONA.tagline}"</p>
             
             <div className="space-y-4">
               <div>
                 <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Demographics</span>
                 <div className="grid grid-cols-2 gap-2 mt-2">
                    {Object.entries(MARKETING_PERSONA.demographics).map(([key, val], idx) => (
                      <div key={idx} className="bg-slate-50 p-2 rounded border border-slate-100">
                        <span className="block text-xs text-slate-500 capitalize">{key}</span>
                        <span className="block font-medium text-slate-800 text-sm">{val}</span>
                      </div>
                    ))}
                 </div>
               </div>
             </div>
          </div>

          {/* Psychographics & Pain Points */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h5 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Target size={18} className="text-red-500" /> Core Pain Points
              </h5>
              <ul className="space-y-3">
                {MARKETING_PERSONA.painPoints.map((point, i) => (
                  <li key={i} className="flex gap-3 items-start text-sm text-slate-700">
                    <span className="text-red-400 font-bold">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h5 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Zap size={18} className="text-emerald-500" /> Psychographic Drivers
              </h5>
              <ul className="space-y-3">
                {MARKETING_PERSONA.psychographics.map((point, i) => (
                  <li key={i} className="flex gap-3 items-start text-sm text-slate-700">
                    <span className="text-emerald-400 font-bold">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Content Engine */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-slate-900 rounded-lg text-gold-500"><Zap size={24} /></div>
          <div>
            <h3 className="text-xl font-serif font-bold text-slate-900">The "Proof-First" Content Engine</h3>
            <p className="text-slate-500 text-sm">Strategic pillars to dominate the feed.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CONTENT_PILLARS.map((pillar, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-50 rounded-full">{getIcon(pillar.iconName)}</div>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded uppercase">
                  {pillar.frequency}
                </span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{pillar.title}</h4>
              <p className="text-sm font-medium text-gold-600 mb-4 uppercase tracking-wide text-xs">{pillar.focus}</p>
              
              <div className="space-y-2 text-sm text-slate-600 border-t border-slate-100 pt-4">
                <div className="flex justify-between">
                   <span className="text-slate-400">Format:</span>
                   <span className="font-medium">{pillar.format}</span>
                </div>
                <div className="flex justify-between">
                   <span className="text-slate-400">Primary Goal:</span>
                   <span className="font-medium text-right">{pillar.goal}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: The Growth Funnel */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-slate-900 rounded-lg text-gold-500"><MessageCircle size={24} /></div>
          <div>
            <h3 className="text-xl font-serif font-bold text-slate-900">The "Trust Funnel" Roadmap</h3>
            <p className="text-slate-500 text-sm">Mapping the customer journey from Stranger to Advocate.</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 divide-y divide-slate-100">
            {FUNNEL_STRATEGY.map((step, idx) => (
              <div key={idx} className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-slate-50 transition-colors group">
                {/* Stage Info */}
                <div className="md:col-span-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      idx === 0 ? 'bg-blue-100 text-blue-600' : 
                      idx === 1 ? 'bg-purple-100 text-purple-600' : 
                      idx === 2 ? 'bg-emerald-100 text-emerald-600' : 'bg-gold-100 text-gold-600'
                    }`}>
                      {idx + 1}
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800">{step.stage}</h4>
                        <p className="text-xs text-slate-500">{step.metric}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="md:col-span-3">
                    <p className="text-sm text-slate-600 italic">"{step.description}"</p>
                </div>

                {/* Tactics */}
                <div className="md:col-span-6">
                   <div className="flex flex-wrap gap-2">
                      {step.channels.map((ch, i) => (
                        <span key={i} className="px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded font-medium">
                            {ch}
                        </span>
                      ))}
                      <div className="w-px h-6 bg-slate-300 mx-2 hidden md:block"></div>
                      {step.tactics.map((tac, i) => (
                        <span key={i} className="px-2 py-1 border border-slate-200 text-slate-600 text-xs rounded">
                            {tac}
                        </span>
                      ))}
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};