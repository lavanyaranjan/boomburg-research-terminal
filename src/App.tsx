import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { BehavioralFoundations } from './components/sections/BehavioralFoundations';
import { EducationalDesign } from './components/sections/EducationalDesign';
import { TrustCredibility } from './components/sections/TrustCredibility';
import { MarketStructure, CulturalFactors, BehaviorChange, EthicsRegulation, Interdisciplinary } from './components/sections/RemaingSections';
import { ChevronDown } from 'lucide-react';

interface Section {
  id: string;
  title: string;
  subtitle: string;
  questions: number;
  component: React.ComponentType;
}

const sections: Section[] = [
  {
    id: 'behavioral',
    title: 'Behavioral & Psychological Foundations',
    subtitle: 'Psychology',
    questions: 5,
    component: BehavioralFoundations,
  },
  {
    id: 'educational',
    title: 'Educational Design & Learning Effectiveness',
    subtitle: 'Education',
    questions: 5,
    component: EducationalDesign,
  },
  {
    id: 'trust',
    title: 'Trust, Credibility & Platform Design',
    subtitle: 'Trust',
    questions: 5,
    component: TrustCredibility,
  },
  {
    id: 'market',
    title: 'Market Structure & System Complexity',
    subtitle: 'Markets',
    questions: 4,
    component: MarketStructure,
  },
  {
    id: 'cultural',
    title: 'Cultural, Social & Demographic Factors',
    subtitle: 'Demographics',
    questions: 5,
    component: CulturalFactors,
  },
  {
    id: 'behavior-change',
    title: 'Long-Term Behavior Change & Measurement',
    subtitle: 'Measurement',
    questions: 5,
    component: BehaviorChange,
  },
  {
    id: 'ethics',
    title: 'Ethics, Regulation & Industry Dynamics',
    subtitle: 'Ethics',
    questions: 5,
    component: EthicsRegulation,
  },
  {
    id: 'interdisciplinary',
    title: 'Interdisciplinary Connections',
    subtitle: 'Connections',
    questions: 4,
    component: Interdisciplinary,
  },
];

const HeroSection: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Scanline effect */}
      <div className="scanline" />
      
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <div className="text-sm text-muted-foreground uppercase tracking-widest mb-2">
              Research Terminal v1.0
            </div>
            <h1 className="text-6xl mb-4 tracking-tight text-[rgb(0,255,136)]">
              BOOMBURG
              {showCursor && <span className="text-primary">▋</span>}
            </h1>
            <div className="text-xl text-muted-foreground mb-2">
              Financial Behavior Research Archive
            </div>
          </div>

          <div className="mb-12 p-6 bg-card/50 border border-border rounded backdrop-blur-sm">
            <div className="text-sm text-left space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-accent">{'>'}</span>
                <span className="text-muted-foreground">Comprehensive analysis of 38 research questions across 8 domains</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent">{'>'}</span>
                <span className="text-muted-foreground">Interactive data visualizations of behavioral finance findings</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent">{'>'}</span>
                <span className="text-muted-foreground">Evidence-based insights for retail investor education</span>
              </div>
            </div>
          </div>

          <motion.button
            onClick={onStart}
            className="group px-8 py-4 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-all duration-300 inline-flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Initialize Research Terminal</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </motion.button>

          <div className="mt-12 grid grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-card/30 border border-border rounded">
              <div className="text-2xl text-primary mb-1">38</div>
              <div className="text-xs text-muted-foreground">Questions</div>
            </div>
            <div className="p-4 bg-card/30 border border-border rounded">
              <div className="text-2xl text-accent mb-1">8</div>
              <div className="text-xs text-muted-foreground">Sections</div>
            </div>
            <div className="p-4 bg-card/30 border border-border rounded">
              <div className="text-2xl text-[rgb(196,196,196)] mb-1">100+</div>
              <div className="text-xs text-muted-foreground">Data Points</div>
            </div>
            <div className="p-4 bg-card/30 border border-border rounded">
              <div className="text-2xl text-chart-4 mb-1">∞</div>
              <div className="text-xs text-muted-foreground">Insights</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default function App() {
  const [started, setStarted] = useState(false);
  const [currentSection, setCurrentSection] = useState<string>('behavioral');

  const currentSectionData = sections.find(s => s.id === currentSection);
  const CurrentComponent = currentSectionData?.component || BehavioralFoundations;

  const handleNavigate = (sectionId: string) => {
    setCurrentSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeClick = () => {
    setStarted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!started) {
    return <HeroSection onStart={() => setStarted(true)} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Scanline effect */}
      <div className="scanline" />
      
      <Header currentSection={currentSectionData?.title || ''} onHomeClick={handleHomeClick} />
      <Navigation 
        sections={sections}
        currentSection={currentSection}
        onNavigate={handleNavigate}
      />
      
      <main className="ml-80 pt-16">
        <div className="min-h-screen p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <CurrentComponent />
            </motion.div>
          </AnimatePresence>

          {/* Footer */}
          <footer className="mt-20 pt-8 border-t border-border">
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-sm mb-2">BOOMBURG Terminal</div>
                <div className="text-xs text-muted-foreground">
                  Comprehensive financial behavior research analysis platform
                </div>
              </div>
              <div>
                <div className="text-sm mb-2">Data Sources</div>
                <div className="text-xs text-muted-foreground">
                  Academic research, industry reports, behavioral economics studies
                </div>
              </div>
              <div>
                <div className="text-sm mb-2">Last Updated</div>
                <div className="text-xs text-muted-foreground">
                  November 6, 2025 — {sections.length} Sections Indexed
                </div>
              </div>
            </div>
            <div className="text-xs text-muted-foreground text-center py-4">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>System Operational — All Research Modules Online</span>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
