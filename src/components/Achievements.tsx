import { motion, useInView, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Users, TrendingUp, Calendar, Zap } from 'lucide-react';

export const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [counts, setCounts] = useState({
    users: 0,
    satisfaction: 0,
    years: 0,
    projects: 0
  });

  const stats = [
    { 
      icon: Users, 
      value: counts.users,
      finalValue: 300,
      suffix: '+',
      label: 'کاربران فعال', 
      description: 'بیش از سیصد کاربر در پلتفرم ما فعال هستند.',
      duration: 2
    },
    { 
      icon: TrendingUp, 
      value: counts.satisfaction,
      finalValue: 94,
      suffix: '%',
      label: 'رضایت مشتریان', 
      description: 'میزان رضایت بالای مشتریان از خدمات و محصولات ما.',
      duration: 2
    },
    { 
      icon: Calendar, 
      value: counts.years,
      finalValue: 2,
      suffix: ' سال',
      label: 'تجربه فعالیت', 
      description: 'دو سال تجربه موفق در زمینه هوش مصنوعی.',
      duration: 1
    },
    { 
      icon: Zap, 
      value: counts.projects,
      finalValue: 15,
      suffix: '+',
      label: 'پروژه موفق', 
      description: 'بیش از پانزده پروژه موفق در حوزه‌های مختلف.',
      duration: 1.5
    }
  ];

  // Convert English numbers to Persian
  const toPersianNumber = (num) => {
    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return num.toString().split('').map(x => persianNumbers[x] || x).join('');
  };

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        const property = Object.keys(counts)[index];
        animate(0, stat.finalValue, {
          duration: stat.duration,
          onUpdate: (latest) => {
            setCounts(prev => ({
              ...prev,
              [property]: Math.floor(latest)
            }));
          },
          ease: 'easeOut'
        });
      });
    }
  }, [isInView]);

  return (
    <section id="achievements" className="section-spacing bg-gradient-cream" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-heading text-gray-800 mb-4">
            دستاوردها و افتخارات ما
          </h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            نگاهی به مسیر رشد و موفقیت فانوس در ارائه راهکارهای هوشمند
          </p>
        </motion.div>

        <motion.div
          className="relative card-professional py-12 px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center flex flex-col items-center p-4 rounded-md transition-all duration-300 hover:bg-purple-50/50"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-purple-600 animate-pulse-light" />
                </div>
                <div className="text-3xl font-extrabold text-purple-600 mb-2">
                  {toPersianNumber(stat.value)}{stat.suffix}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                <p className="text-xs text-gray-600 hidden md:block">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
