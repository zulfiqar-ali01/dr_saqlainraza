import React from 'react';
import { GraduationCap, Award, Book } from 'lucide-react';

export default function Education() {
  const educations = [
    {
      institution: 'Institut Nationale Polytechnique de Toulouse (INP-T)',
      location: 'France',
      link: 'https://www.toulouse INP.fr/',
      degree: 'PhD - Applied Statistics, with concentration in GLM',
      period: '2010 – 2013',
      details: [
        'Thesis Advisors: M\'hand FARES & Danielle GALLIANO',
        'PhD Thesis: Essays on Complementarity: Organizational and Market Changes in Agriculture'
      ]
    },
    {
      institution: 'Université Paul Sabatier (Toulouse-III)',
      location: 'France',
      link: 'https://www.univ-tlse3.fr/',
      degree: 'M2 (by research) Public Health, Epidemiology & Biostatistics',
      period: '2008 – 2010',
      details: [
        'Thesis Advisor: Theirry LANG',
        'Thesis Title: Practice of Directly Observed Treatment (DOT) for Tuberculosis in Vehari (Pakistan): Comparison between supervised treatment and self-administered treatment'
      ]
    },
    {
      institution: 'Bahauddin Zakariya University (BZU)',
      location: 'Pakistan',
      link: 'https://bzu.edu.pk/',
      degree: 'MSc in Statistics',
      period: '1997 – 1999',
      details: [
        'Subjects studied: Statistical Methods, Probability & Probability Distributions, Sampling Distributions, Demography, Econometrics, Statistical Inference, Operations Research, Multivariate Analysis'
      ]
    },
    {
      institution: 'Government College, Lahore',
      location: 'Pakistan',
      link: 'https://www.gcu.edu.pk/',
      degree: 'BSc with Statistics, Economics, Mathematics',
      period: '1995 – 1997',
      details: []
    }
  ];

  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
          <Book size={28} />
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">Education</h2>
      </div>

      <div className="space-y-8">
        {educations.map((edu, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 dark:bg-slate-100 border text-left border-slate-200 dark:border-slate-700 rounded-3xl p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 hover:border-blue-300 transition-all duration-300">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{edu.degree}</h3>
                <a href={edu.link} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 flex items-center gap-2 hover:text-blue-800 transition-colors">
                  <GraduationCap size={18} /> {edu.institution} <span className="text-slate-400 font-normal">| {edu.location}</span>
                </a>
              </div>
              <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold px-4 py-2 rounded-lg shrink-0 whitespace-nowrap">{edu.period}</span>
            </div>
            
            {edu.details.length > 0 && (
              <ul className="mt-4 space-y-2 pl-6 border-l-2 border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300">
                {edu.details.map((detail, dIdx) => (
                  <li key={dIdx} className="leading-relaxed">
                    {detail}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}