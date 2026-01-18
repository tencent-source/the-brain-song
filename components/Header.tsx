import React from 'react';
import { BrainCircuit } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-900/80 border-b border-slate-700">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-indigo-400">
          <BrainCircuit className="w-8 h-8" />
          <span className="text-xl font-bold tracking-tighter text-white">BRAIN<span className="text-indigo-500">SONG</span></span>
        </div>
        <div className="hidden md:block">
          <Button 
            text="Get Started" 
            variant="primary" 
            className="!py-2 !px-6 !text-sm" 
          />
        </div>
      </div>
    </header>
  );
};

export default Header;