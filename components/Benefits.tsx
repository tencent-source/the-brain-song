import React from 'react';
import { Coins, Moon, Zap, Shield, Heart, Smile } from 'lucide-react';
import Button from './Button';
import CountdownTimer from './CountdownTimer';

const benefitsList = [
  {
    icon: Coins,
    title: "Attract Wealth",
    desc: "Tune your mind to the frequency of abundance and spot opportunities you missed before."
  },
  {
    icon: Moon,
    title: "Deep Sleep",
    desc: "Quiet the mental chatter that keeps you up at night. Wake up feeling fully recharged."
  },
  {
    icon: Zap,
    title: "Laser Focus",
    desc: "Eliminate brain fog. Get more done in 2 hours than most people do in 2 days."
  },
  {
    icon: Shield,
    title: "Stress Relief",
    desc: "Wash away cortisol and anxiety. Feel a sense of calm regardless of external chaos."
  },
  {
    icon: Heart,
    title: "Better Relationships",
    desc: "When you are calm and centered, your relationships naturally improve and flourish."
  },
  {
    icon: Smile,
    title: "Mood Elevation",
    desc: "Naturally boost serotonin and dopamine levels for a happier daily outlook."
  }
];

const Benefits: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">What Happens When You <br/><span className="text-indigo-400">Listen Daily?</span></h2>
          <p className="text-lg text-slate-300">It's not just about money. The Brain Song upgrades your entire operating system.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefitsList.map((item, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-colors group">
              <div className="w-14 h-14 bg-indigo-900/50 rounded-xl flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <CountdownTimer size="md" className="mb-6" />
          <Button text="Experience The Transformation" variant="secondary" className="text-lg md:text-xl" />
        </div>
      </div>
    </section>
  );
};

export default Benefits;