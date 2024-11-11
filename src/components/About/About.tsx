import styles from './About.module.css';
import photo from '../../assets/img/about.jpg';

const About = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.about}>
          {' '}
          <div className={styles.photo}>
            <div className={styles.img}>
              {' '}
              <img src={photo} alt='' />
            </div>
          </div>
          <div className={styles.description}>
            <h2>About Me</h2>
            <div className={styles.text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              eum, est repellat mollitia molestias vero natus hic rerum rem id
              exercitationem veniam libero enim, consectetur atque iusto nam
              similique dolorum!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
