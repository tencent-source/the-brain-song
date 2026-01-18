import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 to-slate-900 border-y border-indigo-500/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-shrink-0">
             <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center border-4 border-amber-400 shadow-[0_0_30px_rgba(251,191,36,0.4)]">
                <ShieldCheck className="w-24 h-24 text-indigo-900" />
             </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              100% Iron-Clad 60 Day Money-Back Guarantee
            </h3>
            <p className="text-indigo-200 text-lg mb-4">
              Try The Brain Song risk-free. If you don't experience a profound shift in your wealth mindset and relaxation within 60 days, simply let us know.
            </p>
            <p className="text-white font-bold">
              No questions asked. You keep the bonuses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;