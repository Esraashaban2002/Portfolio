import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../assets/css/Achievements.css';
import itidaLogo from '../assets/images/iditi.png';

const Achievements = () => {
  const { language } = useTheme();

  const achievements = [
    {
      id: 1,
      title: language === 'ar' ? 'شهادة تقدير - ITIDA | TIEC' : 'Certificate of Acknowledgement - ITIDA | TIEC',
      organization: 'ITIDA | TIEC',
      year: '2025',
      description: language === 'ar'
        ? 'تم تكريمي للمشاركة المتميزة في برنامج تدريب وتطوير المهارات التقنية'
        : 'Honored for outstanding participation in technical skills training and development program',
      icon: 'fas fa-award',
      color: '#FF4D6D',
      image: itidaLogo, // You can add an image if you have one
      certificateLink: 'https://drive.google.com/file/d/1oF6vAm5it-xQXsKV8rNsP58RHgYus4Tk/view?usp=sharing', // Add link to certificate if available
      badge: language === 'ar' ? 'تميز' : 'Excellence'
    },
  ];

  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="section-title">
              {language === 'ar' ? 'الإنجازات' : 'Achievements'}
            </h1>
          </div>
        </div>


        {/* Main Achievements */}
        <div className="row g-4">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="col-lg-6">
              <div className="achievement-card">
                {/* Achievement Badge */}
                <div className="achievement-badge" style={{ backgroundColor: achievement.color }}>
                  {achievement.badge}
                </div>

                {/* Icon */}
                {/* <div className="achievement-icon-wrapper" style={{ backgroundColor: `${achievement.color}15` }}>
                  <i className={achievement.icon} style={{ color: achievement.color }}></i>
                </div> */}
                <div className="university-header mb-4">
                  <div className="university-logo-wrapper bg-white rounded-circle p-2 shadow-sm">
                    <img 
                      src={achievement.image} 
                      alt={achievement.organization}
                      className="university-logo rounded-circle"
                      style={{ width: '100px', height: '60px', objectFit: 'contain' }}
                    />
                  </div>
                
                </div>


                {/* Content */}
                <div className="achievement-content">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  
                  <div className="achievement-meta">
                    <span className="organization">
                      <i className="fas fa-building"></i>
                      {achievement.organization}
                    </span>
                    <span className="year">
                      <i className="fas fa-calendar-alt"></i>
                      {achievement.year}
                    </span>
                  </div>

                  <p className="achievement-description">
                    {achievement.description}
                  </p>

                  <div className="achievement-actions">
                   <a 
                        href={achievement.certificateLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="certificate-link">
                          <i className="fas fa-share-alt"></i>
                      </a>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="achievement-decoration">
                  <div className="decoration-dot"></div>
                  <div className="decoration-line"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;