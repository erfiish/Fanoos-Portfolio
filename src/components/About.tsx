import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lantern } from './Lantern';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Lightbulb, Target } from 'lucide-react';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="section-spacing relative overflow-hidden bg-gradient-cream" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-200/30 to-purple-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-tr from-gray-200/20 to-gray-300/15 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <Lantern glowColor="violet" size="md" animate={isInView} />
          </div>
          <h2 className="text-heading text-gray-800 mb-4">
            پیشرو در توسعه راهکارهای بومی هوش مصنوعی برای بازار ایران
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-body text-gray-600 max-w-3xl mx-auto leading-relaxed">
            هوش مصنوعی فانوس یک شرکت نوآور مستقر در مرکز نوآوری دانشگاه علامه طباطبایی است که با تمرکز بر طراحی و توسعه دستیارهای هوشمند مبتنی بر هوش مصنوعی، در حوزه‌های حقوق، بازار سرمایه، سلامت فردی، زیبایی و آموزش سازمانی فعالیت می‌کند. مأموریت هوش مصنوعی فانوس، ارائه راهکارهایی بومی‌سازی‌شده، کاربردی و مقرون‌به‌صرفه برای بهبود بهره‌وری و کیفیت زندگی کاربران ایرانی است. این شرکت با بهره‌گیری از مدل‌های زبان بزرگ (LLMs)، معماری‌های RAG، تحلیل داده و تیمی چندتخصصی از متخصصان علوم داده، حقوق، پزشکی و روان‌شناسی، محصولاتی را عرضه می‌کند که به نیازهای واقعی کاربران ایرانی در بستر محدودیت‌های زیرساختی و تحریمی پاسخ می‌دهد. هوش مصنوعی فانوس نماینده نسلی نو از استارتاپ‌هایی است که با تکیه بر توان داخلی، افق تازه‌ای در اقتصاد دیجیتال ایران ترسیم می‌کنند.
          </p>
        </motion.div>

        {/* Vision Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            {
              icon: Brain,
              title: 'هوش مصنوعی پیشرفته',
              description: 'استفاده از جدیدترین تکنولوژی‌های یادگیری ماشین و پردازش زبان طبیعی'
            },
            {
              icon: Lightbulb,
              title: 'راه‌حل‌های نوآورانه',
              description: 'ارائه راه‌کارهای خلاقانه و منحصر به فرد برای چالش‌های هر حوزه'
            },
            {
              icon: Target,
              title: 'دقت و تخصص',
              description: 'تمرکز بر کیفیت و دقت بالا در ارائه پاسخ‌ها و راه‌حل‌های هوشمند'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <Card className="card-elegant hover:border-purple-200/50 transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <item.icon className="w-6 h-6 text-purple-600" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </section>
  );
};