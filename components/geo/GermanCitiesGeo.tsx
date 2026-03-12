// HR-UPDATER: v1.0
import React from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const GERMAN_CITIES = [
  { name: 'Berlin', region: 'Berlin', jobs: 187, slug: 'berlin' },
  { name: 'Hamburg', region: 'Hamburg', jobs: 143, slug: 'hamburg' },
  { name: 'Muenchen', region: 'Bayern', jobs: 198, slug: 'muenchen' },
  { name: 'Koeln', region: 'Nordrhein-Westfalen', jobs: 112, slug: 'koeln' },
  { name: 'Frankfurt am Main', region: 'Hessen', jobs: 156, slug: 'frankfurt' },
  { name: 'Stuttgart', region: 'Baden-Wuerttemberg', jobs: 94, slug: 'stuttgart' },
  { name: 'Duesseldorf', region: 'Nordrhein-Westfalen', jobs: 88, slug: 'duesseldorf' },
  { name: 'Leipzig', region: 'Sachsen', jobs: 67, slug: 'leipzig' },
  { name: 'Dortmund', region: 'Nordrhein-Westfalen', jobs: 73, slug: 'dortmund' },
  { name: 'Dresden', region: 'Sachsen', jobs: 58, slug: 'dresden' },
  { name: 'Hannover', region: 'Niedersachsen', jobs: 62, slug: 'hannover' },
  { name: 'Nuernberg', region: 'Bayern', jobs: 79, slug: 'nuernberg' },
  { name: 'Bremen', region: 'Bremen', jobs: 46, slug: 'bremen' },
  { name: 'Essen', region: 'Nordrhein-Westfalen', jobs: 51, slug: 'essen' },
  { name: 'Freiburg', region: 'Baden-Wuerttemberg', jobs: 34, slug: 'freiburg' },
  { name: 'Luebeck', region: 'Schleswig-Holstein', jobs: 29, slug: 'luebeck' },
  { name: 'Heidelberg', region: 'Baden-Wuerttemberg', jobs: 31, slug: 'heidelberg' },
  { name: 'Muenster', region: 'Nordrhein-Westfalen', jobs: 37, slug: 'muenster' },
  { name: 'Rostock', region: 'Mecklenburg-Vorpommern', jobs: 24, slug: 'rostock' },
  { name: 'Augsburg', region: 'Bayern', jobs: 41, slug: 'augsburg' },
];

const GermanCitiesGeo: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Sicherheitsdienst-Jobs in deutschen Staedten</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Finden Sie Stellenangebote im Sicherheitsdienst in Ihrer Naehe. Wir bieten Jobs in allen grossen Staedten Deutschlands.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {GERMAN_CITIES.map((city) => (
            <NavLink
              key={city.slug}
              to={`/jobs?location=${encodeURIComponent(city.name)}`}
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-yellow-400 hover:shadow-md transition-all group"
            >
              <MapPin className="h-4 w-4 text-yellow-500 flex-shrink-0 group-hover:text-yellow-600" />
              <div className="min-w-0">
                <span className="font-semibold text-slate-800 text-sm block truncate">{city.name}</span>
                <span className="text-xs text-slate-400">{city.region} &middot; {city.jobs} Stellen</span>
              </div>
            </NavLink>
          ))}
        </div>
        <div className="mt-8 bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="font-bold text-slate-900 mb-3">Sicherheitsdienst-Stellenangebote in ganz Deutschland</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Die Sicherheitsbranche in Deutschland waechst stetig. Von Objektschutz und Werkschutz in Berlin ueber Veranstaltungssicherheit in Muenchen bis hin zu Hafensicherheit in Hamburg - jede Region bietet spezifische Einsatzbereiche fuer Sicherheitsfachkraefte.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Besonders gefragt sind Fachkraefte mit Sachkundepruefung nach §34a GewO in Grossstaedten wie Berlin, Frankfurt, Muenchen, Hamburg und Koeln. Auch in Staedten wie Nuernberg, Dresden und Hannover steigt die Nachfrage nach qualifiziertem Sicherheitspersonal.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Ob Sicherheitsmitarbeiter, Einsatzleiter, Objektschuetzer, Detektiv oder Fachkraft fuer Schutz und Sicherheit - auf sicherheitsdienst-stellenangebote.de finden Sie passende Stellenangebote in Ihrer Stadt. Nutzen Sie unsere Jobsuche mit Standortfilter, um Sicherheitsdienst-Jobs in Ihrer Naehe zu entdecken.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GermanCitiesGeo;
