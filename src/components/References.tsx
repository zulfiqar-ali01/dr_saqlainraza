import React from 'react';
import { UserCheck } from 'lucide-react';

export default function References() {
  const references = [
    {
      name: "Danielle GALLIANO",
      role: "Directeur de recherche",
      organization: "INRA Castanet Tolosan, France",
      email: "danielle.galliano@inra.fr"
    },
    {
      name: "Babar Aziz",
      role: "Dean of Social Sciences",
      organization: "Government College University Lahore, Pakistan",
      email: "babar.aziz@gcu.edu.pk"
    },
    {
      name: "Nur ul Ain",
      role: "Professor of Biosciences",
      organization: "Grand Asian University, Pakistan",
      email: "syednurulain@gaus.edu.pk"
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16 text-center justify-center">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Academic References</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {references.map((ref, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center hover:border-blue-300 hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-50 p-4 rounded-full text-blue-600 mb-6">
                <UserCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{ref.name}</h3>
              <p className="text-blue-600 font-medium mb-1 mt-2">{ref.role}</p>
              <p className="text-slate-500 text-sm mb-6 h-10">{ref.organization}</p>
              <a href={`mailto:${ref.email}`} className="mt-auto px-6 py-2 bg-slate-100 text-slate-700 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-colors text-sm">
                Contact Reference
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}