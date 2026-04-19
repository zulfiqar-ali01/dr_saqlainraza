import React from 'react';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 sticky top-0 z-50 transition-all duration-300">
      <div className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 hover:scale-105 transition-transform cursor-pointer">
        Dr. Saqlain Raza<span className="text-blue-600 dark:text-blue-400">.</span>
      </div>
      <div className="hidden md:flex items-center space-x-8 lg:space-x-10 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
        <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
        <a href="#education" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Education</a>
        <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
        <a href="#publications" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Publications</a>
        <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <ThemeToggle />
        <div className="flex gap-3 px-4 border-r border-slate-200 dark:border-slate-700">
          <a href="https://orcid.org/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-bold transition-colors">ORCID</a>
          <a href="https://www.scopus.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-bold transition-colors">SCOPUS</a>
        </div>
        <a href="#contact" className="bg-slate-900 dark:bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg shadow-slate-900/20 dark:shadow-blue-900/20 hover:shadow-slate-900/40 dark:hover:shadow-blue-900/40 hover:-translate-y-0.5 transition-all">
          Hire me
        </a>
      </div>
      <button className="md:hidden text-slate-900 dark:text-white focus:outline-none p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
        <span className="sr-only">Open menu</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </nav>
  );
}
