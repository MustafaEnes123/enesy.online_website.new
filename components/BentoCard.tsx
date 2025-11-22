import React from 'react';
import { BentoItemProps } from '../types';

export const BentoCard: React.FC<BentoItemProps> = ({ children, className = '', onClick, delay = 0 }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        group
        relative 
        overflow-hidden 
        rounded-[32px] 
        backdrop-blur-[24px]
        bg-glass-surface
        border border-glass-border
        p-8
        shadow-lg
        hover:shadow-gold/5
        hover:bg-glass-surface-hover
        hover:border-white/10
        hover:-translate-y-1
        transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)
        cursor-pointer
        opacity-0 animate-fade-up
        ${className}
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Inner Glow Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent" />
      
      {children}
    </div>
  );
};