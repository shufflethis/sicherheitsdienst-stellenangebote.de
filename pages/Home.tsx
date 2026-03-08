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
    id: '1',
    title: 'Wagenmeister/in (m/w/d) für den mobilen Dienst als Vorarbeiter/in (m/w/d)',
    company: 'NORDIC RAIL SERVICE GMBH',
    location: 'Lübeck',
    type: 'Vollzeit',
    description: 'Wagenmeister/in (m/w/d) für den mobilen Dienst als Vorarbeiter/in (m/w/d)',
    postedAt: '2026-03-08'
  },
  {
    id: '2',
    title: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    company: 'HUK-COBURG Versicherungsgruppe',
    location: 'Weißenburg i. Bayern',
    type: 'Vollzeit',
    description: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    postedAt: '2026-03-08'
  },
  {
    id: '3',
    title: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    company: 'HUK-COBURG Versicherungsgruppe',
    location: 'Nürnberg',
    type: 'Vollzeit',
    description: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    postedAt: '2026-03-08'
  },
  {
    id: '4',
    title: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    company: 'Sikla GmbH',
    location: 'Nürnberg',
    type: 'Vollzeit',
    description: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    postedAt: '2026-03-08'
  },
  {
    id: '5',
    title: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    company: 'Sikla GmbH',
    location: 'München',
    type: 'Vollzeit',
    description: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    postedAt: '2026-03-08'
  },
  {
    id: '6',
    title: 'Einsatzleiter/in (m/w/d) im Sicherheitsdienst',
    company: 'Fischer Security&Service GmbH',
    location: 'Mülheim an der Ruhr',
    type: 'Vollzeit',
    description: 'Einsatzleiter/in (m/w/d) im Sicherheitsdienst',
    postedAt: '2026-03-06'
  },
  {
    id: '7',
    title: 'Sicherheitsmitarbeiter/in',
    company: 'SECUROP Bewachungsdienst Dr. Siegfried Frisch Gesellschaft m.b.H.',
    location: 'Linz',
    type: 'Vollzeit',
    description: 'Sicherheitsmitarbeiter/in',
    postedAt: '2026-03-06'
  },
  {
    id: '8',
    title: 'Sicherheitsmitarbeiter/in',
    company: 'ÖWD Österreichischer Wachdienst security GmbH & Co KG',
    location: 'Linz',
    type: 'Vollzeit',
    description: 'Sicherheitsmitarbeiter/in',
    postedAt: '2026-03-06'
  },
  {
    id: '9',
    title: 'Sicherheitsmitarbeiter/in',
    company: 'Landeskrankenhaus Feldkirch',
    location: 'Feldkirch',
    type: 'Vollzeit',
    description: 'Sicherheitsmitarbeiter/in',
    postedAt: '2026-03-06'
  },
  {
    id: '10',
    title: 'Mitarbeiter für Sicherheitsdienst',
    company: 'PRIMEGUARD Sicherheitsdienst - Fiedler Michael',
    location: 'Beilngries',
    type: 'Vollzeit',
    description: 'Mitarbeiter für Sicherheitsdienst',
    postedAt: '2026-03-05'
  },
  {
    id: '11',
    title: 'Sicherheitsmitarbeiter/in',
    company: 'G4S Secure Solutions GmbH',
    location: 'Bezirk: Spittal an der Drau',
    type: 'Vollzeit',
    description: 'Sicherheitsmitarbeiter/in',
    postedAt: '2026-03-03'
  },
  {
    id: '12',
    title: 'Sicherheitsmitarbeiter/in',
    company: 'G4S Secure Solutions GmbH',
    location: 'Bezirk: Klagenfurt Stadt',
    type: 'Vollzeit',
    description: 'Sicherheitsmitarbeiter/in',
    postedAt: '2026-03-03'
  },
  {
    id: '13',
    title: 'Sicherheitsmitarbeiter/in',
    company: 'Bewachungsdienst Dr. Siegfried Frisch Gesellschaft m.b.H.',
    location: 'Bezirk: Krems(Land)',
    type: 'Vollzeit',
    description: 'Sicherheitsmitarbeiter/in',
    postedAt: '2026-03-03'
  },
  {
    id: '14',
    title: 'Wach-und Sicherheitsdienst',
    company: 'Uwe Kallies',
    location: 'Bautzen, Sachsen',
    type: 'Vollzeit',
    description: 'Wach-und Sicherheitsdienst',
    postedAt: '2026-03-02'
  },
  {
    id: '15',
    title: 'Sicherheitsdienst Mitarbeiter §34a',
    company: 'Grieger Sicherheitsdienst GmbH',
    location: 'Hamburg',
    type: 'Vollzeit',
    description: 'Sicherheitsdienst Mitarbeiter §34a',
    postedAt: '2026-02-25'
  },
  {
    id: '16',
    title: 'Sicherheitsdienst m/w/d',
    company: 'Waldemar Pauch Sicherheit',
    location: 'Offenburg',
    type: 'Vollzeit',
    description: 'Sicherheitsdienst m/w/d',
    postedAt: '2026-02-24'
  },
  {
    id: '17',
    title: 'Mitarbeiter Sicherheitsdienst (w/m/d)',
    company: 'ELBLAND Service und Logistik GmbH',
    location: 'Meißen, Sachsen',
    type: 'Vollzeit',
    description: 'Mitarbeiter Sicherheitsdienst (w/m/d)',
    postedAt: '2026-02-23'
  },
  {
    id: '18',
    title: 'Schichtleiter im Sicherheitsdienst (m/w/d)',
    company: 'SHS Sicherheit & Service GmbH',
    location: 'Ulm, Donau',
    type: 'Vollzeit',
    description: 'Schichtleiter im Sicherheitsdienst (m/w/d)',
    postedAt: '2026-02-20'
  },
  {
    id: '19',
    title: 'Sicherheitsdienst Objektschutz (m/w/d)',
    company: 'FINEOO Inhaber Eric Martin',
    location: 'Lübben (Spreewald)',
    type: 'Vollzeit',
    description: 'Sicherheitsdienst Objektschutz (m/w/d)',
    postedAt: '2026-02-19'
  },
  {
    id: '20',
    title: 'Objektleiter: Sicherheitsdienst Einkaufszentrum',
    company: 'Wiesing Sicherheitsdienst und Service',
    location: 'Ottersberg bei Bremen',
    type: 'Vollzeit',
    description: 'Objektleiter: Sicherheitsdienst Einkaufszentrum',
    postedAt: '2026-02-16'
  },
  {
    id: '21',
    title: 'Mitarbeiter/-in (w/m/d) im Sicherheitsdienst',
    company: 'Universitätsklinikum Aachen',
    location: 'Aachen',
    type: 'Vollzeit',
    description: 'Mitarbeiter/-in (w/m/d) im Sicherheitsdienst',
    postedAt: '2026-02-12'
  },
  {
    id: '22',
    title: 'Einsatzleitung (m/w/d) für Sicherheitsdienst',
    company: 'Bavaria Werkschutz GmbH',
    location: 'München',
    type: 'Vollzeit',
    description: 'Einsatzleitung (m/w/d) für Sicherheitsdienst',
    postedAt: '2026-02-12'
  },
  {
    id: '23',
    title: 'Mitarbeiter im Sicherheitsdienst (m/w/d)',
    company: 'BOS Concept Thomas Schurr',
    location: 'Grünwald, Kreis München',
    type: 'Vollzeit',
    description: 'Mitarbeiter im Sicherheitsdienst (m/w/d)',
    postedAt: '2026-02-10'
  },
  {
    id: '24',
    title: 'Objektleitung (m/w/d) im Sicherheitsdienst',
    company: 'Piepenbrock Dienstleistungsgruppe GmbH & Co.KG',
    location: 'Langen (Hessen)',
    type: 'Vollzeit',
    description: 'Objektleitung (m/w/d) im Sicherheitsdienst',
    postedAt: '2026-01-14'
  },
  {
    id: '25',
    title: 'Mitarbeiter (m/w/d) im Sicherheitsdienst',
    company: 'Lanfer Logistik GmbH',
    location: 'Meppen',
    type: 'Vollzeit',
    description: 'Mitarbeiter (m/w/d) im Sicherheitsdienst',
    postedAt: '2026-01-13'
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
