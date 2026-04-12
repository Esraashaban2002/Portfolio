import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import '../assets/css/Testimonials.css'
const Testimonials = ()=>{
      const { language } = useTheme();
//       const testimonials = [
//   {
//     id: 1,
//     name: language === 'ar' ? 'إسراء' : 'Esraa',
//     role: language === 'ar' ? 'عميل' : 'Client',
//     feedback: language === 'ar'
//       ? 'التعامل كان ممتاز جدًا والتسليم في الوقت المحدد 👌'
//       : 'Great experience and on-time delivery 👌',
//     image: 'https://i.pravatar.cc/100?img=1'
//   },
// ];
    return(
        <section id="testimonials" className="section projects-section">
      <div className="container">
        <h1>{language === 'ar' ? 'آراء العملاء' : 'Testimonials'}</h1>
        
         <div className="no-projects">
            <i className="fas fa-folder-open"></i>
            <p>
              {language === 'ar' 
                ? '!قريباً'
                : 'Coming Soon!'}
            </p>
          </div>

          {/* <div className="row g-4 mx-auto">
  {testimonials.map((item) => (
    <div key={item.id} className="col-md-6 col-lg-4">
      <div className="testimonial-card">

        <div className="testimonial-header">
          <img src={item.image} alt={item.name} />
          <div>
            <h4>{item.name}</h4>
            <span>{item.role}</span>
          </div>
        </div>

        <p className="testimonial-text">
          "{item.feedback}"
        </p>

        <div className="stars">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>

      </div>
    </div>
  ))}
</div> */}
          </div>
          </section>
    )
}
export default Testimonials