import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import '../styles/Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      name: 'Data Analysis Essentials',
      issuer: 'Microsoft & LinkedIn',
      year: '2024',
    },
    {
      id: 2,
      name: 'Python for Data Science & ML',
      issuer: 'Udemy',
      year: '2024',
    },
    {
      id: 3,
      name: 'Power BI Visualization',
      issuer: 'Great Learning',
      year: '2023',
    },
    {
      id: 4,
      name: 'E-Business Expert',
      issuer: 'SWAYAM',
      year: '2023',
    },
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <motion.div
          className="cert-header"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Certifications</h2>
        </motion.div>

        <div className="cert-list">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="cert-row"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="cert-index">{String(index + 1).padStart(2, '0')}</span>

              <div className="cert-row-icon">
                <BadgeCheck size={16} />
              </div>

              <div className="cert-row-body">
                <span className="cert-row-name">{cert.name}</span>
                <span className="cert-row-issuer">{cert.issuer}</span>
              </div>

              <span className="cert-row-year">{cert.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
