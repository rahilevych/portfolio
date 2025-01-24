import styles from './Header.module.css';

import Social from '../Social/Social';

const Header = () => {
  return (
    <div className={styles.wrapper} id='home'>
      <div className='container'>
        <div className={styles.header}>
          <h1>Alona Rahilevych</h1>
          <p className={styles.p}>Full-Stack Web Developer</p>
          <a
            href='/docs/lebenslauf.pdf'
            download
            className={styles.downloadButton}>
            Download CV
          </a>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Header;
