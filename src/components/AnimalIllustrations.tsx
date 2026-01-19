import { motion } from 'motion/react';
import elephantImg from 'figma:asset/237b1794a722811c8c4d83aed6514147f6e7a37e.png';
import elephantTransparentImg from 'figma:asset/3fd8dbf8db4586a54c92dda75d16ed4a89f5b48f.png';
import turtleTransparentImg from 'figma:asset/2cc0fc27dd7ab3f3f1a0c8e3c1de8fec17800769.png';
import wolfTransparentImg from 'figma:asset/7c405f6d2568a460d6258731bf972089f2179a4c.png';
import dolphinTransparentImg from 'figma:asset/67f486c05b462e75147514f739caae6d00db8b6f.png';
import falconTransparentImg from 'figma:asset/523e5a445f3cea3860689d630fb35f6ecb052c3b.png';
import snakeTransparentImg from 'figma:asset/86c174e111770121a13e90c968598e7c2d9bbe51.png';
import otterTransparentImg from 'figma:asset/2d6fb6d6a97caa63a8a3981d5832a73b6928d1f0.png';
import tigerTransparentImg from 'figma:asset/1f1caea5f475854c6593bc6abb0893dc0c937fdd.png';

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