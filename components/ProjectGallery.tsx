import React from 'react';
import { BentoCard } from './BentoCard';
import { Project } from '../types';

const PROJECTS: Project[] = [
  { id: 1, title: "Lumina Interface", category: "Design System", image: "https://picsum.photos/600/800?random=1" },
  { id: 2, title: "Chronos", category: "Fintech App", image: "https://picsum.photos/600/600?random=2" },
  { id: 3, title: "Aether", category: "Web3 Platform", image: "https://picsum.photos/600/400?random=3" },
];

export const ProjectGallery: React.FC = () => {
  return (
    <>
      {/* Tall Project Card */}
      <BentoCard className="col-span-1 md:col-span-1 row-span-2 group p-0 overflow-hidden" delay={300}>
        <div className="absolute inset-0 w-full h-full">
            <img 
              src={PROJECTS[0].image} 
              alt={PROJECTS[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal/50 to-charcoal/90"/>
        </div>
        <div className="absolute bottom-0 left-0 p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-2 block border-b border-white/10 pb-2 w-fit">
              {PROJECTS[0].category}
            </span>
            <h3 className="text-2xl font-display font-bold text-white leading-tight">
              {PROJECTS[0].title}
            </h3>
        </div>
      </BentoCard>

      {/* Standard Project Card */}
      <BentoCard className="col-span-1 md:col-span-1 group p-0 overflow-hidden" delay={400}>
        <div className="absolute inset-0 w-full h-full">
            <img 
              src={PROJECTS[1].image} 
              alt={PROJECTS[1].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal/20 to-charcoal/90"/>
        </div>
        <div className="absolute bottom-0 left-0 p-6 w-full">
            <h3 className="text-xl font-display font-bold text-white">
              {PROJECTS[1].title}
            </h3>
        </div>
      </BentoCard>

      {/* Wide Project Card (hidden on mobile small, visible on desktop grid) */}
      <BentoCard className="col-span-1 md:col-span-2 group p-0 overflow-hidden min-h-[200px]" delay={500}>
         <div className="absolute inset-0 w-full h-full">
            <img 
              src={PROJECTS[2].image} 
              alt={PROJECTS[2].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-80 grayscale group-hover:grayscale-0"
            />
             <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/20 transition-colors"/>
        </div>
        <div className="absolute bottom-6 left-8 z-10">
             <span className="text-[10px] font-bold text-sand uppercase tracking-[0.2em] mb-1 block">
              Latest Work
            </span>
            <h3 className="text-3xl font-display font-bold text-white">
              {PROJECTS[2].title}
            </h3>
        </div>
      </BentoCard>
    </>
  );
};