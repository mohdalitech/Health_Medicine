
import React from 'react';
import { HealthMetric } from '../types';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const HealthMetricCard: React.FC<HealthMetric & { icon: React.ReactNode }> = ({ label, value, unit, trend, color, icon }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl ${color} bg-opacity-10`}>
          {icon}
        </div>
        <div className="flex items-center gap-1">
          {trend === 'up' && <TrendingUp size={16} className="text-emerald-500" />}
          {trend === 'down' && <TrendingDown size={16} className="text-rose-500" />}
          {trend === 'stable' && <Minus size={16} className="text-slate-400" />}
          <span className={`text-xs font-semibold ${trend === 'up' ? 'text-emerald-500' : trend === 'down' ? 'text-rose-500' : 'text-slate-400'}`}>
            {trend === 'up' ? '+12%' : trend === 'down' ? '-5%' : 'Stable'}
          </span>
        </div>
      </div>
      <div>
        <h3 className="text-slate-500 text-sm font-medium">{label}</h3>
        <div className="flex items-baseline gap-1 mt-1">
          <span className="text-2xl font-bold text-slate-900">{value}</span>
          <span className="text-slate-400 text-sm">{unit}</span>
        </div>
      </div>
    </div>
  );
};

export default HealthMetricCard;
