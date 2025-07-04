import styles from './Projects.module.css';

import ProjectComponent from '../Project/ProjectComponent';
import { projects } from '../../constants/projects';

function Projects() {
  return (
    <div className='wrapper' id='projects'>
      <div className='container'>
        <div className={styles.projects}>
          <h2>Projects</h2>
          <div className={styles.projects_grid}>
            {projects.map((project, index) => (
              <ProjectComponent project={project} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
