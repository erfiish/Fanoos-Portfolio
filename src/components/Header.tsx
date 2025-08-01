import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-header backdrop-blur-md border-b border-gray-200/50 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Logo size="md" className="cursor-pointer" />
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:flex items-center"
          >
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-white/60 mx-3 font-medium">
              درباره ما
            </a>
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-white/60 mx-3 font-medium">
              خدمات
            </a>
            <a href="#projects" className="text-gray-700 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-white/60 mx-3 font-medium">
              آمار و افتخارات
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-white/60 mx-3 font-medium">
              تماس
            </a>
          </motion.nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="sm"
              className="bg-gradient-gold text-white hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 font-semibold"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              شروع کنید
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 