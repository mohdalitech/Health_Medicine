
import React, { useState } from 'react';
import { View } from './types';
import Navbar from './components/Navbar';
import AiAssistant from './components/AiAssistant';
import Dashboard from './views/Dashboard';
import Pharmacy from './views/Pharmacy';
import Telemedicine from './views/Telemedicine';
import { Activity, ClipboardList, Package, UserCircle } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.DASHBOARD);

  const renderView = () => {
    switch (currentView) {
      case View.DASHBOARD:
        return <Dashboard />;
      case View.PHARMACY:
        return <Pharmacy />;
      case View.TELEMEDICINE:
        return <Telemedicine />;
      case View.RECORDS:
        return (
          <div className="flex flex-col items-center justify-center min-h-[400px] text-slate-400 animate-in fade-in duration-700">
            <div className="bg-slate-100 p-6 rounded-full mb-4">
              <ClipboardList size={48} />
            </div>
            <h2 className="text-xl font-bold text-slate-800">Medical Records</h2>
            <p>Coming soon: Your secure digital health history in one place.</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentView={currentView} onNavigate={setCurrentView} />
      
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {renderView()}
      </main>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 glass-effect border-t border-slate-200 px-6 py-3 flex justify-between items-center z-40">
        <button 
          onClick={() => setCurrentView(View.DASHBOARD)}
          className={`flex flex-col items-center gap-1 ${currentView === View.DASHBOARD ? 'text-indigo-600' : 'text-slate-400'}`}
        >
          <Activity size={20} />
          <span className="text-[10px] font-bold">Health</span>
        </button>
        <button 
          onClick={() => setCurrentView(View.TELEMEDICINE)}
          className={`flex flex-col items-center gap-1 ${currentView === View.TELEMEDICINE ? 'text-indigo-600' : 'text-slate-400'}`}
        >
          <UserCircle size={20} />
          <span className="text-[10px] font-bold">Consult</span>
        </button>
        <button 
          onClick={() => setCurrentView(View.PHARMACY)}
          className={`flex flex-col items-center gap-1 ${currentView === View.PHARMACY ? 'text-indigo-600' : 'text-slate-400'}`}
        >
          <Package size={20} />
          <span className="text-[10px] font-bold">Store</span>
        </button>
        <button 
          onClick={() => setCurrentView(View.RECORDS)}
          className={`flex flex-col items-center gap-1 ${currentView === View.RECORDS ? 'text-indigo-600' : 'text-slate-400'}`}
        >
          <ClipboardList size={20} />
          <span className="text-[10px] font-bold">Vault</span>
        </button>
      </div>

      <AiAssistant />

      <footer className="bg-white border-t border-slate-100 py-12 mt-12 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 p-1.5 rounded text-white">
                <Activity size={18} />
              </div>
              <span className="text-lg font-bold">HealthHub</span>
            </div>
            <p className="text-slate-500 max-w-sm text-sm leading-relaxed">
              Your comprehensive digital health partner. Bringing quality medical consultations and essential healthcare products directly to your screen and doorstep.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-slate-900">Services</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><button onClick={() => setCurrentView(View.TELEMEDICINE)} className="hover:text-indigo-600">Telemedicine</button></li>
              <li><button onClick={() => setCurrentView(View.PHARMACY)} className="hover:text-indigo-600">E-Pharmacy</button></li>
              <li><button className="hover:text-indigo-600">Health Monitoring</button></li>
              <li><button className="hover:text-indigo-600">Lab Reports</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-slate-900">Support</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><button className="hover:text-indigo-600">Help Center</button></li>
              <li><button className="hover:text-indigo-600">Privacy Policy</button></li>
              <li><button className="hover:text-indigo-600">Terms of Service</button></li>
              <li><button className="hover:text-indigo-600">Contact Us</button></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-12 text-center text-slate-400 text-xs">
          © {new Date().getFullYear()} HealthHub Technologies Inc. All rights reserved. Built for modern healthcare.
        </div>
      </footer>
    </div>
  );
};

export default App;
