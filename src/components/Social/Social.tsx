import React from 'react';
import github from '../../assets/svg/github.svg';
import linkedin from '../../assets/svg/linkedin.svg';
import styles from './Social.module.css';
function Social() {
  return (
    <li className={styles.list}>
      <ul>
        <a href='https://github.com/rahilevych'>
          <img src={github} alt='' />
        </a>
      </ul>
      <ul>
        <a href='https://www.linkedin.com/in/alona-rahilevych/'>
          {' '}
          <img src={linkedin} alt='' />
        </a>
      </ul>
    </li>
  );
}

export default Social;
