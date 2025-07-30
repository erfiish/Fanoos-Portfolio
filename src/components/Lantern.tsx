import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LanternProps {
  glowColor: 'amber' | 'white' | 'violet' | 'moonlight';
  intensity?: number;
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
}

export const Lantern = ({ 
  glowColor = 'amber', 
  intensity = 1, 
  size = 'lg',
  animate = true 
}: LanternProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sizeClasses = {
    sm: 'w-24 h-32',
    md: 'w-32 h-48',
    lg: 'w-48 h-64'
  };

  const glowColors = {
    amber: '#F2C94C',
    white: '#FFFFFF',
    violet: '#6C5CE7',
    moonlight: '#E8EAF0'
  };

  const currentGlow = glowColors[glowColor];

  if (!mounted) return null;

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} mx-auto`}
      initial={animate ? { opacity: 0, scale: 0.8 } : {}}
      animate={animate ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Outer Glow */}
      <motion.div
        className="absolute inset-0 rounded-full blur-2xl"
        style={{
          background: `radial-gradient(circle, ${currentGlow}40 0%, ${currentGlow}20 50%, transparent 100%)`,
        }}
        animate={animate ? {
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.9, 0.6]
        } : {}}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main Lantern SVG */}
      <motion.svg
        viewBox="0 0 200 250"
        className="w-full h-full relative z-10"
        style={{
          filter: `drop-shadow(0 0 ${intensity * 20}px ${currentGlow})`
        }}
        animate={animate ? {
          y: [-5, 5, -5],
        } : {}}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Lantern Base */}
        <defs>
          <radialGradient id={`lanternGlow-${glowColor}`} cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor={currentGlow} stopOpacity="0.9" />
            <stop offset="70%" stopColor={currentGlow} stopOpacity="0.6" />
            <stop offset="100%" stopColor={currentGlow} stopOpacity="0.1" />
          </radialGradient>
          
          <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B7355" />
            <stop offset="50%" stopColor="#A67C52" />
            <stop offset="100%" stopColor="#6B5B47" />
          </linearGradient>
        </defs>

        {/* Top Ring */}
        <ellipse cx="100" cy="30" rx="15" ry="8" fill="url(#metalGradient)" />
        
        {/* Suspension Chain */}
        <line x1="100" y1="10" x2="100" y2="30" stroke="#8B7355" strokeWidth="3" />
        <circle cx="100" cy="8" r="3" fill="url(#metalGradient)" />

        {/* Main Body Frame */}
        <path
          d="M 60 50 Q 60 40, 70 40 L 130 40 Q 140 40, 140 50 L 140 180 Q 140 190, 130 190 L 70 190 Q 60 190, 60 180 Z"
          fill="none"
          stroke="url(#metalGradient)"
          strokeWidth="4"
        />

        {/* Vertical Frame Lines */}
        <line x1="80" y1="45" x2="80" y2="185" stroke="url(#metalGradient)" strokeWidth="2" />
        <line x1="100" y1="45" x2="100" y2="185" stroke="url(#metalGradient)" strokeWidth="2" />
        <line x1="120" y1="45" x2="120" y2="185" stroke="url(#metalGradient)" strokeWidth="2" />

        {/* Glass Panels with Glow */}
        <rect
          x="65" y="45" width="70" height="140"
          fill={`url(#lanternGlow-${glowColor})`}
          opacity="0.8"
          rx="5"
        />

        {/* Inner Light Core */}
        <motion.circle
          cx="100" cy="115" r="25"
          fill={currentGlow}
          opacity="0.9"
          animate={animate ? {
            r: [20, 30, 20],
            opacity: [0.7, 1, 0.7]
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Light Rays */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
          <motion.line
            key={angle}
            x1="100"
            y1="115"
            x2={100 + Math.cos((angle * Math.PI) / 180) * 35}
            y2={115 + Math.sin((angle * Math.PI) / 180) * 35}
            stroke={currentGlow}
            strokeWidth="2"
            opacity="0.6"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={animate ? {
              opacity: [0, 0.8, 0],
              pathLength: [0, 1, 0]
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Bottom Base */}
        <ellipse cx="100" cy="190" rx="20" ry="10" fill="url(#metalGradient)" />
        
        {/* Decorative Persian Pattern */}
        <g opacity="0.7" fill="url(#metalGradient)">
          <circle cx="85" cy="60" r="2" />
          <circle cx="115" cy="60" r="2" />
          <circle cx="85" cy="170" r="2" />
          <circle cx="115" cy="170" r="2" />
        </g>
      </motion.svg>

      {/* Light Particles */}
      {animate && Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            backgroundColor: currentGlow,
            left: '50%',
            top: '50%',
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 100],
            y: [0, (Math.random() - 0.5) * 100],
            opacity: [1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeOut"
          }}
        />
      ))}
    </motion.div>
  );
};