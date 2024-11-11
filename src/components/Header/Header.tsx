import styles from './Header.module.css';
import Nav from '../Nav/Nav';
import Social from '../Social/Social';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Nav />
        <div className={styles.title}>
          <h1 className={styles.h1}>Alona Rahilevych</h1>
          <p className={styles.p}>Full-Stack Web Developer</p>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Header;
