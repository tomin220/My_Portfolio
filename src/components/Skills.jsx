import { motion } from 'framer-motion';
import {
  Code2,
  Globe,
  BarChart3,
  Wrench,
  Cpu
} from 'lucide-react';
import '../styles/Skills.css';

const Skills = () => {
  const skillsData = [
    {
      category: 'Frontend',
      icon: <Globe size={20} />,
      items: ['React.js', 'HTML5', 'CSS3', 'Framer Motion', 'Responsive Design'],
    },
    {
      category: 'Languages',
      icon: <Code2 size={20} />,
      items: ['JavaScript', 'Python', 'SQL', 'Java', 'Kotlin', 'PHP', 'R'],
    },
    {
      category: 'Backend',
      icon: <Cpu size={20} />,
      items: ['Node.js', 'DBMS', 'REST APIs', 'Postman', 'SDLC'],
    },
    {
      category: 'Dev Tools',
      icon: <Wrench size={20} />,
      items: ['Git', 'GitHub', 'Vite', 'VS Code', 'Docker'],
    },
    {
      category: 'Analytics',
      icon: <BarChart3 size={20} />,
      items: ['Statistical Modelling', 'Regression', 'Power BI', 'Tableau', 'Excel'],
    },
    {
      category: 'Professional',
      icon: <Code2 size={20} />,
      items: ['Analytical Thinking', 'Problem Solving', 'Leadership', 'Collaboration'],
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">A collection of tools and technologies I use to bring ideas to life.</p>
        </motion.div>

        <div className="bento-grid">
          {skillsData.map((data, index) => (
            <motion.div
              key={data.category}
              className="bento-item"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
              }}
            >
              <div className="bento-glow" />
              <div className="bento-content">
                <div className="bento-header">
                  <span className="bento-icon">{data.icon}</span>
                  <h3 className="bento-title">{data.category}</h3>
                </div>
                <div className="bento-items">
                  {data.items.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
