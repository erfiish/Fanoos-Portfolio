import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Projects } from '@/components/Projects';
import { Technology } from '@/components/Technology';
import { Contact } from '@/components/Contact';
import { Lantern } from '@/components/Lantern';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to different lantern states
  const lanternGlow = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ['amber', 'white', 'violet', 'amber', 'white', 'moonlight']
  );

  // Track current section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'projects', 'technology', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections) {
        const element = document.getElementById(section === 'hero' ? 'hero' : section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll progress indicator
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="min-h-screen bg-gradient-night relative">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-lantern z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Floating Navigation Lantern */}
      <motion.div
        className="fixed top-8 left-8 z-40 hidden lg:block"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Lantern 
            glowColor={currentSection === 'hero' ? 'amber' : 
                     currentSection === 'about' ? 'white' :
                     currentSection === 'services' ? 'violet' :
                     currentSection === 'projects' ? 'amber' :
                     currentSection === 'technology' ? 'white' : 'moonlight'}
            size="sm" 
            animate={true} 
          />
        </motion.div>
      </motion.div>

      {/* Floating Contact Button */}
      <motion.button
        className="fixed bottom-8 right-8 z-40 bg-gradient-lantern text-primary-foreground p-4 rounded-full shadow-glow-amber hover:shadow-glow-amber hover:scale-110 transition-all duration-300"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3 }}
        onClick={() => {
          const contactSection = document.getElementById('contact');
          contactSection?.scrollIntoView({ behavior: 'smooth' });
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </motion.button>

      {/* Navigation Menu (Mobile) */}
      <motion.nav
        className="fixed bottom-0 left-0 right-0 z-40 bg-card/80 backdrop-blur-sm border-t border-border/50 lg:hidden"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 2 }}
      >
        <div className="flex justify-around items-center py-3">
          {[
            { id: 'hero', label: 'خانه' },
            { id: 'about', label: 'درباره' },
            { id: 'services', label: 'خدمات' },
            { id: 'projects', label: 'پروژه‌ها' },
            { id: 'contact', label: 'تماس' }
          ].map((item) => (
            <button
              key={item.id}
              className={`px-3 py-2 text-xs rounded-lg transition-colors ${
                currentSection === item.id 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => {
                const element = document.getElementById(item.id === 'hero' ? 'hero' : item.id);
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </motion.nav>

      {/* Main Content */}
      <main>
        <div id="hero">
          <Hero />
        </div>
        <About />
        <Services />
        <Projects />
        <Technology />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-card/30 backdrop-blur-sm border-t border-border/30 py-8 relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Lantern glowColor="amber" size="sm" animate={true} />
          </motion.div>
          
          <p className="text-muted-foreground text-sm mb-4">
            © ۱۴۰۳ فانوس هوش مصنوعی. تمامی حقوق محفوظ است.
          </p>
          
          <p className="text-xs text-muted-foreground">
            "از دل تاریکی، فانوس روشن می‌شود"
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
