import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../assets/css/Footer.css';

const Footer = () => {
  const { language } = useTheme();
  const currentYear = new Date().getFullYear();

  // Your personal data
  const footerData = {
    name: language === 'ar' ? 'إسراء شعبان' : 'Esraa Shaban',
    nameInitials: 'E.S',
    title: language === 'ar' ? 'مطورة Full Stack' : 'Full-Stack Developer',
    titleExtra: language === 'ar' ? 'متخصصة في React & Node.js' : 'React & Node.js Enthusiast',
    description: language === 'ar' 
      ? 'شغوفة ومخلصة في عملي. لقد اكتسبت المهارات والمعرفة اللازمة لتصميم وتطوير تطبيقات ويب سهلة الاستخدام وقابلة للتوسع تجعل مشروعك ناجحاً.'
      : "Passionate and dedicated to my work. I have acquired the skills and knowledge necessary to design and develop user-friendly, scalable web applications that make your project a success.",
    callToAction: language === 'ar'
      ? 'لا تتردد في التواصل معي. أنا دائمًا منفتحة على مناقشة مشاريع جديدة، أفكار إبداعية، أو فرص لتكون جزءًا من رؤيتك.'
      : "Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
    socialLinks: [
      { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/esraashabanabdeljawad/', label: 'LinkedIn' },
      { icon: 'fab fa-github', url: 'https://github.com/Esraashaban2002', label: 'GitHub' },
    ]
  };

  const scrollToSection = (e, url) => {
    e.preventDefault();
    const element = document.querySelector(url);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Top Section with CTA and About */}
        <div className="row g-5 my-auto">
          {/* DON'T BE SHY - CTA Section */}
          <div className="col-lg-4">
            <div className="footer-cta-section">
              <h3 className="cta-heading">
                {language === 'ar' ? 'لا تتردد!' : "DON'T BE SHY!"}
              </h3>
              <p className="cta-description">
                {footerData.callToAction}
              </p>
            </div>
          </div>

        <div className="col-lg-4">
          <div className=" align-items-center gy-3 ">
            <div className="mb-5 footer-social">
                <span className="initials">{footerData.nameInitials}</span>
            </div>

            {/* Center - Social Links */}
            <div className="">
              <div className="footer-social">
                {footerData.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={link.label}
                  >
                    <i className={link.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
      </div>
          {/* WHO AM I - About Section */}
          <div className="col-lg-4">
            <div className="footer-about-section">
              <h3 className="about-heading">
                {language === 'ar' ? 'من أنا؟' : "WHO AM I?"}
              </h3>
              <p className="about-description">
                {language === 'ar' 
                  ? `أنا ${footerData.title} و ${footerData.titleExtra}، ${footerData.description}`
                  : `I'm a ${footerData.title} & ${footerData.titleExtra}, ${footerData.description}`
                }
              </p>
            </div>
          </div>
        </div>

      

        {/* Copyright Bar */}
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="copyright mb-0">
                © {currentYear} {footerData.name}. 
                {language === 'ar' ? ' جميع الحقوق محفوظة' : ' All rights reserved.'}
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="credit mb-0">
                {language === 'ar' ? 'صمم بكل ❤️ بواسطة' : 'Designed with ❤️ by'}{' '}
                <a href="#home" onClick={(e) => scrollToSection(e, '#home')}>
                  {footerData.name}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;