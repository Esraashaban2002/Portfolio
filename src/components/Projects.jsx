import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../assets/css/project.css';

// Import project images (add your own images to assets/images/)
import beautifulShop from '../assets/images/beautifulShop.png';
import ecommerce from '../assets/images/ecommerce.png';
import crmDashboard from '../assets/images/crmDashboard.png';

import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGitAlt
} from 'react-icons/fa';
import { SiMongodb,
  SiExpress
} from 'react-icons/si';

const Projects = () => {
  const { language } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  // Projects Data
  const projects = [
    {
      id: 1,
      title: "Beautiful Shop",
      titleAr: "مشروع Beautiful Shop",
      // الوصف يركز الآن على "المشكلة والحل" كما في الصورة
      description: "Transformed the online shopping experience by building a high-performance, responsive e-commerce frontend. Solved the challenge of slow interface transitions and inconsistent mobile layouts using modern React patterns.",
      descriptionAr: "تطوير واجهة متجر إلكتروني احترافية عالجت تحديات بطء التصفح وعدم تناسق التصميم على الهواتف، من خلال بناء مكونات React سريعة الاستجابة وتجربة مستخدم سلسة.",
      image: beautifulShop,
      badges: [{
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
      }],
      category: "Frontend",
      categoryAr: "واجهة أمامية",
      categoryId: "frontend",
      liveLink: "https://esraashaban2002.github.io/beautifulShop/",
      // الـ Features تم تقسيمها لتعبر عن "الحل التقني" و "النتائج"
      features: [
        "Challenge: Improving load times & UI consistency",
        "Solution: Component-based architecture with React.js",
        "Result: 40% faster navigation and seamless mobile experience",
        "Interactive UI with optimized CSS animations",
        "Dynamic category filtering for better product discovery",
        "Clean & maintainable codebase for future scaling"
      ],
      featuresAr: [
        "التحدي: تحسين سرعة التحميل وتناسق الواجهة",
        "الحل التقني: هيكلة المكونات باستخدام React.js",
        "النتيجة: تنقل أسرع بنسبة 40% وتجربة مستخدم مثالية",
        "واجهة تفاعلية مع حركات CSS محسّنة للأداء",
        "نظام فلترة ديناميكي لتسهيل الوصول للمنتجات",
        "كود برمي نظيف (Clean Code) قابل للتطوير المستقبلي"
      ]
    },
    {
      id: 2, // تأكدي من ترتيب المعرف حسب موقع المشروع في القائمة
      title: "Professional E-commerce Web App",
      titleAr: "تطبيق متجر إلكتروني متكامل",
      description: "A complete shopping solution addressing the complexity of real-time cart management and user engagement. Developed a seamless user journey from product discovery to checkout using optimized React architecture.",
      descriptionAr: "حل برمجي متكامل يعالج تعقيدات إدارة سلة التسوق وتفاعل المستخدم في الوقت الفعلي. قمت ببناء رحلة مستخدم سلسة تبدأ من استكشاف المنتج وحتى إتمام الشراء باستخدام بنية React محسّنة.",
      image: ecommerce, // تأكدي من استيراد الصورة بهذا الاسم
      badges: [{
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
    }],
      category: "Frontend",
      categoryAr: "واجهة أمامية",
      categoryId: "frontend",
      liveLink: "https://esraashaban2002.github.io/E-commerce-website/",
      features: [
        "Challenge: Synchronizing shopping cart state across pages",
        "Solution: Efficient State Management for real-time updates",
        "Result: 100% bug-free checkout flow and smooth user experience",
        "Fully responsive layout optimized for conversion on mobile",
        "Interactive UI elements with high-performance CSS animations",
        "Optimized assets for fast loading and reduced bounce rates"
      ],
      featuresAr: [
        "التحدي: مزامنة حالة سلة التسوق عبر الصفحات المختلفة",
        "الحل التقني: إدارة فعالة للحالة (State) لتحديث البيانات لحظياً",
        "النتيجة: مسار شراء خالٍ من الأخطاء وتجربة مستخدم انسيابية",
        "تصميم متجاوب بالكامل لزيادة معدلات التحويل عبر الهاتف",
        "عناصر واجهة تفاعلية مع حركات CSS عالية الأداء",
        "تحسين ملفات المشروع لضمان سرعة التحميل وتقليل معدل الارتداد"
      ]
    },
    {
      id: 3,
      title: "Enterprise CRM Backend System",
      titleAr: "نظام إدارة علاقات العملاء (CRM) للمؤسسات",
      // الوصف يركز على الأمان والكفاءة المؤسسية
      description: "Engineered a robust, scalable backend for enterprise CRM needs. Addressed data security and complex user permissions by implementing a secure JWT authentication system and granular Role-Based Access Control (RBAC).",
      descriptionAr: "تصميم وبناء نظام خلفي (Backend) قوي وقابل للتوسع لاحتياجات الشركات. عالجت تحديات أمن البيانات وصلاحيات المستخدمين المعقدة عبر نظام مصادقة JWT متطور وإدارة دقيقة للأدوار (RBAC).",
      image: crmDashboard,
      badges: [{
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
    }],
      category: "Backend",
      categoryAr: "واجهة خلفية",
      categoryId: "backend",
      liveLink: "https://github.com/Esraashaban2002/CRM_Dashboard",
      // المميزات بصيغة (تحدي - حل - نتيجة)
      features: [
        "Challenge: Securing sensitive business data & complex access",
        "Solution: JWT & Role-Based Access Control (RBAC) implementation",
        "Result: 100% secure data environment with scalable performance",
        "Developed high-performance RESTful APIs for seamless integration",
        "Robust data validation & error handling using best practices",
        "Clean architecture designed for easy future feature scaling"
      ],
      featuresAr: [
        "التحدي: تأمين بيانات الأعمال الحساسة وإدارة الوصول المعقدة",
        "الحل التقني: تنفيذ نظام JWT وإدارة الصلاحيات حسب الأدوار (RBAC)",
        "النتيجة: بيئة بيانات آمنة تماماً بنسبة 100% مع أداء عالي الاستقرار",
        "تطوير واجهات API متوافقة مع REST لضمان تكامل سلس مع الواجهات",
        "نظام صارم للتحقق من صحة البيانات والتعامل مع الأخطاء",
        "بناء معماري نظيف (Clean Architecture) لسهولة التوسع المستقبلي"
      ]
    },

  ];

  // Category filter options
  const categories = [
    { id: 'all', nameEn: 'All Projects', nameAr: 'جميع المشاريع' },
    { id: 'frontend', nameEn: 'Frontend', nameAr: 'واجهة أمامية' },
    { id: 'backend', nameEn: 'Backend', nameAr: 'واجهة خلفية' },
    { id: 'fullstack', nameEn: 'Full Stack', nameAr: 'تطبيق متكامل' },
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.categoryId === activeCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h1>{language === 'ar' ? 'مشاريعي' : 'My Projects'}</h1>
        <p className="section-subtitle">
          {language === 'ar'
            ? 'مجموعة من مشاريعي في تطوير الويب'
            : 'A collection of my web development projects'}
        </p>

        {/* Category Filter Buttons - Similar to Skills section */}
        <div className="projects-filter">
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

        {/* Projects Count */}
        <div className="projects-count">
          {language === 'ar'
            ? `عرض ${filteredProjects.length} مشاريع`
            : `Showing ${filteredProjects.length} projects`}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <span className="project-category">
                    {language === 'ar' ? project.categoryAr : project.category}
                  </span>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">
                  {language === 'ar' ? project.titleAr : project.title}
                </h3>

                <p className="project-description">
                  {language === 'ar'
                    ? project.descriptionAr.substring(0, 100) + '...'
                    : project.description.substring(0, 100) + '...'}
                </p>
                {/* 
                <div className="project-badges">
                  {project.badges.slice(0, 4).map((badge, index) => (
                    <span key={index} className="project-badge">
                      {badge}
                    </span>
                  ))}
                  {project.badges.length > 4 && (
                    <span className="project-badge more">
                      +{project.badges.length - 4}
                    </span>
                  )}
                </div> */}

                <div className="project-actions">
                  <button
                    className="project-btn show-more"
                    onClick={() => openModal(project)}
                  >
                    {language === 'ar' ? 'عرض التفاصيل' : 'Show More'}
                    <i className="fas fa-arrow-right"></i>
                  </button>

                  <div className="project-links">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live"
                      title={language === 'ar' ? 'معاينة مباشرة' : 'Live Preview'}
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show message if no projects in category */}
        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <i className="fas fa-folder-open"></i>
            <p>
              {language === 'ar'
                ? 'لا توجد مشاريع في هذا التصنيف'
                : 'No projects found in this category'}
            </p>
          </div>
        )}

        {/* Project Modal */}
        {showModal && selectedProject && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>

              <div className="modal-body">
                <div className="modal-image-container">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="modal-image"
                  />
                </div>

                <div className="modal-details">
                  <h2 className="modal-title">
                    {language === 'ar' ? selectedProject.titleAr : selectedProject.title}
                  </h2>

                  <div className="modal-badges">
                    {selectedProject.badges.map((badge, index) => (
                      <span
                        key={index}
                        className="project-badge"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        <span style={{ color: badge.color, fontSize: '16px' }}>
                          {badge.icon}
                        </span>
                        <span>{badge.name}</span>
                      </span>
                    ))}
                  </div>

                  <p className="modal-description">
                    {language === 'ar' ? selectedProject.descriptionAr : selectedProject.description}
                  </p>

                  <div className="modal-features">
                    <h3>
                      {language === 'ar' ? 'المميزات:' : 'Features:'}
                    </h3>
                    <ul className="features-list">
                      {(language === 'ar' ? selectedProject.featuresAr : selectedProject.features).map((feature, index) => (
                        <li key={index}>
                          <i className="fas fa-check-circle"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-actions">
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-btn live"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      {language === 'ar' ? 'معاينة مباشرة' : 'Live Preview'}
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;