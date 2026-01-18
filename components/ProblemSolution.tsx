import React from 'react';
import { Activity, Brain, TrendingDown } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Why You Feel <span className="text-red-400">Stuck</span> Despite Working Hard
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              It’s not your fault. Most people are operating with a biological disadvantage. 
              Scientists have discovered a phenomenon called "The Brain Leak".
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              When you're stressed, your brain focuses entirely on survival. It shuts down the creative, 
              wealth-attracting centers of your mind. You literally cannot "see" opportunities even if they are right in front of you.
            </p>
            
            <ul className="space-y-4 mt-6">
              {[
                "Constant financial anxiety",
                "Feeling mentally drained by noon",
                "Unable to focus on long-term goals",
                "Watching others succeed while you struggle"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <TrendingDown className="w-6 h-6 text-red-400 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-indigo-500/10 rounded-3xl blur-2xl"></div>
             <div className="relative bg-slate-900 p-8 rounded-3xl border border-slate-700 shadow-2xl">
               <div className="flex items-center gap-4 mb-6">
                 <Brain className="w-12 h-12 text-indigo-400" />
                 <h3 className="text-2xl font-bold text-white">The Brain Song Solution</h3>
               </div>
               <p className="text-slate-300 mb-6">
                 The Brain Song uses a specific audio frequency that targets the hippocampus and gently 
                 switches your brain from "Survival Mode" to "Abundance Mode".
               </p>
               <div className="space-y-4">
                 <div className="bg-slate-800 p-4 rounded-lg flex items-center gap-4 border border-slate-700">
                   <div className="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center text-indigo-400 font-bold">1</div>
                   <div>
                     <h4 className="font-bold text-white">Listen</h4>
                     <p className="text-sm text-slate-400">Put on headphones and hit play.</p>
                   </div>
                 </div>
                 <div className="bg-slate-800 p-4 rounded-lg flex items-center gap-4 border border-slate-700">
                   <div className="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center text-indigo-400 font-bold">2</div>
                   <div>
                     <h4 className="font-bold text-white">Activate</h4>
                     <p className="text-sm text-slate-400">The frequencies realign your neural pathways.</p>
                   </div>
                 </div>
                 <div className="bg-slate-800 p-4 rounded-lg flex items-center gap-4 border border-slate-700">
                   <div className="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center text-indigo-400 font-bold">3</div>
                   <div>
                     <h4 className="font-bold text-white">Attract</h4>
                     <p className="text-sm text-slate-400">Watch as opportunities and wealth naturally find you.</p>
                   </div>
                 </div>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;