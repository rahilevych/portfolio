import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import styles from './Social.module.css';

import IconComponent from '../IconComponent/IconComponent';
function Social() {
  return (
    <li className={styles.list}>
      <ul>
        <IconComponent
          icon={faGithubAlt}
          link='https://github.com/rahilevych'
        />
      </ul>
      <ul>
        <IconComponent
          icon={faLinkedinIn}
          link='https://www.linkedin.com/in/alona-rahilevych/'
        />
      </ul>
    </li>
  );
}

export default Social;
