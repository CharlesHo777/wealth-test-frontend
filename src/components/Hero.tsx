import { Sparkles } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

export function Hero({ onStart }: HeroProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo/Brand */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <Sparkles className="w-8 h-8 text-amber-600" />
          <h1 className="text-6xl tracking-[0.2em] font-light text-amber-900">
            MIRRA
          </h1>
          <Sparkles className="w-8 h-8 text-amber-600" />
        </div>

        {/* Tagline */}
        <div className="mb-12">
          <p className="text-xl text-amber-800/80 tracking-wide">
            Discover Your Wealth Archetype
          </p>
        </div>

        {/* Description */}
        <div className="mb-16 max-w-2xl mx-auto">
          <p className="text-lg text-amber-900/70 leading-relaxed mb-6">
            Your relationship with wealth is as unique as your fingerprint. 
            Understanding your wealth archetype unlocks profound insights into 
            how you create, manage, and grow your resources.
          </p>
          <p className="text-base text-amber-900/60 leading-relaxed">
            Take our transformative questionnaire to reveal your wealth personality 
            and discover personalized strategies for financial abundance.
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={onStart}
          className="group relative px-12 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-full text-lg font-light tracking-wide hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105"
        >
          <span className="relative z-10">Begin Your Journey</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        {/* Trust indicators */}
        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-amber-900/50">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-600" />
            <span>5 Minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-600" />
            <span>Science-Based</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-600" />
            <span>Personalized Insights</span>
          </div>
        </div>
      </div>
    </div>
  );
}
