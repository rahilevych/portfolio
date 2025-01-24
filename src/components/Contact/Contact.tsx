import styles from './Contact.module.css';
import Form from '../Form/Form';

function Contact() {
  return (
    <div className={styles.wrapper} id='contact'>
      <div className='container'>
        <div className={styles.contact}>
          <h2>Get in Touch</h2>
          <div className={styles.contact_block}>
            <div className={styles.text}>
              Drop me a line. <br /> I would like to hear from you.
            </div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
