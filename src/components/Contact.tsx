import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Lantern } from "./Lantern";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formStatus, setFormStatus] = useState('idle'); // idle, success

  const contactInfo = [
    {
      icon: Mail,
      title: 'ایمیل',
      value: 'info@fanoos-ai.com',
      description: 'پاسخ در کمتر از ۲۴ ساعت'
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
      description: 'دفتر مرکزی فانوس'
    }
  ];


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-cream" ref={ref}>
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
      
      {/* Subtle Gradient Overlays */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-purple-300/10 rounded-full blur-3xl"
          animate={isInView ? {
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          } : {}}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-60 h-60 bg-gradient-to-tr from-gray-200/15 to-gray-300/10 rounded-full blur-3xl"
          animate={isInView ? {
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.15, 0.08]
          } : {}}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Header - Professional Design */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6">
            <Lantern glowColor="white" size="md" animate={isInView} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            با ما در تماس باشید
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            آماده همکاری و ارائه بهترین راه‌حل‌های هوش مصنوعی
          </p>
        </motion.div>

        {/* Contact Info - Professional Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="card-elegant p-6 h-full transition-all duration-300 hover:shadow-2xl hover:border-purple-200/50">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{info.title}</h4>
                <p className="text-purple-600 font-medium mb-2">{info.value}</p>
                <p className="text-sm text-gray-500">{info.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form - Professional Design */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="card-professional p-8 md:p-10">
            {formStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">پیام شما ارسال شد!</h3>
                <p className="text-gray-600 text-lg">به زودی با شما تماس خواهیم گرفت</p>
              </motion.div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-800 mb-3">
                    ارسال پیام
                  </h3>
                  <p className="text-gray-600">
                    نظرات و سوالات خود را با ما در میان بگذارید
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-3">نام و نام خانوادگی</label>
                      <input
                        type="text"
                        className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-gray-800 placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                        placeholder="نام شما"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-3">ایمیل</label>
                      <input
                        type="email"
                        className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-gray-800 placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-3">شماره تماس (اختیاری)</label>
                    <input
                      type="tel"
                      className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-gray-800 placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                      placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-3">موضوع</label>
                    <input
                      type="text"
                      className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-gray-800 placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                      placeholder="موضوع پیام شما"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-3">پیام</label>
                    <textarea
                      rows={5}
                      className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-gray-800 placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                      placeholder="پیام خود را با جزئیات بنویسید..."
                    />
                  </div>
                  
                  <motion.button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-gold text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageSquare className="w-5 h-5" />
                    ارسال پیام
                  </motion.button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};