import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // 3D Tilt State
  const rotateX = useSpring(useTransform(mouseY, [0, 800], [10, -10]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [0, 800], [-10, 10]), { stiffness: 100, damping: 30 });

  // Role Switcher State
  const roles = ["Full Stack Developer", "Software Engineer", "Problem Solver", "Product Specialist"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(roleTimer);
    };
  }, [roles.length]);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    mouseX.set(x);
    mouseY.set(y);
  }

  const spotlightX = useTransform(mouseX, [0, windowSize.width || 1200], ['0%', '100%']);
  const spotlightY = useTransform(mouseY, [0, windowSize.height || 800], ['0%', '100%']);

  const nameChars = "Tomin Biju".split("");

  return (
    <section id="home" className="hero" onMouseMove={handleMouseMove}>
      <motion.div
        className="hero-spotlight"
        style={{
          background: `radial-gradient(800px circle at ${spotlightX} ${spotlightY}, rgba(34, 211, 238, 0.06), transparent 80%)`
        }}
      />

      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                Available for opportunities
              </div>

              <p className="hero-intro">Hi there, I&apos;m</p>
              <h1 className="hero-title">
                <div className="hero-name-container" style={{ marginBottom: '0.25rem' }}>
                  {nameChars.map((char, i) => (
                    <motion.span
                      key={i}
                      className="hero-name-char"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.04,
                        ease: [0.2, 0.65, 0.3, 0.9]
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </div>
                <span className="hero-role">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={roleIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="text-accent"
                    >
                      {roles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I build fast, responsive, and user-centric web applications,
              turning complex problems into clean, functional <span className="text-secondary">software solutions</span>.
            </motion.p>

            <motion.div
              className="hero-trust-signal"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <span className="signal-item">📍 Bangalore, India</span>
            </motion.div>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button className="btn btn-primary interactive" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View My Projects <span className="arrow">→</span>
              </button>
              <button className="btn btn-secondary interactive" onClick={() => window.open('/Tomin_Resume.pdf', '_blank')}>
                Download Resume
              </button>
            </motion.div>

            <motion.div
              className="hero-expertise-grouped"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className="expertise-row">
                <span className="expertise-label">Core Stack</span>
                <div className="expertise-tags">
                  <span className="tag">React</span>
                  <span className="tag-dot">•</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag-dot">•</span>
                  <span className="tag">Node.js</span>
                  <span className="tag-dot">•</span>
                  <span className="tag">Python</span>
                  <span className="tag-dot">•</span>
                  <span className="tag">SQL</span>
                  <span className="tag-dot">•</span>
                  <span className="tag">PHP</span>
                </div>
              </div>
              <div className="expertise-row">
                <span className="expertise-label">Frontend & UI</span>
                <div className="expertise-tags">
                  <span className="tag">HTML5</span>
                  <span className="tag-dot">•</span>
                  <span className="tag">CSS3</span>
                  <span className="tag-dot">•</span>
                  <span className="tag">Framer Motion</span>
                  <span className="tag-dot">•</span>
                  <span className="tag">Responsive</span>
                </div>
              </div>
              <div className="expertise-row">
                <span className="expertise-label">Backend & Tools</span>
                <div className="expertise-tags">
                  <span className="tag">Git</span>
                  <span className="tag-dot">•</span>
                  <span className="tag">DBMS</span>
                  <span className="tag-dot">•</span>
                  <span className="tag">REST APIs</span>
                  <span className="tag-dot">•</span>
                  <span className="tag">Vite</span>
                </div>
              </div>
              <div className="expertise-row">
                <span className="expertise-label">Data & Analytics</span>
                <div className="expertise-tags">
                  <span className="tag">Power BI</span>
                  <span className="tag-dot">•</span>
                  <span className="tag">Tableau</span>
                  <span className="tag-dot">•</span>
                  <span className="tag">R</span>
                  <span className="tag-dot">•</span>
                  <span className="tag">Excel</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="visual-outer">
              <motion.div
                className="rotating-text-circle"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                  <defs>
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                  </defs>
                  <text fill="var(--color-accent-green)" fontSize="5.5" fontWeight="bold">
                    <textPath href="#circlePath" startOffset="0%">
                      Frontend • Backend • UI/UX • FullStack • Frontend • Backend • UI/UX • FullStack •
                    </textPath>
                  </text>
                </svg>
              </motion.div>
              <motion.div
                className="portrait-wrapper"
                style={{ rotateX, rotateY, perspective: 1000 }}
              >
                <img
                  src="/images/linkedin.jpeg"
                  alt="Tomin Biju - Full Stack Developer"
                  className="profile-image"
                />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      >
        <span className="scroll-text">Scroll to explore</span>
        <span className="scroll-icon">↓</span>
      </motion.div>
    </section >
  );
};


export default Hero;

