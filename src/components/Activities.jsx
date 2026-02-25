import { motion } from 'framer-motion';
import { Award, Users, Trophy } from 'lucide-react';
import '../styles/Activities.css';

const Activities = () => {
    const activities = [
        {
            id: 1,
            title: 'Event Coordinator',
            organization: 'Indo-Korean Cultural Exchange',
            description: 'Led logistics and vendor coordination for inter-cultural events, ensuring smooth operations and participant engagement.',
            icon: <Users size={20} />
        },
        {
            id: 2,
            title: 'Logistics Coordinator',
            organization: 'Blossoms (Intradeanery Culturals)',
            description: 'Coordinated logistics for 3+ events and assisted in tech workshops for over 100+ student participants.',
            icon: <Award size={20} />
        },
        {
            id: 3,
            title: 'Department Representative',
            organization: 'Pedagogic League',
            description: 'Represented the department in Football and Table Tennis, demonstrating strong leadership and teamwork skills.',
            icon: <Trophy size={20} />
        }
    ];

    return (
        <section id="activities" className="activities">
            <div className="container">
                <motion.div
                    className="activities-header"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Leadership & Activities</h2>
                </motion.div>

                <div className="activities-grid">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={activity.id}
                            className="activity-card interactive-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="activity-icon-box">
                                {activity.icon}
                            </div>
                            <div className="activity-content">
                                <h3 className="activity-title">{activity.title}</h3>
                                <p className="activity-org">{activity.organization}</p>
                                <p className="activity-desc">{activity.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Activities;
