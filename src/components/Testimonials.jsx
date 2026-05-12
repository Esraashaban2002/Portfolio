import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../assets/css/Testimonials.css';

const Testimonials = () => {
  const { language } = useTheme();

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        {/* Section Title */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="section-title">
              {language === 'ar' ? 'آراء العملاء' : 'Testimonials'}
            </h1>
            <p className="section-subtitle">
              {language === 'ar'
                ? 'ما يقوله العملاء عن تجربتهم في العمل معي'
                : 'What clients say about their experience working with me'}
            </p>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="testimonial-card coming-soon-card">
              {/* Animated Stars */}
              <div className="stars-animated">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star star-glow"></i>
                ))}
              </div>

              {/* Coming Soon Badge */}
              <div className="coming-soon-badge">
                <div className="badge-icon">
                  <i className="fas fa-hourglass-half"></i>
                </div>
                <span className="badge-text">
                  {language === 'ar' ? 'قريباً' : 'Coming Soon'}
                </span>
              </div>

              {/* Main Message */}
              <div className="coming-soon-content">
                <i className="fas fa-comment-dots message-icon"></i>
                <h3 className="message-title">
                  {language === 'ar' ? 'تقييمات العملاء قادمة' : 'Client Testimonials Coming'}
                </h3>
                <p className="message-text">
                  {language === 'ar'
                    ? 'قريباً ستجد هنا آراء العملاء عن تجربتهم في العمل معي. أنا أتطلع لمشاركة تجارب العملاء السعداء معكم!'
                    : 'Soon you will find client testimonials about their experience working with me. I look forward to sharing happy client experiences with you!'}
                </p>
              </div>

              {/* Animated Dots */}
              <div className="animated-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;