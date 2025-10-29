import styles from './Social.module.css';
import { socials } from '../../constants/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Social() {
  return (
    <ul className={styles.list}>
      {socials.map((icon) => (
        <li>
          {' '}
          <a href={icon.link} className={styles.link} target='_blank'>
            <FontAwesomeIcon icon={icon.icon} className={styles.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Social;
