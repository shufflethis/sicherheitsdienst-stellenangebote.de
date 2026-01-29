
import React from 'react';
import { MapPin, Clock, ChevronRight, ShieldAlert, Award } from 'lucide-react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="security-card p-6 flex flex-col md:flex-row items-center gap-8 cursor-pointer group">
      <div className="w-24 h-24 rounded-lg bg-slate-100 flex-shrink-0 flex items-center justify-center border border-slate-200 overflow-hidden relative group-hover:border-yellow-400 transition-colors">
        <img src={job.logo} alt={job.company} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
        <div className="absolute inset-0 border-2 border-white/20 rounded-lg pointer-events-none"></div>
      </div>
      
      <div className="flex-grow text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-yellow-600 transition-colors mb-1 font-badge uppercase tracking-tight">
              {job.title}
            </h3>
            <p className="text-slate-500 font-bold text-xs uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
              <ShieldAlert size={14} className="text-yellow-500" /> {job.company}
            </p>
          </div>
          <div className="bg-slate-900 text-yellow-500 font-black text-lg px-5 py-2 rounded shadow-md border border-slate-800">
            {job.salary}
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-start gap-6 text-xs font-bold text-slate-400 mb-6 uppercase tracking-widest">
          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-yellow-500" />
            {job.location}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={16} className="text-yellow-500" />
            {job.type}
          </span>
          <span className="text-slate-300 font-medium italic lowercase">{job.postedAt}</span>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          {['§34a GewO', 'Erste Hilfe', 'Dienstkleidung'].map(tag => (
            <span key={tag} className="bg-slate-100 text-slate-700 px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 border border-slate-200 group-hover:bg-yellow-50 transition-colors">
              <Award size={12} className="text-yellow-600" /> {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex-shrink-0 group-hover:translate-x-2 transition-transform">
        <div className="w-14 h-14 rounded-full bg-slate-900 text-yellow-500 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-slate-900 transition-all shadow-inner">
          <ChevronRight size={32} />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
