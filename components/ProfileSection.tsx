import React from 'react';
import { BentoCard } from './BentoCard';
import { ArrowUpRight, Globe } from 'lucide-react';

export const ProfileSection: React.FC = () => {
  return (
    <BentoCard className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 flex flex-col justify-between min-h-[400px]" delay={0}>
      <div className="flex justify-between items-start z-10 relative">
        <div className="relative">
          <div className="h-28 w-28 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=400&auto=format&fit=crop" 
              alt="Profile" 
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-charcoal border border-white/10 text-gold px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Online
          </div>
        </div>
        
        <button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all text-sand">
            <ArrowUpRight size={24} />
        </button>
      </div>
      
      <div className="mt-auto space-y-5 z-10 relative">
        <div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white tracking-tight leading-[0.9] mb-4">
              Mustafa Enes <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-sand to-gold">Kayacı.</span>
            </h1>
            <p className="text-lg text-gray-400 font-light max-w-sm leading-relaxed">
              AI Engineer | Researcher
            </p>
        </div>
        
        <div className="flex flex-wrap gap-3 pt-2">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/5 text-sm text-gray-300 hover:bg-white/10 transition-colors">
                <Globe size={14} className="text-gold"/>
                Türkiye / Worldwide
            </span>
        </div>
      </div>
      
      {/* Decorative Blob inside card */}
      <div className="absolute -right-10 -top-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
    </BentoCard>
  );
};