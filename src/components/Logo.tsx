import { motion } from 'motion/react';

interface LogoProps {
  onClick?: () => void;
}

export function Logo({ onClick }: LogoProps) {
  return (
    <button
      onClick={onClick}
      className="relative group flex items-center gap-2"
    >
      {/* Logo text with organic styling */}
      <div className="relative">
        <span className="text-2xl tracking-[0.15em] text-gray-700 hover:text-gray-900 transition-colors font-['Cinzel_Decorative'] font-normal relative">
          <span className="inline-block" style={{ letterSpacing: '0.05em' }}>M</span>
          <span className="inline-block" style={{ letterSpacing: '0.05em' }}>I</span>
          <span className="inline-block" style={{ letterSpacing: '0.05em' }}>R</span>
          <span className="inline-block" style={{ letterSpacing: '0.05em' }}>R</span>
          <span className="inline-block" style={{ letterSpacing: '0.05em' }}>A</span>
        </span>
      </div>
    </button>
  );
}