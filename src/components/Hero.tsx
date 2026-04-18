import React from 'react';
import Image from 'next/image';
import { BookOpen, ArrowRight, Activity, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative px-6 py-32 md:py-48 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl mix-blend-multiply opacity-70 animate-blob"></div>
      <div className="absolute top-40 left-0 -ml-20 w-72 h-72 rounded-full bg-emerald-300/20 blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>

      <div className="flex-1 space-y-10 z-10">
        <div className="flex flex-wrap gap-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-sm">
            <Activity size={16} />
            <span>Assistant Professor, IAU KSA</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-sm">
            <MapPin size={16} />
            <span>PhD, INP-T France</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight tracking-tight">
          Bridging <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
            Applied Statistics
          </span> <br/>
          & Data Science.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
          Dr. Saqlain Raza • Specializing in General Linear Models, Biostatistics, Epidemiology, Causality, and driving turnkey industrial data / NLP solutions. <br/>
          <span className="text-sm font-medium mt-2 inline-block">Fluent in English, French, Urdu, and Arabic.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 pt-4">
          <a href="#experience" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-1">
            View Experience <ArrowRight size={20} />
          </a>
          <a href="#publications" className="bg-white border-2 text-slate-800 border-slate-200 px-8 py-4 rounded-xl font-bold hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-1">
            Explore Publications <BookOpen size={20} />
          </a>
        </div>
      </div>
      
      {/* Right Column Graphic / Image */}
      <div className="flex-1 relative z-10 w-full max-w-md mx-auto mt-12 md:mt-0">
        <div className="aspect-[4/5] rounded-[2.5rem] bg-gradient-to-br from-blue-100 to-slate-200 border-[10px] border-white shadow-2xl overflow-hidden relative transition-all duration-500 hover:shadow-blue-500/20 hover:-translate-y-2">
          <Image 
            src="/profile.jpg" 
            alt="Dr. Saqlain Raza" 
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </section>
  );
}
