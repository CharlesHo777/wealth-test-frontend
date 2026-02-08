import { motion } from 'motion/react';
// import elephantImg from 'figma:asset/237b1794a722811c8c4d83aed6514147f6e7a37e.png';
import elephantTransparentImg from '../assets/elephant.png';
import turtleTransparentImg from '../assets/turtle.png';
import wolfTransparentImg from '../assets/wolf.png';
import dolphinTransparentImg from '../assets/dolphin.png';
import falconTransparentImg from '../assets/falcon.png';
import snakeTransparentImg from '../assets/snake.png';
import otterTransparentImg from '../assets/otter.png';
import tigerTransparentImg from '../assets/tiger.png';

interface AnimalProps {
  className?: string;
  color?: string;
}

export function ElephantIllustration({ className = "w-32 h-32" }: AnimalProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <img 
          src={elephantTransparentImg} 
          alt="Elephant"
          className="w-full h-full object-contain"
          style={{
            filter: 'drop-shadow(0 15px 40px rgba(150, 200, 230, 0.5)) brightness(1.05) saturate(1.1)',
          }}
        />
        {/* Soft ethereal glow */}
        <div 
          className="absolute inset-0 -z-10 blur-2xl opacity-25"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(150, 200, 230, 0.7) 0%, transparent 70%)',
          }}
        />
      </div>
    </motion.div>
  );
}

export function OtterIllustration({ className = "w-32 h-32" }: AnimalProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <img 
          src={otterTransparentImg} 
          alt="Otter"
          className="w-full h-full object-contain"
          style={{
            filter: 'drop-shadow(0 15px 40px rgba(240, 220, 140, 0.5)) brightness(1.05) saturate(1.1)',
          }}
        />
        {/* Soft ethereal glow */}
        <div 
          className="absolute inset-0 -z-10 blur-2xl opacity-25"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(240, 220, 140, 0.7) 0%, transparent 70%)',
          }}
        />
      </div>
    </motion.div>
  );
}

export function TigerIllustration({ className = "w-32 h-32" }: AnimalProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <img 
          src={tigerTransparentImg} 
          alt="Tiger"
          className="w-full h-full object-contain"
          style={{
            filter: 'drop-shadow(0 15px 40px rgba(190, 170, 230, 0.5)) brightness(1.05) saturate(1.1)',
          }}
        />
        {/* Soft ethereal glow */}
        <div 
          className="absolute inset-0 -z-10 blur-2xl opacity-25"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(190, 170, 230, 0.7) 0%, transparent 70%)',
          }}
        />
      </div>
    </motion.div>
  );
}

export function FalconIllustration({ className = "w-32 h-32" }: AnimalProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <img 
          src={falconTransparentImg} 
          alt="Falcon"
          className="w-full h-full object-contain"
          style={{
            filter: 'drop-shadow(0 15px 40px rgba(190, 170, 230, 0.5)) brightness(1.05) saturate(1.1)',
          }}
        />
        {/* Soft ethereal glow */}
        <div 
          className="absolute inset-0 -z-10 blur-2xl opacity-25"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(190, 170, 230, 0.7) 0%, transparent 70%)',
          }}
        />
      </div>
    </motion.div>
  );
}

export function TurtleIllustration({ className = "w-32 h-32" }: AnimalProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <img 
          src={turtleTransparentImg} 
          alt="Turtle"
          className="w-full h-full object-contain"
          style={{
            filter: 'drop-shadow(0 15px 40px rgba(150, 200, 230, 0.5)) brightness(1.05) saturate(1.1)',
          }}
        />
        {/* Soft ethereal glow */}
        <div 
          className="absolute inset-0 -z-10 blur-2xl opacity-25"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(150, 200, 230, 0.7) 0%, transparent 70%)',
          }}
        />
      </div>
    </motion.div>
  );
}

export function SnakeIllustration({ className = "w-32 h-32" }: AnimalProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <img 
          src={snakeTransparentImg} 
          alt="Snake"
          className="w-full h-full object-contain"
          style={{
            filter: 'drop-shadow(0 15px 40px rgba(240, 220, 140, 0.5)) brightness(1.05) saturate(1.1)',
          }}
        />
        {/* Soft ethereal glow */}
        <div 
          className="absolute inset-0 -z-10 blur-2xl opacity-25"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(240, 220, 140, 0.7) 0%, transparent 70%)',
          }}
        />
      </div>
    </motion.div>
  );
}

export function WolfIllustration({ className = "w-32 h-32" }: AnimalProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <img 
          src={wolfTransparentImg} 
          alt="Wolf"
          className="w-full h-full object-contain"
          style={{
            filter: 'drop-shadow(0 15px 40px rgba(150, 210, 180, 0.5)) brightness(1.05) saturate(1.1)',
          }}
        />
        {/* Soft ethereal glow */}
        <div 
          className="absolute inset-0 -z-10 blur-2xl opacity-25"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(150, 210, 180, 0.7) 0%, transparent 70%)',
          }}
        />
      </div>
    </motion.div>
  );
}

export function DolphinIllustration({ className = "w-32 h-32" }: AnimalProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <img 
          src={dolphinTransparentImg} 
          alt="Dolphin"
          className="w-full h-full object-contain"
          style={{
            filter: 'drop-shadow(0 15px 40px rgba(150, 210, 180, 0.5)) brightness(1.05) saturate(1.1)',
          }}
        />
        {/* Soft ethereal glow */}
        <div 
          className="absolute inset-0 -z-10 blur-2xl opacity-25"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(150, 210, 180, 0.7) 0%, transparent 70%)',
          }}
        />
      </div>
    </motion.div>
  );
}