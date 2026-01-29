
import React from 'react';
import { Search, MapPin, Eye } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-20 pb-28 px-4 bg-slate-900 relative overflow-hidden border-b-4 border-yellow-500">
      {/* Tactical Grid Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-yellow-500 text-slate-900 px-5 py-2 rounded font-black text-[10px] uppercase tracking-[0.2em] mb-12 shadow-2xl">
          <Eye size={16} />
          Wachsamkeit ist unsere Stärke
        </div>
        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight font-badge uppercase tracking-tighter">
          Schutz für <br/><span className="text-yellow-500 underline decoration-8 underline-offset-8">Ihre Karriere.</span>
        </h1>
        <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
          Finden Sie Ihren nächsten Einsatz im Objektschutz, Personenschutz oder Revierdienst. Seriöse Arbeitgeber, faire Bezahlung, klare Strukturen.
        </p>
        
        <div className="max-w-4xl mx-auto bg-white p-2 rounded-xl shadow-2xl flex flex-col md:flex-row items-center gap-2 border border-slate-800">
          <div className="flex-grow flex items-center px-6 py-4 w-full bg-slate-100 rounded-lg">
            <Search className="text-slate-400 mr-4" size={22} />
            <input 
              type="text" 
              placeholder="Berufsgruppe (z.B. §34a, GSSK, Hundeführer)" 
              className="w-full bg-transparent focus:outline-none text-slate-900 font-bold placeholder-slate-400 uppercase text-sm tracking-widest"
            />
          </div>
          <div className="flex-grow flex items-center px-6 py-4 w-full bg-slate-100 rounded-lg">
            <MapPin className="text-slate-400 mr-4" size={22} />
            <input 
              type="text" 
              placeholder="Einsatzort" 
              className="w-full bg-transparent focus:outline-none text-slate-900 font-bold placeholder-slate-400 uppercase text-sm tracking-widest"
            />
          </div>
          <button className="w-full md:w-auto bg-slate-900 hover:bg-slate-800 text-yellow-500 font-black px-12 py-5 rounded-lg transition-all shadow-xl uppercase tracking-widest text-sm border-2 border-yellow-500">
            Suchen
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
