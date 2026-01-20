
import React, { useState } from 'react';
import { Search, ShoppingCart, Filter, Plus, Minus, Info } from 'lucide-react';
import { Product } from '../types';

const PHARMACY_PRODUCTS: Product[] = [
  { id: '1', name: 'Multivitamin Complex', category: 'Supplements', price: 24.99, image: 'https://picsum.photos/seed/med1/400/300', description: 'Complete daily nutrition with essential vitamins and minerals.' },
  { id: '2', name: 'Pain Relief (Ibuprofen)', category: 'Pain Relief', price: 12.50, image: 'https://picsum.photos/seed/med2/400/300', description: 'Fast-acting relief for headaches and body aches.' },
  { id: '3', name: 'Organic Sleep Aid', category: 'Sleep', price: 18.00, image: 'https://picsum.photos/seed/med3/400/300', description: 'Natural melatonin formula for restful sleep.' },
  { id: '4', name: 'Vitamin C 1000mg', category: 'Immunity', price: 15.99, image: 'https://picsum.photos/seed/med4/400/300', description: 'Immune system support with high-potency Vitamin C.' },
  { id: '5', name: 'Antibacterial Gel', category: 'First Aid', price: 8.45, image: 'https://picsum.photos/seed/med5/400/300', description: 'Protection against germs on the go.' },
  { id: '6', name: 'Blood Pressure Monitor', category: 'Equipment', price: 59.90, image: 'https://picsum.photos/seed/med6/400/300', description: 'Accurate and easy to use digital monitor.' },
];

const Pharmacy: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [cartCount, setCartCount] = useState(0);

  const categories = ['All', 'Supplements', 'Pain Relief', 'Immunity', 'Sleep', 'Equipment'];

  const filteredProducts = activeCategory === 'All' 
    ? PHARMACY_PRODUCTS 
    : PHARMACY_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">HealthHub Pharmacy</h1>
          <p className="text-slate-500 mt-1">Get your medicines and health products delivered at home.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-white border border-slate-200 p-2.5 rounded-xl text-slate-600 hover:bg-slate-50 relative">
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white font-bold">
                {cartCount}
              </span>
            )}
          </button>
          <div className="flex gap-2">
            <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all">
              Upload Prescription
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar w-full sm:w-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === cat 
                  ? 'bg-slate-900 text-white shadow-md' 
                  : 'bg-white text-slate-500 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search medications..." 
            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white group rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="h-48 overflow-hidden relative">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-3 left-3">
                <span className="bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-bold text-slate-800 uppercase tracking-wider shadow-sm">
                  {product.category}
                </span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{product.name}</h3>
                <span className="font-bold text-indigo-600">${product.price}</span>
              </div>
              <p className="text-slate-500 text-xs line-clamp-2 mb-4 h-8">{product.description}</p>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setCartCount(prev => prev + 1)}
                  className="flex-1 bg-slate-900 text-white py-2 rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Plus size={14} /> Add to Cart
                </button>
                <button className="p-2 border border-slate-100 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
                  <Info size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-emerald-50 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 border border-emerald-100">
        <div className="space-y-4 max-w-xl">
          <div className="inline-block bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            Pharmacy Subscription
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Never miss a dose again</h2>
          <p className="text-slate-600 leading-relaxed">
            Subscribe to your chronic medications and get them delivered automatically every month with a <span className="font-bold text-emerald-600">15% discount</span> and free delivery.
          </p>
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-emerald-100 hover:bg-emerald-700 transition-all">
            Setup Auto-Refill
          </button>
        </div>
        <div className="hidden md:block w-64 h-64 bg-emerald-200 rounded-full blur-3xl opacity-30"></div>
      </div>
    </div>
  );
};

export default Pharmacy;
