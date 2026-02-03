import React from 'react';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtext?: string;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
}

export const MetricCard: React.FC<MetricCardProps> = ({ title, value, subtext, icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">{title}</p>
          <h3 className="mt-2 text-3xl font-bold text-slate-800 font-serif">{value}</h3>
          {subtext && <p className="mt-1 text-sm text-slate-600">{subtext}</p>}
        </div>
        {icon && <div className="p-3 bg-gold-50 rounded-full text-gold-600">{icon}</div>}
      </div>
    </div>
  );
};