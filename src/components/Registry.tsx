import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation } from './Navigation';
import { archetypes } from '../data/archetypes';
import {
  ElephantIllustration,
  OtterIllustration,
  TigerIllustration,
  FalconIllustration,
  TurtleIllustration,
  SnakeIllustration,
  WolfIllustration,
  DolphinIllustration,
} from './AnimalIllustrations';

interface RegistryProps {
  onNavigate: (page: 'home' | 'result' | 'registry') => void;
}

const animalIllustrations: Record<string, any> = {
  Elephant: ElephantIllustration,
  Otter: OtterIllustration,
  Tiger: TigerIllustration,
  Falcon: FalconIllustration,
  Turtle: TurtleIllustration,
  Snake: SnakeIllustration,
  Wolf: WolfIllustration,
  Dolphin: DolphinIllustration,
};

const animalColors: Record<string, string> = {
  Elephant: '#89a8b3',
  Otter: '#d4b896',
  Tiger: '#a99fb8',
  Falcon: '#b8afc9',
  Turtle: '#8eaeb3',
  Snake: '#d4bc8e',
  Wolf: '#93b8a3',
  Dolphin: '#8fc4b0',
};

export function Registry({ onNavigate }: RegistryProps) {
  const [selectedArchetype, setSelectedArchetype] = useState<string | null>(null);

  const handleCardClick = (animal: string) => {
    setSelectedArchetype(animal);
  };

  const handleClose = () => {
    setSelectedArchetype(null);
  };

  const selectedData = archetypes.find(a => a.animal === selectedArchetype);

  return (
    <div className="min-h-screen relative">
      <Navigation onNavigate={onNavigate} currentPage="registry" />
      
      <div className="max-w-7xl mx-auto px-8 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-20 text-center">
            <motion.div
              className="mb-8 flex items-center justify-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="w-16 h-px bg-amber-400"></span>
              <p className="font-['Montserrat'] text-xs tracking-[0.3em] text-amber-700 uppercase">
                The Registry of Signatures
              </p>
              <span className="w-16 h-px bg-amber-400"></span>
            </motion.div>

            <h1 className="relative inline-block">
              <span className="font-['Cinzel_Decorative'] text-5xl md:text-6xl text-amber-900 font-normal block mb-2">
                The Eight
              </span>
              <span className="font-['Cormorant_Garamond'] text-5xl md:text-6xl text-amber-700 italic font-light block">
                Archetypes
              </span>
              
              {/* Minimalist elegant stars */}
              <motion.div
                className="absolute -top-2 -right-8 w-3 h-3"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-full h-full relative">
                  <div className="absolute inset-0 bg-amber-400 rounded-full blur-[3px]"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-amber-300 rounded-full"></div>
                </div>
              </motion.div>
            </h1>
            
            <div className="max-w-2xl mx-auto mt-8">
              <p className="font-['Montserrat'] text-sm tracking-wide text-amber-700 leading-relaxed">
                A mapping of the fundamental prototypes, grouped by their core energetic frequency.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {archetypes.map((archetype, index) => {
              const IllustrationComponent = animalIllustrations[archetype.animal];
              const illustrationColor = animalColors[archetype.animal];

              return (
                <motion.div
                  key={archetype.animal}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleCardClick(archetype.animal)}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer hover:shadow-2xl transition-all duration-500"
                  style={{ backgroundColor: archetype.backgroundColor }}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-8 flex flex-col items-center text-center min-h-[380px]">
                    {/* Animal Illustration */}
                    <div className="mb-6 flex items-center justify-center">
                      <IllustrationComponent className="w-28 h-28" color={illustrationColor} />
                    </div>

                    {/* Animal name */}
                    <h2 className="font-['Cinzel_Decorative'] text-3xl mb-2 text-amber-900 font-normal">
                      {archetype.animal}
                    </h2>
                    
                    {/* Theme subtitle */}
                    <p className="font-['Cormorant_Garamond'] text-lg italic text-amber-700 font-light mb-4">
                      {archetype.theme}
                    </p>

                    {/* Short description */}
                    <p className="font-['Montserrat'] text-xs text-amber-800 leading-relaxed line-clamp-3">
                      {archetype.description}
                    </p>

                    {/* Hover indicator */}
                    <motion.div
                      className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                    >
                      <span className="font-['Montserrat'] text-xs tracking-[0.2em] text-amber-700 uppercase">
                        View Details →
                      </span>
                    </motion.div>
                  </div>

                  {/* Subtle flowing decoration on hover */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${illustrationColor}15 0%, transparent 70%)`,
                    }}
                  />
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-4 font-['Montserrat'] text-sm tracking-[0.15em] text-amber-700 hover:text-amber-900 transition-colors"
            >
              <span className="w-12 h-px bg-amber-400"></span>
              Discover Your Archetype
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedArchetype && selectedData && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              className="relative max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl"
              style={{ backgroundColor: selectedData.backgroundColor }}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-12">
                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/30 hover:bg-white/50 transition-colors"
                >
                  <span className="text-amber-900 text-2xl">×</span>
                </button>

                {/* Illustration */}
                <div className="flex justify-center mb-8">
                  {(() => {
                    const IllustrationComponent = animalIllustrations[selectedData.animal];
                    const illustrationColor = animalColors[selectedData.animal];
                    return <IllustrationComponent className="w-40 h-40" color={illustrationColor} />;
                  })()}
                </div>

                {/* Title */}
                <div className="text-center mb-8">
                  <h2 
                    className="font-['Cinzel_Decorative'] text-5xl mb-3 font-normal"
                    style={{
                      background: 'linear-gradient(to right, #6B6B6B 0%, #9B8B7E 50%, #C4A574 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {selectedData.animal}
                  </h2>
                  <p className="font-['Cormorant_Garamond'] text-2xl italic text-amber-700 font-light mb-2">
                    {selectedData.theme}
                  </p>
                  <p className="font-['Montserrat'] text-sm text-amber-600 tracking-wide">
                    {selectedData.name}
                  </p>
                </div>

                {/* Description */}
                <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 mb-8">
                  <p className="font-['Montserrat'] text-base text-amber-900 leading-relaxed text-center">
                    {selectedData.description}
                  </p>
                </div>

                {/* Traits */}
                <div className="flex flex-wrap gap-3 justify-center">
                  {selectedData.traits.map((trait, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="font-['Montserrat'] text-sm px-5 py-2 bg-white/60 rounded-full text-amber-800 capitalize"
                    >
                      {trait}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}