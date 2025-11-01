import React from 'react';
import { motion } from 'framer-motion';
import styles from './SkillCard.module.css';

interface SkillProps {
  icon: React.ReactElement;
  name: string;
}

export const SkillCard = ({ icon, name }: SkillProps) => {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ scale: 1.05, boxShadow: '0 0 12px rgba(66,224,208,0.4)' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
    >
      <span className={styles.icon}>{icon}</span>
      <p>{name}</p>
    </motion.div>
  );
};
