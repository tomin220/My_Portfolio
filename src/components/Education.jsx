import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import '../styles/Education.css';

const Education = () => {
    const educationData = [
        {
            id: 1,
            institution: 'Christ (Deemed to be University), Bangalore',
            degree: 'Bachelor of Science in Computer Science and Statistics',
            period: '2023 – 2026',
            details: 'Aggregate: 67.72%',
        },
        {
            id: 2,
            institution: 'SFS Public School & Junior College, Kerala',
            degree: 'Class XII (PCMC)',
            period: '2021 – 2023',
            details: 'Percentage: 91.4%',
        },
        {
            id: 3,
            institution: 'Mary Mount Public School, Kerala',
            degree: 'Class X',
            period: '2015 – 2021',
            details: 'Percentage: 92.8%',
        },
    ];

    return (
        <section id="education" className="education">
            <div className="container">
                <motion.div
                    className="education-header"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Academic Background</h2>
                </motion.div>

                <div className="education-timeline">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            className="education-item"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="edu-icon-wrap">
                                <GraduationCap size={20} />
                            </div>
                            <div className="edu-content">
                                <div className="edu-main">
                                    <h3 className="edu-institution">{edu.institution}</h3>
                                    <span className="edu-period">{edu.period}</span>
                                </div>
                                <p className="edu-degree">{edu.degree}</p>
                                <span className="edu-details">{edu.details}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
