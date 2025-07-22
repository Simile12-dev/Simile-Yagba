import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>
        <div className="about-content">
          <div className="about-image">
            <img src="./assets/images/simile.jpg" alt="" />
          </div>
          <div className="about-text">
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