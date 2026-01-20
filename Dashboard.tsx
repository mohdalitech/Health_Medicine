
import React from 'react';
import { Heart, Wind, Zap, Moon, Calendar, ChevronRight, ArrowRight } from 'lucide-react';
import HealthMetricCard from '../components/HealthMetricCard';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Mon', bpm: 72, sleep: 7.2 },
  { name: 'Tue', bpm: 75, sleep: 6.8 },
  { name: 'Wed', bpm: 70, sleep: 8.0 },
  { name: 'Thu', bpm: 68, sleep: 7.5 },
  { name: 'Fri', bpm: 72, sleep: 6.5 },
  { name: 'Sat', bpm: 65, sleep: 9.0 },
  { name: 'Sun', bpm: 67, sleep: 8.5 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Good morning, John 👋</h1>
          <p className="text-slate-500 mt-1">Here is what's happening with your health today.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-medium hover:bg-slate-50 transition-colors">
            Share Report
          </button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-indigo-700 transition-colors">
            Sync Device
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <HealthMetricCard 
          label="Heart Rate" 
          value="72" 
          unit="bpm" 
          trend="down" 
          color="text-rose-500" 
          icon={<Heart className="text-rose-500" size={24} />} 
        />
        <HealthMetricCard 
          label="Oxygen Level" 
          value="98" 
          unit="%" 
          trend="stable" 
          color="text-sky-500" 
          icon={<Wind className="text-sky-500" size={24} />} 
        />
        <HealthMetricCard 
          label="Daily Activity" 
          value="8.4k" 
          unit="steps" 
          trend="up" 
          color="text-amber-500" 
          icon={<Zap className="text-amber-500" size={24} />} 
        />
        <HealthMetricCard 
          label="Sleep Score" 
          value="84" 
          unit="/100" 
          trend="up" 
          color="text-indigo-500" 
          icon={<Moon className="text-indigo-500" size={24} />} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-bold text-slate-900">Weekly Heart Rate</h2>
            <select className="bg-slate-50 border-none rounded-lg text-sm px-3 py-1.5 focus:ring-indigo-500 outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorBpm" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Area type="monotone" dataKey="bpm" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorBpm)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-indigo-900 rounded-2xl p-6 text-white overflow-hidden relative group cursor-pointer">
            <div className="relative z-10">
              <h3 className="text-indigo-200 text-sm font-medium mb-1">Upcoming Consultation</h3>
              <p className="text-xl font-bold mb-4">Dr. Sarah Miller</p>
              <div className="flex items-center gap-2 text-indigo-200 text-xs mb-6">
                <Calendar size={14} />
                <span>Today, 14:30 - 15:00</span>
              </div>
              <button className="w-full bg-white text-indigo-900 py-3 rounded-xl font-bold text-sm hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2">
                Join Meeting <ArrowRight size={16} />
              </button>
            </div>
            <div className="absolute -right-4 -bottom-4 bg-indigo-500 w-32 h-32 rounded-full opacity-20 blur-2xl group-hover:scale-125 transition-transform"></div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Active Prescriptions</h2>
              <button className="text-indigo-600 text-xs font-bold hover:underline">View All</button>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Amoxicillin', dose: '500mg - 2x Daily', daysLeft: 4, icon: '💊' },
                { name: 'Cetirizine', dose: '10mg - 1x Daily', daysLeft: 12, icon: '💧' },
              ].map((rx, idx) => (
                <div key={idx} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-lg">{rx.icon}</div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{rx.name}</p>
                      <p className="text-[10px] text-slate-400 font-medium">{rx.dose}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-slate-800">{rx.daysLeft} days</p>
                    <p className="text-[10px] text-slate-400">remaining</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
