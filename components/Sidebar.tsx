
import React from 'react';
import { Filter, Award, Shield, Radar } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 px-2">
        <Filter size={20} className="text-yellow-500" />
        <h3 className="font-bold text-slate-900 text-lg font-badge uppercase tracking-widest">Dienst-Filter</h3>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <section className="mb-10">
          <h4 className="font-black text-slate-400 text-[10px] uppercase mb-4 tracking-[0.25em] flex items-center gap-2">
            <Shield size={14} className="text-yellow-500" /> Einsatzbereich
          </h4>
          <div className="space-y-4">
            {[
              'Objektschutz', 
              'Personenschutz', 
              'Veranstaltungsschutz', 
              'Geld & Werttransport', 
              'Zolldienst'
            ].map(item => (
              <label key={item} className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-slate-900 focus:ring-yellow-500/50 cursor-pointer" />
                <span className="text-slate-600 font-bold text-xs uppercase tracking-widest group-hover:text-yellow-600 transition-colors">{item}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h4 className="font-black text-slate-400 text-[10px] uppercase mb-4 tracking-[0.25em] flex items-center gap-2">
            <Award size={14} className="text-yellow-500" /> Qualifikation
          </h4>
          <div className="space-y-4">
            {[
              'Unterrichtung §34a', 
              'Sachkundeprüfung §34a', 
              'Waffensachkunde', 
              'Hundeführer', 
              'Führungszeugnis (Eintragsfrei)'
            ].map(item => (
              <label key={item} className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="qual" className="w-5 h-5 border-slate-300 text-slate-900 focus:ring-yellow-500/50 cursor-pointer" />
                <span className="text-slate-600 font-bold text-xs uppercase tracking-widest group-hover:text-yellow-600 transition-colors">{item}</span>
              </label>
            ))}
          </div>
        </section>

        <div className="bg-slate-900 p-5 rounded-lg border-l-4 border-yellow-500">
          <div className="flex items-center gap-2 text-yellow-500 font-bold text-[10px] mb-3 uppercase tracking-widest">
            <Radar size={16} />
            <span>Info-Feed</span>
          </div>
          <p className="text-slate-400 text-[11px] leading-relaxed font-medium italic">
            Aktuell 42 offene Stellen für <b>Obenflächenkontrolle</b> am Flughafen Frankfurt verfügbar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
