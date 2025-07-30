import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Lantern } from './Lantern';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar, Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'ایمیل',
      value: 'info@fanoos-ai.com',
      description: 'پاسخگویی در کمتر از ۲۴ ساعت'
    },
    {
      icon: Phone,
      title: 'تلفن',
      value: '+98 21 1234 5678',
      description: 'دوشنبه تا جمعه، ۹ تا ۱۸'
    },
    {
      icon: MapPin,
      title: 'آدرس',
      value: 'تهران، ایران',
      description: 'دفتر مرکزی فانوس هوش مصنوعی'
    }
  ];

  const timeSlots = [
    '۹:۰۰', '۱۰:۰۰', '۱۱:۰۰', '۱۴:۰۰', '۱۵:۰۰', '۱۶:۰۰'
  ];

  return (
    <section id="contact" className="section-spacing relative overflow-hidden" ref={ref}>
      {/* Moonlight Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-lantern-moonlight rounded-full blur-3xl opacity-10"
          animate={isInView ? {
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          } : {}}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl opacity-5"
          animate={isInView ? {
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.15, 0.05]
          } : {}}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
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
                scale: [1, 1.1, 1],
              } : {}}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Lantern glowColor="moonlight" size="md" animate={isInView} />
            </motion.div>
          </div>
          <h2 className="text-heading text-white mb-6">
            با ما در تماس باشید
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            آماده همکاری و ارائه بهترین راه‌حل‌های هوش مصنوعی برای نیازهای شما هستیم
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-subheading text-white mb-8">راه‌های ارتباطی</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="bg-card/20 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-1">
                            {info.title}
                          </h4>
                          <p className="text-primary font-medium mb-2">
                            {info.value}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Schedule Meeting Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Dialog open={isScheduleOpen} onOpenChange={setIsScheduleOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-lantern hover:shadow-glow-amber transition-all duration-300"
                  >
                    <Calendar className="w-5 h-5 ml-2" />
                    رزرو جلسه مشاوره رایگان
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-card border-border" dir="rtl">
                  <DialogHeader>
                    <DialogTitle className="text-white text-center">
                      رزرو جلسه مشاوره
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 p-4">
                    <div>
                      <Label htmlFor="name" className="text-white">نام و نام خانوادگی</Label>
                      <Input 
                        id="name" 
                        placeholder="نام خود را وارد کنید"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">ایمیل</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="example@domain.com"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-white">شماره تلفن</Label>
                      <Input 
                        id="phone" 
                        placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label className="text-white">زمان ترجیحی</Label>
                      <div className="grid grid-cols-3 gap-2 mt-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            variant="outline"
                            size="sm"
                            className="text-xs"
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-white">توضیحات (اختیاری)</Label>
                      <Textarea 
                        id="message" 
                        placeholder="نیازهای خود را بیان کنید..."
                        className="mt-2"
                        rows={3}
                      />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Send className="w-4 h-4 ml-2" />
                      ارسال درخواست
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-card/20 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <h3 className="text-subheading text-white mb-6 text-center">
                  پیام مستقیم
                </h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-name" className="text-white">نام</Label>
                      <Input 
                        id="contact-name" 
                        placeholder="نام خود را وارد کنید"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-email" className="text-white">ایمیل</Label>
                      <Input 
                        id="contact-email" 
                        type="email" 
                        placeholder="example@domain.com"
                        className="mt-2"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-white">موضوع</Label>
                    <Input 
                      id="subject" 
                      placeholder="موضوع پیام شما"
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="contact-message" className="text-white">پیام</Label>
                    <Textarea 
                      id="contact-message" 
                      placeholder="پیام خود را بنویسید..."
                      className="mt-2"
                      rows={5}
                    />
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-violet hover:shadow-glow-violet transition-all duration-300"
                    >
                      <MessageSquare className="w-5 h-5 ml-2" />
                      ارسال پیام
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Working Hours */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Card className="max-w-md mx-auto bg-card/10 backdrop-blur-sm border-border/30">
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">
                ساعات کاری
              </h4>
              <p className="text-muted-foreground text-sm">
                دوشنبه تا جمعه: ۹:۰۰ - ۱۸:۰۰<br />
                شنبه: ۹:۰۰ - ۱۴:۰۰<br />
                یکشنبه: تعطیل
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};