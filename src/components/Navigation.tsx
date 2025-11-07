import React from 'react';
import { ChevronRight } from 'lucide-react';

interface Section {
  id: string;
  title: string;
  subtitle: string;
  questions: number;
}

interface NavigationProps {
  sections: Section[];
  currentSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ sections, currentSection, onNavigate }) => {
  return (
    <nav className="fixed left-0 top-16 bottom-0 w-80 bg-card border-r border-border overflow-y-auto">
      <div className="p-4">
        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4 px-3">
          Research Sections
        </div>
        
        <div className="space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onNavigate(section.id)}
              className={`w-full text-left p-3 rounded transition-all duration-200 ${
                currentSection === section.id
                  ? 'bg-primary/10 border border-primary/30'
                  : 'hover:bg-muted/50 border border-transparent'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs uppercase tracking-wider ${
                  currentSection === section.id ? 'text-primary' : 'text-accent'
                }`}>
                  {section.subtitle}
                </span>
                <ChevronRight className={`w-4 h-4 transition-transform ${
                  currentSection === section.id ? 'text-primary translate-x-1' : 'text-muted-foreground'
                }`} />
              </div>
              <div className={`text-sm mb-1 ${
                currentSection === section.id ? 'text-foreground' : 'text-foreground/80'
              }`}>
                {section.title}
              </div>
              <div className="text-xs text-muted-foreground">
                {section.questions} Questions
              </div>
            </button>
          ))}
        </div>
        
        <div className="mt-8 p-4 bg-muted/30 rounded border border-border">
          <div className="text-xs text-muted-foreground">
            <div className="mb-2">Terminal Status</div>
            <div className="flex items-center justify-between text-xs">
              <span>Total Questions:</span>
              <span className="text-primary">{sections.reduce((acc, s) => acc + s.questions, 0)}</span>
            </div>
            <div className="flex items-center justify-between text-xs mt-1">
              <span>Sections:</span>
              <span className="text-accent">{sections.length}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
