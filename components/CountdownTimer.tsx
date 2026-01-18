import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  compact?: boolean;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  className = "", 
  size = 'md',
  label = "Offer Ends In:",
  compact = false
}) => {
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes default

  useEffect(() => {
    // Sync with local storage for consistency across refreshes
    const storedStart = localStorage.getItem('brainSongTimer');
    const now = Math.floor(Date.now() / 1000);
    const duration = 900; // 15 mins

    let start = storedStart ? parseInt(storedStart) : 0;
    
    // Reset if expired or not set, acts as an evergreen timer loop
    if (!start || (now - start) > duration) {
        start = now;
        localStorage.setItem('brainSongTimer', start.toString());
    }

    const tick = () => {
        const currentNow = Math.floor(Date.now() / 1000);
        const elapsed = currentNow - start;
        const remaining = Math.max(0, duration - elapsed);
        setTimeLeft(remaining);
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const s = (timeLeft % 60).toString().padStart(2, '0');

  if (compact) {
      return (
          <span className={`font-mono font-bold ${className}`}>
              {m}:{s}
          </span>
      );
  }

  // Size configurations
  const sizes = {
      sm: { box: "w-8 h-8 text-sm", sep: "text-sm" },
      md: { box: "w-12 h-10 text-xl", sep: "text-xl" },
      lg: { box: "w-16 h-14 text-3xl", sep: "text-3xl" }
  };
  
  const currentSize = sizes[size];

  return (
    <div className={`flex flex-col items-center justify-center gap-2 ${className}`}>
      {label && <span className="text-xs uppercase tracking-widest text-red-400 font-bold animate-pulse">{label}</span>}
      <div className="flex items-center gap-2">
        <div className={`${currentSize.box} bg-slate-800 border border-slate-600 rounded flex items-center justify-center font-mono text-white shadow-lg`}>
            {m}
        </div>
        <span className={`${currentSize.sep} text-slate-500 font-bold`}>:</span>
        <div className={`${currentSize.box} bg-slate-800 border border-slate-600 rounded flex items-center justify-center font-mono text-red-500 shadow-lg`}>
            {s}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;