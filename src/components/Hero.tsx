import { motion } from 'framer-motion';
import { Lantern } from './Lantern';
import { Button } from '@/components/ui/button';
import { ArrowDown, ChevronDown } from 'lucide-react';
import Logo from './Logo';

export const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[100svh] flex flex-col items-center justify-start relative overflow-hidden pt-6 sm:pt-10 bg-gradient-cream">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-pattern-dots"></div>
      </div>
      
      {/* Simple Gradient Overlay */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Central Lantern */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-0 mt-4 sm:mt-8"
        >
          <Lantern glowColor="purple" size="lg" animate={true} />
        </motion.div>

        {/* Persian Main Title */}
        <motion.h1
          className="text-hero mb-4 mt-[-16] text-gray-800 font-bold leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          از دل تاریکی، فانوس روشن می‌شود
        </motion.h1>

        {/* English Subtitle */}
        <motion.p
          className="text-subheading mb-4 text-gray-600 font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          From darkness, the lantern lights the path of intelligence
        </motion.p>

        {/* Company Name */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h2 className="text-heading text-purple-600 font-semibold mb-2">
            هوش مصنوعی فانوس (Fanoos AI)
          </h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            دستیار هوشمند شما برای زندگی و کسب‌و‌کار
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium min-w-0 sm:min-w-[180px]"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
             محصولات ما
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto border-2 border-purple-300 text-purple-600 hover:bg-purple-200 hover:border-purple-500 hover:text-purple-800 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg min-w-0 sm:min-w-[180px]"
          >
            تماس با ما
          </Button>
        </motion.div>

        {/* Scroll Indicator - Hidden on mobile */}
        <motion.div
          className="hidden sm:flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.button
            onClick={scrollToNext}
            className="group flex flex-col items-center gap-3 px-6 py-3 rounded-2xl bg-purple-50/30 hover:bg-purple-100/50 transition-all duration-500"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-base font-semibold text-purple-700 group-hover:text-purple-800 transition-colors duration-300">
              ادامه کاوش
            </span>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-400/20 to-purple-600/20 rounded-full blur-sm transform scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <motion.div
                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 p-2 shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/30"
                animate={{ 
                  y: [0, 6, 0],
                  boxShadow: [
                    "0 4px 12px rgba(147, 51, 234, 0.2)",
                    "0 8px 24px rgba(147, 51, 234, 0.3)",
                    "0 4px 12px rgba(147, 51, 234, 0.2)"
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ChevronDown className="w-full h-full text-white" />
              </motion.div>
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-purple-400/20"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.2, 0, 0.2]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* Subtle Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white/50 pointer-events-none" />
    </section>
  );
};