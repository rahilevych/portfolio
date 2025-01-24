import { useState } from 'react';
import styles from './Nav.module.css';
function Nav() {
  const [activeLink, setActiveLink] = useState('#home');

  const handleLinkClick = (id: string) => {
    setActiveLink(id);
  };

  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <div className={styles.navbar}>
          <li className={styles.list}>
            <ul>
              <a
                href='#home'
                className={`${styles.link} ${
                  activeLink === '#home' ? styles.active : ''
                }`}
                onClick={() => handleLinkClick('#home')}>
                Home
              </a>
            </ul>
            <ul>
              <a
                href='#about'
                className={`${styles.link} ${
                  activeLink === '#about' ? styles.active : ''
                }`}
                onClick={() => handleLinkClick('#about')}>
                About
              </a>
            </ul>
            <ul>
              <a
                href='#skills'
                className={`${styles.link} ${
                  activeLink === '#skills' ? styles.active : ''
                }`}
                onClick={() => {
                  handleLinkClick('#skills');
                }}>
                Skills
              </a>
            </ul>
            <ul>
              {' '}
              <a
                href='#projects'
                className={`${styles.link} ${
                  activeLink === '#projects' ? styles.active : ''
                }`}
                onClick={() => {
                  handleLinkClick('#projects');
                }}>
                Projects
              </a>{' '}
            </ul>
            <ul>
              {' '}
              <a
                href='#contact'
                className={`${styles.link} ${
                  activeLink === '#contact' ? styles.active : ''
                }`}
                onClick={() => {
                  handleLinkClick('#contact');
                }}>
                Contact
              </a>{' '}
            </ul>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Nav;
