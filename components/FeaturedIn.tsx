import React from 'react';
import { Newspaper, Award, Globe, Radio, Feather } from 'lucide-react';

const FeaturedIn: React.FC = () => {
  return (
    <section className="py-12 bg-slate-950 border-y border-slate-800">
      <div className="container mx-auto px-4">
        <p className="text-center text-slate-500 text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-10">
          Recognized by Experts & Featured In
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
          {/* Logo 1: Scientific Mind */}
          <div className="flex items-center gap-2 group cursor-default select-none grayscale hover:grayscale-0 transition-all">
            <Newspaper className="w-8 h-8 text-slate-400 group-hover:text-indigo-400 transition-colors" />
            <span className="text-2xl font-serif font-bold text-slate-300 group-hover:text-white transition-colors">Scientific<span className="font-light italic">Mind</span></span>
          </div>

          {/* Logo 2: The Daily Health */}
          <div className="flex items-center gap-2 group cursor-default select-none grayscale hover:grayscale-0 transition-all">
            <Globe className="w-8 h-8 text-slate-400 group-hover:text-emerald-400 transition-colors" />
            <span className="text-2xl font-sans font-black tracking-tighter text-slate-300 group-hover:text-white transition-colors uppercase">Daily<span className="text-slate-500 group-hover:text-emerald-400">Health</span></span>
          </div>

          {/* Logo 3: Innovation Award */}
          <div className="flex items-center gap-3 group cursor-default select-none grayscale hover:grayscale-0 transition-all">
            <div className="relative">
                <Award className="w-10 h-10 text-slate-400 group-hover:text-amber-400 transition-colors" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full animate-pulse opacity-0 group-hover:opacity-100"></div>
            </div>
            <div className="flex flex-col leading-none">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Excellence In</span>
                <span className="text-lg font-bold text-slate-300 group-hover:text-white">NeuroScience</span>
            </div>
          </div>

          {/* Logo 4: Wellness Weekly */}
          <div className="flex items-center gap-2 group cursor-default select-none grayscale hover:grayscale-0 transition-all">
            <Feather className="w-8 h-8 text-slate-400 group-hover:text-pink-400 transition-colors" />
            <span className="text-2xl font-bold italic text-slate-300 group-hover:text-white transition-colors">Wellness<span className="not-italic font-light">Weekly</span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;