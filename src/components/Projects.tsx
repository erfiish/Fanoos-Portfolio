import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lantern } from './Lantern';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, Users, TrendingUp } from 'lucide-react';

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: 'سامانه هوشمند مشاوره حقوقی',
      description: 'پلتفرم جامع ارائه مشاوره حقوقی آنلاین با قابلیت تحلیل قوانین و ارائه راهنمایی‌های تخصصی',
      category: 'حقوقی',
      status: 'فعال',
      features: ['تحلیل اسناد', 'پاسخگویی ۲۴/۷', 'پایگاه دانش حقوقی'],
      metrics: { users: '۲۰۰+', accuracy: '۹۵%', responseTime: '< ۲ ثانیه' },
      color: 'amber' as const
    },
    {
      title: 'دستیار تشخیص پزشکی هوشمند',
      description: 'سیستم کمک تشخیص پزشکی مبتنی بر هوش مصنوعی برای پشتیبانی از پزشکان در تصمیم‌گیری‌های بالینی',
      category: 'پزشکی',
      status: 'در حال توسعه',
      features: ['تحلیل علائم', 'پیشنهاد تشخیص', 'بانک اطلاعات پزشکی'],
      metrics: { accuracy: '۹۲%', diseases: '۵۰۰+', consultations: '۱۰۰۰+' },
      color: 'white' as const
    },
    {
      title: 'پلتفرم مدیریت دانش سازمانی',
      description: 'راه‌حل هوشمند مدیریت اطلاعات و دانش سازمانی با قابلیت جستجوی پیشرفته و پاسخگویی خودکار',
      category: 'سازمانی',
      status: 'آزمایشی',
      features: ['مدیریت اسناد', 'جستجوی هوشمند', 'گزارش‌گیری خودکار'],
      metrics: { organizations: '۱۰+', documents: '۱۰,۰۰۰+', queries: '۵,۰۰۰+' },
      color: 'violet' as const
    }
  ];

  const statusColors = {
    'فعال': 'bg-green-500',
    'در حال توسعه': 'bg-purple-500',
    'آزمایشی': 'bg-orange-500'
  };

  return (
    <section id="projects" className="section-spacing relative overflow-hidden bg-gradient-cream" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, hsl(291, 73%, 46%) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 flex justify-center">
            <motion.div
              animate={isInView ? {
                rotate: [0, 360],
              } : {}}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Lantern glowColor="moonlight" size="md" animate={isInView} />
            </motion.div>
          </div>
          <h2 className="text-heading text-gray-800 mb-6">
            آمار و افتخارات
          </h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            مروری بر دستاوردها و عملکرد فانوس هوش مصنوعی در مسیر توسعه
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="text-center py-12 card-professional"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto px-4">
            {[
              { icon: Users, value: '۳۰۰+', label: 'کاربران فعال', description: 'بیش از سیصد کاربر در پلتفرم ما فعال هستند.' },
              { icon: TrendingUp, value: '۹۴%', label: 'رضایت مشتریان', description: 'میزان رضایت بالای مشتریان از خدمات و محصولات ما.' },
              { icon: Calendar, value: '۲ سال', label: 'تجربه فعالیت', description: 'دو سال تجربه موفق در زمینه هوش مصنوعی.' },
              { icon: ExternalLink, value: '۱۵+', label: 'پروژه موفق', description: 'بیش از پانزده پروژه موفق در حوزه‌های مختلف.' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center flex flex-col items-center p-4 rounded-md transition-all duration-300 hover:bg-purple-50/50"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-purple-600 animate-pulse-light" />
                </div>
                <div className="text-3xl font-extrabold text-purple-600 mb-2">{stat.value}</div>
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