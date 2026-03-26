import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../assets/css/Footer.css';

const Footer = () => {
  const { language } = useTheme();
  const currentYear = new Date().getFullYear();

  // Your personal data
  const footerData = {
    name: language === 'ar' ? 'إسراء شعبان' : 'Esraa Shaban',
    title: language === 'ar' ? 'مطورة Full Stack' : 'Full Stack Developer',
    description: language === 'ar' 
      ? 'مطورة Full Stack متخصصة في بناء تطبيقات ويب قابلة للتوسع باستخدام React.js & Node,js مع كود نظيف وقابل للصيانة.'
      : 'Full Stack Developer focused on building scalable web applications with clean, maintainable code using React.js & Node,js.',
    initials: 'E.S',
    socialLinks: [
      { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/esraashabanabdeljawad/', label: 'LinkedIn' },
      { icon: 'fab fa-github', url: 'https://github.com/Esraashaban2002', label: 'GitHub' },
    ],
    quickLinks: [
      { name: language === 'ar' ? 'الرئيسية' : 'Home', url: '#home' },
      { name: language === 'ar' ? 'من أنا' : 'About', url: '#about' },
      { name: language === 'ar' ? 'المهارات' : 'Skills', url: '#skills' },
      { name: language === 'ar' ? 'المشاريع' : 'Projects', url: '#projects' },
      { name: language === 'ar' ? 'الشهادات' : 'Certifications', url: '#education' },
      { name: language === 'ar' ? 'تواصل معي' : 'Contact', url: '#connect' }
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
        <div className="row g-4">
          {/* Brand Column */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-brand">
              <div className="brand-logo mb-3">
                <span className="logo-initials">{footerData.initials}</span>
              </div>
              <h3 className="brand-name">{footerData.name}</h3>
              <p className="brand-title text-muted mb-3">{footerData.title}</p>
              <p className="brand-description">
                {footerData.description}
              </p>
              
              {/* Social Links */}
              <div className="social-links mt-4">
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

          {/* Quick Links Column */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-links">
              <h4 className="footer-title">
                {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
              </h4>
              <ul className="links-list">
                {footerData.quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      onClick={(e) => scrollToSection(e, link.url)}
                      className="link-item"
                    >
                      <i className="fas fa-chevron-right link-icon"></i>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Column */}
          <div className="col-lg-4">
            <div className="footer-contact">
              <h4 className="footer-title">
                {language === 'ar' ? 'تواصل معي' : 'Contact'}
              </h4>

              {/* Newsletter/CTA */}
              <div className="footer-cta mt-4">
                <p className="cta-text mb-2">
                  {language === 'ar' 
                    ? 'هل لديك مشروع؟ دعنا نعمل معاً'
                    : 'Have a project? Let\'s work together'}
                </p>
                <a href="#connect" className="cta-btn" onClick={(e) => scrollToSection(e, '#connect')}>
                  {language === 'ar' ? 'تواصل معي' : 'Contact Me'}
                  <i className="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
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