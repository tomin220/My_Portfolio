import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import '../styles/Projects.css';

const Projects = () => {
  const cyclingPhrases = ['What I Build', 'Problems I Solve', 'Ideas I Ship', 'Code I Craft'];
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % cyclingPhrases.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);
  const projects = [
    {
      id: 1,
      name: 'Kerala Floods — Statistical Study',
      subtitle: 'on Change, Resilience & Preparedness',
      description: 'A statistical research project analyzing community preparedness and resilience strategies following the Kerala floods.',
      bullets: [
        'Analyzed 200+ survey responses using Chi-square, Logistic Regression, and ANOVA to evaluate community trust.',
        'Designed a Preparedness Index integrating behavioral, infrastructural, and policy indicators.',
        'Generated data-driven insights and policy recommendations to strengthen disaster management frameworks.',
      ],
      technologies: ['R', 'Statistics', 'Regression', 'ANOVA'],
      github: 'https://github.com/tomin220',
      demo: '',
      accent: '#818cf8',
      image: 'https://images.unsplash.com/photo-1547032175-7fc8c7bd15b3?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 2,
      name: 'Bank Management System',
      subtitle: 'Mobile Application',
      description: 'A mobile banking application supporting core operations such as account creation, deposits, withdrawals, and balance inquiry.',
      bullets: [
        'Built a mobile app handling 4+ core banking operations with a seamless customer experience.',
        'Designed 6+ user interface screens, resulting in 30% faster navigation.',
        'Applied OOP principles to manage modular functionality, improving code reusability by 25%.',
      ],
      technologies: ['Kotlin', 'Android', 'OOP', 'UI Design'],
      github: 'https://github.com/tomin220',
      demo: '',
      accent: '#22d3ee',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 3,
      name: 'Property Landing Page',
      subtitle: 'Real Estate Web App',
      description: 'A modern real estate landing page built with React and Vite, focusing on responsive layout, performance, and clean UI design.',
      bullets: [
        'Built modular component architecture with React and Vite for fast performance.',
        'Connected backend to Supabase to handle real-time enquiry submissions.',
        'Implemented responsive layout with modern glassmorphic UI design.',
      ],
      technologies: ['React', 'Vite', 'Supabase', 'CSS'],
      github: 'https://github.com/tomin220',
      demo: '',
      accent: '#4ea000',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="projects-heading-wrap">
            <span className="projects-heading-prefix">— </span>
            <div className="projects-heading-cycling">
              <AnimatePresence mode="wait">
                <motion.span
                  key={phraseIndex}
                  className="projects-heading-word"
                  initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(6px)' }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  {cyclingPhrases[phraseIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ '--card-accent': project.accent }}
            >
              {/* Image Strip */}
              <div className="project-image-container">
                <img src={project.image} alt={project.name} className="project-image" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-icon-link" title="GitHub">
                      <Github size={18} />
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-icon-link" title="Live Demo">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="project-info">
                <div className="project-meta">
                  <h3 className="project-name">{project.name}</h3>
                  {project.subtitle && (
                    <span className="project-subtitle">{project.subtitle}</span>
                  )}
                </div>

                <p className="project-description">{project.description}</p>

                <ul className="project-bullets">
                  {project.bullets.map((point, i) => (
                    <li key={i} className="project-bullet">{point}</li>
                  ))}
                </ul>

                <div className="project-footer">
                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links-inline">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-small" title="GitHub">
                      <Github size={17} />
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link-small" title="Live Demo">
                        <ExternalLink size={17} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
