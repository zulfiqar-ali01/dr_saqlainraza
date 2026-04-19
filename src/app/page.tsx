import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Services from '@/components/Services';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import ResearchAreas from '@/components/ResearchAreas';
import Publications from '@/components/Publications';
import References from '@/components/References';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 dark:bg-slate-100 text-slate-900 dark:text-white font-sans selection:bg-blue-200">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Education />
        <Experience />
        <Services />
        <Projects />
        <About />
        <ResearchAreas />
        <Publications />
        <References />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}