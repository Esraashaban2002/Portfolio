import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Testimonials = ()=>{
      const { language } = useTheme();
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
          </div>
          </section>
    )
}
export default Testimonials