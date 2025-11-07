import React from 'react';
import { Activity, TrendingUp, Clock } from 'lucide-react';

interface HeaderProps {
  currentSection: string;
  onHomeClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentSection, onHomeClick }) => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-card border-b border-border z-50">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <button 
            onClick={onHomeClick}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <Activity className="w-6 h-6 text-primary" />
            <h1 className="text-2xl tracking-wider text-[rgb(0,255,136)]">BOOMBURG</h1>
          </button>
          <div className="h-6 w-px bg-border" />
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">{currentSection}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{time.toLocaleTimeString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-muted-foreground uppercase">Live</span>
          </div>
        </div>
      </div>
    </header>
  );
};
