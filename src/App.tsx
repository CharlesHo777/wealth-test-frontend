import { useState } from 'react';
import { Home } from './components/Home';
import { Result } from './components/Result';
import { Registry } from './components/Registry';
import { AnimatedBackground } from './components/AnimatedBackground';

export type ArchetypeResult = {
  name: string;
  animal: string;
  description: string;
  traits: string[];
  theme: string;
  backgroundColor: string;
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'result' | 'registry'>('home');
  const [archetypeResult, setArchetypeResult] = useState<ArchetypeResult | null>(null);

  const handleAssessmentComplete = (result: ArchetypeResult) => {
    setArchetypeResult(result);
    setCurrentPage('result');
  };

  const navigateTo = (page: 'home' | 'result' | 'registry') => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      
      {currentPage === 'home' && (
        <Home onAssessmentComplete={handleAssessmentComplete} onNavigate={navigateTo} />
      )}
      
      {currentPage === 'result' && archetypeResult && (
        <Result result={archetypeResult} onNavigate={navigateTo} />
      )}
      
      {currentPage === 'registry' && (
        <Registry onNavigate={navigateTo} />
      )}
    </div>
  );
}