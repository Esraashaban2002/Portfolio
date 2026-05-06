import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import logo from '../assets/images/LogoAbout.png';
import '../assets/css/about.css';

const About = () => {
  const { language } = useTheme();

  // Personal information based on CV
  const personalInfo = {
    name: "Esraa Shaban",
    title: "Full Stack Web Developer",
    location: "Giza, Egypt",
    email: "esraashaban231@gmail.com",
    phone: "01143274346",
    experience: "3+ years",
    projects: "4+ projects",
    graduation: "2025",
    university: "Helwan University",
    gpa: "3.17/4.0"
  };

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="section-title">
              {language === 'ar' ? 'من أنا' : 'About Me'}
            </h1>
          </div>
        </div>

        <div className="row align-items-center">
          {/* Left side - Main description */}
          <div className="col-lg-7 mb-4 mb-lg-0">
            <div className="about-description about-main">
              <div className="lead">
                <h2 className="about-greeting ">
                  {language === 'ar' ? 'شغوفة بالأداء' : "Driven by Passion & Performance"}
                </h2>
              </div>
              <div>
               <p>
  {language === 'ar'
    ? <>
    أنا إسراء، مطورة ويب Full-Stack  شغوفة بالبرمجة منذ أكثر من 
    <span className="ms-2 fw-bold" style={{ color: '#FF4D6D' }}> 5+</span>{' '}
        سنوات. خلال هذه الرحلة طورت مهاراتي في بناء تطبيقات ويب حديثة وقابلة للتوسع باستخدام React.js وNode.js، مع التركيز على الأداء العالي وتجربة المستخدم المميزة.
    </>
    : (
      <>
        I am Esraa, a passionate Full-Stack Web Developer with over 
        <span className="ms-2 fw-bold" style={{ color: '#FF4D6D' }}>
          5+ 
        </span>{' '}
        years of experience in programming. During this journey, I have developed strong skills in building modern, scalable web applications using React.js and Node.js, with a focus on high performance and exceptional user experience.
      </>
    )
  }
</p>
                <p>
                  {language === 'ar'
                    ? 'أعمل على تطوير تطبيقات ويب متكاملة ومساعدة الشركات الناشئة فى تحويل أفكارهم إلى منتجات رقمية احترافية وسريعة ، مع الحرص على بناء حلول برمجية نظيفة ومنظمة وقابلة للصيانة.'
                    : "I work on developing complete web applications and helping startups transform their ideas into professional, fast, and reliable digital products, while ensuring clean, organized, and maintainable code."}
                </p>

                <p>
                  {language === 'ar'
                    ? 'لدي خبرة عملية في تطوير تطبيقات باستخدام تقنيات حديثة مثل React.js وNode.js وExpress وMongoDB وJavaScript وHTML وCSS وREST APIs وGit، وأسعى دائمًا لاستخدام أفضل الممارسات في تطوير البرمجيات لبناء تطبيقات قوية وفعالة.'
                    : "I have hands-on experience with modern technologies such as React.js, Node.js, Express, MongoDB, JavaScript, HTML, CSS, REST APIs, and Git, and I always strive to follow best practices in software development to build strong and efficient applications."}
                </p>
                <p>
                  {language === 'ar'
                    ? 'أؤمن أن البرمجيات الناجحة ليست فقط التي تعمل بشكل صحيح، بل تلك التي تحل مشكلات حقيقية وتوفر تجربة استخدام مميزة وتضيف قيمة حقيقية للمستخدمين والأعمال.'
                    : "I believe that successful software is not just about working correctly, but also about solving real problems, delivering an excellent user experience, and providing true value to users and businesses."}
                </p>
              </div>


            </div>
          </div>

          {/* Right side - Personal Info Cards */}
          <div className="col-lg-5">
            <div className="row justify-content-md-center">
              <img src={logo} alt="Logo" className="Logo" />
            </div>

            {/* Stats Cards */}
            <div className="row stats-row mt-4">
              <div className="col-6  mx-auto">
                <div className="stat-card">
                  <div className="stat-number">{personalInfo.projects}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;