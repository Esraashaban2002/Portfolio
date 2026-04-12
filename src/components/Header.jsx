import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import logo from "../assets/images/logoP.png";
import "../assets/css/header.css";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDarkMode, language, toggleTheme, toggleLanguage } = useTheme();

  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "home", nameAr: "الرئيسية", path: "/" },
    { name: "about", nameAr: "عنّي", path: "/about" },
    { name: "education", nameAr: "التعليم", path: "/education" },
    { name: "services", nameAr: "الخدمات", path: "/services" },
    { name: "skills", nameAr: "المهارات", path: "/skills" },
    { name: "experience", nameAr: "الخبرات", path: "/experience" },
    { name: "projects", nameAr: "المشاريع", path: "/projects" },
    { name: "achievements", nameAr: "الإنجازات", path: "/achievements" },
    { name: "testimonials", nameAr: "التوصيات", path: "/testimonials" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // عشان الهيدر
      const top =
        element.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleNavigation = (sectionName) => {
    if (location.pathname === "/") {
      scrollToSection(sectionName);
    } else {
      navigate("/", { state: { scrollTo: sectionName } });
    }
    setActiveSection(sectionName);
  };

  const handleConnectClick = () => {
    handleNavigation("connect");
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
    setActiveSection("home");
  };

  // 🔥 مراقبة السكشن أثناء السكرول
  useEffect(() => {
    const sections = navItems.map((item) =>
      document.getElementById(item.name)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header className="header bg-dark">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">

          {/* Logo */}
          <div className="logo" onClick={handleLogoClick}>
            <img src={logo} alt="Logo" className="img-logo" />
          </div>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="nav-menu navbar-nav ms-auto">

              {navItems.map((item) => (
                <li key={item.name} className="nav-item">
                  <a
                    href={`#${item.name}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.name);
                    }}
                    className={`nav-link ${
                      activeSection === item.name ? "active" : ""
                    }`}
                  >
                    {language === "ar"
                      ? item.nameAr
                      : item.name.charAt(0).toUpperCase() +
                        item.name.slice(1)}
                  </a>
                </li>
              ))}

              <li className="nav-item me-2">
                <button
                  onClick={handleConnectClick}
                  className={`connect-btn nav-link ${
                    activeSection === "connect" ? "active" : ""
                  }`}
                >
                  {language === "ar" ? "تواصل معي" : "Connect Me"}
                </button>
              </li>

            </ul>

            {/* Toggles */}
            <div className="theme-language-toggles ms-lg-3 mt-2 mt-lg-0">
              <button onClick={toggleTheme} className="theme-toggle me-2">
                {isDarkMode ? "☀️" : "🌙"}
              </button>
              <button onClick={toggleLanguage} className="language-toggle">
                {language === "en" ? "عربي" : "EN"}
              </button>
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;