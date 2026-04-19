import React from 'react';
import { Code, ArrowUpRight, FolderKanban } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Health Informatics Dashboard',
      category: 'Machine Learning',
      description: 'Predictive analytics application for patient disease diagnosis and risk stratification.',
      tags: ['Python', 'Django', 'scikit-learn']
    },
    {
      title: 'Turnkey Industrial Operations Model',
      category: 'Optimizations',
      description: 'End-to-end data pipeline improving factory operational efficiency for the Gulf Index Company.',
      tags: ['R', 'GLM', 'PostgreSQL']
    },
    {
      title: 'UNDP Policy Insight System',
      category: 'Causality',
      description: 'Data-driven public policy evaluation tool supporting Punjab provincial government decisions.',
      tags: ['Stata', 'NLP', 'D3.js']
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="p-3 bg-blue-100 text-blue-600 rounded-xl"><FolderKanban size={28} /></span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">Featured Projects</h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Real-world applications of applied statistics and data science driving decision-making in healthcare, industry, and public policy.
          </p>
        </div>
        <a href="https://github.com/search?q=Saqlain+Raza" target="_blank" rel="noopener noreferrer" className="shrink-0 flex items-center gap-2 group font-semibold text-blue-600 hover:text-blue-800 transition">
          View GitHub Repository <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" size={20} />
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="group relative bg-white dark:bg-slate-900 dark:bg-slate-100 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 hover:border-slate-300 dark:border-slate-600 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 overflow-hidden flex flex-col h-full">
            
            {/* Abstract Background accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
            
            <div className="z-10 flex-grow">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-4 block">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-700 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="z-10 mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="flex items-center gap-1.5 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-3 py-1.5 rounded-md">
                  <Code size={12} /> {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
