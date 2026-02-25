import { motion } from 'framer-motion';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Full Stack Intern',
      company: 'Daxido',
      period: 'Present',
      description: 'Developing high-performance applications with modern tech stacks.',
      details: [
        'Responsive interface development',
        'Real-world deployment workflows',
        'Production-level best practices'
      ]
    },
    {
      id: 2,
      title: 'Software Intern',
      company: 'Mantle Solutions',
      period: 'May – June 2024',
      description: 'Focused on performance optimization and Agile feature delivery.',
      details: [
        'Developed 3+ responsive web modules (HTML/CSS/JS)',
        'Improved client site load time by 20%',
        'Collaborated in Agile sprints for 100% on-time delivery',
        'Assisted in translating 5+ business requirements'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="experience-header">
          <h2 className="section-title">Career Milestones</h2>
        </div>

        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="experience-block"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="experience-box interactive">
                <div className="experience-meta">
                  <span className="experience-period">{exp.period}</span>
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-company">@ {exp.company}</p>
                </div>
                <div className="experience-body">
                  <p className="experience-desc">{exp.description}</p>
                  <div className="experience-pills">
                    {exp.details.map((detail, i) => (
                      <span key={i} className="exp-pill">{detail}</span>
                    ))}
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

export default Experience;
