import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../assets/css/Testimonials.css';

const Testimonials = () => {
  const { language } = useTheme();

  const testimonials = [
    {
      id: 1,
      name: language === 'ar' ? "منة عمر" : "Menna Omar",
      role: language === 'ar' ? "مدربة" : "Trainer",
      date: "12 May 2026, 6:41 PM",
      feedback: language === 'ar'
        ? "هي منظمة للغاية وتدير وقتها بفعالية، مما يسمح لها بإكمال المهام بكفاءة دون المساس بالجودة."
        : "She is highly organized and manages her time effectively, allowing her to complete tasks efficiently without compromising quality.",
      rating: 5,
      deliveryMetric: language === 'ar' ? "تسليم قبل الموعد" : "Early Delivery",
      performanceMetric: "40%",
      initials: language === 'ar' ? "م.ع" : "M.O",
      linkedin: "https://www.linkedin.com/in/mennaomar/"
    }
  ];

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        {/* Section Title */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h1 className="section-title">
              {language === 'ar' ? 'آراء العملاء' : 'Testimonials'}
            </h1>
            <p className="section-subtitle">
              {language === 'ar'
                ? 'بناء الثقة يبدأ من عرض نتائج حقيقية وتجارب ناجحة مع عملاء سابقين.'
                : 'Building trust starts with showcasing real results and successful experiences with past clients.'}
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="row g-4 ">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="col-lg-4 col-md-6 col-12">
              <div className="testimonial-card">
                {/* Stars */}
                <div className="testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>

                {/* Feedback Text */}
                <p className="card-feedback">"{testimonial.feedback}"</p>

                {/* Date */}
                <div className="testimonial-date">
                  <i className="fas fa-calendar-alt"></i>
                  <span>
                    {language === 'ar' 
                      ? '12 مايو 2026، 6:41 مساءً'
                      : 'May 12, 2026, 6:41 PM'}
                  </span>
                </div>

                {/* Metrics */}
                <div className="card-metrics">
                  <span className="metric-badge delivery">
                    <i className="fas fa-check-circle"></i>
                    {testimonial.deliveryMetric}
                  </span>
                </div>

                {/* Author Info */}
                <div className="card-author">
                  <div className="author-initials">{testimonial.initials}</div>
                  <div className="author-info">
                    <h5 className="author-name">{testimonial.name}</h5>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                  <a 
                    href={testimonial.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="linkedin-link"
                    aria-label="LinkedIn Profile"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;