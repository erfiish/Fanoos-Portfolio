import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, Mail, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Lantern } from "./Lantern";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formStatus, setFormStatus] = useState('idle'); // idle, success, error, loading
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'ایمیل',
      value: 'info@fanoosai.com',
      description: 'پاسخ در کمتر از ۲۴ ساعت'
    },
    {
      icon: MessageSquare,
      title: 'واتساپ',
      value: '۰۹۱۲۸۴۶۸۸۶۱',
      description: 'ارسال پیام در واتساپ'
    },
    {
      icon: MapPin,
      title: 'آدرس',
      value: 'تهران، میدان ونک، بزرگراه حقانی',
      description: 'مرکز رشد واحدهای فناور دانشگاه علامه طباطبایی (ره)، طبقه سوم، شرکت هوش مصنوعی فانوس'
    }
  ];


  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_email: 'info@fanoosai.com'
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Email send error:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
            ) : formStatus === 'error' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">خطا در ارسال پیام</h3>
                <p className="text-gray-600 text-lg">لطفاً دوباره تلاش کنید یا با ما تماس بگیرید</p>
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
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-3">نام و نام خانوادگی</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-gray-800 placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                        placeholder="نام شما"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-3">ایمیل</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-gray-800 placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-3">شماره تماس (اختیاری)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-gray-800 placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                      placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-3">موضوع</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-gray-800 placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                      placeholder="موضوع پیام شما"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-3">پیام</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-gray-800 placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                      placeholder="پیام خود را با جزئیات بنویسید..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="w-full bg-gradient-gold text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: formStatus === 'loading' ? 1 : 1.02 }}
                    whileTap={{ scale: formStatus === 'loading' ? 1 : 0.98 }}
                  >
                    {formStatus === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        در حال ارسال...
                      </>
                    ) : (
                      <>
                        <MessageSquare className="w-5 h-5" />
                        ارسال پیام
                      </>
                    )}
                  </motion.button>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};