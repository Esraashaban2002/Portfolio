import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../assets/css/project.css';

// Import project images (add your own images to assets/images/)
import beautifulShop from '../assets/images/beautifulShop.png';
import ecommerce from '../assets/images/ecommerce.png';
import crmDashboard from '../assets/images/crmDashboard.png';


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
  titleAr: "Beautiful Shop",
  description: "A beautiful e-commerce frontend showcasing products, categories, and a responsive shopping experience, built with modern web technologies.",
  descriptionAr: "واجهة متجر إلكتروني جميلة تعرض المنتجات والفئات مع تجربة تسوق متجاوبة، مبنية باستخدام تقنيات الويب الحديثة.",
  image: beautifulShop,
  badges: ["React.js", "CSS3", "HTML5", "JavaScript"],
  category: "Frontend",
  categoryAr: "واجهة أمامية",
  categoryId: "frontend",
  liveLink: "https://esraashaban2002.github.io/beautifulShop/",
  features: [
    "Responsive product pages",
    "Category filtering",
    "Interactive UI elements",
    "Modern CSS animations",
    "Optimized for mobile and desktop",
    "Fast loading performance"
  ],
  featuresAr: [
    "صفحات منتجات متجاوبة",
    "فلترة حسب الفئات",
    "عناصر واجهة مستخدم تفاعلية",
    "حركات CSS حديثة",
    "محسّن للهواتف والحواسيب",
    "أداء تحميل سريع"
  ]
},
   {
  id: 2,
  title: "E-commerce Website",
  titleAr: "متجر إلكتروني",
  description: "A full-featured e-commerce frontend showcasing products, shopping cart, and interactive shopping experience, built with modern web technologies.",
  descriptionAr: "واجهة متجر إلكتروني متكاملة تعرض المنتجات وسلة التسوق وتجربة تفاعلية، مبنية باستخدام تقنيات الويب الحديثة.",
  image: ecommerce,
  badges: ["React.js", "CSS3", "HTML5", "JavaScript"],
  category: "Frontend",
  categoryAr: "واجهة أمامية",
  categoryId: "frontend",
  liveLink: "https://esraashaban2002.github.io/E-commerce-website/",
  features: [
    "Responsive product pages",
    "Shopping cart functionality",
    "Interactive UI elements",
    "Modern CSS animations",
    "Optimized for mobile and desktop",
    "Fast loading performance"
  ],
  featuresAr: [
    "صفحات منتجات متجاوبة",
    "وظائف سلة التسوق",
    "عناصر واجهة مستخدم تفاعلية",
    "حركات CSS حديثة",
    "محسّن للهواتف والحواسيب",
    "أداء تحميل سريع"
  ]
},
{
  id: 3,
  title: "CRM Dashboard",
  titleAr: "لوحة تحكم CRM",
  description: "A full-featured CRM backend system built with Node.js, providing APIs, database management, and user authentication for a complete enterprise solution.",
  descriptionAr: "نظام Back-End كامل لإدارة العملاء (CRM) مبني باستخدام Node.js، يتضمن واجهات API، إدارة قواعد البيانات، والمصادقة لتوفير حل متكامل للمؤسسات.",
  image: crmDashboard,
  badges: ["Node.js", "Express.js", "MongoDB", "REST API", "JWT Authentication"],
  category: "Backend",
  categoryAr: "واجهة خلفية",
  categoryId: "backend",
  liveLink: "https://github.com/Esraashaban2002/CRM_Dashboard",
  features: [
    "RESTful API development",
    "User authentication with JWT",
    "Database integration (MongoDB / SQL)",
    "Role-based access control",
    "Data validation and error handling",
    "Scalable architecture for enterprise"
  ],
  featuresAr: [
    "تطوير واجهات API متوافقة مع REST",
    "المصادقة باستخدام JWT",
    "تكامل قواعد البيانات (MongoDB / SQL)",
    "إدارة صلاحيات المستخدمين حسب الدور",
    "التحقق من صحة البيانات والتعامل مع الأخطاء",
    "هندسة قابلة للتوسع للمؤسسات"
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
                </div>

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
                      <span key={index} className="modal-badge">
                        {badge}
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