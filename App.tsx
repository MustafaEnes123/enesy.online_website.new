import React from 'react';
import { ProfileSection } from './components/ProfileSection';
import { StatWidget } from './components/StatWidget';
import { ProjectGallery } from './components/ProjectGallery';
import { BentoCard } from './components/BentoCard';
import { Award, Code, Mail, Terminal, Users, ArrowRight } from 'lucide-react';

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
                <p className="text-sand text-xs font-bold uppercase tracking-[0.3em] mb-2">Portfolio 2026</p>
                <h2 className="text-xl font-medium text-white/80">Mustafa Enes Kayacı Main Hub</h2>
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
                value="9+" 
                icon={<Code size={20} />} 
                delay={150}
            />
            <StatWidget 
                label="Certificates" 
                value="45+" 
                icon={<Award size={20} />} 
                delay={200}
            />

            {/* 3. Hack Club Card */}
            <BentoCard className="col-span-1 md:col-span-2 flex flex-col justify-between bg-gradient-to-br from-red-500/10 to-transparent border-red-500/10 hover:border-red-500/30" delay={250}>
                 <div className="absolute -right-4 -top-4 text-red-500/5 group-hover:text-red-500/10 transition-colors">
                    <Terminal size={120} />
                </div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-red-500 rounded-xl text-white">
                            <Users size={20} />
                        </div>
                        <h3 className="text-2xl font-display font-bold text-white">Raw Logic Hack Club</h3>
                    </div>
                    <p className="text-gray-400 text-sm max-w-md">Non-profit development space for students to improve themselves with Hack Club.</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-widest">
                    <span>Coming Soon</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
            </BentoCard>

            {/* 4. Project Gallery */}
            <ProjectGallery />

            {/* 5. Contact Footer (Expanded to fill the rest of the grid) */}
            <BentoCard className="col-span-1 md:col-span-3 lg:col-span-4 flex flex-col md:flex-row items-center justify-between gap-8 py-12 px-10" delay={600}>
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Have a project in mind?</h2>
                    <p className="text-gray-400">Open for collaborations and learning opportunities.</p>
                </div>
                <button className="group relative px-8 py-4 rounded-full bg-mocha border border-white/10 text-white font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] flex items-center gap-3 overflow-hidden">
                    <span className="relative z-10">Contact Me</span>
                    <Mail size={18} className="relative z-10 group-hover:rotate-12 transition-transform" />
                    <div className="absolute inset-0 bg-sand/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </button>
            </BentoCard>

        </main>
        
        <footer className="mt-20 flex justify-between items-center text-white/20 text-xs font-medium uppercase tracking-wider">
            <p>© 2026 Mustafa Enes Kayacı</p>
            <p>Built with Glassmorphism</p>
        </footer>

      </div>
    </div>
  );
};

export default App;