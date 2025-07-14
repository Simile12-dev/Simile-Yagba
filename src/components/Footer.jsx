import '../styles/Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="scroll-top" onClick={scrollToTop}>
        <i className="bi bi-caret-up-fill"></i>
      </div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>SIMILE.</h2>
            <p>Frontend Developer</p>
          </div>
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} Simile Gift Yagba. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;