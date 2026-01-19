import { motion } from 'motion/react';

export function AuraOrb() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <div className="relative w-[900px] h-[900px]">
        
        {/* Four diamond shapes representing the archetype colors */}
        
        {/* Blue Diamond - Elephant & Turtle */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="w-64 h-64 rotate-45"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(150, 200, 230, 0.5) 0%, rgba(180, 210, 240, 0.3) 40%, transparent 70%)',
              filter: 'blur(10px)',
              boxShadow: '0 0 60px rgba(150, 200, 230, 0.4), 0 0 100px rgba(150, 200, 230, 0.2)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Yellow Diamond - Otter & Snake */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            rotate: [90, 450],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="w-64 h-64 rotate-45"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(240, 220, 140, 0.55) 0%, rgba(250, 235, 170, 0.35) 40%, transparent 70%)',
              filter: 'blur(10px)',
              boxShadow: '0 0 60px rgba(240, 220, 140, 0.45), 0 0 100px rgba(240, 220, 140, 0.25)',
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.65, 0.95, 0.65],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>

        {/* Green Diamond - Wolf & Dolphin */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            rotate: [180, 540],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="w-64 h-64 rotate-45"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(150, 210, 180, 0.5) 0%, rgba(180, 230, 210, 0.3) 40%, transparent 70%)',
              filter: 'blur(10px)',
              boxShadow: '0 0 60px rgba(150, 210, 180, 0.4), 0 0 100px rgba(150, 210, 180, 0.2)',
            }}
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.6, 0.85, 0.6],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </motion.div>

        {/* Purple Diamond - Tiger & Falcon */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            rotate: [270, 630],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="w-64 h-64 rotate-45"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(190, 170, 230, 0.55) 0%, rgba(210, 195, 245, 0.35) 40%, transparent 70%)',
              filter: 'blur(10px)',
              boxShadow: '0 0 60px rgba(190, 170, 230, 0.45), 0 0 100px rgba(190, 170, 230, 0.25)',
            }}
            animate={{
              scale: [1, 1.18, 1],
              opacity: [0.65, 0.9, 0.65],
            }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />
        </motion.div>

        {/* Outer glowing diamonds - more visible */}
        {[
          { color: 'rgba(150, 200, 230, 0.25)', angle: 0, size: 180, glow: 'rgba(150, 200, 230, 0.3)' }, // blue
          { color: 'rgba(240, 220, 140, 0.3)', angle: 90, size: 170, glow: 'rgba(240, 220, 140, 0.35)' }, // yellow
          { color: 'rgba(150, 210, 180, 0.25)', angle: 180, size: 190, glow: 'rgba(150, 210, 180, 0.3)' }, // green
          { color: 'rgba(190, 170, 230, 0.3)', angle: 270, size: 175, glow: 'rgba(190, 170, 230, 0.35)' }, // purple
        ].map((diamond, i) => (
          <motion.div
            key={`outer-diamond-${i}`}
            className="absolute top-1/2 left-1/2"
            style={{
              width: diamond.size,
              height: diamond.size,
            }}
            animate={{
              x: [
                -diamond.size / 2 + Math.cos((diamond.angle * Math.PI) / 180) * 280,
                -diamond.size / 2 + Math.cos((diamond.angle * Math.PI) / 180 + Math.PI) * 280,
                -diamond.size / 2 + Math.cos((diamond.angle * Math.PI) / 180) * 280,
              ],
              y: [
                -diamond.size / 2 + Math.sin((diamond.angle * Math.PI) / 180) * 280,
                -diamond.size / 2 + Math.sin((diamond.angle * Math.PI) / 180 + Math.PI) * 280,
                -diamond.size / 2 + Math.sin((diamond.angle * Math.PI) / 180) * 280,
              ],
              rotate: [diamond.angle, diamond.angle + 180, diamond.angle + 360],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="w-full h-full rotate-45"
              style={{
                background: `radial-gradient(ellipse at center, ${diamond.color} 0%, transparent 70%)`,
                filter: 'blur(8px)',
                boxShadow: `0 0 40px ${diamond.glow}, 0 0 80px ${diamond.glow}`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          </motion.div>
        ))}

        {/* Central white light with human silhouette */}
        <motion.div
          className="absolute inset-[220px] flex items-center justify-center"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div 
            className="w-full h-full rounded-full relative"
            style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 40%, rgba(255, 255, 255, 0.3) 70%, transparent 100%)',
              filter: 'blur(20px)',
            }}
          >
            {/* Human silhouette */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                width="80"
                height="100"
                viewBox="0 0 80 100"
                fill="none"
                className="opacity-30"
              >
                {/* Head */}
                <ellipse cx="40" cy="18" rx="14" ry="18" fill="white" />
                {/* Body */}
                <path
                  d="M40 36 L40 65"
                  stroke="white"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                {/* Arms - raised */}
                <motion.path
                  d="M40 40 L25 28 M40 40 L55 28"
                  stroke="white"
                  strokeWidth="8"
                  strokeLinecap="round"
                  animate={{
                    d: [
                      "M40 40 L25 28 M40 40 L55 28",
                      "M40 42 L23 26 M40 42 L57 26",
                      "M40 40 L25 28 M40 40 L55 28",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                {/* Legs */}
                <path
                  d="M40 65 L30 85 M40 65 L50 85"
                  stroke="white"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Bright center core with enhanced glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 20%, rgba(255, 255, 255, 0.5) 50%, transparent 80%)',
            filter: 'blur(12px)',
            boxShadow: '0 0 80px rgba(255, 255, 255, 0.8), 0 0 120px rgba(255, 255, 255, 0.5)',
          }}
          animate={{
            opacity: [0.85, 1, 0.85],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Flowing ripple effects */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
            style={{
              width: 180 + i * 90,
              height: 180 + i * 90,
              borderColor: i % 2 === 0 ? 'rgba(200, 220, 255, 0.3)' : 'rgba(240, 230, 200, 0.3)',
              boxShadow: i % 2 === 0 
                ? '0 0 20px rgba(200, 220, 255, 0.2)' 
                : '0 0 20px rgba(240, 230, 200, 0.2)',
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 1.6,
            }}
          />
        ))}

        {/* Flowing colored particles */}
        {[...Array(16)].map((_, i) => {
          const angle = (i / 16) * Math.PI * 2;
          const colors = [
            { bg: 'rgba(150, 200, 230, 0.7)', glow: 'rgba(150, 200, 230, 0.5)' }, // blue
            { bg: 'rgba(240, 220, 140, 0.75)', glow: 'rgba(240, 220, 140, 0.6)' }, // yellow
            { bg: 'rgba(150, 210, 180, 0.7)', glow: 'rgba(150, 210, 180, 0.5)' }, // green
            { bg: 'rgba(190, 170, 230, 0.75)', glow: 'rgba(190, 170, 230, 0.6)' }, // purple
          ];
          const particleColor = colors[i % 4];
          
          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-4 h-4 rounded-full"
              style={{
                top: '50%',
                left: '50%',
                backgroundColor: particleColor.bg,
                filter: 'blur(2px)',
                boxShadow: `0 0 15px ${particleColor.glow}, 0 0 25px ${particleColor.glow}`,
              }}
              animate={{
                x: [
                  0,
                  Math.cos(angle) * 220 + Math.sin(angle * 3) * 35,
                  Math.cos(angle) * 280 + Math.sin(angle * 3) * 45,
                  Math.cos(angle) * 350,
                ],
                y: [
                  0,
                  Math.sin(angle) * 220 + Math.cos(angle * 3) * 35,
                  Math.sin(angle) * 280 + Math.cos(angle * 3) * 45,
                  Math.sin(angle) * 350,
                ],
                opacity: [0, 0.7, 0.5, 0],
                scale: [0, 1.4, 1.2, 0.6],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.7,
              }}
            />
          );
        })}

        {/* Additional small glowing diamond accents */}
        {[...Array(8)].map((_, i) => {
          const colors = [
            { bg: 'rgba(150, 200, 230, 0.4)', glow: 'rgba(150, 200, 230, 0.3)' },
            { bg: 'rgba(240, 220, 140, 0.45)', glow: 'rgba(240, 220, 140, 0.35)' },
            { bg: 'rgba(150, 210, 180, 0.4)', glow: 'rgba(150, 210, 180, 0.3)' },
            { bg: 'rgba(190, 170, 230, 0.45)', glow: 'rgba(190, 170, 230, 0.35)' },
          ];
          const color = colors[i % 4];
          const angle = (i / 8) * Math.PI * 2;

          return (
            <motion.div
              key={`small-diamond-${i}`}
              className="absolute top-1/2 left-1/2 w-12 h-12"
              animate={{
                x: [
                  -24 + Math.cos(angle) * 380,
                  -24 + Math.cos(angle + Math.PI / 4) * 420,
                  -24 + Math.cos(angle + Math.PI / 2) * 400,
                  -24 + Math.cos(angle) * 380,
                ],
                y: [
                  -24 + Math.sin(angle) * 380,
                  -24 + Math.sin(angle + Math.PI / 4) * 420,
                  -24 + Math.sin(angle + Math.PI / 2) * 400,
                  -24 + Math.sin(angle) * 380,
                ],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 15 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            >
              <motion.div
                className="w-full h-full rotate-45"
                style={{
                  background: `radial-gradient(ellipse at center, ${color.bg} 0%, transparent 70%)`,
                  filter: 'blur(6px)',
                  boxShadow: `0 0 25px ${color.glow}`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
