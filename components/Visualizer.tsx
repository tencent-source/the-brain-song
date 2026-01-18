import React, { useEffect, useRef } from 'react';

const Visualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let frame = 0;

    const resize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };
    
    window.addEventListener('resize', resize);
    resize();

    const drawWave = (
      amplitude: number, 
      frequency: number, 
      speed: number, 
      color: string, 
      verticalOffset: number,
      complexity: number
    ) => {
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = color;
      
      const w = canvas.width;
      const h = canvas.height;
      const mid = h / 2;

      for (let x = 0; x < w; x++) {
        // Compound sine wave for more "biological" look
        const y = mid + verticalOffset +
          Math.sin(x * frequency + frame * speed) * amplitude * 
          Math.sin(frame * 0.02 + x * 0.005 * complexity); // Amplitude modulation
        
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    };

    const animate = () => {
      frame++;
      const w = canvas.width;
      const h = canvas.height;

      // Clear with trail effect for "screen persistence" feel
      ctx.fillStyle = 'rgba(15, 23, 42, 0.2)'; // Slate 900 with low opacity
      ctx.fillRect(0, 0, w, h);

      // Draw Grid
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.1)'; // Indigo
      ctx.lineWidth = 1;
      const gridSize = 50;
      const gridOffset = (frame * 0.5) % gridSize;
      
      for(let x = gridOffset; x < w; x += gridSize) {
         ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for(let y = 0; y < h; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }
      
      // Draw Waves representing "Brain Activity"
      
      // Deep Theta (Wealth/Relaxation) - Indigo
      drawWave(h * 0.15, 0.005, 0.02, 'rgba(129, 140, 248, 0.3)', 0, 1);
      
      // Alpha (Focus) - Purple
      drawWave(h * 0.1, 0.01, 0.04, 'rgba(192, 132, 252, 0.4)', 0, 1.5);
      
      // "The Leak" / Stress Spike - Red/Pink - occasional glitches
      if (Math.random() > 0.98) {
         ctx.strokeStyle = 'rgba(244, 63, 94, 0.8)';
         ctx.beginPath();
         const spikeX = Math.random() * w;
         ctx.moveTo(spikeX, h/2 - 50);
         ctx.lineTo(spikeX + 20, h/2 + 50);
         ctx.stroke();
         
         // Glitch Text Effect
         ctx.fillStyle = 'rgba(244, 63, 94, 0.8)';
         ctx.font = '10px monospace';
         ctx.fillText('! SIGNAL INTERFERENCE', spikeX + 10, h/2 - 60);
      }
      
      // Active Frequency (Golden/Amber) - The Solution
      drawWave(h * 0.08, 0.02, 0.06, 'rgba(251, 191, 36, 0.9)', 0, 0.5);

      // Scanning line
      const scanX = (frame * 5) % w;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(scanX, 0, 50, h);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full h-full bg-slate-900 relative overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
      
      {/* Overlay UI elements simulating a recording interface */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]"></div>
      
      <div className="absolute top-4 left-6 flex flex-col gap-1 opacity-80">
         <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
            <span className="text-xs font-mono text-red-400 font-bold tracking-widest shadow-black drop-shadow-md">REC ● LIVE FEED</span>
         </div>
         <span className="text-[10px] font-mono text-slate-400">SUBJECT: CORTEX SCAN // 004-921</span>
      </div>

      <div className="absolute bottom-6 right-6 text-right opacity-90">
         <div className="text-xs font-mono text-emerald-400 font-bold tracking-widest mb-1 shadow-black drop-shadow-md">WEALTH FREQUENCY DETECTED</div>
         <div className="h-1 w-32 bg-slate-800 rounded-full overflow-hidden ml-auto border border-slate-700">
            <div className="h-full bg-emerald-500 animate-[width_2s_ease-in-out_infinite]" style={{width: '60%'}}></div>
         </div>
      </div>
      
      {/* Center Reticle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-indigo-500/20 rounded-full flex items-center justify-center opacity-30">
          <div className="w-56 h-56 border border-indigo-500/10 rounded-full"></div>
          <div className="absolute top-0 bottom-0 w-[1px] bg-indigo-500/20"></div>
          <div className="absolute left-0 right-0 h-[1px] bg-indigo-500/20"></div>
      </div>
    </div>
  );
};

export default Visualizer;