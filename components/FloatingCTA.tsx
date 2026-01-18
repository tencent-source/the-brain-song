import React, { useState, useEffect } from 'react';
import Button from './Button';
import CountdownTimer from './CountdownTimer';
import { Eye } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [viewers, setViewers] = useState(124);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Simulate changing viewer count
    const interval = setInterval(() => {
        setViewers(prev => prev + (Math.random() > 0.5 ? 1 : -1));
    }, 5000);

    return () => {
        window.removeEventListener('scroll', handleScroll);
        clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-3 bg-slate-900/95 backdrop-blur-lg border-t border-indigo-500/30 z-50 animate-slide-up shadow-[0_-5px_20px_rgba(0,0,0,0.5)] md:hidden">
      
      {/* Viewer Counter */}
      <div className="absolute -top-8 left-0 right-0 flex justify-center pointer-events-none">
          <div className="bg-slate-800/90 backdrop-blur-md px-3 py-1 rounded-t-lg border-t border-x border-slate-700 text-xs text-indigo-300 font-bold flex items-center gap-1.5 shadow-lg">
             <Eye className="w-3 h-3" />
             <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
             {viewers} people watching now
          </div>
      </div>

      <div className="flex items-center justify-between gap-3">
         <div className="text-white font-bold text-xs leading-tight flex-shrink-0">
            <span className="text-slate-400">Offer ends in:</span> <br/>
            <span className="text-red-400 flex items-center gap-1 text-sm font-mono">
              <CountdownTimer compact className="text-red-400" />
            </span>
         </div>
         <Button 
            text="Instant Access" 
            className="!py-3 !px-4 !text-sm flex-grow shadow-indigo-500/20" 
            subtext=""
            variant="secondary"
         />
      </div>
    </div>
  );
};

export default FloatingCTA;