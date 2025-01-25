import styles from './About.module.css';
import photo from '../../assets/img/about.jpg';

const About = () => {
  const about =
    "I'm a Berlin-based full-stack web developer passionate about building modern, user-friendly applications. With a Bachelor's degree in Computer Science and advanced training in Full Stack Web Development with TypeScript from Code Academy Berlin, I specialize in creating scalable, efficient solutions. With knowledge of English, German, Russian, and Ukrainian, I enjoy working in diverse and collaborative teams.";

  return (
    <div className='wrapper' id='about'>
      <div className='container'>
        <div className={styles.about}>
          <h2>About Me</h2>
          <div className={styles.info}>
            <div className={styles.photo}>
              <img src={photo} alt='About' />
            </div>
            <div className={styles.text}>{about}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
