import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../assets/css/Skills.css';

// Import icons from react-icons
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaGitAlt, FaBootstrap,
  FaUsers, FaClock, FaComments, FaLightbulb,
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiRedux, SiMongodb, 
  SiExpress
} from 'react-icons/si';

const Skills = () => {
  const { language } = useTheme();
  const [activeCategory, setActiveCategory] = useState('technical');

  // Technical Skills Data with Icons and Descriptions
  const technicalSkills = [
    { 
      name: 'HTML5', 
      icon: <FaHtml5 />, 
      color: '#E34F26',
      descriptionEn: 'Semantic markup, SEO-friendly structure, accessibility standards',
      descriptionAr: 'ترميز دلالي، هيكل مناسب لمحركات البحث، معايير الوصول'
    },
    { 
      name: 'CSS3', 
      icon: <FaCss3Alt />, 
      color: '#1572B6',
      descriptionEn: 'Responsive design, Flexbox, Grid, animations, cross-browser compatibility',
      descriptionAr: 'تصميم متجاوب، Flexbox، Grid، رسوم متحركة، توافق مع المتصفحات'
    },
    { 
      name: 'JavaScript', 
      icon: <FaJs />, 
      color: '#F7DF1E',
      descriptionEn: 'ES6+, DOM manipulation, async/await, closures, event handling',
      descriptionAr: 'ES6+، التعامل مع DOM، async/await، closures، معالجة الأحداث'
    },
    { 
      name: 'TypeScript', 
      icon: <SiTypescript />, 
      color: '#3178C6',
      descriptionEn: 'Type safety, interfaces, generics, advanced types, OOP principles',
      descriptionAr: 'أمان الأنواع، الواجهات، generics، الأنواع المتقدمة، مبادئ OOP'
    },
    { 
      name: 'React.js', 
      icon: <FaReact />, 
      color: '#61DAFB',
      descriptionEn: 'Hooks, context API, state management, custom hooks, component lifecycle',
      descriptionAr: 'Hooks، context API، إدارة الحالة، custom hooks، دورة حياة المكونات'
    },
    { 
      name: 'Node.js', 
      icon: <FaNodeJs />, 
      color: '#68A063',
      descriptionEn: 'Event-driven architecture, streams, file system, clustering',
      descriptionAr: 'هندسة تعتمد على الأحداث، streams، نظام الملفات، clustering'
    },
    { 
      name: 'Express.js', 
      icon: <SiExpress />, 
      color: '#000000',
      descriptionEn: 'RESTful APIs, middleware, routing, error handling, authentication',
      descriptionAr: 'APIs RESTful، middleware، التوجيه، معالجة الأخطاء، المصادقة'
    },
    { 
      name: 'MongoDB', 
      icon: <SiMongodb />, 
      color: '#47A248',
      descriptionEn: 'NoSQL databases, aggregation pipelines, indexing, data modeling',
      descriptionAr: 'قواعد بيانات NoSQL، خطوط التجميع، الفهرسة، نمذجة البيانات'
    },
    { 
      name: 'Git', 
      icon: <FaGitAlt />, 
      color: '#F05032',
      descriptionEn: 'Version control, branching strategies, merge conflicts, CI/CD workflows',
      descriptionAr: 'التحكم في الإصدارات، استراتيجيات الفروع، تعارضات الدمج، سير عمل CI/CD'
    },
    { 
      name: 'Redux', 
      icon: <SiRedux />, 
      color: '#764ABC',
      descriptionEn: 'State management, middleware (Thunk/Saga), devtools, reducers',
      descriptionAr: 'إدارة الحالة، middleware (Thunk/Saga)، أدوات المطور، reducers'
    },
    { 
      name: 'Tailwind CSS', 
      icon: <SiTailwindcss />, 
      color: '#38B2AC',
      descriptionEn: 'Utility-first CSS, responsive design, custom themes, dark mode',
      descriptionAr: 'CSS بالأدوات، تصميم متجاوب، سمات مخصصة، الوضع المظلم'
    },
    { 
      name: 'Bootstrap', 
      icon: <FaBootstrap />, 
      color: '#7952B3',
      descriptionEn: 'Component library, grid system, responsive utilities, custom theming',
      descriptionAr: 'مكتبة المكونات، نظام الشبكة، أدوات متجاوبة، تخصيص السمات'
    }
  ];

  // Soft Skills Data with Icons and Descriptions
  const softSkills = [
    { 
      name: 'Teamwork', 
      icon: <FaUsers />, 
      color: '#FF4D6D',
      descriptionEn: 'Collaborative development, code reviews, pair programming, agile methodology',
      descriptionAr: 'تطوير تعاوني، مراجعات الكود، البرمجة الزوجية، منهجية Agile'
    },
    { 
      name: 'Communication', 
      icon: <FaComments />, 
      color: '#8B5CF6',
      descriptionEn: 'Technical writing, client communication, presentation skills, active listening',
      descriptionAr: 'كتابة تقنية، تواصل مع العملاء، مهارات العرض، الاستماع النشط'
    },
    { 
      name: 'Time Management', 
      icon: <FaClock />, 
      color: '#10B981',
      descriptionEn: 'Task prioritization, deadline management, productivity tools, sprint planning',
      descriptionAr: 'تحديد أولويات المهام، إدارة المواعيد النهائية، أدوات الإنتاجية، تخطيط السباقات'
    },
    { 
      name: 'Problem Solving', 
      icon: <FaLightbulb />, 
      color: '#F59E0B',
      descriptionEn: 'Analytical thinking, debugging skills, algorithm design, creative solutions',
      descriptionAr: 'تفكير تحليلي، مهارات التصحيح، تصميم الخوارزميات، حلول إبداعية'
    },
  ];

  // Category buttons
  const categories = [
    { id: 'technical', nameEn: 'Technical Skills', nameAr: 'المهارات التقنية' },
    { id: 'soft', nameEn: 'Soft Skills', nameAr: 'المهارات الشخصية' },
  ];

  const currentSkills = activeCategory === 'technical' ? technicalSkills : softSkills;

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h1 className="section-title">
              {language === 'ar' ? 'مهاراتي' : 'My Skills'}
            </h1>
            <p className="section-subtitle">
              {language === 'ar' 
                ? 'مجموعة من المهارات التقنية والشخصية التي أمتلكها'
                : 'A collection of technical and soft skills I possess'}
            </p>
          </div>
        </div>
        
        {/* Category Filter Buttons */}
        <div className="skills-filter">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {language === 'ar' ? category.nameAr : category.nameEn}
            </button>
          ))}
        </div>

        <div className="section-content">
          {/* Skills Grid with Cards */}
          <div className="skills-grid">
            {currentSkills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-card-inner">
                  <div className="skill-icon-wrapper" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-description">
                    {language === 'ar' ? skill.descriptionAr : skill.descriptionEn}
                  </p>
                  <div className="skill-progress-indicator">
                    <div 
                      className="skill-progress-bar"
                      style={{ 
                        width: '100%',
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className="skills-summary">
            <div className="summary-item">
              <span className="summary-number">{technicalSkills.length}+</span>
              <span className="summary-label">
                {language === 'ar' ? 'مهارة تقنية' : 'Technical Skills'}
              </span>
            </div>
            <div className="summary-item">
              <span className="summary-number">{softSkills.length}+</span>
              <span className="summary-label">
                {language === 'ar' ? 'مهارة شخصية' : 'Soft Skills'}
              </span>
            </div>
            <div className="summary-item">
              <span className="summary-number">3+</span>
              <span className="summary-label">
                {language === 'ar' ? 'سنوات خبرة' : 'Years Experience'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;