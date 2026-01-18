import React from 'react';
import { AFFILIATE_LINK } from '../constants';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  text?: string;
  subtext?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'danger';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  text = "Get Instant Access Now", 
  subtext,
  className = "", 
  variant = 'secondary',
  fullWidth = false
}) => {
  
  const handleClick = () => {
    window.location.href = AFFILIATE_LINK;
  };

  const baseStyles = "relative group overflow-hidden font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900";
  
  const variants = {
    primary: "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/30",
    secondary: "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white shadow-lg shadow-orange-500/30",
    danger: "bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-lg shadow-red-500/30",
  };

  return (
    <button 
      onClick={handleClick}
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${subtext ? 'py-4 px-8' : 'py-5 px-10'}
        ${className}
      `}
    >
      <div className="flex flex-col items-center justify-center relative z-10">
        <div className="flex items-center gap-2 text-xl md:text-2xl uppercase tracking-wide">
          {text}
          <ArrowRight className="w-6 h-6 animate-pulse" />
        </div>
        {subtext && (
          <span className="text-xs md:text-sm font-medium opacity-90 mt-1 block">
            {subtext}
          </span>
        )}
      </div>
      
      {/* Shine effect overlay */}
      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
    </button>
  );
};

export default Button;