import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../assets/css/Testimonials.css';

// Import images (add your testimonial images to assets/images/)


const Testimonials = () => {
  const { language } = useTheme();

  const testimonials = [
    {
      id: 1,
      name: language === 'ar' ? " منه عمر" : "Menna Omar",
      role: "Team Leader Flutter Developer",
      feedback: language === 'ar' 
        ? ""
        : "",
      rating: 5,
      image : "#",
      performanceMetric: language === 'ar' ? "" : "" ,
      metricIcon: "fas fa-chart-line"
    }
  ];

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

         <div className="row g-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="col-md-6 col-lg-4">
              <div className="testimonial-card">
                {/* Stars Rating */}
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <i key={i + testimonial.rating} className="fas fa-star star-inactive"></i>
                  ))}
                </div>

                {/* Feedback Text */}
                <p className="testimonial-text">
                  "{testimonial.feedback}"
                </p>

                {/* Performance Metric */}
                <div className="performance-metric">
                  <i className={testimonial.metricIcon}></i>
                  <span>{testimonial.performanceMetric}</span>
                </div>

                {/* User Info */}
                <div className="testimonial-footer">
                  <div className="user-info">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="user-avatar"
                    />
                    <div className="user-details">
                      <h4 className="user-name">{testimonial.name}</h4>
                      <p className="user-role">{testimonial.role}</p>
                    </div>
                  </div>
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