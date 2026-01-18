import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Play } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Stories From The <span className="text-amber-400">Community</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <div 
              key={t.id} 
              className={`bg-slate-800 p-8 rounded-2xl relative flex flex-col h-full ${index === TESTIMONIALS.length - 1 ? 'md:col-start-2 md:col-span-1 shadow-2xl shadow-indigo-500/10 border border-indigo-500/30' : ''}`}
            >
              <div className="absolute -top-6 left-8">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full border-4 border-slate-800 shadow-lg" 
                />
              </div>
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>
              
              {/* @ts-ignore - 'video' property exists on some items */}
              {t.video && (
                <div className="mb-4 mt-2 relative rounded-xl overflow-hidden bg-black aspect-video group shadow-lg border border-slate-700">
                  <video 
                    src={t.video} 
                    controls 
                    className="w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=800&q=80"
                  >
                    Your browser does not support the video tag.
                  </video>
                  {/* Decorative Play Button (hidden when controls are active/playing usually, but serves as a call to action if poster is shown) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 shadow-xl">
                       <Play className="w-5 h-5 text-white fill-current ml-1" />
                    </div>
                  </div>
                </div>
              )}

              <p className="text-slate-300 italic mb-6 flex-grow">"{t.text}"</p>
              <div>
                <h4 className="font-bold text-white">{t.name}</h4>
                <p className="text-xs text-slate-500 uppercase tracking-widest">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;