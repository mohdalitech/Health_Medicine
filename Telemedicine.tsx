
import React from 'react';
import { Video, Star, Clock, Calendar, Search, MapPin, Filter, ArrowRight } from 'lucide-react';
import { Doctor } from '../types';

const DOCTORS: Doctor[] = [
  { id: '1', name: 'Dr. Sarah Miller', specialty: 'Cardiologist', rating: 4.9, availability: 'Available today', image: 'https://picsum.photos/seed/doc1/200' },
  { id: '2', name: 'Dr. Michael Chen', specialty: 'General Practitioner', rating: 4.8, availability: 'Available tomorrow', image: 'https://picsum.photos/seed/doc2/200' },
  { id: '3', name: 'Dr. Elena Rodriguez', specialty: 'Dermatologist', rating: 5.0, availability: 'Available in 2 days', image: 'https://picsum.photos/seed/doc3/200' },
  { id: '4', name: 'Dr. James Wilson', specialty: 'Neurologist', rating: 4.7, availability: 'Next week', image: 'https://picsum.photos/seed/doc4/200' },
];

const Telemedicine: React.FC = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 space-y-8">
          <section>
            <div className="bg-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10 max-w-md">
                <h1 className="text-3xl font-bold mb-4">Virtual Consultation in minutes</h1>
                <p className="text-indigo-100 mb-8 leading-relaxed">
                  Connect with certified doctors from the comfort of your home. 24/7 availability for primary care, mental health, and specialties.
                </p>
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-2xl font-bold shadow-lg hover:bg-indigo-50 transition-all flex items-center gap-2">
                  <Video size={18} /> Start On-Demand Visit
                </button>
              </div>
              <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-500 opacity-20 skew-x-12 translate-x-1/2"></div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">Featured Specialists</h2>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="text" placeholder="Specialty..." className="pl-9 pr-4 py-1.5 border border-slate-200 rounded-lg text-sm bg-white outline-none focus:ring-1 focus:ring-indigo-500" />
                </div>
                <button className="p-2 border border-slate-200 rounded-lg bg-white text-slate-500">
                  <Filter size={18} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DOCTORS.map(doc => (
                <div key={doc.id} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-center gap-5 group cursor-pointer">
                  <div className="relative">
                    <img src={doc.image} alt={doc.name} className="w-20 h-20 rounded-2xl object-cover" />
                    <div className="absolute -bottom-1 -right-1 bg-emerald-500 w-4 h-4 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{doc.name}</h3>
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star size={14} fill="currentColor" />
                        <span className="text-xs font-bold">{doc.rating}</span>
                      </div>
                    </div>
                    <p className="text-indigo-600 text-xs font-medium mb-2">{doc.specialty}</p>
                    <div className="flex items-center gap-3 text-slate-400 text-[10px] font-medium uppercase tracking-wider">
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        {doc.availability}
                      </div>
                    </div>
                  </div>
                  <button className="bg-slate-50 p-2 rounded-xl text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <ArrowRight size={20} />
                  </button>
                </div>
              ))}
            </div>
            <button className="w-full py-3 border border-dashed border-slate-200 rounded-2xl text-slate-400 text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition-colors">
              View all 150+ available doctors
            </button>
          </section>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Upcoming Appointments</h3>
            <div className="space-y-4">
              <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                <div className="flex gap-3 mb-4">
                  <img src="https://picsum.photos/seed/dr1/80" className="w-10 h-10 rounded-full" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Dr. Sarah Miller</h4>
                    <p className="text-xs text-indigo-600 font-medium">Cardiology Follow-up</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase">
                    <Calendar size={12} />
                    Oct 24, 2023
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase">
                    <Clock size={12} />
                    14:30 PM
                  </div>
                </div>
                <button className="w-full bg-indigo-600 text-white py-2.5 rounded-xl text-xs font-bold hover:bg-indigo-700 transition-colors">
                  Join Room
                </button>
              </div>

              <div className="p-4 border border-slate-100 rounded-2xl">
                <div className="flex gap-3 mb-3">
                  <img src="https://picsum.photos/seed/dr2/80" className="w-10 h-10 rounded-full grayscale opacity-50" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-400">Dr. Michael Chen</h4>
                    <p className="text-xs text-slate-400 font-medium">Routine Checkup</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-[10px] text-slate-300 font-bold uppercase">Completed 2 weeks ago</div>
                  <button className="text-indigo-600 text-xs font-bold hover:underline">Notes</button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-6 text-white">
            <h3 className="text-lg font-bold mb-4">How it works?</h3>
            <div className="space-y-6">
              {[
                { step: 1, title: 'Choose Doctor', desc: 'Browse specialists by ratings or availability.' },
                { step: 2, title: 'Book Session', desc: 'Pick a convenient slot and pay securely.' },
                { step: 3, title: 'Join Video Call', desc: 'Secure high-definition meeting platform.' },
              ].map(s => (
                <div key={s.step} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center font-bold flex-shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-1">{s.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
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

export default Telemedicine;
