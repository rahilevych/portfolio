import { Link } from 'react-scroll';
import { linksList } from '../../constants/constants';
import styles from './Nav.module.css';

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {' '}
        {linksList.map((link, index) => (
          <li key={index}>
            {' '}
            <Link
              to={link.navigateTo}
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
              activeClass={styles.active}
            >
              <span className={styles.line}></span>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
