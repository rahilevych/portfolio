import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './IconComponent.module.css';
interface Props {
  link: string;
  icon: any;
}

const IconComponent = (props: Props) => {
  return (
    <a href={props.link} className={styles.link} target='_blank'>
      <FontAwesomeIcon icon={props.icon} className={styles.icon} />
    </a>
  );
};

export default IconComponent;
