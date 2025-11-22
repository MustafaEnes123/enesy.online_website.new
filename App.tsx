import React from 'react';
import { ProfileSection } from './components/ProfileSection';
import { StatWidget } from './components/StatWidget';
import { ProjectGallery } from './components/ProjectGallery';
import { SetupGallery } from './components/SetupGallery';
import { StoreLink } from './components/StoreLink';
import { BentoCard } from './components/BentoCard';
import { Award, Code, Mail, Zap } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-charcoal selection:bg-gold selection:text-charcoal">
      
      {/* Ambient Background Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-mocha/40 rounded-full blur-[120px] animate-blob mix-blend-overlay" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-gold/10 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen" />
      <div className="fixed top-[20%] right-[10%] w-[20vw] h-[20vw] bg-sand/10 rounded-full blur-[80px] animate-blob animation-delay-4000" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto p-6 md:p-10 lg:p-16">
        
        {/* Header */}
        <header className="flex justify-between items-end mb-12 animate-fade-up" style={{ animationDelay: '100ms' }}>
            <div>
                <p className="text-sand text-xs font-bold uppercase tracking-[0.3em] mb-2">Portfolio 2025</p>
                <h2 className="text-xl font-medium text-white/80">The Digital Archive</h2>
            </div>
            <div className="hidden md:block h-px w-32 bg-gradient-to-r from-transparent to-white/20" />
        </header>

        {/* Asymmetrical Bento Grid */}
        <main className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-5">
            
            {/* 1. Profile (2x2) */}
            <ProfileSection />

            {/* 2. Stats Column */}
            <StatWidget 
                label="Experience" 
                value="8+" 
                icon={<Code size={20} />} 
                delay={150}
            />
            <StatWidget 
                label="Honors" 
                value="14" 
                icon={<Award size={20} />} 
                delay={200}
            />

            {/* 3. Text Block (Quote) */}
            <BentoCard className="col-span-1 md:col-span-2 flex flex-col justify-center p-10 bg-gradient-to-br from-white/5 to-transparent" delay={250}>
                 <Zap size={24} className="text-gold mb-4" />
                <blockquote className="text-2xl md:text-3xl font-display font-medium leading-snug text-white">
                    "Simplicity is the ultimate <span className="text-gray-500 italic font-serif">sophistication</span>."
                </blockquote>
            </BentoCard>

            {/* 4. Project Gallery Mixed Grid */}
            <ProjectGallery />

            {/* 5. Wide Setup Gallery */}
            <SetupGallery />

            {/* 6. Store Link */}
            <StoreLink />

            {/* 7. Contact Footer */}
            <BentoCard className="col-span-1 md:col-span-3 lg:col-span-4 flex flex-col md:flex-row items-center justify-between gap-8 py-12 px-10" delay={800}>
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Let's build the future.</h2>
                    <p className="text-gray-400">Open for select collaborations in Q4 2025.</p>
                </div>
                <button className="group relative px-8 py-4 rounded-full bg-white text-charcoal font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] flex items-center gap-3 overflow-hidden">
                    <span className="relative z-10">Get in Touch</span>
                    <Mail size={18} className="relative z-10 group-hover:rotate-12 transition-transform" />
                    <div className="absolute inset-0 bg-sand transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </button>
            </BentoCard>

        </main>
        
        <footer className="mt-20 flex justify-between items-center text-white/20 text-xs font-medium uppercase tracking-wider">
            <p>© 2025 Alex Morgan</p>
            <p>Designed in React</p>
        </footer>

      </div>
    </div>
  );
};

export default App;