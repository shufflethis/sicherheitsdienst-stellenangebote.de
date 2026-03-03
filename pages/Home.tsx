// HR-UPDATER: v1.0

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import { Job } from '../types';
import { Shield, Eye, Lock } from 'lucide-react';

const MOCK_JOBS: Job[] = [
  {
    id: 'sec1',
    title: 'Sicherheitsmitarbeiter (m/w/d) Objektschutz',
    company: 'Securitas Defense GmbH',
    location: 'Frankfurt am Main',
    type: 'Vollzeit',
    salary: '14,50€ - 17,20€ / Std.',
    description: 'Überwachung von Werksgeländen und Zutrittskontrollen. Sachkunde nach §34a GewO zwingend erforderlich. Wir bieten Nachtzuschläge und Dienstkleidung.',
    postedAt: 'Vor 1 Std.',
    logo: 'https://picsum.photos/seed/security1/120/120'
  },
  {
    id: 'sec2',
    title: 'Personenschutzfachkraft / Bodyguard',
    company: 'Elite Protection Group',
    location: 'Berlin / International',
    type: 'Freelance',
    salary: '450€ - 650€ / Tag',
    description: 'Begleitschutz für VIPs und Exekutivschutz. Waffenschein und fundierte Ausbildung im Personenschutz vorausgesetzt. Hohe Reisebereitschaft.',
    postedAt: 'Vor 3 Std.',
    logo: 'https://picsum.photos/seed/protection2/120/120'
  },
  {
    id: 'sec3',
    title: 'Geprüfte Schutz- und Sicherheitskraft (GSSK)',
    company: 'City-Guard Security',
    location: 'München',
    type: 'Vollzeit',
    salary: '3.200€ - 3.800€',
    description: 'Einsatz in der Alarmzentrale und Revierdienst. Führung von Teams und Koordination von Sicherheitseinsätzen bei Großveranstaltungen.',
    postedAt: 'Gestern',
    logo: 'https://picsum.photos/seed/guard3/120/120'
  }
];

const Home: React.FC = () => {
  const [jobs] = useState<Job[]>(MOCK_JOBS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
            <aside className="w-full lg:w-1/4">
              <Sidebar />
            </aside>
            <div className="w-full lg:w-3/4">
              <div className="flex items-center justify-between mb-8 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="bg-slate-900 p-3 rounded-lg text-yellow-400">
                    <Shield size={28} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 font-badge uppercase tracking-tight">
                      Vakanzen im <span className="text-yellow-500">Wachdienst</span>
                    </h2>
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest">Geprüfte Qualität für Ihren Einsatz</p>
                  </div>
                </div>
              </div>
              
              {loading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="h-44 bg-white animate-pulse rounded-xl border border-slate-100"></div>
                  ))}
                </div>
              ) : (
                <div className="grid gap-6">
                  {jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              )}

              {/* Security Professional CTA */}
              <div className="mt-20 bg-slate-900 rounded-2xl p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-yellow-500">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Lock size={180} />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                  <div className="max-w-xl text-center md:text-left">
                    <h3 className="text-4xl font-bold mb-4 font-badge uppercase leading-tight">Bereit für den <span className="text-yellow-400">Dienst?</span></h3>
                    <p className="text-slate-400 text-lg font-medium leading-relaxed">
                      Laden Sie Ihre Zertifikate hoch und lassen Sie sich von zertifizierten Sicherheitsunternehmen direkt kontaktieren.
                    </p>
                  </div>
                  <button className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-black px-12 py-5 rounded-lg transition-all shadow-xl shadow-yellow-900/30 uppercase tracking-widest text-sm">
                    Profil verifizieren
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-slate-950 text-slate-500 py-16 border-t-4 border-slate-900">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-black text-white font-badge mb-6 flex items-center justify-center md:justify-start gap-2">
              SICHERHEITS<span className="text-yellow-500">JOBS</span>
            </div>
            <p className="max-w-sm leading-relaxed">
              Ihr spezialisiertes Portal für Personal im Bereich Bewachung, Schutz und Sicherheit. Wir bringen Profis in den Einsatz.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold uppercase text-xs tracking-widest">Dienstbereiche</h4>
            <a href="#" className="hover:text-yellow-500 transition-colors">Objektschutz</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Veranstaltungsschutz</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Revierdienst</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold uppercase text-xs tracking-widest">Intern</h4>
            <Link to="/impressum" className="hover:text-yellow-500 transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-yellow-500 transition-colors">Datenschutz</Link>
            <Link to="/kontakt" className="hover:text-blue-400 transition-colors">Kontakt</Link>
            <Link to="/autor/thomas-sander" className="hover:text-blue-400 transition-colors">Autor</Link>
            <p className="mt-4 text-xs">© 2024 sicherheitsdienst-stellenangebote.de</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
