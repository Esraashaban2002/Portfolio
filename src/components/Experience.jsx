import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../assets/css/Experience.css';

// Import logos (add your logo images to assets/images/)
import digiliansLogo from '../assets/images/digilians.jpg';
import webMastersLogo from '../assets/images/web masters.jpg';
import sefAcademyLogo from '../assets/images/SEF.jpg';

import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
    FaGitAlt, FaBootstrap,
} from 'react-icons/fa';
import { SiMongodb,
    SiExpress
} from 'react-icons/si';

const Experience = () => {
    const { language } = useTheme();

    const experiences = [
        {
            id: 1,
            company: 'Digilians - الرواد الرقميون',
            companyEn: 'Digilians',
            logo: digiliansLogo,
            position: language === 'ar' ? 'مطور Full Stack' : 'Full Stack Web Developer',
            positionEn: 'Full Stack Web Developer',
            type: language === 'ar' ? 'دوام كامل' : 'Full-time',
            period: 'Feb 2026 - Present',
            duration: language === 'ar' ? '3 شهور' : '3 mos',
            location: 'Cairo, Egypt',
            locationType: 'On-site',
            technologies: [
                {
                    name: 'React.js',
                    icon: <FaReact />,
                    color: '#61DAFB',
                },
                {
                    name: 'Node.js',
                    icon: <FaNodeJs />,
                    color: '#68A063',
                },
                {
                    name: 'Express.js',
                    icon: <SiExpress />,
                    color: '#000000',
                },
                {
                    name: 'MongoDB',
                    icon: <SiMongodb />,
                    color: '#47A248',
                },
                {
                    name: 'Git',
                    icon: <FaGitAlt />,
                    color: '#F05032',
                }
            ],
            challenge: language === 'ar'
                ? 'كان التطبيق يعاني من بطء شديد في تحميل البيانات وأداء ضعيف في الاستعلامات، مما أثر سلباً على تجربة المستخدمين.'
                : 'The application suffered from slow data loading and poor query performance, negatively impacting user experience.',
            action: language === 'ar'
                ? '• إعادة هيكلة قاعدة البيانات وتحسين الاستعلامات باستخدام الفهارس (Indexes)\n• تطبيق تقنيات التخزين المؤقت (Caching) باستخدام Redis\n• تحسين أداء الـ API بتقليل حجم البيانات وإضافة Pagination\n• استخدام React Query لإدارة حالة البيانات وتحسين التحميل'
                : '• Restructured database and optimized queries using indexes\n• Implemented caching techniques using Redis\n• Improved API performance by reducing data payload and adding pagination\n• Used React Query for state management and optimized loading',
            result: language === 'ar'
                ? '• تحسين سرعة تحميل البيانات بنسبة 85%\n• تقليل زمن استجابة الـ API من 3 ثوانٍ إلى أقل من 0.5 ثانية\n• زيادة رضا المستخدمين وتحسين معدل الاحتفاظ بنسبة 25%'
                : '• Improved data loading speed by 85%\n• Reduced API response time from 3 seconds to under 0.5 seconds\n• Increased user satisfaction and retention rate by 25%',
            isCurrent: true
        },
        {
            id: 2,
            company: 'Web Masters',
            companyEn: 'Web Masters',
            logo: webMastersLogo,
            position: language === 'ar' ? 'متدرب تطوير واجهة أمامية' : 'Front-End Development Intern',
            positionEn: 'Front-End Development Intern',
            type: language === 'ar' ? 'تدريب' : 'Internship',
            period: 'Sep 2024 - Dec 2024',
            duration: language === 'ar' ? '4 شهور' : '4 mos',
            location: 'Remote',
            locationType: 'Remote',
            technologies: [{
                name: 'HTML5',
                icon: <FaHtml5 />,
                color: '#E34F26',
            },
            {
                name: 'CSS3',
                icon: <FaCss3Alt />,
                color: '#1572B6',
            },
            {
                name: 'JavaScript',
                icon: <FaJs />,
                color: '#F7DF1E',
            },
            {
                name: 'React.js',
                icon: <FaReact />,
                color: '#61DAFB',
            },
            {
                name: 'Bootstrap',
                icon: <FaBootstrap />,
                color: '#7952B3',
            },
            {
                name: 'Git',
                icon: <FaGitAlt />,
                color: '#F05032',
            }
            ],
            challenge: language === 'ar'
                ? 'تطبيق التجارة الإلكترونية كان يعاني من واجهة مستخدم غير متجاوبة وضعف في إعادة استخدام المكونات، مما زاد من وقت التطوير والتعقيد.'
                : 'The e-commerce application had a non-responsive UI and poor component reusability, increasing development time and complexity.',
            action: language === 'ar'
                ? '• بناء مكونات React قابلة لإعادة الاستخدام باستخدام Props و State management\n• تطبيق تصميم متجاوب بالكامل باستخدام Bootstrap و CSS Flexbox\n• تحسين أداء التطبيق باستخدام React.memo و useCallback\n• إنشاء نظام لإدارة حالة السلة باستخدام Context API'
                : '• Built reusable React components using Props and State management\n• Implemented fully responsive design using Bootstrap and CSS Flexbox\n• Improved application performance using React.memo and useCallback\n• Created cart state management system using Context API',
            result: language === 'ar'
                ? '• تقليل وقت تطوير الميزات الجديدة بنسبة 40%\n• تحسين تجربة المستخدم عبر جميع الأجهزة\n• إعادة استخدام المكونات بنسبة 60% في صفحات مختلفة'
                : '• Reduced new feature development time by 40%\n• Improved user experience across all devices\n• Achieved 60% component reusability across different pages',
            isCurrent: false
        },
        {
            id: 3,
            company: 'SEF Academy',
            companyEn: 'SEF Academy',
            logo: sefAcademyLogo,
            position: language === 'ar' ? 'متدرب تطوير واجهة أمامية' : 'Front-End Development Intern',
            positionEn: 'Front-End Development Intern',
            type: language === 'ar' ? 'تدريب' : 'Internship',
            period: 'Aug 2024 - Oct 2024',
            duration: language === 'ar' ? '3 شهور' : '3 mos',
            location: 'Remote',
            locationType: 'Remote',
            technologies: [
                {
                    name: 'JavaScript',
                    icon: <FaJs />,
                    color: '#F7DF1E',
                },
                {
                    name: 'React.js',
                    icon: <FaReact />,
                    color: '#61DAFB',
                },
                {
                    name: 'Git',
                    icon: <FaGitAlt />,
                    color: '#F05032',
                },
                {
                    name: 'Bootstrap',
                    icon: <FaBootstrap />,
                    color: '#7952B3',
                }
            ],
            challenge: language === 'ar'
                ? 'التطبيق كان يعاني من سوء تنظيم الكود وصعوبة في التعاون الجماعي بسبب عدم استخدام نظام فعال للتحكم في الإصدارات.'
                : 'The application suffered from poor code organization and collaboration difficulties due to lack of effective version control.',
            action: language === 'ar'
                ? '• تطبيق سير عمل Git/GitHub باستخدام استراتيجية Git Flow\n• إجراء مراجعات الكود (Code Reviews) لضمان جودة الكود\n• إعادة هيكلة المشروع باستخدام مبدأ فصل المسؤوليات (Separation of Concerns)\n• توثيق الـ API والتعامل معها باستخدام Axios'
                : '• Implemented Git/GitHub workflow using Git Flow strategy\n• Conducted code reviews to ensure code quality\n• Restructured project using Separation of Concerns principle\n• Documented APIs and handled them using Axios',
            result: language === 'ar'
                ? '• تحسين كفاءة التعاون الجماعي بنسبة 50%\n• تقليل عدد الأخطاء البرمجية (Bugs) بنسبة 35%\n• تسريع عملية التطوير بنسبة 30%'
                : '• Improved team collaboration efficiency by 50%\n• Reduced bugs by 35%\n• Accelerated development process by 30%',
            isCurrent: false
        }
    ];

    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                {/* Section Title */}
                <div className="row mb-4">
                    <div className="col-12 text-center">
                        <h1 className="section-title">
                            {language === 'ar' ? 'الخبرات العملية' : 'Work Experience'}
                        </h1>
                    </div>
                </div>

                {/* Timeline */}
                <div className="row g-4">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="col-lg-4 col-md-6">


                            {/* Timeline Content */}
                            <div className="timeline-content">
                                {/* Company Logo and Header */}
                                <div className="experience-header">
                                    <div className="company-logo-wrapper">
                                        <img
                                            src={exp.logo}
                                            alt={exp.company}
                                            className="company-logo"
                                        />
                                    </div>
                                    <div className="company-info">
                                        <h3 className="company-name">{exp.company}</h3>
                                        <div className="position-info">
                                            <span className="position">{exp.position}</span>
                                            <span className="employment-type">{exp.type}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Meta Info */}
                                <div className="experience-meta">
                                    <div className="meta-item">
                                        <i className="fas fa-calendar-alt"></i>
                                        <span>{exp.period} · {exp.duration}</span>
                                    </div>
                                    <div className="meta-item">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <span>{exp.location} · {exp.locationType}</span>
                                    </div>
                                </div>

                                {/* Technologies */}
                                <div className="experience-technologies">
                                    {exp.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="tech-tag"
                                            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                                        >
                                            <span style={{ color: tech.color, fontSize: '16px' }}>
                                                {tech.icon}
                                            </span>
                                            <span>{tech.name}</span>
                                        </span>
                                    ))}
                                </div>

                                {/* CAR Section */}
                                <div className="">
                                    {/* Challenge */}
                                    <div className="car-item challenge-item">
                                        <div className="car-icon">
                                            <span className="car-label">{language === 'ar' ? 'التحدي' : 'Challenge'}</span>
                                        </div>
                                        <p className="car-text">{exp.challenge}</p>
                                    </div>

                                    {/* Action */}
                                    <div className="car-item action-item">
                                        <div className="car-icon">
                                            <span className="car-label">{language === 'ar' ? 'الإجراء' : 'Action'}</span>
                                        </div>
                                        <div className="car-text">
                                            {exp.action.split('\n').map((line, idx) => (
                                                <li key={idx}>{line.trim()}</li>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Result */}
                                    <div className="car-item result-item">
                                        <div className="car-icon">
                                            <span className="car-label">{language === 'ar' ? 'النتيجة' : 'Result'}</span>
                                        </div>
                                        <div className="car-text">
                                            {exp.result.split('\n').map((line, idx) => (
                                                <li key={idx}>{line.trim()}</li>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;