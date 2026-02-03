import React from 'react';
import { COMPETITOR_COMPARISON } from '../constants';
import { ArrowRight, AlertTriangle, CheckCircle } from 'lucide-react';

export const StrategyView: React.FC = () => {
  return (
    <div className="space-y-8">
      
      {/* Competitor Analysis Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-xl font-bold font-serif text-slate-800">Competitor Analysis: Esscents & EM5</h3>
          <p className="text-slate-500 mt-1">Differentiation from dupe-focused market leaders</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-sm uppercase">
              <tr>
                <th className="px-6 py-4 font-medium">Dimension</th>
                <th className="px-6 py-4 font-medium text-red-500">Competitors</th>
                <th className="px-6 py-4 font-medium text-emerald-600">Dubai Perfume Wala</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {COMPETITOR_COMPARISON.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-700">{row.attribute}</td>
                  <td className="px-6 py-4 text-slate-600 relative">
                    <span className="flex items-center gap-2">
                        <AlertTriangle size={14} className="text-red-400 shrink-0" /> {row.competitors}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-bold text-slate-800">
                    <span className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-emerald-500 shrink-0" /> {row.brand}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Channel Strategy Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h4 className="font-bold text-lg mb-4 text-slate-800 border-b pb-2">Online Strategy</h4>
            <ul className="space-y-4">
                <li className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                        <p className="font-bold text-slate-800">Website (D2C)</p>
                        <p className="text-sm text-slate-600">Focus on "Proof over Poetry". Longevity tests, trust badges, video reviews.</p>
                    </div>
                </li>
                <li className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                        <p className="font-bold text-slate-800">Instagram</p>
                        <p className="text-sm text-slate-600">Primary showroom. 1 Reel/day. Content: Longevity tests, Founder education.</p>
                    </div>
                </li>
            </ul>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h4 className="font-bold text-lg mb-4 text-slate-800 border-b pb-2">Offline Strategy</h4>
            <ul className="space-y-4">
                <li className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                        <p className="font-bold text-slate-800">Exhibitions</p>
                        <p className="text-sm text-slate-600">High conversion channel. Use Price Anchoring (₹999) & Bundle Offers.</p>
                    </div>
                </li>
                <li className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                        <p className="font-bold text-slate-800">WhatsApp Loop</p>
                        <p className="text-sm text-slate-600">Physical experience + Digital follow-up for repeat purchases.</p>
                    </div>
                </li>
            </ul>
        </div>
      </div>

      {/* Strategic Recs */}
      <div className="bg-slate-900 text-slate-300 p-6 rounded-xl">
        <h4 className="text-gold-400 font-serif font-bold text-xl mb-4">Strategic Recommendations</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
                "Reduce public SKUs to 5-7 Heroes",
                "Marketing focus: Longevity Proof",
                "Avoid heavy discounting",
                "Position as Authority, not Dupe"
            ].map((rec, i) => (
                <div key={i} className="bg-slate-800 p-4 rounded-lg flex items-start gap-3">
                    <ArrowRight className="text-gold-500 mt-1 shrink-0" size={16} />
                    <p className="text-sm">{rec}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};