import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../assets/css/Education.css';

// Import university logo (add your logo to assets/images/)
import universityLogo from '../assets/images/helwan-university-logo.png'; // You'll need to add this image

const Education = () => {
  const { language } = useTheme();

  // Education data from CV
  const educationData = {
    degree: language === 'ar' ? 'بكالوريوس علوم الحاسب' : "Bachelor's Degree in Computer Science",
    faculty: language === 'ar' ? ' كلية الحاسبات والذكاء الاصطناعي جامعة حلوان ' : 'Faculty of Computers and Artificial Intelligence Helwan University',
    period: language === 'ar' ? '٢٠٢١ — ٢٠٢٥' : '2021 — 2025',
    gpa: '3.17/4.0',
    grade: language === 'ar' ? 'جيد جداً' : 'Very Good',
    graduationProject: 'XR Education App',
    graduationYear: '2025',
    logo: universityLogo
  };

  // Certifications data from CV
  const certifications = [
    {
      id: 1,
      title: language === 'ar' ? 'دبلومة Back-end (.NET Core)' : 'Back-end (.NET Core) diploma',
      organization: 'Route Academy',
      year: '2025',
      link: '#',
      icon: 'fas fa-code-branch',
      color: '#512BD4'
    },
    {
      id: 2,
      title: language === 'ar' ? 'تطوير الويب' : 'Web Development',
      organization: 'Sprints',
      year: '2025',
      link: '#',
      icon: 'fas fa-globe',
      color: '#FF4D6D'
    },
    {
      id: 3,
      title: language === 'ar' ? 'اختبار البرمجيات' : 'Software Testing',
      organization: 'Sprints',
      year: '2025',
      link: '#',
      icon: 'fas fa-vial',
      color: '#8B5CF6'
    },
    {
      id: 4,
      title: language === 'ar' ? 'شهادة تقدير - ITIDA' : 'Certificate of Acknowledgement - ITIDA',
      organization: 'ITIDA | TIEC',
      year: '2025',
      link: '#',
      icon: 'fas fa-award',
      color: '#F59E0B'
    }
  ];

  return (
    <section id="education" className="section education-section py-5 ">
      <div className="container">
        {/* Section Title */}
        <div className="row mb-5">
          <div className="col-12">
            <h1 className="section-title position-relative d-inline-block">
              {language === 'ar' ? 'التعليم' : 'Education'}
            </h1>
          </div>
        </div>

        <div className="row g-4 text-center">
          {/* Education Column */}
          <div className="col-lg-5">
            <div className="education-card h-100">

              {/* Card Content */}
              <div className="education-content p-4">
                {/* University Logo and Name */}
                <div className="university-header mb-4">
                  <div className="university-logo-wrapper mx-auto bg-white rounded-circle p-2 shadow-sm">
                    <img 
                      src={educationData.logo} 
                      alt={educationData.university}
                      className="university-logo rounded-circle"
                      style={{ width: '100px', height: '60px', objectFit: 'contain' }}
                    />
                  </div>
                
                </div>

                  <div className="university-info">
                      <h4 className="degree-title fs-5 fw-bold mb-3">
                  {educationData.degree}
                </h4>
                    <p className="faculty-name text-muted mb-0">
                      {educationData.faculty}
                    </p>
                  </div>

              <div className="niversity-info">
                    <div>
                      <span className="text-muted small">Graduation Project:</span>
                      <span className="ms-2 fw-medium">{educationData.graduationProject}</span>
                    </div> 
                   </div>

                {/* Education Details */}
                <div className="education-details bg-light p-3 rounded-3 my-4 d-flex justify-content-between">
                  
                  <div className="detail-item d-flex align-items-center gap-3 mb-2">
                    <div>
                      <span className="text-muted small">GPA:</span>
                      <span className="ms-2 fw-medium">{educationData.gpa} ({educationData.grade})</span>
                    </div>
                  </div>
                  
                  <div className="detail-item d-flex align-items-center gap-3">
                    <div>
                      <span className="text-muted small">Graduated:</span>
                      <span className="ms-2 fw-medium">{educationData.graduationYear}</span>
                    </div> 
                   </div>
                </div>
              </div>
            </div>
          </div>

      
        </div>
      </div>
    </section>
  );
};

export default Education;