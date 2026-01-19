import { motion } from 'motion/react';

interface MirrorAnimationProps {
  stage: 'opening' | 'idle' | 'flipping' | 'questionnaire';
  onOpeningComplete?: () => void;
}

export function MirrorAnimation({ stage, onOpeningComplete }: MirrorAnimationProps) {
  if (stage === 'idle') return null;

  return (
    <>
      {/* Opening Animation */}
      {stage === 'opening' && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-white via-amber-50/20 to-amber-100/30"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Hand and Mirror */}
          <div className="relative">
            {/* Realistic Hand SVG */}
            <motion.svg
              width="320"
              height="520"
              viewBox="0 0 320 520"
              fill="none"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10"
            >
              {/* Forearm with shading */}
              <defs>
                <linearGradient id="skinGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E8C4A0" />
                  <stop offset="50%" stopColor="#F5D5B8" />
                  <stop offset="100%" stopColor="#E8C4A0" />
                </linearGradient>
                <radialGradient id="palmGradient">
                  <stop offset="0%" stopColor="#F5D5B8" />
                  <stop offset="100%" stopColor="#E8C4A0" />
                </radialGradient>
              </defs>

              {/* Wrist and forearm */}
              <path
                d="M 140 520 Q 138 480, 140 440 Q 142 400, 145 360 L 175 360 Q 178 400, 180 440 Q 182 480, 180 520 Z"
                fill="url(#skinGradient)"
                stroke="#D4A574"
                strokeWidth="1.5"
              />
              
              {/* Wrist crease */}
              <path d="M 143 360 Q 160 362, 177 360" stroke="#D4A574" strokeWidth="1" opacity="0.4" />
              <path d="M 145 355 Q 160 357, 175 355" stroke="#D4A574" strokeWidth="1" opacity="0.3" />
              
              {/* Palm - organic shape with proper anatomy */}
              <ellipse cx="160" cy="310" rx="42" ry="52" fill="url(#palmGradient)" stroke="#D4A574" strokeWidth="1.5"/>
              
              {/* Palm lines - life line, heart line */}
              <path d="M 130 295 Q 145 305, 155 320" stroke="#D4A574" strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />
              <path d="M 128 310 Q 145 315, 165 318" stroke="#D4A574" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
              <path d="M 155 285 Q 165 295, 170 310" stroke="#D4A574" strokeWidth="0.8" opacity="0.3" strokeLinecap="round" />
              
              {/* Thumb - realistic curves and joints */}
              <motion.g
                initial={{ rotate: 0 }}
                animate={{ rotate: [-1, 1.5, -1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "125px 300px" }}
              >
                {/* Thumb base */}
                <ellipse cx="125" cy="310" rx="18" ry="22" fill="#F5D5B8" stroke="#D4A574" strokeWidth="1.5"/>
                
                {/* Thumb segments */}
                <path
                  d="M 115 300 Q 105 285, 100 265 Q 98 245, 102 230 Q 107 220, 115 218 Q 123 220, 125 230 Q 127 245, 125 265 Q 123 285, 120 295 Z"
                  fill="#F5D5B8"
                  stroke="#D4A574"
                  strokeWidth="1.5"
                />
                
                {/* Thumb tip */}
                <ellipse cx="115" cy="218" rx="10" ry="13" fill="#E8C4A0" stroke="#D4A574" strokeWidth="1.5"/>
                
                {/* Thumb joint creases */}
                <path d="M 108 250 Q 115 251, 122 250" stroke="#D4A574" strokeWidth="0.8" opacity="0.4" />
                <path d="M 110 235 Q 115 236, 120 235" stroke="#D4A574" strokeWidth="0.8" opacity="0.4" />
                
                {/* Thumb nail */}
                <ellipse cx="115" cy="215" rx="5" ry="6" fill="#FFE5D9" opacity="0.6" />
              </motion.g>
              
              {/* Index finger - extended, holding mirror */}
              <g>
                {/* Base segment */}
                <path
                  d="M 148 265 Q 145 235, 145 210 Q 145 185, 147 165 L 163 165 Q 165 185, 165 210 Q 165 235, 162 265 Z"
                  fill="#F5D5B8"
                  stroke="#D4A574"
                  strokeWidth="1.5"
                />
                
                {/* Middle segment */}
                <path
                  d="M 147 165 Q 146 150, 148 135 L 162 135 Q 164 150, 163 165 Z"
                  fill="#E8C4A0"
                  stroke="#D4A574"
                  strokeWidth="1.5"
                />
                
                {/* Finger tip */}
                <ellipse cx="155" cy="130" rx="8" ry="12" fill="#E8C4A0" stroke="#D4A574" strokeWidth="1.5"/>
                
                {/* Knuckle creases */}
                <path d="M 148 165 Q 155 167, 162 165" stroke="#D4A574" strokeWidth="0.8" opacity="0.4" />
                <path d="M 148 210 Q 155 212, 162 210" stroke="#D4A574" strokeWidth="0.8" opacity="0.4" />
                
                {/* Fingernail */}
                <ellipse cx="155" cy="127" rx="4" ry="5" fill="#FFE5D9" opacity="0.6" />
              </g>
              
              {/* Middle finger - extended */}
              <g>
                <path
                  d="M 165 260 Q 165 225, 168 190 Q 170 165, 172 140 L 186 140 Q 188 165, 190 190 Q 192 225, 190 260 Z"
                  fill="#F5D5B8"
                  stroke="#D4A574"
                  strokeWidth="1.5"
                />
                
                <path
                  d="M 172 140 Q 172 125, 174 110 L 184 110 Q 186 125, 186 140 Z"
                  fill="#E8C4A0"
                  stroke="#D4A574"
                  strokeWidth="1.5"
                />
                
                <ellipse cx="179" cy="105" rx="8" ry="12" fill="#E8C4A0" stroke="#D4A574" strokeWidth="1.5"/>
                
                <path d="M 172 140 Q 179 142, 186 140" stroke="#D4A574" strokeWidth="0.8" opacity="0.4" />
                <path d="M 165 190 Q 177 192, 190 190" stroke="#D4A574" strokeWidth="0.8" opacity="0.4" />
                
                <ellipse cx="179" cy="102" rx="4" ry="5" fill="#FFE5D9" opacity="0.6" />
              </g>
              
              {/* Ring finger */}
              <g>
                <path
                  d="M 188 265 Q 190 230, 192 200 Q 194 175, 196 150 L 208 150 Q 210 175, 212 200 Q 214 230, 212 265 Z"
                  fill="#F5D5B8"
                  stroke="#D4A574"
                  strokeWidth="1.5"
                />
                
                <path
                  d="M 196 150 Q 196 135, 198 120 L 206 120 Q 208 135, 208 150 Z"
                  fill="#E8C4A0"
                  stroke="#D4A574"
                  strokeWidth="1.5"
                />
                
                <ellipse cx="202" cy="115" rx="7" ry="11" fill="#E8C4A0" stroke="#D4A574" strokeWidth="1.5"/>
                
                <path d="M 196 150 Q 202 152, 208 150" stroke="#D4A574" strokeWidth="0.8" opacity="0.4" />
                <path d="M 190 200 Q 202 202, 212 200" stroke="#D4A574" strokeWidth="0.8" opacity="0.4" />
                
                <ellipse cx="202" cy="113" rx="3.5" ry="5" fill="#FFE5D9" opacity="0.6" />
              </g>
              
              {/* Pinky finger */}
              <g>
                <path
                  d="M 208 280 Q 212 255, 216 235 Q 218 215, 220 195 L 230 195 Q 232 215, 234 235 Q 238 255, 234 280 Z"
                  fill="#F5D5B8"
                  stroke="#D4A574"
                  strokeWidth="1.5"
                />
                
                <path
                  d="M 220 195 Q 220 185, 222 175 L 228 175 Q 230 185, 230 195 Z"
                  fill="#E8C4A0"
                  stroke="#D4A574"
                  strokeWidth="1.5"
                />
                
                <ellipse cx="225" cy="170" rx="6" ry="10" fill="#E8C4A0" stroke="#D4A574" strokeWidth="1.5"/>
                
                <path d="M 220 195 Q 225 197, 230 195" stroke="#D4A574" strokeWidth="0.8" opacity="0.4" />
                <path d="M 218 235 Q 226 237, 232 235" stroke="#D4A574" strokeWidth="0.8" opacity="0.4" />
                
                <ellipse cx="225" cy="168" rx="3" ry="4" fill="#FFE5D9" opacity="0.6" />
              </g>
              
              {/* Knuckles on back of hand */}
              <ellipse cx="150" cy="268" rx="6" ry="4" fill="#E0B594" opacity="0.3" />
              <ellipse cx="172" cy="263" rx="6" ry="4" fill="#E0B594" opacity="0.3" />
              <ellipse cx="195" cy="268" rx="6" ry="4" fill="#E0B594" opacity="0.3" />
              <ellipse cx="215" cy="283" rx="5" ry="3" fill="#E0B594" opacity="0.3" />
            </motion.svg>

            {/* Mirror overlay - vertical oval that flips to reveal content */}
            <motion.div
              className="absolute top-[80px] left-1/2 -translate-x-1/2 z-20"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 180 }}
              transition={{ 
                delay: 1.2,
                duration: 1.2, 
                ease: "easeInOut" 
              }}
              onAnimationComplete={() => {
                setTimeout(() => {
                  onOpeningComplete?.();
                }, 600);
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front side - reflective mirror */}
              <div
                className="absolute inset-0 w-[240px] h-[360px]"
                style={{
                  backfaceVisibility: 'hidden',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 240, 255, 0.8) 50%, rgba(255, 255, 255, 0.9) 100%)',
                  boxShadow: '0 0 60px rgba(255, 255, 255, 0.6), inset 0 0 40px rgba(255, 255, 255, 0.3)',
                  border: '2px solid rgba(255, 255, 255, 0.4)',
                }}
              />

              {/* Back side - MIRRA text revealed */}
              <div
                className="absolute inset-0 w-[240px] h-[360px] flex items-center justify-center"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  borderRadius: '50%',
                  background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.95) 0%, rgba(250, 248, 245, 0.9) 100%)',
                  boxShadow: '0 0 80px rgba(212, 175, 55, 0.4), inset 0 0 60px rgba(255, 255, 255, 0.5)',
                  border: '3px solid rgba(212, 175, 55, 0.3)',
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-center px-8"
                >
                  <h1 className="font-['Cinzel_Decorative'] text-5xl text-amber-900 tracking-tight mb-2">
                    MIRRA
                  </h1>
                  <p className="font-['Cormorant_Garamond'] text-lg text-amber-700 italic">
                    Reflect yourself
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Flip to Questionnaire Animation */}
      {stage === 'flipping' && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          {/* Hand appears again */}
          <motion.div
            className="relative"
            initial={{ scale: 0, opacity: 0, y: -100 }}
            animate={{ 
              scale: [0, 0.7, 0.7, 0.5],
              opacity: [0, 1, 1, 0],
              y: [-100, 0, 0, 100],
            }}
            transition={{ 
              duration: 2.5,
              times: [0, 0.3, 0.6, 1],
              ease: "easeInOut" 
            }}
          >
            {/* Same hand SVG but simplified for animation */}
            <svg width="280" height="450" viewBox="0 0 320 520" fill="none">
              <path d="M 140 520 Q 138 480, 140 440 Q 142 400, 145 360 L 175 360 Q 178 400, 180 440 Q 182 480, 180 520 Z" fill="url(#skinGradient)" stroke="#D4A574" strokeWidth="1.5"/>
              <ellipse cx="160" cy="310" rx="42" ry="52" fill="url(#palmGradient)" stroke="#D4A574" strokeWidth="1.5"/>
              <ellipse cx="125" cy="310" rx="18" ry="22" fill="#F5D5B8" stroke="#D4A574" strokeWidth="1.5"/>
              <path d="M 115 300 Q 105 285, 100 265 Q 98 245, 102 230 Q 107 220, 115 218 Q 123 220, 125 230 Q 127 245, 125 265 Q 123 285, 120 295 Z" fill="#F5D5B8" stroke="#D4A574" strokeWidth="1.5"/>
              <path d="M 148 265 Q 145 235, 145 210 Q 145 185, 147 165 L 163 165 Q 165 185, 165 210 Q 165 235, 162 265 Z" fill="#F5D5B8" stroke="#D4A574" strokeWidth="1.5"/>
              <ellipse cx="155" cy="130" rx="8" ry="12" fill="#E8C4A0" stroke="#D4A574" strokeWidth="1.5"/>
              <path d="M 165 260 Q 165 225, 168 190 Q 170 165, 172 140 L 186 140 Q 188 165, 190 190 Q 192 225, 190 260 Z" fill="#F5D5B8" stroke="#D4A574" strokeWidth="1.5"/>
              <ellipse cx="179" cy="105" rx="8" ry="12" fill="#E8C4A0" stroke="#D4A574" strokeWidth="1.5"/>
              <path d="M 188 265 Q 190 230, 192 200 Q 194 175, 196 150 L 208 150 Q 210 175, 212 200 Q 214 230, 212 265 Z" fill="#F5D5B8" stroke="#D4A574" strokeWidth="1.5"/>
              <path d="M 208 280 Q 212 255, 216 235 Q 218 215, 220 195 L 230 195 Q 232 215, 234 235 Q 238 255, 234 280 Z" fill="#F5D5B8" stroke="#D4A574" strokeWidth="1.5"/>
            </svg>

            {/* Mirror that flips 90 degrees and morphs */}
            <motion.div
              className="absolute top-[80px] left-1/2 -translate-x-1/2"
              initial={{ 
                rotateZ: 0,
                width: 240,
                height: 360,
                borderRadius: '50%',
              }}
              animate={{ 
                rotateZ: 90,
                width: '90vw',
                height: '90vh',
                borderRadius: '24px',
              }}
              transition={{ 
                duration: 1.5,
                delay: 0.5,
                ease: "easeInOut" 
              }}
              style={{
                background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.95) 0%, rgba(250, 248, 245, 0.9) 100%)',
                boxShadow: '0 0 80px rgba(212, 175, 55, 0.4), 0 20px 60px rgba(0, 0, 0, 0.1)',
                border: '3px solid rgba(212, 175, 55, 0.3)',
              }}
            />
          </motion.div>
        </motion.div>
      )}

      {/* Questionnaire Background - morphed mirror that covers everything */}
      {stage === 'questionnaire' && (
        <motion.div
          className="fixed inset-0 z-0 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-full h-full max-w-[1200px] max-h-[95vh]"
            initial={{ 
              width: '90vw',
              height: '90vh',
            }}
            animate={{ 
              width: '100%',
              height: '100%',
            }}
            transition={{ 
              duration: 0.6,
              ease: "easeOut" 
            }}
            style={{
              borderRadius: '24px',
              background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.92) 0%, rgba(250, 248, 245, 0.88) 100%)',
              boxShadow: '0 0 120px rgba(212, 175, 55, 0.35), 0 30px 90px rgba(0, 0, 0, 0.08)',
              border: '2px solid rgba(212, 175, 55, 0.25)',
              backdropFilter: 'blur(12px)',
            }}
          />
        </motion.div>
      )}
    </>
  );
}