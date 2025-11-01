import styles from './Title.module.css';

interface TitleProps {
  text: string;
  className?: string;
}
export const Title = ({ text, className }: TitleProps) => {
  return <h2 className={`${styles.header} ${className}`}>{text}</h2>;
};
