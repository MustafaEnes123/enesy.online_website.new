import React from 'react';
import { BentoCard } from './BentoCard';
import { Code, ChevronRight } from 'lucide-react';

interface InstitutionWidgetProps {
  onClick?: () => void;
}

export const InstitutionWidget: React.FC<InstitutionWidgetProps> = () => {
  return (
    <BentoCard 
      className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col justify-between bg-glass-surface border-glass-border hover:bg-glass-surface-hover hover:border-white/20 transition-all duration-500 overflow-hidden group" 
      delay={600}
      onClick={() => window.location.href = 'institutions.html'}
    >
        {/* Subtle Background Effect */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-[80px] group-hover:bg-white/10 transition-colors duration-500" />

       <div className="relative z-10">
           <div className="flex items-center gap-3 mb-4">
               <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                   <Code size={24} className="text-gold" />
               </div>
               <h3 className="text-2xl font-display font-bold text-white tracking-tight">Institution Memberships</h3>
           </div>
           <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-medium">Student Developer in the global Google Developer Groups ecosystem. Building the future with Gemini & Cloud.</p>
       </div>
       <div className="mt-6 flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-[0.2em]">
           <span className="group-hover:text-gold-light transition-colors">Access Logic</span>
           <ChevronRight size={16} className="group-hover:translate-x-1 transition-all" />
       </div>
    </BentoCard>
  );
};
