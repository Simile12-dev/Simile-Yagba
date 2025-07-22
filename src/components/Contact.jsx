import { useState, useRef } from "react";
import "../styles/Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_cm6zdij",
        "template_9kz0rvc",
        formData,
        "p-x1Jx2nW9LGwzi7C"
      )
      .then((response) => {
        setFormStatus({
          submitted: true,
          success: true,
          message: "Your message has been sent successfully.!",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => {
          setFormStatus({
            submitted: false,
            success: false,
            message: "",
          });
        }, 3000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setFormStatus({
          submitted: true,
          success: false,
          message: "Something went wrong. Please try again.",
        });
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">
          Contact <span>Me</span>
        </h2>

        <div className="contact-container">
          <div className="contact-info">
            <div className="info-box">
              <div className="info-icon">
                <i className="bi bi-geo-alt"></i>
              </div>
              <div className="info-content">
                <h3>Location</h3>
                <p>Lagos, Nigeria</p>
              </div>
            </div>

            <div className="info-box">
              <div className="info-icon">
                <i className="bi bi-envelope"></i>
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <p>Simile.gift1234@gmail.com</p>
              </div>
            </div>

            <div className="info-box">
              <div className="info-icon">
                <i className="bi bi-telephone"></i>
              </div>
              <div className="info-content">
                <h3>Phone</h3>
                <p>+2349038906319</p>
              </div>
            </div>

            <div className="contact-socials">
              <h3>Follow Me</h3>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/simile-gift-71b71220a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/that_ugly_gram?igsh=bm1pY2s5a3luZ2p1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form
              className="contact-form"
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn submit-btn">
                Send Message
              </button>

              {formStatus.submitted && (
                <div
                  className={`form-message ${
                    formStatus.success ? "success" : "error"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
