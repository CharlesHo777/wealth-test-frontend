import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';
import { Navigation } from './Navigation';
import { DecorativePattern } from './DecorativePattern';
import { ArchetypeResult } from '../App';
import { archetypes } from '../data/archetypes';

interface HomeProps {
  onAssessmentComplete: (result: ArchetypeResult) => void;
  onNavigate: (page: 'home' | 'result' | 'registry') => void;
}

const questions = [
  // DIMENSION 1: Value Orientation (4 questions)
  {
    id: 1,
    dimension: 'Dimension 1: Value Orientation',
    title: 'Your Primary Driver',
    question: 'What matters more to you at this stage of life?',
    options: [
      { text: 'Feeling stable, free, and in control of your time', values: { preserver: 1 } },
      { text: 'Creating impact, achieving ambitious goals, and making a difference', values: { expander: 1 } },
    ],
  },
  {
    id: 2,
    dimension: 'Dimension 1: Value Orientation',
    title: 'Your Wealth Vision',
    question: 'When you think about wealth, which statement feels closer?',
    options: [
      { text: 'I want enough to feel safe and independent', values: { preserver: 1 } },
      { text: 'I want enough to grow, lead, and build something meaningful', values: { expander: 1 } },
    ],
  },
  {
    id: 3,
    dimension: 'Dimension 1: Value Orientation',
    title: 'Your Trade-offs',
    question: 'Which trade-off are you more willing to make?',
    options: [
      { text: 'Give up fast growth to protect my peace', values: { preserver: 1 } },
      { text: 'Take risks and push forward for something bigger', values: { expander: 1 } },
    ],
  },
  {
    id: 4,
    dimension: 'Dimension 1: Value Orientation',
    title: 'Your Fulfillment',
    question: 'What brings you more fulfillment?',
    options: [
      { text: 'Peace of mind and having personal time', values: { preserver: 1 } },
      { text: 'Pushing limits and seeing results in the world', values: { expander: 1 } },
    ],
  },
  
  // DIMENSION 2: Money Relationship (3 questions)
  {
    id: 5,
    dimension: 'Dimension 2: Money Relationship',
    title: 'Your Money Instinct',
    question: 'When you receive extra income (like a bonus or gift), your first instinct is to:',
    options: [
      { text: 'Treat yourself or invest in something spontaneous', values: { flow: 1 } },
      { text: 'Save it or allocate it carefully based on your budget', values: { anchor: 1 } },
    ],
  },
  {
    id: 6,
    dimension: 'Dimension 2: Money Relationship',
    title: 'Your Budgeting Style',
    question: 'Your relationship with budgeting is:',
    options: [
      { text: 'Restrictive — I prefer to stay flexible and intuitive', values: { flow: 1 } },
      { text: 'Empowering — It helps me feel safe and organized', values: { anchor: 1 } },
    ],
  },
  {
    id: 7,
    dimension: 'Dimension 2: Money Relationship',
    title: 'Your Spending Approach',
    question: 'When it comes to spending on personal development or experiences:',
    options: [
      { text: 'I follow my intuition—if it feels right, I go for it', values: { flow: 1 } },
      { text: 'I weigh pros and cons carefully before committing', values: { anchor: 1 } },
    ],
  },
  
  // DIMENSION 3: Financial Modality (6 statements)
  {
    id: 8,
    dimension: 'Dimension 3: Financial Modality',
    title: 'Your Financial Strategy',
    question: 'I prefer long-term, predictable financial growth over quick opportunities.',
    options: [
      { text: 'Strongly Agree', values: { builder: 2 } },
      { text: 'Agree', values: { builder: 1 } },
      { text: 'Disagree', values: { flowSeeker: 1 } },
      { text: 'Strongly Disagree', values: { flowSeeker: 2 } },
    ],
  },
  {
    id: 9,
    dimension: 'Dimension 3: Financial Modality',
    title: 'Your Decision Making',
    question: 'I often follow my gut feeling or intuition when making financial decisions.',
    options: [
      { text: 'Strongly Agree', values: { flowSeeker: 2 } },
      { text: 'Agree', values: { flowSeeker: 1 } },
      { text: 'Disagree', values: { builder: 1 } },
      { text: 'Strongly Disagree', values: { builder: 2 } },
    ],
  },
  {
    id: 10,
    dimension: 'Dimension 3: Financial Modality',
    title: 'Your Control Preference',
    question: 'I feel most comfortable when I have full control over my money and assets.',
    options: [
      { text: 'Strongly Agree', values: { builder: 2 } },
      { text: 'Agree', values: { builder: 1 } },
      { text: 'Disagree', values: { flowSeeker: 1 } },
      { text: 'Strongly Disagree', values: { flowSeeker: 2 } },
    ],
  },
  {
    id: 11,
    dimension: 'Dimension 3: Financial Modality',
    title: 'Your Money Philosophy',
    question: 'I believe money moves in cycles, and I try to stay in sync with the flow.',
    options: [
      { text: 'Strongly Agree', values: { flowSeeker: 2 } },
      { text: 'Agree', values: { flowSeeker: 1 } },
      { text: 'Disagree', values: { builder: 1 } },
      { text: 'Strongly Disagree', values: { builder: 2 } },
    ],
  },
  {
    id: 12,
    dimension: 'Dimension 3: Financial Modality',
    title: 'Your Wealth Building',
    question: 'I value building solid systems and structures for wealth creation.',
    options: [
      { text: 'Strongly Agree', values: { builder: 2 } },
      { text: 'Agree', values: { builder: 1 } },
      { text: 'Disagree', values: { flowSeeker: 1 } },
      { text: 'Strongly Disagree', values: { flowSeeker: 2 } },
    ],
  },
  {
    id: 13,
    dimension: 'Dimension 3: Financial Modality',
    title: 'Your Timing Approach',
    question: 'I trust timing and alignment more than rigid plans in financial matters.',
    options: [
      { text: 'Strongly Agree', values: { flowSeeker: 2 } },
      { text: 'Agree', values: { flowSeeker: 1 } },
      { text: 'Disagree', values: { builder: 1 } },
      { text: 'Strongly Disagree', values: { builder: 2 } },
    ],
  },
  
  // DIMENSION 4: Psycho-Spiritual Energy (6 questions)
  {
    id: 14,
    dimension: 'Dimension 4: Psycho-Spiritual Energy',
    title: 'Your Money & Inner World',
    question: 'I believe my money patterns reflect deeper emotional or spiritual issues.',
    options: [
      { text: 'Strongly Agree', values: { integration: 2 } },
      { text: 'Agree', values: { integration: 1 } },
      { text: 'Disagree', values: { separation: 1 } },
      { text: 'Strongly Disagree', values: { separation: 2 } },
    ],
  },
  {
    id: 15,
    dimension: 'Dimension 4: Psycho-Spiritual Energy',
    title: 'Your Practical Approach',
    question: 'I prefer to keep financial matters purely practical, without involving emotions or introspection.',
    options: [
      { text: 'Strongly Agree', values: { separation: 2 } },
      { text: 'Agree', values: { separation: 1 } },
      { text: 'Disagree', values: { integration: 1 } },
      { text: 'Strongly Disagree', values: { integration: 2 } },
    ],
  },
  {
    id: 16,
    dimension: 'Dimension 4: Psycho-Spiritual Energy',
    title: 'Your Energy Perspective',
    question: 'I see money as an energy that mirrors my internal state.',
    options: [
      { text: 'Strongly Agree', values: { integration: 2 } },
      { text: 'Agree', values: { integration: 1 } },
      { text: 'Disagree', values: { separation: 1 } },
      { text: 'Strongly Disagree', values: { separation: 2 } },
    ],
  },
  {
    id: 17,
    dimension: 'Dimension 4: Psycho-Spiritual Energy',
    title: 'Your Improvement Strategy',
    question: 'To improve my finances, I focus on logical planning and clear execution.',
    options: [
      { text: 'Strongly Agree', values: { separation: 2 } },
      { text: 'Agree', values: { separation: 1 } },
      { text: 'Disagree', values: { integration: 1 } },
      { text: 'Strongly Disagree', values: { integration: 2 } },
    ],
  },
  {
    id: 18,
    dimension: 'Dimension 4: Psycho-Spiritual Energy',
    title: 'Your Challenge Response',
    question: 'When I face financial challenges, I tend to:',
    options: [
      { text: 'Look for subconscious or emotional blocks I might be holding', values: { integration: 1 } },
      { text: 'Create a better financial plan or strategy', values: { separation: 1 } },
    ],
  },
  {
    id: 19,
    dimension: 'Dimension 4: Psycho-Spiritual Energy',
    title: 'Your Wealth Capacity',
    question: 'When I suddenly receive a large amount of money, I usually:',
    options: [
      { text: 'Feel the need to expand my emotional or energetic capacity to hold it', values: { integration: 1 } },
      { text: 'Think of how to manage or invest it effectively', values: { separation: 1 } },
    ],
  },
];

export function Home({ onAssessmentComplete, onNavigate }: HomeProps) {
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [scores, setScores] = useState({
    preserver: 0,
    expander: 0,
    builder: 0,
    flowSeeker: 0,
    anchor: 0,
    flow: 0,
    integration: 0,
    separation: 0,
  });
  const questionnaireRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleStartAssessment = () => {
    setShowQuestionnaire(true);
    setCurrentQuestion(0);
    setScores({
      preserver: 0,
      expander: 0,
      builder: 0,
      flowSeeker: 0,
      anchor: 0,
      flow: 0,
      integration: 0,
      separation: 0,
    });
    
    // Smooth scroll to questionnaire
    setTimeout(() => {
      window.scrollTo({ 
        top: window.innerHeight, 
        behavior: 'smooth' 
      });
    }, 300);
  };

  const handleAnswer = (values: Record<string, number>) => {
    const newScores = { ...scores };
    Object.entries(values).forEach(([key, value]) => {
      newScores[key as keyof typeof scores] += value;
    });
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newScores);
    }
  };

  const calculateResult = (finalScores: typeof scores) => {
    // Determine dominant score in each dimension
    const dimension1 = finalScores.preserver >= finalScores.expander ? 'preserver' : 'expander';
    const dimension2 = finalScores.flow >= finalScores.anchor ? 'flow' : 'anchor';
    const dimension3 = finalScores.builder >= finalScores.flowSeeker ? 'builder' : 'flowSeeker';
    const dimension4 = finalScores.integration >= finalScores.separation ? 'integration' : 'separation';
    
    // Archetype mapping based on the 4-dimension model
    // Format: D1-D2-D3-D4
    let resultArchetype = archetypes[0];
    
    // ELEPHANT: Preserver + Anchor + Builder + Separation
    // The Matriarch - Stable, security-focused, systematic, practical
    if (dimension1 === 'preserver' && dimension2 === 'anchor' && dimension3 === 'builder' && dimension4 === 'separation') {
      resultArchetype = archetypes.find(a => a.animal === 'Elephant') || archetypes[0];
    }
    // TURTLE: Preserver + Anchor + Builder + Integration
    // The Steward - Stable, security-focused, systematic, spiritual
    else if (dimension1 === 'preserver' && dimension2 === 'anchor' && dimension3 === 'builder' && dimension4 === 'integration') {
      resultArchetype = archetypes.find(a => a.animal === 'Turtle') || archetypes[0];
    }
    // WOLF: Preserver + Anchor + FlowSeeker + Integration
    // The Guardian - Stable, security-focused, intuitive, spiritual
    else if (dimension1 === 'preserver' && dimension2 === 'anchor' && dimension3 === 'flowSeeker' && dimension4 === 'integration') {
      resultArchetype = archetypes.find(a => a.animal === 'Wolf') || archetypes[0];
    }
    // OTTER: Preserver + Flow + FlowSeeker + Integration
    // The Maverick - Stable values, spontaneous with money, intuitive, spiritual
    else if (dimension1 === 'preserver' && dimension2 === 'flow' && dimension3 === 'flowSeeker' && dimension4 === 'integration') {
      resultArchetype = archetypes.find(a => a.animal === 'Otter') || archetypes[0];
    }
    // TIGER: Expander + Anchor + Builder + Separation
    // The Empire Builder - Growth-focused, security-oriented, systematic, practical
    else if (dimension1 === 'expander' && dimension2 === 'anchor' && dimension3 === 'builder' && dimension4 === 'separation') {
      resultArchetype = archetypes.find(a => a.animal === 'Tiger') || archetypes[0];
    }
    // FALCON: Expander + Flow + Builder + Separation
    // The Strategist - Growth-focused, spontaneous, systematic, practical
    else if (dimension1 === 'expander' && dimension2 === 'flow' && dimension3 === 'builder' && dimension4 === 'separation') {
      resultArchetype = archetypes.find(a => a.animal === 'Falcon') || archetypes[0];
    }
    // DOLPHIN: Expander + Flow + FlowSeeker + Integration
    // The Connector - Growth-focused, spontaneous, intuitive, spiritual
    else if (dimension1 === 'expander' && dimension2 === 'flow' && dimension3 === 'flowSeeker' && dimension4 === 'integration') {
      resultArchetype = archetypes.find(a => a.animal === 'Dolphin') || archetypes[0];
    }
    // SNAKE: Preserver + Flow + FlowSeeker + Separation (or variations)
    // The Alchemist - Transformation-focused, spontaneous, intuitive
    else if (dimension3 === 'flowSeeker' && dimension2 === 'flow') {
      resultArchetype = archetypes.find(a => a.animal === 'Snake') || archetypes[0];
    }
    // Fallback patterns for ambiguous combinations
    else if (dimension1 === 'preserver' && dimension2 === 'anchor') {
      // Default preserver + anchor combinations
      if (dimension4 === 'integration') {
        resultArchetype = archetypes.find(a => a.animal === 'Turtle') || archetypes[0];
      } else {
        resultArchetype = archetypes.find(a => a.animal === 'Elephant') || archetypes[0];
      }
    }
    else if (dimension1 === 'expander' && dimension2 === 'anchor') {
      resultArchetype = archetypes.find(a => a.animal === 'Tiger') || archetypes[0];
    }
    else if (dimension1 === 'expander' && dimension2 === 'flow') {
      if (dimension4 === 'integration') {
        resultArchetype = archetypes.find(a => a.animal === 'Dolphin') || archetypes[0];
      } else {
        resultArchetype = archetypes.find(a => a.animal === 'Falcon') || archetypes[0];
      }
    }
    else if (dimension1 === 'preserver' && dimension2 === 'flow') {
      if (dimension4 === 'integration') {
        resultArchetype = archetypes.find(a => a.animal === 'Otter') || archetypes[0];
      } else {
        resultArchetype = archetypes.find(a => a.animal === 'Snake') || archetypes[0];
      }
    }
    else {
      // Ultimate fallback - use primary scores
      if (finalScores.preserver > finalScores.expander) {
        if (finalScores.anchor > finalScores.flow) {
          resultArchetype = archetypes.find(a => a.animal === 'Elephant') || archetypes[0];
        } else {
          resultArchetype = archetypes.find(a => a.animal === 'Otter') || archetypes[0];
        }
      } else {
        if (finalScores.anchor > finalScores.flow) {
          resultArchetype = archetypes.find(a => a.animal === 'Tiger') || archetypes[0];
        } else {
          resultArchetype = archetypes.find(a => a.animal === 'Falcon') || archetypes[0];
        }
      }
    }

    onAssessmentComplete(resultArchetype);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen relative">
      {/* Background Audio */}
      <audio
        ref={audioRef}
        loop
        autoPlay
        muted={isMuted}
        src="https://cdn.pixabay.com/audio/2022/03/10/audio_4a56a0c07c.mp3"
      />

      {/* Mute/Unmute Button - Top Right */}
      <motion.button
        onClick={toggleMute}
        className="fixed top-6 right-8 z-50 p-3 bg-white/40 backdrop-blur-sm border border-[#C4A574]/30 rounded-full hover:bg-white/60 hover:border-[#C4A574] transition-all group"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-[#C4A574] group-hover:text-[#6B5D52]" />
        ) : (
          <Volume2 className="w-5 h-5 text-[#C4A574] group-hover:text-[#6B5D52]" />
        )}
      </motion.button>

      <Navigation onNavigate={onNavigate} currentPage="home" />
      
      {/* Hero Section - Always visible */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Decorative patterns */}
        <div className="absolute inset-0 z-0">
          <DecorativePattern />
        </div>

        {/* Main content - centered */}
        <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Small label above */}
            <motion.div
              className="mb-8 flex items-center justify-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="w-16 h-px bg-[#C4A574]"></span>
              <p className="font-['Montserrat'] text-xs tracking-[0.3em] text-[#C4A574] uppercase">
                Decode Your Financial DNA
              </p>
              <span className="w-16 h-px bg-[#C4A574]"></span>
            </motion.div>

            {/* Main title - centered */}
            <motion.div
              className="mb-16 relative inline-block"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h1 className="font-['Cinzel_Decorative'] relative">
                <span className="block text-5xl md:text-6xl lg:text-7xl font-light text-[#3D3D3D] mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>
                  wealth
                </span>
                <span className="block text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight font-normal leading-none"
                  style={{
                    background: 'linear-gradient(to right, #6B6B6B 0%, #9B8B7E 50%, #C4A574 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  ARCHETYPE
                </span>
              </h1>

              {/* Minimalist elegant stars around title */}
              <motion.div
                className="absolute -top-8 left-1/4 w-4 h-4"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  x: [0, 10, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-full h-full relative">
                  <div className="absolute inset-0 bg-[#96C8E6] rounded-full blur-[4px] opacity-60"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#96C8E6] rounded-full"></div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/3 -right-16 w-3 h-3"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  x: [0, -8, 0],
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <div className="w-full h-full relative">
                  <div className="absolute inset-0 bg-[#F0DC8C] rounded-full blur-[3px] opacity-60"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#F0DC8C] rounded-full"></div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-8 -left-12 w-2.5 h-2.5"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  x: [0, 8, 0],
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="w-full h-full relative">
                  <div className="absolute inset-0 bg-[#96D2B4] rounded-full blur-[3px] opacity-60"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-0.5 bg-[#96D2B4] rounded-full"></div>
                </div>
              </motion.div>

              {/* Additional purple dot for 4th archetype color */}
              <motion.div
                className="absolute -bottom-4 right-1/4 w-3.5 h-3.5"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  x: [0, -10, 0],
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 11,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <div className="w-full h-full relative">
                  <div className="absolute inset-0 bg-[#BEAAE6] rounded-full blur-[4px] opacity-60"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#BEAAE6] rounded-full"></div>
                </div>
              </motion.div>
            </motion.div>

            {/* Description text */}
            <motion.div
              className="max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="font-['Montserrat'] text-base tracking-wide text-[#6B5D52] leading-relaxed mb-3 uppercase text-xs">
                The architecture of prosperity is written in your subconscious.
              </p>
              <p className="font-['Montserrat'] text-base tracking-wide text-[#6B5D52] leading-relaxed uppercase text-xs">
                Discover your signature pattern in five minutes.
              </p>
            </motion.div>

            {/* CTA Button - Only show when questionnaire is not active */}
            {!showQuestionnaire && (
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <motion.button
                  onClick={handleStartAssessment}
                  className="group relative overflow-hidden px-12 py-4 bg-[#C4A574] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Animated colorful gradient background on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(90deg, #96C8E6, #F0DC8C, #96D2B4, #BEAAE6, #96C8E6)',
                      backgroundSize: '300% 100%',
                    }}
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  
                  {/* Glowing effect on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(90deg, #96C8E6, #F0DC8C, #96D2B4, #BEAAE6, #96C8E6)',
                      backgroundSize: '300% 100%',
                    }}
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />

                  <span className="relative z-10 flex items-center gap-3 font-['Montserrat'] text-xs tracking-[0.25em] text-white uppercase">
                    Begin Assessment
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>
              </motion.div>
            )}

            {/* Questionnaire Section - appears below button, above divider */}
            {showQuestionnaire && (
              <motion.div
                ref={questionnaireRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-8"
              >
                {/* Progress bar */}
                <div className="mb-12">
                  <div className="h-px bg-[#C4A574]/40 relative">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-[#C4A574]"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="mb-8 text-center">
                      <p className="font-['Montserrat'] text-xs tracking-[0.25em] text-[#C4A574] uppercase mb-4">
                        {question.dimension}
                      </p>
                      <h2 className="font-['Cinzel_Decorative'] text-3xl md:text-4xl font-normal text-[#3D3D3D] mb-6">
                        {question.title}
                      </h2>
                    </div>

                    <div className="relative">
                      <h3 className="font-['Montserrat'] text-base text-[#6B5D52] mb-8 leading-relaxed text-center">
                        {question.question}
                      </h3>

                      <div className="grid gap-4 max-w-2xl mx-auto">
                        {question.options.map((option, index) => (
                          <motion.button
                            key={index}
                            onClick={() => handleAnswer(option.values)}
                            className="relative text-left p-5 bg-white/40 backdrop-blur-sm border-2 border-[#C4A574]/30 rounded-xl hover:border-[#C4A574] hover:bg-white/60 transition-all group overflow-hidden"
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C4A574] transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                            <p className="font-['Montserrat'] text-sm tracking-wide text-[#6B5D52] group-hover:text-[#3D3D3D] pl-2">
                              {option.text}
                            </p>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            )}

            {/* Decorative vertical line - Only show when questionnaire is active */}
            {showQuestionnaire && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 200 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-16 mx-auto w-px bg-gradient-to-b from-[#C4A574] to-transparent"
              />
            )}

            {/* Additional decorative text - Always visible but pushed down when questionnaire is active */}
            <motion.div
              className={showQuestionnaire ? "mt-8 max-w-md mx-auto border-t border-[#C4A574] pt-8" : "mt-24 max-w-md mx-auto border-t border-[#C4A574] pt-8"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <p className="font-['Montserrat'] text-xs tracking-[0.2em] text-[#C4A574] uppercase mb-3">
                The Mirroring Method
              </p>
              <p className="font-['Cormorant_Garamond'] text-3xl italic font-light text-[#3D3D3D] mb-4">
                Reflect.
              </p>
              <p className="font-['Montserrat'] text-sm tracking-wide text-[#6B5D52] leading-relaxed">
                Wealth is not a metric. It is an energetic signature—a geometry that mirrors the architecture of your soul.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom decorative line */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="w-24 h-px bg-[#C4A574]"></span>
          <div className="w-2 h-2 relative">
            <div className="absolute inset-0 bg-[#C4A574] rounded-full blur-[2px] opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-0.5 bg-[#D4B584] rounded-full"></div>
          </div>
          <span className="w-24 h-px bg-[#C4A574]"></span>
        </motion.div>
      </div>
    </div>
  );
}