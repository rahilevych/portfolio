import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './Form.module.css';
import { Button } from '../../ui/button/Button';
import { toast } from 'react-toastify';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
        import.meta.env.VITE_EMAILJS_USER_ID,
      )
      .then(
        () => {
          toast.success('Thank you for your message!', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
          setFormData({ name: '', email: '', message: '' });
        },
        () => {
          toast.error('Failed to send message!', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        },
      );
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputs}>
        <div className={styles['form-group']}>
          {' '}
          <label htmlFor='name'>Your Name</label>{' '}
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles['form-group']}>
          {' '}
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles['form-group']}>
        <label htmlFor='message'>Your Message</label>
        <textarea
          name='message'
          value={formData.message}
          onChange={handleChange}
          required
          className={styles.textarea}
        />
      </div>

      <Button className={styles.button} type='submit'>
        {' '}
        Send Message
      </Button>

      {status && <p>{status}</p>}
    </form>
  );
};

export default Form;
