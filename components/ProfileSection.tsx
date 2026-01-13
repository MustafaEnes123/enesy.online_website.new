import React from 'react';
import { BentoCard } from './BentoCard';
import { MapPin, Share2, Briefcase } from 'lucide-react';

export const ProfileSection: React.FC = () => {
  return (
    <BentoCard className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 flex flex-col justify-between min-h-[400px]" delay={0}>
      <div className="flex justify-between items-start z-10 relative">
        <div className="relative cursor-pointer" onClick={() => (window as any).openModal('modal-contact')}>
          <div className="h-28 w-28 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
            <img 
              src="components/profile.jpg" 
              alt="Mustafa Enes Kayacı" 
              className="h-full w-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Enes';
              }}
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-charcoal border border-white/10 text-gold px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Online
          </div>
        </div>
        
        <button onClick={() => (window as any).openModal('modal-positions')} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-[10px] font-bold text-gold uppercase tracking-widest hover:bg-gold/20 transition-all shadow-lg">
            <Briefcase size={12} />
            Positions
        </button>
      </div>
      
      <div className="mt-auto space-y-5 z-10 relative">
        <div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white tracking-tight leading-[0.9] mb-4">
              Mustafa Enes <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-sand to-gold">Kayacı.</span>
            </h1>
            <p className="text-lg text-gray-400 font-light max-w-sm leading-relaxed">
              AI Researcher & Founder of Raw Logic Labs | ASU Student | Hack Club Leader
            </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/5 text-sm text-gray-300">
                <MapPin size={14} className="text-gold"/>
                Worldwide
            </span>
            <button onClick={() => (window as any).openModal('modal-contact')} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold/10 border border-gold/20 text-xs font-bold text-gold uppercase tracking-widest hover:bg-gold/20 transition-all group">
                <Share2 size={14} className="group-hover:rotate-12 transition-transform" />
                Social Links
            </button>
        </div>
      </div>
      
      <div className="absolute -right-10 -top-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
    </BentoCard>
  );
};