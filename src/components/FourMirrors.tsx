import { motion } from 'motion/react';

interface FourMirrorsProps {
  stage: 'hero' | 'merging' | 'questionnaire';
  onOpeningComplete?: () => void;
}

export function FourMirrors({ stage }: FourMirrorsProps) {
  const mirrors = [
    { 
      color: 'rgba(240, 220, 140, 0.5)', // Yellow - Otter & Snake
      glow: 'rgba(240, 220, 140, 0.8)',
      initialX: -360,
    },
    { 
      color: 'rgba(180, 210, 230, 0.5)', // Blue - Elephant & Turtle
      glow: 'rgba(150, 200, 230, 0.8)',
      initialX: -120,
    },
    { 
      color: 'rgba(180, 220, 200, 0.5)', // Green - Wolf & Dolphin
      glow: 'rgba(150, 210, 180, 0.8)',
      initialX: 120,
    },
    { 
      color: 'rgba(200, 190, 240, 0.5)', // Purple - Tiger & Falcon
      glow: 'rgba(190, 170, 230, 0.8)',
      initialX: 360,
    },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {stage === 'hero' && (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Four overlapping mirrors in horizontal line */}
          {mirrors.map((mirror, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                width: 320,
                height: 450,
                left: '50%',
                top: '50%',
                marginLeft: mirror.initialX - 160,
                marginTop: -225,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 1,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              {/* Mirror with ethereal glow */}
              <motion.div
                className="w-full h-full relative"
                style={{
                  borderRadius: '50%',
                  background: `radial-gradient(ellipse at center, ${mirror.color} 0%, ${mirror.color.replace('0.5', '0.35')} 50%, ${mirror.color.replace('0.5', '0.15')} 80%, transparent 100%)`,
                  boxShadow: `0 0 100px ${mirror.glow}, 0 0 60px ${mirror.glow.replace('0.8', '0.5')}, inset 0 0 80px rgba(255, 255, 255, 0.25)`,
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                }}
                animate={{
                  boxShadow: [
                    `0 0 100px ${mirror.glow}, 0 0 60px ${mirror.glow.replace('0.8', '0.5')}, inset 0 0 80px rgba(255, 255, 255, 0.25)`,
                    `0 0 130px ${mirror.glow}, 0 0 80px ${mirror.glow.replace('0.8', '0.6')}, inset 0 0 100px rgba(255, 255, 255, 0.35)`,
                    `0 0 100px ${mirror.glow}, 0 0 60px ${mirror.glow.replace('0.8', '0.5')}, inset 0 0 80px rgba(255, 255, 255, 0.25)`,
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.8,
                }}
              >
                {/* Reflection shimmer */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    borderRadius: '50%',
                    background: 'linear-gradient(125deg, transparent 0%, rgba(255, 255, 255, 0.3) 45%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.3) 55%, transparent 100%)',
                  }}
                  animate={{
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}

          {/* Two tiny person silhouettes */}
          <motion.div
            className="absolute"
            style={{
              bottom: '35%',
              left: 'calc(50% - 30px)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.3, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            <svg width="25" height="40" viewBox="0 0 25 40" fill="none">
              <circle cx="12.5" cy="6" r="4" fill="rgba(150, 140, 130, 0.5)" />
              <path d="M 12.5 10 L 12.5 24" stroke="rgba(150, 140, 130, 0.5)" strokeWidth="3" strokeLinecap="round" />
              <path d="M 12.5 14 L 8 18 M 12.5 14 L 17 18" stroke="rgba(150, 140, 130, 0.5)" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 12.5 24 L 8 36 M 12.5 24 L 17 36" stroke="rgba(150, 140, 130, 0.5)" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </motion.div>

          <motion.div
            className="absolute"
            style={{
              bottom: '35%',
              left: 'calc(50% + 10px)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.3, y: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
          >
            <svg width="22" height="36" viewBox="0 0 25 40" fill="none">
              <circle cx="12.5" cy="6" r="4" fill="rgba(150, 140, 130, 0.5)" />
              <path d="M 12.5 10 L 12.5 24" stroke="rgba(150, 140, 130, 0.5)" strokeWidth="3" strokeLinecap="round" />
              <path d="M 12.5 14 L 8 18 M 12.5 14 L 17 18" stroke="rgba(150, 140, 130, 0.5)" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 12.5 24 L 8 36 M 12.5 24 L 17 36" stroke="rgba(150, 140, 130, 0.5)" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </motion.div>

          {/* Subtle ground line */}
          <motion.div
            className="absolute"
            style={{
              bottom: '35%',
              left: '20%',
              right: '20%',
              height: '1px',
              background: 'linear-gradient(to right, transparent 0%, rgba(200, 180, 140, 0.2) 50%, transparent 100%)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
          />
        </div>
      )}

      {stage === 'merging' && (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Mirrors move to center and merge */}
          {mirrors.map((mirror, index) => (
            <motion.div
              key={index}
              className="absolute"
              initial={{
                width: 320,
                height: 450,
                left: '50%',
                top: '50%',
                marginLeft: mirror.initialX - 160,
                marginTop: -225,
                opacity: 1,
              }}
              animate={{
                marginLeft: -500,
                marginTop: -400,
                width: 1000,
                height: 800,
                opacity: index === 0 ? 1 : 0,
              }}
              transition={{
                duration: 1.5,
                ease: [0.65, 0, 0.35, 1],
                delay: 0,
              }}
            >
              <div
                className="w-full h-full"
                style={{
                  borderRadius: index === 0 ? '24px' : '50%',
                  background: index === 0 
                    ? 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.95) 0%, rgba(250, 248, 245, 0.92) 60%, rgba(245, 240, 235, 0.88) 100%)'
                    : `radial-gradient(ellipse at center, ${mirror.color} 0%, ${mirror.color.replace('0.5', '0.3')} 50%, transparent 100%)`,
                  boxShadow: index === 0
                    ? '0 0 150px rgba(212, 175, 55, 0.4), 0 0 100px rgba(240, 220, 180, 0.3), inset 0 0 100px rgba(255, 255, 255, 0.5)'
                    : `0 0 100px ${mirror.glow}`,
                  border: index === 0 
                    ? '3px solid rgba(212, 175, 55, 0.3)'
                    : '2px solid rgba(255, 255, 255, 0.3)',
                  transition: 'border-radius 1.5s cubic-bezier(0.65, 0, 0.35, 1)',
                }}
              />
            </motion.div>
          ))}

          {/* People fade out */}
          <motion.div
            className="absolute"
            style={{
              bottom: '35%',
              left: 'calc(50% - 30px)',
            }}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.8 }}
          >
            <svg width="25" height="40" viewBox="0 0 25 40" fill="none">
              <circle cx="12.5" cy="6" r="4" fill="rgba(150, 140, 130, 0.5)" />
              <path d="M 12.5 10 L 12.5 24" stroke="rgba(150, 140, 130, 0.5)" strokeWidth="3" strokeLinecap="round" />
              <path d="M 12.5 14 L 8 18 M 12.5 14 L 17 18" stroke="rgba(150, 140, 130, 0.5)" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 12.5 24 L 8 36 M 12.5 24 L 17 36" stroke="rgba(150, 140, 130, 0.5)" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </motion.div>

          <motion.div
            className="absolute"
            style={{
              bottom: '35%',
              left: 'calc(50% + 10px)',
            }}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.8 }}
          >
            <svg width="22" height="36" viewBox="0 0 25 40" fill="none">
              <circle cx="12.5" cy="6" r="4" fill="rgba(150, 140, 130, 0.5)" />
              <path d="M 12.5 10 L 12.5 24" stroke="rgba(150, 140, 130, 0.5)" strokeWidth="3" strokeLinecap="round" />
              <path d="M 12.5 14 L 8 18 M 12.5 14 L 17 18" stroke="rgba(150, 140, 130, 0.5)" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 12.5 24 L 8 36 M 12.5 24 L 17 36" stroke="rgba(150, 140, 130, 0.5)" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </motion.div>
        </div>
      )}

      {stage === 'questionnaire' && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-full h-full max-w-[1200px] max-h-[95vh]"
            initial={{
              width: 1000,
              height: 800,
            }}
            animate={{
              width: '100%',
              height: '100%',
            }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{
              borderRadius: '24px',
              background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.95) 0%, rgba(250, 248, 245, 0.92) 60%, rgba(245, 240, 235, 0.88) 100%)',
              boxShadow: '0 0 150px rgba(212, 175, 55, 0.35), 0 0 100px rgba(240, 220, 180, 0.25), 0 40px 100px rgba(0, 0, 0, 0.08)',
              border: '2px solid rgba(212, 175, 55, 0.25)',
              backdropFilter: 'blur(20px)',
            }}
          />
        </motion.div>
      )}
    </div>
  );
}
