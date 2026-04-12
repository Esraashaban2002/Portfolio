import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../assets/css/Education.css';

import universityLogo from '../assets/images/helwan-university-logo.png';
import webMastersLogo from '../assets/images/web masters.jpg';

const Education = () => {
   const { language } = useTheme();


  const educationData = {
    degree: language === 'ar' ? 'بكالوريوس علوم الحاسب' : "Bachelor's Degree in Computer Science",
    faculty:
      language === 'ar'
        ? 'كلية الحاسبات والذكاء الاصطناعي - جامعة حلوان'
        : 'Faculty of Computers and Artificial Intelligence - Helwan University',
    period: language === 'ar' ? '٢٠٢١ — ٢٠٢٥' : '2021 — 2025',
    gpa: '3.17/4.0',
    grade: language === 'ar' ? 'جيد جداً' : 'Very Good',
    graduationProject: 'XR Education App',
    graduationProjectGPA: '(A+)',
    graduationYear: '2025',
    logo: universityLogo,
  };

  const certificateData = {
    title:
      language === 'ar'
        ? 'شهادة إتمام برنامج تدريب Back-End'
        : 'Certificate of Completion - Back-End Development Training',
    organization: 'Web Masters',
    period: language === 'ar' ? 'يوليو — أغسطس ٢٠٢٥' : 'July — August 2025',
    duration: language === 'ar' ? 'شهر واحد' : 'One month',
    description:
      language === 'ar'
        ? 'إتمام برنامج تدريب Back-End بنجاح، مع التركيز على التطبيق العملي وتنفيذ المشاريع باستخدام تقنيات حقيقية.'
        : 'Successfully completed Back-End training program focusing on practical skills, real-world projects, and backend technologies.',
    instructor: 'Eng. Ahmed Ewida',
    instructorRole: language === 'ar' ? 'منسق تقني' : 'Technical Coordinator',
    logo: webMastersLogo,
    liveLink: 'https://drive.google.com/file/d/1oDG_U5oXu9urQ3fwh2Gghy1p-lIZLSQ-/view?usp=sharing',
  };

  return (
    <section id="education" className="section education-section py-5">
      <div className="container">
        {/* Section Title */}
        <div className="row mb-5 text-center">
          <div className="col-12">
            <h1 className="section-title">
              {language === 'ar' ? 'التعليم والشهادات' : 'Education & Certificates'}
            </h1>
          </div>
        </div>

        {/* ROW: Education + Certificates */}
        <div className="row g-4 justify-content-between">

          {/* ================= Education ================= */}
          <div className="col-lg-5">
            <div className="col-12">
            <h1 className="section-title">
              {language === 'ar' ? 'التعليم' : 'Education'}
            </h1>
          </div>
            <div className="education-card">
              <div className="education-content p-4">

                {/* Logo */}
                <div className="mb-4">
                  <div className="bg-white rounded-circle p-2 shadow-sm d-inline-block">
                    <img
                      src={educationData.logo}
                      alt="university"
                      className="rounded-circle"
                      style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                    />
                  </div>
                {/* Degree */}
                <h4 className="fw-bold mb-3">{educationData.degree}</h4>
                </div>


                {/* Faculty */}
                <p className="text-muted mb-3">{educationData.faculty}</p>

                {/* Graduation Project */}
                <div className="mb-3">
                  <span className="text-muted small">
                    {language === 'ar' ? 'مشروع التخرج:' : 'Graduation Project:'}
                  </span>
                  <span className="ms-2 fw-medium">
                    {educationData.graduationProject}
                  </span>
                  <span className="ms-2 fw-bold" style={{color:'#FF4D6D'}}>
                    {educationData.graduationProjectGPA}
                  </span>
                </div>

                {/* Details */}
                <div className="bg-light p-3 rounded-3 d-flex justify-content-between flex-wrap">

                  <div>
                    <span className="text-muted small">
                      {language === 'ar' ? 'المعدل:' : 'GPA:'}
                    </span>
                    <span className="ms-2 fw-medium">
                      {educationData.gpa} ({educationData.grade})
                    </span>
                  </div>

                  <div>
                    <span className="text-muted small">
                      {language === 'ar' ? 'سنة التخرج:' : 'Graduated:'}
                    </span>
                    <span className="ms-2 fw-medium">
                      {educationData.graduationYear}
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </div>

            {/* ===== Certificates ===== */}
          <div className="col-lg-5">
            <div className="col-12">
            <h1 className="section-title">
              {language === 'ar' ? 'الشهادات' : 'Certificates'}
            </h1>
          </div>

            <div className="education-card p-4">

              {/* Top */}
              <div className="d-flex justify-content-between align-items-center">

                <div className="d-flex align-items-center gap-2">
                  <img
                    src={certificateData.logo}
                    alt="logo"
                    style={{ width: '50px', height: '50px' }}
                  />
                  <span>{certificateData.organization}</span>
                </div>

                {/* Icon */}
              <div className="project-links">
                    <a 
                      href={certificateData.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link live"
                      title={language === 'ar' ? 'معاينة مباشرة' : 'Live Preview'}
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
              </div>

              <h4 className="mt-3">{certificateData.title}</h4>

              <p className="text-muted">
                {certificateData.period} • {certificateData.duration}
              </p>

              <p>{certificateData.description}</p>

              <p>
                {certificateData.instructor} ({certificateData.instructorRole})
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;