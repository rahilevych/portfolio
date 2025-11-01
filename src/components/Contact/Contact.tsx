import Form from '../Form/Form';
import { Title } from '../../ui/title/Title';
import styles from './Contact.module.css';
function Contact() {
  return (
    <section className={`section ${styles.contact}`}>
      <Title text='Contact' />
      <p className={styles.title}>
        Got a question or porposal, or just want to say hello? Go ahead.
      </p>
      <Form />
    </section>
  );
}

export default Contact;
