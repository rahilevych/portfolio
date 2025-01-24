import styles from './Skills.module.css';
import {
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
const Skills = () => {
  const skills = [
    { icon: <SiJavascript color='#F7DF1E' />, name: 'JavaScript' },
    { icon: <SiTypescript color='#3178C6' />, name: 'TypeScript' },
    { icon: <SiReact color='#61DAFB' />, name: 'React' },
    { icon: <SiNextdotjs color='white' />, name: 'Next.js' },
    { icon: <SiNodedotjs color='#8CC84B' />, name: 'Node.js' },
    { icon: <SiExpress color='white' />, name: 'Express.js' },
    { icon: <SiHtml5 color='#E34F26' />, name: 'HTML5' },
    { icon: <SiCss3 color='#1572B6' />, name: 'CSS3' },
    { icon: <SiMongodb color='#47A248' />, name: 'MongoDB' },
    { icon: <SiGit color='#F05032' />, name: 'Git' },
    { icon: <SiGithub color='white' />, name: 'GitHub' },
    { icon: <SiTailwindcss color='#06B6D4' />, name: 'Tailwind CSS' },
    { icon: <SiNpm color='#CB3837' />, name: 'NPM' },
  ];
  return (
    <div className={styles.wrapper} id='skills'>
      <div className='container'>
        <div className={styles.skills}>
          <h2>Skills</h2>
          <div className={styles.skills_grid}>
            {skills.map((skill, index) => (
              <div className={styles.skill_card} key={index}>
                {skill.icon}
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
