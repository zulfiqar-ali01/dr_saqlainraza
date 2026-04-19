import React from 'react';
import { Microscope, BrainCircuit, BarChart4, Network } from 'lucide-react';

export default function ResearchAreas() {
  const areas = [
    {
      title: "Applied Statistics",
      icon: <BarChart4 size={32} />,
      colorClass: "bg-blue-100 text-blue-600",
      dotClass: "bg-blue-500",
      items: ["General Linear Models (GLM)", "Biostatistics", "Epidemiology", "Multivariate Analysis"]
    },
    {
      title: "Data Science & ML",
      icon: <BrainCircuit size={32} />,
      colorClass: "bg-emerald-100 text-emerald-600",
      dotClass: "bg-emerald-500",
      items: ["Deep Learning", "Natural Language Processing (NLP)", "Predictive Modeling", "Health Informatics"]
    },
    {
      title: "Causality & Inference",
      icon: <Network size={32} />,
      colorClass: "bg-purple-100 text-purple-600",
      dotClass: "bg-purple-500",
      items: ["Causal Analysis", "Statistical Inference", "Econometrics", "Policy Evaluation"]
    },
    {
      title: "Research Methodologies",
      icon: <Microscope size={32} />,
      colorClass: "bg-amber-100 text-amber-600",
      dotClass: "bg-amber-500",
      items: ["Experimental Design", "Survey Design", "Operations Research", "Demography"]
    }
  ];

  return (
    <section id="research" className="py-24 px-6 bg-slate-50 dark:bg-slate-900 dark:bg-slate-100 border-y border-slate-100 dark:border-slate-800 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">Research Areas</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-balance">
            Focused on bridging the gap between rigorous academic theory and practical, real-world data science applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 dark:bg-slate-100 rounded-3xl p-8 border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className={`${area.colorClass} p-4 rounded-2xl inline-block mb-6`}>
                {area.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">{area.title}</h3>
              <ul className="space-y-3">
                {area.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                    <span className={`w-1.5 h-1.5 rounded-full ${area.dotClass} mt-2 shrink-0`}></span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
