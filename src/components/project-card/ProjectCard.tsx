import { Project } from '../../constants/projects';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';
import { ProjectIcons } from '../../ui/project-icons/ProjectIcons';

interface ProjectCardProps {
  project: Project;
}
export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ scale: 1.05, boxShadow: '0 0 12px rgba(66,224,208,0.4)' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.img}>
        <img src={project.img} alt='' />
      </div>
      <div className={styles.info}>
        <div className={styles['card-header']}>
          <h3>{project.title}</h3>
          <ProjectIcons
            className={styles.icon}
            live={project.link}
            github={project.git}
          />
        </div>

        <p>{project.desc}</p>
        <ul className={styles.tech}>
          {project.technologies.map((technology, index) => (
            <li key={index}>{technology}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
