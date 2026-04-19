import React from 'react';
import { Database, Activity, Shield } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="bg-white dark:bg-slate-900 dark:bg-slate-100 py-24 px-6 border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:text-center space-y-4">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">Turnkey Data Science Solutions</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Premium services delivering management information systems, machine learning models, and advanced analytics for operational optimization.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 dark:bg-slate-100 border border-slate-100/60 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
            <div className="bg-blue-100 text-blue-600 p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform">
              <Database size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Data Collection & Preprocessing</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Automating data collection, cleaning, and preprocessing to transform mountains of industrial data into turnaround insights.</p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 dark:bg-slate-100 border border-slate-100/60 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
            <div className="bg-emerald-100 text-emerald-600 p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform">
              <Activity size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Risk & Predictive Modeling</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Data mining and machine learning for disease diagnosis, health informatics, and predictive industrial analytics.</p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 dark:bg-slate-100 border border-slate-100/60 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
            <div className="bg-purple-100 text-purple-600 p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform">
              <Shield size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Data Security & Compliance</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Protecting sensitive data with end-to-end encryption and ensuring regulatory compliance with clear data manuals and SOPs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
