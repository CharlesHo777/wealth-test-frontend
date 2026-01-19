import { Sparkles, Shield, TrendingUp, Palette, Heart, Rocket, RotateCcw } from 'lucide-react';
import type { WealthArchetype } from '../App';

interface ResultsProps {
  archetype: WealthArchetype;
  onRestart: () => void;
}

interface ArchetypeData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  description: string;
  strengths: string[];
  opportunities: string[];
  color: string;
}

const archetypeData: Record<Exclude<WealthArchetype, null>, ArchetypeData> = {
  'the-guardian': {
    title: 'The Guardian',
    subtitle: 'Protector of Stability',
    icon: <Shield className="w-12 h-12" />,
    description: 'You are driven by the desire to protect and secure what matters most. Your wealth journey is rooted in creating safety, stability, and peace of mind for yourself and your loved ones.',
    strengths: [
      'Excellent at risk management and preservation',
      'Builds strong financial foundations',
      'Deeply values security and consistency',
      'Makes thoughtful, measured decisions',
    ],
    opportunities: [
      'Explore calculated growth opportunities',
      'Balance security with strategic risk-taking',
      'Consider diversification beyond safety nets',
      'Embrace gradual expansion of comfort zone',
    ],
    color: 'blue',
  },
  'the-builder': {
    title: 'The Builder',
    subtitle: 'Architect of Legacy',
    icon: <TrendingUp className="w-12 h-12" />,
    description: 'You are a strategic creator of generational wealth. Your approach is methodical, patient, and focused on long-term growth and sustainable systems that will outlast you.',
    strengths: [
      'Masters long-term strategic planning',
      'Exceptional at compound growth strategies',
      'Creates systematic wealth-building processes',
      'Thinks in terms of legacy and impact',
    ],
    opportunities: [
      'Balance patience with timely opportunities',
      'Incorporate flexibility into rigid systems',
      'Celebrate milestones along the journey',
      'Share knowledge with next generation',
    ],
    color: 'emerald',
  },
  'the-creator': {
    title: 'The Creator',
    subtitle: 'Artist of Abundance',
    icon: <Palette className="w-12 h-12" />,
    description: 'Your wealth philosophy centers on creative expression and authentic living. Money is a tool for freedom, enabling you to pursue passions and create beauty in the world.',
    strengths: [
      'Values alignment drives decisions',
      'Creates unique income opportunities',
      'Invests in meaningful experiences',
      'Brings innovation to wealth-building',
    ],
    opportunities: [
      'Structure creativity with systems',
      'Balance passion with practicality',
      'Develop sustainable revenue streams',
      'Protect creative freedom with planning',
    ],
    color: 'purple',
  },
  'the-nurturer': {
    title: 'The Nurturer',
    subtitle: 'Champion of Community',
    icon: <Heart className="w-12 h-12" />,
    description: 'Your relationship with wealth is deeply connected to supporting others. You measure abundance by your ability to lift up your community and create positive impact.',
    strengths: [
      'Natural at collaborative wealth-building',
      'Sees abundance as infinite resource',
      'Creates meaningful impact with resources',
      'Builds strong networks of support',
    ],
    opportunities: [
      'Prioritize self-care in giving',
      'Set healthy financial boundaries',
      'Build personal reserves first',
      'Teach others to fish, not just feed',
    ],
    color: 'rose',
  },
  'the-visionary': {
    title: 'The Visionary',
    subtitle: 'Pioneer of Possibility',
    icon: <Rocket className="w-12 h-12" />,
    description: 'You are driven by big ideas and transformational change. Your wealth journey is about taking bold risks, disrupting the status quo, and creating innovative solutions.',
    strengths: [
      'Spots opportunities others miss',
      'Comfortable with calculated risk',
      'Thinks exponentially, not linearly',
      'Inspires others with compelling vision',
    ],
    opportunities: [
      'Ground vision with practical steps',
      'Build sustainable systems',
      'Balance boldness with preservation',
      'Cultivate patience for timing',
    ],
    color: 'amber',
  },
};

export function Results({ archetype, onRestart }: ResultsProps) {
  if (!archetype) return null;

  const data = archetypeData[archetype];

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6 flex justify-center">
            <div className="p-6 bg-gradient-to-br from-amber-100 to-amber-50 rounded-full text-amber-600">
              {data.icon}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl text-amber-900 mb-3 font-light">
            {data.title}
          </h1>
          <p className="text-xl text-amber-800/70 tracking-wide mb-8">
            {data.subtitle}
          </p>

          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg text-amber-900/70 leading-relaxed">
              {data.description}
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 text-amber-600">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm tracking-wide">Your Personalized Wealth Profile</span>
            <Sparkles className="w-5 h-5" />
          </div>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Strengths */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl shadow-amber-900/10 p-8">
            <h3 className="text-2xl text-amber-900 mb-6 font-light">Your Strengths</h3>
            <ul className="space-y-4">
              {data.strengths.map((strength, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-amber-600 flex-shrink-0" />
                  <span className="text-amber-900/80 leading-relaxed">{strength}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Growth Opportunities */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl shadow-amber-900/10 p-8">
            <h3 className="text-2xl text-amber-900 mb-6 font-light">Growth Opportunities</h3>
            <ul className="space-y-4">
              {data.opportunities.map((opportunity, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-amber-600 flex-shrink-0" />
                  <span className="text-amber-900/80 leading-relaxed">{opportunity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gradient-to-br from-amber-600 to-amber-500 rounded-3xl shadow-xl shadow-amber-900/20 p-8 md:p-12 text-white text-center mb-8">
          <h3 className="text-3xl mb-4 font-light">Ready to Transform Your Wealth Journey?</h3>
          <p className="text-amber-50 mb-8 max-w-2xl mx-auto leading-relaxed">
            Now that you understand your wealth archetype, discover personalized strategies 
            and resources tailored to your unique financial personality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-amber-600 rounded-full hover:shadow-xl transition-all duration-200 hover:scale-105">
              Get Your Full Report
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-amber-600 transition-all duration-200">
              Book a Consultation
            </button>
          </div>
        </div>

        {/* Restart */}
        <div className="text-center">
          <button
            onClick={onRestart}
            className="inline-flex items-center gap-2 text-amber-900/60 hover:text-amber-900 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake Assessment</span>
          </button>
        </div>
      </div>
    </div>
  );
}
