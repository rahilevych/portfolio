import { Element } from 'react-scroll';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Projects from '../../components/Projects/Projects';
import Skills from '../../components/Skills/Skills';
import styles from './HomePage.module.css';
import Social from '../../components/Social/Social';
import { Nav } from '../../components/nav/Nav';
import { Description } from '../../components/description/Description';
export const HomePage = () => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <Description />
        <Nav />
        <Social />
      </aside>
      <main className={styles.main}>
        <Element name='about' className={styles.section}>
          <About />
        </Element>
        <Element name='skills' className={styles.section}>
          <Skills />
        </Element>
        <Element name='projects' className={styles.section}>
          <Projects />
        </Element>
        <Element name='contact' className={styles.section}>
          <Contact />
        </Element>
      </main>
    </div>
  );
};
