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
  const [activeCategory, setActiveCategory] = useState('front');

  // Technical Skills Data with Icons and Descriptions
  const frontendSkills = {
     title: language === 'ar' ? 'تطوير الواجهة الأمامية with React' : 'Frontend Development with React',
    technologies: [
    {
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
      name: 'TypeScript',
      icon: <SiTypescript />,
      color: '#3178C6',
    },
    {
      name: 'React.js',
      icon: <FaReact />,
      color: '#61DAFB',
    },
    {
      name: 'Redux',
      icon: <SiRedux />,
      color: '#764ABC',
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss />,
      color: '#38B2AC',
    },
    {
      name: 'Bootstrap',
      icon: <FaBootstrap />,
      color: '#7952B3',
    }
  ],
    descriptionEn: 'Designing and developing scalable, high-performance web applications with modern frontend technologies, focusing on clean architecture, maintainable code, optimized rendering, and seamless user experience across devices.',
    descriptionAr: 'تصميم وتطوير تطبيقات ويب قابلة للتوسع وعالية الأداء باستخدام أحدث تقنيات الواجهة الأمامية، مع التركيز على الهندسة النظيفة، الكود القابل للصيانة، الأداء المحسن، وتجربة مستخدم سلسة عبر جميع الأجهزة.'
}
  const backendSkills = {
     title: language === 'ar' ? 'تطوير الواجهة الخلفية with Node.js' : 'Backend Development with Node.js',
    technologies: [
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
  descriptionEn: 'Building robust, secure, and scalable server-side applications with Node.js and Express.js. Designing RESTful APIs, implementing authentication and authorization, managing databases, and ensuring optimal performance and reliability.',
    descriptionAr: 'بناء تطبيقات خادم قوية وآمنة وقابلة للتوسع باستخدام Node.js و Express.js. تصميم RESTful APIs، تنفيذ المصادقة والتفويض، إدارة قواعد البيانات، وضمان الأداء الأمثل والموثوقية.'

  
}

  // Soft Skills Data with Icons and Descriptions
  const softSkills ={
     title: language === 'ar' ? 'المهارات الشخصية' : 'Soft Skills',
    technologies: [
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
    
  ],
   descriptionEn: 'Excellent collaboration and communication skills, working effectively in agile teams. Strong problem-solving abilities with analytical thinking. Proven time management and ability to meet deadlines while maintaining quality.',
    descriptionAr: 'مهارات تعاون وتواصل ممتازة، العمل بفعالية في فرق agile. قدرات قوية في حل المشكلات مع التفكير التحليلي. إدارة وقت مثبتة والقدرة على الوفاء بالمواعيد النهائية مع الحفاظ على الجودة.'
};

  // Category buttons
  const categories = [
    { id: 'front', nameEn: 'FrontEnd Skills', nameAr: 'مهارات الواجهه الامامية' },
    { id: 'back', nameEn: 'BackEnd Skills', nameAr: 'مهارات الواجهه الخلفية' },
    { id: 'soft', nameEn: 'Soft Skills', nameAr: 'المهارات الشخصية' },
  ];

  const currentSkills = activeCategory === 'front' ? frontendSkills : activeCategory === 'back' ? backendSkills : softSkills;

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
          <div className="skill-card mx-auto">
            <div className="skill-card-inner">
            <h3 className="skills-title">{currentSkills.title}</h3>

<p className="skills-description">
  {language === 'ar'
    ? currentSkills.descriptionAr
    : currentSkills.descriptionEn}
</p>

<div className="skills-grid">
  {currentSkills.technologies.map((skill, index) => (
    <div key={index}>
      <div className="skill-card-inner">

        <div
          className="skill-icon-wrapper"
          style={{ color: skill.color }}
        >
          {skill.icon}
        </div>

        <h3 className="skill-name">{skill.name}</h3>

      </div>
    </div>
  ))}
</div>


               </div>
               </div>

          {/* Additional Info Section */}
          <div className="skills-summary">
            <div className="summary-item">
              <span className="summary-number">{frontendSkills.technologies.length}+</span>
              <span className="summary-label">
                {language === 'ar' ? 'مهارة الواجهه الاماميه' : 'FrontEnd Skills'}
              </span>
            </div>
            <div className="summary-item">
              <span className="summary-number">{backendSkills.technologies.length}+</span>
              <span className="summary-label">
                {language === 'ar' ? 'مهارة الواجهه الخلفية' : 'BackEnd Skills'}
              </span>
            </div>
            <div className="summary-item">
              <span className="summary-number">{softSkills.technologies.length}+</span>
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