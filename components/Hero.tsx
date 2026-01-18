import React, { useState } from 'react';
import Button from './Button';
import Visualizer from './Visualizer';
import CountdownTimer from './CountdownTimer';
import SocialProofWidget from './SocialProofWidget';
import { ShieldCheck, Clock, Zap, Share2, Check } from 'lucide-react';

const Hero: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'The Brain Song',
          text: "Fix The 'Brain Leak' & Attract Wealth",
          url: window.location.href
        });
      } catch (err) {
        // User cancelled or share failed
        console.log('Share skipped', err);
      }
    } else {
      // Fallback to clipboard copy
      try {
        await navigator.clipboard.writeText(window.location.href);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy', err);
      }
    }
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-block px-4 py-1 mb-6 rounded-full bg-indigo-900/50 border border-indigo-500/30 text-indigo-300 font-medium text-sm animate-pulse-slow">
          ⚠️ Important: Watch This Before It's Taken Down
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">10-Second</span> Ritual That <br className="hidden md:block" />
          Activates Your <span className="text-amber-400">Wealth Brain</span>
        </h1>

        <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          Discover the scientifically proven soundwave that fixes the "leak" in your brain, attracting wealth, abundance, and peace effortlessly.
        </p>

        {/* Video Placeholder Container */}
        <div className="relative max-w-4xl mx-auto mb-12 group cursor-pointer aspect-video bg-black rounded-xl border-2 border-slate-700 shadow-2xl overflow-hidden hover:border-indigo-500/50 transition-colors duration-300">
             {/* Animated Visualizer Background */}
             <div className="absolute inset-0 bg-slate-900">
               <Visualizer />
             </div>
             
             {/* Play Button Overlay */}
             <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-all backdrop-blur-[1px]">
                {/* Ripple Effect */}
                <div className="absolute w-20 h-20 md:w-24 md:h-24 bg-white/30 rounded-full animate-ping"></div>
                <div className="absolute w-20 h-20 md:w-24 md:h-24 bg-white/20 rounded-full animate-[ping_1.5s_ease-in-out_infinite_delay-75]"></div>
                
                <a href="https://2ab7bvavce4cdge3wypf7dt85h.hop.clickbank.net" className="relative z-10 w-20 h-20 md:w-24 md:h-24 bg-white/90 rounded-full flex items-center justify-center pl-2 shadow-[0_0_50px_rgba(255,255,255,0.6)] transition-transform group-hover:scale-110 group-hover:bg-white">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[24px] border-l-slate-900 border-b-[12px] border-b-transparent ml-1"></div>
                </a>
             </div>
             
             <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end pointer-events-none">
               <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded text-sm font-bold text-white border border-white/10">
                 WATCH: The Brain Leak Discovery
               </div>
               <div className="bg-red-600 px-2 py-1 rounded text-xs font-bold text-white animate-pulse shadow-lg shadow-red-600/50">
                 LIVE
               </div>
             </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <CountdownTimer size="lg" className="mb-2" />
          
          <Button 
            text="Yes! I Want To Fix My Brain Leak" 
            subtext="Instant Digital Download - 100% Secure"
            className="md:w-[40rem] text-xl"
            variant="secondary"
          />
          
          <SocialProofWidget className="mt-2 mb-4" />
          
          <button 
            onClick={handleShare}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium group mb-2"
          >
            <div className="p-2 rounded-full bg-slate-800 border border-slate-700 group-hover:border-indigo-500 transition-colors">
               {isCopied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
            </div>
            <span>{isCopied ? "Link Copied!" : "Share this discovery"}</span>
          </button>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-slate-400 text-sm font-medium border-t border-slate-800 pt-6 w-full max-w-4xl">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              60-Day Guarantee
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-500" />
              Instant Access
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" />
              Scientifically Backed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;