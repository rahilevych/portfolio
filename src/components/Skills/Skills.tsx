import {
  backendSkills,
  frontendSkills,
  toolsSkills,
} from '../../constants/skills';
import { Title } from '../../ui/title/Title';
import { SkillSection } from '../skills-section/SkillsSection';
import styles from './Skills.module.css';

export const Skills = () => {
  return (
    <section className={`section ${styles.skills}`}>
      <Title text='Skills' />
      <SkillSection title='Frontend' items={frontendSkills} />
      <SkillSection title='Backend' items={backendSkills} />
      <SkillSection title='Tools & Deployment' items={toolsSkills} />
    </section>
  );
};
