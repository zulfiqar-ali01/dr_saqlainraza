import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12 px-6 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          &copy; {new Date().getFullYear()} Dr. Saqlain Raza. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a href="https://www.linkedin.com/search/results/all/?keywords=Saqlain%20Raza" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          <a href="https://www.researchgate.net/search/publication?q=Saqlain+Raza" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">ResearchGate</a>
          <a href="https://scholar.google.com/citations?user=aDTbV9oAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Google Scholar</a>
        </div>
      </div>
    </footer>
  );
}
