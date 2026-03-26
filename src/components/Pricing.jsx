import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Pricing.css';
import { FaCheck, FaTimes, FaArrowLeft } from 'react-icons/fa';

const Pricing = () => {
  const { language } = useTheme();
  const navigate = useNavigate();

  const pricingPlans = [
    {
  id: 1,
  name: language === 'ar' ? 'الخطة الأساسية' : 'Basic Plan',
  price: '$50 - $100',
 description: language === 'ar' 
        ? 'مثالي للمشاريع الصغيرة والبدايات'
        : 'Perfect for small projects and startups',
  features: [
    { name: language === 'ar' ? 'تطوير واجهة Front-End بسيطة' : 'Simple Front-End development', included: true },
    { name: language === 'ar' ? 'صفحة واحدة أو صفحتين' : '1-2 pages', included: true },
    { name: language === 'ar' ? 'تصميم متجاوب (Responsive)' : 'Responsive design', included: true },
    { name: language === 'ar' ? 'تنفيذ مطابق للتصميم (UI/UX)' : 'Pixel-perfect UI implementation', included: true },
    { name: language === 'ar' ? 'ربط أساسي مع API (إن وجد)' : 'Basic API integration (if needed)', included: true },
    { name: language === 'ar' ? 'كود منظم وقابل للتعديل' : 'Clean and maintainable code', included: true },
    
    { name: language === 'ar' ? 'Backend Development' : 'Backend development', included: false },
    { name: language === 'ar' ? 'Database Integration' : 'Database integration', included: false },
    { name: language === 'ar' ? 'Features متقدمة' : 'Advanced features', included: false },
  ],
  color: '#10B981',
  badge: language === 'ar' ? 'للمشاريع الصغيرة' : 'Starter',
  recommended: false
},
    {
  id: 2,
  name: language === 'ar' ? 'الخطة الاحترافية' : 'Professional Plan',
  price: '$120 - $200',
  description: language === 'ar' 
    ? 'مناسبة للمشاريع المتوسطة التي تحتاج نظام متكامل (Front-End + Back-End)'
    : 'Ideal for medium projects requiring a full-stack solution',
  features: [
    { name: language === 'ar' ? 'تطوير Front-End و Back-End متكامل' : 'Full Front-End & Back-End development', included: true },
    { name: language === 'ar' ? 'حتى 5 صفحات' : 'Up to 5 pages', included: true },
    { name: language === 'ar' ? 'تصميم متجاوب بدقة Pixel Perfect' : 'Pixel-perfect responsive design', included: true },
    { name: language === 'ar' ? 'تطوير وربط API كامل' : 'Full API development & integration', included: true },
    { name: language === 'ar' ? 'تكامل قاعدة البيانات' : 'Database integration', included: true },
    { name: language === 'ar' ? 'إدارة البيانات والحالات' : 'State management & data handling', included: true },
    { name: language === 'ar' ? 'تحسين الأداء وسرعة التحميل' : 'Performance optimization', included: true },
    { name: language === 'ar' ? 'كود نظيف وقابل للتطوير' : 'Clean and scalable code', included: true },
    { name: language === 'ar' ? 'دعم فني بعد التسليم (5-7 أيام)' : '5-7 days technical support after delivery', included: true },
    { name: language === 'ar' ? 'تسليم خلال 10-14 يوم' : 'Delivery in 10-14 days', included: true }
  ],
  color: '#FF4D6D',
  badge: language === 'ar' ? 'الأكثر طلباً' : 'Most Popular',
  recommended: true
},
    {
  id: 3,
  name: language === 'ar' ? 'الخطة المخصصة' : 'Enterprise Plan',
  price: 'Custom',
  description: language === 'ar' 
    ? 'مثالية للمشاريع الكبيرة والشركات التي تحتاج تطوير متكامل ومخصص بالكامل'
    : 'Perfect for large projects and enterprises requiring full custom development',
  features: [
    { name: language === 'ar' ? 'تطوير متكامل مخصص بالكامل' : 'Full custom development', included: true },
    { name: language === 'ar' ? 'عدد صفحات غير محدود' : 'Unlimited pages', included: true },
    { name: language === 'ar' ? 'تصميم مخصص بالكامل' : 'Fully custom design', included: true },
    { name: language === 'ar' ? 'تطوير Front-End و Back-End متقدم' : 'Advanced Front-End & Back-End development', included: true },
    { name: language === 'ar' ? 'تكامل قواعد بيانات متقدمة' : 'Advanced database integration', included: true },
    { name: language === 'ar' ? 'تطوير وربط API كامل' : 'Full API development & integration', included: true },
    { name: language === 'ar' ? 'تحسين شامل للأداء والسرعة' : 'Comprehensive performance optimization', included: true },
    { name: language === 'ar' ? 'SEO شامل ومتقدم' : 'Comprehensive SEO', included: true },
    { name: language === 'ar' ? 'دعم فني 24/7' : '24/7 technical support', included: true },
    { name: language === 'ar' ? 'التسليم حسب الجدول الزمني المتفق عليه' : 'Delivery based on agreed timeline', included: true }
  ],
   color: '#8B5CF6',
      badge: language === 'ar' ? 'للمؤسسات' : 'For Enterprises',
      recommended: false
    }
  ]

  const handleBackToServices = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleContactClick = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('connect');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className="pricing-section">
      <div className="container">
        {/* Back Button */}
        <div className="row mb-4">
          <div className="col-12">
            <button className="back-btn" onClick={handleBackToServices}>
              <FaArrowLeft className="me-2" />
              {language === 'ar' ? 'العودة إلى الخدمات' : 'Back to Services'}
            </button>
          </div>
        </div>

        {/* Section Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="pricing-main-title">
              {language === 'ar' ? 'خطط التسعير' : 'Pricing Plans'}
            </h1>
            <p className="pricing-subtitle">
              {language === 'ar'
                ? 'اختر الخطة المناسبة لمشروعك وابدأ رحلتك الرقمية'
                : 'Choose the right plan for your project and start your digital journey'}
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="row g-4">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className="col-lg-4 col-md-6">
              <div className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}>
                {plan.recommended && (
                  <div className="recommended-badge">
                    <i className="fas fa-star"></i>
                    {language === 'ar' ? 'الأفضل اختياراً' : 'Best Choice'}
                  </div>
                )}
                
                <div className="pricing-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price">
                    <span className="price">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                  <p className="plan-description">{plan.description}</p>
                </div>

                <div className="pricing-features">
                  <ul className="features-list">
                    {plan.features.map((feature, index) => (
                      <li key={index} className={feature.included ? 'included' : 'excluded'}>
                        {feature.included ? (
                          <FaCheck className="check-icon" />
                        ) : (
                          <FaTimes className="times-icon" />
                        )}
                        {feature.name}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pricing-footer">
                  <button 
                    className="select-plan-btn"
                    style={{
                      background: `linear-gradient(135deg, ${plan.color}, ${plan.color}cc)`
                    }}
                    onClick={handleContactClick}
                  >
                    {language === 'ar' ? 'اختر الخطة' : 'Select Plan'}
                    <i className="fas fa-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="pricing-info">
              <i className="fas fa-info-circle"></i>
              <p>
                {language === 'ar'
                  ? 'جميع الخطط قابلة للتخصيص حسب احتياجات مشروعك. اتصل بنا للحصول على عرض سعر مخصص.'
                  : 'All plans are customizable based on your project needs. Contact us for a custom quote.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;