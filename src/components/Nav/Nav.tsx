import styles from './Nav.module.css';
function Nav() {
  return (
    <div className={styles.navbar}>
      <li className={styles.list}>
        <ul>Home</ul>
        <ul>About</ul>
        <ul>Skills</ul>
        <ul>Projects</ul>
        <ul>Contact</ul>
      </li>
    </div>
  );
}

export default Nav;
