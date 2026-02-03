import React from 'react';
import { Crown, AlertOctagon, TrendingUp, Anchor } from 'lucide-react';

export const VisionView: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center py-10 text-center space-y-12">
      
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center p-4 bg-gold-100 rounded-full text-gold-600 mb-6">
            <Crown size={48} />
        </div>
        <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">The Legacy Vision</h2>
        <p className="text-xl text-slate-600 leading-relaxed">
          "Evolve into a nationally recognized premium perfume brand by owning a clear belief: <span className="font-bold text-slate-900">Performance over Hype.</span>"
        </p>
        <p className="mt-4 text-slate-500">
            Scale to multi-crore revenue while remaining defensible against ad-heavy competitors through consistent differentiation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl px-4">
        {[
            {
                icon: <Anchor className="text-blue-500" />,
                title: "Hero Focus",
                desc: "Focus on fewer hero perfumes for long-term recall."
            },
            {
                icon: <AlertOctagon className="text-red-500" />,
                title: "Honesty",
                desc: "Never exaggerate longevity claims."
            },
            {
                icon: <Crown className="text-gold-500" />,
                title: "Premium Perception",
                desc: "Avoid price wars; protect the brand image."
            },
            {
                icon: <TrendingUp className="text-emerald-500" />,
                title: "Content Driven",
                desc: "Let content and proof drive growth, not discounts."
            }
        ].map((rule, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex justify-center mb-4">{rule.icon}</div>
                <h3 className="font-bold text-slate-800 mb-2">{rule.title}</h3>
                <p className="text-sm text-slate-500">{rule.desc}</p>
            </div>
        ))}
      </div>
    </div>
  );
};