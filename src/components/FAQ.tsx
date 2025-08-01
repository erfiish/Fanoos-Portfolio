import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Lantern } from './Lantern';

export const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const faqItems = [
    {
      question: "خدمات فانوس هوش مصنوعی شامل چه مواردی است؟",
      answer: "ما در فانوس هوش مصنوعی طیف وسیعی از خدمات هوش مصنوعی شامل توسعه دستیارهای هوشمند، تحلیل داده، بهینه‌سازی فرآیندها با AI، و راه‌حل‌های سفارشی‌سازی شده برای کسب‌وکارها را ارائه می‌دهیم.",
    },
    {
      question: "فانوس هوش مصنوعی چه تفاوتی با سایر شرکت‌ها دارد؟",
      answer: "تمرکز ما بر روی راه‌حل‌های نوآورانه و سفارشی‌سازی شده با تکیه بر آخرین دستاوردهای هوش مصنوعی است. تیم متخصص ما با درک عمیق از نیازهای شما، بهترین و کارآمدترین راهکارها را ارائه می‌دهد.",
    },
    {
      question: "آیا می‌توانم برای مشاوره اولیه رایگان درخواست دهم؟",
      answer: "بله، شما می‌توانید از طریق بخش تماس با ما، یک جلسه مشاوره اولیه رایگان با کارشناسان ما رزرو کنید تا نیازها و چالش‌های خود را مطرح نمایید.",
    },
    {
      question: "پشتیبانی فنی شما چگونه است؟",
      answer: "ما پشتیبانی جامع و مستمری برای تمامی پروژه‌های خود ارائه می‌دهیم. تیم پشتیبانی ما آماده پاسخگویی به سوالات و رفع هرگونه مشکل احتمالی در سریع‌ترین زمان ممکن است.",
    },
  ];

  return (
    <section id="faq" className="section-spacing relative overflow-hidden bg-gradient-cream" ref={ref}>
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-gray-200/20 to-gray-300/15 rounded-full blur-3xl opacity-10"
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
          className="absolute bottom-1/4 right-1/4 w-52 h-52 bg-gradient-to-tr from-purple-200/20 to-purple-300/15 rounded-full blur-3xl opacity-5"
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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 flex justify-center">
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
              <Lantern glowColor="amber" size="md" animate={isInView} />
            </motion.div>
          </div>
          <h2 className="text-heading text-gray-800 mb-6">
            سوالات متداول
          </h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            پاسخ به پرتکرارترین سوالات شما درباره فانوس هوش مصنوعی
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="border-b border-gray-200/50 card-professional overflow-hidden">
                  <AccordionTrigger className="p-6 text-lg font-semibold text-gray-800 hover:no-underline data-[state=open]:text-purple-600 transition-colors duration-300">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};