import styles from './About.module.css';
import photo from '../../assets/img/alonafo.jpg';
import { Title } from '../../ui/title/Title';
import { aboutParagraphs } from '../../constants/constants';
import { useIsMobile } from '../../hooks/useIsMobile';
import { Description } from '../description/Description';
import Social from '../Social/Social';

const About = () => {
  const isMobile = useIsMobile();
  return (
    <section className='section'>
      {isMobile ? (
        <div className={styles.mobile}>
          {' '}
          <Description />
          <Social />
        </div>
      ) : (
        <></>
      )}
      <Title text='About Me' />
      <div className={styles.info}>
        {isMobile ? (
          <></>
        ) : (
          <div className={styles.photo}>
            <img src={photo} alt='About' />
          </div>
        )}

        <div className={styles.text}>
          {' '}
          {aboutParagraphs.map((paragraph, index) => (
            <div key={index}>
              {' '}
              <p>{paragraph}</p>
              <br />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
