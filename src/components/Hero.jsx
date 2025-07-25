import { useEffect, useState } from 'react';
import '../styles/Hero.css';

const Hero = () => {
   const [displayedName, setDisplayedName] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullName = 'Mosimileoluwa Gift Yagba';
  
  useEffect(() => {
    let currentIndex = 0;
    
    const typeWriter = () => {
      if (currentIndex < fullName.length) {
        setDisplayedName(fullName.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeWriter, 100);
      } else {
        setIsTyping(false); 
      }
    };
    
    // Start typing after a small delay
    const timer = setTimeout(typeWriter, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
            Hi, I am <span className="typewriter">
            {displayedName}
            {isTyping && <span className="cursor">|</span>}
          </span>
        </h1>
            <h2>Frontend Developer</h2>
            <p>I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn primary-btn">Contact Me</a>
              <a href="#projects" className="btn secondary-btn">Projects</a>
            </div>
          </div>
          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/simile-gift-71b71220a" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://wa.me/+2349038906319" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            { <img src="./assets/images/sims.jpg" alt="" />}
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;