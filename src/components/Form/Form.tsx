import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './Form.module.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target as HTMLFormElement,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        () => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        () => {
          setStatus('Failed to send message');
        }
      );
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type='text'
        name='name'
        placeholder='Name'
        value={formData.name}
        onChange={handleChange}
        required
        className={styles.input}
      />
      <input
        type='email'
        name='email'
        placeholder='Email'
        value={formData.email}
        onChange={handleChange}
        required
        className={styles.input}
      />
      <textarea
        name='message'
        placeholder='Message'
        value={formData.message}
        onChange={handleChange}
        required
        className={styles.textarea}
      />
      <button type='submit' className={styles.button}>
        Send Message
      </button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default Form;
