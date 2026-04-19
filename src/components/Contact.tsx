import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-100 dark:border-slate-800">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Open to consultancy, academic collaborations, and industry partnerships. 
          Reach out to discuss how statistics and data science can solve your complex problems.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 bg-white dark:bg-slate-900 dark:bg-slate-100 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/5 border border-slate-100 dark:border-slate-800 p-8 md:p-12">
        
        {/* Contact Info */}
        <div className="space-y-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Contact Information</h3>
            
            <div className="flex items-center gap-6">
              <div className="bg-blue-50 p-4 rounded-full text-blue-600">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Email</p>
                <a href="mailto:srrhussain@iau.edu.sa" className="text-lg font-bold text-slate-900 dark:text-white hover:text-blue-600 transition">
                  srrhussain@iau.edu.sa
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="bg-emerald-50 p-4 rounded-full text-emerald-600">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Phone</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">
                  +966 5 33 47 59 86
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="bg-purple-50 p-4 rounded-full text-purple-600">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Location</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white line-clamp-2">
                  Imam Abdulrahman bin Faisal University<br/>
                  Dammam, Saudi Arabia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6 bg-slate-50 dark:bg-slate-900 dark:bg-slate-100 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">Full Name</label>
            <input type="text" id="name" placeholder="Dr. Jane Doe" className="w-full px-5 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm bg-white dark:bg-slate-900 dark:bg-slate-100" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">Email Address</label>
            <input type="email" id="email" placeholder="jane@example.com" className="w-full px-5 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm bg-white dark:bg-slate-900 dark:bg-slate-100" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">Message</label>
            <textarea id="message" rows={5} placeholder="How can I help you?" className="w-full px-5 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm bg-white dark:bg-slate-900 dark:bg-slate-100 resize-none"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20">
            Send Message <Send size={18} />
          </button>
        </form>

      </div>
    </section>
  );
}
