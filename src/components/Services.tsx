import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lantern } from './Lantern';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Scale, Stethoscope, Building2, ArrowLeft } from 'lucide-react';

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Scale,
      title: 'دستیار هوش مصنوعی حقوقی',
      description: 'سیستم هوشمند پاسخگویی به سوالات حقوقی، تحلیل قوانین، و راهنمایی در امور قضایی و قراردادها',
      features: [
        'تحلیل قوانین و مقررات',
        'پاسخگویی به سوالات حقوقی',
        'بررسی قراردادها',
        'راهنمایی در امور قضایی'
      ],
      color: 'amber' as const,
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Stethoscope,
      title: 'دستیار پزشکی مبتنی بر هوش مصنوعی',
      description: 'سامانه پیشرفته پشتیبانی از تصمیمات پزشکی، تشخیص بیماری‌ها، و ارائه راهنمایی‌های درمانی',
      features: [
        'کمک به تشخیص پزشکی',
        'راهنمایی درمانی',
        'تحلیل علائم و نشانه‌ها',
        'پشتیبانی تصمیمات بالینی'
      ],
      color: 'white' as const,
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      icon: Building2,
      title: 'دستیار دانش‌محور سازمانی',
      description: 'پلتفرم جامع مدیریت دانش سازمانی، پاسخگویی به پرسش‌های کارکنان، و بهینه‌سازی فرآیندها',
      features: [
        'مدیریت دانش سازمانی',
        'پاسخگویی به پرسش‌های کارکنان',
        'بهینه‌سازی فرآیندها',
        'آموزش هوشمند'
      ],
      color: 'violet' as const,
      gradient: 'from-purple-600 to-indigo-600'
    }
  ];

  return (
    <section id="services" className="section-spacing relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-20 bg-gradient-to-b from-primary to-transparent"
              style={{
                left: `${(i + 1) * 5}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 0.3, 0],
                scaleY: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
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
          <h2 className="text-heading text-white mb-6">
            خدمات هوش مصنوعی تخصصی
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            دستیارهای هوشمند ما در سه حوزه کلیدی، راه‌حل‌های دقیق و کارآمد ارائه می‌دهند
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="group"
            >
              <Card className="bg-card/30 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 h-full hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-8">
                  {/* Service Icon with Glow */}
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-glow-primary`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Mini Lantern */}
                    <motion.div
                      className="absolute -top-2 -right-2"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Lantern glowColor={service.color} size="sm" animate={false} />
                    </motion.div>
                  </motion.div>

                  {/* Service Title */}
                  <h3 className="text-xl font-semibold text-white mb-4 text-center leading-relaxed">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed text-center">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.5 + index * 0.2 + featureIndex * 0.1 
                        }}
                      >
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-glow-primary transition-all duration-300 group"
                      size="lg"
                    >
                      <span>بیشتر بدانید</span>
                      <ArrowLeft className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-muted-foreground mb-6">
            برای دریافت مشاوره رایگان و بررسی نیازهای خاص سازمان شما
          </p>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
          >
            درخواست مشاوره رایگان
          </Button>
        </motion.div>
      </div>
    </section>
  );
};