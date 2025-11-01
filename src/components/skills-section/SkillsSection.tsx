import { SkillItem } from '../../constants/skills';
import { SkillCard } from '../../ui/skill-card/SkillCard';
import styles from './SkillsSection.module.css';
export const SkillSection = ({
  title,
  items,
}: {
  title: string;
  items: SkillItem[];
}) => (
  <div className={styles.category}>
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.grid}>
      {items.map((skill) => (
        <SkillCard key={skill.name} icon={skill.icon} name={skill.name} />
      ))}
    </div>
  </div>
);
