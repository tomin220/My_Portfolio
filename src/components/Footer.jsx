import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-bio">
            Passionate about building scalable applications and solving real-world problems through technology and analytics.
          </p>
          <div className="social-links">
            <a href="https://github.com/tomin220" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/tomin-biju/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="mailto:tominbiju10@gmail.com" aria-label="Email">
              Email
            </a>
          </div>
          <p className="copyright">
            © {currentYear} Tomin Biju. Built with React + Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
