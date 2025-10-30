import { ReactElement } from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiNpm,
  SiVercel,
  SiRender,
} from 'react-icons/si';

export interface SkillItem {
  icon: ReactElement;
  name: string;
}

export const frontendSkills: SkillItem[] = [
  { icon: <SiHtml5 />, name: 'HTML5' },
  { icon: <SiCss3 />, name: 'CSS3' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
  { icon: <SiJavascript />, name: 'JavaScript' },
  { icon: <SiTypescript />, name: 'TypeScript' },
  { icon: <SiReact />, name: 'React' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
];

export const backendSkills: SkillItem[] = [
  { icon: <SiNodedotjs />, name: 'Node.js' },
  { icon: <SiExpress />, name: 'Express.js' },
  { icon: <SiNestjs />, name: 'Nest.js' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <SiPostgresql />, name: 'PostgreSQL' },
];

export const toolsSkills: SkillItem[] = [
  { icon: <SiGit />, name: 'Git' },
  { icon: <SiGithub />, name: 'GitHub' },
  { icon: <SiNpm />, name: 'NPM' },
  { icon: <SiVercel />, name: 'Vercel' },
  { icon: <SiRender />, name: 'Render' },
];
