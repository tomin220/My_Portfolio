import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="moving-border-container">
              <motion.div
                className="moving-border"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <div className="about-visual-card">
                <div className="visual-content">
                  <span className="visual-text">Full Stack Dev</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="about-info">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title left">My Story</h2>
              <div className="about-narrative">
                <p>
                  I&apos;m a Full-Stack Developer who loves building software that makes an impact.
                  Currently finishing my degree at <span className="text-highlight">Christ University, Bangalore</span>,
                  I focus on creating clean, efficient, and user-friendly applications.
                </p>
                <p>
                  My background in <span className="text-secondary">Computer Science and Statistics </span>
                  gives me a unique perspective on problem-solving. I don&apos;t just build
                  features; I think about how data flows through a system to make it
                  smarter and more reliable.
                </p>
                <p>
                  I enjoy working across the entire stack—from architecting backends to
                  fine-tuning frontend interactions. My goal is always the same:
                  to deliver high-quality code and a great user experience.
                </p>
              </div>

              <div className="personal-stats">
                <div className="stat-item">
                  <span className="stat-label">Role</span>
                  <span className="stat-value">Full Stack Dev</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Main Stack</span>
                  <span className="stat-value">React, Node, Python</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Added Value</span>
                  <span className="stat-value">Data-Driven Logic</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
