import { Logo } from './Logo';

interface NavigationProps {
  onNavigate: (page: 'home' | 'result' | 'registry') => void;
  currentPage?: string;
}

export function Navigation({ onNavigate, currentPage }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo onClick={() => onNavigate('home')} />
        
        <div className="flex gap-12">
          <button
            onClick={() => onNavigate('registry')}
            className="font-['Montserrat'] tracking-[0.15em] text-xs text-amber-700 hover:text-amber-900 transition-colors uppercase"
          >
            View Archetypes
          </button>
        </div>
      </div>
    </nav>
  );
}