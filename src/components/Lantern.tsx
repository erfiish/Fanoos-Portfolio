import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface LanternProps {
  glowColor?: 'amber' | 'white' | 'violet' | 'moonlight' | 'purple';
  intensity?: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animate?: boolean;
  interactive?: boolean;
  className?: string;
}

export const Lantern = ({ 
  glowColor = 'amber', 
  intensity = 1, 
  size = 'lg',
  animate = true,
  interactive = false,
  className = ''
}: LanternProps) => {
  console.log("Lantern component loaded or updated");
  const [isHovered, setIsHovered] = useState(false);
  const [isLit, setIsLit] = useState(true);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView && animate) {
      controls.start("visible");
    }
  }, [isInView, controls, animate]);

  const sizeClasses = {
    sm: 'w-16 h-24',
    md: 'w-24 h-32',
    lg: 'w-48 h-64',
    xl: 'w-64 h-80'
  };

  const glowColors = {
    amber: {
      primary: '#F2C94C',
      secondary: '#F39C12',
      tertiary: '#E67E22'
    },
    white: {
      primary: '#FFFFFF',
      secondary: '#F8F9FA',
      tertiary: '#E9ECEF'
    },
    violet: {
      primary: '#6C5CE7',
      secondary: '#A29BFE',
      tertiary: '#74B9FF'
    },
    moonlight: {
      primary: '#E8EAF0',
      secondary: '#D1D9E6',
      tertiary: '#BAC8DC'
    },
    purple: {
      primary: '#b620c7',
      secondary: '#9c27b0',
      tertiary: '#7b1fa2'
    }
  };

  const currentGlow = glowColors[glowColor];

  const containerVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.3,
      rotateY: -90,
      y: 100
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateY: 0,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1
      }
    }
  };

  const lightVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: isLit ? 1 : 0.2, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.8, 0.5, 1] }
    }
  };

  const toggleLight = () => {
    if (interactive) {
      setIsLit(!isLit);
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${sizeClasses[size]} mx-auto ${interactive ? 'cursor-pointer' : ''} ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={toggleLight}
      style={{ perspective: '1000px' }}
    >
      {/* Enhanced Outer Glow with multiple layers */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, ${currentGlow.primary}60 0%, ${currentGlow.primary}30 30%, ${currentGlow.secondary}20 60%, transparent 100%)`,
          filter: 'blur(40px)',
        }}
        animate={animate && isLit ? {
          scale: [1, 1.4, 1.2, 1],
          opacity: [0.4, 0.8, 0.6, 0.4]
        } : {}}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Secondary glow layer */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, ${currentGlow.secondary}40 0%, ${currentGlow.tertiary}20 40%, transparent 70%)`,
          filter: 'blur(20px)',
        }}
        animate={animate && isLit ? {
          scale: [1.2, 0.8, 1.2],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360]
        } : {}}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Interactive hover glow */}
      {interactive && (
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle, ${currentGlow.primary}50 0%, transparent 60%)`,
            filter: 'blur(30px)',
          }}
          animate={{
            opacity: isHovered ? 0.8 : 0,
            scale: isHovered ? 1.6 : 1
          }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Main Lantern SVG */}
      <motion.svg
        viewBox="0 0 200 280"
        className="w-full h-full relative z-10"
        aria-labelledby="lantern-title"
        role="img"
        style={{
          filter: isLit ? `drop-shadow(0 0 ${intensity * 25}px ${currentGlow.primary}) drop-shadow(0 0 ${intensity * 50}px ${currentGlow.primary}50)` : 'drop-shadow(0 0 5px rgba(0,0,0,0.5))'
        }}
        animate={animate ? {
          y: [-8, 8, -8],
          rotateZ: [-1, 1, -1]
        } : {}}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <title id="lantern-title">فانوس هوشمند ای‌آی</title>
        <defs>
          {/* Enhanced gradients */}
          <radialGradient id={`lanternGlow-${glowColor}`} cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor={currentGlow.primary} stopOpacity={isLit ? "0.95" : "0.1"} />
            <stop offset="40%" stopColor={currentGlow.secondary} stopOpacity={isLit ? "0.8" : "0.05"} />
            <stop offset="70%" stopColor={currentGlow.tertiary} stopOpacity={isLit ? "0.6" : "0.02"} />
            <stop offset="100%" stopColor={currentGlow.primary} stopOpacity="0" />
          </radialGradient>
          
          <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="30%" stopColor="#B8860B" />
            <stop offset="70%" stopColor="#8B7355" />
            <stop offset="100%" stopColor="#6B5B47" />
          </linearGradient>

          <linearGradient id="chainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E6E6FA" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8B7355" />
          </linearGradient>

          {/* Glass effect */}
          <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
          </linearGradient>
        </defs>

        {/* Suspension Chain - Enhanced */}
        <motion.g
          animate={animate ? { y: [-2, 2, -2] } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.ellipse
              key={i}
              cx="100"
              cy={8 + i * 6}
              rx="2"
              ry="4"
              fill="url(#chainGradient)"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            />
          ))}
        </motion.g>

        {/* Top Ornamental Cap */}
        <motion.g
          initial={{ scale: 0, y: -20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
        >
          <ellipse cx="100" cy="45" rx="22" ry="12" fill="url(#metalGradient)" />
          <ellipse cx="100" cy="42" rx="18" ry="8" fill="url(#metalGradient)" />
          {/* Ornamental details */}
          <circle cx="85" cy="42" r="2" fill={currentGlow.primary} opacity="0.8" />
          <circle cx="115" cy="42" r="2" fill={currentGlow.primary} opacity="0.8" />
        </motion.g>

        {/* Main Body Frame - Enhanced */}
        <motion.path
          d="M 55 65 Q 55 55, 70 55 L 130 55 Q 145 55, 145 65 L 145 200 Q 145 215, 130 215 L 70 215 Q 55 215, 55 200 Z"
          fill="none"
          stroke="url(#metalGradient)"
          strokeWidth="5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
        />

        {/* Decorative Frame Elements */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {/* Vertical dividers */}
          {[75, 100, 125].map((x, i) => (
            <motion.line
              key={x}
              x1={x} y1="60" x2={x} y2="210"
              stroke="url(#metalGradient)"
              strokeWidth="3"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 1.2 + i * 0.1, duration: 0.6 }}
            />
          ))}
          
          {/* Horizontal decorative lines */}
          <line x1="60" y1="90" x2="140" y2="90" stroke="url(#metalGradient)" strokeWidth="2" opacity="0.7" />
          <line x1="60" y1="180" x2="140" y2="180" stroke="url(#metalGradient)" strokeWidth="2" opacity="0.7" />
        </motion.g>

        {/* Glass Panels with enhanced lighting */}
        <motion.rect
          x="60" y="60" width="80" height="150"
          fill={`url(#lanternGlow-${glowColor})`}
          rx="8"
          variants={lightVariants}
        />

        {/* Glass reflection effect */}
        <motion.rect
          x="65" y="65" width="15" height="140"
          fill="url(#glassGradient)"
          rx="3"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Inner Light Core - Enhanced */}
        <motion.g variants={lightVariants}>
          {/* Main light source */}
          <motion.circle
            cx="100" cy="135" r="30"
            fill={currentGlow.primary}
            opacity="0.9"
            animate={animate && isLit ? {
              r: [25, 35, 30, 25],
              opacity: [0.7, 1, 0.8, 0.7]
            } : {}}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Secondary light rings */}
          <motion.circle
            cx="100" cy="135" r="20"
            fill={currentGlow.secondary}
            opacity="0.6"
            animate={animate && isLit ? {
              r: [15, 25, 20, 15],
              opacity: [0.4, 0.8, 0.6, 0.4]
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.g>

        {/* Enhanced Light Rays */}
        {isLit && [...Array(12)].map((_, index) => {
          const angle = (index * 30);
          return (
            <motion.line
              key={angle}
              x1="100"
              y1="135"
              x2={100 + Math.cos((angle * Math.PI) / 180) * 45}
              y2={135 + Math.sin((angle * Math.PI) / 180) * 45}
              stroke={currentGlow.primary}
              strokeWidth="2"
              opacity="0.7"
              animate={animate ? {
                opacity: [0, 1, 0.5, 0],
                strokeWidth: [1, 3, 2, 1]
              } : {}}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            />
          );
        })}

        {/* Bottom Ornamental Base */}
        <motion.g
          initial={{ scale: 0, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
        >
          <ellipse cx="100" cy="215" rx="25" ry="15" fill="url(#metalGradient)" />
          <ellipse cx="100" cy="212" rx="20" ry="10" fill="url(#metalGradient)" />
        </motion.g>

        {/* Persian Decorative Pattern */}
        <motion.g 
          opacity="0.8" 
          fill={currentGlow.primary}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          {/* Corner ornaments */}
          <circle cx="75" cy="75" r="3" />
          <circle cx="125" cy="75" r="3" />
          <circle cx="75" cy="195" r="3" />
          <circle cx="125" cy="195" r="3" />
          
          {/* Central decorative elements */}
          <motion.path
            d="M 90 135 Q 100 125, 110 135 Q 100 145, 90 135"
            fill={currentGlow.secondary}
            animate={animate ? { rotate: [0, 360] } : {}}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: '100px 135px' }}
          />
        </motion.g>
      </motion.svg>

      {/* Enhanced Floating Particles */}
      {animate && isLit && [...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            backgroundColor: currentGlow.primary,
            left: '50%',
            top: '50%',
            boxShadow: `0 0 ${Math.random() * 10 + 5}px ${currentGlow.primary}`
          }}
          animate={{
            x: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 150],
            y: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 150],
            opacity: [1, 0.7, 0],
            scale: [0, 1, 0.5, 0]
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Interactive Elements */}
      {interactive && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-black/30 backdrop-blur-sm rounded-full px-3 py-1"
            initial={{ scale: 0 }}
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-white text-sm font-medium">
              {isLit ? 'خاموش کردن' : 'روشن کردن'}
            </span>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};