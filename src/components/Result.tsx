import { motion } from 'motion/react';
import { Navigation } from './Navigation';
import { ArchetypeResult } from '../App';
import { 
  ElephantIllustration, 
  TurtleIllustration, 
  OtterIllustration, 
  TigerIllustration, 
  FalconIllustration, 
  SnakeIllustration, 
  WolfIllustration, 
  DolphinIllustration 
} from './AnimalIllustrations';

interface ResultProps {
  result: ArchetypeResult;
  onNavigate: (page: 'home' | 'result' | 'registry') => void;
}

export function Result({ result, onNavigate }: ResultProps) {
  return (
    <div 
      className="min-h-screen transition-colors duration-1000"
      style={{ backgroundColor: result.backgroundColor }}
    >
      <Navigation onNavigate={onNavigate} currentPage="result" />
      
      <div className="max-w-4xl mx-auto px-8 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.p
              className="font-['Montserrat'] text-xs tracking-[0.25em] text-gray-700 uppercase mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Your Wealth Archetype
            </motion.p>
            
            <motion.div
              className="mb-12 relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h1 className="font-['Cinzel_Decorative'] text-7xl md:text-8xl mb-4 text-gray-900 font-normal">
                {result.animal}
              </h1>
              <p className="font-['Cormorant_Garamond'] text-xl italic text-gray-700 font-light tracking-wide">
                {result.name}
              </p>
              {/* Minimalist elegant stars around result */}
              <motion.div
                className="absolute -top-4 left-1/4 w-3 h-3"
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
                  <div className="absolute inset-0 bg-white rounded-full blur-[3px]"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
                </div>
              </motion.div>
              <motion.div
                className="absolute top-4 right-1/4 w-2 h-2"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <div className="w-full h-full relative">
                  <div className="absolute inset-0 bg-white rounded-full blur-[2px]"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-0.5 bg-white rounded-full"></div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="text-6xl mb-12"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
            >
              {result.animal === 'Elephant' && <ElephantIllustration className="w-64 h-64 mx-auto" />}
              {result.animal === 'Otter' && <OtterIllustration className="w-64 h-64 mx-auto" />}
              {result.animal === 'Tiger' && <TigerIllustration className="w-64 h-64 mx-auto" />}
              {result.animal === 'Falcon' && <FalconIllustration className="w-64 h-64 mx-auto" />}
              {result.animal === 'Turtle' && <TurtleIllustration className="w-64 h-64 mx-auto" />}
              {result.animal === 'Snake' && <SnakeIllustration className="w-64 h-64 mx-auto" />}
              {result.animal === 'Wolf' && <WolfIllustration className="w-64 h-64 mx-auto" />}
              {result.animal === 'Dolphin' && <DolphinIllustration className="w-64 h-64 mx-auto" />}
            </motion.div>
          </div>

          <motion.div
            className="bg-white/70 backdrop-blur-sm rounded-lg p-12 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="font-['Cinzel_Decorative'] text-3xl mb-6 text-gray-900 font-normal">Your Energetic Signature</h2>
            <p className="font-['Montserrat'] text-gray-700 leading-relaxed mb-8">
              {result.description}
            </p>

            <div className="border-t border-gray-300 pt-8">
              <h3 className="font-['Montserrat'] text-sm tracking-[0.2em] uppercase text-gray-600 mb-6">
                Core Attributes
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {result.traits.map((trait, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-white/50 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <p className="font-['Montserrat'] text-sm text-gray-800 capitalize">{trait}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <motion.button
                onClick={() => onNavigate('registry')}
                className="inline-flex items-center gap-4 font-['Montserrat'] text-sm tracking-[0.15em] text-gray-700 hover:text-gray-900 transition-colors"
                whileHover={{ x: 5 }}
              >
                <span className="w-12 h-px bg-gray-700"></span>
                Explore All Archetypes
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}