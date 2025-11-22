import React, { useRef } from 'react';
import { BentoCard } from './BentoCard';
import { Aperture } from 'lucide-react';

export const SetupGallery: React.FC = () => {
  return (
    <BentoCard className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col justify-center overflow-hidden" delay={600}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6 px-2 z-10 relative">
        <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-gold shadow-lg">
                <Aperture size={20} />
            </div>
            <div>
                <h3 className="text-lg font-display font-bold text-white leading-none">Workspace</h3>
                <p className="text-xs text-gray-500 mt-1">Analog feel, digital soul.</p>
            </div>
        </div>
      </div>
      
      {/* Scroll Area */}
      <div className="flex gap-5 overflow-x-auto no-scrollbar pb-2 snap-x px-2 relative z-10">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex-none w-60 h-40 rounded-2xl overflow-hidden relative snap-center group cursor-pointer border border-white/5">
             <img 
                src={`https://picsum.photos/400/300?grayscale&random=${20+i}`} 
                alt="Setup" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-xs font-bold text-white">Setup 0{i}</span>
             </div>
          </div>
        ))}
      </div>

      {/* Background Ambient */}
      <div className="absolute -left-10 bottom-0 w-40 h-40 bg-sand/5 rounded-full blur-3xl pointer-events-none" />
    </BentoCard>
  );
};