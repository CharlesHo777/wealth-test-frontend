import { motion } from 'motion/react';

export function DecorativePattern() {
  // The 4 archetype colors
  const archetypeColors = [
    { 
      color: 'rgba(150, 200, 230, 0.6)', // Blue - Elephant & Turtle
      glow: 'rgba(150, 200, 230, 0.8)' 
    },
    { 
      color: 'rgba(240, 220, 140, 0.6)', // Yellow - Otter & Snake
      glow: 'rgba(240, 220, 140, 0.8)' 
    },
    { 
      color: 'rgba(150, 210, 180, 0.6)', // Green - Wolf & Dolphin
      glow: 'rgba(150, 210, 180, 0.8)' 
    },
    { 
      color: 'rgba(190, 170, 230, 0.6)', // Purple - Tiger & Falcon
      glow: 'rgba(190, 170, 230, 0.8)' 
    },
  ];

  // Generate floating orbs with different positions and animations
  const orbs = [
    // Blue orbs
    { color: archetypeColors[0], x: '10%', y: '15%', size: 120, duration: 25, delay: 0 },
    { color: archetypeColors[0], x: '75%', y: '70%', size: 90, duration: 30, delay: 5 },
    
    // Yellow orbs
    { color: archetypeColors[1], x: '85%', y: '20%', size: 100, duration: 28, delay: 2 },
    { color: archetypeColors[1], x: '20%', y: '80%', size: 110, duration: 32, delay: 8 },
    
    // Green orbs
    { color: archetypeColors[2], x: '60%', y: '40%', size: 95, duration: 27, delay: 4 },
    { color: archetypeColors[2], x: '15%', y: '50%', size: 105, duration: 29, delay: 10 },
    
    // Purple orbs
    { color: archetypeColors[3], x: '90%', y: '85%', size: 85, duration: 26, delay: 6 },
    { color: archetypeColors[3], x: '40%', y: '25%', size: 115, duration: 31, delay: 12 },
  ];

  return (
    <div className="w-full h-full opacity-40">
      {/* Mirror reflection light streaks */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ mixBlendMode: 'overlay' }}
      >
        {/* Diagonal light streak 1 */}
        <motion.div
          className="absolute w-[200%] h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
          style={{
            top: '20%',
            left: '-100%',
            transform: 'rotate(-45deg)',
          }}
          animate={{
            left: ['-100%', '100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        {/* Diagonal light streak 2 */}
        <motion.div
          className="absolute w-[200%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
          style={{
            top: '50%',
            left: '-100%',
            transform: 'rotate(-45deg)',
          }}
          animate={{
            left: ['-100%', '100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
            delay: 5,
          }}
        />
        
        {/* Diagonal light streak 3 */}
        <motion.div
          className="absolute w-[200%] h-[1.5px] bg-gradient-to-r from-transparent via-white/25 to-transparent"
          style={{
            top: '70%',
            left: '-100%',
            transform: 'rotate(-45deg)',
          }}
          animate={{
            left: ['-100%', '100%'],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear',
            delay: 10,
          }}
        />

        {/* Soft shimmer overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)',
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Moving radial gradient for mirror effect */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 60%)',
            filter: 'blur(40px)',
          }}
          animate={{
            x: ['20%', '80%', '20%'],
            y: ['30%', '70%', '30%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Organic flowing lines - top left */}
      <svg className="absolute top-0 left-0 w-96 h-96" viewBox="0 0 400 400">
        <path
          d="M 0,100 Q 100,80 200,100 T 400,100"
          stroke="url(#grad1)"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />
        <path
          d="M 0,150 Q 100,130 200,150 T 400,150"
          stroke="url(#grad1)"
          strokeWidth="1"
          fill="none"
          opacity="0.2"
        />
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C4A574" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#D4B584" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Organic flowing lines - bottom right */}
      <svg className="absolute bottom-0 right-0 w-96 h-96" viewBox="0 0 400 400">
        <path
          d="M 400,300 Q 300,320 200,300 T 0,300"
          stroke="url(#grad2)"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />
        <path
          d="M 400,250 Q 300,270 200,250 T 0,250"
          stroke="url(#grad2)"
          strokeWidth="1"
          fill="none"
          opacity="0.2"
        />
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4B584" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#C4A574" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating colored orbs representing the 4 archetypes */}
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
          }}
          animate={{
            x: [0, 30, -20, 25, 0],
            y: [0, -25, 20, -30, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
            opacity: [0.3, 0.5, 0.4, 0.6, 0.3],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Outer glow */}
          <div
            className="absolute inset-0 rounded-full blur-3xl"
            style={{
              background: orb.color.glow,
              opacity: 0.4,
            }}
          />
          {/* Inner orb */}
          <div
            className="absolute inset-0 rounded-full blur-xl"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${orb.color.color}, transparent)`,
              opacity: 0.6,
            }}
          />
          {/* Core light */}
          <div
            className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full blur-md"
            style={{
              background: orb.color.glow,
              opacity: 0.8,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}