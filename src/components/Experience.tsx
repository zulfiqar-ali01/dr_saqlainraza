import React from 'react';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Assistant Professor',
      organization: 'Imam Abdulrahman bin Faisal University (IAU), KSA',
      period: 'Present',
      icon: <GraduationCap size={24} className="text-blue-600" />,
      description: 'Teaching applied statistics, quantitative analysis, and supervising multi-disciplinary data research initiatives.'
    },
    {
      role: 'Lead Statistician & Consultant',
      organization: 'UNDP & Punjab Health/Education',
      period: '2020 - Present',
      icon: <Briefcase size={24} className="text-emerald-600" />,
      description: 'Driving turnkey policy decisions, causal analysis, and public health predictive modeling.'
    },
    {
      role: 'Consultant Statistician',
      organization: 'Ehsaas Nashonuma Operations Review',
      period: '2021 - 2024',
      icon: <Briefcase size={24} className="text-emerald-600" />,
      description: 'Reviewing and steering global literature strictly focused on applied statistics and analytics methodologies.'
    },
    {
      role: 'Consultant Econometrician',
      organization: 'Merged Areas Governance Project, UNDP',
      period: '2020 - 2021',
      icon: <Briefcase size={24} className="text-emerald-600" />,
      description: 'Providing econometric insights and modeling for the United Nations Development Program.'
    },
    {
      role: 'Consultant Statistician',
      organization: 'Punjab Education Department',
      period: '2019',
      icon: <Briefcase size={24} className="text-emerald-600" />,
      description: 'Sampling of schools in all Punjab in Non-salary budget project.'
    },
    {
      role: 'Data Consultant',
      organization: 'Punjab Health Survey Round-II',
      period: '2017',
      icon: <Briefcase size={24} className="text-emerald-600" />,
      description: 'Consultant Statistician for health surveying.'
    },
    {
      role: 'Assistant Professor',
      organization: 'COMSATS University Islamabad (CUI), Pakistan',
      period: 'Dec 2015 - Oct 2020',
      icon: <GraduationCap size={24} className="text-blue-600" />,
      description: 'Teaching applied statistics and quantitative analysis.'
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        <div className="md:w-1/3 sticky top-32">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">Experience<span className="text-blue-600">.</span></h2>
          <p className="text-lg text-slate-600">
            A career focused on bridging deep academic insights with practical, turnkey industrial and governmental data solutions.
          </p>
        </div>
        
        <div className="md:w-2/3 space-y-12 border-l-4 border-slate-200 pl-8 md:pl-12 ml-4 md:ml-0 relative">
          
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-14 md:-left-[3.25rem] top-0 w-10 h-10 bg-white border-4 border-slate-200 rounded-full flex items-center justify-center group-hover:border-blue-500 duration-500 shadow-sm transition-all z-10">
                <div className="w-full h-full scale-[0.6] flex items-center justify-center">
                  {exp.icon}
                </div>
              </div>
              
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 group-hover:shadow-xl group-hover:border-blue-100 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">{exp.role}</h3>
                  <span className="inline-block mt-2 md:mt-0 text-sm font-bold text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full">{exp.period}</span>
                </div>
                <h4 className="text-lg font-medium text-slate-500 mb-6">{exp.organization}</h4>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
