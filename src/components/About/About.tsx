import styles from './About.module.css';
import photo from '../../assets/img/alonafo.jpg';
import { Title } from '../../ui/title/Title';
import { aboutParagraphs } from '../../constants/constants';

const About = () => {
  return (
    <section className='section'>
      <Title text='About Me' />
      <div className={styles.info}>
        <div className={styles.photo}>
          <img src={photo} alt='About' />
        </div>
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
