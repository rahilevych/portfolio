import styles from './Contact.module.css';
import Form from '../Form/Form';

function Contact() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>Get in Touch</h2>
        <div className={styles.contact}>
          <div className={styles.text}>
            Drop me a line. <br /> I would like to hear from you.
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Contact;
