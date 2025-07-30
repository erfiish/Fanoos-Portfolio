import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lantern } from './Lantern';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const Technology = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const techStack = [
    {
      category: 'Frontend Development',
      icon: '⚛️',
      technologies: [
        { name: 'React', level: 'پیشرفته', color: '#61DAFB' },
        { name: 'TypeScript', level: 'پیشرفته', color: '#3178C6' },
        { name: 'Vite', level: 'متوسط', color: '#646CFF' },
        { name: 'Tailwind CSS', level: 'پیشرفته', color: '#06B6D4' }
      ]
    },
    {
      category: 'AI & Machine Learning',
      icon: '🧠',
      technologies: [
        { name: 'LangChain', level: 'پیشرفته', color: '#F2C94C' },
        { name: 'OpenAI API', level: 'پیشرفته', color: '#10A37F' },
        { name: 'Hugging Face', level: 'متوسط', color: '#FF9500' },
        { name: 'PyTorch', level: 'متوسط', color: '#EE4C2C' }
      ]
    },
    {
      category: 'Backend & Database',
      icon: '🛠️',
      technologies: [
        { name: 'Node.js', level: 'پیشرفته', color: '#339933' },
        { name: 'Neo4j', level: 'پیشرفته', color: '#008CC1' },
        { name: 'PostgreSQL', level: 'پیشرفته', color: '#336791' },
        { name: 'Redis', level: 'متوسط', color: '#DC382D' }
      ]
    },
    {
      category: 'Cloud & DevOps',
      icon: '☁️',
      technologies: [
        { name: 'Docker', level: 'پیشرفته', color: '#2496ED' },
        { name: 'AWS', level: 'متوسط', color: '#FF9900' },
        { name: 'Kubernetes', level: 'متوسط', color: '#326CE5' },
        { name: 'GitHub Actions', level: 'متوسط', color: '#2088FF' }
      ]
    }
  ];

  const specialties = [
    {
      title: 'پردازش زبان طبیعی فارسی',
      description: 'تخصص در توسعه مدل‌های NLP برای زبان فارسی',
      icon: '🔤',
      features: ['تحلیل احساسات', 'خلاصه‌سازی متن', 'ترجمه ماشینی', 'تشخیص موجودیت']
    },
    {
      title: 'Knowledge Graph',
      description: 'طراحی و پیاده‌سازی گراف‌های دانش پیچیده',
      icon: '🕸️',
      features: ['Neo4j', 'استخراج دانش', 'روابط پیچیده', 'پیمایش گراف']
    },
    {
      title: 'RAG Systems',
      description: 'سیستم‌های بازیابی اطلاعات تقویت‌شده',
      icon: '🔍',
      features: ['Vector Search', 'Embedding Models', 'Context Retrieval', 'Answer Generation']
    }
  ];

  const levelColors = {
    'پیشرفته': 'bg-green-500',
    'متوسط': 'bg-yellow-500',
    'مبتدی': 'bg-red-500'
  };

  return (
    <section id="technology" className="section-spacing relative overflow-hidden" ref={ref}>
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"
              style={{ left: `${12.5 * (i + 1)}%` }}
              animate={{
                opacity: [0, 0.5, 0],
                scaleY: [0, 1, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
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
            <motion.div
              animate={isInView ? {
                rotate: [0, 180, 360],
              } : {}}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Lantern glowColor="white" size="md" animate={isInView} />
            </motion.div>
          </div>
          <h2 className="text-heading text-white mb-6">
            تکنولوژی‌های پیشرفته
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            استفاده از جدیدترین ابزارها و تکنولوژی‌های هوش مصنوعی برای ارائه بهترین راه‌حل‌ها
          </p>
        </motion.div>

        {/* Technology Stack */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {techStack.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + categoryIndex * 0.1 }}
            >
              <Card className="bg-card/20 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="text-lg font-semibold text-white">
                      {category.category}
                    </h3>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-4">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        className="flex items-center justify-between p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.5 + categoryIndex * 0.1 + techIndex * 0.1 
                        }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: tech.color }}
                          />
                          <span className="text-white font-medium">{tech.name}</span>
                        </div>
                        <Badge 
                          variant="secondary" 
                          className={`text-xs ${levelColors[tech.level as keyof typeof levelColors]} text-white`}
                        >
                          {tech.level}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Specialties */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-subheading text-white text-center mb-8">
            تخصص‌های ویژه ما
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <Card className="bg-card/10 backdrop-blur-sm border-border/30 hover:border-primary/50 transition-all duration-300 h-full group">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="text-4xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {specialty.icon}
                    </motion.div>
                    
                    <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                      {specialty.title}
                    </h4>
                    
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {specialty.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 justify-center">
                      {specialty.features.map((feature, featureIndex) => (
                        <Badge
                          key={featureIndex}
                          variant="outline"
                          className="text-xs border-primary/30 text-primary hover:bg-primary/10"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};