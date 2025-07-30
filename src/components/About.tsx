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
    <section id="about" className="section-spacing relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-violet rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-lantern rounded-full blur-3xl" />
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
            <Lantern glowColor="white" size="md" animate={isInView} />
          </div>
          <h2 className="text-heading text-white mb-6">
            راه‌گشای هوش مصنوعی در دنیای دانش
          </h2>
          <p className="text-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            فانوس هوش مصنوعی با هدف روشن کردن مسیر دانش و اطلاعات در حوزه‌های تخصصی، 
            دستیارهای هوشمند و کارآمدی را برای سازمان‌ها و متخصصان فراهم می‌آورد. 
            ما معتقدیم که هوش مصنوعی باید همچون فانوسی در تاریکی، راه را برای دستیابی 
            به دانش و حل مسائل پیچیده روشن کند.
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
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-lantern flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-subheading text-white mb-8">تیم ما</h3>
          
          <Card className="max-w-md mx-auto bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <motion.div
                className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-lantern flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-2xl font-bold text-primary-foreground">ع</span>
              </motion.div>
              
              <h4 className="text-lg font-semibold text-white mb-2">
                عرفان شفیعی مقدم
              </h4>
              
              <Badge variant="secondary" className="mb-3">
                AI & ML Lead
              </Badge>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                متخصص هوش مصنوعی و یادگیری ماشین با تجربه گسترده در توسعه 
                سیستم‌های هوشمند و پردازش زبان طبیعی فارسی
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};