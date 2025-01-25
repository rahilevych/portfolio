import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Project } from '../../types/Project';
import styles from './ProjectComponent.module.css';
import IconComponent from '../IconComponent/IconComponent';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
import { useEffect, useState } from 'react';

interface Props {
  project: Project;
}
function ProjectComponent(props: Props) {
  const [isOpened, setIsOpened] = useState(false);

  const handleCardClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className={styles.card}>
      {isOpened ? (
        <div className={styles.opened}>
          <button
            onClick={() => {
              handleCardClick();
            }}>
            X
          </button>
          <div className={styles.full_card}>
            <img src={props.project.img} alt='' />
            <h3 className={styles.h3}>{props.project.title}</h3>
            <div className={styles.desc}>{props.project.desc}</div>
            <div className={styles.technologies}>
              {props.project.technologies.map((tech) => (
                <div className={styles.tech}>{tech}</div>
              ))}
            </div>
            <div className={styles.links}>
              <IconComponent icon={faGithub} link={props.project.git} />
              <IconComponent icon={faGlobe} link={props.project.link} />
            </div>
          </div>
        </div>
      ) : (
        <div
          className={styles.closed}
          onClick={() => {
            handleCardClick();
          }}>
          <h3 className={styles.h3}>{props.project.title}</h3>
          <span className={styles.tooltip}>Click to learn more</span>
        </div>
      )}
    </div>
  );
}

export default ProjectComponent;
