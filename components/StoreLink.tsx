import React from 'react';
import { BentoCard } from './BentoCard';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export const StoreLink: React.FC = () => {
  return (
    <BentoCard className="col-span-1 bg-gradient-to-br from-sand to-gold text-charcoal flex flex-col justify-between group border-none" delay={700}>
      <div className="flex justify-between items-start">
        <div className="p-2 bg-charcoal/10 rounded-full">
             <ShoppingBag size={24} className="text-charcoal" />
        </div>
        <div className="w-8 h-8 rounded-full bg-charcoal/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
            <ArrowRight size={16} />
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-display font-bold mb-1">Store</h3>
        <p className="text-charcoal/70 text-xs font-medium uppercase tracking-wide">Assets & Icons</p>
      </div>
    </BentoCard>
  );
};