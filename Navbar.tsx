
import React from 'react';
import { View } from '../types';
import { Activity, Bell, Search, User } from 'lucide-react';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  return (
    <nav className="sticky top-0 z-50 glass-effect border-b border-slate-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate(View.DASHBOARD)}>
        <div className="bg-indigo-600 p-2 rounded-lg text-white">
          <Activity size={24} />
        </div>
        <span className="text-xl font-bold text-slate-900 tracking-tight">HealthHub</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
        <button 
          onClick={() => onNavigate(View.DASHBOARD)}
          className={`${currentView === View.DASHBOARD ? 'text-indigo-600' : 'hover:text-slate-900'} transition-colors`}
        >
          Dashboard
        </button>
        <button 
          onClick={() => onNavigate(View.TELEMEDICINE)}
          className={`${currentView === View.TELEMEDICINE ? 'text-indigo-600' : 'hover:text-slate-900'} transition-colors`}
        >
          Telemedicine
        </button>
        <button 
          onClick={() => onNavigate(View.PHARMACY)}
          className={`${currentView === View.PHARMACY ? 'text-indigo-600' : 'hover:text-slate-900'} transition-colors`}
        >
          E-Pharmacy
        </button>
        <button 
          onClick={() => onNavigate(View.RECORDS)}
          className={`${currentView === View.RECORDS ? 'text-indigo-600' : 'hover:text-slate-900'} transition-colors`}
        >
          Records
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search health resources..." 
            className="pl-10 pr-4 py-2 bg-slate-100 border-transparent rounded-full text-sm focus:bg-white focus:ring-2 focus:ring-indigo-500 transition-all w-64"
          />
        </div>
        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 cursor-pointer">
          <User size={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
