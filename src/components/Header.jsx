import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import logo from '../assets/images/logoP.png';
import '../assets/css/header.css'
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDarkMode, language, toggleTheme, toggleLanguage } = useTheme();

  const navItems = [
    { name: 'home', nameAr: 'الرئيسية', path: '/' },
    { name: 'about', nameAr: 'عنّي', path: '/about' },
    { name: 'education', nameAr: 'التعليم', path: '/education' },
    { name: 'services', nameAr: 'الخدمات', path: '/services' },
    { name: 'skills', nameAr: 'المهارات', path: '/skills' },
    { name: 'projects', nameAr: 'المشاريع', path: '/projects' },
    { name: 'testimonials', nameAr: 'التوصيات', path: '/testimonials' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (path, sectionName) => {
    if (location.pathname === '/') {
      scrollToSection(sectionName.toLowerCase());
    } else {
      navigate('/', { state: { scrollTo: sectionName.toLowerCase() } });
    }
  };

  const handleConnectClick = () => {
    if (location.pathname === '/') {
      scrollToSection('connect');
    } else {
      navigate('/', { state: { scrollTo: 'connect' } });
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <header className="header bg-dark">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {/* Logo */}
          <div className="logo" onClick={handleLogoClick}>
            <img src={logo} alt="Logo" className="img-logo" />
          </div>

          {/* Bootstrap Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="nav-menu navbar-nav ms-auto">
              {navItems.map((item) => (
                <li key={item.name} className="nav-item">
                  <a
                    onClick={() => handleNavigation(item.path, item.name)}
                    className={`nav-link ${location.pathname === '/' &&
                      document.getElementById(item.name)
                      ? 'active'
                      : ''}`}
                  >
                    {language === 'ar'
                      ? item.nameAr
                      : item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </a>
                </li>
              ))}
                <li className="nav-item  me-2">
                <a onClick={handleConnectClick} className="connect-btn nav-link">
                  {language === 'ar' ? 'تواصل معي' : 'Connect Me'}
                </a>
              </li>
            </ul>

            {/* Theme & Language toggles */}
            <div className="theme-language-toggles ms-lg-3 mt-2 mt-lg-0">
              <button onClick={toggleTheme} className="theme-toggle me-2">
                {isDarkMode ? '☀️' : '🌙'}
              </button>
              <button onClick={toggleLanguage} className="language-toggle">
                {language === 'en' ? 'عربي' : 'EN'}
              </button>

            </div>
            
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;