import styles from './Projects.module.css';
import { Title } from '../../ui/title/Title';
import { projects } from '../../constants/projects';
import { ProjectCard } from '../project-card/ProjectCard';

function Projects() {
  return (
    <section className={`section ${styles.projects}`}>
      <Title text='Projects' />
      <ul className={styles.list}>
        {projects.map((project, index) => (
          <li key={index}>
            {' '}
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
