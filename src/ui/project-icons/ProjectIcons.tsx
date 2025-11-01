import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ProjectIcons.module.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
interface ProjectIconsProps {
  live: string;
  github: string;
  className?: string;
}
export const ProjectIcons = ({
  live,
  github,
  className,
}: ProjectIconsProps) => {
  return (
    <div className={`${styles.links}`}>
      <a href={github} target='_blank'>
        <FontAwesomeIcon icon={faGithub} className={className} />
      </a>
      <a href={live} target='_blank'>
        <FontAwesomeIcon icon={faGlobe} className={className} />
      </a>
    </div>
  );
};
