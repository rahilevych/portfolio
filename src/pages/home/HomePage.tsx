import { Element } from 'react-scroll';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Projects from '../../components/Projects/Projects';

import styles from './HomePage.module.css';
import Social from '../../components/Social/Social';
import { Nav } from '../../components/Nav/Nav';
import { Description } from '../../components/description/Description';
import { Skills } from '../../components/Skills/Skills';
import { useIsMobile } from '../../hooks/useIsMobile';
export const HomePage = () => {
  const isMobile = useIsMobile();
  return (
    <div className={styles.container}>
      {isMobile ? (
        <></>
      ) : (
        <aside className={styles.sidebar}>
          <Description />
          <Nav />
          <Social />
        </aside>
      )}

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
