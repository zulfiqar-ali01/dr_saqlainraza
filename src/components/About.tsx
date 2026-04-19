import React from 'react';
import { BarChart3, Binary, Workflow, BrainCircuit } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 text-gray-900  dark:text-gray-100  bg-slate-100 dark:bg-slate-900  relative flex flex-col items-center">
      {/* Decorative blurred lights */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[20rem] h-[20rem] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto z-10 w-full">
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-6">
          <h2 className="text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-300">Technical Arsenal</h2>
          <p className="text-xl  leading-relaxed text-balance">
            Blending strict academic rigor with bleeding-edge computational architecture to turn highly complex industrial problems into scalable solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6  "> 
          <div className=" backdrop-blur-md border bg-white dark:bg-slate-900 dark:bg-slate-100   border-slate-200/60  shadow-sm hover:shadow-xl hover:border-blue-300 p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-blue-500/20 p-4 rounded-2xl w-fit mb-6 text-blue-400 ">
              <Binary size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Core Statistics</h3>
            <ul className="space-y-3 ">
              <li>• General Linear Models (GLM)</li>
              <li>• Biostatistics</li>
              <li>• Epidemiology</li>
              <li>• Causality / Analysis</li>
            </ul>
          </div>
          
          <div className="backdrop-blur-md border bg-white dark:bg-slate-900 dark:bg-slate-100   border-slate-200/60 p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 delay-75">
            <div className="bg-emerald-500/20 p-4 rounded-2xl w-fit mb-6 text-emerald-400">
              <BrainCircuit size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Machine Learning</h3>
            <ul className="space-y-3  ">
              <li>• Deep Learning</li>
              <li>• Machine Learning</li>
              <li>• NLP</li>
              <li>• Data Management</li>
            </ul>
          </div>

          <div className="backdrop-blur-md border bg-white dark:bg-slate-900 dark:bg-slate-100   border-slate-200/60 p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 delay-150">
            <div className="bg-amber-500/20 p-4 rounded-2xl w-fit mb-6 text-amber-400">
              <Workflow size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Stack / Tools</h3>
            <ul className="space-y-3  ">
              <li>• Python</li>
              <li>• R</li>
              <li>• Stata</li>
              <li>• SPSS (Dashboards)</li>
            </ul>
          </div>

          <div className="backdrop-blur-md border bg-white dark:bg-slate-900 dark:bg-slate-100   border-slate-200/60 p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 delay-200">
            <div className="bg-purple-500/20 p-4 rounded-2xl w-fit mb-6 text-purple-400">
              <BarChart3 size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Languages</h3>
            <ul className="space-y-3 ">
              <li>• English (B1)</li>
              <li>• French (B1)</li>
              <li>• Urdu (C2)</li>
              <li>• Arabic (A1)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
