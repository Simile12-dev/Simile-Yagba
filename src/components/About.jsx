import React, { useEffect, useRef } from 'react';
import '../styles/About.css';

const About = () => {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const elements = [titleRef.current, imageRef.current, textRef.current];
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <h2 className="section-title fade-up" ref={titleRef}>About <span>Me</span></h2>
        <div className="about-content">
          <div className="about-image fade-up" ref={imageRef}>
            <img src="./assets/images/simile.jpg" alt="" />
          </div>
          <div className="about-text fade-up" ref={textRef}>
            <h3>Frontend Developer based in Nigeria</h3>
            <p>
              Hello! I'm Simile Gift Yagba, a passionate Frontend Developer with expertise in creating responsive and user-friendly web applications. I enjoy turning complex problems into simple, beautiful and intuitive designs.
            </p>
            <p>
              My main area of expertise is frontend development, building small to medium web applications, custom plugins, features, animations, and coding interactive layouts. I also have experience working with backend technologies.
            </p>
            <p>
              I'm always striving to improve my skills and stay up-to-date with the latest technologies in web development. I believe in writing clean, efficient, and maintainable code.
            </p>
            <div className="about-info">
              <div className="info-item">
                <span className="info-title">Name:</span>
                <span className="info-value">Simile Gift Yagba</span>
              </div>
              <div className="info-item">
                <span className="info-title">Email:</span>
                <span className="info-value">Simile.gift1234@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-title">Location:</span>
                <span className="info-value">Lagos, Nigeria</span>
              </div>
              <div className="info-item">
                <span className="info-title">Experience:</span>
                <span className="info-value">3 Years</span>
              </div>
            </div>
            <div className="about-buttons">
              <a href="./YAGBA SIMILE.pdf" download className="btn">Download CV</a>
              <a href="mailto:Simile.gift1234@gmail.com" className="btn secondary-btn">Hire Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;