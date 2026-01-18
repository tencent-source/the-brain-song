import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const AVATARS = [
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/85.jpg"
];

const NAMES = ["Sarah", "Michael", "Jessica", "David", "Emily", "James", "Ashley", "Robert"];

const SocialProofWidget: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [count, setCount] = useState(412);
  const [recentName, setRecentName] = useState("Sarah");

  useEffect(() => {
    // Simulate live purchases incrementing slowly
    const interval = setInterval(() => {
      if (Math.random() > 0.6) {
        setCount(prev => prev + 1);
        setRecentName(NAMES[Math.floor(Math.random() * NAMES.length)]);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex flex-col md:flex-row items-center justify-center gap-3 animate-fade-in ${className}`}>
      {/* Avatar Stack */}
      <div className="flex -space-x-3">
        {AVATARS.map((src, i) => (
          <img 
            key={i}
            src={src} 
            alt="User" 
            className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover"
          />
        ))}
        <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-xs font-bold text-white">
          +{(count % 100) + 10}
        </div>
      </div>

      {/* Text Proof */}
      <div className="text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-1 mb-1">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-3 h-3 text-amber-400 fill-current" />
            ))}
          </div>
          <span className="text-xs text-slate-400 font-bold">4.9/5 RATING</span>
        </div>
        <p className="text-sm text-slate-300">
          Join <strong className="text-white">{recentName}</strong> and <strong className="text-amber-400">{count.toLocaleString()} others</strong> who joined today.
        </p>
      </div>
    </div>
  );
};

export default SocialProofWidget;