import { motion } from 'framer-motion';
import { Lantern } from './Lantern';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Logo from './Logo';

export const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-start relative overflow-hidden pt-10 bg-gradient-cream">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
      
      {/* Subtle Gradient Overlays */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-amber-300/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-gray-200/15 to-gray-300/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.15, 0.08]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Central Lantern */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-0 mt-8" // Added mt-8 to move lantern down
        >
          <Lantern glowColor="purple" size="lg" animate={true} />
        </motion.div>

        {/* Persian Main Title */}
        <motion.h1
          className="text-hero mb-4 mt-[-16] text-gray-800 font-bold leading-tight" // Adjusted mb and added mt
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          از دل تاریکی، فانوس روشن می‌شود
        </motion.h1>

        {/* English Subtitle */}
        <motion.p
          className="text-subheading mb-4 text-gray-600 font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          From darkness, the lantern lights the path of intelligence
        </motion.p>

        {/* Company Name */}
        <motion.div
          className="mb-8" // Changed from mb-2 to mb-0
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <h2 className="text-heading text-purple-600 font-semibold mb-2">
            فانوس هوش مصنوعی
          </h2>
          <p className="text-body text-gray-600">
            راه‌گشای دانش در حوزه‌های حقوقی، پزشکی و سازمانی
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-2" // Changed from mb-4 to mb-2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <Button 
            size="lg" 
            className="bg-gradient-gold text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 px-8 py-4 text-lg font-medium"
          >
            کشف خدمات ما
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white transition-all duration-300 px-8 py-4 text-lg"
          >
            تماس با ما
          </Button>
        </motion.div>

        {/* Scroll Indicator - repositioned */}
        <motion.div
          className="flex flex-col items-center mt-2 text-gray-400 hover:text-purple-600 transition-colors duration-300 text-xs" // Changed mt-4 to mt-2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.button
            onClick={scrollToNext}
            className="flex flex-col items-center gap-1"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs">ادامه کاوش</span>
            <ArrowDown className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none" />
    </section>
  );
};