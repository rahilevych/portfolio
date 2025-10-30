import { useState, useEffect } from 'react';
import styles from './Cursor.module.css';

export default function Cursor() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={styles.cursor} style={{ left: coords.x, top: coords.y }} />
  );
}
