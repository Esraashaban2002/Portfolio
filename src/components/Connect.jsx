import React, { useRef, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import emailjs from "@emailjs/browser";
import "../assets/css/Connect.css";

const Connect = () => {
  const formRef = useRef();
  const [submitStatus, setSubmitStatus] = useState(null);
  const { language } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Contact information
  const contactInfo = {
    email: "esraashaban231@gmail.com",
    phone: "01143274346",
    location: language === "ar" ? "القاهرة، مصر" : "Cairo, Egypt",
    whatsapp: "https://wa.me/201143274346",
    github: "https://github.com/Esraashaban2002",
    linkedin: "https://www.linkedin.com/in/esraashabanabdeljawad/",
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_2ggyqdo",
        "template_87ur03n",
        formRef.current,
        "zWRmGATXjrqbZOXgO",
      )
      .then(
        () => {
          setSubmitStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setIsSubmitting(false);
        },
        () => {
          setSubmitStatus("error");
          setIsSubmitting(false);
        },
      );
  };

  const handleWhatsAppClick = () => {
    window.open(contactInfo.whatsapp, "_blank");
  };

  return (
    <section id="connect" className="section connect-section py-5">
      <div className="container">
        {/* Section Title */}
        <div className="row mb-5">
          <div className="col-12 ">
            <h1 className="connect-main-title mt-3">
              {language === "ar" ? "تواصل معي" : "Get In Touch"}
            </h1>
            <p
              className="section-subtitle text-muted mt-3 mx-auto"
              style={{ maxWidth: "600px" }}
            >
              {language === "ar"
                ? "هل لديك مشروع في mind أو تبحث عن مطور متمرس؟ لا تتردد في التواصل معي. أنا دائمًا منفتح على الفرص الجديدة والتعاون."
                : "Have a project in mind or looking for a skilled developer? Feel free to reach out. I'm always open to new opportunities and collaborations."}
            </p>
          </div>
        </div>

        <div className="row g-4">
          {/* Contact Form Column */}
          <div className="col-lg-7">
            <div className="contact-form-card h-100">
              <h3 className="form-title mb-4">
                {language === "ar" ? "أرسل لي رسالة" : "Send Me a Message"}
              </h3>

              <form onSubmit={handleSubmit} ref={formRef}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        {language === "ar" ? "الاسم" : "Your Name"}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={
                          language === "ar" ? "أدخل اسمك" : "Enter your name"
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        {language === "ar" ? "البريد الإلكتروني" : "Your Email"}
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={
                          language === "ar"
                            ? "أدخل بريدك الإلكتروني"
                            : "Enter your email"
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">
                        {language === "ar" ? "الموضوع" : "Subject"}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={
                          language === "ar"
                            ? "أدخل موضوع الرسالة"
                            : "Enter message subject"
                        }
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        {language === "ar" ? "رسالتك" : "Your Message"}
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={
                          language === "ar"
                            ? "اكتب رسالتك هنا..."
                            : "Write your message here..."
                        }
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary submit-btn w-100 py-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          {language === "ar" ? "جاري الإرسال..." : "Sending..."}
                        </>
                      ) : language === "ar" ? (
                        "إرسال الرسالة"
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="col-12">
                      <div className="alert alert-success mt-3">
                        <i className="fas fa-check-circle me-2"></i>
                        {language === "ar"
                          ? "تم إرسال رسالتك بنجاح! سأتواصل معك قريباً."
                          : "Your message has been sent successfully! I'll get back to you soon."}
                      </div>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="col-12">
                      <div className="alert alert-danger mt-3">
                        <i className="fas fa-exclamation-circle me-2"></i>
                        {language === "ar"
                          ? "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى."
                          : "An error occurred while sending. Please try again."}
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info Column */}
          <div className="col-lg-5">
            <div className="contact-info-card h-100">
              <h3 className="info-title mb-4">
                {language === "ar" ? "معلومات التواصل" : "Contact Information"}
              </h3>

              <p className="info-subtitle text-muted mb-4">
                {language === "ar"
                  ? "لا تتردد في التواصل معي عبر أي من هذه القنوات"
                  : "Feel free to reach out through any of these channels"}
              </p>

              {/* Contact Details */}
              <div className="contact-details mb-4">
                {/* Email */}
                <div className="contact-item d-flex align-items-center gap-3 mb-3 p-3 rounded-3">
                  <div className="contact-icon-wrapper contact-action">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-info flex-grow-1">
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="contact-value text-decoration-none"
                    >
                      <span className="contact-label d-block small text-muted">
                        {language === "ar" ? "البريد الإلكتروني" : "Email"}
                      </span>

                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Whatsapp */}
                <div
                  className="contact-item d-flex align-items-center gap-3 mb-3 p-3 rounded-3"
                  onClick={() => {
                    handleWhatsAppClick();
                  }}
                >
                  <div className="contact-icon-wrapper contact-action">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div className="contact-info flex-grow-1 ">
                    <span className="contact-label d-block small text-muted">
                      {language === "ar" ? "واتساب" : "Whatsapp"}
                    </span>
                    <a
                      href={contactInfo.whatsapp}
                      onClick={(e) => {
                        e.preventDefault();
                        handleWhatsAppClick();
                      }}
                      className="contact-value text-decoration-none"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-item d-flex align-items-center gap-3 mb-3 p-3 rounded-3">
                  <div className="contact-icon-wrapper contact-action">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="contact-info flex-grow-1 ">
                    <span className="contact-label d-block small text-muted">
                      {language === "ar" ? "الهاتف" : "Phone"}
                    </span>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="contact-value text-decoration-none"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="contact-item d-flex align-items-center gap-3 p-3 rounded-3">
                  <div className="contact-icon-wrapper contact-action">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-info">
                    <span className="contact-label d-block small text-muted">
                      {language === "ar" ? "الموقع" : "Location"}
                    </span>
                    <span className="contact-value">
                      {contactInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="social-links mt-4">
                <h4 className="social-title mb-3">
                  {language === "ar" ? "تابعني على" : "Follow Me On"}
                </h4>
                <div className="d-flex gap-2">
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link github"
                    title="GitHub"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link linkedin"
                    title="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href={contactInfo.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link whatsapp"
                    title="WhatsApp"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
