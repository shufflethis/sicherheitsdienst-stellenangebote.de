
import React from 'react';
import { User, ShieldCheck } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="h-20 flex items-center bg-slate-950 border-b border-slate-800 sticky top-0 z-50 px-4">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="bg-yellow-500 text-slate-950 p-2 rounded shadow-lg group-hover:bg-white transition-colors">
            <ShieldCheck size={26} />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white font-badge uppercase">
            SAFE<span className="text-yellow-500">HIRE</span>
          </span>
        </div>
        
        <div className="hidden lg:flex gap-12 font-bold text-slate-400 uppercase text-[10px] tracking-[0.3em]">
          <a href="#" className="hover:text-yellow-500 transition-colors">Stellenmarkt</a>
          <a href="#" className="hover:text-yellow-500 transition-colors">Zertifizierungen</a>
          <a href="#" className="hover:text-yellow-500 transition-colors">Akademie</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-slate-800 text-white px-6 py-2.5 rounded font-bold hover:bg-slate-700 transition-all flex items-center gap-2 border border-slate-700">
            <User size={18} />
            <span className="text-xs uppercase tracking-widest">Dienst-Login</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
