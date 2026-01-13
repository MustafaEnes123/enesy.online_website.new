import React from 'react';
import { BentoCard } from './BentoCard';

interface StatWidgetProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
  delay?: number;
}

export const StatWidget: React.FC<StatWidgetProps> = ({ label, value, icon, delay }) => {
  return (
    <BentoCard className="col-span-1 flex flex-col justify-center items-start gap-1 relative overflow-hidden group" delay={delay}>
       <div className="absolute top-4 right-4 text-white/20 group-hover:text-gold transition-colors duration-500 group-hover:scale-110 transform">
        {icon}
      </div>
      <span className="text-5xl md:text-6xl font-display font-bold text-white tracking-tighter">{value}</span>
      <span className="text-xs uppercase tracking-widest font-medium text-sand/60 border-t border-white/10 pt-2 mt-1 w-full">{label}</span>
      
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-gold/10 to-transparent rounded-tl-3xl" />
    </BentoCard>
  );
};