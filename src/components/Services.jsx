import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../assets/css/Services.css';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaGitAlt, FaBootstrap, FaRocket, FaHeadset,
  FaSync, FaBug, FaChartLine, FaDesktop
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiRedux, SiMongodb, 
  SiExpress
} from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const { language } = useTheme();
  const navigate = useNavigate();

  // Technical Skills data with icons
  const technicalSkills = [
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E'},
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6'},
    { name: 'React.js', icon: <FaReact />, color: '#61DAFB'},
    { name: 'Node.js', icon: <FaNodeJs />, color: '#68A063'},
    { name: 'Express.js', icon: <SiExpress />, color: '#000000'},
    { name: 'Express', icon: <SiExpress />, color: '#000000'}, // Added for matching
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248'},
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032'},
    { name: 'Redux', icon: <SiRedux />, color: '#764ABC'},
    { name: 'TailwindCSS', icon: <SiTailwindcss />, color: '#38B2AC'},
    { name: 'Tailwind', icon: <SiTailwindcss />, color: '#38B2AC'}, // Added for matching
    { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3'},
    { name: 'JWT', icon: <FaRocket />, color: '#FF4D6D'}, // Added for JWT
    { name: 'RESTful', icon: <FaRocket />, color: '#8B5CF6'}, // Added for RESTful
    { name: 'Mongoose', icon: <SiMongodb />, color: '#47A248'}, // Added for Mongoose
    { name: 'Support', icon: <FaHeadset />, color: '#8B5CF6'}, // Added for Support
    { name: 'Updates', icon: <FaSync />, color: '#F59E0B'}, // Added for Updates
    { name: 'Bug Fixing', icon: <FaBug />, color: '#EF4444'}, // Added for Bug Fixing
    { name: 'Monitoring', icon: <FaChartLine />, color: '#10B981'}, // Added for Monitoring
    { name: 'Electron', icon: <FaDesktop />, color: '#9FEAF9'} // Added for Electron
  ];

  // Helper function to find icon for a tag
  const findIconForTag = (tagName) => {
    const matchedSkill = technicalSkills.find(skill => 
      skill.name.toLowerCase() === tagName.toLowerCase() ||
      (tagName.toLowerCase().includes('react') && skill.name.toLowerCase().includes('react')) ||
      (tagName.toLowerCase().includes('node') && skill.name.toLowerCase().includes('node')) ||
      (tagName.toLowerCase().includes('express') && skill.name.toLowerCase().includes('express')) ||
      (tagName.toLowerCase().includes('mongo') && skill.name.toLowerCase().includes('mongo')) ||
      (tagName.toLowerCase().includes('tailwind') && skill.name.toLowerCase().includes('tailwind'))
    );
    
    return matchedSkill ? matchedSkill.icon : null;
  };

  // Helper function to find color for a tag (optional - uses service color as fallback)
  const findColorForTag = (tagName) => {
    const matchedSkill = technicalSkills.find(skill => 
      skill.name.toLowerCase() === tagName.toLowerCase() ||
      (tagName.toLowerCase().includes('react') && skill.name.toLowerCase().includes('react')) ||
      (tagName.toLowerCase().includes('node') && skill.name.toLowerCase().includes('node'))
    );
    
    return matchedSkill ? matchedSkill.color : null;
  };

  const servicesData = [
    {
      id: 1,
      title: language === 'ar' ? 'تصميم قواعد البيانات' : 'Database Design',
      description: language === 'ar' 
        ? 'تصميم قواعد بيانات فعالة ومحسّنة للأداء وقابلة للتوسع.'
        : 'Efficient schemas optimized for performance and scalability.',
      tags: ['MongoDB', 'Mongoose'],
      icon: 'fas fa-database',
      color: '#47A248'
    },
    {
      id: 2,
      title: language === 'ar' ? 'تطبيقات الويب' : 'Web Applications',
      description: language === 'ar'
        ? 'بناء تطبيقات ويب كاملة باستخدام React.js و Node.js.'
        : 'Building full-featured web applications using React.js and Node.js.',
      tags: ['React.js', 'Node.js', 'Express', 'Redux'],
      icon: 'fas fa-globe',
      color: '#61DAFB'
    },
    {
      id: 3,
      title: language === 'ar' ? 'تطوير الواجهة الأمامية' : 'Frontend Development',
      description: language === 'ar'
        ? 'إنشاء واجهات تفاعلية واستجابية مع تجربة مستخدم ممتازة.'
        : 'Creating responsive and interactive web interfaces with excellent user experience.',
      tags: ['React.js', 'HTML5', 'CSS3', 'TailwindCSS'],
      icon: 'fas fa-laptop-code',
      color: '#FF4D6D'
    },
    {
      id: 4,
      title: language === 'ar' ? 'الصيانة والدعم الفني' : 'Maintenance & Support',
      description: language === 'ar'
        ? 'تقديم تحديثات مستمرة وتصحيح الأخطاء ودعم فني لضمان عمل التطبيقات بسلاسة.'
        : 'Ongoing updates, debugging, and technical support to ensure smooth operation.',
      tags: ['Support', 'Updates', 'Bug Fixing', 'Monitoring'],
      icon: 'fas fa-headset',
      color: '#8B5CF6'
    }
  ];

   const handlePricingClick = () => {
    navigate('/pricing');
  };

  return (
    <section id="services" className="section services-section py-5">
      <div className="container">
        {/* Section Title */}
        <div className="row mb-5">
          <div className="col-12">
            <h1 className="section-title position-relative d-inline-block">
              {language === 'ar' ? 'خدماتي' : 'My Services'}
            </h1>
            <p className="section-subtitle text-muted mt-3">
              {language === 'ar' 
                ? 'أقدم مجموعة متنوعة من الخدمات في تطوير الويب وتصميم قواعد البيانات'
                : 'I offer a variety of services in web development and database design'}
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {servicesData.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6">
              <div className="service-card h-100">
                {/* Card Header with Icon */}
                <div className="service-header d-flex align-items-center gap-3 mb-3">
                  <div 
                    className="service-icon-wrapper rounded-circle d-flex align-items-center justify-content-center"
                    style={{ 
                      background: `linear-gradient(135deg, ${service.color}20, ${service.color}40)`,
                      borderColor: service.color
                    }}
                  >
                    <i className={service.icon} style={{ color: service.color }}></i>
                  </div>
                  <h3 className="service-title mb-0">{service.title}</h3>
                </div>

                {/* Description */}
                <p className="service-description text-muted mb-3">
                  {service.description}
                </p>

                {/* Tags/Technologies with Icons - FIXED VERSION */}
                <div className="service-tags d-flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag, index) => {
                    const icon = findIconForTag(tag);
                    const tagColor = findColorForTag(tag) || service.color;
                    
                    return (
                      <span 
                        key={index} 
                        className="tag-badge d-inline-flex align-items-center gap-2"
                        style={{ 
                          background: `${service.color}10`,
                          color: tagColor,
                          borderColor: `${service.color}30`
                        }}
                      >
                        {icon && <span className="tag-icon">{icon}</span>}
                        {tag}
                      </span>
                    );
                  })}
                </div>

                {/* Decorative line */}
                <div className="service-decoration mt-3">
                  <div 
                    className="decoration-line" 
                    style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

          <button 
                className="pricing-btn mt-5 d-flex mx-auto"
                onClick={handlePricingClick}
              >
                <i className="fas fa-tag me-2"></i>
                {language === 'ar' ? 'عرض خطط الأسعار' : 'View Pricing Plans'}
                <i className="fas fa-arrow-right ms-2"></i>
              </button>
      </div>
    </section>
  );
};

export default Services;