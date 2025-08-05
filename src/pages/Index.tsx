import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Achievements } from '@/components/Achievements';
import { Services } from '@/components/Services';
import { FAQ } from '@/components/FAQ'; // Import the new FAQ component
import { Contact } from '@/components/Contact';
import { Lantern } from '@/components/Lantern';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
      const sections = ['hero', 'about', 'services', 'achievements', 'faq', 'contact'];
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
    <div className="min-h-screen bg-gradient-cream relative">
            {/* Header */}
      <Header />
      
      {/* Scroll Progress Indicator - RTL */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-gold z-50 origin-right"
        style={{ scaleX }}
      />



      {/* Floating Contact Button */}
      <motion.button
        className="fixed bottom-8 right-8 z-40 bg-gradient-gold text-white p-4 rounded-full shadow-lg hover:shadow-purple-500/25 hover:scale-110 transition-all duration-300 hidden sm:block"
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
        className="fixed bottom-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm border-t border-gray-200/50 lg:hidden shadow-lg"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 2 }}
      >
        <div className="flex justify-around items-center py-3">
          {[
            { id: 'hero', label: 'خانه' },
            { id: 'about', label: 'درباره' },
            { id: 'services', label: 'محصولات' },
            { id: 'achievements', label: 'دستاوردها' },
            { id: 'faq', label: 'سوالات متداول' },
            { id: 'contact', label: 'تماس' }
          ].map((item) => (
            <button
              key={item.id}
                              className={`px-3 py-2 text-xs rounded-lg transition-colors ${
                  currentSection === item.id 
                    ? 'bg-purple-500 text-white' 
                    : 'text-gray-600 hover:text-purple-600'
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
        <Achievements />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
