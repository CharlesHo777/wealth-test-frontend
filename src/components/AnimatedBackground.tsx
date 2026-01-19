import { motion } from 'motion/react';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-white via-[#faf8f5] to-[#f5e6d3]">
      {/* Soft golden clouds */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-20 blur-3xl"
          style={{
            width: `${Math.random() * 500 + 300}px`,
            height: `${Math.random() * 500 + 300}px`,
            background: `radial-gradient(circle, rgba(218, 165, 32, 0.2) 0%, transparent 70%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
      
      {/* Shining diagonal streaks */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`streak-${i}`}
          className="absolute w-1 opacity-0"
          style={{
            height: `${Math.random() * 200 + 150}px`,
            background: 'linear-gradient(180deg, transparent 0%, rgba(255, 215, 0, 0.4) 50%, transparent 100%)',
            left: `${Math.random() * 100}%`,
            top: `-200px`,
            transform: 'rotate(25deg)',
          }}
          animate={{
            y: ['0vh', '120vh'],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
            repeatDelay: Math.random() * 8 + 5,
          }}
        />
      ))}
      
      {/* Glowing orbs */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
            background: 'radial-gradient(circle, rgba(255, 215, 0, 0.5) 0%, transparent 70%)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: 'blur(2px)',
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.1, 0.5, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}
      
      {/* Subtle shimmer particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-amber-200/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
}