import React, { useEffect, useState } from 'react';
import Button from './Button';
import { X, Gift, Headphones } from 'lucide-react';

const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Logic to detect exit intent
    const handleMouseLeave = (e: MouseEvent) => {
      // Check if mouse left via the top of the viewport
      if (e.clientY <= 0) {
        // Check if we've already shown the popup this session
        const hasSeenPopup = sessionStorage.getItem('brainSongExitIntentShown');
        if (!hasSeenPopup) {
          setIsVisible(true);
          sessionStorage.setItem('brainSongExitIntentShown', 'true');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border-2 border-amber-500/50 rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden relative transform animate-scale-in">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header Background */}
        <div className="bg-gradient-to-r from-indigo-900 to-slate-900 p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-500/20 rounded-full blur-[60px] pointer-events-none"></div>
          
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 rounded-full mb-4 shadow-[0_0_20px_rgba(245,158,11,0.5)] animate-bounce">
            <Gift className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl font-black text-white mb-2 relative z-10 uppercase italic">
            Wait! Before You Go...
          </h2>
          <p className="text-indigo-200 font-medium relative z-10">
            We have a special one-time offer for you.
          </p>
        </div>

        {/* Content */}
        <div className="p-8 pt-6 bg-slate-800">
          <div className="flex gap-4 mb-6 bg-slate-900/50 p-4 rounded-lg border border-slate-700">
             <Headphones className="w-10 h-10 text-amber-400 flex-shrink-0" />
             <div>
               <h4 className="font-bold text-white mb-1">Unlock Your Free Audio Bonus</h4>
               <p className="text-sm text-slate-400 leading-snug">
                 Today only: Get the <span className="text-amber-400 font-bold">5-Minute Meditation for Focus</span> audio track ($39 Value) for FREE when you try The Brain Song.
               </p>
             </div>
          </div>

          <div className="space-y-4">
            <Button 
              text="Claim My Free Audio & Discount" 
              variant="secondary" 
              fullWidth 
              className="text-lg animate-pulse"
            />
            
            <button 
              onClick={handleClose}
              className="w-full text-center text-slate-500 hover:text-slate-300 text-sm font-medium transition-colors"
            >
              No thanks, I don't need help focusing instantly.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;