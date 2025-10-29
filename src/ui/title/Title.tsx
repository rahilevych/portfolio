import styles from './Title.module.css';

interface TitleProps {
  text: string;
}
export const Title = ({ text }: TitleProps) => {
  return <h2 className={styles.header}>{text}</h2>;
};
