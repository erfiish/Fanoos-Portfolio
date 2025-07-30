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
    'در حال توسعه': 'bg-blue-500',
    'آزمایشی': 'bg-orange-500'
  };

  return (
    <section id="projects" className="section-spacing relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, hsl(var(--primary)) 2px, transparent 0)`,
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
              <Lantern glowColor="amber" size="md" animate={isInView} />
            </motion.div>
          </div>
          <h2 className="text-heading text-white mb-6">
            پروژه‌های موفق ما
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            نمونه‌ای از راه‌حل‌های هوشمندی که برای مشتریان خود طراحی و پیاده‌سازی کرده‌ایم
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="group"
            >
              <Card className="bg-card/20 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 h-full hover:shadow-lg hover:shadow-primary/10 overflow-hidden">
                {/* Project Header */}
                <div className="p-6 border-b border-border/30">
                  <div className="flex items-start justify-between mb-4">
                    <Badge 
                      variant="secondary" 
                      className="text-xs"
                    >
                      {project.category}
                    </Badge>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${statusColors[project.status as keyof typeof statusColors]}`} />
                      <span className="text-xs text-muted-foreground">{project.status}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <CardContent className="p-6">
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-white mb-3">ویژگی‌های کلیدی:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <Badge
                          key={featureIndex}
                          variant="outline"
                          className="text-xs border-primary/30 text-primary"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-white mb-3">آمار عملکرد:</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                        <motion.div
                          key={key}
                          className="text-center"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ 
                            duration: 0.5, 
                            delay: 0.5 + index * 0.2 + metricIndex * 0.1 
                          }}
                        >
                          <div className="text-lg font-bold text-primary mb-1">{value}</div>
                          <div className="text-xs text-muted-foreground">
                            {key === 'users' && 'کاربران'}
                            {key === 'accuracy' && 'دقت'}
                            {key === 'responseTime' && 'زمان پاسخ'}
                            {key === 'diseases' && 'بیماری'}
                            {key === 'consultations' && 'مشاوره'}
                            {key === 'organizations' && 'سازمان'}
                            {key === 'documents' && 'اسناد'}
                            {key === 'queries' && 'پرسش'}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="w-full text-primary hover:bg-primary/10 group"
                  >
                    <span>مطالعه موردی</span>
                    <ExternalLink className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Users, value: '۳۰۰+', label: 'کاربران فعال' },
              { icon: TrendingUp, value: '۹۴%', label: 'رضایت مشتریان' },
              { icon: Calendar, value: '۲ سال', label: 'تجربه فعالیت' },
              { icon: ExternalLink, value: '۱۵+', label: 'پروژه موفق' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};