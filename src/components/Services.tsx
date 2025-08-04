import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Lantern } from './Lantern';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ArrowRight, Scale, LineChart, Sparkles, Heart, GraduationCap } from 'lucide-react';

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const products = [
    {
      title: 'پلتفرم یادگیری سازمانی هوشمند',
      description: 'این سامانه با بهره‌گیری از معماری دانش‌محور مبتنی بر هوش مصنوعی، رویکرد سنتی آموزش را به مدل یادگیری مسئله‌محور و مبتنی بر تقاضا تبدیل می‌کند.',
      longDescription: 'پلتفرم یادگیری سازمانی هوشمند فانوس با هدف ارتقاء کارایی و اثربخشی فرآیند یادگیری در محیط‌های کاری طراحی شده است. این سامانه با بهره‌گیری از معماری دانش‌محور مبتنی بر هوش مصنوعی و تحلیل همزمان داده‌های صریح و ضمنی، رویکرد سنتی آموزش معلم‌محور را به مدل یادگیری مسئله‌محور مبتنی بر تقاضا تبدیل می‌کند.',
      category: 'سازمانی',
      icon: GraduationCap,
      iconBg: 'from-purple-500 to-purple-600',
      status: 'در حال توسعه',
      features: ['تسریع چرخه یادگیری', 'افزایش چابکی سازمانی', 'بهینه‌سازی عملکرد'],
    },
    {
      title: 'کپنوس: دستیار معاملاتی هوشمند',
      description: 'کپنوس یک دستیار هوش مصنوعی پیشرفته است که با اتصال لحظه‌ای به داده‌های بورس و فرابورس ایران و تحلیل اطلاعیه‌های سامانه کدال، به معامله‌گران حرفه‌ای امکان می‌دهد تا پاسخ دقیق پرسش‌های خود را دریافت کنند.',
      longDescription: 'کپنوس یک دستیار هوش مصنوعی پیشرفته است که با اتصال لحظه‌ای به داده‌های بورس و فرابورس ایران و تحلیل اطلاعیه‌های سامانه کدال، به معامله‌گران حرفه‌ای امکان می‌دهد تا در کوتاه‌ترین زمان، پاسخ دقیق پرسش‌های خود درباره تابلو معاملات، نمادها، وضعیت بنیادی شرکت‌ها، و اخبار بااهمیت را دریافت کنند.',
      category: 'بازار سرمایه',
      icon: LineChart,
      iconBg: 'from-green-500 to-green-600',
      status: 'در حال توسعه',
      features: ['تحلیل تکنیکال', 'تحلیل بنیادی', 'تابلوخوانی'],
    },
    {
      title: 'دادنوس: دستیار حقوقی هوشمند',
      description: 'دادنوس یک دستیار هوش مصنوعی تخصصی در حوزه حقوق ایران است که با بهره‌گیری از یادگیری ماشین و مدل‌های زبانی بزرگ (LLMs)، وکلا و مشاوران حقوقی را در نگارش و ارزیابی انواع لوایح، دادخواست‌ها و قراردادها یاری می‌دهد.',
      longDescription: 'دادنوس یک دستیار هوش مصنوعی تخصصی در حوزه حقوق ایران است که برای اولین بار در کشور با بهره‌گیری از یادگیری ماشین و مدل‌های زبانی بزرگ (LLMs)، بر پایه مجموعه‌ای جامع از قوانین، مقررات، نظریات مشورتی، و آرای وحدت رویه، به گونه‌ای طراحی شده است که وکلا و مشاوران حقوقی را در نگارش و ارزیابی انواع لوایح، دادخواست‌ها و قراردادها یاری ‌دهد.',
      category: 'حقوقی',
      icon: Scale,
      iconBg: 'from-blue-500 to-blue-600',
      status: 'در حال توسعه',
      features: ['درک متنی عمیق', 'پردازش زبان فارسی حقوقی', 'پاسخ‌گویی دقیق و سریع'],
    },
    {
      title: 'هلثا: دستیار سلامت هوشمند',
      description: 'هلثا، یک همراه هوشمند ۲۴/۷ است که در هر لحظه پاسخ‌گوی دغدغه‌های سلامت شماست و در مسیر رسیدن به توازن جسمی و روانی شما را همراهی می‌کند.',
      longDescription: 'هلثا، دستیار سلامت هوش مصنوعی فانوس، با هدف ارتقای کیفیت زندگی افراد توسعه یافته است. این دستیار هوشمند با ارائه راهکارهای عمومی در حوزه‌های تغذیه، فعالیت بدنی، یوگا، روان‌شناسی، روابط انسانی، فرزندپروری، سلامت دوران بارداری، دیابت، قلب و عروق و سایر ابعاد زیست سالم، به کاربران کمک می‌کند تا تصمیمات آگاهانه‌تری در مورد سبک زندگی خود بگیرند.',
      category: 'سبک زندگی',
      icon: Heart,
      iconBg: 'from-red-500 to-red-600',
      status: 'در حال توسعه',
      features: ['تغذیه', 'فعالیت بدنی', 'روان‌شناسی'],
    },
    {
      title: 'شایلی: دستیار هوش مصنوعی پوست و مو',
      description: 'شایلی، با دریافت اطلاعات دقیق از وضعیت پوست و موی شما، شرایط آب‌وهوایی، و ویژگی‌های ژنتیکی خاص ایرانی‌ها را در نظر می‌گیرد و روتین‌های مراقبتی متناسب با سبک زندگی‌تان ارائه می‌دهد.',
      longDescription: 'شایلی، دستیار تخصصی پوست و مو با تکیه بر هوش مصنوعی و الگوریتم‌های تحلیل داده پیشرفته، اولین راهکار شخصی‌سازی‌شده در ایران است که با مشاوره روزآمد و مقرون‌به‌صرفه، زنان ایرانی را در رسیدن به پوستی سالم، شفاف و مویی زیبا همراهی می‌کند.',
      category: 'زیبایی و سلامت',
      icon: Sparkles,
      iconBg: 'from-pink-500 to-pink-600',
      status: 'در حال توسعه',
      features: ['مشاوره روزآمد و مقرون‌به‌صرفه', 'شخصی‌سازی‌شده', 'پایش مداوم وضعیت فردی'],
    }
  ];

  const statusColors: { [key: string]: string } = {
    'در حال توسعه': 'bg-purple-500'
  };

  return (
    <section id="services" className="section-spacing relative overflow-hidden bg-gradient-cream" ref={ref}>
      {/* Minimal background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-pattern-dots"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-8 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 sm:mb-8 flex justify-center">
            <Lantern glowColor="amber" size="md" animate={isInView} />
          </div>
          <h2 className="text-heading text-gray-800 mb-4">
            محصولات ما
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-purple-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-body text-gray-600 max-w-2xl mx-auto px-2">
            مروری بر دستیارهای هوشمند فانوس برای حوزه‌های تخصصی
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence>
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { 
                  opacity: 1, 
                  y: 0,
                  scale: hoveredCard === index ? 1.01 : 1,
                } : {}}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.1 + index * 0.1,
                }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative"
              >
                <Card className="h-full flex flex-col bg-white shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border-0">
                  <CardContent className="p-6 sm:p-8 flex flex-col flex-grow relative">
                    {/* Icon Header */}
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br opacity-10 pointer-events-none"
                         style={{ backgroundImage: `linear-gradient(to bottom right, ${product.iconBg.split(' ')[1]}, transparent)` }}>
                    </div>
                    
                    {/* Icon Circle */}
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.iconBg} p-4 shadow-lg transform -rotate-6 transition-transform duration-300 group-hover:rotate-0`}>
                        <product.icon className="w-full h-full text-white" />
                      </div>
                      <div className="absolute inset-0 bg-white/20 rounded-2xl blur-2xl"></div>
                    </div>

                    {/* Content */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 leading-tight">
                          {product.title}
                        </h3>
                        <div className="flex items-center gap-3 mb-4">
                          <Badge className={`${statusColors[product.status]} text-white text-sm px-3 py-1`}>
                            {product.status}
                          </Badge>
                          <span className="text-sm text-gray-500">{product.category}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-purple-600 transition-colors duration-300" />
                    </div>

                    {/* Description */}
                    <div className="relative">
                      <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
                        {product.description}
                      </p>
                      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                    </div>

                    {/* Features */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {product.features.map((feature, i) => (
                        <Badge 
                          key={i} 
                          variant="outline"
                          className="border-2 border-gray-200 text-gray-700 bg-white hover:bg-gray-50 transition-colors text-sm px-4 py-1 rounded-full"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    {/* Button */}
                    <Button 
                      variant="outline"
                      className="mt-auto w-full bg-gradient-to-r from-gray-50 to-white border-2 border-gray-200 text-gray-800 hover:text-purple-700 hover:border-purple-200 hover:from-purple-50 hover:to-white transition-all duration-300 text-base sm:text-lg py-3 sm:py-4 rounded-xl shadow-sm hover:shadow-md"
                    >
                      <span className="flex items-center justify-center gap-2 font-semibold">
                        مشاهده جزئیات
                        <ChevronLeft className="w-5 h-5" />
                      </span>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
